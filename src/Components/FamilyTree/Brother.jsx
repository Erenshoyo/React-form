import React, { use } from "react";
import { MoneyContext } from "./FamilyTree";

const Brother = () => {
  const [money, setMoney] = use(MoneyContext);
  return (
    <div>
      <h3>Brother</h3>
      <button
        onClick={() => {
          setMoney(money + 1000);
        }}
      >
        Add Money
      </button>
    </div>
  );
};

export default Brother;
