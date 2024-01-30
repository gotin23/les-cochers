import Image from "next/image";
import pdfIcon from "../../assets/icons/pdf-icon.svg";

const CardPDF = ({ path }) => {
  const pdfPath = "/data/pdfGazette/Gazette" + path + ".pdf";
  // const pdfPath = "/data/pdfGazette/Gazette05.pdf";
  // const numero = path.match(/\d+/g);
  // console.log(pdfPath);
  return (
    <a href={pdfPath} className="w-[20%] xl:w-[30%] lg:w-[35%] md:w-[60%] sm:w-[80%]">
      <div className="w-[100%]  flex items-center justify-center shadow-lg py-3 px-3 syne rounded-md transition  hover:scale-105 hover:shadow-xl">
        <p className="text-lg text-green roboto-bold ">La Gazette des Jardins nº{path} </p>
        {/* <p className="roboto-bold">PDF</p> */}
        {/* <Image src={pdfIcon} width={40} height={40} alt="pdf icon" className="opacity-50" /> */}
      </div>
    </a>
  );
};

export default CardPDF;
