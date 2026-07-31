import Hero from "../components/Hero.jsx";
import Marquee from "../components/Marquee.jsx";
import Manifesto from "../components/Manifesto.jsx";
import SelectedWork from "../components/SelectedWork.jsx";
import DarkCta from "../components/DarkCta.jsx";
import Services from "../components/Services.jsx";
import Testimonial from "../components/Testimonial.jsx";
import Contact from "../components/Contact.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Manifesto />
      <SelectedWork />
      <DarkCta />
      <Services />
      <Testimonial />
      <Contact />
    </>
  );
}
