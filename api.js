let url = "https://api.coinbase.com/v2/exchange-rates?currency=";
let urlAdd;
let urlIn;
let alGevraagd = []

console.log(alGevraagd)

const bodyRef = document.body;
const button = document.getElementById("button");
const buttonRefresh = document.getElementById("buttonRe");
const inputbox = document.getElementById("input1");

button.addEventListener("click", () => {
    console.clear()
    const inputT = inputbox.value.toUpperCase()
    
    if(checkAlreadyAsked(inputT)){
        return;
    }
    else{
        alGevraagd.push(inputT)
        urlIn = url + inputT
        console.log(alGevraagd)
        console.log(urlIn)
        log(inputT)
    } 
});

buttonRefresh.addEventListener("click", () => {
    console.clear();
    clearPreviousLogs();
    const sortedArray = alGevraagd.sort();
    sortedArray.forEach(item => {
        setTimeout(200);
        log(item)});
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
    const dataC = data.data.currency;
    const dataUSD = data.data.rates.USD;
    console.log(data)
    addElement("h3", dataC + ": $" + dataUSD);
  }


  const checkAlreadyAsked = (waarde) => {
    if(alGevraagd.includes(waarde)){
        console.log("Al gevraagd")
        return true;
    }
    else {
        console.log("Nog niet gevraagd");
        return false;
    }
  }

  const clearPreviousLogs = () => {
    const addedElements = bodyRef.querySelectorAll("h3");
    addedElements.forEach(element => element.remove());
};