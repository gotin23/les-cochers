// import React from "react";
import Link from "next/link";
import Image from "next/image";
import BikeIcon from "../../assets/icons/cargo-bike-tricycle.svg";

function NavBar() {
  return (
    <nav className="w-6/6 bg-white flex justify-between items-center p-6">
      <div className="flex">
        <Image src={BikeIcon} className="w-12 mr-5" />
        <h1 className="text-3xl">Les cochers solidaires</h1>
      </div>
      <ul className="flex text-xl">
        <Link
          href={"/"}
          className="text-red relative  after:content-[''] after:absolute after:bg-red after:h-[2px] after:w-0 after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-[-12px] hover:after:w-full hover:after:transition-all hover:after:duration-200"
        >
          Accueil
        </Link>
        <a
          className="ml-4 text-red	relative  after:content-[''] after:absolute after:bg-red after:h-[2px] after:w-0 after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-[-10px] hover:after:w-full hover:after:transition-all hover:after:duration-200"
          href={"#association"}
        >
          Association
        </a>
        <a
          className="ml-4 text-red	relative  after:content-[''] after:absolute after:bg-red after:h-[2px] after:w-0 after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-[-10px] hover:after:w-full hover:after:transition-all hover:after:duration-200"
          href={"#notre-flotte"}
        >
          Notre flotte
        </a>
        <a
          className="ml-4 text-red	relative  after:content-[''] after:absolute after:bg-red after:h-[2px] after:w-0 after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-[-10px] hover:after:w-full hover:after:transition-all hover:after:duration-200"
          href={"/"}
        >
          Contact
        </a>
      </ul>
    </nav>
  );
}

export default NavBar;
