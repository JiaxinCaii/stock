const apiKey = 'YOUR_API_KEY';
const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TSLA&apikey=${apiKey}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        const stockData = data["Time Series (Daily)"];
        const latestDate = Object.keys(stockData)[0];
        const latestData = stockData[latestDate];
        
        document.getElementById('stock-data').innerHTML = `
            <h2>Latest Stock Data</h2>
            <p>Date: ${latestDate}</p>
            <p>Open: ${latestData["1. open"]}</p>
            <p>Close: ${latestData["4. close"]}</p>
            <p>High: ${latestData["2. high"]}</p>
            <p>Low: ${latestData["3. low"]}</p>
        `;
    })
    .catch(error => console.error('Error fetching stock data:', error));
