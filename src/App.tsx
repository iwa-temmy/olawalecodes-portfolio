import Hero from "./components/hero";
import About from "./components/about";
import NavBar from "./components/ui/navbar";
import "./App.css";
import Contact from "./components/contact";
import SelectedWorks from "./components/selected-works";
import Blog from "./components/blog";
import Seo from "./components/seo";

function App() {
  return (
    <>
      <div className="">
        <Seo />
        <NavBar />
        <Hero />
        <About />
        <SelectedWorks />
        <Blog />
        <Contact />
      </div>
    </>
  );
}

export default App;
