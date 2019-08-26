"use strict";

let employees = [
    { name: "Dana", salary: 62000 },
    { name: "Brenda", hourlyRate: 16.75, hoursWorked: 40 },
    { name: "Joe", salary: 60000 },
    { name: "Michelle", hourlyRate: 17.95, hoursWorked: 57 }
]
for (let i = 0; i < employees.length; i++)
{
    for (let key in employees[i])
    {
        console.log(key + ": " + employees[i][key]);  
    }
    let pay;
    if ("salary" in employees[i])
    {
        pay = employees[i].salary / 52;
    }
    else
    {
        if (employees[i].hoursWorked <= 40)
        {
            pay = employees[i].hourlyRate * employees[i].hoursWorked;
        }
        else
        {
            let overtimeRate = employees[i].hourlyRate * 1.5;
            let overtimeHours = employees[i].hoursWorked - 40;
            pay = (employees[i].hourlyRate * 40) + (overtimeHours * overtimeRate);
        }
    }
    console.log(employees[i].name + " is paid $" + pay.toFixed(2));
    
    let fedTax = pay * .125;
    let socialTax = pay * .062;
    let medicareTax = pay * .0145;
    console.log("Federal Tax: $" + fedTax.toFixed(2) +"\nSocial Security Tax: $" + socialTax.toFixed(2) + "\nMedicare Tax: $" + medicareTax.toFixed(2));

    let netPay = pay - fedTax - socialTax - medicareTax;
    console.log("Net Pay is $" + netPay.toFixed(2) + "\n---------------");
}