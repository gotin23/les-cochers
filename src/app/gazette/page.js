"use client";
import Image from "next/image";
import NavBar from "@/components/NavBar/NavBar";
import NavHamburger from "@/components/NavHamburger/NavHamburger";
import Footer from "@/components/Footer/Footer";
import CardPDF from "@/components/CardPDF/CardPDF";
import { useState, useEffect } from "react";
import listPDF from "../../../public/data/pdfGazette/listPDF.json";
import gazetteImage from "../../assets/images/gazette-image.png";

const Gazette = () => {
  console.log(listPDF);
  const [windowWidth, setWindowWidth] = useState("");

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
    <div className="min-h-screen  bg-white 	w-[1440px] 2xl:w-[100%] flex flex-col justify-between syne">
      {/* La barre de navigation */}

      {windowWidth > 600 ? <NavBar /> : <NavHamburger />}

      <main>
        <section className="flex items-center">
          <div className="w-[60%] pr-10">
            <h3 className="text-3xl 2xl:text-2xl text-green my-10 roboto-bold">La Gazette des jardins</h3>
            <p className=" mb-10  text-justify text-xl">
              La Gazette des Jardins a bousculé le monde feutré de la presse horticole de janvier 1995 à mai 2014. ce fut une grande histoire d’amour entre ses rédacteurs, tous
              bénévoles, et les lecteurs.
              <br /> <br /> L’aventure s’est terminé brusquement avec la grave maladie de la Rédactrice en chef, Joëlle Bouana, qui s’est battue pendant huit ans contre ce satané
              crabe, qui l’a emportée en novembre 2021. Ce site sans publicité où vous retrouverez gratuitement en format pdf l’intégralité de nos 118 numéros est dédié à sa
              mémoire, il ne sera financé que par vos dons.
              <br /> <br /> Excellente lecture ou relecture à vous, il y a de quoi faire ! Ce site sera enrichi régulièrement par des articles contemporains, écrits bénévolement
              par des spécialistes du jardin, de la botanique, de la science et de la littérature.
              <br /> <br /> Michel Courboulex, dit Courbou
            </p>
          </div>

          <div className="w-[40%] h-full">
            <Image src={gazetteImage} alt="image de la gazette des jardins" />
          </div>
        </section>

        <h3 className="text-3xl 2xl:text-2xl text-green my-10 roboto-bold">Les Gazettes</h3>
        <p className="w-4/6 mb-10 syne text-xl">Vous trouverez ci dessous les PDF accessibles gratuitement de La Gazette des Jardins</p>

        <div className="w-6/6 flex justify-between flex-wrap gap-10">
          {listPDF.files.map((el, idx) => (
            <CardPDF key={idx} path={el} />
          ))}
          {listPDF.files.map((el, idx) => (
            <CardPDF key={idx} path={el} />
          ))}
          {listPDF.files.map((el, idx) => (
            <CardPDF key={idx} path={el} />
          ))}
          {listPDF.files.map((el, idx) => (
            <CardPDF key={idx} path={el} />
          ))}
          {listPDF.files.map((el, idx) => (
            <CardPDF key={idx} path={el} />
          ))}
          {listPDF.files.map((el, idx) => (
            <CardPDF key={idx} path={el} />
          ))}
          {listPDF.files.map((el, idx) => (
            <CardPDF key={idx} path={el} />
          ))}
          {listPDF.files.map((el, idx) => (
            <CardPDF key={idx} path={el} />
          ))}
        </div>
      </main>
      {/* Le footer */}
      <Footer />
    </div>
  );
};

export default Gazette;
