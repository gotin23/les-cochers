"use client";
import React from "react";
import Image from "next/image";
import BannerImage from "../../assets/images/banner-velo.jpeg";

function Banner() {
  return (
    <section className="relative max-h-[1000px]  shadow-md">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[150px]  w-72  flex flex-col bg-[#3836367d] p-3 rounded-md">
        <h2 className="text-5xl text-white  bg-transparent">
          Un futur solidaire à <span className="text-red">vélo</span>
        </h2>
        <button className=" py-2 text-xl bg-red rounded-md mt-[12px] text-white  hover:bg-redHover">Rejoignez-nous !</button>
      </div>
      <Image src={BannerImage} style={{ objectFit: "cover", maxHeight: "800px" }} placeholder="blur" />
    </section>
  );
}

export default Banner;
