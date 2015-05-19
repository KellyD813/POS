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

var subtotalBill = 0;
var taxBill = 0;
var finalBill = 0;

var MenuItems = function(name, price) {
	this.name = name;
	this.price = price;
};

var itemA = new MenuItems("Plain Toast", 5);
var itemB = new MenuItems("Butter Toast", 6);
var itemC = new MenuItems("Avocado Toast", 8);
var itemD = new MenuItems("Peanut Butter Toast", 8);
var itemE = new MenuItems("Jam Toast", 7);
var itemF = new MenuItems("Water", 3);
var itemG = new MenuItems("Coffee", 4);
var itemH = new MenuItems("Tea", 3);

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

$($itemAButton).click(function() { itemA.render(); })
$($itemBButton).click(function() { itemB.render(); })
$($itemCButton).click(function() { itemC.render(); })
$($itemDButton).click(function() { itemD.render(); })
$($itemEButton).click(function() { itemE.render(); })
$($itemFButton).click(function() { itemF.render(); })
$($itemGButton).click(function() { itemG.render(); })
$($itemHButton).click(function() { itemH.render(); })






