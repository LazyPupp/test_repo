// const myTeam = "Tanner Kyle";
// console.log(myTeam);
// console.log("hi");

function yearOfBirth(age){	
	try{
		if(age<0){
			throw new Error("Age can not be negative");
		}
	}catch(e){
		console.error(e);

	}
	return 2017-age;

}
function whoAmI(name, age){
	if(name === undefined || age === undefined){
		console.error("Arguments not valid");
	}
	if(typeof(name) !== String || typeof(age) === NaN){
		console.error("arguments do not have same type");
	}
	const yob = yearOfBirth(age);
	console.log(`Hi, my name is ${name} and I'm ${age} years old`);
	console.log("I was born in " + yob);
}
let a = {
	age:20,
	name:"Chris"
};
whoAmI("chris",a);
console.log(typeof(a));

