import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";


const ScrollImage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], 
  });

  // Detect when the third image is in view
  const { ref: inViewRef } = useInView({ threshold: 0 });

  
  const y = useTransform(scrollYProgress, [0, 1], [-150, 0]); 

  
  const xRightToLeft = useTransform(scrollYProgress, [0, 1], [100, 50]);

  return (
    <section className="scroll-image">
      <div className="about__images">
        <motion.div
          style={{ x: xRightToLeft }}
          ref={ref}
         
        >
          <img ref={inViewRef} src="/img-seat.jpg" alt="a long tarmack road" />
        </motion.div>

        <div>
          <img src="/img-under-header.jpg" alt="a penthouse" />
        </div>

        <motion.div
          style={{ y }}
        >
          <img src="/hero-2.jpg" alt="people walking in a city" />
        </motion.div>
      </div>
    </section>
  );
};
export default ScrollImage;
