import React from "react";
import "../styles/logout.css";

function LogOut() {
  const handleSubmit = () => {
    localStorage.removeItem("TOKEN");
    alert("Disconnected successfully");
  };

  return (
    <form>
      <button className="logout" type="button" onClick={handleSubmit}>
        Log Out
      </button>
    </form>
  );
}

export default LogOut;
