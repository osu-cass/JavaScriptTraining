# Scope

## Function Variables
JavaScript's `var` keyword creates variables with function scope.

```JavaScript
function tryScope (input) {

  if (input) {
    var output = true;
  }

  console.log(output); // true

}

tryScope('input');

console.log(typeof output); // undefined
```

Notice how `output` climbs out of the `if`'s statement block, but stays inside of `tryScope`.

## Function Closures
Here's a horribly complex way to try and print incremental numbers.

```JavaScript
var actions = [];

for (var i = 0; i < 3; i++) {
  actions.push(function () {
    console.log(i);
  })
}

actions.forEach(function (a) { a(); })
```

You might be dismayed to see this prints `3` three times. I'll break down what is happening.

- The `var i` is now a global variable because of function scoping
- Each iteration, an anonymous function is created
- That function uses `i` so a reference to `i` is included in the function's closure
- `i++` happens after each iteration, which changes `i`'s value
- Which means `i < 3` fails before the fourth iteration
- The loop iterates `i` through all 0, 1, 2, *and 3*

When the array of functions is executed, each function is referencing the same `var i`, so they all print the same value. Closures do not copy the value, they instead share the reference.

The fix is to create a new function scope with a variable containing the iterator value we want and close over that instead. Using `let i` instead of `var i` will also fix the issue.

```JavaScript
var actions = [];

function createAction (index) {
  return function () {
    console.log(index);
  }
}

for (var i = 0; i < 3; i++) {
  // because i is "being used", it behaves the way you expect
  actions.push(createAction(i));
}

actions.forEach(function (a) { a(); })
```
