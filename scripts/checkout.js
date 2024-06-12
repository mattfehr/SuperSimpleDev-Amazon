import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import '../data/cart-class.js';
//import '../data/backend-practice.js';

Promise.all([ //allows multiple promises to run at the same time and wait for all of them to finish
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })

]).then((values) => {
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
});

/*
//promise creates a seperate thread of code
new Promise((resolve) => { 
  loadProducts(() => { //first step wait for it to finish
    resolve('value1');         //call resolve - whatever is shared by resolve can be used in then
  });

}).then((value) => {        //move onto next step
  console.log(value);
  return new Promise((resolve) => {
    loadCart(() => {
      resolve
    });
  });

}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/

//problem with call back is nested code like this - waits for product to load then cart to load then finally render page
//promises flatten code
/*
loadProducts( () => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/
