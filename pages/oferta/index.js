import { Component } from "react";

import Seo from "../../components/Seo";

import "../../styles/pages/Oferta.scss";

const ContainerClass = process.env.NEXT_PUBLIC_CONTAINER_CLASS;
const Breakpoint = process.env.NEXT_PUBLIC_BREAKPOINT;

const ImageRoot = process.env.NEXT_PUBLIC_IMAGE_ROOT;

const offers = [
  {
    title: `Wznoszenia Bydunków`,
    description: `Wzeniesemy domy hale itd`,
    image: `/oferta/stolarz-mierzy-deske`,
    alt: `stolarz mierzy deske na budowie`,
  },
  {
    title: `Prace Wykończeniowe`,
    description: ``,
    image: `/oferta/plan-domu-3d`,
    alt: `zarys domu w 3d do zbudowania przez firme budowlana`,
  },
];

const Card = ({ title, description, image, alt, className }) => (
  <div className={className}>
    <h2>{title}</h2>
    <div className="card-content">
      <img
        src={`${ImageRoot}/ar_1.77,c_fill,g_auto,f_auto,q_70,w_200${image}.webp`}
        alt={alt}
      />
      <p>{description}</p>
    </div>
  </div>
);

export default function Oferta() {
  const ColClass = `col-12 col-${Breakpoint}-6`;
  return (
    <>
      <Seo
        title="PM+BUD - Oferty od Firmy Budowlanej"
        description={
          `Unikatowe oferty od Profesjonalnej ` +
          `firmy PM+BUD działającej na Województwie Małopolskim`
        }
        og={{
          title: `PM+BUD - Oferty od Firmy Budowlanej`,
          image:
            `${ImageRoot}/c_fill,g_auto,f_auto,q_70,w_1200` +
            `/oferta/stolarz-mierzy-deske.webp`,
          url: `https://pmplusbud.pl/oferta`,
        }}
      />
      <div id="Oferta" className={ContainerClass}>
        <h1>Oferta</h1>
        <div className="row">
          {offers.map((offer) => (
            <Card
              className={`card ${ColClass}`}
              key={offer.title}
              title={offer.title}
              description={offer.description}
              image={offer.image}
              alt={offer.alt}
            />
          ))}
        </div>
      </div>
    </>
  );
}
