import React from "react";
import Header from "./components/Header/Header.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Home from "./pages/Home/Home.jsx";
import Projects from "./pages/Projects/Projects.jsx";

function App() {
  return (
    <main className="site-shell">
      <Header />
      <div className="main-components">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>

    </main>
  );
}

export default App;
