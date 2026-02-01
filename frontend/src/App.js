import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation, Footer } from "@/components/layout";
import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage, ApplicationPage } from "@/pages/SimplePages";

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-industrial-obsidian min-h-screen">
        {/* Grain Overlay */}
        <div className="grain-overlay" />

        {/* Navigation */}
        <Navigation />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/apply" element={<ApplicationPage />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
