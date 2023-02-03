"use strict";
function generateGtin() {
    let gtin = String(Math.floor(Math.random() * 9) + 1);
    for (let i = 0; i < 11; i++) {
        gtin += String(Math.floor(Math.random() * 9) + 1);
    }
    return `${gtin}${calculateCheckDigit(gtin)}`;
}
function calculateCheckDigit(gtin) {
    let digits = gtin.split('');
    let checksum = digits.map((digit) => Number(digit)).reduce((currentChecksum, digit, index) => currentChecksum + digit * (index % 2 === 0 ? 1 : 3));
    return Math.ceil(checksum / 10) * 10 - checksum;
}
function generateGtins() {
    let outputElement = document.getElementById('generated');
    if (outputElement !== null) {
        const numberOfGtins = 5;
        let gtinElements = '';
        for (let i = 0; i < numberOfGtins; i++) {
            gtinElements += `<div>${generateGtin()}</div>\n`;
        }
        outputElement.innerHTML = gtinElements;
    }
}
document.getElementById("button").addEventListener('click', (e) => generateGtins());
window.onload = () => generateGtins();
