// 1. Створити сутність "Людина".

// Властивості:
// імʼя;
// вік.
// Методи:
// конструктор, який приймає два параметри: імʼя та вік;
// метод, який виводить у консоль інформацію про людину.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showperson() {
        console.log(`name: ${this.name}, age: ${this.age}`);
    }
}

// 2. Створити сутність "Автомобіль".
// Властивості:
// марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
// власник.
// Методи:
// конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак
// присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
// метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина для виведення інформації про власника

class Car {
    owner;
    constructor(brand, model, year, carNumber) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.carNumber = carNumber;
    }
    addOwnder(owner) {
        if (owner.age >= 18) {
            this.owner=owner;
        }
        else {
            console.log(`${owner.name} is under 18`);
        }
    }
    printDetails() {
        console.log(`brand: ${this.brand}, 
        model: ${this.model},  
        year: ${this.year}, 
        number: ${this.carNumber}`);
        
    }
}

// В якості демонстраціїї створити:
// декілька екземплярів класу Людина;

// присвоїти власників автомобілям.

const pers1 = new Person("John", 18);
const pers2 = new Person("Peter", 17);
const pers3 = new Person("Kerstin", 55);


// декілька екземплярів класу Автомобіль;
const car1 = new Car("Nissan", "S8", 2015, 1);
const car2 = new Car("Yugo", "Koral", 1990, 2);
const car3 = new Car("Wartburg", "800", 1985, 3);

car1.addOwnder(pers1)
console.log(car1.printDetails());

car2.addOwnder(pers2);
car3.addOwnder(pers3);



