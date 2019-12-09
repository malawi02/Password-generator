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

generateEL.addEventListener('click',() => {
    const length = lengthEL.Value;
    const hasLower = lowecaseEL;
    const hasUpper = UppercaseEL;
    const hasNumber = NumbersEL;
    const hasSymbols = symbolsEL;


    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbols,length);
});


clipboardEL.addEventListener("click", ()  => {
    const textarea = document.createElement("textarea");
    const password = resultEl.innerText;
    
    if(!password){
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
});


function generatePassword(lower, upper, number, length){
    
    
    



    let generatePassword = '';

    const typesCount = lower + upper + number + symbol;

    const typesArr = [{lower}, {upper}, {number}, {symbols}].filter
    (item => Object.values(item)[0]);

    if(typesCount === 0) {
        return '';
    }

    for(let i = 0; i < length; i += typesCount){
    typesArr.forEach(type => {
        const funcName = Object.keys(type)[0];

        generatePassword += randomFunc[funcName]();
    });
}
  
const finalPassword = generatePassword.slice(0,length);


return finalPassword;
}




function getRandomLower(){

    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);


}

function getRandomUpper() {
    return String.fromCharCoder(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random()* 10)  +  48);

}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){|}><?+_-[]""';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

     



