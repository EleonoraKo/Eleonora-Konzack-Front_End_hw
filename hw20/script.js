function hello(){
    console.log('hello', this)
}
hello();
let user = {
    name: 'Elya',
    city: 'Kharkiv',
    sayHello: hello,
};
user.sayHello();


let car = {
    brand: 'Audi',
    model: 'A6',
    year: 2021,
    startEngine: function(){
        console.log('Engine started')
    }
}
car.startEngine();
