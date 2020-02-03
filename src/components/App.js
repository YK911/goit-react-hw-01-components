import React from "react";
import Profile from "./profile/Profile";
import user from "../user.json";
import Statistic from "./statistic/Statistic";
import statistic from "../statistical-data.json";
import FriendList from "./friendList/FriendList";
import friends from "../friends.json";
import TransactionsHistory from "./transactionsHistory/TransactionsHistory";
import transactions from "../transactions.json";

const mainBackground = {
  boxSizing: "border-box",
  backgroundColor: "#e7ecf2",
  margin: 0,
  padding: "20px 20px"
};

export const App = () => {
  return (
    <div style={{ ...mainBackground }}>
      <Profile user={user} />
      <Statistic statistic={statistic} />
      <FriendList friends={friends} />
      <TransactionsHistory items={transactions} />
    </div>
  );
};
