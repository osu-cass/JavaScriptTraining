# Modules
See *workflow/example-modules/* for this code.

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

```markup
<!-- index.html -->
<p>
	<span id="displayName"></span>
	is a
	<span id="jobTitle"></span>
</p>
```
