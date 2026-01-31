import React from "react";
import Special from "./Special";
import Friend from "./Friend";

const Cousin = ({ name }) => {
  return (
    <div>
      <h3>{name}</h3>
      {name === "Tom Tum" && <Special></Special>}
      {name === "Jojo jeje" && <Friend></Friend>}
    </div>
  );
};

export default Cousin;
