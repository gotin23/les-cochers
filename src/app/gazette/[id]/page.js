"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";

import NavBar from "@/components/NavBar/NavBar";
import NavHamburger from "@/components/NavHamburger/NavHamburger";
import Footer from "@/components/Footer/Footer";
import CardPDF from "@/components/CardPDF/CardPDF";
import textes from "../../../../public/data/textes.json";
const Page = () => {
  const pathname = usePathname();
  const pathNumber = pathname.match(/\d+/g);
  const couvPath = "/data/MiniatureGazette/Couv" + pathNumber + "petite" + ".jpg";
  const [windowWidth, setWindowWidth] = useState("");
  const textIndex = parseInt(pathNumber[0]) - 1;
  const text = textes.textes[textIndex];

  console.log(text, textIndex);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="w-[1440px] flex flex-col justify-between min-h-screen  bg-white syne">
      {/* La barre de navigation */}

      {windowWidth > 600 ? <NavBar /> : <NavHamburger />}

      <section className="min-h-[500px] px-10 lg:px-0">
        <h1 className="text-3xl 2xl:text-2xl text-green my-10 roboto-bold lg:px-10">La Gazette nº{pathNumber} </h1>

        <div className="flex my-10  items-center px-10 lg:flex-col lg:px-5">
          <p className="w-[50%]   text-lg  bg-[#38363612] py-5 px-10 rounded-lg lg:w-[100%] lg:px-5">{text}</p>

          <div className="w-[40%] flex justify-end">
            <Image src={couvPath} width={270} height={360} alt="couverture de la gazette" />
          </div>
        </div>
        <div className="flex items-center justify-center my-[80px] lg:flex-col">
          {" "}
          <p className="mr-5 text-xl">Vous voulez nous soutenir ?</p>
          <button className=" text-2xl bg-green rounded-md text-white  hover:bg-greenHover w-[320px] h-[50px]  shadow-lg">Faire un Don !</button>
        </div>
        <h3 className="text-2xl 2xl:text-2xl text-green  mt-10 roboto-bold lg:px-10">Accéder au PDF Gratuitement:</h3>
        <div className="w-[100%] mt-10 flex justify-center">
          <CardPDF path={pathNumber} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Page;
