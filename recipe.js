// 	// can this be done better?
// function makePlural (quantity, unit) {
// 	const unitFinder = {"sneetje": "sneetjes", "plak": "plakken", "eetlepel": "eetlepels", "theelepel": "theelepels", "pak": "pakken", "blokje": "blokjes", "teentje": "teentjes", "stuk": "stuks"};
// 	if (quantity > 1){
// 		if (unitFinder[unit] != undefined){
// 			return unitFinder[unit];
// 		} else return unit;
// 	} else return unit;
// };

// // unnecessary since OPTIONAL in sparql right?
// function checkQuantity (quantity) {
// 	if ((quantity == 0) || (quantity == "0")){
// 		return "";
// 	} else {
// 		return quantity;
// 	};
// };

// const makeGrlcRequest = async (requestUrl) => {
// 	const response = await fetch(requestUrl, {
// 		method: 'GET',
// 		headers: {
// 			'accept': 'application/json'
// 		}
// 	});
// 	const resp1 = await response.text(); //extract JSON from the http response
// 	// console.log(resp1);
// 	responseJSON = JSON.parse(resp1);
// 	return responseJSON;
// };

// const getDishImage = async (dishName) => {
// 	requestUrl = 'http://grlc.io/api/RoderickvanderWeerdt/recipe-queries/get_img_loc?gerechtnaam='+ dishName +'&endpoint=https%3A%2F%2Fapi.krr.triply.cc%2Fdatasets%2Froderick%2Frecepten%2Fservices%2Frecepten%2Fsparql';
// 	imgLoc = await makeGrlcRequest(requestUrl);
// 	// console.log(imgLoc);
// 	imgLoc = imgLoc.results.bindings[0].img_location.value;
// 	// console.log(imgLoc);
// 	if (imgLoc == undefined) {
// 		return "img/leaf.gif";
// 	}
// 	return imgLoc;
// };

// function formatIngredients (item, index) {
// 	// document.getElementById('ingredients').innerHTML += checkQuantity(item.quantity.value) + ' ' + makePlural(item.quantity.value, item.unit.value) + " " + item.ingredient.value + '<br />';
// 	document.getElementById('ingredients').innerHTML += '<p onclick="dishesToSidebar(\''+item.ingredient.value+'\')">' + checkQuantity(item.quantity.value) + ' ' + makePlural(item.quantity.value, item.unit.value) + ' ' + item.ingredient.value + '</p>';
// 	// document.getElementById('sidebarRight').innerHTML += '<a href="#keuken">' + item.ingredient.value + '</a>';
// };

// function formatInstructions(instructions) {
// 	document.getElementById('dishInstructions').innerHTML = "<b>Instructies:</b><br />";
// 	var instruction_counter = 1;
// 	instructions.split(/;/g).forEach(element => {
// 		if (element.length > 1){
// 			document.getElementById('dishInstructions').innerHTML += (instruction_counter++) + '. ' + element +'<br /><br />';
// 		};
// 	});
// };

// //called from recept_page.html
// const getRecipe = async (dishName) => {
// 	dishName = dishName.toLowerCase();
// 	requestUrl = 'http://grlc.io/api/RoderickvanderWeerdt/recipe-queries/get_recipe_information?dishName=' + encodeURIComponent(dishName) + '&endpoint=https%3A%2F%2Fapi.krr.triply.cc%2Fdatasets%2Froderick%2Frecepten%2Fservices%2Frecepten%2Fsparql';
// 	// requestUrl = 'http://grlc.io/api/RoderickvanderWeerdt/recipe-queries/get_ingredients?dishName=' + encodeURIComponent(dishName) + '&endpoint=https%3A%2F%2Fapi.krr.triply.cc%2Fdatasets%2Froderick%2Frecepten%2Fservices%2Frecepten%2Fsparql';
// 	document.getElementById('dishName').innerHTML = dishName;
// 	myJSON = await makeGrlcRequest(requestUrl); //request ingredients
// 	const imgLoc = myJSON.results.bindings[0].img_location.value;
// 	var dishIntroduction = '';
// 	if (myJSON.results.bindings[0].introduction == undefined) {
// 		dishIntroduction = '';
// 	} else {
// 		dishIntroduction = myJSON.results.bindings[0].introduction.value;
// 	}
// 	document.getElementById('dishIntro').innerHTML = "<i>"+dishIntroduction+"</i>";
// 	// document.getElementById('dishInstructions').innerHTML = "<b>Instructies:</b><br />"+dishInstructions.replace(/;/g, '<br /><br />');
// 	formatInstructions(myJSON.results.bindings[0].instructions.value);
// 	myJSON.results.bindings.forEach(formatIngredients);
// 	const dishDuration = myJSON.results.bindings[0].duration.value;
// 	document.getElementById('dishInstructions').innerHTML += '<b>Bereidingsduur: </b>' + dishDuration + ' minuten.';
// 	document.getElementById('dishImg').innerHTML = '<div class="dishImg"><img src="' + imgLoc + '" alt="illustration image"></div>'
// };

//called from index.html
function getAllDishes (listOfDishes) {
	var table = document.getElementById("dishesTable");
	var rowCounter = 0;
	var cellCounter = 0;
	var textRow = table.insertRow(rowCounter++);
	var pictRow = table.insertRow(rowCounter++);
	listOfDishes.forEach(element => {
		// console.log('retrieved dish: ' + element[0]);
		const dishName = element[0];
		// const dishImgLoc = element.img_location.value;
		const dishImgLoc = element[1];
		const dishURI = element[2];
		var textCell = textRow.insertCell(cellCounter);
		var pictCell = pictRow.insertCell(cellCounter);
		textCell.innerHTML = '<div class="tableContents"><a href=\"recept_'+ dishURI + '.html\">' + dishName + '</a></div>';
		pictCell.innerHTML = '<div class="thumbImg"><a href=\"recept_'+ dishURI + '.html\"><img src="'+dishImgLoc+'" alt="'+dishName+'"></a></div>';
		if (cellCounter == 2) {
			textRow = table.insertRow(rowCounter++);
			pictRow = table.insertRow(rowCounter++);
			cellCounter = 0;
		}else{
			cellCounter++;
		};
	});
	document.getElementById("dishCounter").textContent = listOfDishes.length;
};

// const getAllSidebar = async () => {
// 	document.getElementById('sidebarCategories').innerHTML += 'Kies een keuken:<br />'
// 	await getAllKitchens();
// 	document.getElementById('sidebarCategories').innerHTML += '<br />Kies een dieet:<br />'
// 	await getAllDiets();
// }

// //called from index.html
// const getAllKitchens = async () => {
// 	requestUrl = 'http://grlc.io/api/RoderickvanderWeerdt/recipe-queries/get_all_kitchens?endpoint=https%3A%2F%2Fapi.krr.triply.cc%2Fdatasets%2Froderick%2Frecepten%2Fservices%2Frecepten%2Fsparql';
// 	responseJSON = await makeGrlcRequest(requestUrl);
// 	responseJSON.results.bindings.forEach(element => {
// 		console.log('retrieved kitchen: ' + element.kitchen.value);
// 		kitchen_split = element.kitchen.value.split('/');
// 		if(kitchen_split[kitchen_split.length-1] != 'ldp#Container'){
// 			document.getElementById('sidebarCategories').innerHTML += '<a href=\"overview.html?'+ element.kitchen.value + '\">' + kitchen_split[kitchen_split.length-1].replace('_', ' ') + '</a>'
// 		}
// 		// document.getElementById('sidebar').innerHTML += '<a href="#keuken">' + kitchen_split[kitchen_split.length-1] + '</a>'
// 	});
// };

// //called from index.html
// const getAllDiets = async () => {
// 	requestUrl = 'http://grlc.io/api/RoderickvanderWeerdt/recipe-queries/get_all_diets?endpoint=https%3A%2F%2Fapi.krr.triply.cc%2Fdatasets%2Froderick%2Frecepten%2Fservices%2Frecepten%2Fsparql';
// 	responseJSON = await makeGrlcRequest(requestUrl);
// 	responseJSON.results.bindings.forEach(element => {
// 		console.log('retrieved diets: ' + element.diet.value);
// 		diet_split = element.diet.value.split('/');
// 		if(diet_split[diet_split.length-1] != 'ldp#Container'){
// 			document.getElementById('sidebarCategories').innerHTML += '<a href=\"overview.html?'+ element.diet.value + '\">' + diet_split[diet_split.length-1] + '</a>'
// 		}
// 		// document.getElementById('sidebar').innerHTML += '<a href="#keuken">' + kitchen_split[kitchen_split.length-1] + '</a>'
// 	});
// };

// const dishesToSidebar = async (ingredient) => {
// 	console.log('ingredient: ' + ingredient);
// 	requestUrl = 'http://grlc.io/api/RoderickvanderWeerdt/recipe-queries/get_dish_from_ingredients?ingredient=' + encodeURIComponent(ingredient) + '&endpoint=https%3A%2F%2Fapi.krr.triply.cc%2Fdatasets%2Froderick%2Frecepten%2Fservices%2Frecepten%2Fsparql';
// 	myJSON = await makeGrlcRequest(requestUrl); //request ingredients
	
// 	document.getElementById('sidebarRight').innerHTML = '<div class="sidebarText">Andere recepten met ' + ingredient + ':</div>';
	
// 	myJSON.results.bindings.forEach(element => {
// 		const dishName = element.dishName.value;
// 		// const dishImgLoc = element.img_location.value;
// 		const dishImgLoc = getThumbnailImg(element.img_location.value);
// 		console.log(dishName);
// 		document.getElementById('sidebarRight').innerHTML += '<a href=\"recept_page.html?'+ dishName + '\">' + dishName + '</a>';
// 		document.getElementById('sidebarRight').innerHTML += '<div class="thumbImg"><a href=\"recept_page.html?'+ dishName + '\"><img src="'+dishImgLoc+'" alt="'+dishName+'"></a></div>';
// 	});

// 	// document.getElementById('sidebarRight').innerHTML += '<a href=\"recept_page.html?'+ dishName + '\">' + dishName + '</a>';
// 	// document.getElementById('sidebarRight').innerHTML += '<div class="thumbImg"><a href=\"recept_page.html?'+ dishName + '\"><img src="'+dishImgLoc+'" alt="'+dishName+'"></a></div>';
// 	// document.getElementById('sidebarRight').innerHTML += '<a href=\"recept_page.html?'+ dishName + '\">' + dishName + '</a>';
// 	// document.getElementById('sidebarRight').innerHTML += '<div class="thumbImg"><a href=\"recept_page.html?'+ dishName + '\"><img src="'+dishImgLoc+'" alt="'+dishName+'"></a></div>';

// };

// const getDishesFromKitchen = async (kitchen) => {
// 	console.log("retrieving dishes from: " + kitchen);
// 	requestUrl = 'http://grlc.io/api/RoderickvanderWeerdt/recipe-queries/get_dishes_from_kitchen?kitchen=' + kitchen + '&endpoint=https%3A%2F%2Fapi.krr.triply.cc%2Fdatasets%2Froderick%2Frecepten%2Fservices%2Frecepten%2Fsparql';
// 	getDishesFromCategory(requestUrl);	
// };

// const getDishesFromDiet = async (diet) => {
// 	console.log("retrieving dishes from: " + diet);
// 	requestUrl = 'http://grlc.io/api/RoderickvanderWeerdt/recipe-queries/get_dishes_from_diet?diet=' + diet + '&endpoint=https%3A%2F%2Fapi.krr.triply.cc%2Fdatasets%2Froderick%2Frecepten%2Fservices%2Frecepten%2Fsparql';
// 	getDishesFromCategory(requestUrl);
// };

// // const getDishesFromDuration = async (durationMin, durationMax) => {
// // 	console.log("retrieving dishes from: " + durationMin + ', ' + durationMax);
// // 	requestUrl = 'http://grlc.io/api/RoderickvanderWeerdt/recipe-queries/get_dishes_from_durations?minDuration=' + diet + '&endpoint=https%3A%2F%2Fapi.krr.triply.cc%2Fdatasets%2Froderick%2Frecepten%2Fservices%2Frecepten%2Fsparql';
// // 	getDishesFromCategory(requestUrl);
// // };

// const getDishesFromCategory = async (requestUrl) => {
// 	responseJSON = await makeGrlcRequest(requestUrl);
// 	var table = document.getElementById("dishesTable");
// 	var rowCounter = 0;
// 	var cellCounter = 0;
// 	var textRow = table.insertRow(rowCounter++);
// 	var pictRow = table.insertRow(rowCounter++);
// 	responseJSON.results.bindings.forEach(element => {
// 		console.log('retrieved dish: ' + element.dishName.value);
// 		const dishName = element.dishName.value;
// 		const dishImgLoc = getThumbnailImg(element.img_location.value);
// 		// dishImgLoc = dishImgLoc.substring(0, dishImgLoc.length-3) + 'png';
// 		console.log(element.img_location.value);
// 		var textCell = textRow.insertCell(cellCounter);
// 		var pictCell = pictRow.insertCell(cellCounter);
// 		textCell.innerHTML = '<a href=\"recept_page.html?'+ dishName + '\">' + dishName + '</a><br />';
// 		pictCell.innerHTML = '<div class="thumbImg"><a href=\"recept_page.html?'+ dishName + '\"><img src="'+dishImgLoc+'" alt="'+dishName+'"></a></div>';
// 		if (cellCounter == 2) {
// 			textRow = table.insertRow(rowCounter++);
// 			pictRow = table.insertRow(rowCounter++);
// 			cellCounter = 0;
// 		}else{
// 			cellCounter++;
// 		};
// 	});
// };

function sliderUpdate(){
	var valMax = document.getElementById("maxSlider").value //gets the oninput value
	document.getElementById('maxSlider_label').innerHTML = valMax; //displays this value to the html page
	var valMin = document.getElementById("minSlider").value //gets the oninput value
	document.getElementById('minSlider_label').innerHTML = valMin; //displays this value to the html page
	// if (valMax =< valMin) {
	// 	document.getElementById("sliderButton").disabled = false;
	// } else {
	// 	document.getElementById("sliderButton").disabled = true;
	// };
	// 	document.getElementById("minSlider").value = parseInt(valMax)-1;
	// };
	// } else if (valMin >= valMax) {
	// 	document.getElementById("maxSlider").value = parseInt(valMin)+1;
	// };
	// console.log(valMin + ' ' + valMax);
};

function getDishesFromDuration (listOfDishes, timeMin, timeMax) {
	var table = document.getElementById("dishesTable");
	var rowCounter = 0;
	var cellCounter = 0;
	var textRow = table.insertRow(rowCounter++);
	var pictRow = table.insertRow(rowCounter++);
	listOfDishes.forEach(element => {
		if ((element[3] >= parseInt(timeMin.toString().substring(5))) && (element[3] <= parseInt(timeMax))) {
			console.log('retrieved dish: ' + element[0]);
			const dishName = element[0];
			const dishImgLoc = element[1];
			const dishURI = element[2];
			var textCell = textRow.insertCell(cellCounter);
			var pictCell = pictRow.insertCell(cellCounter);
			textCell.innerHTML = '<a href=\"recept_'+ dishURI + '.html\">' + dishName + '</a><br />';
			pictCell.innerHTML = '<div class="thumbImg"><a href=\"recept_'+ dishURI + '.html\"><img src="'+dishImgLoc+'" alt="'+dishName+'"></a></div>';
			if (cellCounter == 2) {
				textRow = table.insertRow(rowCounter++);
				pictRow = table.insertRow(rowCounter++);
				cellCounter = 0;
			}else{
				cellCounter++;
			};
		};
	});
	document.getElementById('sidebarCategories').innerHTML += "Gerechten tussen:<br />" + timeMin.toString().substring(5) + " en " + timeMax + " minuten.";
};

function getRandomDish () {
	const randomDishInt = Math.floor(Math.random()*dishImgList.length);

	console.log(dishImgList[randomDishInt][2]);
	window.location = "recept_"+ dishImgList[randomDishInt][2] + '.html';

}