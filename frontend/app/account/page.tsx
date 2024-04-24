import React from "react";
import AccountContainer from "./components/account-container";
import SideBar from "./components/sidebar";

export default function Account() {
  return (
    <main>
      <SideBar />
      <AccountContainer />
    </main>
  );
}
