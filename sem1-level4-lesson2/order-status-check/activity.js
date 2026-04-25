// ─────────────────────────────────────────────
// Order Status Checker — Student Version
// Run this file with: node activity.js
// ─────────────────────────────────────────────

const order = {
  id: 101,
  name: "Laptop",
  status: "shipped",
  price: 999,
};

// This function is already written for you.
// It returns a Promise that simulates checking an order status.
function checkOrder(orderName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (orderName) {
        resolve(`Your order "${orderName}" is on its way!`);
      } else {
        reject("No order name provided.");
      }
    }, 1500);
  });
}

// ─────────────────────────────────────────────
// TASK 1: Destructure the order object
// Pull out: name and status
// ─────────────────────────────────────────────

// your code here
const { name, status } = order;

console.log(`Order Name: ${name} | Status: ${status}`);

// ─────────────────────────────────────────────
// TASK 2: Call checkOrder() using the name you destructured
// Handle the result with .then() and the error with .catch()
// ─────────────────────────────────────────────

// your code here
checkOrder(name)
  .then((message) => {
    console.log(`Order Status: ${message}`);
  })
  .catch((error) => {
    console.error(`Order Status: ${error}`);
  });
