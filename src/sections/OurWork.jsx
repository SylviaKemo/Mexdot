import { motion } from "framer-motion";

const OurWork = () => {
  const text = "Our agency is here for you to work"; // The text to animate
    return (
      <section className="our-work">
        <div className="marquee-container">
          <div className="marquee">
            <div className="marquee-inner">
              {[...Array(12)].map((_, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="our-work-content">
          <div className="work">
            <motion.div
              className="image-container"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: { duration: 1 },
              }}
              viewport={{ once: true }}
            >
              <img src="/1.jpg" alt="a bed on colourfull lights" />
            </motion.div>
            <div className="work-content">
              <span>UX / UI Design</span>
              <span>Architecture</span>

              <div>
                <h2>
                  Binge x <br />
                  The Iconic © 2021
                </h2>
              </div>
            </div>
          </div>
          <div className="work">
            <motion.div
              className="image-container"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: { duration: 1 },
              }}
              viewport={{ once: true }}
            >
              <img src="/2.jpg" alt="" />
            </motion.div>
            <div>
              <div className="work-content">
                <span>Character design </span>
                <span>Digital Art</span>

                <div>
                  <h3>
                    Me <br />
                    Myself and I © 2024
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="work">
            <motion.div
              className="image-container"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8 },
              }}
              viewport={{ once: true }}
            >
              <img src="/3.jpg" alt="" />
            </motion.div>
            <div className="work-content">
              <span>Photography </span>
              <span>Branding</span>

              <div>
                <h2>
                  Your <br />
                  Dream car © 2024
                </h2>
              </div>
            </div>
          </div>
          <div className="work">
            <motion.div
              className="image-container"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: { duration: 1 },
              }}
              viewport={{ once: true }}
            >
              <img src="/4.jpg" alt="" />
            </motion.div>
            <div className="work-content">
              <span>Photography </span>
              <span>branding</span>

              <div>
                <h2>
                  The <br />
                  Hills - Nissan © 2019
                </h2>
              </div>
            </div>
          </div>
          <div className="work">
            <motion.div
              className="image-container"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: { duration: 1 },
              }}
              viewport={{ once: true }}
            >
              <img src="/5.jpg" alt="" />
            </motion.div>
            <div className="work-content">
              <span>Photography </span>
              <span>Architecture</span>

              <div>
                <h2>
                  Church <br />
                  Copenhagen Denmark
                </h2>
              </div>
            </div>
          </div>
          <div className="work">
            <motion.div
              className="image-container"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8 },
              }}
              viewport={{ once: true }}
            >
              <img src="/6.jpg" alt="" />
            </motion.div>
            <div className="work-content">
              <span>Photography </span>
              <span>Architecture</span>

              <div>
                <h2>
                  Lost <br />
                  Render © 2023
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default OurWork;
