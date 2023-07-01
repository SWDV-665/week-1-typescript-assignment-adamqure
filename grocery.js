var Grocery = /** @class */ (function () {
    function Grocery(name, price, count) {
        this.name = name;
        this.price = price;
        this.count = count;
    }
    Grocery.prototype.getSubtotal = function () {
        return this.price * this.count;
    };
    Grocery.prototype.toString = function () {
        return this.name + " (" + this.count + ") -- $" + this.getSubtotal();
    };
    return Grocery;
}());
var groceries = [
    new Grocery("Banana", 0.49, 12),
    new Grocery("Pineapple", 1.99, 1),
    new Grocery("Orange", 0.69, 6),
    new Grocery("Box of Kiwis", 4.99, 2),
    new Grocery("Box of Strawberries", 3.99, 3)
];
var htmlList = document.getElementById("groceryList");
var totalPrice = 0;
groceries.forEach(function (item) {
    var listItem = document.createElement("li");
    listItem.textContent = item.toString();
    htmlList === null || htmlList === void 0 ? void 0 : htmlList.appendChild(listItem);
    totalPrice += item.getSubtotal();
});
var appBody = document.getElementById("app");
var totalLine = document.createElement("p");
totalLine.textContent = "Total: $" + totalPrice;
appBody === null || appBody === void 0 ? void 0 : appBody.appendChild(totalLine);
