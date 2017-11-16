# Setting up the Environment
If you are working with JavaScript, it is simply nice to have Node.js and npm available to use.

- On Windows, use the [installer from the node website](https://nodejs.org/en/download/).
- On macOS, use [Homebrew](https://brew.sh/) to install node.
- On Linux, I prefer to [install from a package manager](https://nodejs.org/en/download/package-manager/).

## Installing CLI Tools
Depending on who else and where else code must run, there are many options for installing command-line interface tools for working with JavaScript.

### DevDependencies
This can sometimes be the most portable and easily setup way to use these tools.

**Make sure package.json exists before installing any dependencies to save them.**

Node comes with `npx` now, which simplifies running commands from devDependencies.

```shell
$ npm i -D babel-cli
$ npx babel src/example.js -o dist/example.js
```

You can also use the commands directly within package.json:

```json
{
  "scripts": {
    "build": "babel src/example.js -o dist/example.js"
  },
  "devDependencies": {
    "babel-cli": "latest",
    "babel-preset-env": "latest"
  }
}
```

```shell
$ npm run build
```

### Global (npm)
Many, many JavaScript tools have a package available on npm. Installing a package globally lets a developer use that tool in any terminal on that computer.

Think of it as being similar to `apt install` on Linux machines, so package.json or `npx` are unnecessary to run the command.

**Use `sudo` on Linux only.** Avoid using `sudo npm i -g anything` on macOS to keep the global modules' permissions clean.

```shell
$ sudo npm i -g typescript
$ tsc --version
```

### System (.msi)
Downloading an installer from a project's website. Typescript, for instance, requires that you install this way to work with VS Code or Visual Studio.

Tools installed as system programs can be more difficult to update, but have better integration with other programs.
