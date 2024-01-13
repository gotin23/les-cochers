// "use client";
// import React from "react";
import Image from "next/image";
import BannerImage from "../../assets/images/velo-banner.webp";

function Banner() {
  return (
    <section className="relative max-h-[1000px]  shadow-md">
      <div className="absolute  left-1/2 transform -translate-x-1/2 top-24 w-[450px]  flex flex-col bg-[#3836368f] p-3 rounded-md lg:w-[300px] md:w-[200px] md:top-10">
        <h2 className="text-6xl text-white   lg:text-4xl md:text-2xl ">
          Un futur
          <br /> solidaire à <span className="text-red">vélo</span>
        </h2>
      </div>
      <Image
        src={BannerImage}
        height={1073}
        width={1440}
        style={{ objectFit: "cover", maxHeight: "900px", width: "100%", minHeight: "500px" }}
        placeholder="blur"
        alt="photo de velo cargo sur la promenade des anglais"
      />
      <button className=" py-2 text-2xl bg-red rounded-md mt-[12px] text-white  hover:bg-redHover absolute  left-1/2 transform -translate-x-1/2 bottom-24 w-[380px] lg:w-[280px] lg:text-xl md:w-[180px] md:text-sm md:bottom-10">
        Rejoignez-nous !
      </button>
    </section>
  );
}

export default Banner;
