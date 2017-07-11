	var man = {
		sex: "male"
	};


	//Heritage example using __proto__
		var kent = {
			name: "Kent",
			age: 20,
			__proto__: man
		};

		console.log("Heritage example using __proto__");
		console.log(kent);
		console.log(kent.sex);

	
	//Heritage example using Object.setPrototypeOf();
		var rob = {
			name: "Rob",
			age: 20
		};

		Object.setPrototypeOf(rob, man);

		console.log("Heritage example using Object.setPrototypeOf()");
		console.log(rob);
		console.log(rob.sex);


	//Heritage example using Object.create()
		var muffin = Object.create(man);
		muffin.name = "Muffin";
		muffin.age = 20;

		console.log("Heritage example using Object.create()");
		console.log(muffin);
		console.log(muffin.sex);





