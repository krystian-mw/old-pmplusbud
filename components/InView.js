import { useInView } from "react-intersection-observer";

export default function InView({
  children,
  threshold = 0.2,
  triggerOnce = true,
}) {
  const [ref, inView, entry] = useInView({
    threshold,
    triggerOnce,
  });

  return typeof window === "undefined" ? null : (
    <div className={inView ? `` : `NOT_IN_VIEW`} children={children} />
  );
}
