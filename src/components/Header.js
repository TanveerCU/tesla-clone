import React, { useRef } from "react";
import Navbutton from "./Navbutton";

function Header() {
  const myref = useRef(0);
  console.log(myref.current.offsetHeight);
  return (
    <div
      className="w-screen flex justify-between items-center px-5 py-5 fixed"
      ref={myref}
    >
      <a href="http://localhost:3000/">
        <img
          src="logo.svg"
          className="pl-5 w-40 h-4 cursor-pointer flex-1"
          alt="logo"
        />
      </a>
      <Navbutton />
    </div>
  );
}

export default Header;
