"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import NavBar from "@/components/NavBar/NavBar";
import NavHamburger from "@/components/NavHamburger/NavHamburger";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import cocherImage from "../assets/images/ancien-cocher.webp";
import childOnBikeImage from "../assets/images/velo-enfant.webp";
import cargoBikeImage from "../assets/images/velo-cargo.png";
import mailIcon from "../assets/icons/Mailbox raised flag.svg";
import arrowUpIcon from "../assets/icons/arrow-up.svg";
import leafImage from "../assets/images/leaf.svg";
import leafWindImage from "../assets/images/leaf-wind.svg";

export default function Home() {
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
    <div className="min-h-screen  bg-white 	w-[1440px] 2xl:w-[100%]">
      {/* La barre de navigation */}

      {windowWidth > 600 ? <NavBar /> : <NavHamburger />}

      <main>
        {/* La banierre */}
        <Banner />
        {/* L'association */}
        <section className="p-10 sm:p-5" id="association">
          <h3 className="text-3xl mb-10 text-red roboto-bold">L’association</h3>
          <div className="flex w-full lg:flex-col">
            <article className="w-[62%] pr-5 lg:w-[100%] lg:pr-0">
              <p className="text-xl syne text-justify leading-6	">
                Les Cochers Solidaires de Nice mobilisent leurs cycles et leurs muscles au service des habitants, des associations et des visiteurs de{" "}
                <span className="roboto-bold">Nice la belle</span>.
              </p>
              <br />
              <p className="text-xl syne text-justify leading-6	">
                {" "}
                Nous souhaitons partager notre joie de circuler en sécurité sur le réseau de pistes cyclables en promenant en <span className="roboto-bold">vélo cargo</span>, en
                tandem et remorque, et bientôt en tricycle pousse-pousse :
              </p>
              <ul>
                <li className="text-xl syne text-justify leading-6	">- des enfants malades</li>
                <li className="text-xl syne text-justify leading-6	">- des personnes à mobilité réduite</li>
                <li className="text-xl syne text-justify leading-6	">- des personnes âgées</li>
                <li className="text-xl syne text-justify leading-6	">- des amateurs de jardin, d’architecture et d’histoire locale.</li>
              </ul>
              <br />
              <p className="text-xl syne text-justify leading-6	">
                Nous sommes également à la disposition des <span className="roboto-bold">associations à but solidaire</span>:
              </p>

              <ul>
                <li className="text-xl syne text-justify leading-6	">- transport de denrées alimentaires</li>
                <li className="text-xl syne text-justify leading-6	">- maraudes à vélo</li>
                <li className="text-xl syne text-justify leading-6	">- livraison de colis</li>
              </ul>
              <br />
              <p className="text-xl syne text-justify leading-6	">
                <span className="roboto-bold">Sans émission de carbone</span>, sans pollution et sans bruit, nous souhaitons faire renaître la grande tradition des cochers niçois
                en utilisant le moyen de transport le plus efficace sur le plan énergétique, le vélo !
              </p>
            </article>
            <div className="w-[38%] flex items-center justify-center p-5 lg:w-[100%]">
              <Image alt={"photo de vieux cocher"} src={cocherImage} style={{ objectFit: "cover", maxHeight: "500px" }} placeholder="blur" />
            </div>
          </div>
        </section>
        {/* La flotte */}
        <section id="notre-flotte" className="p-10 sm:p-5">
          <h3 className="text-3xl  mb-10 text-red roboto-bold">Notre flotte à deux et trois roues</h3>
          <div className="flex justify-between items-center lg:flex-col-reverse">
            <div className="w-[40%] flex justify-center items-center lg:mt-5 lg:w-[100%]">
              <Image
                src={childOnBikeImage}
                alt="velo cargo"
                width={825}
                height={1100}
                style={{ objectFit: "cover", maxHeight: "600px", minHeight: "420px" }}
                className="w-[70%] lg:w-[60%] sm:w-[80%]"
              />
            </div>
            <div className="w-[60%] lg:w-[100%]">
              {" "}
              <p className="text-xl syne text-justify leading-6	"> A ce jour, l’association dispose :</p>
              <br />
              <ul>
                <li className="text-xl syne text-justify leading-6	">
                  - d’un vélo <span className="roboto-bold">cargo Babboe</span> pouvant promener quatre enfants de moins de 22 kg avec ceintures de sécurité trois points. Il peut
                  servir également au transport de denrées
                </li>
                <li className="text-xl syne text-justify leading-6	">
                  {" "}
                  - d’un <span className="roboto-bold"> tandem Micmo</span> pouvant emmener un adolescent ou adulte déficient visuel ou dont le handicap ne lui permet pas de faire
                  du vélo seul{" "}
                </li>
                <li className="text-xl syne text-justify leading-6	">
                  - d’une remorque associée au tandem pouvant accueillir <span className="roboto-bold"> deux enfants </span>deux enfants de moins de 25 kg, avec ceintures de
                  sécurité trois points
                </li>
                <li className="text-xl syne text-justify leading-6	">
                  {" "}
                  - d’un vélo pliable Brompton <span className="roboto-bold">vélo pliable Brompton </span> apte aux livraisons rapides de colis légers <br />- d’une remorque
                  associée au Brompton d’une capacité de 65 kg (colis ou marchandises)
                </li>
              </ul>
              <br />
              <p className="text-xl syne text-justify leading-6	">
                {" "}
                Dans un futur proche, nous disposerons d’un <span className="roboto-bold">tricycle pousse-pousse</span> (vélo calèche) permettant le déplacement de deux adultes.
              </p>
            </div>
          </div>
        </section>
        {/* Nos valeurs */}
        <section className="p-10 sm:p-5" id="valeurs">
          <h3 className="text-3xl  mb-10 text-red roboto-bold">Nos valeurs</h3>
          <div className="flex justify-between md:flex-col ">
            <article className="w-[26%] bg-[#38363612] rounded-md p-5 text-justify relative lg:w-[30%] md:w-[100%] md:mb-5">
              <Image src={leafWindImage} width={150} alt="icon fleche du haut" className="absolute right-0 top-1 opacity-25" />
              <h4 className="text-2xl mb-5 text-red roboto-bold">Respiration</h4>
              <p className="syne text-xl">
                Notre objectif principal est de réduire le trafic des véhicules de livraison et de transport de personnes. Notre ville a été dessinée bien avant l’invasion
                automobile. À vélo, à Nice aussi, on dépasse les autos. Revenons à la sagesse des cochers d’antan.
              </p>
            </article>
            <article className="w-[26%] bg-[#38363612] rounded-md p-5 text-justify relative lg:w-[30%] md:w-[100%] md:mb-5">
              <Image src={leafImage} width={150} alt="icon fleche du haut" className="absolute left-2 top-2 rotate-90 opacity-25" />
              <h4 className="text-2xl mb-5 text-red roboto-bold">Joie</h4>
              <p className="syne text-xl">
                Une promenade sur… la Promenade, sur le Port ou dans les jardins en croisant des visages réjouis et des fleurs épanouies font plus d’effet que tranquillisants et
                antidépresseurs. Nous partageons notre joie de vivre et de circuler les yeux grands ouverts dans notre cité.
              </p>
            </article>
            <article className="w-[26%]  bg-[#38363612] rounded-md p-5 text-justify relative lg:w-[30%] md:w-[100%]">
              <h4 className="text-2xl mb-5 text-red roboto-bold">Solidarité</h4>
              <p className="syne text-xl">
                La mission des Cochers Solidaires de Nice est de soulager, le temps d’une balade ou d’une livraison, les plus faibles, les plus seuls et les plus démunis. Les
                Cochers Solidaires de Nice s’engagent pour un futur simple basé sur le partage et sur l’espoir..
              </p>
              <Image src={leafImage} width={150} alt="icon fleche du haut" className="absolute right-0 bottom-1 opacity-25" />
            </article>
          </div>
        </section>
        {/* Nous contacter */}
        <section className="p-10 sm:p-5" id="contact">
          <h3 className="text-3xl  mb-10 text-red roboto-bold">Nous contacter</h3>
          <p className="mb-10 text-xl syne text-justify leading-6	">
            Si vous souhaitez nous <span className="roboto-bold">contacter par email</span> , n&apos;hésitez pas à nous écrire:
          </p>
          <div className="flex justify-between sm:flex-col">
            <div className="flex  w-[50%] justify-center sm:w-[100%]">
              <Image src={mailIcon} width={100} alt="icon de mail" />
            </div>
            <div className="grid place-content-center w-[50%] sm:w-[100%]">
              <button className=" py-2 px-5 text-4xl bg-red rounded-md mt-[12px] text-white  hover:bg-redHover md:text-2xl md:mt-10">
                <a href="mailto:hue@cochers.fr"> Envoyer un email</a>
              </button>
            </div>
          </div>
        </section>
        <div className="flex justify-center mt-20 ">
          <a href="#accueil" className="flex justify-center align-middle bg-white border-2 rounded-md cursor-pointer">
            <Image src={arrowUpIcon} width={20} alt="icon fleche du haut" />
            <p className="py-2 px-5 text-xl rounded-md">Haut de page </p>
            <Image src={arrowUpIcon} width={20} alt="icon fleche du haut" />
          </a>
        </div>
      </main>
      {/* Le footer */}
      <Footer />
    </div>
  );
}
