console.log("hello");

/**** VARIABLES - linking to the DOM ****************/
var height = document.getElementById("height-input");
var type = document.getElementById("key-input");
var button = document.getElementById("button");


/***STEP 1 - identify what happens first. Q; where is the action coming from? A: the user clicking a button OR keyup on the Enter key**************************/

button.addEventListener("click", function() { //event listener added to the variable button, with an anonymous function on the second parameter
	console.log("I hit the button"); //sends a response to the console showing the botton was clicked
	validateFields(); //calls the function "validateFields" to run
})

height.addEventListener("keyup", function(event) { //listens for an event in the respective input field
	// console.log(event);
	var key = event.which || event.keyCode;
	if (key === 13) {
		console.log("I pressed enter");
		validateFields(); //calls the function "validateFields" to run
	}
})

type.addEventListener("keyup", function(event) {  //listens for an event in the respective input field
	// console.log(event);
	var key = event.which || event.keyCode;
	if (key === 13) {
		console.log("I pressed enter");
		validateFields();  //calls the function "validateFields" to run
	}
})

/****STEP 2 VALIDATE - Create a gate, checking to see if all the required information is there *******/
function validateFields() {   //creating the function "validateFields" to do such a thing when called
	if (!height.value || !type.value) {  //looks for whether or not there is a value in these fields
		alert("Both fields must have a value");
		return false; //this acts as the gate. If both fields do not have a value, nothing else occurs
	} else {  //if there are values in both of the fields, the program will continue to run...
		getInformation() //calls to the function "getInformation" (runs the function)
	}
}

/*STEP 3 - GET INFO FROM THE DOM - when the button is clicked, a function will then run. This function BUILDS AN OBJECT (i.e. tree)*/
function getInformation() {
	// console.log("get information running");
	// console.log(height.value); //this was to show in the console the user's value coming through
	// console.log(type.value); //this was to show in the console the user's value coming through
	var tree = {     //the object "tree" was created with two values, the variables
		height:height.value,
		type:type.value
	}
	buildTree(tree) /*THis functions as a "sleigh" taking materials (step2) to the factory (step3). This is how the object's (tree's) values can pass into a function**/
}

/*STEP 4 BUILD THE TREE******/
function buildTree(tree) { //this fuction builds the tree; it uses the values passed by 'tree'
	var space = " ";  //variable created for the string " " to be used in the tree build
	for (i = 0; i < tree.height; i++) {   //A for loop; it will calculate the number of spaces/chars
		var numberOfSpaces = tree.height-(i+1);
		var numberOfCharacters = i+(i+1);
		console.log(space.repeat(numberOfSpaces) + tree.type.repeat(numberOfCharacters));
	}
	console.log(tree);
}




