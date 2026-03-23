import { Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";
import Hero from "./pages/Hero/page";
import Header from "./pages/Header/page";
import About from "./pages/About/page";
import Skills from "./pages/Skills/page";
import Experience from "./pages/Experience/page";
import Contact from "./pages/Contact/page";
import Education from "./pages/Education/Education";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <div className="dark-theme">
        <Header />
        <Routes>
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/" element={
            <>
              <Hero />
              <About />
            </>
          } />
        </Routes>
      </div>
    </>
  );
}
