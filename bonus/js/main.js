'use strict';

// Init constants
const rates = {
    backend: 20.50,
    frontend: 15.30,
    analysis: 33.60,
};
const hours = 10;
const discountPercentage = 25;
const validCodes = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];

// Retrieve elements from DOM
const form = document.getElementById("form");
const worktype = document.getElementById("worktype");
const discountcode = document.getElementById("discountcode");
const price = document.getElementById("price");
const cent = document.getElementById("cent");
const error = document.getElementById("error");
const totalElement = document.getElementById("total");

// Switch case to calculate total
const calculateTotal = (type) => {
    switch (type) {
        case '1':
            return hours * rates.backend;
        case '2':
            return hours * rates.frontend;
        case '3':
            return hours * rates.analysis;
        default:
            return 0;
    }
};

// funcion to apply discount
const applyDiscount = (total, code) => {
    if (validCodes.includes(code)) {
        return total - (total * discountPercentage) / 100;
    } else {
        error.innerText = "Il codice promozionale non è valido o non esiste ed è stato calcolato il prezzo normale";
        return total;
    }
};

// Function to update the price display
const updatePriceDisplay = (total) => {
    const totalString = total.toFixed(2);
    const [integerPart, decimalPart] = totalString.split('.');
    price.innerText = integerPart;
    cent.innerText = `,${decimalPart}`;
};

/* Form submit listener in this part the function calculateTotal and applyDiscount are called 
in order to calculate the total and apply the discount and then the price and cent elements are updated
and the total element is shown */
form.addEventListener('submit', (event) => {
    event.preventDefault();
    error.innerText = ''; // Clear previous error
    let total = calculateTotal(worktype.value);
    total = applyDiscount(total, discountcode.value);
    updatePriceDisplay(total);
    totalElement.classList.remove('d-none');
});