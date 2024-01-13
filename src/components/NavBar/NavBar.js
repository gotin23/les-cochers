import Link from "next/link";
import Image from "next/image";
import BikeIcon from "../../assets/icons/cargo-bike-tricycle.svg";

function NavBar() {
  return (
    <nav className="w-6/6 bg-white flex justify-between items-center py-6 roboto" id="accueil">
      <div className="flex  2xl:ml-5">
        <Image src={BikeIcon} className="w-12 mr-5" alt="logo de velo cargo" />
        <h1 className="text-3xl 2xl:text-2xl">Les cochers solidaires</h1>
      </div>
      <ul className="flex text-xl 2xl:mr-5">
        <Link
          href={"/"}
          className="text-red relative  after:content-[''] after:absolute after:bg-red after:h-[2px] after:w-0 after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-[-12px] hover:after:w-full hover:after:transition-all hover:after:duration-200 lg:text-base"
        >
          Accueil
        </Link>
        <Link
          className="ml-4 text-red	relative  after:content-[''] after:absolute after:bg-red after:h-[2px] after:w-0 after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-[-10px] hover:after:w-full hover:after:transition-all hover:after:duration-200 lg:text-base"
          href={"#association"}
        >
          Association
        </Link>
        <Link
          className="ml-4 text-red	relative  after:content-[''] after:absolute after:bg-red after:h-[2px] after:w-0 after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-[-10px] hover:after:w-full hover:after:transition-all hover:after:duration-200 lg:text-base"
          href={"#notre-flotte"}
        >
          Notre flotte
        </Link>
        <Link
          className="ml-4 text-red	relative  after:content-[''] after:absolute after:bg-red after:h-[2px] after:w-0 after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-[-10px] hover:after:w-full hover:after:transition-all hover:after:duration-200 lg:text-base"
          href={"#valeurs"}
        >
          Nos valeurs
        </Link>
        <Link
          className="ml-4 text-red	relative  after:content-[''] after:absolute after:bg-red after:h-[2px] after:w-0 after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-[-10px] hover:after:w-full hover:after:transition-all hover:after:duration-200 lg:text-base"
          href={"#contact"}
        >
          Contact
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
