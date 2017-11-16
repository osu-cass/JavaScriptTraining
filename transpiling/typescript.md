# TypeScript
TypeScript does two things:

- It adds a C#-like type system with interfaces, classes, et cetera.
- It converts new JS features into code compatable with older browsers.

TypeScript has a lot of support in the React community, and is a great tool if your JavaScript must run in Internet Explorer.

## Example Project
Inside of this repo is a [folder](./typescript/) with an example project that uses TypeScript.

```shell
$ cd transpiling/typescript
$ npm install
```

Notice the *[tsconfig.json](typescript/tsconfig.json)* file. This the easiest way to tell TypeScript how you want your code converted.

```json
{
  "compileOnSave": true,
  "compilerOptions": {
    "outDir": "./dist",
    "target": "ES3",
    "module": "CommonJS"
  }
}
```

The target is what version of JavaScript the code must work with. Building will create the output files.

```shell
$ npx tsc
```

`tsc` looks for a *tsconfig.json* file to use automatically.

[TypeScript's website](https://www.typescriptlang.org/) has is great reference for the new language features and how to integrate with text editors and IDEs.
