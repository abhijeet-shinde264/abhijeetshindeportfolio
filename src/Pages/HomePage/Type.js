import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Android Developer",
          "Python Developer",
          "SAP CPQ Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 70,
      }}
    />
  );
}

export default Type;
