JavaScript has several data types that can be categorized into two main groups: **primitive types** and **object types**. Here's a detailed overview of each:

### **1. Primitive Data Types**
Primitive types are immutable and represent a single value.

1. **Number**
   - Represents both integer and floating-point numbers.
   - Example:
     ```javascript
     let age = 25;          // Integer
     let temperature = 98.6; // Floating-point
     ```
   - Special numeric values include:
     - `Infinity`
     - `-Infinity`
     - `NaN` (Not a Number)

2. **String**
   - Represents a sequence of characters.
   - Strings are immutable.
   - Example:
     ```javascript
     let name = "John Doe";
     let greeting = 'Hello, world!';
     let combined = `Hello, ${name}!`; // Template literals (ES6)
     ```

3. **Boolean**
   - Represents a logical entity and can have two values: `true` or `false`.
   - Example:
     ```javascript
     let isStudent = true;
     let hasGraduated = false;
     ```

4. **Undefined**
   - A variable that has been declared but not assigned a value has the value `undefined`.
   - Example:
     ```javascript
     let a;
     console.log(a); // undefined
     ```

5. **Null**
   - Represents the intentional absence of any object value. It is often used to indicate that a variable should be empty.
   - Example:
     ```javascript
     let emptyValue = null;
     ```

6. **Symbol (ES6)**
   - A unique and immutable primitive value used as an identifier for object properties.
   - Example:
     ```javascript
     let sym1 = Symbol();
     let sym2 = Symbol('description');
     ```

7. **BigInt (ES11)**
   - Represents integers with arbitrary precision. Used when you need to work with large integers beyond the safe integer limit for `Number`.
   - Example:
     ```javascript
     let bigInt = 1234567890123456789012345678901234567890n;
     ```

### **2. Object Types**
Objects are collections of properties and are mutable.

1. **Object**
   - A collection of key-value pairs.
   - Example:
     ```javascript
     let person = {
       firstName: "John",
       lastName: "Doe",
       age: 30
     };
     ```

2. **Array**
   - An ordered collection of values (elements) that can be of any type.
   - Example:
     ```javascript
     let fruits = ["Apple", "Banana", "Orange"];
     ```

3. **Function**
   - Functions are objects that can be called or invoked.
   - Example:
     ```javascript
     function greet() {
       return "Hello, world!";
     }
     ```

4. **Date**
   - Represents a single moment in time.
   - Example:
     ```javascript
     let now = new Date();
     ```

5. **RegExp**
   - Represents a regular expression, a pattern used for matching character combinations in strings.
   - Example:
     ```javascript
     let pattern = /hello/i;
     ```

6. **Map and Set (ES6)**
   - `Map` is an object that holds key-value pairs where keys can be of any type.
     ```javascript
     let map = new Map();
     map.set('key1', 'value1');
     ```
   - `Set` is a collection of unique values.
     ```javascript
     let set = new Set([1, 2, 3, 4, 4]); // {1, 2, 3, 4}
     ```

7. **WeakMap and WeakSet (ES6)**
   - Similar to `Map` and `Set` but hold "weak" references to objects, meaning that the objects can be garbage-collected if there are no other references to them.

8. **JSON (JavaScript Object Notation)**
   - A lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate.
   - Example:
     ```javascript
     let jsonData = JSON.stringify({ name: "John", age: 30 });
     let obj = JSON.parse(jsonData);
     ```

### **3. Special Data Types**
   - **typeof operator**: Returns the data type of a variable or expression.
     ```javascript
     typeof 42;          // "number"
     typeof "hello";     // "string"
     typeof true;        // "boolean"
     typeof undefined;   // "undefined"
     typeof null;        // "object" (this is a quirk of JavaScript)
     typeof {};          // "object"
     typeof Symbol();    // "symbol"
     typeof function(){} // "function"
     typeof BigInt(10);  // "bigint"
     ```

These data types form the foundation of JavaScript and are essential for managing and manipulating data within the language.