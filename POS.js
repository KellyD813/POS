console.log("linked");

//LOCATING ELMS FROM HTML
var bill = document.querySelector(".bill");
var subtotal = document.querySelector(".subtotal");
var tax = document.querySelector(".tax");
var total = document.querySelector(".total");
var current = document.querySelector(".current");
var itemAButton = document.querySelector("#AItem");
var itemBButton = document.querySelector("#BItem");
var itemCButton = document.querySelector("#CItem");
var itemDButton = document.querySelector("#DItem");
var itemEButton = document.querySelector("#EItem");
var itemFButton = document.querySelector("#FItem");
var itemGButton = document.querySelector("#GItem");
var itemHButton = document.querySelector("#HItem");

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
var itemA = new MenuItems("Plain Toast", 5);
var itemB = new MenuItems("Butter Toast", 6);
var itemC = new MenuItems("Avocado Toast", 8);
var itemD = new MenuItems("Peanut Butter Toast", 8);
var itemE = new MenuItems("Jam Toast", 7);
var itemF = new MenuItems("Water", 3);
var itemG = new MenuItems("Coffee", 4);
var itemH = new MenuItems("Tea", 3);

//FUNCTIONS TO RUN
MenuItems.prototype.addToBill = function() {
	this.li = document.createElement("li");
	this.li.textContent = this.name + " for " + this.price;
	bill.appendChild(this.li);
	bill.scrollTop = 999999999;
};

MenuItems.prototype.updateBillTotals = function () {
	subtotalBill += this.price;
	taxBill = (subtotalBill * .05).toFixed(2);
	finalBill = subtotalBill + taxBill;
};

MenuItems.prototype.updateBillDisplay = function () {
  subtotal.textContent = "Subtotal: $" + subtotalBill;
  tax.textContent = "Tax: $" + taxBill;
  total.textContent = "Total: $" + finalBill;
  current.textContent = "Total: $" + finalBill;
};

MenuItems.prototype.render = function() {
	this.addToBill();
	this.updateBillDisplay(this.updateBillTotals());
};

// MORE SPECIFIC FUNCTIONS
var renderA = function() {
	itemA.render();
};

var renderB = function() {
	itemB.render();
};

var renderC = function() {
	itemC.render();
};

var renderD = function() {
	itemD.render();
};

var renderE = function() {
	itemE.render();
};

var renderF = function() {
	itemF.render();
};

var renderG = function() {
	itemG.render();
};

var renderH = function() {
	itemH.render();
};


//EVENT LISTENERS 
itemAButton.addEventListener("click", renderA);
itemBButton.addEventListener("click", renderB);
itemCButton.addEventListener("click", renderC);
itemDButton.addEventListener("click", renderD);
itemEButton.addEventListener("click", renderE);
itemFButton.addEventListener("click", renderF);
itemGButton.addEventListener("click", renderG);
itemHButton.addEventListener("click", renderH);



