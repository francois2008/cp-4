import React, { useState } from "react";
import axios from "axios";
import "../styles/login.css";
import MainLayout from "../components/layouts/MainLayout";

function LogIn() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const { REACT_APP_SERVER_ADDRESS } = process.env;
    if (name && password) {
      axios
        .post(`${REACT_APP_SERVER_ADDRESS}/login/`, {
          name,
          password,
        })
        .then((res) => res.data)
        .then((data) => {
          localStorage.setItem("TOKEN", data.token);
          alert("Logged successfully");
        })
        .catch((err) => {
          alert(err.response.data.errorMessage);
        });
    } else {
      alert("need name and password ");
    }
  };

  return (
    <MainLayout>
      <div>
        <h3>LOG IN</h3>
        <form className="form-login">
          <label htmlFor="name" className="label-login">
            Name :
            <input
              type="text"
              name="name"
              className="input-login"
              id="name"
              placeholder="peter"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label htmlFor="password" className="label-login">
            Password :
            <input
              type="password"
              name="password"
              className="input-login"
              id="password"
              placeholder="***********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <input
            type="submit"
            value="VALIDATE"
            className="input-valid"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </MainLayout>
  );
}

export default LogIn;
