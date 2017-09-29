export function getDisplayName(user) {
	return user.name || 'unnamed';
}

export function getJobTitle(user) {
	return (user.job && user.job.title) || 'not employed';
}
