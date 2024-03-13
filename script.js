// 1. Write a function to check if you have passed your exam. You should get marks for subjects from your teacher or user.  -10


function did(examNumber) {
    for (let score of examNumber) {
        if (score < 40) {
            return false;
        }
    }
    return true;
}
const examNumber = [45, 66, 62, 39, 55];
console.log(did(examNumber)); 


// 2. Define and show yourself as a class of students, including your name, number, and hobby. -7


class Student {
    constructor(name, roll, hobby) {
        this.name = name;
        this.roll = roll;
        this.hobby = hobby;
    }
}

const Rahim = new Student('Rahim', 45, 'Travalling');
console.log(Rahim);


// 3. Introduce your friend Kalam to the class with class properties. -8


class kamal {
    constructor(name, subject, hobby) {
        this.name = name;
        this.subject = subject;
        this.hobby = hobby;
    }
    
    introduce() {
        console.log(`Class: ${this.name} Subject: ${this.subject}.`);
    }
}
const Class = new kamal('WEB', 'Programming');
Class.introduce();

// 4. If every student get an average of 60 marks in each subject, show the total cumulative mark based on student number. -25

function total_Number(classScores) {
    let total = 0;
    for (let student_Number of class_Number) {
        let sum = 0;
        for (let score of student_Number) {
            sum += score;
        }
        if (sum / student_Number.length < 60) {
            return false;
        }
        total += sum;
    }
    return total;
}

const class_Number = [
    [55, 45, 76, 87, 54],
    [43, 94, 45, 66, 81],
    
];
console.log(total_Number(class_Number));

