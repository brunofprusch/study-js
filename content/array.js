	var cars = new Array();
	cars[0] = "Ka";
	cars[1] = "Corsa";
	cars[2] = "Palio";

	console.log(cars.valueOf());
	console.log("");

	cars.push("Clio"); //Include new element at the end of the array

	cars.pop(); //Remove the last elemente of the array

	cars.unshift("Uno"); //Include new element at the top of the array

	cars.shift(); //Remove the first element of the array

	cars.indexOf("Corsa"); //Return the index of the element

	//Splice is used to do meny operations

		cars.splice(1,1); //Remove the element at position 1

		cars.splice(1,1,"Sonic"); //Replace the element in the possition 1 by "Sonic"

		cars.splice(1,0,"Corsa"); //Included the new elemente in the position 1


	// Foreach
	cars.forEach(function(element) {
		console.log(element);
	});


	//Filter
	var brandsCars = [{brand: "Ford", model:"Ka"},
				   {brand: "Fiat", model: "Palio"},
				   {brand: "Chevrolet", model: "Celta"}];

	var carsFord = brandsCars.filter(function(element){
		return element.brand === "Ford";
	});

	console.log("");
	console.log("Only Ford cars");
	console.log(carsFord.valueOf());


	//Every
		//Like a filter, but return a boolean and verify if all elements comply the clause.


	//Some
		//Return boolean and vefiry is exist some element that comply the clause.


	//Map - Create other array based with the clause.
	var brands = brandsCars.map(function(element){
		return element.brand;
	});

	console.log("");
	console.log("Only brands using map");
	console.log(brands.valueOf());



	
	





