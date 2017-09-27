# Template Strings
Use these instead of string concatenation.

```js
const legalName = `${givenName} ${familyName}`
```

Anything inside the curly brackets will be evaluated and cast to string.

```js
const list = [1, 2, 3, 4]
const text = `has ${list}`
```
