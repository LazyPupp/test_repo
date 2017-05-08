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

function daysOfTheMonth(month){

	let days;

	switch(month){
		case 'january':
			days = "january has 31 days";
			break;
		case 'february':
			days = "february has 28 days";
			break;
		case 'march':
			days = "march has 31 days";
			break;
		case 'april':
			days = "april has 30 days";
			break;
		case 'may':
			days = "may has 31 days";
			break;
		case 'june':
			days = "june has 30 days";
			break;
		case 'july':
			days = "july has 31 days";
			break;
		case 'august':
			days = "august has 31 days";
			break;
		case 'september':
			days = "september has 30 days";
			break;
		case 'october':
			days = "october has 31 days";
			break;
		case 'november':
			days = "november has 30 days";
			break;
		case 'december':
			days = " december has 31 days";

	}	
	return days;
}

function RockPaperScissors(userChoice){
    var computer = 1 + Math.floor((Math.random()*3));

    let rock = 1;
    let paper = 2;
    let scissors = 3;
    
    console.log(userChoice, computer);

  	if(userChoice === computer){
  		return "Yall tied";
  	}
  	else if(userChoice === rock){
  		return (computer === paper) ? "you've lost" : "you've won";
  	// 	if(computer === paper){
  	// 		return "you've lost";
  	// 	}
  	// 	else{
  	// 		return "you've won";
  	// }
  	}
  	else if(userChoice === paper) {
  		return(computer === scissors) ? "You've lost" : "You've won";
  	// 	if(computer === scissors){
  	// 	return "You've lost";
  	// }
  	// 	else{
  	// 		return "You've won";
  	// 	}
 
  	}
  	else if(userChoice === scissors){
  		return(computer === rock) ? "You've lost" : "You've won";
  	// 	if(computer === rock){
  	// 		return "you've lost";
  	// 	}
  	// 	else {
  	// 		return "you've won";
  	// 	}
  	// }
}