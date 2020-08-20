import Head from "next/head";

import { Carousel } from "react-responsive-carousel";
import { useInView } from "react-intersection-observer";

import { imageBaseSrc, srcSetSizes } from "../site.config";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import "../styles/components/Carousel.scss";

const Slides = [
  "/carousel/budowlancy-zakladaja-izolacje-i-maluja.webp",
  "/carousel/ogolnobudowlaniec-wierci-dziure-w-scianie.webp",
  "/carousel/pracownik-zaklada-metalowe-ogrodzenie.webp",
  "/carousel/murarz-muruje-pustakami-ceramicznymi.webp",
];

const Slide = ({ src }) => {
  let toPreFetch = [imageBaseSrc + src];
  const [ref, inView, entry] = useInView({
    triggerOnce: true,
  });

  let srcSet = "";

  srcSetSizes.forEach((size, index) => {
    toPreFetch.push(`${imageBaseSrc}${size.transformation}${src}`);
    srcSet += `${imageBaseSrc}${size.transformation}${src} ${size.width}${
      index !== srcSetSizes.length ? ", " : ""
    }`;
  });

  return (
    <>
      <Head>
        {toPreFetch.map((image) => (
          <link rel="prefetch" href={image} />
        ))}
      </Head>
      <img
        ref={ref}
        sizes="(min-width: 30em) 28em, 100vw"
        src={inView ? imageBaseSrc + src : null}
        srcSet={inView ? srcSet : null}
      />
    </>
  );
};

export default function FrontCarousel() {
  return (
    <>
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
            <div className="carousel-image" key={image}>
              <Slide src={image} />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
