import { Menu, Spin } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import CryptoCurrencyCard from "./components/CryptoCurrencyCard";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const App = () => {
  const [currencies, setCurrencies] = useState([]);
  const [currencyId, setCurrencyId] = useState(1);
  const [currencyData, setCurrencyData] = useState(null);

  const fetchCurrencies = () => {
    axios.get("http://127.0.0.1:8000/cryptocurrencies").then((response) => {
      const currenciesResponse = response.data;
      const menuItem = [
        getItem(
          "Список криптовалют",
          "sub1",
          null,
          currenciesResponse.map((currency) => {
            return {
              key: currency.id,
              label: currency.name,
            };
          })
        ),
      ];

      setCurrencies(menuItem);
    });
  };

  const fetchCurrency = () => {
    axios
      .get(`http://127.0.0.1:8000/cryptocurrencies/${currencyId}`)
      .then((response) => {
        setCurrencyData(response.data);
      });
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  useEffect(() => {
    setCurrencyData(null);
    fetchCurrency();
  }, [currencyId]);

  const onClick = (e) => {
    setCurrencyId(e.key);
  };

  return (
    <div className="flex">
      <Menu
        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={currencies}
        className="h-screen overflow-scroll"
      />
      <div className="m-auto">
        {currencyData ? (
          <CryptoCurrencyCard currency={currencyData} />
        ) : (
          <Spin />
        )}
      </div>
    </div>
  );
};
export default App;
