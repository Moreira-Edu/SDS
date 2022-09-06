import React from "react";
import logo from "@/assets/logo.svg";
import "./styles.css";
const Header = () => {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="Logo DSMeta" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por
          <a target={"blank"} href="https://linktr.ee/edu_moreira">
            Eduardo Moreira
          </a>
        </p>
      </div>
    </header>
  );
};

export default Header;
