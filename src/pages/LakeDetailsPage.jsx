import { useParams } from "react-router-dom";
import lakes from "../data/lakes";

import Header from "../components/Header";
import Footer from "../components/Footer";

import LakeHero from "../components/lake/LakeHero";
import LakeStats from "../components/lake/LakeStats";
import LakeOverview from "../components/lake/LakeOverview";
import LakeMap from "../components/lake/LakeMap";
import LakeGallery from "../components/lake/LakeGallery";
import LakeTechnical from "../components/lake/LakeTechnical";
import LakeCommunity from "../components/lake/LakeCommunity";
import LakeConservation from "../components/lake/LakeConservation";
import LakeDownloads from "../components/lake/LakeDownloads";
import LakeQR from "../components/lake/LakeQR";



export default function LakeDetailsPage() {

  const { uqcode } = useParams();

  // match GeoJSON uqcode -> lake.id
  const lake = lakes.find(l => l.id === uqcode);

  if (!lake) {
    return (
      <>
        <Header />
        <div className="p-10 text-center text-red-600 font-bold">
          Lake not found — {uqcode}
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <LakeHero lake={lake} />
      <LakeStats stats={lake.stats} />
      <LakeOverview text={lake.overview} />
      <LakeMap lake={lake} />
      <LakeGallery images={lake.images} />
      <LakeTechnical hydrology={lake.hydrology} />
      <LakeCommunity settlements={lake.settlements} usage={lake.usage} />
      <LakeConservation />
      <LakeDownloads />
      

<div className="flex justify-center py-8">
  <LakeQR uqcode={lake.id} />
</div>


      <Footer />
    </>
  );
}
