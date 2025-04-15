import { motion } from "framer-motion";

const progressBarVariants = {
  initial: { width: "0%" }, 
  animate: {
    width: "150px", 
    transition: { duration: 2, ease: "easeInOut" },
  },
};

const Preloader = () => {
  return (
    <div className="preloader" style={{ textAlign: "center" }}>
      <h2 className="preloader-header tracking-in-expand">MEXDOT</h2>
      <motion.div
        className="progress-bar"
        variants={progressBarVariants}
        initial="initial"
        animate="animate"
        style={{
          height: "5px",
          background: "#fff",
          borderRadius: "5px",
        }}
      />
      <div className="preloader-content">
        <img src="/logo-light.png" alt="Logo" />
        <span></span>
        <p>Loading ...</p>
      </div>
    </div>
  );
};

export default Preloader;
