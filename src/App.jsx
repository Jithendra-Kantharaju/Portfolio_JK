import { HashRouter, Route, Routes } from "react-router-dom"; // UPDATED
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";

function App() {
  // This useEffect hook runs once when the component mounts.
  // It initializes the emailjs library with your public key.
  useEffect(() => {
    // Initialize EmailJS with your public key from environment variables
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    <>
      {/* Toaster component for displaying notifications */}
      <Toaster />
      {/* UPDATED: Changed BrowserRouter to HashRouter for GitHub Pages compatibility */}
      <HashRouter>
        <Routes>
          {/* Main route for the Home page */}
          <Route index element={<Home />} />
          {/* Catch-all route for displaying a 404 Not Found page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
