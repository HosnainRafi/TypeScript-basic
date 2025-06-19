// Problem 8:

// Create a TypeScript program that simulates a simple shopping cart. Define an interface Product with properties like name, price, and quantity. Implement a function that calculates the total cost of the items in the shopping cart. The function should take an array of Product objects as input and return the total cost.

interface Product{
    name:string,
    price:number,
    quantity:number,
}
const shoppingCart: Product[] = [
  { name: 'Apple', price: 10, quantity: 3 },
  { name: 'Banana', price: 5, quantity: 6 },
  { name: 'Orange', price: 8, quantity: 4 }
];
const totalCost = (cart: Product[]): number => {
    let cost:number = 0;
    for (const element of cart) {
        cost += element.price* element.quantity;
    }
    return cost;
}

const resultlog = totalCost(shoppingCart);
console.log(resultlog);
