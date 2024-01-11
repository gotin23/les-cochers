import Link from "next/link";
import Image from "next/image";
import NavBar from "@/components/NavBar/NavBar";
import Banner from "@/components/Banner/Banner";
import cocherImage from "../assets/images/ancien-cocher.jpg";

export default function Home() {
  return (
    <div className="min-h-screen  bg-white 	w-[1440px] shadow-md">
      <NavBar />
      <main>
        <Banner />
        <section className="p-10  shadow-md">
          <h2 className="text-3xl mb-5 text-red ">L’association</h2>
          <div className="flex w-full">
            <div className="w-1/2 pr-5">
              <p>
                Les Cochers Solidaires de Nice mobilisent leurs cycles et leurs muscles au service des habitants, des associations et des visiteurs de Nice la belle.
                <br></br>
                <br></br>
                Nous souhaitons partager notre joie de circuler en sécurité sur le réseau de pistes cyclables en promenant en vélo cargo, en tandem et remorque, et bientôt en
                tricycle pousse-pousse :<br></br>- des enfants malades
                <br></br>- des personnes à mobilité réduite
                <br></br>- des personnes âgées
                <br></br>- des amateurs de jardin, d’architecture et d’histoire locale.
                <br></br>
                <br></br>
                Nous sommes également à la disposition des associations à but solidaire :<br></br>- transport de denrées alimentaires
                <br></br>- maraudes à vélo
                <br></br>- livraison de colis
                <br></br>
                <br></br>
                Sans émission de carbone, sans pollution et sans bruit, nous souhaitons faire renaître la grande tradition des cochers niçois en utilisant le moyen de transport le
                plus efficace sur le plan énergétique, le vélo !
              </p>
            </div>
            <div className="w-1/2 flex items-center justify-center">
              <Image src={cocherImage} className="border-red" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
