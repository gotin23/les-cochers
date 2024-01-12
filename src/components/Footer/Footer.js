import Image from "next/image";
import cocherIcon from "../../assets/icons/cargo-bike-tricycle.svg";

const Footer = () => {
  return (
    <footer className="px-10 mb-2 mt-10 ">
      <div className="flex justify-between items-baseline">
        <Image src={cocherIcon} width={80} />
        <p>© 2024 Les Cochers. Tous droits réservés. | Mentions légales | Politique de confidentialité</p>
        <Image src={cocherIcon} width={80} className="[transform:rotateY(180deg)]" />
      </div>
    </footer>
  );
};

export default Footer;
