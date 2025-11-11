import React from "react";
import TryNowPage from "../pages/TryNowPage";
import UpcomingToys from "../pages/UpcomingToys";

const RightAside = () => {
  return (
    <div>
      <section>
        <TryNowPage></TryNowPage>
      </section>
      <section>
        <UpcomingToys></UpcomingToys>
      </section>
    </div>
  );
};

export default RightAside;
