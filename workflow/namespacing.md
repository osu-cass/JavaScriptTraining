# Namespaces
Namespaces rely on sharing a global context. A variable created in one file is available in the next loaded script.

See [*workflow/example-namespaces/*](./example-namespaces) for this code.

*Warning: nothing will protect you from accidentally overriding existing namespaces.*

*My opinion: namespaces should be a last resort to organizing code.*

```markup
<!-- index.html -->
<p>
  <span id="displayName"></span>
  is a
  <span id="jobTitle"></span>
</p>
<script src="users.js"></script>
<script src="index.js"></script>
```

```js
// users.js
(() => {
  function getDisplayName(user) {
    return user.name || 'unnamed';
  }

  function getJobTitle(user) {
    return (user.job && user.job.title) || 'not employed';
  }

  window.Example = window.Example || {};
  window.Example.Users = {getDisplayName, getJobTitle};
})();

```

```js
// index.js
(() => {
  const {getJobTitle, getDisplayName} = window.Example.Users;

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
})();

```
