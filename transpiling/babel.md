# Babel
This is the most famous of JavaScript transpilers and has incredible support from the entire JS community.

Babel is specifically good for taking new ECMAScript features and converting that code into something that will work in older browsers.

## Example Project
Inside of this repo is a [folder](./babel/) with an example project that uses Babel.

```shell
$ cd transpiling/babel
$ npm install
```

Notice the [.babelrc](babel/.babelrc) file. This the easiest way to tell Babel how you want your code converted.

```json
{
  "presets": ["env"]
}
```

Now that the project has all of it's tools installed, it can be built.

```shell
$ npx babel src/example.js -o dist/example.js
```

*[dist/example.js](babel/dist/example.js)* now exists with the more compatible (and less pretty looking) JavaScript.

This project uses babel-preset-env, which converts incoming JS into a format that will work on the last two versions of major browsers by default.

[babeljs.io](https://babeljs.io/) has a huge amount of information about how to get Babel to work with whatever project you are using.
