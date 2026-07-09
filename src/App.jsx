import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import Manifesto from "./components/Manifesto.jsx";
import SelectedWork from "./components/SelectedWork.jsx";
import DarkCta from "./components/DarkCta.jsx";
import Services from "./components/Services.jsx";
import Testimonial from "./components/Testimonial.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <SelectedWork />
        <DarkCta />
        <Services />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
