import React from "react";
import Father from "./Father";
import Uncle from "./Uncle";
import Aunt from "./Aunt";

const Grandpa = ({ asset }) => {
  return (
    <div>
      <h3>Grandfather</h3>
      <section className="flex">
        <Father asset={asset}></Father>
        <Uncle></Uncle>
        <Aunt></Aunt>
      </section>
    </div>
  );
};

export default Grandpa;
