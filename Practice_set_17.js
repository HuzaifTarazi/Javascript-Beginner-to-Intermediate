// class person {
//     constructor(name, age, fatherName, motherName) {
//         this.name = name;
//         this.age = age;
//         this.fatherName = fatherName;
//         this.motherName = motherName;
//     }

//     greet() {
//         console.log(`Hello, My name is ${this.name} and I am ${this.age} years old.`)
//     }
// }


// let saveData = new person("Huzaif", 25, "Rauf", "Nazli Rauf");
// let newData = new person("Zukhruf", 23, "Muhammad Rauf", "Nazli Rauf")

// console.log(newData)


// Create a class Student

// Add properties:

// name

// marks

// Add methods:

// getDetails() → prints name and marks

// getGrade() →

// marks >= 80 → "A"

// marks >= 60 → "B"

// else → "C"


class student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    getDetails() {
        return `The Student Name is ${this.name} and Total Marks Obtained are ${this.marks}`
    }

    getGrade() {
        if (this.marks >= 80) {
            return "You Got A Grade";
        } else if (this.marks >= 60) {
            return "You Got B Grade";
        } else {
            return "You Got C Grade"
        }
    }
}

let Student1 = new student("Huzaif Tarazi", 30)


console.log(Student1.getDetails());
console.log(Student1.getGrade());