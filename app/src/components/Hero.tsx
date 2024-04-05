import "../styles/hero_styles.scss";
import { motion } from "framer-motion";
import Animations from "../utils/Animations";
import { IconContext } from "react-icons";
import BG from "../assets/images/HeroImage2.png";
import { TextSequence } from "./";
import { BsArrowRight } from "react-icons/bs";

export const Hero = () => {
  let easeing = [0.6, -0.05, 0.01, 0.99];
  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

  const { stagger, star, fadeInUp, btnGroup, letter, firstName } =
    new Animations();

  const firstNameLetters = ["Every", "one", "can"];
  const lastNameLetters = ["Learn", "&", "Teach", "Live."];

  return (
    <motion.div
      className="hero_content_wrapper"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: easeing }}
    >
      <div className="hero_content_wrapper_container">
        <motion.div
          className="hero_content_wrapper_left"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="hero_content_wrapper_left_inner">
            <motion.h2 className="hero_main_text">
              <TextSequence words={firstNameLetters} className="first" />
              <TextSequence words={lastNameLetters} className="last" />
            </motion.h2>

            <motion.span
              className="hero_desc"
              initial="initial"
              animate="animate"
              variants={fadeInUp()}
            >
              <motion.span>
                We are dedicated to providing high-quality education that is
                accessible and engaging to everyone.
              </motion.span>
            </motion.span>

            <motion.span
              initial="initial"
              animate="animate"
              variants={stagger()}
            >
              <motion.div className="btn_group">
                <motion.div
                  animate={{
                    x: [0, 10, 0],
                    transition: { duration: 1.5, repeat: Infinity },
                  }}
                  transition={{ duration: 1.5 }}
                  variants={btnGroup()}
                >
                  <IconContext.Provider
                    value={{
                      color: "#272727",
                      size: "45px",
                    }}
                  >
                    <BsArrowRight />
                  </IconContext.Provider>
                </motion.div>

                <motion.button
                  className="btn btn_primary"
                  variants={btnGroup()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open("https://app.mobilearnings.com")}
                >
                  Get Started
                </motion.button>
              </motion.div>
            </motion.span>
          </div>
        </motion.div>

        <motion.div className="hero_content_wrapper_right">
          <motion.img
            src={BG}
            alt="bg"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};
