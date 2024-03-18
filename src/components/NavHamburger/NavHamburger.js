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
  };

  const navStyle = toggle ? "bottom-[-10svh]" : "bottom-[108svh]";
  return (
    <nav>
      <div className="flex items-center justify-between">
        <Link href="/" className="w-6/6 bg-white flex justify-between py-5 px-3 roboto" id="accueil">
          <div className="flex">
            <Image src={BikeIcon} className="w-8 mr-3 " alt="logo de velo cargo " />
            <h1 className="text-[18px]">Les Cochers Solidaires De Nice</h1>
          </div>
        </Link>
        <div className="z-20 " onClick={toggleNav}>
          {!toggle ? <Image src={MenuIcon} width={30} alt="icon de menu" /> : <Image src={CloseIcon} width={30} alt="icon de menu" />}
        </div>
      </div>

      <div className={`flex justify-center align-middle bg-white top-0 left-0 right-0  z-10 transition-all  overflow-hidden ${navStyle} fixed`} onClick={toggleNav}>
        <ul className="flex flex-col justify-center align-middle text-xl">
          <li>
            <Link href={"/"} className="text-red flex justify-center my-2 ">
              Accueil
            </Link>
          </li>
          <li>
            <Link className=" text-red flex justify-center my-2" href={"/#association"}>
              Association
            </Link>
          </li>
          <li>
            <Link className=" text-red flex justify-center my-2" href={"/#notre-flotte"}>
              Notre flotte
            </Link>
          </li>
          <li>
            <Link className=" text-red flex justify-center my-2" href={"/#valeurs"}>
              Nos valeurs
            </Link>
          </li>
          <li>
            <Link className="text-red flex justify-center my-2" href={"/#contact"}>
              Contact
            </Link>
          </li>
          <li>
            <Link className=" flex justify-center my-2" href={"/laGazetteDesJardins"}>
              La Gazette des Jardins
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavHamburger;
