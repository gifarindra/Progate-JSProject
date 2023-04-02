const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
    calculatorScreen.value = number;
};
//Panggil class calculator screen dan pendefinisan fungsi update screen
let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

//Pendefinisian variabel prevnumber, operator, dan currentnumber
const inputNumber = (number) => {
    if(currentNumber === "0") {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
};
//pendefinisian fungsi inputNumber dan menjadikan click event jadi current number (string)

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
});
// pemanggilan kelas number, fungsi inputNumber, dan mengupdate screen
const inputOperator = (operator) => {
    if(calculationOperator === "") {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = "0";
}
//Pendefinisian input operator, currentNumber menjadi prevnumber, kelas operator mjd operator
//dan mengubah current number mjd nil

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    });
});
//pemanggilan kelas operator dan fungsi inputOperator
const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () => {
    calculate();
    updateScreen(currentNumber);
});
// pemanggilan equal sign, fungsi calculate, dan update screen
const calculate = () => {
    let result = "";
    switch (calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            break;
    }
    currentNumber = result;
    calculationOperator = "";
}
// fungsi kalkulasi (mengubah string mjd int) dan menjadikan result kalkulasi
// menjadi current number dan ditampilkan di screen calcop = kosong
const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click", () => {
    clearAll ();
    updateScreen(currentNumber);
});
// panggil fungsi clearAll dan menjadikan screen menampilkan nol
const clearAll = () => {
    prevnumber = "";
    calculationOperator = "";
    currentNumber = "0";
}
//Reset

const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});

const inputDecimal = (dot) => {
    if(currentNumber.includes(".")) {
        return;
    }
    currentNumber += dot;
}
//penambahan koma desimal   