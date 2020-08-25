import Carousel from "../components/Carousel";

import Seo from "../components/Seo";

import "../styles/pages/Home.scss";

const ContainerClass = process.env.NEXT_PUBLIC_CONTAINER_CLASS;
const Breakpoint = process.env.NEXT_PUBLIC_BREAKPOINT;

/**
 * Home Page Component
 * @component Home
 */
export default function Home() {
  const ColClass = `col-12 col-${Breakpoint}-6`;
  return (
    <>
      <Seo
        title="PM Plus Bud - Twoi fachowcy"
        description="Profesjonalna firma Budowlana"
        og={{
          title: "PM Plus Bud - Twoi fachowcy",
          type: "website",
          url: "https://pmplusbud.vercel.app/",
          image: "/icons/android-chrome-512x512.png",
        }}
      />
      <div id="Home" className="container-fluid">
        <div className="row">
          <div className={`about ${ColClass}`}>
              <h1>PM+BUD</h1>
            <h2>Twoi Fachowcy</h2>
          </div>
          <div className={`${ColClass}`}>
            <Carousel />
          </div>
        </div>
      </div>
    </>
  );
}
