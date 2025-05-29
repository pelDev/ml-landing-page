import { Service } from ".";
import "../styles/services_offered_styles.scss";
import { motion } from "framer-motion";
import Image from "../assets/images/services_offered_image_1.png";
import Image2 from "../assets/images/services_offered_image_2.png";
import Image3 from "../assets/images/services_offered_image_3.png";
import Animations from "../utils/Animations";
import ScrollAnimation from "react-animate-on-scroll";

export const ServicesOffered = () => {
  return (
    <div className="mb_services_offered">
      <div className="mb_services_offered_container">
        <motion.h2
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mb_services_offered_container-header"
        >
          What we offer
        </motion.h2>
        <div className="mb_services_offered_content">
          <Service
            listHeader="Appointment Scheduling"
            image={Image}
            listItems={[
              "Scheduling tutors for student",
              "Organized calender",
              "Hosting both personal and group classes",
              "One-click recordings",
            ]}
          />
          <Service
            listHeader="Video Conferencing"
            order="reverse"
            image={Image2}
            listItems={[
              "Scheduling tutors for student",
              "Organized calender",
              "Hosting both personal and group classes",
              "One-click recordings",
            ]}
          />
          <Service
            listHeader="Non subscription"
            image={Image3}
            listItems={[
              "Scheduling tutors for student",
              "Organized calender",
              "Hosting both personal and group classes",
              "One-click recordings",
            ]}
          />
        </div>
      </div>
    </div>
  );
};
