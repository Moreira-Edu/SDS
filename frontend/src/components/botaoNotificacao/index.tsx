import React from "react";
import avatar from "@/assets/avatar-icon.svg";
import "./styles.css";

const BotaoNotificacao = () => {
  return (
    <div role={"button"} className="dsmeta-red-btn">
      <img src={avatar} alt="avatar de usuário" />
    </div>
  );
};

export default BotaoNotificacao;
