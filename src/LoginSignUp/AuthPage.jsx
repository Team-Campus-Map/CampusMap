import React from "react";
import Header from "../Header/Header";
import Container from "./Container";
const AuthPage = (props) => {
  return (
    <div className="loginBody">
      <Header />
      <div>
        <Container />
      </div>
    </div>
  );
};

export default AuthPage;
