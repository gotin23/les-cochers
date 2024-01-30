/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
const Page = () => {
  return (
    <section className="min-h-screen  bg-white 	w-[1200px] 2xl:w-[100%] text-center">
      <div className="px-10">
        <h3 className="text-center text-4xl 2xl:text-2xl text-red mb-10 mt-10 roboto-bold">Mentions légales</h3>
        <h3 className="text-center text-3xl 2xl:text-2xl text-red my-10 roboto-bold">Éditeur :</h3>
        <p className="mb-10 text-lg">
          Association Les Cochers Solidaires de Nice, 23 avenue du parc Robiony - 06200 Nice
          <br />
          <br />
          N° SIRET : 92435737900016 Siret 92435737900016
          <br />
          <br />
          Code APE : 94.99Z – Autres organisations fonctionnant par adhésion volontaire
          <br />
          <br />
          Directeur de la publication : M. Michel Courboulex
          <br /> <br /> Contact : <a href="mailto:hue@cochers.fr">hue@cochers.fr</a>
        </p>
        <h3 className="text-center text-3xl 2xl:text-2xl text-red my-10 roboto-bold">Hébergeur :</h3>
        <p className="mb-10 text-lg">
          IONOS : 7, place de la Gare BP 70109 57201 Sarreguemines <br />
          Cedex <br />
          SIRET 431 303 775 000 16 APE 642 B - R.C.S Sarreguemines B 431 303 775 <br />
          Identification intracommunautaire FR 13 431303775
        </p>
        <h3 className="text-center text-3xl 2xl:text-2xl text-red my-10 roboto-bold">Propriété intellectuelle :</h3>
        <p className="mb-10 text-lg">
          Ce site web appartient à l’association Les Cochers Solidaires de Nice (association à but non lucratif). Il est mis à disposition sous licence Creative Commons. <br />{" "}
          <br />
          A l’exception des photos ou dessins, la reproduction d’extraits de ce site est autorisée : <br /> <br />
          • exclusivement à des fins non commerciales, <br />• à condition de citer explicitement la source, • et à condition de partager ces conditions à l’identique.
          <br /> • Pour tout autre usage, pas de reproduction sans autorisation écrite de l’association. <br />• Les photos ou dessins ne sont à priori pas libres de droit.
          <br /> <br />
          Contacter les Cochers Solidaires de Nice, ou directement l’auteur s’il est indiqué, pour obtenir l’autorisation de les reproduire, à titre gracieux ou payant. <br />
          Les liens vers ce site sont autorisés, sous forme d’ouverture de fenêtre avec l’adresse URL visible. La présence d’un lien vers notre site ne signifie pas nécessairement
          que l’association Les Cochers Solidaires de Nice connaît ou recommande le site d’origine.
        </p>

        <div className="flex justify-center mb-5">
          <Link href="/">
            <button className=" py-2 text-2xl px-3 bg-red rounded-md  text-white  hover:bg-redHover a md:w-[180px] md:text-sm ">Retour à l'accueil</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Page;
