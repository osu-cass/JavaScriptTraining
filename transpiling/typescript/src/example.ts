interface User {
	/** UUID v4 */
	id: String

	/** Primary email address */
	email: String

	/** Bcrypt hash of the user's secret */
	secret: String

	/** Whether or not user wants to be hidden */
	private: Boolean
}


function sendAccountNotification(user: User) {
	const doNothing = (email: String) => false
	doNothing(user.email);
}
