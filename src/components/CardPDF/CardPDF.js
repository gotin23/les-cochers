import Image from "next/image";
import pdfIcon from "../../assets/icons/pdf-icon.svg";

const CardPDF = ({ path }) => {
  const pdfPath = "/data/pdfGazette/" + path;
  const numero = path.match(/\d+/g);
  return (
    <a href={pdfPath}>
      <div className="w-[200px] h-[120px] flex items-center flex-col shadow-md py-3 px-5 syne rounded-md transition hover:scale-105 hover:shadow-lg">
        <h4 className="text-lg text-green roboto">La Gazette nº{numero} </h4>
        <Image src={pdfIcon} width={60} height={60} alt="pdf icon" className="opacity-50" />
      </div>
    </a>
  );
};

export default CardPDF;
