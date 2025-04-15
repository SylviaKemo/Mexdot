import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <section className="cta">
      <div className='m'>
      <div className="cta-container ">
        <div className="cta-grid-1">
          <h3>
            Hire a<br></br> proffessional<br></br> designer or developer
          </h3>
          <div className="cta-link">
            <p>
              <Link to="/">Request a free</Link>
            </p>
            <p>
              <Link to="/">
                <MdArrowOutward />
              </Link>
            </p>
          </div>
        </div>
        <div className="cta-grid-2">
          <div className="cta-profile">
            <div className="image-stack">
              <img src="/t-1.jpg" alt="" />
              <img src="/t-2.jpg" alt="" />
              <img src="/t-3.jpg" alt="" />
            </div>
            <div className="details">
              <p>
                Expert <span>20+</span>
              </p>
              <p>Designers</p>
            </div>
          </div>

          <h2>Do not hesitate to contact us<br></br> to❤️ say hello</h2>

          <p className="contact">123 456 789</p>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Cta
