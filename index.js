const express = require("express");
const phones = [
  {
    name: "iPhone 14 Pro Max",
    price: 250000,
    quantity: 10,
    description:
      "High-end smartphone with top-tier performance and camera system.",
  },
  {
    name: "Samsung Galaxy S23 Ultra",
    price: 220000,
    quantity: 15,
    description:
      "Flagship Android phone with excellent camera capabilities and S Pen support.",
  },
  {
    name: "Google Pixel 7 Pro",
    price: 180000,
    quantity: 8,
    description:
      "Premium phone with pure Android experience and advanced photography features.",
  },
  {
    name: "Xiaomi 13 Pro",
    price: 150000,
    quantity: 20,
    description:
      "High-performance phone with impressive camera setup and fast charging.",
  },
  {
    name: "OnePlus 11",
    price: 130000,
    quantity: 12,
    description:
      "Flagship killer phone with smooth performance and affordable price.",
  },
  {
    name: "OPPO Find X5 Pro",
    price: 140000,
    quantity: 10,
    description:
      "Premium phone with excellent camera system and fast charging.",
  },
  {
    name: "Vivo X80 Pro",
    price: 135000,
    quantity: 15,
    description:
      "High-end phone with impressive camera features and fast charging.",
  },
  {
    name: "Realme GT Neo 3",
    price: 80000,
    quantity: 25,
    description:
      "Mid-range phone with excellent performance and value for money.",
  },
  {
    name: "Tecno Camon 19 Pro",
    price: 45000,
    quantity: 30,
    description: "Budget-friendly phone with impressive camera capabilities.",
  },
  {
    name: "Infinix Note 12 Pro",
    price: 40000,
    quantity: 28,
    description: "Affordable phone with large display and decent performance.",
  },
  {
    name: "Samsung Galaxy A53",
    price: 65000,
    quantity: 22,
    description: "Mid-range phone with good camera and battery life.",
  },
  {
    name: "Xiaomi Redmi Note 12 Pro",
    price: 55000,
    quantity: 35,
    description: "Popular mid-range phone with good value for money.",
  },
  {
    name: "OPPO A78",
    price: 48000,
    quantity: 30,
    description:
      "Budget-friendly phone with decent performance and battery life.",
  },
  {
    name: "Vivo Y22s",
    price: 42000,
    quantity: 28,
    description: "Entry-level phone with large display and good battery life.",
  },
  {
    name: "Tecno Spark 9 Pro",
    price: 35000,
    quantity: 40,
    description: "Affordable phone with decent camera and battery life.",
  },
  {
    name: "Infinix Hot 12 Play",
    price: 30000,
    quantity: 45,
    description: "Entry-level phone with long battery life.",
  },
  {
    name: "Samsung Galaxy A14",
    price: 38000,
    quantity: 32,
    description: "Budget-friendly phone with decent performance and display.",
  },
  {
    name: "Xiaomi Redmi A2",
    price: 32000,
    quantity: 40,
    description: "Entry-level phone with long battery life and basic features.",
  },
  {
    name: "OPPO A17",
    price: 35000,
    quantity: 35,
    description: "Budget-friendly phone with decent camera and battery life.",
  },
  {
    name: "Vivo Y02s",
    price: 30000,
    quantity: 42,
    description: "Entry-level phone with large display and long battery life.",
  },
];

const app = express();

app.get("/", (req, res) => {
  console.log(req.headers.cookie);
  res.render("login.ejs");
});

//html templates in server side programming

app.listen(5050);
