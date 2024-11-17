Here's an overview of JavaScript syntax, including variables, data types, operators, control structures, functions, and objects:

### 1. **Variables**
   - Declaring variables using `var`, `let`, or `const`:
     ```javascript
     var x = 10;   // Function-scoped or globally-scoped
     let y = 20;   // Block-scoped
     const z = 30; // Block-scoped, value cannot be reassigned
     ```

### 2. **Data Types**
   - **Primitive Types**:
     ```javascript
     let num = 42;              // Number
     let str = "Hello";         // String
     let bool = true;           // Boolean
     let undef;                 // Undefined
     let n = null;              // Null
     let sym = Symbol('sym');   // Symbol
     let bigInt = 123n;         // BigInt
     ```
   - **Objects**:
     ```javascript
     let obj = { 
       name: "John", 
       age: 30 
     };
     ```

### 3. **Operators**
   - **Arithmetic Operators**: `+`, `-`, `*`, `/`, `%`, `**`
     ```javascript
     let sum = 5 + 3; // 8
     ```
   - **Assignment Operators**: `=`, `+=`, `-=`, `*=`, `/=`
     ```javascript
     let a = 10;
     a += 5; // a is now 15
     ```
   - **Comparison Operators**: `==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, `>=`
     ```javascript
     let isEqual = 10 == "10";   // true
     let isStrictEqual = 10 === "10"; // false
     ```

### 4. **Control Structures**
   - **Conditional Statements**:
     ```javascript
     if (condition) {
       // code to execute if condition is true
     } else if (anotherCondition) {
       // code to execute if anotherCondition is true
     } else {
       // code to execute if none of the conditions are true
     }
     ```
   - **Switch Statement**:
     ```javascript
     switch (expression) {
       case value1:
         // code to execute if expression === value1
         break;
       case value2:
         // code to execute if expression === value2
         break;
       default:
         // code to execute if no case matches
     }
     ```
   - **Loops**:
     - `for` loop:
       ```javascript
       for (let i = 0; i < 5; i++) {
         console.log(i);
       }
       ```
     - `while` loop:
       ```javascript
       let i = 0;
       while (i < 5) {
         console.log(i);
         i++;
       }
       ```
     - `do...while` loop:
       ```javascript
       let i = 0;
       do {
         console.log(i);
         i++;
       } while (i < 5);
       ```

### 5. **Functions**
   - **Function Declaration**:
     ```javascript
     function greet(name) {
       return "Hello, " + name;
     }
     ```
   - **Function Expression**:
     ```javascript
     const greet = function(name) {
       return "Hello, " + name;
     };
     ```
   - **Arrow Function (ES6)**:
     ```javascript
     const greet = (name) => {
       return "Hello, " + name;
     };
     ```

### 6. **Objects and Arrays**
   - **Objects**:
     ```javascript
     let person = {
       firstName: "John",
       lastName: "Doe",
       age: 25,
       greet: function() {
         return "Hello, " + this.firstName;
       }
     };
     console.log(person.greet());
     ```
   - **Arrays**:
     ```javascript
     let fruits = ["Apple", "Banana", "Orange"];
     console.log(fruits[0]); // "Apple"
     ```

### 7. **Event Handling**
   - **Adding an Event Listener**:
     ```javascript
     document.getElementById("myButton").addEventListener("click", function() {
       alert("Button was clicked!");
     });
     ```

### 8. **Classes (ES6)**
   - **Class Declaration**:
     ```javascript
     class Person {
       constructor(name, age) {
         this.name = name;
         this.age = age;
       }
       
       greet() {
         return `Hello, my name is ${this.name}`;
       }
     }
     
     let john = new Person("John", 30);
     console.log(john.greet());
     ```

### 9. **Modules (ES6)**
   - **Exporting a module**:
     ```javascript
     // in math.js
     export function add(a, b) {
       return a + b;
     }
     ```
   - **Importing a module**:
     ```javascript
     // in main.js
     import { add } from './math.js';
     console.log(add(2, 3)); // 5
     ```

These are the basics of JavaScript syntax, providing the foundation for writing and understanding JavaScript code.