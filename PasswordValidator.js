const passwordValidator = () => {
	const enterPassword = prompt("Enter Password");
	const confirmPassword = prompt("Enter Confirm Password");

	if (enterPassword == confirmPassword) {
		console.log("Password Matched Successfully.");
	} else {
		console.log("Password didn't match. Password validation unsuccessful.");
	}
};
