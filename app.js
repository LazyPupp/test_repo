// const myTeam = "Tanner Kyle";
// console.log(myTeam);
// console.log("hi");

function yearOfBirth(age =29){
	return 2017-age;
}
function whoAmI(name="Chris", age=29){
	const yob = yearOfBirth(age);
	console.log(`Hi, my name is ${name} and I'm ${age} years old`);
	console.log("I was born in " + yob);
}
whoAmI();

