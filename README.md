# Javascript-Beginner-to-Intermediate

## Course Reference
These practice sets are based on the **Bro Code** JavaScript course on YouTube. Follow along with the course while working through these practice sets to get the most out of your learning.

## Link to Youtube course
[Bro Code - JS Course 12 Hours](https://youtu.be/lfmg-EJ8gm4)

## About
If you want to learn javascript and practice along then this is the best way.

## Quick Reference
A concise cheat sheet covering core JavaScript concepts with definitions, explanations, and examples for rapid review.

### Variables
- **let** – mutable variable. Example: `let x = 5;`
- **const** – constant reference, cannot be reassigned. Example: `const PI = 3.14;`

### Arithmetic Operators
- `+`, `-`, `*`, `/`, `%` (modulo).
  ```js
  let sum = 2 + 3; // 5
  let mod = 10 % 4; // 2
  ```

### Comparison Operators
- `>`, `<`, `>=`, `<=`, `===`, `!==` for strict equality/inequality.
  ```js
  console.log(5 === '5'); // false
  console.log(5 !== 3); // true
  ```

### Logical Operators
- `&&` (and), `||` (or), `!` (not).
  ```js
  if (a > 0 && b > 0) {} // both true
  ```

### Conditional Statements
- `if`, `else if`, `else`, nested `if`/`else`.
  ```js
  if (score > 90) {
    grade = 'A';
  } else if (score > 80) {
    grade = 'B';
  } else {
    grade = 'C';
  }
  ```

### Template Literals
- Backticks and `${}` for interpolation: ``let msg = `Hi ${name}!`;``

### DOM Access
- `document.getElementById().value` – get/set input value.
- `document.getElementById().textContent` – read/write text.
- `document.getElementById().onclick` – assign click handlers.

### Type Conversion
- `Number()`, `parseFloat()` to convert strings to numbers.
  ```js
  let n = Number('42');
  let f = parseFloat('3.14');
  ```

### Debugging
- `console.log` prints values to the console.

### Math Object
- `Math.round`, `Math.floor`, `Math.ceil`, `Math.random`, `Math.max`, `Math.min`.
  ```js
  Math.random(); // 0-1
  Math.max(1,5,3); // 5
  ```
- `Math.pow`, `Math.sqrt`, `Math.abs`, `Math.trunc`.

### Form & Input Properties
- `.checked` for checkboxes/radios.

### Ternary Operator
- `condition ? expr1 : expr2` (trinary function).

### Switch Case
  ```js
  switch(day) {
    case 1: break;
    default: break;
  }
  ```

### String Operations
Methods: `length`, `toUpperCase()`, `toLowerCase()`, `trim()`, `includes()`, `startsWith()`, `endsWith()`, `indexOf()`, `slice()`, `substring()`, `replace()`, `replaceAll()`, `split()`, `charAt()`.

### Method Chaining
  ```js
  ' hello '.trim().toUpperCase();
  ```

### Loops
- **While loop** `while(cond){}`
- **For loop** `for(let i=0;i<5;i++){}`

### Functions
- Declaration, parameters, arguments, `return`.

### Scope
- Local vs global variables.

### Arrays & Methods
- `push()`, `pop()`, `shift()`, `unshift()`, `splice()`, `slice()`, `indexOf()`, `includes()`, `join()`, `toString()`, `concat()`, `length`, `reverse()`, `sort()`.

### Spread & Rest
- Spread operator `...` expands arrays/objects.
- Rest parameter `function(...args){}` collects args.

### Callbacks
- Functions passed as arguments.
- `forEach()`, `map()`, `filter()`, `reduce()`, `findIndex()` examples.

### Function Expressions & Arrow Functions
- `const fn = function(){}` vs `const fn = () => {}`.

### Objects & `this`
- Object literals, methods using `this`.

### Classes
- `class`, `constructor`, create objects with `new`, `static` keyword.

### Inheritance
- `extends`, `super`, `this`, getters/setters.

### Destructuring
- Extract values from arrays/objects.

### Nested Structures
- Objects containing objects or arrays of objects.

### Sorting
- Numeric: `arr.sort((a,b)=>a-b)`
- Strings: `arr.sort((a,b)=>a.localeCompare(b))`

### Date & Time
- `new Date()` creates a date object.

### Closures
- Functions retaining access to outer scope variables.

> **Tip:** Use this section as a quick jump-off when reviewing fundamentals.

