import React from "react";
import "../styles/login.css";
import MainLayout from "../components/layouts/MainLayout";

function LogIn() {
  return (
    <MainLayout>
      <div>
        <h3>LOG IN</h3>
        <form className="form-login">
          <label htmlFor="name" className="label-login">
            Name :
            <input type="text" name="name" className="input-login" />
          </label>
          <label htmlFor="password" className="label-login">
            Password :
            <input type="text" name="password" className="input-login" />
          </label>
          <input type="submit" value="VALIDATE" className="input-valid" />
        </form>
      </div>
    </MainLayout>
  );
}

export default LogIn;
