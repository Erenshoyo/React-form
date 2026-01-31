import React, { use } from "react";
import Cousin from "./Cousin";
import { MoneyContext } from "./FamilyTree";

const Aunt = () => {
  const [money, setMoney] = use(MoneyContext);

  return (
    <div>
      <h3>Aunt</h3>
      <section className="flex">
        <Cousin name="Tom Tum"></Cousin>
        <Cousin name="Jojo jeje"></Cousin>
      </section>
              <button
          onClick={() => {
            setMoney(money + 5000);
          }}
        >
          Add Money
        </button>
    </div>
  );
};

export default Aunt;
