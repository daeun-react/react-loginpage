import React from "react";
import "assets/css/login.css";
import Navbars from "./Navbars";

function LoginPage() {
  return (
    <>
      <Navbars />
      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")",
        }}
      >
        aaa
      </div>
      <div className="filter"></div>
      <div className="footer"></div>
    </>
  );
}

export default LoginPage;
