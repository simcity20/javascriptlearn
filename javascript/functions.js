In JavaScript, functions are fundamental building blocks that allow you to group code into reusable units. High-order functions and callbacks are advanced concepts that leverage the power of functions to create more dynamic and flexible code. Let’s dive into these concepts:

### **1. JavaScript Functions**

**Defining Functions**

There are several ways to define functions in JavaScript:

- **Function Declaration:**
  
  ```javascript
  function greet(name) {
    return "Hello, " + name + "!";
  }

  console.log(greet("Alice")); // Output: "Hello, Alice!"
  ```

- **Function Expression:**

  ```javascript
  const greet = function(name) {
    return "Hello, " + name + "!";
  };

  console.log(greet("Bob")); // Output: "Hello, Bob!"
  ```

- **Arrow Function (ES6):**

  ```javascript
  const greet = (name) => "Hello, " + name + "!";

  console.log(greet("Charlie")); // Output: "Hello, Charlie!"
  ```

**Function Parameters and Arguments**

- **Default Parameters:**

  ```javascript
  function greet(name = "Guest") {
    return "Hello, " + name + "!";
  }

  console.log(greet()); // Output: "Hello, Guest!"
  ```

- **Rest Parameters (ES6):**

  ```javascript
  function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }

  console.log(sum(1, 2, 3, 4)); // Output: 10
  ```

### **2. High-Order Functions**

A high-order function is a function that either:

1. Takes one or more functions as arguments, or
2. Returns a function as its result.

**Examples:**

- **Function as an Argument:**

  ```javascript
  function applyOperation(a, b, operation) {
    return operation(a, b);
  }

  const add = (x, y) => x + y;
  const multiply = (x, y) => x * y;

  console.log(applyOperation(2, 3, add));      // Output: 5
  console.log(applyOperation(2, 3, multiply)); // Output: 6
  ```

- **Function Returning Another Function:**

  ```javascript
  function makeGreeting(greeting) {
    return function(name) {
      return greeting + ", " + name + "!";
    };
  }

  const sayHello = makeGreeting("Hello");
  console.log(sayHello("Alice")); // Output: "Hello, Alice!"
  ```

### **3. Callback Functions**

A callback function is a function passed into another function as an argument to be executed later.

**Examples:**

- **Using Callbacks in Array Methods:**

  ```javascript
  const numbers = [1, 2, 3, 4];

  // Using the callback function in the map method
  const doubled = numbers.map(function(num) {
    return num * 2;
  });

  console.log(doubled); // Output: [2, 4, 6, 8]
  ```

- **Callback in Asynchronous Operations:**

  ```javascript
  function fetchData(callback) {
    setTimeout(() => {
      const data = { user: "John Doe" };
      callback(data);
    }, 1000);
  }

  fetchData(function(data) {
    console.log(data); // Output: { user: "John Doe" }
  });
  ```

- **Callback with Error Handling:**

  ```javascript
  function processData(data, callback) {
    if (data) {
      callback(null, `Processed ${data}`);
    } else {
      callback("No data provided");
    }
  }

  processData("Sample Data", function(error, result) {
    if (error) {
      console.log("Error:", error);
    } else {
      console.log("Result:", result); // Output: "Result: Processed Sample Data"
    }
  });
  ```

### **Combining Concepts**

Here’s an example combining high-order functions and callbacks:

```javascript
function performOperation(a, b, callback) {
  return callback(a, b);
}

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;

console.log(performOperation(10, 5, add));      // Output: 15
console.log(performOperation(10, 5, subtract)); // Output: 5
```

### **Key Points:**

- **Functions**: Basic building blocks for reusable code.
- **High-Order Functions**: Functions that accept other functions as arguments or return functions.
- **Callbacks**: Functions passed as arguments to be executed later, often used in asynchronous operations.

Understanding these concepts allows you to write more flexible, reusable, and maintainable code in JavaScript.