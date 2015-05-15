console.log("linked");

var a = document.querySelector("#AItem");
var b = document.querySelector("#BItem");
var aText = document.querySelector("#AText").textContent;
var aPrice = document.querySelector("#APrice").textContent;
var bText = document.querySelector("#BText").textContent;
var bPrice = document.querySelector("#BPrice").textContent;

var bill = document.querySelector(".bill");
var subtotal = document.querySelector(".subtotal");
var tax = document.querySelector(".tax");
var final = document.querySelector(".total");

var subtotalBill = 0;
var taxBill = 0;
var finalBill = 0;

var addToBillA = function(event) {
	bill.scrollTop = 999999;
	var li = document.createElement("li");
	li.textContent = aText + " for " + aPrice;
	bill.appendChild(li);
	subtotalBill += parseInt(aPrice);
	subtotal.textContent = "Subtotal: $" + subtotalBill;
	taxBill = .05 * subtotalBill;
	tax.textContent = "Tax: $" + taxBill;
	finalBill =  taxBill + subtotalBill;
	final.textContent = "Total: $" + finalBill;
}

var addToBillB = function(event) {
	bill.scrollTop = 999999;
	var li = document.createElement("li");
	li.textContent = bText + " for " + bPrice;
	bill.appendChild(li);
	subtotalBill += parseInt(bPrice);
	subtotal.textContent = "Subtotal: $" + subtotalBill;
	taxBill = .05 * subtotalBill;
	tax.textContent = "Tax: $" + taxBill;
	finalBill =  taxBill + subtotalBill;
	final.textContent = "Total: $" + finalBill;
}

a.addEventListener("click", addToBillA);
b.addEventListener("click", addToBillB);

