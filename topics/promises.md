# Promises
You need to know what these are! They will save you from "callback hell". In a previous life, you might have written the following asynchronous code.

```JavaScript
setTimeout(function oneSecondLater () {
  console.log(1);
  setTimeout(function twoSecondsLater () {
    setTimeout(function threeSecondsLater () {
      console.log(3);
      setTimeout(function fourSecondsLater () {
        console.log('4: do you see the problem?')
      }, 1000);
    }, 1000);
    console.log(2);
  }, 1000);
}, 1000);
```

Promises are abstract structures that help deal with asynchronous code.

```JavaScript
// Usually, your promise library provides a function like this.
function delay (millis) {
  // Promise is a global available in modern JS
  // All promises are constructed with an immediate executed function
  // It should call resolve() with the value to pass down the chain
  // It should call reject() with an Error if something went wrong
  return new Promise((resolve, reject) => {
    setTimeout(resolve, millis)
  })
}

// This is an easy way to start a promise chain.
Promise.resolve()
.then(function () {
  // return promises in then() to make the chain wait for it
  return delay(1000)
})
.then(() => 1) // promises pass their "return" values on
.then((n) => console.log(n))
.then(() => delay(1000))
.then(() => console.log(2))
.then(() => delay(1000))
.then(() => console.log(3))
.then(() => delay(1000))
.then(() => console.log('4: much better'))
.catch((err) => console.error(err))
```

Promises are perfect for things like XHR (Ajax).

```JavaScript
// assume got is a global request tool
got('http://ip.jsontest.com', { json: true })
.then((response) => console.log(`ip: ${response.body.ip}`))
```
