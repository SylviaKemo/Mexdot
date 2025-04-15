import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";


import { FaStar } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";


const TestimonialCarousel = () => {
    const testimonials = [
      {
        id: 1,
        name: "Envato User",
        title: "mtl Graphic",
        img: "/t-1.jpg",
        content:
          "we full service digital agency that build's facinating users experience...",
      },
      {
        id: 2,
        name: "Envato User",
        title: "mtl Graphic",
        img: "/t-1.jpg",
        content:
          "we full service digital agency that build's facinating users experience...",
      },
      {
        id: 3,
        name: "Envato User",
        title: "mtl Graphic",
        img: "/t-1.jpg",
        content:
          "we full service digital agency that build's facinating users experience...",
      },
    ];


  return (
    <div className="testimonial-carousel">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 5000, 
          disableOnInteraction: false, 
        }}
        loop={true}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id} style={{ cursor: "grab" }}>
            <div className="testimonial">
              <div className="testimonial-content">
                <div className="rating">
                  <h3>4.9</h3>
                  <span>
                    <FaStar style={{ color: "#ffd43b" }} />
                  </span>
                  <p>Out of 5 stars</p>
                </div>
                <p className="testimonial-header">{testimonial.content}</p>
                <div className="quotation">
                  <FaQuoteRight />
                </div>
              </div>
              <div className="testimonial-user">
                <img src={testimonial.img} alt="a man" />
                <div>
                  <h3>{testimonial.title}</h3>
                  <p>{testimonial.name}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
    

export default TestimonialCarousel;
