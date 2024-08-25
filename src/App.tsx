import { useEffect } from "react";
import Hero from "./components/hero";
import About from "./components/about";
import NavBar from "./components/ui/navbar";
import "./App.css";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log("current position", window.scrollY);
      const sections = document.getElementsByTagName("section");
      console.log("sections", sections);
    });
    return () =>
      window.removeEventListener("scroll", () =>
        console.log("stopped scrolling")
      );
  }, []);
  return (
    <div className="h-screen bg-left-bottom md:bg-center bg-cover">
      <NavBar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
