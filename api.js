let url = "https://api.coinbase.com/v2/exchange-rates?currency=";
let urlAdd;
let urlIn;

const bodyRef = document.body;
const button = document.getElementById("button");
const inputbox = document.getElementById("input1");
button.addEventListener("click", () => {
    const inputT = inputbox.value.toUpperCase()
    urlIn = url + inputT
    console.log(urlIn)
    log(inputT)
});

const addElement = (elType, text) => {
  const ele = document.createElement(elType);
  ele.textContent = text;
  bodyRef.appendChild(ele);
};


async function log(coin) {
    urlAdd = url + coin;
    const response = await fetch(urlAdd);
    const data = await response.json();
    const dataC = data.data.currency
    const dataUSD = data.data.rates.USD
    console.log(dataC);
    console.log(dataUSD);
    addElement("h3", dataC + ": $" + dataUSD)
  }
  log(ticker);
