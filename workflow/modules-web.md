# Modules on Web
JavaScript deserves to be organized well, like any other programming language.

- See [*workflow/example-modules/*](./example-modules) for this code.
- [TodoMVC with ES modules example](https://paulirish.github.io/es-modules-todomvc/)
- [ES Module Compatibility](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#Browser_compatibility)

```markup
<!-- index.html -->
<p>
  <span id="displayName"></span>
  is a
  <span id="jobTitle"></span>
</p>
<script type="module" src="index.js"></script>
```

```js
// users.js
export function getDisplayName(user) {
  return user.name || 'unnamed';
}

export function getJobTitle(user) {
  return (user.job && user.job.title) || 'not employed';
}
```

```js
// index.js
import {getJobTitle, getDisplayName} from './users.js';

const displayNameElem = document.getElementById('displayName');
const jobTitleElem = document.getElementById('jobTitle');

const user = {
  name: 'alex',
  job: {
    title: 'software developer'
  }
};

displayNameElem.innerText = getDisplayName(user);
jobTitleElem.innerText = getJobTitle(user);
```
