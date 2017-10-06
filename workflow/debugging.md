# Debugging
Be familiar with:

- breakpoints
- watching variables
- stepping through code
- REPL

## In a Web Browser

- Open a site with JavaScript, like the [namespaces](./example-namespaces/index.html) example.
- Press `F12`, `Control + Shift + I`, or something similar.
- In the opened devtools, click on the "Debugging" tab.
- Step through code once it reaches a break point and watch variables.

## In Node.js

- Open a terminal in [*workflow/example-node*](./example-node).
- Open Chrome
- Press `F12`
- `node --inspect index.js`
- Click on the Node.js icon that appears in Chrome's devtools

A [command line debugger](https://nodejs.org/api/debugger.html) is built-in.

You can also try [node-inspector](https://github.com/node-inspector/node-inspector), but it's old.
