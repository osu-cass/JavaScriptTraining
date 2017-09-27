## Abstract and Strict Comparison

JavaScript's comparison `==` operator is *not at all* like C#'s or Java's.

> Just always use `===` please.

This [example from MDN][1] shows how abstract equality casts types before comparing.

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators

```js
 1  ==  1        // true
'1' ==  1        // true
 1  == '1'       // true
 0  == false     // true
 0  == null      // false

var object1 = {'value': 'key'};
var object2 = {'value': 'key'};
object1 == object2 // false

  0   == undefined // false
null  == undefined // true
null  == false     // false, weird right?
false == undefined // false, also
```

Abstract inequality is similar.

```js
1 !=   2     // true
1 !=  '1'    // false
1 !=  "1"    // false
1 !=  true   // false
0 !=  false  // false
```

99% of the time, you probably meant to use the strict equality `===` operator.

Often it is better to avoid abstract equality comparison and prevent unintentional behavior.

```js
3 === 3   // true
3 === '3' // false
```
