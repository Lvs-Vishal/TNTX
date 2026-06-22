import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navigation, Footer } from "@/components/layout";
import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage, ApplicationPage } from "@/pages/SimplePages";
import { BackgroundLayers } from "@/components/BackgroundLayers";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<div className="page-enter"><HomePage /></div>} />
      <Route path="/about" element={<div className="page-enter"><AboutPage /></div>} />
      <Route path="/contact" element={<div className="page-enter"><ContactPage /></div>} />
      <Route path="/apply" element={<div className="page-enter"><ApplicationPage /></div>} />
    </Routes>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-industrial-obsidian min-h-screen">
        {/* Static Global Background Layers */}
        <BackgroundLayers />

        {/* Navigation */}
        <Navigation />

        {/* Routes */}
        <AnimatedRoutes />

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
