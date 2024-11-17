ECMAScript 6 (ES6), also known as ECMAScript 2015, introduced several new features and improvements to JavaScript. Here’s an overview of some of the most significant ES6 features: `let`, `const`, arrow functions, destructuring, template literals, and modules (`import` and `export`).

### **1. `let` and `const`**

**`let`:** Used to declare variables that can be reassigned. Unlike `var`, `let` is block-scoped, meaning it is confined to the block in which it is declared.

**Example:**

```javascript
let x = 10;
x = 20; // Reassigns x to 20

if (true) {
  let y = 30; // Block-scoped
  console.log(y); // Output: 30
}

console.log(y); // ReferenceError: y is not defined
```

**`const`:** Used to declare variables that cannot be reassigned. It is also block-scoped. Note that `const` only prevents reassignment, not mutation of objects or arrays.

**Example:**

```javascript
const pi = 3.14;
// pi = 3.14159; // TypeError: Assignment to constant variable

const obj = { name: "John" };
obj.name = "Doe"; // Allowed: Mutating the object

console.log(obj.name); // Output: "Doe"
```

### **2. Arrow Functions**

Arrow functions provide a shorter syntax for writing functions and do not have their own `this`, making them useful for functions that need to retain the context of `this`.

**Syntax:**

```javascript
const add = (a, b) => a + b;
```

**Example:**

```javascript
const multiply = (a, b) => a * b;

console.log(multiply(2, 3)); // Output: 6
```

**Single Parameter and Single Expression:**

```javascript
const square = x => x * x;

console.log(square(4)); // Output: 16
```

**No Parameters:**

```javascript
const greet = () => "Hello, world!";

console.log(greet()); // Output: "Hello, world!"
```

### **3. Destructuring**

Destructuring allows unpacking values from arrays or properties from objects into distinct variables.

**Array Destructuring:**

**Syntax:**

```javascript
const [a, b] = [1, 2];
```

**Example:**

```javascript
const numbers = [1, 2, 3];
const [one, two, three] = numbers;

console.log(one);   // Output: 1
console.log(two);   // Output: 2
console.log(three); // Output: 3
```

**Object Destructuring:**

**Syntax:**

```javascript
const { name, age } = { name: "John", age: 30 };
```

**Example:**

```javascript
const person = { name: "John", age: 30 };
const { name, age } = person;

console.log(name); // Output: "John"
console.log(age);  // Output: 30
```

**Default Values:**

```javascript
const { a = 1, b = 2 } = { a: 5 };

console.log(a); // Output: 5
console.log(b); // Output: 2
```

### **4. Template Literals**

Template literals provide a way to work with strings that allows for embedded expressions and multi-line strings.

**Syntax:**

```javascript
const name = "John";
const greeting = `Hello, ${name}!`;

console.log(greeting); // Output: "Hello, John!"
```

**Multi-line Strings:**

```javascript
const multiLineString = `
  This is a string
  that spans multiple
  lines.
`;

console.log(multiLineString);
```

**Embedded Expressions:**

```javascript
const a = 5;
const b = 10;
const result = `The sum of ${a} and ${b} is ${a + b}.`;

console.log(result); // Output: "The sum of 5 and 10 is 15."
```

### **5. Modules**

ES6 modules allow you to import and export code between files, which helps in organizing and managing code better.

**Exporting:**

- **Named Exports:** Allows you to export multiple values from a module.

  ```javascript
  // math.js
  export const pi = 3.14;
  export function add(x, y) {
    return x + y;
  }
  ```

- **Default Export:** Allows you to export a single value from a module.

  ```javascript
  // greet.js
  export default function greet(name) {
    return `Hello, ${name}!`;
  }
  ```

**Importing:**

- **Named Imports:** Imports specific values from a module.

  ```javascript
  // app.js
  import { pi, add } from './math.js';
  
  console.log(pi); // Output: 3.14
  console.log(add(2, 3)); // Output: 5
  ```

- **Default Import:** Imports the default export from a module.

  ```javascript
  // app.js
  import greet from './greet.js';
  
  console.log(greet("John")); // Output: "Hello, John!"
  ```

- **Import All:** Imports all named exports as a single object.

  ```javascript
  // app.js
  import * as math from './math.js';
  
  console.log(math.pi); // Output: 3.14
  console.log(math.add(2, 3)); // Output: 5
  ```

### **Summary**

- **`let` and `const`:** Block-scoped variable declarations. `const` is for variables that should not be reassigned.
- **Arrow Functions:** Shorter syntax for functions that do not bind their own `this`.
- **Destructuring:** Extracts values from arrays and objects into distinct variables.
- **Template Literals:** Allows for embedded expressions and multi-line strings.
- **Modules:** Organizes code by exporting and importing functions, objects, or primitives between files.

These ES6 features make JavaScript more powerful and expressive, facilitating cleaner and more maintainable code.