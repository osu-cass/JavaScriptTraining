## im 12 and what is `this`

In order to add a level of object-oriented structure to JavaScript, this is an always-accessible keyword `this`. But, it doesn't make sense that `this` is accessible outside of a class method, right?

```javascript
// Declare a function in an object
var actions = {
  otherValue: 'other value',
  doNothing: function () {
    console.log(this.otherValue);
  }
}
// Calling the function does what you expect.
actions.doNothing(); // 'other value'
```

You should think of using the prefix `actions.` as the thing that sets `this`. Anywhere a function gets called without the named prefix will not have `this` set to what you expect.

```javascript
var extractedFunction = actions.doNothing;
// Calling the function does NOT do what you expect.
extractedFunction(); // undefined
```

You will not normally run into problems until you start using event handlers.

```javascript
button.onclick = actions.doNothing;
// later, internally, this ends up being called like:
button.onclick(); // will output that button.otherValue is undefined
```

Important! `this` is scoped to a function expression, so you may need something to help.

```javascript
var myActionFactory = {
  value: 42,
  createAction: function () {
    var _this = this;
    return function get42 () {
      // using `this` here won't work
      return _this.value;
    };
  }
};
```

`_this` is used from within the returned function `get42`, so it becomes a part of that function's closure. All variables used within a function expression get included in that function's closure. In this example, `function get42 () { return _this.value; };` is the function expression we care about. Read more about scoping in the scope section.

Do not worry is all of `this` is overwhelming, you can come back to this topic when you have a problem.
