/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
const Page = () => {
  return (
    <section className="min-h-screen  bg-white 	w-[1200px] 2xl:w-[100%]">
      <div className="px-10">
        <h3 className="text-center text-3xl 2xl:text-2xl text-red mb-10 mt-10 roboto-bold">Politique de Confidentialité: Les cochers solidaires</h3>
        <p className="mb-10 text-lg">
          Bienvenue sur La Les cochers solidaires. Nous sommes déterminés à respecter votre vie privée et à protéger les informations que vous partagez avec nous. Cette politique
          de confidentialité explique comment nous collectons, utilisons et protégeons vos données, même si nous n' avons pas de système de connexion ni n'utilisons de cookies.
        </p>
        <h3 className="text-center text-3xl 2xl:text-2xl text-red my-10 roboto-bold">Collecte d'Informations :</h3>
        <p className="mb-10 text-lg">
          Nous ne collectons aucune information personnelle identifiable à moins que vous ne choisissiez de nous la fournir volontairement. En tant que site sans système de
          connexion, nous ne demandons pas d'informations telles que des noms, adresses e-mail ou autres données personnelles.
        </p>
        <h3 className="text-center text-3xl 2xl:text-2xl text-red my-10 roboto-bold">Cookies :</h3>
        <p className="mb-10 text-lg">
          Nous ne utilisons aucun cookie ou technologie de suivi similaire sur notre site. Vous pouvez donc naviguer sur Les cochers solidaires sans craindre le suivi automatique
          de vos activités.
        </p>
        <h3 className="text-center text-3xl 2xl:text-2xl text-red my-10 roboto-bold">Sécurité :</h3>
        <p className="mb-10 text-lg">
          Nous prenons des mesures pour protéger les informations que vous partagez avec nous, bien que le site ne collecte pas d'informations sensibles.
        </p>
        <h3 className="text-center text-3xl 2xl:text-2xl text-red my-10 roboto-bold">Contact :</h3>
        <p className="mb-10 text-lg">
          Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à <a href="mailto:hue@cochers.fr">[hue@cochers.fr]</a>. Merci de faire
          confiance à La Gazette des Jardins pour le respect de votre vie privée.
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
