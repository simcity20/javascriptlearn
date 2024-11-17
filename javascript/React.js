React is a popular JavaScript library for building user interfaces, especially single-page applications. It introduces several key concepts such as components, state, props, lifecycle methods, and hooks. Here’s an overview of each concept:

### **1. Components**

Components are the building blocks of a React application. They encapsulate the structure, behavior, and styling of a part of the user interface.

**Types of Components:**

- **Functional Components:** Defined as JavaScript functions. They receive `props` and return React elements.

  **Example:**

  ```javascript
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  ```

- **Class Components:** Defined as ES6 classes that extend `React.Component`. They have additional features like state and lifecycle methods.

  **Example:**

  ```javascript
  class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }
  ```

### **2. State**

State is used to manage data that changes over time and affects how the component renders and behaves. It is local to the component and can be updated using `setState` in class components or the `useState` hook in functional components.

**In Class Components:**

**Example:**

```javascript
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```

**In Functional Components:**

**Example:**

```javascript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

### **3. Props**

Props (short for properties) are used to pass data from a parent component to a child component. They are read-only and cannot be modified by the child component.

**Example:**

```javascript
function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return <Greeting name="John" />;
}
```

**Default Props and Prop Types:**

**Example with Default Props:**

```javascript
Greeting.defaultProps = {
  name: 'Guest'
};
```

**Example with Prop Types:**

```javascript
import PropTypes from 'prop-types';

Greeting.propTypes = {
  name: PropTypes.string
};
```

### **4. Lifecycle Methods**

Lifecycle methods are used in class components to perform actions at specific points in a component’s life, such as when it mounts, updates, or unmounts.

**Common Lifecycle Methods:**

- **`componentDidMount()`**: Called after the component is mounted (added to the DOM).

  ```javascript
  componentDidMount() {
    console.log('Component did mount');
  }
  ```

- **`componentDidUpdate(prevProps, prevState)`**: Called after the component updates.

  ```javascript
  componentDidUpdate(prevProps, prevState) {
    console.log('Component did update');
  }
  ```

- **`componentWillUnmount()`**: Called before the component is unmounted (removed from the DOM).

  ```javascript
  componentWillUnmount() {
    console.log('Component will unmount');
  }
  ```

### **5. Hooks**

Hooks are functions that let you use state and other React features in functional components. They were introduced in React 16.8 to enable the use of state and lifecycle features without writing class components.

**Common Hooks:**

- **`useState`**: Manages state in functional components.

  **Example:**

  ```javascript
  import { useState } from 'react';

  function Counter() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  }
  ```

- **`useEffect`**: Performs side effects (like fetching data or subscribing to events) in functional components.

  **Example:**

  ```javascript
  import { useEffect, useState } from 'react';

  function DataFetcher() {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => setData(data));
    }, []); // Empty array means it runs once after the initial render

    return <div>{data ? <p>{data.someValue}</p> : 'Loading...'}</div>;
  }
  ```

- **`useContext`**: Accesses context values in functional components.

  **Example:**

  ```javascript
  import { createContext, useContext } from 'react';

  const ThemeContext = createContext('light');

  function ThemedComponent() {
    const theme = useContext(ThemeContext);
    return <div>The current theme is {theme}</div>;
  }
  ```

- **`useReducer`**: Manages more complex state logic using a reducer function.

  **Example:**

  ```javascript
  import { useReducer } from 'react';

  const initialState = { count: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }

  function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
      <div>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      </div>
    );
  }
  ```

### **Summary**

- **Components:** Building blocks of a React app, either functional or class-based.
- **State:** Manages dynamic data within components.
- **Props:** Pass data from parent to child components.
- **Lifecycle Methods:** Methods in class components to manage component lifecycle events.
- **Hooks:** Functions to use state and other React features in functional components.

React’s component-based architecture and hooks system provide powerful tools for creating dynamic and efficient user interfaces.