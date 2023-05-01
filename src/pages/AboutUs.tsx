import React from "react";
import "../styles/about_us_styles.scss";
import Image from "../assets/images/about-us-image.png";
import ScrollAnimation from "react-animate-on-scroll";
import { motion } from "framer-motion";

export const AboutUs = () => {
  return (
    <div className="mb_about_us animate__animated animate__fadeIn">
      <div className="mb_about_us_container">
        <motion.div
          className="mb_about_us-top"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: 0.1 }}
        >
          <motion.div
            className="mb_about_us-top_image"
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <img src={Image} alt="laptop" />
          </motion.div>

          <motion.div
            className="mb_about_us-top_content"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <h2 className="header">Who are we?</h2>
            <p className="text">
              {" "}
              We offer courses, tutorials, and other educational materials over
              the internet. We also provide a convenient way for learners to
              access educational content from anywhere at any time. Online
              learning websites can cater to various audiences, including K-12
              students, college students, working professionals, and individuals
              seeking personal development.
            </p>
            <p className="text">
              Additionally, we can cover a wide range of subjects, from
              traditional academic disciplines such as math, science, and
              literature, to specialized areas such as coding, design, and
              business. Some online learning websites are also designed to help
              learners acquire specific job skills or prepare for certification
              exams.
            </p>
          </motion.div>
        </motion.div>
        <div className="mb_about_us-bottom">
          <h2 className="header">Frequently Asked Questions</h2>
          <div className="mb_about_us-bottom_questions"></div>
        </div>
      </div>
    </div>
  );
};
