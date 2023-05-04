// Створити клас SuperMath.
// Додати до екземпляра метод - check(obj), параметр obj якого має властивості X, Y, znak. Метод повинен підтвердити у користувача, чи хоче він зробити дію znak c Х і У. Якщо хоче, зробити математичну дію znak (яка описана в прототипі), інакше - запитати введення нових даних через метод input() класу SuperMath.
// Приклад об'єкта: `obj = {X:12, Y:3, znak: “/”}`, можливі варіанти znak => `+ - / * %`.
// При введенні znak потрібно перевірити коректність введення на можливі математичні дії.
// p = new SuperMath();
// p.check(obj); // --> no p.input() -> 3 prompt -> рахує

class SuperMath {

    constructor() {
    }

    check(obj) {
        if (confirm(`Хотите совершить действие с X ${obj.znak} Y`)) {
            switch (obj.znak) {
                case '+':
                    console.log(Number(obj.X) + Number(obj.Y));
                    break;
                case '-':
                    console.log(obj.X - obj.Y);
                    break;
                case '/':
                    console.log(obj.X / obj.Y);
                    break;
                case '*':
                    console.log(obj.X * obj.Y);
                    break;
                case '%':
                    console.log(obj.X % obj.Y);
                    break;

            }
        } else this.input();
    }
    input() {
        this.X = prompt('Введите  X', '');
        this.Y = prompt('EВведите  Y');
        this.znak = prompt('Введите знак');
        switch (this.znak) {
            case '+':
                console.log(Number(this.X) + Number(this.Y));
                break;
            case '-':
                console.log(this.X - this.Y);
                break;
            case '/':
                console.log(this.X / this.Y);
                break;
            case '*':
                console.log(this.X * this.Y);
                break;
            case '%':
                console.log(this.X % this.Y);
                break;
        }
    }
}
obj = { X: 2, Y: 3, znak: '+' };
p = new SuperMath();
p.check(obj);
console.log(p);