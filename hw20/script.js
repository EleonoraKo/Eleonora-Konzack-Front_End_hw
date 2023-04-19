// 1. Створити клас Людина.

// Властивості:
// імʼя;
// стать.
// Методи:
// конструктор, який приймає два параметри: імʼя та стать.

class Person {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}

// 2. Створити клас Квартира.

// Властивості:
// конструктор не потрібен;
// масив жителів, який при створенні пустий.
// Методи:
// додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.

class Flat {
    constructor() {
        this.residents = [];
    }
    addResident(p) {

        this.residents.push(p);
    }
}

// 3. Створити клас Будинок.
// Властивості:
// масив квартир, який при створенні пустий;
// максимальна кількість квартир.
// Методи:
// конструктор, який приймає один параметр: максимальну кількість квартир;
// додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.
class House {
    constructor(maxFlats) {
        this.flat = [];
        this.maxFlats = maxFlats;
    }
    addFlats(flat) {
        if (this.flat.length < this.maxFlats) {
            this.flat.push(flat)
        }
    }
}

// В якості демонстраціїї створити:
// декілька екземплярів класу Людина;

const person1 = new Person('Viktor', 'male');
const person2 = new Person('Nina', 'female');
const person3 = new Person('Taras', 'male');
console.log(person1,);
console.log(person2);
console.log(person3);

// декілька екземплярів класу Квартира;
// додадити екземпляри класу Людина до екземплярів класу Квартира;
const flat1 = new Flat();
flat1.addResident(person1);
flat1.addResident(person2);
const flat2 = new Flat();
flat2.addResident(person3);
console.log(flat1);
console.log(flat2);

// екземпляр класу Будинок;
// додадити екземпляри класу Квартира до екземплярів класу Будинок.

const house = new House(5);
house.addFlats(flat1);
house.addFlats(flat2);
console.log(house)
