import React from "react";
import Header from "../commons/Header";
import NavBar from "../commons/NavBar";
import Log from "../commons/Log";

function MainLayout(props) {
  const { children } = props;
  return (
    <div>
      <div className="header">
        <Header />
        <div className="link">
          <NavBar />
          <Log />
          <main>{children} </main>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
