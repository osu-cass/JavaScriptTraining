# JavaScript Quiz

## 1. What is the simplest way to write the if expression?
Assume that the author intended for 'aye' to print if there is a majorityVote and it is not isVetoed.

```JavaScript
let majorityVote = true
let isVetoed = false
// ...
if ((typeof majorityVote !== 'undefined' && majorityVote === true)
	&& (typeof isVetoed !== 'undefined' && isVetoed === false)) {
  console.log('aye')
} else {
  console.log('nay')
}
```

## 2. What two things will print to console?
```JavaScript
Promise.resolve(42)
.then((a) => console.log(a))
.then((b) => console.log(b))
```

## 3. Sum only the even numbers.
Use [`.filter`][1] and [`.reduce`][2] to solve this.

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

```JavaScript
const list = [/* mysterious array of numbers: 1, 3, 4 */]
```
