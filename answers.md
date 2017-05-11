# JavaScript Quiz Answers

## 1. What is the simplest way to write the if expression?
`majorityVote` and `isVetoed` always exist and do not need to be checked with `typeof`.

```JavaScript
if (majorityVote && !isVetoed) {}
```

## 2. What two things will print to console?
`console.log` has no return value and the next `console.log` will print that absence of value.

```JavaScript
42
undefined
```

## 3. Sum only the even numbers.
This is an example solution just to illustrate the usage of standard language features.

Notice how the use of `.reduce` allows the use of `const` instead of a temporary variable.

```JavaScript
const sum = list
  .filter(n => n % 2 === 0)
  .reduce((sum, n) => sum + n, 0)
```
