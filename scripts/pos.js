//LOCATING ELMS FROM HTML
var $bill = $(".bill");
var $subtotal = $(".subtotal");
var $tax = $(".tax");
var $total = $(".total");
var $current = $(".current");
var $itemAButton = $("#AItem");
var $itemBButton = $("#BItem");
var $itemCButton = $("#CItem");
var $itemDButton = $("#DItem");
var $itemEButton = $("#EItem");
var $itemFButton = $("#FItem");
var $itemGButton = $("#GItem");
var $itemHButton = $("#HItem");

//TOTALS
var subtotalBill = 0;
var taxBill = 0;
var finalBill = 0;

//CONSTRUCTOR FUNCTION (MENU ITEMS)
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
	this.li = $("<li>").text(this.name + " for $" + this.price);
	$($bill).append(this.li);
	$($bill).scrollTop(999);
};

MenuItems.prototype.updateBillTotals = function () {
	subtotalBill += this.price;
	taxBill = subtotalBill * .05;
	finalBill = subtotalBill + taxBill;
};

MenuItems.prototype.updateBillDisplay = function () {
  $subtotal.text("Subtotal: $" + subtotalBill);
  $tax.text("Tax: $" + taxBill);
  $total.text("Total: $" + finalBill);
  $current.text("Total: $" + finalBill);
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

//CLICK EVENTS
$($itemAButton).click(renderA);
$($itemBButton).click(renderB);
$($itemCButton).click(renderC);
$($itemDButton).click(renderD);
$($itemEButton).click(renderE);
$($itemFButton).click(renderF);
$($itemGButton).click(renderG);
$($itemHButton).click(renderH);





