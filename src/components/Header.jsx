import React from "react";
import Nav from ".Nav";

function Header() {
  return (
    <>
      <Nav />
      <div className="col">
        <p className=" border-top border-bottom py-5 text-center bg-light script-font fs-1 display-6">
          Travel is the only thing you buy that makes you richer . . .
        </p>
      </div>
    </>
  );
}

export default Header;
