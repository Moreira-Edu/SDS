import React from "react";
import avatar from "@/assets/avatar-icon.svg";
import "./styles.css";
import axios from "axios";
import { BASE_URL } from "@/utils/request";
import { toast } from "react-toastify";

type Props = {
  saleId: number;
};

const handleClick = (saleId: number) => {
  axios
    .get(`${BASE_URL}/sales/${saleId}/notification`)
    .then((res) => toast.info("SMS enviado com sucesso"));
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
