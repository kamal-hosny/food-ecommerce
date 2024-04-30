import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  return (
    <footer>
      <span>
        &copy;{`${date.getFullYear()}`}
        <Link target="_blank" to={"https://github.com/kamal-hosny"}>
          Kamal Hosny
        </Link>
        All Reversed.
      </span>
    </footer>
  );
};

export default Footer;
