export default async function handler(req, res) {

  const coin = req.query.coin || "bitcoin";

  const url = `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=1`;

  const response = await fetch(url);
  const data = await response.json();

  res.status(200).json({
    coin: coin,
    prices: data.prices
  });

}
export default async function handler(req, res) {
  res.status(200).json({
    message: "API funcionando"
  });
}