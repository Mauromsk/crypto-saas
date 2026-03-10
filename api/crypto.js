export default async function handler(req, res) {

  try {

    const coin = req.query.coin || "bitcoin";

    const url = `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=1`;

    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json({
      coin: coin,
      prices: data.prices
    });

  } catch (error) {

    res.status(500).json({
      error: "Error fetching crypto data"
    });

  }

}