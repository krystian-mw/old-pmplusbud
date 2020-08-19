import Carousel from "../components/Carousel";
import Seo from "../components/Seo";

export default function Home() {
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
      <div className="container-fluid">
        <Carousel />
      </div>
    </>
  );
}
