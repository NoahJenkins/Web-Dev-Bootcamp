### 1. **Currying**
Currying is the process of transforming a function that takes multiple arguments into a series of functions, each taking a single argument. It breaks down a multi-parameter function into a chain of single-parameter functions.

#### Example:
```javascript
// Uncurried function
function add(a, b) {
  return a + b;
}

// Curried version
function curriedAdd(a) {
  return function(b) {
    return a + b;
  };
}

// Usage
const add5 = curriedAdd(5); // Returns a function that adds 5
console.log(add5(3)); // Output: 8
console.log(curriedAdd(5)(3)); // Output: 8
```

Currying is useful for creating reusable, specialized functions.

#### Use Case:
Currying is often used in functional programming and with libraries like Lodash or Ramda for creating higher-order functions and partially applying arguments.

---

### 2. **Compose**
Function composition is combining multiple functions into a single function, where the output of one function becomes the input of the next. It helps create clean, declarative pipelines for processing data.

#### Example:
```javascript
// Basic functions
const double = x => x * 2;
const increment = x => x + 1;

// Compose function
const compose = (f, g) => x => f(g(x));

// Using compose
const doubleThenIncrement = compose(increment, double);
console.log(doubleThenIncrement(3)); // Output: 7 (double(3) = 6, then increment(6) = 7)
```

#### Libraries:
Libraries like `Ramda` and `Redux` often include `compose` for managing transformations in a declarative way.

#### Key Points:
- Order matters: In the above example, `g` is applied before `f`.
- Encourages immutability and clean function pipelines.

---

### 3. **Closure**
A closure is a function that "remembers" its lexical scope, even when the function is executed outside of that scope. In other words, closures allow functions to retain access to variables from their defining scope.

#### Example:
```javascript
function makeCounter() {
  let count = 0; // `count` is in the lexical scope of `increment`

  return function increment() {
    count++;
    return count;
  };
}

const counter = makeCounter(); // `counter` is a closure
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3
```

Here, the `increment` function forms a closure over the `count` variable, keeping it accessible even after `makeCounter` has executed.

#### Use Case:
Closures are widely used for:
- Encapsulation (e.g., private variables in JavaScript).
- Callbacks and event listeners.
- Maintaining state in asynchronous functions.

---

### Summary Table

| Concept       | Purpose                                     | Example                                  |
|---------------|---------------------------------------------|------------------------------------------|
| **Currying**  | Breaks a function into smaller, single-arg functions | `curriedAdd(5)(3)` |
| **Compose**   | Chains functions where the output of one is input to the next | `compose(f, g)(x)` |
| **Closure**   | Retains access to the lexical scope of a function | `counter()` retains access to `count` |
