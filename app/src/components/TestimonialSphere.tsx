import React, { useEffect } from "react";
import "../styles/testimonial_sphere_styles.scss";
// Importing TagCloud package
import TagCloud, { TagCloudOptions } from "TagCloud";
import image from "../../../assets/images/avatar_1.png";
export const TestimonialSphere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container: any = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "SASS",
        "JavaScript",
        "React",
        "Vue",
        "Nuxt",
        "NodeJS",
        "Babel",
        "Jquery",
        "ES6",
        "GIT",
        "GITHUB",
      ];

      const options: TagCloudOptions = {
        radius: 300,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <>
      <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  );
};
