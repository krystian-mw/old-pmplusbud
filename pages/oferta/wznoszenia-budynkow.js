import Seo from "../../components/Seo";

const ContainerClass = process.env.NEXT_PUBLIC_CONTAINER_CLASS;

export default function PodOferta() {
  return (
    <div id="PodOferta" className={ContainerClass}>
        <div className="title"></div>
      <h1>Wznoszenia Budynków</h1>
    </div>
  );
}
