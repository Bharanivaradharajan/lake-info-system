import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import VisionSection from "../components/home/VisionSection";
import StatisticsSection from "../components/home/StatisticsSection";


export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <VisionSection />
      <StatisticsSection />
      <Footer />

    </>
  );
}
