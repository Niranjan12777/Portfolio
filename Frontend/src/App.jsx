import React from "react";
import AdminApp from "./admin/AdminApp.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Home from "./pages/Home/Home.jsx";
import Projects from "./pages/Projects/Projects.jsx";

function App() {
  if (window.location.pathname.startsWith("/admin")) {
    return <AdminApp />;
  }

  return (
    <main className="site-shell">
      <Navbar />
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
