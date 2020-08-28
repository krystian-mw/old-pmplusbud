import Link from "next/link";

import { Fragment } from "react";

import "../styles/components/Breadcrumb.scss";

export default function BC({ path }) {
    return null
  return (
    <span id="Breadcrumb">
      {path.map((child, index) => (
        <Fragment key={index}>
          <Link href={child.href}>
            <a>{child.text}</a>
          </Link>
          {path.length > index + 1 && `>>`}
        </Fragment>
      ))}
    </span>
  );
}
