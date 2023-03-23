let mathAction = prompt("напиши аріфметичну дію: add, sub, mult, div");
let firstNumber = +prompt("Напиши перше число");
let secondNumber = +prompt("Напиши друге число?");

switch (mathAction) {
    case 'add':
        alert(`${firstNumber} + ${secondNumber} = ${(firstNumber + secondNumber)}`)
        break;
    case 'sub':
        alert(`${firstNumber} - ${secondNumber} = ${(firstNumber - secondNumber)}`);
        break;
    case 'mult':
        alert(`${firstNumber} * ${secondNumber} = ${(firstNumber * secondNumber)}`);
        break;
    case 'div':
        alert(`${firstNumber} : ${secondNumber} = ${(firstNumber / secondNumber)}`)
        break;
}




