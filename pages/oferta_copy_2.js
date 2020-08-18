import { ContainerClass } from "../site.info";
import "../styles/Oferta.p.scss";

import { Component } from "react";

import Rellax from "react-rellax";

const images = [
  "/images/Experienced-Polish-builder-in-London-2048x1365.jpg",
  "https://static.kb.pl/static/site_media/uploads/media_image/original/wpis/999/budowa-domu.jpg",
  "https://www.build-review.com/wp-content/uploads/2019/12/Home-Renovation.jpg",
];

export default class App extends Component {
  render() {
    return (
      <div id="Oferta">
        <div className="article">
          <h1>Oferta</h1>
          <p>Tutaj bedzie opis poniewaz SEO jest bardzo wazne oraz preview</p>
        </div>
        <Rellax speed={1} as="div">
          <img src={images[0]} />
        </Rellax>
        <div className="article">
          <h1>New buildy</h1>
          <p>Doprowadzimy do stanu surowego</p>
        </div>
        <Rellax speed={1} as="div">
          <img src={images[1]} />
        </Rellax>
        <div className="article">
          <h1>Remonty</h1>
          <p>Fachowo wyremontujemy twoje cztery katy</p>
        </div>
        <Rellax speed={1} as="div">
          <img src={images[2]} />
        </Rellax>
      </div>
    );
  }
}
