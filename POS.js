console.log("linked");

//LOCATING ELMS FROM HTML
var bill = document.querySelector(".bill");
var subtotal = document.querySelector(".subtotal");
var tax = document.querySelector(".tax");
var total = document.querySelector(".total");
var itemAButton = document.querySelector("#AItem");
var itemBButton = document.querySelector("#BItem");

//TOTALS
var subtotalBill = 0;
var taxBill = 0;
var finalBill = 0;

//CONSTRUCTOR FUNCTIONS(MENU ITEMS)
var MenuItems = function(name, price) {
	this.name = name;
	this.price = price;
};

//CREATING MENU ITEMS
var itemA = new MenuItems("Item A", 5);
var itemB = new MenuItems("Item B", 10);

//FUNCTIONS TO RUN
MenuItems.prototype.addToBill = function() {
	this.li = document.createElement("li");
	this.li.textContent = this.name + " for " + this.price;
	bill.appendChild(this.li);
};

MenuItems.prototype.updateBillTotals = function () {
	subtotalBill += this.price;
	taxBill = subtotalBill * .05;
	finalBill = subtotalBill + taxBill;
};

MenuItems.prototype.updateBillDisplay = function () {
  subtotal.textContent = "Subtotal: $" + subtotalBill;
  tax.textContent = "Tax: $" + taxBill;
  total.textContent = "Total: $" + finalBill;
};

MenuItems.prototype.render = function() {
	this.addToBill();
	this.updateBillDisplay(this.updateBillTotals());
};


//This has to happen for all menu items
var renderA = function() {
	itemA.render();
};

var renderB = function() {
	itemB.render();
};

itemAButton.addEventListener("click", renderA);
itemBButton.addEventListener("click", renderB);



