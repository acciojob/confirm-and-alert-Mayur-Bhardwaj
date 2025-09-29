//your JS code here. If required.
let userResponse = confirm("Do you want to proceed?");

function confirm() {
	if(userResponse){
			alert(“You clicked OK. Proceeding...”);
	}else{
		alert("You clicked Cancel. Exiting...");
	}
}