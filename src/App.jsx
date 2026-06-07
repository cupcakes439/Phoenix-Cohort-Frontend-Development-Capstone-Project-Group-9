import "./App.css"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ImageSection from "./components/ImageSection";
import TableSection from "./components/TableSection";
import VideoSection from "./components/VideoSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <VideoSection />
      <ImageSection />
      <TableSection />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;