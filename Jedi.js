function jediName(firstName, lastName){
	let secondHalf = firstName.substring(0, 2);
	let firstHalf = lastName.substring(0, 3);
	return firstHalf + secondHalf;
}

jediName("Tanner", "Gill");

function beyond(num){

	if(num == Number.POSITIVE_INFINITY || num == Number.NEGATIVE_INFINITY){
		console.log("And beyond!");
	}
	else if(num > 0 && num !== Number.POSITIVE_INFINITY){
		console.log("to infinity");
	}
	else if(num < 0 && num !== Number.NEGATIVE_INFINITY){
		console.log("To negative infinity");
	}
	else if(num === 0){
		console.log("Staying home...")
	}
}
