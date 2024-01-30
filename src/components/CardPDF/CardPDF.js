import Image from "next/image";
import pdfIcon from "../../assets/icons/pdf-icon.svg";

const CardPDF = ({ path }) => {
  const pdfPath = "/data/pdfGazette/Gazette" + path + ".pdf";

  return (
    <a href={pdfPath} className="w-[20%] xl:w-[30%] lg:w-[35%] md:w-[60%] sm:w-[80%]">
      <div className="w-[100%]  flex items-center justify-center shadow-lg py-3 px-3 syne rounded-md transition  hover:scale-105 hover:shadow-xl">
        <p className="text-lg text-green roboto-bold ">La Gazette des Jardins nº{path} </p>
      </div>
    </a>
  );
};

export default CardPDF;
