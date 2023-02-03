function generateGtin(): string {

    let gtin = String(Math.floor(Math.random()*9)+1)
    for(let i = 0; i < 11; i++) {
        gtin += String(Math.floor(Math.random()*9)+1)
    }

    return `${gtin}${calculateCheckDigit(gtin)}`
}

function calculateCheckDigit(gtin: string) {
    let digits = gtin.split('')
    let checksum = digits.map((digit: string) => Number(digit)).reduce(
        (currentChecksum: number, digit: number, index:number) => currentChecksum + digit * (index % 2 === 0 ? 1 : 3)
        )
    return Math.ceil(checksum / 10) * 10 - checksum
}

function generateGtins() {
    let outputElement = document.getElementById('generated')
    if(outputElement !== null) {
        const numberOfGtins = 5
        let gtinElements = ''
        for(let i = 0; i < numberOfGtins; i++) {
            gtinElements += `<div>${generateGtin()}</div>\n`
        }
        outputElement.innerHTML = gtinElements
    }
}

(<HTMLButtonElement>document.getElementById("button")).addEventListener('click', (e:Event) => generateGtins())
window.onload = () => generateGtins()