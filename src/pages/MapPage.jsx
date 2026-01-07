import { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import MapHero from "../components/map/MapHero";
import MapFilters from "../components/map/MapFilters";
import MapViewer from "../components/map/MapViewer";
import MapInfo from "../components/map/MapInfo";


export default function MapPage() {

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({
    size: "",
    usage: ""
  });

  return (
    <>
      <Header />
      {/*<MapHero />*/}

      <MapFilters
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />

      <MapViewer
        search={search}
        filter={filter}
      />

      <MapInfo />
      <Footer />
    </>
  );
}
