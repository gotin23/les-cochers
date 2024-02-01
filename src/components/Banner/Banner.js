import Image from "next/image";
import BannerImage from "../../assets/images/velo-banner.webp";

function Banner() {
  return (
    <section className="relative max-h-[1000px]  shadow-md">
      <div className="absolute  left-[15%] transform  top-24  flex flex-col bg-[#3836368f] p-3 rounded-md lg:w-[300px] md:w-[200px] md:top-10">
        <h2 className="text-6xl text-white   lg:text-4xl md:text-2xl ">Un futur solidaire à vélo</h2>
      </div>
      <Image
        src={BannerImage}
        height={1073}
        width={1440}
        style={{ objectFit: "cover", maxHeight: "950px", width: "100%", minHeight: "500px" }}
        placeholder="blur"
        alt="photo de velo cargo sur la promenade des anglais"
      />
      <a href="https://www.helloasso.com/associations/les-cochers-solidaires-de-nice/adhesions/adhesion">
        <button className=" py-2 text-2xl bg-red rounded-md  text-white  hover:bg-redHover absolute right-[25%] transform  bottom-24 px-3 lg:w-[280px] lg:text-xl lg:left-[50%] lg:-translate-x-1/2 md:w-[180px] md:text-sm md:bottom-10">
          Rejoignez-nous
        </button>
      </a>
      <a href="mailto:hue@cochers.fr">
        <button className=" py-2 text-2xl px-3 bg-red rounded-md  text-white  hover:bg-redHover absolute  left-[25%] transform bottom-24  lg:w-[280px] lg:text-xl lg:left-[50%] lg:-translate-x-1/2 lg:bottom-44 md:w-[180px] md:text-sm md:bottom-24">
          Ecrivez-nous
        </button>
      </a>
    </section>
  );
}

export default Banner;
