import React from "react";
import { FaArrowDown } from "react-icons/fa";

const Button = ({ text, className, id }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();

        const target = document.getElementById("counter");

        if (target && id) {
          const offset = window.innerHeight * 0.15;

          const top =
            target.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      className={`${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text font-semibold">{text}</p>
        <div className="arrow-wrapper">
          <FaArrowDown className="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
