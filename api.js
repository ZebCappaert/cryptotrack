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

const clearPreviousLogs = () => {
    const addedElements = bodyRef.querySelectorAll("h3");
    addedElements.forEach(element => element.remove());
};

const refreshData = () => {
    clearPreviousLogs();
    const sortedArray = alGevraagd.sort();
    sortedArray.forEach(item => {
        log(item); // Call log directly without setTimeout
    });
}

const addElement = (elType, text) => {
    const ele = document.createElement(elType);
    ele.textContent = text;
    bodyRef.appendChild(ele);
};

async function log(coin) {
    urlAdd = url + coin;
    const response = await fetch(urlAdd);
    const data = await response.json();
    
    // Check if data and rates are defined
    if (data && data.data && data.data.currency && data.data.rates && data.data.rates.USD) {
        const dataC = data.data.currency;
        const dataUSD = data.data.rates.USD;
        console.log(data);
        addElement("h3", dataC + ": $" + dataUSD);
    } else {
        console.log(`No valid data for ${coin}`);
    }
}

const checkAlreadyAsked = (waarde) => {
    if(alGevraagd.includes(waarde)){
        console.log("Al gevraagd");
        return true;
    }
    else {
        console.log("Nog niet gevraagd");
        return false;
    }
}

setInterval(refreshData, 10000);