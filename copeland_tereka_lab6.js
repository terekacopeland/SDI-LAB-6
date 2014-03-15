//alert("JavaScript works!");
//SDI 1403
//Lab 6
//Working with arrays



var walkingDeadCharacters = function() {
	
	var walkingDeadCharacters = ["Bob", "Glen", "Maggie", "Rick", "Michonne"];
	var walkingDeadWeapons = ["knife", "bat", "hammer", "gun", "sword"];
	console.log(walkingDeadCharacters);
	console.log(walkingDeadWeapons);
	
	for (var i = 0; i < walkingDeadCharacters.length; i++) {
		
		console.log(walkingDeadCharacters[i] + " uses the " + walkingDeadWeapons[i] + ".");
		
	
	};
	
	walkingDeadCharacters.push("Carol");
	walkingDeadWeapons.push("axe");
	console.log(walkingDeadCharacters);
	console.log(walkingDeadWeapons);
	
	
};

walkingDeadCharacters();
