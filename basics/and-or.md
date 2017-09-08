## And Or, With All the Ewoks

Now that you know about truthiness, you can understand the Boolean operators.

```js
'a' && 'b'  // 'b'
 0  || 'b'  // 'b'
```

As you might have noticed, `&&` (and) and `||` (or) don't return Boolean values. They short-circuit the value that breaks or completes the logic.

```js
 0  && 'b' // 0
'a' &&  0  // 0
```

```js
 0  || 'b' // 'b'
'a' ||  0  // 'a'
```

You can also use these operators for null coalesce.

```js
var userUnit = metrics && metrics.unit; // null safety example
var realUnit = userUnit || 'meters';    // default value example
```
