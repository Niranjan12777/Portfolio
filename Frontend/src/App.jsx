import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skill/Skill.jsx";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer.jsx";
import AdminApp from "./admin/AdminApp";

function Portfolio() {
  return (
    <main className="site-shell">
      <Navbar />

      <div className="main-components">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Portfolio />} />

      <Route path="/admin/*" element={<AdminApp />} />
    </Routes>
  );
}

export default App;