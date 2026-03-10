<<<<<<< HEAD
export default async function handler(req, res) {

  try {

    const coin = req.query.coin || "bitcoin";

    // obtener datos de los últimos 7 días
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=7`
    );

    const data = await response.json();

    const prices = data.prices.map(p => p[1]);

    const currentPrice = prices[prices.length - 1];

    // calcular media movil simple
    const average =
      prices.reduce((a, b) => a + b, 0) / prices.length;

    // calcular tendencia
    const trend = currentPrice > average ? "bullish": "bearish";

    // señal simple
    const signal = currentPrice > average ? "BUY": "SELL";

    res.status(200).json({
      coin: coin,
      price: currentPrice,
      moving_average: average.toFixed(2),
      trend: trend,
      signal: signal
    });

  } catch (error) {

    res.status(500).json({
      error: "error getting crypto data"
    });

  }

}

