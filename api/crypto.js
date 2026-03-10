export default function handler(req, res) {
  res.status(200).json({
    status: "API funcionando",
    crypto: "bitcoin",
    price: 65000
  });
}
