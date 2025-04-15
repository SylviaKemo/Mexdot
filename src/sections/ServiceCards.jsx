import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";


const ServiceCards = () => {
  return (
    <section className="service-cards">
      <div className="service-cards-container">
        <div className="card-1">
          <h3>
            Come and experience the world of <span>creative</span> agency!
          </h3>
          <p>
            Fusce at enim vel ante tempor rutrum. Cras euismod condimentum ex
            pharetra congue. Etiam in risus feugiat, finibus nulla nec
          </p>
          <div className="counter">
            <div className="counter-item">
              <h3>93k</h3>
              <p>project 👌completed</p>
            </div>
            <div className="counter-item">
              <h3>85k</h3>
              <p>Customers ❤️love Us</p>
            </div>
          </div>
        </div>
        <div className="card-2">
          <div className="tab">
            <p>ui design</p>
            <p>Development</p>
          </div>
          <div className="card-2-cta">
            <h3>Do you have a project to develop?</h3>
            <div className="link">
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
        </div>
      </div>
    </section>
  );
}

export default ServiceCards
