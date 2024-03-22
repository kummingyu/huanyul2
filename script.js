// Assuming the exchange rates are stored in an object named exchangeRates
const exchangeRates = {
  'CNY': 0.1277,
  'KRW': 0.0006893,
  'USD': 0.9226,
  'GBP': 1.166,
  'JPY': 0.006088,
  'EUR': 1
};
const form = document.getElementById('currency-form');
const result = document.getElementById('result');
const rateInput = document.getElementById('rate');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const amount = parseFloat(document.getElementById('amount').value);
  const fromCurrency = document.getElementById('from').value;
  const toCurrency = document.getElementById('to').value;
  const exchangeRate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
  rateInput.value = exchangeRate;
  const exchangedAmount = amount * exchangeRate;
  result.innerHTML = `${amount} ${toCurrency} = ${exchangedAmount.toFixed(2)} ${fromCurrency}`;
});