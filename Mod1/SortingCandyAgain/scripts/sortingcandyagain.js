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

let comparePrices = (object1, object2) =>
{
    if (object1.price > object2.price)
    {
        return 1;
    }
    return -1;
}

let candies = candy.sort(comparePrices);

console.log(candies);

let [cheapest, next, third] = candies;
console.log(cheapest);
console.log(next);
console.log(third);