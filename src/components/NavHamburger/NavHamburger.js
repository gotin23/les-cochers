"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import BikeIcon from "../../assets/icons/cargo-bike-tricycle.svg";
import MenuIcon from "../../assets/icons/Menu-icon.svg";
import CloseIcon from "../../assets/icons/Close-icon.svg";

const NavHamburger = () => {
  const [toggle, setToggle] = useState(false);
  const toggleNav = () => {
    setToggle(!toggle);
    if (!toggle) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };
  // Si l'utilisateur fait un retour arriere alors que le menu est ouvert
  window.addEventListener("popstate", () => {
    if (toggle) {
      setToggle(false);
      document.body.classList.remove("no-scroll");
    }
  });
  const navStyle = toggle ? "bottom-[-10svh]" : "bottom-[100svh]";
  return (
    <nav>
      <div className="w-6/6 bg-white flex justify-between py-5 px-3 roboto " id="accueil">
        <div className="flex">
          <Image src={BikeIcon} className="w-8 mr-3 " alt="logo de velo cargo " />
          <h1 className="text-[18px]">Les cochers solidaires</h1>
        </div>
        <div className="z-20" onClick={toggleNav}>
          {!toggle ? <Image src={MenuIcon} width={30} alt="icon de menu" /> : <Image src={CloseIcon} width={30} alt="icon de menu" />}
        </div>
      </div>

      <div className={`flex justify-center align-middle bg-white top-0 left-0 right-0   absolute z-10 transition-all  overflow-hidden ${navStyle}`} onClick={toggleNav}>
        <ul className="flex flex-col justify-center align-middle text-xl">
          <Link href={"/"} className="text-red flex justify-center my-2 ">
            Accueil
          </Link>
          <Link className=" text-red flex justify-center my-2" href={"#association"}>
            Association
          </Link>
          <Link className=" text-red flex justify-center my-2" href={"#notre-flotte"}>
            Notre flotte
          </Link>
          <Link className=" text-red flex justify-center my-2" href={"#valeurs"}>
            Nos valeurs
          </Link>
          <Link className="text-red flex justify-center my-2" href={"#contact"}>
            Contact
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavHamburger;
