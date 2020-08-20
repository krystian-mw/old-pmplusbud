import { ContainerClass } from "../site.config";
import "../styles/pages/Oferta.scss";

import { Component } from "react";

const images = [
  "/images/Experienced-Polish-builder-in-London-2048x1365.jpg",
  "https://static.kb.pl/static/site_media/uploads/media_image/original/wpis/999/budowa-domu.jpg",
  "https://www.build-review.com/wp-content/uploads/2019/12/Home-Renovation.jpg",
];

export default class Offer extends Component {
  state = {
    var: true,
  };
  componentDidMount() {
    // Going to be a bit hackish to preserve resources
    // repo: https://github.com/geosigno/simpleParallax.js
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/simple-parallax-js@5.6.1/dist/simpleParallax.min.js";
      script.crossOrigin = "anonymous";
      script.async = true;
      script.onload = () =>
        new window.simpleParallax(document.querySelectorAll(".parallax"), {
          orientation: "up",
          scale: 2,
        });
      document.body.appendChild(script);
    }
  }
  render() {
    return (
      <div id="Oferta" className={this.state.var ? "dark" : "light"}>
        <section>
          <article>
            <h1>Oferta</h1>
            <p>Tutaj bedzie opis poniewaz SEO jest bardzo wazne oraz preview</p>
          </article>
          <img className="parallax" src={images[0]} />
        </section>

        <section>
          <article>
            <h1>New buildy</h1>
            <p>Doprowadzimy do stanu surowego</p>
          </article>
          <img className="parallax" src={images[1]} />
        </section>

        <section>
          <article>
            <h1>Remonty</h1>
            <p>Fachowo wyremontujemy twoje cztery katy</p>
          </article>
          <img className="parallax" src={images[2]} />
        </section>

        <button onClick={() => this.setState({ var: !this.state.var })} style={{
            width: '50%',
            display: 'block',
            margin: '2rem auto',
            border: 'none',
            borderRadius: '0px'
        }}>
          Switch var
        </button>
      </div>
    );
  }
}
