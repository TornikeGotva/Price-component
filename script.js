"use strict";

const toggleSwitch = document.querySelector(".input");
const containerPrice = document.querySelectorAll(".basic-container_price");

let firstPrice;
let secondPrice;
let thirdPrice;

toggleSwitch.addEventListener("click", function () {
  containerPrice.forEach(() => {
    containerPrice[0].textContent = firstPrice =
      firstPrice === "$19.99" ? "$199.99" : "$19.99";
    containerPrice[1].textContent = secondPrice =
      secondPrice === "$24.99" ? "$249.99" : "$24.99";
    containerPrice[2].textContent = thirdPrice =
      thirdPrice === "$39.99" ? "$399.99" : "$39.99";
  });
});
