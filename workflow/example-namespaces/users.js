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
