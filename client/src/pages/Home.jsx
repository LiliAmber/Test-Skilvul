import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/giphy.jpg";

export default function Home() {
  return (
    <div className="container py-24 px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto flex flex-col justify-center items-center">
      <h1 className="flex justify-center text-center text-gray-500 py-4 font-extrabold -mt-3 text-4xl md:text-5xl ">
        WELCOME TO YOUR GIPHY
      </h1>
      <img
        src={logo}
        alt="giphy"
        width="500"
        height="250"
        className="flex flex-col justify-center items-center rounded-md"
      />
      <ul>
        <li>
          <Link
            to="/ironMan"
            className="flex justify-center text-blue-500 text-center font-semibold hover:underline my-8 mx-7"
          >
            IRON MAN GIPHY
          </Link>
        </li>
        <li>
          <Link
            to="/search"
            className="flex justify-center text-blue-500 text-center font-semibold hover:underline my-8 mx-7"
          >
            SEARCH YOUR GIPHY
          </Link>
        </li>
      </ul>
    </div>
  );
}
