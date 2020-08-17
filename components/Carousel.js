import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "../styles/Carousel.c.scss";

const Slides = [
  "/images/professional-house-renovation.jpg",
  "/images/London-Builder-House.jpg",
  "/images/Trusted-Builder-in-London.jpg",
];

export default function FrontCarousel() {
  return (
    <div id="Carousel" className="row">
      <Carousel
        showStatus={false}
        showThumbs={false}
        dynamicHeight={false}
        infiniteLoop={true}
        stopOnHover={false}
        autoPlay={true}
        transitionTime={500}
        swipeable={true}
      >
        {Slides.map((image) => (
          <div key={image}>
            <img className="carousel-image" src={image} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
