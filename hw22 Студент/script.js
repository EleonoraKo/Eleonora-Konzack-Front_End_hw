// Вам потрібно зробити конструктор сутності "Студент".
// Студент має ім'я, прізвище, рік народження — це властивості. Є масив з оцінками, це також властивість. І є можливість отримати вік студента та його середній бал – це методи.
// Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений, але на 25 елементів. Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод .present() на чергове порожнє місце, в масив записується true, коли викликаємо .absent() - записується false. Передбачте будь-який захист від того, щоб у масиві відвідуваності не могло бути більше 25 записів. Масив – це властивість, present та absent – ​​методи.
// Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять), і якщо середня оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!", якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".
// Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів) і показати використання цих методів.

class Student {
    constructor(firstName, lastName, year, scores) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.scores = scores;
    }

    attendancy = [];

    getAge() {
        return new Date().getFullYear() - this.year;
    }

    getAverageScore() {
        let sum = 0;
        for (let i = 0; i < this.scores.length; i++) {
            sum += this.scores[i];
        }
        return sum / this.scores.length;
    }

    present() {
        if (this.attendancy.length <= 25) {
            this.attendancy.push(true);
        }
    }
    absent() {
        if (this.attendancy.length <= 25) {
            this.attendancy.push(false);
        }
    }

    getVisetedClasses() {
        let sumVisits = 0;
        for (let i = 0; i < this.attendancy.length; i++) {
            if (this.attendancy[i] === true) {
                sumVisits++;
            }
        }
        return sumVisits;
    }

    summary() {
        const sumVisits = this.getVisetedClasses();
        if ((sumVisits / this.attendancy.length) >= 0.9 && (this.getAverageScore() >= 90)) {
            return "Молодець!";
        }
        else if ((sumVisits / this.attendancy.length) >= 0.9 || (this.getAverageScore() >= 90)) {
            return "Добре, але можна краще";
        }
        else {
            return "Редиска!";
        }
    }
}



const Ivan = new Student('Ivan', 'Shevchenko', 2001, [100, 90, 85, 90, 80, 100]);

Ivan.present();
Ivan.present();
Ivan.absent();
Ivan.present();
Ivan.present();
Ivan.present();
Ivan.present();
Ivan.present();
Ivan.present();
Ivan.absent();
Ivan.present();
Ivan.present();
Ivan.present();
Ivan.present();
Ivan.absent();
Ivan.absent();
Ivan.present();
Ivan.present();
Ivan.absent();
Ivan.absent();
Ivan.present();
Ivan.present();
Ivan.present();
Ivan.present();
Ivan.present();



const Maria = new Student('Maria', 'Kononenko', 2005, [10, 90, 45, 60, 30, 10]);
Maria.absent();
Maria.present();
Maria.absent();
Maria.present();
Maria.present();
Maria.absent();
Maria.present();
Maria.absent();
Maria.present();
Maria.present();
Maria.absent();
Maria.present();
Maria.absent();
Maria.present();
Maria.present();
Maria.absent();
Maria.present();
Maria.absent();
Maria.present();
Maria.present();
Maria.absent();
Maria.present();
Maria.absent();
Maria.present();
Maria.present();





console.log("Age: " + Ivan.getAge());
console.log("Average score: " + Ivan.getAverageScore());
console.log("Visited classes: " + Ivan.getVisetedClasses());
console.log("Final result: " + Ivan.summary());


console.log('********************************************');


console.log("Age: " + Maria.getAge());
console.log("Average score: " + Maria.getAverageScore());
console.log("Visited classes: " + Maria.getVisetedClasses());
console.log("Final result: " + Maria.summary());