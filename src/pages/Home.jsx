import { ReactLenis } from "lenis/dist/lenis-react";

import { useState, useEffect } from "react";

import Preloader from "../components/Preloader";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import OurWork from "../sections/OurWork";
import ServiceCards from "../sections/ServiceCards";
import Testimonials from "../sections/Testimonials";
import Blogs from "../sections/Blogs";
import Cta from "../sections/Cta";
import Footer from "../sections/Footer";


const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      <ReactLenis root options={{ duration: 1.2}}>
      {loading ? <Preloader /> : <Hero />}
      <About />
      <Services />
      <OurWork />
      <ServiceCards />
      <Testimonials />
      <Blogs />
      <Cta />
      <Footer />
      </ReactLenis>
    </div>
  );
};

export default Home;
