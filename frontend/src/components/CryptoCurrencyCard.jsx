import { Card, Statistic, Row, Col } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

function CryptoCurrencyCard({ currency }) {
  const {
    quote: { USD },
  } = currency;
  const price = Math.round(USD.price * 100) / 100;

  return (
    <div>
      <Card
        title={
          <div className="flex items-center gap-3">
            <img
              src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${currency.id}.png`}
              alt={currency.name}
            />
            <span>{currency.name}</span>
          </div>
        }
        extra={<a href="#">More</a>}
        style={{
          width: 500,
        }}
      >
        <Statistic
          title="Текущая цена"
          value={price}
          precision={2}
          prefix="$"
        />
        <Row gutter={16}>
          <Col span={12}>
            <Statistic
              title="Изменение за 24ч"
              value={USD.percent_change_24h}
              precision={2}
              valueStyle={{
                color: USD.percent_change_24h > 0 ? "#3f8600" : "#cf1322",
              }}
              prefix={
                USD.percent_change_24h > 0 ? (
                  <ArrowUpOutlined />
                ) : (
                  <ArrowDownOutlined />
                )
              }
              suffix="%"
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="Объем за 24ч"
              value={USD.volume_24h}
              precision={0}
              prefix="$"
            />
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: "16px" }}>
          <Col span={12}>
            <Statistic
              title="Рыночная кап."
              value={USD.market_cap}
              precision={0}
              prefix="$"
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="Доминирование"
              value={USD.market_cap_dominance}
              precision={2}
              suffix="%"
            />
          </Col>
        </Row>
        <p style={{ marginTop: "16px" }}>
          Последнее обновление: {new Date(USD.last_updated).toLocaleString()}
        </p>
      </Card>
    </div>
  );
}

export default CryptoCurrencyCard;
