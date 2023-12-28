const shop = {
  Owner: "Sanjida",
  address: "Cumilla",
  phone: +4801495236,
  product: {
    model: "Iphone 11 pro",
    color: "black",
    price: 83000,
  },
};

console.log(shop);
const jsonString = JSON.stringify(shop);
console.log(jsonString);
console.log(JSON.parse(jsonString));
