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
