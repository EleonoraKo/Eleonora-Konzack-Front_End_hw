// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.


function removeElement(array, item) {
    for (let i = 0; i < array[i]; i++) {
        if (array[i] === item) {
            array.splice(i, 1);
            break
        }
    }
    return array;
}
let array = [1, 2, 3, 4, 5, 6]
removeElement(array,2);

console.log(array)
