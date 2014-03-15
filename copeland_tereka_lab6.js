//alert("JavaScript works!");
//SDI 1403
//Lab 6
//Working with arrays



var walkingDeadCharacters = function() {
	
	console.log("The Walking Dead is my favorite show!");
	var walkingDeadCharacters = ["Bob", "Glen", "Maggie", "Rick", "Michonne"];
	var walkingDeadWeapons = ["knife", "bat", "hammer", "gun", "sword"];
	
	for (var i = 0; i < walkingDeadCharacters.length; i++) {
		
		console.log(walkingDeadCharacters[i] + " uses the " + walkingDeadWeapons[i] + ".");
		
	
	};
	
	walkingDeadCharacters.push("Carol");
	walkingDeadWeapons.push("axe");
	console.log(walkingDeadCharacters);
	console.log(walkingDeadWeapons);
	console.log(walkingDeadCharacters[5] + " was added with the weapon " + walkingDeadWeapons[5] + ".");
	
};

walkingDeadCharacters();
