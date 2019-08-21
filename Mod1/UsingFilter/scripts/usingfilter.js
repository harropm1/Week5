"use strict";

let candy = [
    {
        product: "Gummy Worms", 
        price: 5.79
    },
    {
        product: "Plain M&Ms", 
        price: 2.89
    },
    {
        product: "Twizzlers", 
        price: 3.49
    },
    {
        product: "Twix", 
        price: 5.19
    },
    {
        product: "Kit Kat", 
        price: 5.59
    },
    {
        product: "Jolly Ranchers", 
        price: 4.79
    },
    {
        product: "Taffy", 
        price: 6.79
    },
    {
        product: "Starburst", 
        price: 2.99
    },
    {
        product: "Snickers", 
        price: 4.19
    },
    {
        product: "Dum Dum", 
        price: 1.99
    }
];

let over5Dollars = candy.filter(c => c.price >= 5.00);

for (let i = 0; i < over5Dollars.length; i++)
{
    console.log(over5Dollars[i].price);
}

let over1000 = candy.filter(candy => candy.price >= 1000);

for (let i = 0; i < over1000.length; i++)
{
    console.log(over1000[i].price);
}

let candyType = "Starburst";
let c = candy.find(can => can.product == candyType);
if (c == null)
{
    console.log("We don't have that in stock.");
}
else
{
    console.log("Price: $" + c.price);
}