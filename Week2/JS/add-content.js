var products = ["Stamford T-Shirt", "Stamford Notebook", "Stamford Wristband"];
var price = [10, 5, 1];
var total = 0;

hour = new Date().getHours();

if (hour < 12) {
    greeting = "Good Morning";
} else if (hour > 17) {
	greeting = "Good Evening";
} else {
	greeting = "Good Afternoon";
}

var greetingEle = document.getElementById("greeting");
greetingEle.textContent = greeting;

name = "Rafaelle";

var nameEle = document.getElementById("name");
nameEle.textContent = name;

//Calculate the total price below

for (i=0; i < 3; i++) {
	var productList = document.getElementById("productList");
	productList.innerHTML += "<li>" +products[i] + ": $" + price[i] +"</li>";

	//Display purchased product to the screen
	total += price[i];
}

//20% discount
total = total*0.8;

var totalPriceEle = document.getElementById("totalPrice");
totalPriceEle.textContent = "$" + total;