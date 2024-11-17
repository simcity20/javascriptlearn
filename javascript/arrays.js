In JavaScript, `map`, `filter`, and `reduce` are powerful array methods that help in transforming, filtering, and accumulating data in arrays. These methods are all functional programming tools that work with callbacks to perform various operations on arrays.

### **1. `map` Method**

The `map` method creates a new array populated with the results of calling a provided function on every element in the calling array. It does not modify the original array.

**Syntax:**

```javascript
let newArray = array.map(function(element, index, array) {
  // Return the new value for each element
});
```

**Example:**

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);

console.log(doubled); // Output: [2, 4, 6, 8, 10]
```

In this example, `map` applies the function `num => num * 2` to each element of the `numbers` array, resulting in a new array where each number is doubled.

### **2. `filter` Method**

The `filter` method creates a new array with all elements that pass the test implemented by the provided function. It also does not modify the original array.

**Syntax:**

```javascript
let newArray = array.filter(function(element, index, array) {
  // Return true to keep the element, false otherwise
});
```

**Example:**

```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4]
```

Here, `filter` uses the function `num => num % 2 === 0` to test each element, returning only the even numbers.

### **3. `reduce` Method**

The `reduce` method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. It is useful for accumulating values or performing operations that reduce the array to a single result.

**Syntax:**

```javascript
let result = array.reduce(function(accumulator, element, index, array) {
  // Update and return the accumulator
}, initialValue);
```

**Example:**

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, num) => accumulator + num, 0);

console.log(sum); // Output: 15
```

In this example, `reduce` calculates the sum of all elements in the `numbers` array. The `accumulator` starts with the value `0` and accumulates the sum as it iterates over each element.

### **Combining `map`, `filter`, and `reduce`**

You can chain these methods to perform complex transformations and operations on arrays.

**Example:**

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers
  .filter(num => num % 2 === 0) // Get even numbers
  .map(num => num * 2)           // Double each number
  .reduce((acc, num) => acc + num, 0); // Sum all numbers

console.log(result); // Output: 60
```

In this example:
1. `filter` is used to get only even numbers.
2. `map` is then used to double each of these even numbers.
3. `reduce` is used to sum all the doubled numbers.

### **Summary**

- **`map`**: Transforms each element of an array and creates a new array with the results.
- **`filter`**: Creates a new array with elements that pass a given test.
- **`reduce`**: Reduces an array to a single value by applying a function to each element, with an optional initial value.

These methods are integral to functional programming in JavaScript and are widely used for data manipulation and transformation.