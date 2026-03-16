# 🚀 JavaScript Fundamentals: Comprehensive Guide

> *A professional reference for JavaScript beginners to intermediates, covering core concepts with practical examples and hands-on practice links.*

## 📋 Table of Contents

- [1. Variables: `let` and `const`](#1-variables-let-and-const)
- [2. Arithmetic Operators](#2-arithmetic-operators)
- [3. Comparison Operators](#3-comparison-operators)
- [4. Logical Operators](#4-logical-operators)
- [5. Control Structures](#5-control-structures)
- [6. Template Literals](#6-template-literals)
- [7. DOM Basics](#7-dom-basics)
- [8. Type Conversion](#8-type-conversion)
- [9. Console Logging](#9-console-logging)
- [10. Math Object Methods](#10-math-object-methods)
- [11. Checkbox Handling](#11-checkbox-handling)
- [12. Ternary Operator](#12-ternary-operator)
- [13. Switch Case](#13-switch-case)
- [14. String Operations](#14-string-operations)
- [15. Loops](#15-loops)
- [16. Functions](#16-functions)
- [17. Variable Scopes](#17-variable-scopes)
- [18. Arrays and Array Methods](#18-arrays-and-array-methods)
- [19. Spread Operator, Rest Parameter, and Callbacks](#19-spread-operator-rest-parameter-and-callbacks)
- [20. Higher-Order Functions](#20-higher-order-functions)
- [21. Function Expressions and Objects](#21-function-expressions-and-objects)
- [22. Classes](#22-classes)
- [23. Inheritance and Advanced Features](#23-inheritance-and-advanced-features)
- [24. Advanced Objects and Concepts](#24-advanced-objects-and-concepts)
- [25. Asynchronous Programming](#25-asynchronous-programming)
- [26. Error Handling](#26-error-handling)
- [27. DOM Selection](#27-dom-selection)
- [28. DOM Navigation](#28-dom-navigation)
- [29. DOM Modification](#29-dom-modification)
- [30. Event Handling](#30-event-handling)
- [31. Promises and JSON](#31-promises-and-json)

---

## 1. Variables: `let` and `const`

### 📝 Description
- **`let`**: Declares a block-scoped variable that allows reassignment within its scope.
- **`const`**: Declares a block-scoped constant that must be initialized and cannot be reassigned.

### 💡 Functionality
Variables are fundamental for storing and manipulating data. **`let`** provides flexibility for changing values, while **`const`** ensures immutability, promoting safer code. Prefer **`let`** over the older **`var`** for better scope control and to avoid hoisting issues.

### 🔧 Example
```javascript
// Using let for reassignable variables
let userName = "Alice";
userName = "Bob"; // ✅ Valid reassignment

// Using const for constants
const PI = 3.14159;
// PI = 3.14; // ❌ Error: Assignment to constant variable
```

### 📚 Reference
🔗 [Practice Set 1](index.html) - Explore variable declarations and basic usage.

---

## 2. Arithmetic Operators

### 📝 Description
Perform fundamental mathematical computations:
- **`+`**: Addition
- **`-`**: Subtraction
- **`*`**: Multiplication
- **`/`**: Division
- **`%`**: Modulo (returns the remainder of division)

### 💡 Functionality
These operators enable numerical calculations essential for algorithms, data processing, and interactive applications. They follow standard mathematical precedence rules.

### 🔧 Example
```javascript
let a = 10, b = 3;

// Basic operations
console.log(a + b); // 13 (Addition)
console.log(a - b); // 7 (Subtraction)
console.log(a * b); // 30 (Multiplication)
console.log(a / b); // 3.333... (Division)
console.log(a % b); // 1 (Modulo - remainder)
```

### 📚 Reference
🔗 [Practice Set 1](index.html) - Practice arithmetic operations in code.

---

## 3. Comparison Operators

### 📝 Description
Evaluate relationships between values, returning a boolean result:
- **`>`**: Greater than
- **`<`**: Less than
- **`>=`**: Greater than or equal to
- **`<=`**: Less than or equal to
- **`===`**: Strict equality (value and type)
- **`!==`**: Strict inequality

### 💡 Functionality
Critical for decision-making in conditional statements. Strict operators (**`===`**, **`!==`**) prevent type coercion bugs, ensuring precise comparisons.

### 🔧 Example
```javascript
let x = 5, y = "5";

// Loose vs. strict comparison
console.log(x == y);  // true (type coercion)
console.log(x === y); // false (different types)

console.log(x > 3);   // true
console.log(x !== 10); // true
```

### 📚 Reference
🔗 [Practice Set 2](index.html) - Implement comparisons in user input scenarios.

---

## 4. Logical Operators

### 📝 Description
Combine or negate boolean expressions:
- **`&&`**: Logical AND (both operands must be truthy)
- **`||`**: Logical OR (at least one operand must be truthy)
- **`!`**: Logical NOT (negates the operand)

### 💡 Functionality
Essential for complex conditions in control flow. Short-circuit evaluation optimizes performance by avoiding unnecessary computations.

### 🔧 Example
```javascript
let isLoggedIn = true, isAdmin = false;

// Logical operations
console.log(isLoggedIn && isAdmin); // false (AND)
console.log(isLoggedIn || isAdmin); // true (OR)
console.log(!isLoggedIn);           // false (NOT)

// Short-circuit example
let result = isLoggedIn && console.log("Admin check"); // Logs only if isLoggedIn is true
```

### 📚 Reference
🔗 [Practice Set 4](index.html) - Apply logical operators in conditional logic.

---

## 5. Control Structures

### 📝 Description
Direct program execution flow based on conditions:
- **`if`**: Executes code if condition is true
- **`else if`**: Checks additional conditions
- **`else`**: Default execution when no conditions match
- **Nested `if-else`**: `if` statements within other `if` blocks for multi-level checks

### 💡 Functionality
Enable dynamic behavior and decision-making. Proper nesting improves code readability and logic flow.

### 🔧 Example
```javascript
let age = 25;

// Basic if-else
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// Nested if-else
if (age > 0) {
    if (age < 13) {
        console.log("Child");
    } else if (age < 20) {
        console.log("Teenager");
    } else {
        console.log("Adult");
    }
} else {
    console.log("Invalid age");
}
```

### 📚 Reference
🔗 [Practice Set 4](index.html) - Build conditional structures for various scenarios.

---

## 6. Template Literals

### 📝 Description
Enhanced string literals using backticks (\`) that support embedded expressions via `${}` placeholders.

### 💡 Functionality
Simplify string concatenation and interpolation, making code more readable and maintainable compared to traditional string concatenation.

### 🔧 Example
```javascript
let name = "Alice", age = 30;

// Template literal with interpolation
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); // "Hello, my name is Alice and I am 30 years old."

// Multi-line strings
let multiLine = `
This is a
multi-line string
using template literals.
`;
console.log(multiLine);
```

### 📚 Reference
🔗 [Practice Set 1](index.html) - Experiment with string formatting.

---

## 7. DOM Basics

### 📝 Description
Interact with HTML elements using core DOM methods:
- **`getElementById(id)`**: Retrieves an element by its unique ID
- **`.value`**: Gets or sets the value of form inputs
- **`.textContent`**: Gets or sets the text content of elements
- **`.onclick`**: Assigns a click event handler function

### 💡 Functionality
Bridge JavaScript logic with HTML structure, enabling dynamic web page manipulation and user interaction.

### 🔧 Example
```javascript
// Selecting and manipulating elements
let inputField = document.getElementById("username");
inputField.value = "Enter your name";

let displayPara = document.getElementById("output");
displayPara.textContent = "Welcome to the app!";

// Event handling
let submitBtn = document.getElementById("submit");
submitBtn.onclick = function() {
    alert("Form submitted!");
};
```

### 📚 Reference
🔗 [Practice Set 2](index.html) - Practice DOM interactions with forms and displays.

---

## 8. Type Conversion

### 📝 Description
Convert values between data types:
- **`Number(value)`**: Converts to a number (integer or float)
- **`parseFloat(string)`**: Parses a string to a floating-point number

### 💡 Functionality
Essential when handling user input (often strings) that need numerical processing. Prevents type-related errors in calculations.

### 🔧 Example
```javascript
// Converting strings to numbers
let strNum = "42";
console.log(Number(strNum));     // 42 (integer)
console.log(parseFloat("3.14")); // 3.14 (float)

// Handling invalid conversions
console.log(Number("abc"));      // NaN (Not a Number)
console.log(parseFloat("123abc"));// 123 (stops at non-numeric)
```

### 📚 Reference
🔗 [Practice Set 2](index.html) - Convert input values for mathematical operations.

---

## 9. Console Logging

### 📝 Description
**`console.log()`** outputs information to the browser's developer console for debugging and monitoring.

### 💡 Functionality
Critical debugging tool for inspecting variables, tracking execution flow, and identifying issues during development.

### 🔧 Example
```javascript
let user = { name: "John", age: 25 };
let scores = [85, 92, 78];

// Basic logging
console.log("Application started");

// Logging variables
console.log("User:", user);
console.log("Average score:", (scores[0] + scores[1] + scores[2]) / 3);

// Formatted logging
console.log(`User ${user.name} is ${user.age} years old`);
```

### 📚 Reference
🔗 [Practice Set 1](index.html) - Use console logging throughout your code.

---

## 10. Math Object Methods

### 📝 Description
Built-in methods for advanced mathematical operations:
- **`Math.round(x)`**: Rounds to nearest integer
- **`Math.floor(x)`**: Rounds down to integer
- **`Math.ceil(x)`**: Rounds up to integer
- **`Math.random()`**: Generates random number between 0 and 1
- **`Math.max(...values)`**: Returns maximum value
- **`Math.min(...values)`**: Returns minimum value
- **`Math.pow(base, exponent)`**: Calculates power
- **`Math.sqrt(x)`**: Calculates square root
- **`Math.abs(x)`**: Returns absolute value
- **`Math.trunc(x)`**: Removes decimal part

### 💡 Functionality
Provide precise mathematical computations for games, simulations, and data analysis.

### 🔧 Example
```javascript
// Rounding functions
console.log(Math.round(4.7)); // 5
console.log(Math.floor(4.7)); // 4
console.log(Math.ceil(4.3));  // 5

// Random and range functions
console.log(Math.random()); // e.g., 0.123456
console.log(Math.max(1, 5, 3)); // 5
console.log(Math.min(1, 5, 3)); // 1

// Power and root functions
console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(16));  // 4
console.log(Math.abs(-5));   // 5
console.log(Math.trunc(4.9)); // 4
```

### 📚 Reference
🔗 [Practice Set 5](index.html) - Implement mathematical calculations.

---

## 11. Checkbox Handling

### 📝 Description
**`.checked`** property checks or sets the state of a checkbox input element.

### 💡 Functionality
Manages user selections in forms, enabling conditional logic based on user preferences.

### 🔧 Example
```javascript
let agreeCheckbox = document.getElementById("agreeTerms");

// Check current state
if (agreeCheckbox.checked) {
    console.log("User agreed to terms");
    enableSubmitButton();
} else {
    console.log("User must agree to terms");
    disableSubmitButton();
}

// Programmatically set state
agreeCheckbox.checked = true; // Check the box
```

### 📚 Reference
🔗 [Practice Set 8](index.html) - Handle checkbox states in forms.

---

## 12. Ternary Operator

### 📝 Description
Condensed if-else statement: `condition ? expressionIfTrue : expressionIfFalse`

### 💡 Functionality
Provides concise conditional assignment, improving code readability for simple decisions.

### 🔧 Example
```javascript
let age = 20;

// Ternary for assignment
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"

// Nested ternary (use sparingly)
let category = age < 13 ? "Child" : age < 20 ? "Teen" : "Adult";
console.log(category); // "Adult"

// In function calls
let message = age >= 18 ? "Welcome!" : "Access denied";
displayMessage(message);
```

### 📚 Reference
🔗 [Practice Set 9](index.html) - Practice conditional expressions.

---

## 13. Switch Case

### 📝 Description
Multi-branch conditional structure that evaluates an expression and executes code based on matching cases.

### 💡 Functionality
Alternative to long if-else chains when comparing a single value against multiple options. Improves readability for enumerated choices.

### 🔧 Example
```javascript
let dayOfWeek = 3;
let dayName;

switch (dayOfWeek) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName); // "Wednesday"
```

### 📚 Reference
🔗 [Practice Set 10](index.html) - Implement switch statements for multiple conditions.

---

## 14. String Operations

### 📝 Description
Comprehensive methods for string manipulation:
- **`.length`**: Returns string length
- **`.toUpperCase()`**: Converts to uppercase
- **`.toLowerCase()`**: Converts to lowercase
- **`.trim()`**: Removes whitespace from both ends
- **`.includes(substring)`**: Checks if substring exists
- **`.startsWith(substring)`**: Checks if starts with substring
- **`.endsWith(substring)`**: Checks if ends with substring
- **`.indexOf(substring)`**: Returns first occurrence index
- **`.slice(start, end)`**: Extracts portion of string
- **`.substring(start, end)`**: Similar to slice but doesn't accept negative indices
- **`.replace(search, replacement)`**: Replaces first occurrence
- **`.replaceAll(search, replacement)`**: Replaces all occurrences
- **`.split(separator)`**: Splits string into array
- **`.charAt(index)`**: Returns character at index

### 💡 Functionality
Essential for text processing, validation, and formatting in web applications.

### 🔧 Example
```javascript
let text = "  Hello, World!  ";

// Basic properties and methods
console.log(text.length);        // 16
console.log(text.trim());        // "Hello, World!"
console.log(text.toUpperCase()); // "  HELLO, WORLD!  "

// Search and check methods
console.log(text.includes("World"));   // true
console.log(text.startsWith("  "));   // true
console.log(text.indexOf("World"));   // 9

// Extraction methods
console.log(text.slice(2, 8));        // "Hello,"
console.log(text.substring(2, 8));    // "Hello,"
console.log(text.charAt(0));          // " "

// Modification methods
console.log(text.replace("World", "Universe"));     // "  Hello, Universe!  "
console.log(text.replaceAll("l", "L"));             // "  HeLLo, WorLd!  "
console.log(text.split(" "));                        // ["", "", "Hello,", "World!", "", ""]
```

### 📚 Reference
🔗 [Practice Set 6](index.html) - Experiment with string manipulation techniques.

---

## 15. Loops

### 📝 Description
Control structures for repetitive execution:
- **While Loop**: Executes while condition is true
- **For Loop**: Executes for a specified number of iterations
- **Method Chaining**: Calling multiple methods on the same object sequentially

### 💡 Functionality
Automate repetitive tasks, iterate over data structures, and process collections efficiently.

### 🔧 Example
```javascript
// For loop - definite iterations
for (let i = 0; i < 5; i++) {
    console.log(`Iteration ${i + 1}`);
}

// While loop - indefinite iterations
let counter = 0;
while (counter < 3) {
    console.log(`Count: ${counter}`);
    counter++;
}

// Method chaining example
let result = "hello world"
    .toUpperCase()     // "HELLO WORLD"
    .split(" ")        // ["HELLO", "WORLD"]
    .join("-")         // "HELLO-WORLD"
    .toLowerCase();    // "hello-world"

console.log(result);
```

### 📚 Reference
🔗 [Practice Set 7](index.html) - Master looping constructs and chaining.

---

## 16. Functions

### 📝 Description
Reusable blocks of code that perform specific tasks:
- **Function Declaration**: Standard function definition
- **Parameters**: Variables defined in function signature
- **Arguments**: Values passed when calling the function
- **Return Statement**: Sends a value back to the caller

### 💡 Functionality
Promote code reusability, modularity, and maintainability. Functions encapsulate logic and can be called multiple times.

### 🔧 Example
```javascript
// Function declaration with parameters
function calculateArea(width, height) {
    return width * height;
}

// Function call with arguments
let area = calculateArea(5, 10);
console.log(`Area: ${area}`); // "Area: 50"

// Function with multiple return points
function getGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    return "F";
}

console.log(getGrade(85)); // "B"
```

### 📚 Reference
🔗 [Practice Set 11](index.html) - Build and use custom functions.

---

## 17. Variable Scopes

### 📝 Description
Defines where variables are accessible:
- **Global Scope**: Variables declared outside functions, accessible everywhere
- **Local Scope**: Variables declared inside functions, accessible only within that function

### 💡 Functionality
Controls variable visibility and lifetime, preventing naming conflicts and improving code organization.

### 🔧 Example
```javascript
// Global variable
let globalVar = "I'm global";

function demonstrateScope() {
    // Local variable
    let localVar = "I'm local";
    
    console.log(globalVar); // ✅ Accessible
    console.log(localVar);  // ✅ Accessible
}

demonstrateScope();
console.log(globalVar); // ✅ Accessible
// console.log(localVar); // ❌ Error: localVar is not defined
```

### 📚 Reference
🔗 [Practice Set 12](index.html) - Understand scope rules and best practices.

---

## 18. Arrays and Array Methods

### 📝 Description
Arrays store ordered collections of items. Key methods include:
- **`push(item)`**: Adds item to end
- **`pop()`**: Removes and returns last item
- **`shift()`**: Removes and returns first item
- **`unshift(item)`**: Adds item to beginning
- **`splice(start, deleteCount, ...items)`**: Modifies array at specific position
- **`slice(start, end)`**: Returns shallow copy of portion
- **`indexOf(item)`**: Returns first index of item
- **`includes(item)`**: Checks if item exists
- **`join(separator)`**: Joins elements into string
- **`toString()`**: Converts to string
- **`concat(...arrays)`**: Merges arrays
- **`.length`**: Returns array length
- **`reverse()`**: Reverses array order
- **`sort(compareFunction)`**: Sorts array elements

### 💡 Functionality
Fundamental data structure for managing collections, with methods for efficient manipulation and querying.

### 🔧 Example
```javascript
let fruits = ["apple", "banana", "cherry"];

// Adding/removing elements
fruits.push("date");     // ["apple", "banana", "cherry", "date"]
fruits.pop();            // ["apple", "banana", "cherry"]
fruits.unshift("apricot");// ["apricot", "apple", "banana", "cherry"]
fruits.shift();          // ["apple", "banana", "cherry"]

// Accessing and searching
console.log(fruits.indexOf("banana")); // 1
console.log(fruits.includes("apple")); // true

// Modifying
fruits.splice(1, 1, "blueberry"); // ["apple", "blueberry", "cherry"]
let subset = fruits.slice(0, 2);    // ["apple", "blueberry"]

// Converting and combining
console.log(fruits.join(", "));     // "apple, blueberry, cherry"
let moreFruits = ["date", "elderberry"];
let allFruits = fruits.concat(moreFruits); // ["apple", "blueberry", "cherry", "date", "elderberry"]

// Sorting and reversing
allFruits.sort();       // ["apple", "blueberry", "cherry", "date", "elderberry"]
allFruits.reverse();    // ["elderberry", "date", "cherry", "blueberry", "apple"]
```

### 📚 Reference
🔗 [Practice Set 13](index.html) - Master array operations and methods.

---

## 19. Spread Operator, Rest Parameter, and Callbacks

### 📝 Description
Advanced JavaScript features:
- **Spread Operator (`...`)**: Expands iterables into individual elements
- **Rest Parameter (`...`)**: Collects multiple arguments into an array
- **Callback Function**: Function passed as an argument to another function

### 💡 Functionality
Enable flexible data manipulation, function parameter handling, and asynchronous programming patterns.

### 🔧 Example
```javascript
// Spread operator
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }

// Rest parameter
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// Callback function
function processData(data, callback) {
    console.log("Processing:", data);
    callback(data);
}

processData("Hello", function(result) {
    console.log("Callback executed with:", result);
});
```

### 📚 Reference
🔗 [Practice Set 14](index.html) - Explore advanced parameter and data handling.

---

## 20. Higher-Order Functions

### 📝 Description
Functions that operate on other functions:
- **`forEach(callback)`**: Executes callback for each element
- **`map(callback)`**: Transforms each element and returns new array
- **`filter(callback)`**: Returns array of elements that pass test
- **`reduce(callback, initialValue)`**: Reduces array to single value
- **`findIndex(callback)`**: Returns index of first element that passes test

### 💡 Functionality
Enable functional programming paradigms, promoting declarative code and efficient data transformations.

### 🔧 Example
```javascript
let numbers = [1, 2, 3, 4, 5];

// forEach - side effects
numbers.forEach(num => console.log(num * 2)); // Logs: 2, 4, 6, 8, 10

// map - transformation
let doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]

// filter - selection
let evens = numbers.filter(num => num % 2 === 0); // [2, 4]

// reduce - accumulation
let sum = numbers.reduce((total, num) => total + num, 0); // 15

// findIndex - search
let index = numbers.findIndex(num => num > 3); // 3 (index of 4)
```

### 📚 Reference
🔗 [Practice Set 15](index.html) - Implement functional programming with arrays.

---

## 21. Function Expressions and Objects

### 📝 Description
Alternative function definition and object-oriented concepts:
- **Function Expression**: Assigning function to a variable
- **Arrow Function**: Concise function syntax
- **Objects**: Collections of key-value pairs
- **`this` Method**: Refers to the current object context

### 💡 Functionality
Provide flexible function definitions and enable object-oriented programming for complex data structures.

### 🔧 Example
```javascript
// Function expression
let greet = function(name) {
    return `Hello, ${name}!`;
};

// Arrow function
let square = num => num * num;

// Object with methods
let person = {
    name: "Alice",
    age: 30,
    greet: function() {
        console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
    },
    // Arrow function in object (lexical this)
    celebrateBirthday: () => {
        this.age++; // 'this' refers to global object, not person
    }
};

person.greet(); // "Hello, I'm Alice and I'm 30 years old."
```

### 📚 Reference
🔗 [Practice Set 16](index.html) and [Practice Set 17](index.html) - Practice function types and object methods.

---

## 22. Classes

### 📝 Description
Blueprint for creating objects with shared properties and methods:
- **Class**: Template for object creation
- **Constructor**: Special method for initializing objects
- **Object Creation**: Using `new` keyword
- **Static Keyword**: Methods/properties belonging to class, not instances

### 💡 Functionality
Implement object-oriented programming, promoting code reusability and encapsulation.

### 🔧 Example
```javascript
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    
    // Instance method
    getArea() {
        return this.width * this.height;
    }
    
    // Static method
    static createSquare(side) {
        return new Rectangle(side, side);
    }
}

// Creating instances
let rect = new Rectangle(10, 5);
console.log(rect.getArea()); // 50

// Using static method
let square = Rectangle.createSquare(4);
console.log(square.getArea()); // 16
```

### 📚 Reference
🔗 [Practice Set 18](index.html) - Build and instantiate classes.

---

## 23. Inheritance and Advanced Features

### 📝 Description
Advanced object-oriented concepts:
- **Inheritance**: Child classes inherit from parent classes
- **`super` Keyword**: Call parent constructor or methods
- **`this`**: Reference to current instance
- **Getter/Setter**: Control property access and modification
- **Destructuring**: Extract values from objects/arrays

### 💡 Functionality
Create hierarchical relationships between classes and provide controlled access to object properties.

### 🔧 Example
```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call parent constructor
        this.breed = breed;
    }
    
    speak() {
        console.log(`${this.name} barks!`);
    }
    
    get fullName() {
        return `${this.name} the ${this.breed}`;
    }
    
    set nickname(value) {
        this.name = value;
    }
}

let dog = new Dog("Buddy", "Golden Retriever");
dog.speak(); // "Buddy barks!"
console.log(dog.fullName); // "Buddy the Golden Retriever"
dog.nickname = "Max";
console.log(dog.name); // "Max"

// Destructuring
let { name, breed } = dog;
console.log(name, breed); // "Max" "Golden Retriever"
```

### 📚 Reference
🔗 [Practice Set 19](index.html) - Implement inheritance and property accessors.

---

## 24. Advanced Objects and Concepts

### 📝 Description
Complex data structures and programming concepts:
- **Nested Objects**: Objects containing other objects
- **Arrays of Objects**: Arrays containing object elements
- **Sorting**: Arranging elements in order
- **Shuffle**: Randomizing array order
- **Dates**: Date and time handling
- **Closures**: Functions that retain access to outer scope

### 💡 Functionality
Handle sophisticated data relationships and implement advanced programming patterns.

### 🔧 Example
```javascript
// Nested objects
let company = {
    name: "Tech Corp",
    employees: {
        count: 50,
        departments: {
            engineering: 20,
            sales: 15,
            hr: 15
        }
    }
};

// Arrays of objects
let products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Phone", price: 699 },
    { id: 3, name: "Tablet", price: 399 }
];

// Sorting objects
products.sort((a, b) => a.price - b.price);

// Shuffle array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffle(products);

// Date handling
let now = new Date();
console.log(now.getFullYear()); // Current year
console.log(now.toLocaleDateString()); // Formatted date

// Closures
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
let counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

### 📚 Reference
🔗 [Practice Set 20](index.html) - Work with complex data structures.

---

## 25. Asynchronous Programming

### 📝 Description
Handle operations that don't complete immediately:
- **`setTimeout(callback, delay)`**: Execute code after delay
- **`setInterval(callback, interval)`**: Execute code repeatedly
- **`clearTimeout(id)`**: Cancel timeout
- **ES6 Modules**: Import/export code across files
- **Asynchronous Code**: Non-blocking execution patterns

### 💡 Functionality
Manage time-based operations and modular code organization without blocking the main thread.

### 🔧 Example
```javascript
// setTimeout
console.log("Start");
setTimeout(() => {
    console.log("Delayed execution");
}, 2000);
console.log("End");

// setInterval
let counter = 0;
let intervalId = setInterval(() => {
    counter++;
    console.log(`Count: ${counter}`);
    if (counter >= 5) {
        clearInterval(intervalId);
    }
}, 1000);

// Module example (in separate files)
// math.js
export function add(a, b) { return a + b; }

// main.js
import { add } from './math.js';
console.log(add(2, 3)); // 5
```

### 📚 Reference
🔗 [Practice Set 21](index.html) - Implement asynchronous operations.

---

## 26. Error Handling

### 📝 Description
Manage runtime errors gracefully:
- **`try` Block**: Code that might throw errors
- **`catch` Block**: Handle thrown errors
- **`throw new Error(message)`**: Create and throw custom errors

### 💡 Functionality
Prevent application crashes and provide meaningful error messages for debugging and user experience.

### 🔧 Example
```javascript
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return a / b;
    } catch (error) {
        console.error("Error occurred:", error.message);
        return null;
    }
}

console.log(divide(10, 2)); // 5
console.log(divide(10, 0)); // Error message, returns null

// Custom error types
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateAge(age) {
    if (age < 0 || age > 150) {
        throw new ValidationError("Age must be between 0 and 150");
    }
    return true;
}
```

### 📚 Reference
🔗 [Practice Set 22](index.html) - Practice error handling techniques.

---

## 27. DOM Selection

### 📝 Description
Methods to select HTML elements:
- **`getElementById(id)`**: Select by unique ID
- **`getElementsByClassName(className)`**: Select by class name
- **`getElementsByTagName(tagName)`**: Select by tag name
- **`querySelector(selector)`**: Select first match using CSS selector
- **`querySelectorAll(selector)`**: Select all matches using CSS selector

### 💡 Functionality
Access and manipulate HTML elements for dynamic web page interactions.

### 🔧 Example
```javascript
// By ID
let header = document.getElementById("main-header");

// By class name
let buttons = document.getElementsByClassName("btn");

// By tag name
let paragraphs = document.getElementsByTagName("p");

// CSS selectors
let firstButton = document.querySelector(".btn");
let allButtons = document.querySelectorAll(".btn");
let specialElement = document.querySelector("#container .special");

// Working with collections
console.log(buttons.length); // Number of elements
console.log(allButtons[0]);  // First matching element
```

### 📚 Reference
🔗 [Practice Set 26](index.html) - Select and work with DOM elements.

---

## 28. DOM Navigation

### 📝 Description
Traverse the DOM tree structure:
- **`.firstElementChild`**: First child element
- **`.lastElementChild`**: Last child element
- **`.nextElementSibling`**: Next sibling element
- **`.previousElementSibling`**: Previous sibling element
- **`.parentElement`**: Parent element
- **`.children`**: Collection of child elements

### 💡 Functionality
Navigate element relationships for targeted manipulation and event handling.

### 🔧 Example
```html
<!-- Example HTML structure -->
<div id="container">
    <h1>Title</h1>
    <p>First paragraph</p>
    <p>Second paragraph</p>
    <div id="nested">
        <span>Inner text</span>
    </div>
</div>
```

```javascript
let container = document.getElementById("container");

// Navigation
let firstChild = container.firstElementChild; // <h1>
let lastChild = container.lastElementChild;   // <div id="nested">
let children = container.children;             // HTMLCollection of direct children

// Sibling navigation
let firstPara = document.querySelector("p");
let nextPara = firstPara.nextElementSibling;     // Second <p>
let prevPara = nextPara.previousElementSibling;  // First <p>

// Parent navigation
let nestedDiv = document.getElementById("nested");
let parent = nestedDiv.parentElement; // container div
```

### 📚 Reference
🔗 [Practice Set 26](index.html) - Navigate DOM hierarchies.

---

## 29. DOM Modification

### 📝 Description
Create and modify DOM structure dynamically:
- **`createElement(tagName)`**: Create new element
- **`append(child)`**: Add to end of element
- **`prepend(child)`**: Add to beginning of element
- **`removeChild(child)`**: Remove child element
- **`insertBefore(newElement, referenceElement)`**: Insert before specific element

### 💡 Functionality
Build dynamic user interfaces and modify page content in response to user actions.

### 🔧 Example
```javascript
// Create new elements
let newDiv = document.createElement("div");
newDiv.textContent = "New content";
newDiv.className = "dynamic-content";

let newList = document.createElement("ul");
let listItem1 = document.createElement("li");
listItem1.textContent = "Item 1";
let listItem2 = document.createElement("li");
listItem2.textContent = "Item 2";

newList.append(listItem1);
newList.append(listItem2);

// Add to document
let container = document.getElementById("container");
container.append(newDiv);      // Add to end
container.prepend(newList);    // Add to beginning

// Insert before specific element
let reference = document.querySelector("p");
let newPara = document.createElement("p");
newPara.textContent = "Inserted paragraph";
container.insertBefore(newPara, reference);

// Remove elements
let elementToRemove = document.querySelector(".old-content");
if (elementToRemove) {
    elementToRemove.parentElement.removeChild(elementToRemove);
}
```

### 📚 Reference
🔗 [Practice Set 27](index.html) - Modify DOM structure dynamically.

---

## 30. Event Handling

### 📝 Description
Respond to user interactions and browser events:
- **`click`**: Mouse click event
- **`mouseover`**: Mouse enters element
- **`mouseout`**: Mouse leaves element
- **`addEventListener(event, callback)`**: Attach event listeners
- **`keydown`**: Key pressed down
- **`keyup`**: Key released

### 💡 Functionality
Create interactive web applications by responding to user actions and system events.

### 🔧 Example
```javascript
let button = document.getElementById("myButton");
let input = document.getElementById("myInput");

// Click event
button.addEventListener("click", function() {
    console.log("Button clicked!");
    button.textContent = "Clicked!";
});

// Mouse events
button.addEventListener("mouseover", function() {
    button.style.backgroundColor = "lightblue";
});

button.addEventListener("mouseout", function() {
    button.style.backgroundColor = "";
});

// Keyboard events
input.addEventListener("keydown", function(event) {
    console.log(`Key pressed: ${event.key}`);
});

input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        console.log("Enter key released");
    }
});

// Event object properties
button.addEventListener("click", function(event) {
    console.log(`Clicked at: ${event.clientX}, ${event.clientY}`);
    event.preventDefault(); // Prevent default action
});
```

### 📚 Reference
🔗 [Practice Set 27](index.html) - Implement event-driven interactions.

---

## 31. Promises and JSON

### 📝 Description
Modern asynchronous programming and data interchange:
- **Promises**: Handle asynchronous operations
- **Async/Await**: Syntactic sugar for promises
- **JSON**: JavaScript Object Notation for data exchange
- **`JSON.stringify(object)`**: Convert object to JSON string
- **`JSON.parse(jsonString)`**: Convert JSON string to object

### 💡 Functionality
Manage complex asynchronous workflows and exchange data between client and server in a standardized format.

### 🔧 Example
```javascript
// Promises
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully");
        }, 2000);
    });
}

fetchData()
    .then(result => {
        console.log(result);
        return "Processed " + result;
    })
    .then(processed => console.log(processed))
    .catch(error => console.error(error));

// Async/Await
async function processData() {
    try {
        let result = await fetchData();
        console.log("Async result:", result);
        return result;
    } catch (error) {
        console.error("Async error:", error);
    }
}

processData();

// JSON operations
let user = {
    name: "Alice",
    age: 30,
    hobbies: ["reading", "coding"]
};

// Object to JSON
let jsonString = JSON.stringify(user);
console.log(jsonString); // '{"name":"Alice","age":30,"hobbies":["reading","coding"]}'

// JSON to object
let parsedUser = JSON.parse(jsonString);
console.log(parsedUser.name); // "Alice"

// Handling complex data
let apiResponse = '{"status":"success","data":[{"id":1,"title":"Post 1"}]}';
let response = JSON.parse(apiResponse);
console.log(response.data[0].title); // "Post 1"
```

### 📚 Reference
🔗 [Practice Set 30](index.html) - Master asynchronous programming and data serialization.

---

## 📖 Additional Resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Comprehensive JavaScript documentation
- [JavaScript.info](https://javascript.info/) - In-depth tutorials and guides
- [Eloquent JavaScript](https://eloquentjavascript.net/) - Free online book

## 🤝 Contributing

Found an error or want to suggest improvements? Feel free to update the practice sets or this guide!

---

*Last updated: March 16, 2026*

## 2. Arithmetic Operators: +, -, *, /, %

**Description:** Perform basic mathematical operations.  
- `+`: Addition  
- `-`: Subtraction  
- `*`: Multiplication  
- `/`: Division  
- `%`: Modulo (remainder)  

**Functionality:** Essential for calculations in programs.  

**Example:**  
```javascript
let a = 10, b = 3;
console.log(a + b); // 13
console.log(a % b); // 1
```

**Reference:** See [Practice Set 1](index.html) for arithmetic examples.

## 3. Comparison Operators: >, <, >=, <=, ===, !==

**Description:** Compare values and return a boolean (`true` or `false`).  
- `===`: Strict equality (checks value and type)  
- `!==`: Strict inequality  

**Functionality:** Used in conditions to make decisions.  

**Example:**  
```javascript
console.log(5 > 3); // true
console.log(5 === "5"); // false (different types)
```

**Reference:** Review [Practice Set 2](index.html) for comparisons in user inputs.

## 4. Logical Operators: &&, ||, !

**Description:**  
- `&&`: Logical AND (both conditions must be true)  
- `||`: Logical OR (at least one condition true)  
- `!`: Logical NOT (negates the condition)  

**Functionality:** Combine conditions in control structures.  

**Example:**  
```javascript
let x = true, y = false;
console.log(x && y); // false
console.log(x || y); // true
console.log(!x); // false
```

**Reference:** Explore [Practice Set 4](index.html) for logical operations.

## 5. Control Structures: if, else if, else, nested if else

**Description:** Execute code based on conditions. Nested if-else allows multiple levels of checks.  

**Functionality:** Control program flow.  

**Example:**  
```javascript
let age = 20;
if (age >= 18) {
    console.log("Adult");
} else if (age >= 13) {
    console.log("Teen");
} else {
    console.log("Child");
}

// Nested
if (age > 0) {
    if (age < 18) {
        console.log("Minor");
    }
}
```

**Reference:** Practice with [Practice Set 4](index.html).

## 6. Template Literals: ${}

**Description:** Allow embedding expressions inside strings using backticks and `${}`.  

**Functionality:** Easier string interpolation than concatenation.  

**Example:**  
```javascript
let name = "John";
let greeting = `Hello, ${name}!`;
console.log(greeting); // "Hello, John!"
```

**Reference:** See [Practice Set 1](index.html) for template usage.

## 7. DOM Basics: getElementById().value, .textContent, .onclick

**Description:**  
- `getElementById(id)`: Selects an element by ID.  
- `.value`: Gets/sets input value.  
- `.textContent`: Gets/sets text content.  
- `.onclick`: Assigns a click event handler.  

**Functionality:** Interact with HTML elements.  

**Example:**  
```javascript
let input = document.getElementById("myInput");
input.value = "Hello";

let para = document.getElementById("output");
para.textContent = "Displayed text";

document.getElementById("btn").onclick = function() {
    alert("Button clicked!");
};
```

**Reference:** Hands-on in [Practice Set 2](index.html).

## 8. Type Conversion: Number(), parseFloat()

**Description:**  
- `Number()`: Converts a value to a number.  
- `parseFloat()`: Parses a string to a floating-point number.  

**Functionality:** Convert strings from inputs to numbers.  

**Example:**  
```javascript
let str = "123";
console.log(Number(str)); // 123
console.log(parseFloat("123.45")); // 123.45
```

**Reference:** Used in [Practice Set 2](index.html) for calculations.

## 9. Console Logging: console.log

**Description:** Outputs messages to the browser console for debugging.  

**Functionality:** Essential for testing and debugging code.  

**Example:**  
```javascript
console.log("Hello, World!");
let x = 5;
console.log("Value of x:", x);
```

**Reference:** Throughout [Practice Set 1](index.html).

## 10. Math Object Methods: round, floor, ceil, random, max, min, pow, sqrt, abs, trunc

**Description:** Built-in methods for mathematical operations.  
- `round()`: Rounds to nearest integer.  
- `floor()`: Rounds down.  
- `ceil()`: Rounds up.  
- `random()`: Random number between 0 and 1.  
- `max()`, `min()`: Find max/min values.  
- `pow()`: Power.  
- `sqrt()`: Square root.  
- `abs()`: Absolute value.  
- `trunc()`: Removes decimal part.  

**Functionality:** Perform advanced math.  

**Example:**  
```javascript
console.log(Math.round(4.7)); // 5
console.log(Math.floor(4.7)); // 4
console.log(Math.random()); // e.g., 0.123
console.log(Math.max(1, 2, 3)); // 3
console.log(Math.pow(2, 3)); // 8
```

**Reference:** Explore [Practice Set 5](index.html).

## 11. Checkbox Handling: .checked

**Description:** Property to check if a checkbox is selected.  

**Functionality:** Handle form inputs.  

**Example:**  
```javascript
let checkbox = document.getElementById("agree");
if (checkbox.checked) {
    console.log("Agreed");
} else {
    console.log("Not agreed");
}
```

**Reference:** [Practice Set 8](index.html).

## 12. Ternary Operator (Trinary Function)

**Description:** Short form of if-else: `condition ? trueValue : falseValue`.  

**Functionality:** Concise conditional assignment.  

**Example:**  
```javascript
let age = 18;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"
```

**Reference:** [Practice Set 9](index.html).

## 13. Switch Case

**Description:** Multi-way branch based on value.  

**Functionality:** Alternative to multiple if-else.  

**Example:**  
```javascript
let day = 1;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Other day");
}
```

**Reference:** [Practice Set 10](index.html).

## 14. String Operations: length, toUpperCase(), toLowerCase(), trim(), includes(), startsWith(), endsWith(), indexOf(), slice(), substring(), replace(), replaceAll(), split(), charAt()

**Description:** Methods to manipulate strings.  
- `length`: String length.  
- `toUpperCase()`/`toLowerCase()`: Change case.  
- `trim()`: Remove whitespace.  
- `includes()`: Check if contains substring.  
- `startsWith()`/`endsWith()`: Check start/end.  
- `indexOf()`: Find position.  
- `slice()`/`substring()`: Extract part.  
- `replace()`/`replaceAll()`: Replace text.  
- `split()`: Split into array.  
- `charAt()`: Character at position.  

**Functionality:** String processing.  

**Example:**  
```javascript
let str = "  Hello World  ";
console.log(str.length); // 15
console.log(str.trim()); // "Hello World"
console.log(str.toUpperCase()); // "  HELLO WORLD  "
console.log(str.includes("World")); // true
console.log(str.indexOf("World")); // 8
console.log(str.slice(0, 5)); // "  Hel"
console.log(str.replace("World", "JS")); // "  Hello JS  "
console.log(str.split(" ")); // ["", "", "Hello", "World", "", ""]
console.log(str.charAt(0)); // " "
```

**Reference:** [Practice Set 6](index.html).

## 15. Loops: Method Chaining, While Loop, For Loop

**Description:**  
- **For Loop:** Repeat for a count.  
- **While Loop:** Repeat while condition is true.  
- **Method Chaining:** Call methods sequentially on the same object.  

**Functionality:** Iterate over data or repeat actions.  

**Example:**  
```javascript
// For Loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While Loop
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

// Method Chaining
let str = "hello";
let result = str.toUpperCase().trim().length;
console.log(result); // 5
```

**Reference:** [Practice Set 7](index.html).

## 16. Functions: Functions, Function Parameters, Function Arguments, Return Statement

**Description:**  
- Define reusable code blocks.  
- Parameters: Variables in definition.  
- Arguments: Values passed when calling.  
- Return: Send value back.  

**Functionality:** Modularize code.  

**Example:**  
```javascript
function add(a, b) { // a, b are parameters
    return a + b;
}
let sum = add(2, 3); // 2, 3 are arguments
console.log(sum); // 5
```

**Reference:** [Practice Set 11](index.html).

## 17. Variable Scopes: Local, Global

**Description:**  
- **Global:** Accessible everywhere.  
- **Local:** Accessible only in the block/function where defined.  

**Functionality:** Manage variable accessibility.  

**Example:**  
```javascript
let globalVar = "Global";

function test() {
    let localVar = "Local";
    console.log(globalVar); // Accessible
    console.log(localVar); // Accessible
}
// console.log(localVar); // Error: Not accessible outside
```

**Reference:** [Practice Set 12](index.html).

## 18. Arrays and Array Methods: push(), pop(), shift(), unshift(), splice(), slice(), indexOf(), includes(), join(), toString(), concat(), length, reverse(), sort()

**Description:** Arrays store multiple values. Methods manipulate them.  
- `push()`/`pop()`: Add/remove from end.  
- `shift()`/`unshift()`: Add/remove from start.  
- `splice()`: Add/remove at index.  
- `slice()`: Extract part.  
- `indexOf()`: Find index.  
- `includes()`: Check existence.  
- `join()`: Join to string.  
- `concat()`: Merge arrays.  
- `reverse()`: Reverse order.  
- `sort()`: Sort elements.  

**Functionality:** Handle collections of data.  

**Example:**  
```javascript
let arr = [1, 2, 3];
arr.push(4); // [1,2,3,4]
arr.pop(); // [1,2,3]
arr.unshift(0); // [0,1,2,3]
arr.shift(); // [1,2,3]
console.log(arr.slice(1, 3)); // [2,3]
console.log(arr.indexOf(2)); // 1
console.log(arr.includes(2)); // true
console.log(arr.join("-")); // "1-2-3"
let arr2 = [4, 5];
console.log(arr.concat(arr2)); // [1,2,3,4,5]
arr.reverse(); // [3,2,1]
arr.sort(); // [1,2,3]
```

**Reference:** [Practice Set 13](index.html).

## 19. Spread Operator (...), Rest Parameter (...), Callback Function

**Description:**  
- **Spread:** Expands array/object.  
- **Rest:** Collects arguments into array.  
- **Callback:** Function passed as argument.  

**Functionality:** Flexible data handling.  

**Example:**  
```javascript
// Spread
let arr = [1, 2, 3];
let newArr = [...arr, 4]; // [1,2,3,4]

// Rest
function sum(...nums) {
    return nums.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3)); // 6

// Callback
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}
greet("Alice", () => console.log("Callback executed"));
```

**Reference:** [Practice Set 14](index.html).

## 20. Callbacks and Higher-Order Functions: forEach(), map(), filter(), reduce(), findIndex()

**Description:** Functions that take callbacks to process arrays.  
- `forEach()`: Execute for each element.  
- `map()`: Transform each element.  
- `filter()`: Filter elements.  
- `reduce()`: Accumulate value.  
- `findIndex()`: Find index of element.  

**Functionality:** Functional programming with arrays.  

**Example:**  
```javascript
let arr = [1, 2, 3, 4];
arr.forEach(num => console.log(num)); // Logs 1,2,3,4
let doubled = arr.map(num => num * 2); // [2,4,6,8]
let evens = arr.filter(num => num % 2 === 0); // [2,4]
let sum = arr.reduce((acc, num) => acc + num, 0); // 10
let index = arr.findIndex(num => num === 3); // 2
```

**Reference:** [Practice Set 15](index.html).

## 21. Function Expression, Arrow Function, Objects, This Method

**Description:**  
- **Function Expression:** Assign function to variable.  
- **Arrow Function:** Shorter syntax.  
- **Objects:** Collections of key-value pairs.  
- **this:** Refers to current object.  

**Functionality:** Different function definitions and object-oriented code.  

**Example:**  
```javascript
// Function Expression
let add = function(a, b) { return a + b; };

// Arrow Function
let multiply = (a, b) => a * b;

// Object
let person = {
    name: "John",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};
person.greet();
```

**Reference:** [Practice Set 16](index.html) and [Practice Set 17](index.html).

## 22. Classes: Class, Constructor, Object Creation Using Class, Static Keyword

**Description:**  
- **Class:** Blueprint for objects.  
- **Constructor:** Initializes object.  
- **Static:** Method/property on class, not instance.  

**Functionality:** Object-oriented programming.  

**Example:**  
```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, ${this.name}`);
    }
    static sayHi() {
        console.log("Hi!");
    }
}
let p = new Person("Alice", 25);
p.greet(); // "Hello, Alice"
Person.sayHi(); // "Hi!"
```

**Reference:** [Practice Set 18](index.html).

## 23. Inheritance: Inheritance, Super Keyword, this, Getter, Setter, Destructuring

**Description:**  
- **Inheritance:** Child class inherits from parent.  
- **Super:** Call parent constructor/method.  
- **Getter/Setter:** Control property access.  
- **Destructuring:** Extract values from objects/arrays.  

**Functionality:** Advanced OOP and data extraction.  

**Example:**  
```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    bark() {
        console.log(`${this.name} barks`);
    }
}
let dog = new Dog("Buddy", "Lab");

// Getter/Setter
class Circle {
    constructor(radius) {
        this._radius = radius;
    }
    get area() {
        return Math.PI * this._radius ** 2;
    }
    set radius(value) {
        this._radius = value;
    }
}

// Destructuring
let obj = { a: 1, b: 2 };
let { a, b } = obj;
console.log(a, b); // 1 2
```

**Reference:** [Practice Set 19](index.html).

## 24. Advanced Objects: Nested objects, Arrays of objects, Sorting, Shuffle an array, Dates, Closures

**Description:**  
- **Nested Objects:** Objects inside objects.  
- **Arrays of Objects:** Array of object literals.  
- **Sorting/Shuffling:** Rearrange arrays.  
- **Dates:** Date handling.  
- **Closures:** Function retaining outer scope.  

**Functionality:** Complex data structures.  

**Example:**  
```javascript
// Nested Object
let person = {
    name: "John",
    address: {
        city: "NYC"
    }
};

// Array of Objects
let people = [{ name: "Alice" }, { name: "Bob" }];

// Sorting
let arr = [3, 1, 2];
arr.sort((a, b) => a - b); // [1,2,3]

// Shuffle
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Date
let now = new Date();
console.log(now.getFullYear());

// Closure
function outer() {
    let x = 1;
    return function inner() {
        return x;
    };
}
let closure = outer();
console.log(closure()); // 1
```

**Reference:** [Practice Set 20](index.html).

## 25. Asynchronous Programming: setTimeout, setInterval, clearTimeout, ES6 Modules, Asynchronous code

**Description:**  
- **setTimeout:** Execute after delay.  
- **setInterval:** Repeat execution.  
- **clearTimeout:** Cancel timeout.  
- **ES6 Modules:** Import/export code.  
- **Asynchronous:** Non-blocking execution.  

**Functionality:** Handle time-based and modular code.  

**Example:**  
```javascript
// setTimeout
setTimeout(() => console.log("Delayed"), 1000);

// setInterval
let interval = setInterval(() => console.log("Repeat"), 1000);
clearTimeout(interval); // Stop

// Module (in separate files)
// export.js: export const pi = 3.14;
// import.js: import { pi } from './export.js';
```

**Reference:** [Practice Set 21](index.html).

## 26. Error Handling: try catch, throw new Error

**Description:**  
- **try catch:** Handle exceptions.  
- **throw:** Create custom errors.  

**Functionality:** Robust error management.  

**Example:**  
```javascript
try {
    let x = 1 / 0;
    if (x === Infinity) {
        throw new Error("Division by zero");
    }
} catch (error) {
    console.log(error.message);
}
```

**Reference:** [Practice Set 22](index.html).

## 27. DOM Manipulation: getElementById(), getElementsByClassName(), getElementsByTagName(), querySelector(), querySelectorAll()

**Description:** Select elements from DOM.  
- `getElementById()`: By ID.  
- `getElementsByClassName()`: By class.  
- `getElementsByTagName()`: By tag.  
- `querySelector()`: First match.  
- `querySelectorAll()`: All matches.  

**Functionality:** Access HTML elements.  

**Example:**  
```javascript
let el = document.getElementById("myId");
let els = document.getElementsByClassName("myClass");
let tags = document.getElementsByTagName("div");
let first = document.querySelector(".myClass");
let all = document.querySelectorAll("p");
```

**Reference:** [Practice Set 26](index.html).

## 28. DOM Navigation: .firstElementChild, .lastElementChild, .nextElementSibling, .previousElementSibling, .parentElement, .children

**Description:** Traverse DOM tree.  

**Functionality:** Navigate element relationships.  

**Example:**  
```javascript
let parent = document.getElementById("parent");
let firstChild = parent.firstElementChild;
let nextSib = firstChild.nextElementSibling;
let prevSib = nextSib.previousElementSibling;
let allChildren = parent.children;
```

**Reference:** [Practice Set 26](index.html).

## 29. DOM Modification: createElement(), append(), prepend(), removeChild(), insertBefore()

**Description:** Create and modify DOM structure.  

**Functionality:** Dynamically change page content.  

**Example:**  
```javascript
let div = document.createElement("div");
div.textContent = "New Element";
document.body.append(div); // Add to end
document.body.prepend(div); // Add to start
document.body.removeChild(div); // Remove
let ref = document.getElementById("ref");
document.body.insertBefore(div, ref); // Insert before
```

**Reference:** [Practice Set 27](index.html).

## 30. Event Handling: click, mouseover, mouseout, addEventListener(event, callback), keydown, keyup

**Description:** Handle user interactions.  
- `addEventListener()`: Attach event listeners.  

**Functionality:** Respond to user actions.  

**Example:**  
```javascript
let btn = document.getElementById("btn");
btn.addEventListener("click", () => alert("Clicked"));
btn.addEventListener("mouseover", () => console.log("Hovered"));
btn.addEventListener("mouseout", () => console.log("Left"));

document.addEventListener("keydown", (e) => console.log(e.key));
document.addEventListener("keyup", (e) => console.log("Key up"));
```

**Reference:** [Practice Set 27](index.html).

## 31. Promises and Async/Await: Promises, Async/Await, JSON, JSON.stringify(), JSON.parse()

**Description:**  
- **Promises:** Handle async operations.  
- **Async/Await:** Syntactic sugar for promises.  
- **JSON:** Data format.  
- `JSON.stringify()`: Object to JSON string.  
- `JSON.parse()`: JSON string to object.  

**Functionality:** Modern asynchronous programming and data exchange.  

**Example:**  
```javascript
// Promise
let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done"), 1000);
});
promise.then(result => console.log(result));

// Async/Await
async function asyncFunc() {
    let result = await promise;
    console.log(result);
}

// JSON
let obj = { name: "John", age: 30 };
let jsonStr = JSON.stringify(obj); // '{"name":"John","age":30}'
let parsed = JSON.parse(jsonStr); // { name: "John", age: 30 }
```

**Reference:** [Practice Set 30](index.html).</content>
<parameter name="filePath">/workspaces/Javascript-Beginner-to-Intermediate/javascript_topics.md