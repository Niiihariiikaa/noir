import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Work from "./pages/Work.jsx";
import VedicSaar from "./pages/VedicSaar.jsx";
import Laceys from "./pages/Laceys.jsx";
import Mettali from "./pages/Mettali.jsx";
import Maison from "./pages/Maison.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <ScrollToTop />
      <div className="h-7 bg-stone" />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/vedic-saar" element={<VedicSaar />} />
          <Route path="/work/laceys" element={<Laceys />} />
          <Route path="/work/mettali" element={<Mettali />} />
          <Route path="/work/maison-florale" element={<Maison />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
