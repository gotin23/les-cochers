import textes from "../../../../public/data/textes.json";
import GazetteContent from "../../../components/layouts/GazetteContent/GazetteContent";

export async function generateStaticParams() {
  const texts = await textes.textes;

  const result = texts.map((product, idx) => ({
    id: idx >= 9 ? (idx + 1).toString() : "0" + (idx + 1).toString(),
  }));

  return result;
}

const Page = ({ params }) => {
  return (
    <>
      <GazetteContent params={params} />
    </>
  );
};

export default Page;
