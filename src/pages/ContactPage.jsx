import Header from "../components/Header";
import Footer from "../components/Footer";

import AboutSection from "../components/contact/AboutSection";
import ContactDetails from "../components/contact/ContactDetails";
import ContactForm from "../components/contact/ContactForm";
import Testimonials from "../components/contact/Testimonials";




export default function ContactPage() {
  return (
    <>
      <Header />

      <AboutSection />
      <ContactDetails />
      <ContactForm />
      <Testimonials />
        

      <Footer />
    </>
  );
}
