import "../styles/download_app_styles.scss";
import Apple from "../assets/icons/apple-icon.png";
import GooglePlay from "../assets/icons/play-store-icon.png";
import Phone from "../assets/images/phones.png";
import ScrollAnimation from "react-animate-on-scroll";

export const DownloadApp = () => {
  return (
    <div className="mb_download_app">
      <div className="mb_download_app_container">
        <div className="mb_download_app_left">
          <ScrollAnimation
            animateIn="fadeIn"
            className="mb_download_app_left_header"
          >
            “Get connected with Experienced tutors”
          </ScrollAnimation>
          <p className="mb_download_app_left_content">
            Empower yourself through learning with our interactive app!! Get
            quality learning experience by connecting with tutors.
          </p>
          <ScrollAnimation
            animateIn="fadeInUp"
            className="mb_download_app_left_btn-container"
          >
            <button className="mb_download_app_left_btn">
              <div className="mb_download_app_left_btn-image">
                <img src={Apple} alt="Apple Icon" />
              </div>
              <p>
                Download on the <br /> <span>App Store</span>
              </p>
            </button>
            <button className="mb_download_app_left_btn">
              <div className="mb_download_app_left_btn-image">
                <img src={GooglePlay} alt="Google Play Store Icon" />
              </div>
              <p>
                Get it on <br /> <span>Google Play</span>
              </p>
            </button>
          </ScrollAnimation>
        </div>
        <ScrollAnimation animateIn="zoomIn" className="mb_download_app_right">
          <img src={Phone} alt="phone" />
        </ScrollAnimation>
      </div>
    </div>
  );
};
