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
  return (
    <>
      <Head>
        <link
          key={src}
          rel="prefetch"
          href={`${imageBaseSrc}${
            srcSetSizes[srcSetSizes.length - 1].transformation
          }${src}`}
          as="image"
          crossOrigin="anonymous"
        />
      </Head>
      <img
        src={`${imageBaseSrc}${
          srcSetSizes[srcSetSizes.length - 1].transformation
        }${src}`}
        crossOrigin="anonymous"
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
