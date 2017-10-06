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

setTimeout(() => {}, 60000);
