const input = document.getElementById("number");
const btn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const romNum = [
    { symbol: 'M', value: 1000 },
    { symbol: 'D', value: 500 },
    { symbol: 'C', value: 100 },
    { symbol: 'L', value: 50 },
    { symbol: 'X', value: 10 },
    { symbol: 'V', value: 5 },
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

    while (num !== 0) {

        if (num >= 1000) {
            result += 'M';
            num -= 1000;
        } else if (num >= 900) {
            result += 'CM';
            num -= 900;
        } else if (num >= 500) {
            result += 'D';
            num -= 500;
        } else if (num >= 400) {
            result += 'CD';
            num -= 400
        } else if (num >= 100) {
            result += 'C';
            num -= 100;
        } else if (num >= 90) {
            result += 'XC';
            num -= 90;
        } else if (num >= 50) {
            result += 'L';
            num -= 50;
        } else if (num >= 40) {
            result += 'XL';
            num -= 40;
        } else if (num >= 10) {
            result += 'X';
            num -= 10;
        } else if (num >= 9) {
            result += 'IX';
            num -= 9;
        } else if (num >= 5) {
            result += 'V';
            num -= 5;
        } else if (num >= 4) {
            result += 'IX';
            num -= 4;
        } else {
            result += 'I';
            num -= 1;
        }
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

