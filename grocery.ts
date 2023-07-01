class Grocery {
    name: string;
    price: number;
    count: number;

    constructor(name: string, price: number, count: number) {
        this.name = name
        this.price = price
        this.count = count
    }

    getSubtotal(): number {
        return this.price * this.count;
    }

    toString(): string {
        return this.name + " (" + this.count + ") -- $" + this.getSubtotal() 
    }
}

const groceries: Array<Grocery> = [
    new Grocery("Banana", 0.49, 12),
    new Grocery("Pineapple", 1.99, 1),
    new Grocery("Orange", 0.69, 6),
    new Grocery("Box of Kiwis", 4.99, 2),
    new Grocery("Box of Strawberries", 3.99, 3)
]

const htmlList = document.getElementById("groceryList")

var totalPrice: number = 0

groceries.forEach(function (item) {
    const listItem = document.createElement("li")
    listItem.textContent = item.toString()
    htmlList?.appendChild(listItem)
    totalPrice += item.getSubtotal()
});

const appBody = document.getElementById("app")
const totalLine = document.createElement("p")
totalLine.textContent = "Total: $" + totalPrice
appBody?.appendChild(totalLine)