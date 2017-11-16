# Check Yourself Here, Not There
> Use linters. Switch language if necessary.

If you find that your JavaScript codebase has grown too large to know what heck is going on, the need for compile-time safety is also probably large. There are development tools to help here.

### TypeScript
[TypeScript](https://www.typescriptlang.org/) is an extension of the ECMAScript spec that adds Microsoft's type checking and IntelliSense (autocomplete while coding). A developer writes `.ts` files that get compiled one for one with `.js` files, and they can even specify which version of ECMAScript the compiled files should work in for Internet Explorer support. There is great support for TypeScript for the most recent versions of [Visual Studio CE or Enterprise](https://www.typescriptlang.org/#download-links), the [Visual Studio Code](https://code.visualstudio.com/) text editor, or even an [Atom](https://atom.io/) package.

*TypeScript does not combine files into a single file (bundling), and dealing with all of the type definitions for the libraries a developer might use can be tricky/outright not exist.*

See also the CASS SDG tutorials on Advanced JS and TypeScript+React.

```TypeScript
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
```

### Flow
[Flow](https://flow.org/) is a static type checker for JavaScript that uses a syntax that is relatively non-invasive (and somewhat similar to TypeScript).

*Flow will require a build process/bundler to be added to your project, which is bulk above and beyond the ease of use that vanilla JS has.*

```js
// @flow
function square(n: number): number {
  return n * n;
}
```

### Elm
[Elm](http://elm-lang.org/) is a completely separate language that boasts zero runtime exceptions and competitive web interface performance. It uses type inference to detect problems before they occur and also compiles into JavaScript that can be used like normal.

*Elm is for web app development exclusively, and the language is so different from JavaScript that it gave me culture shock.*

```Elm
import Html exposing (text)

main =
  text "Hello, World!"
```

### ESLint
[ESLint](http://eslint.org/) is a linter (instead of a transpiler for a different language). Linters are tools that check your code for syntax errors, variable name typos, naming conventions, deprecated language features, etc. ESLint can be used easily from [within Atom](https://atom.io/packages/linter-eslint) and other text editors, or from the command line. See the [*.eslintrc*](.eslintrc) file in this repository for an example configuration that uses Standard styling (it will involve installing [npm](https://www.npmjs.com/) packages in your project).

*ESLint does not check types, function signatures, or even whether or not properties exist on objects, but it is a great first resort for happier JavaScript development.*
