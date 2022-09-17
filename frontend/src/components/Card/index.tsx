import axios, { AxiosRequestConfig, AxiosResponseHeaders } from "axios";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BotaoNotificacao from "../botaoNotificacao";
import "./styles.css";

interface Sales {
  data: any;
  status: number;
  statusText: string;
  headers: AxiosResponseHeaders;
  config: AxiosRequestConfig<any>;
  request?: any;
}

const Card = () => {
  const [date, setDate] = useState({
    minDate: new Date(new Date().setDate(new Date().getDate() - 365)),
    maxDate: new Date(),
  });
  const [sales, setSales] = useState<Sales>();

  const fetchSales = async () => {
    const response = await axios.get<Sales>("http://localhost:8080/sales");
    setSales(() => response.data);
  };

  useEffect(() => {
    fetchSales();
    console.log(sales);
  });
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
            <tr>
              <td className="show992">#341</td>
              <td className="show576">08/07/2022</td>
              <td>Anakin</td>
              <td className="show992">15</td>
              <td className="show992">11</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <BotaoNotificacao />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show992">#341</td>
              <td className="show576">08/07/2022</td>
              <td>Anakin</td>
              <td className="show992">15</td>
              <td className="show992">11</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <BotaoNotificacao />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show992">#341</td>
              <td className="show576">08/07/2022</td>
              <td>Anakin</td>
              <td className="show992">15</td>
              <td className="show992">11</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <BotaoNotificacao />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Card;
