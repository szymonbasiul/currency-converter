let formElement = document.querySelector(".js-form");
let currencyInput = document.querySelector(".js-currencyInput");
let currencyAmount = document.querySelector(".js-currencyAmount");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let selectedCurrency = currencyInput.value;
    let currency = currencyAmount.value;
    let rateEur = 4.68;
    let rateGbp = 5.41;
    let rateUsd = 4.52;

    switch (selectedCurrency) {
        case "EUR":
            resultElement.innerText = (currency / rateEur).toFixed(2) + " " + currencyInput.value;
            break;
        case "GBP":
            resultElement.innerText = (currency / rateGbp).toFixed(2) + " " + currencyInput.value;
            break;
        case "USD":
            resultElement.innerText = (currency / rateUsd).toFixed(2) + " " + currencyInput.value;
            break;
    }
})









