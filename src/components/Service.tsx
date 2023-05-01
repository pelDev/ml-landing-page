import "../styles/services_styles.scss";
import { BsArrowRight } from "react-icons/bs";
import ScrollAnimation from "react-animate-on-scroll";

interface IService {
  listHeader: string;
  image: string;
  order?: "reverse";
  listItems: string[];
}
export const Service = (props: IService) => {
  const { image, listHeader, listItems, order } = props;
  return (
    <div className="mb_service">
      <ScrollAnimation
        className={`mb_service_list ${order === "reverse" && "reverse"}`}
        animateIn={order === "reverse" ? "slideInLeft" : "slideInRight"}
      >
        <h3 className="mb_service_list_header">{listHeader}</h3>
        <ul className="mb_service_list_container">
          {listItems.map((item, index) => (
            <li className="mb_service_list_item">
              <BsArrowRight className="mb_service_list_item_icon" key={index} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </ScrollAnimation>

      <ScrollAnimation
        className="mb_service_image_container"
        animateIn={order === "reverse" ? "slideInRight" : "slideInLeft"}
      >
        <img src={image} alt="image" />
      </ScrollAnimation>
    </div>
  );
};
