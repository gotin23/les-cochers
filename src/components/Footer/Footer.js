import Image from "next/image";
import Link from "next/link";
import cocherIcon from "../../assets/icons/cargo-bike-tricycle.svg";

const Footer = () => {
  return (
    <footer className=" mb-2 mt-20 xl:px-5 sm:p-5">
      <div className="flex justify-between items-baseline">
        <Link href="/">
          {" "}
          <Image src={cocherIcon} width={50} alt="logo de velo cargo" className=" md:w-[30px]" />
        </Link>
        <p className="syne md:text-xs text-center">
          © 2024 Les Cochers. Tous droits réservés. | <Link href="/mentionLegales">Mentions légales</Link> |{" "}
          <Link href="/politiqueConfidentialite">Politique de confidentialité</Link>
          <a href="https://gotin23.github.io/Portfolio/"> | Créé par Gotin</a>
        </p>
        <Link href="/">
          <Image src={cocherIcon} width={50} className="[transform:rotateY(180deg)] md:w-[30px]" alt="logo de velo cargo" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
