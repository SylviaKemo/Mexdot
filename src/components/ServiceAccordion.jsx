import { useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FiArrowDownLeft } from "react-icons/fi";
import { motion} from "framer-motion";

const ServiceAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    {
      title: "UI/UX",
      content:
        "Our branding services cover every aspect of your brand's development, from logo creation to voice and style guidelines.",
      contentList: [
        "CMS Integration",
        "Motion & Animations",
        "3D Development",
        "3D Development",
      ],
    },
    {
      title: "BRAND",
      content:
        "Our branding services cover every aspect of your brand's development, from logo creation to voice and style guidelines",
      contentList: ["CMS Integration", "Motion & Animations", "3D Development"],
    },
    {
      title: "ANIMATION",
      content:
        "Our branding services cover every aspect of your brand's development, from logo creation to voice and style guidelines.",
      contentList: ["CMS Integration", "Motion & Animations", "3D Development"],
    },
  ];

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <motion.div
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          key={index}
          className="accordion-item"
        >
          <div className="accordion-header" onClick={() => toggleItem(index)}>
            <h2 className="title mt">{item.title}</h2>
            <span className="icon">
              {activeIndex === index ? (
                <FiArrowDownLeft />
              ) : (
                <MdOutlineArrowOutward />
              )}
            </span>
          </div>

            {activeIndex === index && (
              <div
                className="accordion-content"
              >
                <p>{item.content}</p>
                <ul>
                  {item.contentList.map((listItem, listIndex) => (
                    <li key={listIndex}>{listItem}</li>
                  ))}
                </ul>
              </div>
            )}
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceAccordion;
