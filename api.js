let url = "https://api.coinbase.com/v2/exchange-rates?currency="

const bodyRef = document.body;

const addElement = (elType, text) => {
  const ele = document.createElement(elType);
  ele.textContent = text;
  bodyRef.appendChild(ele);
};


async function log(coin) {
    url = url + coin;
    const response = await fetch(url);
    const data = await response.json();
    const dataC = data.data.currency
    const dataUSD = data.data.rates.USD
    console.log(dataC);
    console.log(dataUSD);
    addElement("h3", dataC + ": $" + dataUSD)
  }
  let input = prompt("Welke coin wil je zien?").toUpperCase()
  log(input);
