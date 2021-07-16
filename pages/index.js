// domain/
import Link from "next/link";
import { Fragment } from "react";

const HomePage = () => {
  return (
    <Fragment>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            NewJS Is A Great Framework
          </Link>
        </li>
        <li>
          <Link href="/news/something-else">Something else...</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default HomePage;
