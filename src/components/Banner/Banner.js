// "use client";
// import React from "react";
import Image from "next/image";
import BannerImage from "../../assets/images/Velo-Banner2.jpeg";

function Banner() {
  return (
    <section className="relative max-h-[1000px]  shadow-md">
      <div className="absolute  left-1/2 transform -translate-x-1/2 top-24 w-[450px]  flex flex-col bg-[#3836368f] p-3 rounded-md">
        <h2 className="text-6xl text-white  bg-transparent">
          Un futur
          <br /> solidaire à <span className="text-red">vélo</span>
        </h2>
      </div>
      <Image src={BannerImage} style={{ objectFit: "cover", maxHeight: "900px" }} placeholder="blur" alt="photo de velo cargo sur la promenade des anglais" />
      <button className=" py-2 text-2xl bg-red rounded-md mt-[12px] text-white  hover:bg-redHover absolute  left-1/2 transform -translate-x-1/2 bottom-24 w-[380px]">
        Rejoignez-nous !
      </button>
    </section>
  );
}

export default Banner;
