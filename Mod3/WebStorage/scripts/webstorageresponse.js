"use strict";

$(function()
{
    let name, role;
    name = localStorage.getItem("Name");
    role = localStorage.getItem("Role");
    let welcome = `Welcome ${role} ${name}!`;

    if (role == "student")
    {
        $("#instructorContainer").hide();
        $("#studentContainer").show();
        $("#studentDiv").html(welcome);
    }
    else
    {
        $("#studentContainer").hide();
        $("#instructorContainer").show();
        $("#instructorDiv").html(welcome);       
    }   
})