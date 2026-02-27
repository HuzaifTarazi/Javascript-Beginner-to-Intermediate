# JavaScript Beginner-to-Intermediate Practice Repository

## 📘 Overview
This repository contains a series of practice programs and exercises created while following the **Bro Code JavaScript** YouTube course. It is designed for learners who want to reinforce concepts by writing real code. Every file is a standalone mini-project demonstrating a particular concept or combination of concepts.

---

## 🔗 Course Reference
If you are following the same video series, you can find it here:
[Bro Code - JS Course (12 Hours)](https://youtu.be/lfmg-EJ8gm4)

> These exercises were written while watching the lessons. Use them as a companion to the videos or as a self‑study reference.

---

## 🚀 How to Use
1. Open any `.js` file in this folder with your code editor.
2. Read the comments at the top of the file – they explain what the program demonstrates.
3. Run the file (e.g. via Node.js or by opening `index.html` in a browser) to see it in action.
4. Modify the code and experiment!

---

## 🧠 Concepts Covered
Below are the fundamental JavaScript topics practiced throughout the repository. Each entry includes a brief explanation and example code to clarify how the feature works.

### 1. Variables
- **`let`**: declares a block‑scoped, mutable variable.
- **`const`**: declares a constant reference (the variable cannot be reassigned).

```js
let count = 0;
const PI = 3.14;
```

### 2. Data Types & Type Conversion
Primitive data types (number, string, boolean, null, undefined, symbol).
- Convert strings to numbers using `Number()` or `parseFloat()`.

```js
let n = Number('42'); // 42
let f = parseFloat('3.14'); // 3.14
```

### 3. Operators
- **Arithmetic**: `+ - * / %`.
- **Comparison**: `> < >= <= === !==` (strict equality avoids type coercion).
- **Logical**: `&&`, `||`, `!`.
- **Ternary**: `condition ? expr1 : expr2` (shorthand for if/else).

```js
let max = a > b ? a : b;
```

### 4. Conditional Statements
Control flow using `if`, `else if`, `else`, and `switch`.

```js
if (score > 90) {
  grade = 'A';
} else if (score > 80) {
  grade = 'B';
} else {
  grade = 'C';
}
```

### 5. Loops
- **`for`**: iterate a known number of times.
- **`while`** / **`do…while`**: loop while a condition holds.

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### 6. Functions
Reusable blocks of code. Can accept parameters and return values.

```js
function add(a, b) {
  return a + b;
}
```

✔ **Function expressions** and **arrow functions**:

```js
const multiply = (x, y) => x * y;
```

### 7. Scope & Closures
- **Scope**: where variables are accessible (global vs local).
- **Closure**: a function remembering variables from its defining scope.

```js
function outer() {
  let secret = 42;
  return function () {
    return secret; // closure
  };
}
```

### 8. Arrays
Ordered collections with built‑in methods (`push`, `pop`, `splice`, `slice`, `map`, `filter`, `reduce`, etc.).

```js
let nums = [1, 2, 3];
nums.push(4);
```

### 9. Objects
Key‑value stores. Methods can use `this` to reference the object.

```js
let person = {
  name: 'Alice',
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
};
```

### 10. Classes & Inheritance
ES6 syntax for constructing objects and sharing behavior.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}
```

### 11. Destructuring & Spread/Rest
- **Destructuring** extracts values from arrays/objects.
- **Spread (`...`)** expands an iterable.
- **Rest** collects remaining arguments.

```js
const [a, b] = [1, 2];
function sum(...numbers) {
  return numbers.reduce((s, n) => s + n, 0);
}
```

### 12. String Methods
Operations such as `.length`, `.toUpperCase()`, `.trim()`, `.includes()`, `.slice()`, `.replace()`, etc.

### 13. DOM Manipulation (Browser Only)
Interact with web pages by selecting elements and modifying their properties or events.

```js
const btn = document.getElementById('myBtn');
btn.onclick = () => alert('clicked');
```

### 14. Math & Date
Use the built‑in `Math` object (`Math.random()`, `Math.floor()`, etc.) and `Date` for time.

### 15. Debugging
Print values with `console.log()` and inspect in browser devtools or Node.js.


---

## 🗂 Repository Contents (Sample)
| File | Description |
|------|-------------|
| `Dice_Roll_Program.js` | Generate a random dice roll using `Math.random()` |
| `Number_guessing_game.js` | Simple game using loops and conditionals |
| `Random_Password_Generator.js` | Builds a password from character sets |
| `temperature_conversion_program.js` | Converts Celsius ↔ Fahrenheit using functions |
| `Practice_set_*.js` | assorted practice exercises from the course |
| `index.html` | Basic HTML page to host scripts in the browser |

> See the comments at the top of each file for more details.

---

## 💡 Tips and Next Steps
- Try adding your own variations to each program.
- Use this repo as a reference when solving your own problems.
- Expand concepts by building small projects (to‑do list, quiz app, etc.).

Happy coding! 🎉

