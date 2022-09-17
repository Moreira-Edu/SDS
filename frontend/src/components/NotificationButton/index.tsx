import React from "react";
import avatar from "@/assets/avatar-icon.svg";
import "./styles.css";
import axios from "axios";
import { BASE_URL } from "@/utils/request";

type Props = {
  saleId: number;
};

const handleClick = (saleId: number) => {
  axios
    .get(`${BASE_URL}/sales/${saleId}/notification`)
    .then((res) => console.log(res));
};
const NotificationButton = ({ saleId }: Props) => {
  return (
    <div
      role={"button"}
      className="dsmeta-red-btn"
      onClick={() => handleClick(saleId)}
    >
      <img src={avatar} alt="avatar de usuário" />
    </div>
  );
};

export default NotificationButton;
