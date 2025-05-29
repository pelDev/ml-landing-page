import React, { useRef, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import "../styles/frequently_asked_question_styles.scss";
import { motion } from "framer-motion";
import ScrollAnimation from "react-animate-on-scroll";

interface IAccordion {
  heading: string;
  content: string;
}

export const FrequentlyAskedQuestion = (props: IAccordion) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const contentRef = useRef<null | HTMLParagraphElement>(null);

  const { heading, content } = props;

  return (
    <ScrollAnimation
      animateIn="fadeInUp"
      className="mb_frequently_asked_question"
    >
      <div
        className={`mb_frequently_asked_question_top ${
          menuOpened ? "is_open" : ""
        }`}
        onClick={() => setMenuOpened(!menuOpened)}
      >
        <div className="header">{heading}</div>
        <IoIosArrowUp className={`icon ${menuOpened ? "icon_up" : ""}`} />
      </div>

      <div
        ref={contentRef}
        className="text_container"
        style={{
          maxHeight: menuOpened
            ? contentRef.current?.scrollHeight + "px"
            : "0px",
          overflow: "hidden",
        }}
      >
        <motion.p
          className={`text ${menuOpened}`}
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          {content}
        </motion.p>
      </div>
    </ScrollAnimation>
  );
};
