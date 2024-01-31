"use client";
import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/NavBar/NavBar";
import NavHamburger from "@/components/NavHamburger/NavHamburger";
import Footer from "@/components/Footer/Footer";
import { useState, useEffect } from "react";
import listPDF from "../../../public/data/listPDF.json";
import gazetteImage from "../../assets/images/couv49.jpg";

const LaGazetteDesJardins = () => {
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
    <div className="	w-[1440px] 2xl:w-[100%] flex flex-col justify-between syne ">
      {/* La barre de navigation */}

      {windowWidth > 700 ? <NavBar /> : <NavHamburger />}

      <main className="2xl:px-5">
        <section className="flex items-center mt-10 xl:flex-col">
          <div className="w-[65%] pr-10 xl:w-[100%] lg:pr-0">
            <h1 className="text-3xl 2xl:text-2xl text-green my-10 roboto-bold">La Gazette des Jardins</h1>
            <p className=" mb-10 text-lg">
              Quel est le rapport entre les Cochers Solidaires de Nice et La Gazette des Jardins, bimestriel bimestriel vendu en kiosques de 1995 à 2014 ? Réponse : le même
              créateur et le même engagement pour un futur simple, solidaire et joyeux.
              <br />
              La Gazette des Jardins fut une sacrée aventure qui méritait de laisser sa trace sur Internet. Fondée par Joëlle Bouana et de nombreux jardiniers professionnels et/ou
              passionnés. Elle a publié<span className="roboto-bold"> 117 numéros grand format</span> remplis de texte, de botanique, de littérature d’humour et d’aventure.
              <br />
              Le but était de mettre ses enseignements en accès libre et gratuit, mais j’ignorais que l’énorme (pour l’époque) disque dur qui recélait{" "}
              <span className="roboto-bold">son précieux contenu était crashé.</span> Je ne puis que vous inviter à effectuer de nombreuses copies de vos dossiers importants, car
              la récupération des données m’a coûté un bras, épaule et clavicule comprise…
              <br />
              La récupération n’est pas complète et demande un travail fastidieux. Voici donc les <span className="roboto-bold">vingt premiers exemplaires</span> en PDF et
              <span className="roboto-bold"> en téléchargement libre.</span> Les autres suivront par vague de vingt, on pourrait titrer ce premier lot « Une histoire de fous
              curieux, qui séduit bien au-delà de la Méditerranée ».
              <br />
              Les abonnés et lecteurs du journal se plongeront dans la truculente (nous étions totalement dingues… et totalement pertinents) relecture de ces exemplaires.{" "}
              <span className="roboto-bold">Ceux qui n’ont pas connu la Gazette des jardins</span> y apprendront beaucoup de choses, de trucs de pros et feront de grands progrès en
              matière de botanique et de jardinage.
              <br />
              Certaines familles et espèces ont changé de nom depuis, mais la quasi-totalité des articles restent d’actualité.
              <br />
              Si vous appréciez cette lecture, <span className="roboto-bold">n’hésitez pas à faire un don</span> pour financer les Cochers Solidaires, qui en ont bien besoin pour
              investir dans des vélos permettant de transporter des personnes hospitalisées ou à mobilité réduite.
              <br />
              Nous nous équipons également pour proposer des <span className="roboto-bold">visites botaniques, historiques et architecturales</span> de la cité niçoise. J’aurai
              peut-être l’honneur et le plaisir de vous véhiculer en vous parlant des végétaux et des lieux méconnus de la cité niçoise.
              <br />
              <br />
              Michel Courboulex
              <br />
              <br />
              <span className="text-lg italic bg-[#38363612] rounded-lg">
                {" "}
                Ancien directeur de la Gazette des jardins, chroniqueur jardin de Nice-Matin, auteur réalisateur pour l’émission Côté jardin, journaliste à Rustica, et tout jeune
                créateur-pédaleur des Cochers Solidaires de Nice.
              </span>
            </p>
          </div>

          <div className="w-[35%] h-full flex justify-center xl:w-[70%]">
            <Image src={gazetteImage} width={350} alt="image de la gazette des jardins" />
          </div>
        </section>
        <section className="mt-10">
          <h3 className="text-3xl 2xl:text-2xl text-green my-10 roboto-bold">Les Gazettes</h3>
          <p className="w-4/6 mb-20 syne text-lg xl:w-[100%]">Vous trouverez ci dessous les PDF accessibles gratuitement de La Gazette des Jardins</p>

          <ul className="w-6/6 flex justify-center flex-wrap gap-10">
            {listPDF.files.map((el, idx) => (
              <li key={idx}>
                <Link
                  className="text-xl text-green w-[300px]  flex flex-col  shadow-lg  px- roboto rounded-md transition hover:scale-105 hover:shadow-lg  justify-between overflow-hidden"
                  href={`gazette/${el.match(/\d+/g)}`}
                >
                  <p className="roboto mb-5 ml-5">La gazette nº {el.match(/\d+/g)}</p>
                  <Image
                    src={`/data/MiniatureGazette/Couv${el.match(/\d+/g)}petite.jpg`}
                    width={273}
                    height={390}
                    alt="miniature de la gazette des jardins"
                    className="object-contain w-[auto]"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      {/* Le footer */}
      <Footer />
    </div>
  );
};

export default LaGazetteDesJardins;
