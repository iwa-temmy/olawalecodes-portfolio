import Hero from "./components/hero";
import About from "./components/about";
import NavBar from "./components/ui/navbar";
import "./App.css";
import Contact from "./components/contact";
import SelectedWorks from "./components/selected-works";

function App() {
  return (
    <div className="page-layout">
      <NavBar />
      <Hero />
      <About />
      <SelectedWorks />
      <Contact />
    </div>
  );
}

export default App;
