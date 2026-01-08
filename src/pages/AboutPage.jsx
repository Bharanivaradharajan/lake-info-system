import Header from "../components/Header";
import Footer from "../components/Footer";

import TeamHeader from "../components/team/TeamHeader";
import TeamIntro from "../components/team/TeamIntro";
import TeamGrid from "../components/team/TeamGrid";
import ContactAnimation from "../components/contact/ContactAnimation";

import team from "../data/team";

export default function AboutPage() {
  return (
    <>
      <Header />


      <TeamHeader />
      <ContactAnimation />
      <TeamIntro />
      <TeamGrid members={team} />

      <Footer />
    </>
  );
}
