	/*
	Factory function com o objetivo 
	de encapsular a função add e bloquear o acesso ao count
	*/
	var createFactoryCounter = function () {
		var count = 0;
			return {
			add: function () {
				return ++count;	
				}
		};
	};

	var factoryCounter = createFactoryCounter();

    console.log("Using Factory Function");
    console.log(factoryCounter.add());
    console.log(factoryCounter.add());
    console.log(factoryCounter.add());
    console.log(factoryCounter.add());

	/*
	Construct function com o objetivo 
	de encapsular a função add e bloquear o acesso ao count
	*/
	var CreateContructCounter = function () {
		var count = 0;
		this.add = function () {
			return ++count;
		};
	};

    var constructCounter = new CreateContructCounter();

    console.log("Using Construct Function")
    console.log(constructCounter.add());
    console.log(constructCounter.add());
    console.log(constructCounter.add());
    console.log(constructCounter.add()); 