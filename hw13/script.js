// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>
// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

// const key = generateKey(16, characters);
// console.log(key); // eg599gb60q926j8i



/*const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
generateKey = function (length, characters) {
  let res = [];
  for(let i = 0; i < length; i++){
    // word += alphabet[Math.round(Math.random() * (alphabet.length - 1))];
    res.push(characters.charAt(Math.floor(Math.random() *characters.length)));
  }
  return res
}
const key = generateKey(16, characters);
console.log(key);*/

// function generateKey(length, characters) {
//     let result = '';
//     for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length);
//     result += characters[randomIndex];
//     }
//     return result;
//     }
//     console.log(result)

// for (let i = 0; i < 10; i++){
// for(let k = 0; k < 1; k++){
//   document.write(`f`)
// // }

// i += '*'
//   document.write(i)
// }

let div1 = document.querySelector('.div1');
let btn = document.querySelector('.btn');
// let inp = document.querySelector('.inp1').value;
 
function foo() {
 div1.innerHTML = 1;
 }
 console.log(foo)

// let inputIn08 = document.querySelector('.i-8');
//   let button8 = document.querySelector('b-8');
//   let div08 = document.querySelector('.out-8');

// // function t8() {
//   let b = inputIn08.value;
//   div08.innerHTML = b;
// // }
// // document.querySelector('.b-8').onclick = t8;