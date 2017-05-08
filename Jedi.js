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



function decode(word){
  let letter;
  
	switch(word.substring(0, 1)){
		case 'a': 
			letter = word.substring(1, 2);
			break;
		case 'b':
			letter = word.substring(2, 3);
			break;
		case 'c':
			letter = word.substring(3, 4);
			break;
		case 'd':
			letter = word.substring(4, 5);
			break;
		default:
			letter = ' ';
	}
  return letter;
}