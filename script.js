// // 1. Write a function to check if you have passed your exam. You should get marks for subjects from your teacher or user.  -10


// function did(examNumber) {
//     for (let score of examNumber) {
//         if (score < 40) {
//             return false;
//         }
//     }
//     return true;
// }
// const examNumber = [45, 66, 62, 39, 55];
// console.log(did(examNumber)); 


// // 2. Define and show yourself as a class of students, including your name, number, and hobby. -7


// class Student {
//     constructor(name, roll, hobby) {
//         this.name = name;
//         this.roll = roll;
//         this.hobby = hobby;
//     }
// }

// const Rahim = new Student('Rahim', 45, 'Travalling');
// console.log(Rahim);


// // 3. Introduce your friend Kalam to the class with class properties. -8


// class kamal {
//     constructor(name, subject, hobby) {
//         this.name = name;
//         this.subject = subject;
//         this.hobby = hobby;
//     }
    
//     introduce() {
//         console.log(`Class: ${this.name} Subject: ${this.subject}.`);
//     }
// }
// const Class = new kamal('WEB', 'Programming');
// Class.introduce();

// // 4. If every student get an average of 60 marks in each subject, show the total cumulative mark based on student number. -25

// function total_Number(classScores) {
//     let total = 0;
//     for (let student_Number of class_Number) {
//         let sum = 0;
//         for (let score of student_Number) {
//             sum += score;
//         }
//         if (sum / student_Number.length < 60) {
//             return false;
//         }
//         total += sum;
//     }
//     return total;
// }

// const class_Number = [
//     [55, 45, 76, 87, 54],
//     [43, 94, 45, 66, 81],
    
// ];
// console.log(total_Number(class_Number));


// -------------Reduce---------------------

// const array1  =[ 1,2,3,4];

// const initialValue  = 2;
// const suminitialValue=array1.reduce(
//     (accumulator, curentValue) => accumulator * curentValue, initialValue,
// );
// console.log(suminitialValue)


// ------------------(16/03/24)---------------------
// ----------JS Array Methods (Full)----------------


// 1. Just show the strings in a new array.
let A = [50,107, 'jack', 83, 'killer', 'son', true];
const stringArray= A.filter( i =>typeof i=== `string` );
console.log(`Sort String:`,stringArray);

// 2. Create a new array from numbers and sort them.
const numberArray= A.filter( i => typeof i ===`number`) .sort((a, b) => a-b);
console.log(`sort Number:`,numberArray);

// 3. Make the string array reverse.
const reversed = stringArray.reverse();
console.log('reversed:', reversed);

// 4. Combine both array of numbers and strings.
const Combine = numberArray.concat(stringArray);
console.log(`Combine:`,Combine)

// 5. Delete 3 items from the 6th item from the combined array.
Combine.splice( 2,3);
console.log(`Delete 3 items:`,Combine);

// 6. Show elements from A which are less than 100.
const lessThan100 = A.filter(i=>typeof i===`number` && i<100);
console.log(`less than 100:`,lessThan100);

// 7. From string array remove the last letter and add word 'str' before each of them.
const removeAdd = stringArray.map( i => i.slice(0,-1) + 'str');
console.log(`Remove & Add:`,removeAdd);


