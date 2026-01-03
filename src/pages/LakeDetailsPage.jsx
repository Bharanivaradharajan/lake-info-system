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

export default function LakeDetailsPage() {

  const lake = lakes[0]; // TEMP — later use route param

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

      <Footer />
    </>
  );
}
