'use strict'

// Variables
const backend = 20.50;
const frontend = 15.30;
const analysis = 33.60;
const hours = 10;
const discount = 25;
let total = 0;
let decimal = 0;
const form = document.getElementById("form");
const worktype = document.getElementById("worktype");
const discountcode = document.getElementById("discountcode");
const price = document.getElementById("price");
const cent = document.getElementById("cent");
const error = document.getElementById("error");


function calculateTotal(string) {
    if (string === '1') {
        total = hours * backend;
    } else if (string === '2') {
        total = hours * frontend;
    } else if (string === '3') {
        total = hours * analysis;
    }
    return total;
}

function applyDiscount(code) {
    if (code === 'YHDNU32' || code === 'JANJC63' || code === 'PWKCN25' || code === 'SJDPO96' || code === 'POCIE24') {
        total = total - (total * discount) / 100;
        return total;
    } else {
        error.innerText = "Il codice promozionale non è valido o non esiste ed è stato calcolato il prezzo normale";
        return total;
    }
}

//form submit listener
form.addEventListener('submit', function (event) {
    event.preventDefault();
    total = calculateTotal(worktype.value);
    total = applyDiscount(discountcode.value);
    const totalString = total.toFixed(2).toString();
    const separator = totalString.indexOf('.');
    decimal = totalString.slice(separator, 6);
    price.innerText = Math.floor(total);
    cent.innerText = decimal;
    console.log(discountcode.value);
})

