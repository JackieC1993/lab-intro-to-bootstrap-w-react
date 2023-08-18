import React from "react";

function Footer() {
  return (
    <div className="fixed-bottom border-top text-bg-warning">
      <div className="m-2 d-flex flex-column">
        <a href="./contact-info" className="row">
          Contact Me
        </a>
        <a href="./contact-info" className="row">
          About the Author
        </a>
      </div>
      <div className="text-end">
        <p className="m-2">Copyright @ 2023. All rights reserved. </p>
      </div>
    </div>
  );
}

export default Footer;
