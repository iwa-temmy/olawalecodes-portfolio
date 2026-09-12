import Hero from "./components/hero";
import About from "./components/about";
import NavBar from "./components/ui/navbar";
import "./App.css";
import Footer from "./components/footer";
import SelectedWorks from "./components/selected-works";
import Blog from "./components/blog";
import Seo from "./components/seo";
import { useLenis } from "./utils/use-lenis";

function App() {
  useLenis();

  return (
    <>
      <div className="">
        <Seo />
        <NavBar />
        <Hero />
        <About />
        <SelectedWorks />
        <Blog />
        <Footer />
      </div>
    </>
  );
}

export default App;
