import "./App.css";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Something from "./Sections/Contact";
import Footer from "./Sections/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Something />
      <Footer />
    </div>
  );
}

export default App;
