import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>home</h1>
      <ul>
        <li>
          <Link to="/ironMan">IRON MAN PAGE</Link>
        </li>
        <li>
          <Link to="/search">SEARCH PAGE</Link>
        </li>
      </ul>
    </div>
  );
}
