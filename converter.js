{
    const calculateResult = (amount, selectedCurrency) => {
        const rateEur = 4.68;
        const rateGbp = 5.41;
        const rateUsd = 4.52;

        switch (selectedCurrency) {
            case "EUR":
                return amount / rateEur;

            case "GBP":
                return amount / rateGbp;

            case "USD":
                return amount / rateUsd;
        }
    }

    const updateResultText = (amount, selectedCurrency, result) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${selectedCurrency}`
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        let currencyInput = document.querySelector(".js-currencyInput");
        let currencyAmount = document.querySelector(".js-currencyAmount");

        let amount = +currencyAmount.value;
        let selectedCurrency = currencyInput.value;

        let result = calculateResult(amount, selectedCurrency);

        updateResultText(amount, selectedCurrency, result);
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    }

    init();
}


