import { ContainerClass } from "../site.info";
import "../styles/Oferta.p.scss";

import { Component } from "react";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default class App extends Component {
  render() {
    return (
      <div id="Oferta">
        <Parallax pages={3} ref={(ref) => (this.parallax = ref)}>
          <ParallaxLayer offset={0} speed={1}>
            <div className="title">
              <h1>Oferta</h1>
              <p>
                Tutaj bedzie opis poniewaz SEO jest bardzo wazne oraz preview
              </p>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={0.25} speed={2}>
            <img src="/images/Experienced-Polish-builder-in-London-2048x1365.jpg" />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={1}>
            <div className="article">
              <h1>New buildy</h1>
              <p>Doprowadzimy do stanu surowego</p>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={1.25} speed={1}>
            <img src="https://static.kb.pl/static/site_media/uploads/media_image/original/wpis/999/budowa-domu.jpg" />
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={1}>
            <div className="row article">
              <h1>Remonty</h1>
              <p>Fachowo wyremontujemy twoje cztery katy</p>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={2.25} speed={1}>
            <img src="https://www.build-review.com/wp-content/uploads/2019/12/Home-Renovation.jpg" />
          </ParallaxLayer>
        </Parallax>
      </div>
    );
  }
}
