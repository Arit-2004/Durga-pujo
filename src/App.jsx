import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About  from "./sections/About";
import Committee from "./sections/Comittee";
import Gallery from "./sections/Gallery";
import Videos from "./sections/Videos";
import Location from "./sections/Location";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About/>
        <Committee/>
        <Gallery/>
        <Videos/>
        <Location/>

      </main>
      <Footer />
    </>
  );
}

export default App;