"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { redirect } from "next/navigation";
import NavBar from "@/components/NavBar/NavBar";
import NavHamburger from "@/components/NavHamburger/NavHamburger";
import Footer from "@/components/Footer/Footer";
import CardPDF from "@/components/CardPDF/CardPDF";
import textes from "../../../../public/data/textes.json";

const Page = ({ params }) => {
  const pathNumber = params.id;
  const couvPath = "/data/MiniatureGazette/Couv" + pathNumber + "petite" + ".jpg";
  const [windowWidth, setWindowWidth] = useState("");
  const textIndex = parseInt(pathNumber) - 1;
  const text = textes.textes[textIndex];

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
  useEffect(() => {
    if (pathNumber >= 1 && pathNumber <= 20) {
      return;
    } else {
      return redirect("/laGazetteDesJardins");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-[1440px] flex flex-col justify-between min-h-screen  bg-white syne">
      {windowWidth < 700 ? <NavHamburger /> : <NavBar />}

      <section className="h-auto px-10 lg:px-0">
        <h1 className="text-3xl 2xl:text-2xl text-green  roboto-bold lg:px-10">La Gazette nº{pathNumber} </h1>

        <div className="flex my-10  items-center px-10 lg:flex-col lg:px-10">
          <p className="w-[50%]   text-lg  bg-[#38363612] py-5 px-10 rounded-lg lg:w-[100%] lg:px-5">{text}</p>

          <div className="w-[50%] flex justify-center lg:mt-10 lg:justify-center lg:w-[100%]">
            <a href={`/data/pdfGazette/Gazette${pathNumber}.pdf`} className=" shadow-lg rounded-md transition  hover:scale-105 hover:shadow-xl">
              <Image src={couvPath} width={270} height={360} alt="couverture de la gazette" />
            </a>
          </div>
        </div>
        <div className="w-[100%] mt-8 flex justify-center lg:mt-10">
          <CardPDF path={pathNumber} />
        </div>
        <div className="flex items-center justify-center mt-8 lg:flex-col">
          {" "}
          <p className="mr-5 text-lg lg:mr-0 lg:mb-5">Vous voulez nous soutenir ?</p>
          <a href="https://www.helloasso.com/associations/les-cochers-solidaires-de-nice/formulaires/2">
            <button className=" text-xl bg-green rounded-md p-3 text-white  hover:bg-greenHover    shadow-lg">Faire un Don !</button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Page;
