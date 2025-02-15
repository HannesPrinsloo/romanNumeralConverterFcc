const input = document.getElementById("number");
const btn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const romNum = [
    { symbol: 'M', value: 1000 },
    { symbol: 'CM', value: 900 },
    { symbol: 'D', value: 500 },
    { symbol: 'CD', value: 400 },
    { symbol: 'C', value: 100 },
    { symbol: 'XC', value: 90 },
    { symbol: 'L', value: 50 },
    { symbol: 'XL', value: 40 },
    { symbol: 'X', value: 10 },
    { symbol: 'IX', value: 9 },
    { symbol: 'V', value: 5 },
    { symbol: 'IV', value: 4 },
    { symbol: 'I', value: 1 }
];

//Check correct input
const checkInput = () => {
    const num = Number(input.value);
    
    if (!input.value || isNaN(num)) {
        output.textContent = "Please enter a valid number";
        return false;
    }
    else if (!Number.isInteger(num)) {
        output.textContent = "Please enter a whole number";
        return false;
    }
    else if (num < 1) {
        output.textContent = "Please enter a number greater than or equal to 1";
        return false;
    }
    else if (num > 3999) {
        output.textContent = "Please enter a number less than or equal to 3999";
        return false;
    } else {
        return true;
    }
};



//Convert
const convert = () => {
    let num = Number(input.value);
    let result = '';

    while (num > 0) {
        const numeral = romNum.find(rom => rom.value <= num);
        result += numeral.symbol;
        num -= numeral.value;
    }
    
    output.textContent = result;
};

//Event listeners
btn.addEventListener("click", () => {
    if (checkInput()) {
        convert();
    }
    input.value = "";
});

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        if (checkInput()) {
            convert();
        }
        input.value = "";
    }
})

