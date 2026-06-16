import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Contact from "./components/Contact";
import WhyChooseUs from "./components/WhyChooseUs";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import TrustedBy from "./components/TrustedBy";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <WhyChooseUs />
      <Products />
      <Gallery />
      <TrustedBy />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}