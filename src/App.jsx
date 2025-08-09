// REMOVED: HashRouter, Route, and Routes are no longer needed
import { Home } from "./pages/Home";
// REMOVED: NotFound is no longer needed for a single-page site
import { Toaster } from "@/components/ui/toaster";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  // UPDATED: The return statement is now much simpler
  return (
    <>
      <Toaster />
      <Home />
    </>
  );
}

export default App;