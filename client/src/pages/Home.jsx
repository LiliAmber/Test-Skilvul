import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>home</h1>
      <Link to="/ironMan">IRON MAN PAGE</Link>
    </div>
  );
}
