import React from "react";
import Profile from "./profile/Profile";
import user from "../user.json";
import Statistic from "./statistic/Statistic";
import statistic from "../statistical-data.json";

const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistic statistic={statistic} />
    </>
  );
};

export default App;
