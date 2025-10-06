import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="relative mt-18 bg-black">
        <div className="text-center fixed top-0 left-0 right-0  bg-white saturate-200 ">
          <img
            src="	https://indianexpress.com/wp-content/themes/indianexpress/images/indian-express-logo-n.svg"
            alt=""
            className="mx-auto saturate-200  "
          />
          <h1 className="italic text-lg">Journalism of Courage</h1>
        </div>

        <header className="bg-green-500  grid-cols-1 md:grid-cols-2 lg:grid-cols-6 p-5 text-center flex justify-around">
          <Link
            className="text-white hover:text-red-600 cursor-pointer  w-[50px]"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-white hover:text-red-600 cursor-pointer"
            to="/technology"
          >
            Technology
          </Link>
          <Link
            className="text-white hover:text-red-600 cursor-pointer"
            to="/bussiness"
          >
            Business
          </Link>
          <Link
            className="text-white hover:text-red-600 cursor-pointer"
            to="/health"
          >
            Health
          </Link>
          <Link
            className="text-white hover:text-red-600 cursor-pointer"
            to="/science"
          >
            Science
          </Link>
          <Link
            className="text-white hover:text-red-600 cursor-pointer"
            to="/sports"
          >
            Sports
          </Link>
        </header>
      </div>
    </>
  );
}

export default Header;
