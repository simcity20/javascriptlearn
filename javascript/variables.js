In JavaScript, variables are used to store data values. You can declare variables using three main keywords: `var`, `let`, and `const`. Each keyword has different behaviors and scopes, which are important to understand. Here's a breakdown:

### 1. **Declaring Variables**

#### **Using `var`**
- `var` was the original way to declare variables in JavaScript.
- Variables declared with `var` are function-scoped or globally scoped, depending on where they are declared.
- `var` allows for re-declaration of the same variable within the same scope.

   ```javascript
   var x = 10;
   var x = 20; // No error, x is re-declared and updated
   console.log(x); // 20
   ```

#### **Using `let`**
- Introduced in ES6, `let` is block-scoped, meaning it is only accessible within the block where it is defined (e.g., inside a `{ }` block).
- Variables declared with `let` cannot be re-declared in the same scope but can be updated.

   ```javascript
   let y = 10;
   y = 20; // Allowed, y is updated
   // let y = 30; // Error: Identifier 'y' has already been declared
   console.log(y); // 20
   ```

#### **Using `const`**
- Also introduced in ES6, `const` is used to declare block-scoped variables, similar to `let`.
- Variables declared with `const` must be initialized at the time of declaration and cannot be reassigned.
- `const` is often used for constants or values that should not change.

   ```javascript
   const z = 10;
   // z = 20; // Error: Assignment to constant variable
   console.log(z); // 10
   ```

### 2. **Scope**
- **Global Scope**: Variables declared outside of any function or block have global scope and can be accessed from anywhere in the code.
  ```javascript
  var globalVar = "I'm global!";
  console.log(globalVar); // Accessible anywhere
  ```

- **Function Scope**: Variables declared with `var` inside a function are only accessible within that function.
  ```javascript
  function testFunction() {
    var functionVar = "I'm inside a function";
    console.log(functionVar); // Accessible only inside the function
  }
  // console.log(functionVar); // Error: functionVar is not defined
  ```

- **Block Scope**: Variables declared with `let` or `const` inside a block (e.g., `{ }`, loops, `if` statements) are only accessible within that block.
  ```javascript
  if (true) {
    let blockVar = "I'm in a block";
    console.log(blockVar); // Accessible within the block
  }
  // console.log(blockVar); // Error: blockVar is not defined
  ```

### 3. **Hoisting**
- JavaScript's default behavior of moving declarations to the top of the current scope is called **hoisting**.
- Variables declared with `var` are hoisted to the top of their scope but are initialized with `undefined`.
- Variables declared with `let` and `const` are also hoisted but are not initialized. Accessing them before declaration results in a `ReferenceError`.

  ```javascript
  console.log(a); // undefined (due to hoisting)
  var a = 10;

  // console.log(b); // ReferenceError: Cannot access 'b' before initialization
  let b = 20;
  ```

### 4. **Variable Types**
- **Primitive Types**: Values such as numbers, strings, booleans, `null`, `undefined`, `symbol`, and `bigint`.
  ```javascript
  let num = 100;      // Number
  let str = "Hello";  // String
  let bool = true;    // Boolean
  ```

- **Reference Types**: Objects, arrays, functions, etc. Reference types store the reference to the actual value.
  ```javascript
  const arr = [1, 2, 3];   // Array
  const obj = { name: "John", age: 30 }; // Object
  ```

### 5. **Best Practices**
- Use `let` for variables that will change over time.
- Use `const` for variables that should remain constant or to avoid accidental reassignment.
- Avoid using `var` unless necessary for legacy code compatibility.

Understanding these basics will help you write more efficient and error-free JavaScript code.