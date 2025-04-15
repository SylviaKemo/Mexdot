import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container footer-container">
        <div className="footer-grid-1">
          <h2>
            Time to<br></br> Roar!
          </h2>
          <div className="footer-link">
            <p >
              <Link to="/">
                Request a free
              </Link>
            </p>
            <p>
              <Link to="/">
                <MdArrowOutward />
              </Link>
            </p>
          </div>
        </div>
        <div className="footer-grid-2">
          <div className="footer-grid-2-1">
            <div>
              <h3>Email Address</h3>
              <p>doclabgroup@gmail.com</p>
            </div>
            <div>
              <h3>Call Info</h3>
              <p>91 9823 493</p>
            </div>
            <div>
              <h3>Skype</h3>
              <p>DOCLAB.THEME</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
