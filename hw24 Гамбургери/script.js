// Мережа фастфудів пропонує кілька видів гамбургерів:
// маленький (50 тугриків, 20 калорій);
// великий (100 тугриків, 40 калорій).
// Гамбургер може бути з одним із декількох видів начинок:
// сиром (+ 10 тугриків, + 20 калорій);
// салатом (+ 20 тугриків, + 5 калорій);
// картоплею (+ 15 тугриків, + 10 калорій).
// Можна додати добавки:
// посипати приправою (+15 тугриків, 0 калорій) - полити майонезом (+ 20 тугриків, +5 калорій).



class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
    }
    topping = [];


    static SIZE_SMALL = {
        price: 50,
        calories: 20
    }

    static SIZE_BIG = {
        price: 100,
        calories: 40
    }

    static STUFFING_CHEESE = {
        price: 10,
        calories: 20
    }

    static STUFFING_SALAD = {
        price: 20,
        calories: 5
    }

    static STUFFING_POTATO = {
        price: 15,
        calories: 10
    }

    static TOPPING_MAYO = {
        price: 20,
        calories: 5
    }

    static TOPPING_SAUCE = {
        price: 15,
        calories: 0
    }

    calculate() {
        let cal = this.size.calories + this.stuffing.calories;
        for (let i = 0; i < this.topping.length; i++) {
            cal += this.topping[i].calories;
        }
        return cal;
    }

    calculatePrice() {
        let pr = this.size.price + this.stuffing.price;
        for (let i = 0; i < this.topping.length; i++) {
            pr += this.topping[i].price;
        }
        return pr;
    }

    addTopping(topping) {
        this.topping.push(topping);
    }

}


// маленький гамбургер з начинкою з сиру
var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log("Calories: " + hamburger.calculate());

// скільки коштує
console.log("Price: " + hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А скільки тепер коштує?
console.log("Price with sauce: " + hamburger.calculatePrice());