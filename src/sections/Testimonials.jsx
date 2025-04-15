import TestimonialCarousel from "../components/TestimonialCarousel";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container testimonials-container">
        <div className="content">
            <span className="sub-title ">Testimonials</span>
            <h2 className="title mt">WHAT PEOPLE ARE SAYING</h2>
            <p className="text">
              consumers today rely heavily on digital means to research products.we research a brand of blends.
            </p>
        </div>
        <TestimonialCarousel />
      </div>
    </section>
  );
}

export default Testimonials
