import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowWeWork from "./components/HowWeWork";
import Navbar from "./components/Navbar";

import NewsBlog from "./components/NewsBlog";
import OtherServices from "./components/OtherServices";
import Doctors from "./components/OurDoctors";
import SecondNavbar from "./components/SecondNavbar";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";


function App() { 
  return (
<>
<Navbar/>
<Hero/>
<SecondNavbar/>
<Services/>
<About/>
<Doctors/>
<OtherServices/>
<HowWeWork/>
<ContactUs/>
<Testimonial/>
<NewsBlog/>
<Footer/>
</>
  );
}
export default App;
