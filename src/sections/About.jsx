import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

import ScrollImage from "../components/ScrollImage";

const About = () => {

  return (
    <div className="about">
      <div className="container about__container">
        <div
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="about__content"
        >
          <span className="sub-title">About me</span>
          <h2 className="title mt">What Can I Do</h2>
          <p>
            In my work, I try to find the right balance between form and
            function. From technical drawings, all the way to the photographic
            renders, and the actual representations of my work as a designer.
          </p>
          <div className="about-link">
            <p>
              <Link to="/">About us</Link>
            </p>
            <p>
            <Link to="/">
              <MdArrowOutward />
            </Link>
            </p>
          </div>
        </div>
        <ScrollImage />
      </div>
    </div>
  );
};

export default About;
