class User {
    constructor(username, password) {
        this.username = username;
        this.password = password
    }
    validatePassword() {
        if (this.password.length > 6) {
            return true;
        }
        return false
    }
}
let a = 'Elya';
let ab = 145;
a = 'Kate';
ab = 675555555;

const person = new User(a, ab)
console.log(person);
console.log(person.validatePassword())