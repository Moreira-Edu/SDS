import { Sale } from "@/models/Sale";
import { BASE_URL } from "@/utils/request";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BotaoNotificacao from "../botaoNotificacao";
import "./styles.css";

const Card = () => {
  const [date, setDate] = useState({
    minDate: new Date(new Date().setDate(new Date().getDate() - 365)),
    maxDate: new Date(),
  });
  const [sales, setSales] = useState<Sale[]>([]);

  useEffect(() => {
    const dMin = date.minDate.toISOString().split("T")[0];
    const dMax = date.maxDate.toISOString().split("T")[0];

    axios
      .get(`${BASE_URL}/sales?minDate=${dMin}&maxDate=${dMax}`)
      .then((res) => setSales(res.data.content));
  }, [date]);

  return (
    <div className="dsmeta-card">
      <h2 className="dsmeta-sales-title">Vendas</h2>
      <div>
        <div className="dsmeta-form-control-container">
          <DatePicker
            selected={date.minDate}
            onChange={(arg: Date) => {
              const newDate = { ...date, minDate: arg };
              setDate(() => newDate);
            }}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="dsmeta-form-control-container">
          <DatePicker
            selected={date.maxDate}
            onChange={(inputDate: Date) => {
              const newDate = { ...date, maxDate: inputDate };
              setDate(() => newDate);
            }}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>

      <div>
        <table className="dsmeta-sales-table">
          <thead>
            <tr>
              <th className="show992">ID</th>
              <th className="show576">Data</th>
              <th>Vendedor</th>
              <th className="show992">Visitas</th>
              <th className="show992">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            {sales.map(({ id, sellerName, date, visited, deals, amount }) => (
              <tr key={id}>
                <td className="show992">#341</td>
                <td className="show576">
                  {new Date(date).toLocaleDateString()}
                </td>
                <td>{sellerName}</td>
                <td className="show992">{visited}</td>
                <td className="show992">{deals}</td>
                <td>R${amount.toFixed(2)}</td>
                <td>
                  <div className="dsmeta-red-btn-container">
                    <BotaoNotificacao />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Card;
