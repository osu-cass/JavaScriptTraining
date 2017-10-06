# Modules on Node.js

- See [*workflow/example-node/*](./example-node/) for this code.

```js
// index.js
const {getDisplayName, getJobTitle} = require('./users.js');

setTimeout(() => {
	// Pretend this data came from some request
	const user = {
		name: 'alex',
		job: {
			title: 'software developer'
		}
	};

	const message = `${getDisplayName(user)} is a ${getJobTitle(user)}`;

	console.log(message);
}, 5000);

setTimeout(() => {}, 60000); // to keep process running
```

```js
// users.js
function getDisplayName(user) {
	return user.name || 'unnamed';
}

function getJobTitle(user) {
	return (user.job && user.job.title) || 'not employed';
}

module.exports = {
	getDisplayName,
	getJobTitle
};

```
