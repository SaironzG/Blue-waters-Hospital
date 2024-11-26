import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SecondNavbar from "./components/SecondNavbar";
import Services from "./components/Services";
import About from "./components/About";
import Doctors from "./components/OurDoctors";
import OtherServices from "./components/OtherServices";
import HowWeWork from "./components/HowWeWork";
import ContactUs from "./components/ContactUs";
import Testimonial from "./components/Testimonial";
import NewsBlog from "./components/NewsBlog";
import Footer from "./components/Footer";
import StartLoading from "./components/StartLoading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000); // Adjust to match your needs
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <StartLoading />}
      {!loading && (
        <>
          <Navbar />
          <Hero />
          <SecondNavbar />
          <Services />
          <About />
          <Doctors />
          <OtherServices />
          <HowWeWork />
          <ContactUs />
          <Testimonial />
          <NewsBlog />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
