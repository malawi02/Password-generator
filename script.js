// DOM elements
const resultEL = document.getElementById('result');
const lengthEL = document.getElementById('length');
const uppercaseEL = document.getElementById('uppercase');
const lowecaseEL = document.getElementById('lowercase');
const numbersEL = document.getElementById('numbers');
const symbolsEL = document.getElementById('symbols');
const generateEL = document.getElementById('generate');
const clipboardEL = document.getElementById('clipboard');



const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbols: getRandomSymbol

};

generateEL.addEventListener('click', () => {
    const length = lengthEL.Value;
    const hasLower = lowecaseEL.checked;
    const hasUpper = lowecaseEL.checked;
    const hasNumber = lowecaseEL.checked;
    const hasSymbols = lowecaseEL.checked;


    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbols,length);
})

//Generate password function
function generatePassword(lower, upper, number, length){
    //initialize pw var
    //filter unchecked types
    //loop over lenth call generator functions for each type
    //Add final pw to the pw var and return


    let generatePassword = '';

    const typeCount = lower + upper + number + symbol;

    
}

// Generator functions - http://www.net-comber.com/charset.html

//generate random password
function getRandomLower(){

    return String.fromCharCode(Math.floor(Math.random() * 8) + 128);


}

function getRandomUpper() {
    return String.fromCharCoder(Math.floor(Math.random() * 8) + 128);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random()* 8)  +  128);

}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){|}><?+_-[]""';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

     





