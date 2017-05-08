function jediName(firstName, lastName){
	let secondHalf = firstName.substring(0, 2);
	let firstHalf = lastName.substring(0, 3);
	return firstHalf + secondHalf;
}

jediName("Tanner", "Gill");