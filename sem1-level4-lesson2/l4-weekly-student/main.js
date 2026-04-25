// ─────────────────────────────────────────────
// main.js — Run with: node main.js
// ─────────────────────────────────────────────

// ─────────────────────────────────────────────
// TASK 2: Import products from products.js
// ─────────────────────────────────────────────

// your code here
import { products } from "./products.js";

// ─────────────────────────────────────────────
// TASK 3: Destructure name and price from products[0]
// ─────────────────────────────────────────────

// your code here
const { name, price } = products[0];

console.log(`Product: ${name} | Price: $${price}`);

// ─────────────────────────────────────────────
// Already written for you
// ─────────────────────────────────────────────

const checkPrice = (price) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (price < 500) {
        resolve("Affordable!");
      } else {
        reject("Too expensive!");
      }
    }, 1500);
  });
};

// ─────────────────────────────────────────────
// TASK 4: Call checkPrice(price)
// Handle the result with .then() and .catch()
// ─────────────────────────────────────────────

// your code here
checkPrice(price)
  .then((message) => {
    console.log(`Price Check: ${message}`);
  })
  .catch((error) => {
    console.error(`Price Check: ${error}`);
  });
