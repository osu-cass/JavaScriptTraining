const fn = async () => {
	console.log('javascript is');
	await new Promise(resolve => setTimeout(resolve, 1000));
	console.log('asynchronous?');
};

export default fn;
