import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import "../styles/myaccount.css";

function MyAccount() {
  return (
    <MainLayout>
      <div>
        <h3>MY ACCOUNT</h3>
        <ul>
          <li className="myaccount">name: </li>
          <li className="myaccount">alias: </li>
          <li className="myaccount">password: </li>
        </ul>
      </div>
    </MainLayout>
  );
}

export default MyAccount;
