// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>
// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

// const key = generateKey(16, characters);
// console.log(key); // eg599gb60q926j8i



const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
generateKey = function (length, characters) {
  let res = [];
  for(let i = 0; i < length; i++){
    // word += alphabet[Math.round(Math.random() * (alphabet.length - 1))];
    res.push(characters.charAt(Math.floor(Math.random() *characters.length)));
  }
  return res
}
const key = generateKey(16, characters);
console.log(key);

// function generateKey(length, characters) {
//     let result = '';
//     for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length);
//     result += characters[randomIndex];
//     }
//     return result;
//     }
//     console.log(result)