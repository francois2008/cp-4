import React from "react";
import "../styles/signin.css";
import MainLayout from "../components/layouts/MainLayout";

function SignIn() {
  return (
    <MainLayout>
      <div>
        <h3>SIGN IN</h3>
        <form className="form-signin">
          <label htmlFor="name" className="label-signin">
            Name :
            <input type="text" name="name" className="input-signin" />
          </label>
          <label htmlFor="alias" className="label-signin">
            Alias :
            <input type="text" name="alias" className="input-signin" />
          </label>
          <label htmlFor="password" className="label-signin">
            Password :
            <input type="text" name="password" className="input-signin" />
          </label>
          <input type="submit" value="VALIDATE" className="input-valid" />
        </form>
      </div>
    </MainLayout>
  );
}

export default SignIn;
