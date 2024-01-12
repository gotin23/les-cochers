import Image from "next/image";
import NavBar from "@/components/NavBar/NavBar";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import cocherImage from "../assets/images/ancien-cocher.jpg";
import veloCargoImage from "../assets/images/velo-cargo.png";
import mailIcon from "../assets/icons/Mailbox raised flag.svg";
import arrowUpIcon from "../assets/icons/arrow-up.svg";

export default function Home() {
  return (
    <div className="min-h-screen  bg-white 	w-[1440px]">
      {/* La barre de navigation */}
      <NavBar />
      <main>
        {/* La banierre */}
        <Banner />
        {/* L'association */}
        <section className="p-10" id="association">
          <h3 className="text-3xl mb-10 text-red roboto-bold">L’association</h3>
          <div className="flex w-full">
            <div className="w-[62%] pr-5">
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
            </div>
            <div className="w-[38%] flex items-center justify-center p-5">
              <Image alt={"photo de vieux cocher"} src={cocherImage} style={{ objectFit: "cover", maxHeight: "500px" }} placeholder="blur" className="border-red" />
            </div>
          </div>
        </section>
        {/* La flotte */}
        <section id="notre-flotte" className="p-10">
          <h3 className="text-3xl  mb-10 text-red roboto-bold">Notre flotte à deux et trois roues</h3>
          <div className="flex justify-between">
            <div className="w-[30% flex justify-center items-center">
              <Image src={veloCargoImage} alt="velo cargo" width={350} />
            </div>
            <div className="w-[70%]">
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
        <section className="p-10" id="valeurs">
          <h3 className="text-3xl  mb-10 text-red roboto-bold">Nos valeurs</h3>
          <div className="flex justify-between">
            <article className="w-[30%] bg-[#38363612] rounded-md p-5 text-justify">
              <h4 className="text-xl mb-5 text-red roboto-bold">1.Joie</h4>
              <p className="syne">
                Inspirer la brise marine, ressentir la douce caresse du soleil et le vent de la vitesse, s’extasier devant l’horizon ou une superbe bâtisse sont des sources de joie
                et d’équilibre essentiel pour tout être humain. Une promenade sur… la Promenade, sur le Port ou dans les jardins en croisant des visages réjouis et des fleurs
                épanouies font plus d’effet que tranquillisants et antidépresseurs. Les Cochers Solidaires de Nice souhaitent partager le plus largement possible leur joie de vivre
                et de circuler les yeux grands ouverts et à vitesse humaine dans notre cité.
              </p>
            </article>
            <article className="w-[30%]  bg-[#38363612] rounded-md p-5 text-justify">
              <h4 className="text-xl mb-5 text-red roboto-bold">2.Solidarité</h4>
              <p className="syne">
                Le soleil se lève pour tout le monde, mais beaucoup n’ont pas la chance de pouvoir se promener à vélo. La maladie, la pauvreté, l’exil, la vieillesse ont tôt fait
                d’exclure les moins favorisés et les condamner à vivre constamment entre quatre murs, quand ce n’est pas de survivre dans la rue ! La mission des Cochers Solidaires
                de Nice est de soulager, le temps d’une balade ou d’une livraison, les plus faibles, les plus seuls et les plus démunis. En contact avec les associations
                humanitaires, les Cochers Solidaires de Nice s’engagent pour un futur simple basé sur le partage
              </p>
            </article>
            <article className="w-[30%] bg-[#38363612] rounded-md p-5 text-justify">
              <h4 className="text-xl mb-5 text-red roboto-bold">3.Respiration</h4>
              <p className="syne">
                Nice a besoin d’air pur, notre objectif principal est de réduire le trafic automobile des véhicules de livraison et de transport de personnes. Notre ville a été
                dessinée bien avant l’invasion automobile et les rues et avenues n’avaient pas pour vocation d’être des parkings à ciel ouvert. Peu à peu, il faut revenir à la
                sagesse du temps des cochers et des transports doux, d’autant plus qu’à vélo, à Nice aussi, on dépasse les autos et les taxis…
              </p>
            </article>
          </div>
        </section>
        {/* Nous contacter */}
        <section className="p-10" id="contact">
          <h3 className="text-3xl  mb-10 text-red roboto-bold">Nous contacter</h3>
          <p className="mb-10 text-xl syne text-justify leading-6	">
            Si vous souhaitez nous <span className="roboto-bold">contacter par email</span> , n&apos;hésitez pas à nous écrire:
          </p>
          <div className="flex justify-between">
            <div className="grid place-content-center w-[50%]">
              <button className=" py-2 px-5 text-4xl bg-red rounded-md mt-[12px] text-white  hover:bg-redHover">Envoyer un email</button>
            </div>
            <div className="flex  w-[50%] justify-center">
              <Image src={mailIcon} width={100} alt="icon de mail" />
            </div>
          </div>
        </section>
        <div className="flex justify-center mt-20">
          <a href="#accueil" className="flex justify-center align-middle bg-white border-2 rounded-md cursor-pointer">
            <Image src={arrowUpIcon} width={20} alt="icon fleche du haut" />
            <p className="py-2 px-5 text-xl rounded-md">Haut de page </p>
            <Image src={arrowUpIcon} width={20} alt="icon fleche du haut" />
          </a>
        </div>
        {/* Le footer */}
        <Footer />
      </main>
    </div>
  );
}
