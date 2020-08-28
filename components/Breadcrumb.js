import Link from "next/link";

import '../styles/components/Breadcrumb.scss'

export default function BC({ path }) {
  return (
    <span id="Breadcrumb">
      {path.map((child, index) => (
        <>
          <Link href={child.href}>
            <a>{child.text}</a>
          </Link>
          {path.length > index + 1 && `>>`}
        </>
      ))}
    </span>
  );
}
