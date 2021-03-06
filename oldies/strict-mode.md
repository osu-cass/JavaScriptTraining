## 'use strict';

Put this at the top of your script files *when you* **are not** *using any build tools* and reap benefits.

There are actually [a lot of things][1] that this declaration does, but here are some.

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

Many modern JS environments have this enabled by default, or similar rules in place.

### Setting undeclared variables becomes an error
```js
'use strict';
value = 42; // throws ReferenceError
```

### Setting parameters becomes an error
```js
'use strict';
function fn (a) {
  a = 42; // throws
}
```

### Duplicate object keys becomes an error
```js
'use strict';
var o = { p: 1, p: 2 }; // !!! syntax error
```

### Setting properties on primitives becomes an error
You can use `'use strict'` within function scope.
```js
(function() {
  'use strict';
  false.true = '';         // TypeError
  (14).sailing = 'home';   // TypeError
  'with'.you = 'far away'; // TypeError
})();
```

### Deleting plain names becomes error
```js
'use strict';
var x;
delete x; // !!! syntax error
eval('var y; delete y;'); // !!! syntax error
```
