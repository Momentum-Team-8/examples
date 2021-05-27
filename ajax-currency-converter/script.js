/* eslint-disable prefer-const */
/* globals currencies, fetch  */

// https://api.exchangeratesapi.io/latest?base=BASE_CURRENCY_SYMBOL
const url = "http://api.exchangeratesapi.io/v1/latest?access_key=6cea2cc94c1a82e067919f7bd0068577&base=";

const convertButton = document.querySelector("#convert");
const selectFrom = document.querySelector("#currency-from");
const selectTo = document.querySelector("#currency-to");
const resultDiv = document.querySelector("#currency-result");

let currencyFrom;
let currencyTo;
let rates;
console.log({ rates });

for (let currency of currencies) {
  for (let select of [selectFrom, selectTo]) {
    select.appendChild(createCurrencyOption(currency));
  }
}

function createCurrencyOption(currency) {
  const optionEl = document.createElement("option");
  optionEl.id = currency;
  optionEl.innerText = currency;
  return optionEl;
}

selectFrom.addEventListener("change", function(event) {
  console.log("currency from: ", event.target.value);
  currencyFrom = event.target.value;
  resultDiv.innerHTML = "";
  fetch(url + `${event.target.value}`)
    .then(res => res.json())
    .then(data => {
      rates = data;
      console.log({ rates });
    });
});

function convert(target, amount) {
    console.log(target)
  let exchangeRate = rates.rates[target];
  console.log("Exchange rate is ", exchangeRate);
  return (amount * exchangeRate).toFixed(3);
}

convertButton.addEventListener("click", function(e) {
  let targetCurrency = document.querySelector("#currency-to").value;
  let amount = parseInt(document.querySelector("#currency-amount").value);
  let result = convert(targetCurrency, amount);
  resultDiv.innerText = '${amount} ${currencyFrom} is ${result} ${targetCurrency}';
});
