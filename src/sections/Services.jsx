import {motion} from "framer-motion"
import ServiceAccordion from "../components/ServiceAccordion"

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <motion.div
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="services-header"
        >
          <span className="sub-title ">Services</span>
          <h2 className="title mt">FIND A SERVICE</h2>
        </motion.div>
        <ServiceAccordion />
      </div>
    </section>
  );
}

export default Services
