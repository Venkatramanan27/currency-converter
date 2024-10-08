document.getElementById('convert-button').addEventListener('click', function() {
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    const amount = document.getElementById('amount').value;

    if (!amount) {
        alert('Please enter an amount.');
        return;
    }

    const apiKey = '682bc809512f638c3400933d';
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const rate = data.conversion_rates[toCurrency];
            const convertedAmount = (amount * rate).toFixed(2);
            document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        })
        .catch(error => {
            console.error('Error fetching exchange rates:', error);
            alert('Error fetching exchange rates.');
        });
});
