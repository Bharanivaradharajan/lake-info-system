import Header from "../components/Header";
import Footer from "../components/Footer";

import TeamHeader from "../components/team/TeamHeader";
import TeamIntro from "../components/team/TeamIntro";
import TeamGrid from "../components/team/TeamGrid";

import team from "../data/team";

export default function AboutPage() {
  return (
    <>
      <Header />

      <TeamHeader />
      <TeamIntro />
      <TeamGrid members={team} />

      <Footer />
    </>
  );
}
