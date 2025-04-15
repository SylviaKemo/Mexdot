import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero">
      <Navbar />
      <div className="hero-content">
        <motion.h1
          className="hero-header"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Building <br /> Beautiful Bridges
        </motion.h1>
        <motion.p
          className="hero-text"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Premium Web Design,Development, and SEO
          <br /> services to help your business stand out.
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
