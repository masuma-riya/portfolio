import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <main className="font-bodyFont w-full h-auto bg-bodyColor text-lightText">
      <Navbar />
      <Toaster position="top-center" />
      <div className="px-4">
        <div className="max-w-screen-xl mx-auto">
          <Banner />
          <Education />
          <Feature />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default App;
