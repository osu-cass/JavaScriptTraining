// CommonJS provides require, module, exports

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
