"use strict";

$(function ()
{
    $("#viewCategories").on("click", function ()
    {
        getCategories();
        $("#viewCategories").prop("disabled", true);
    });
});

function getCategories()
{
    let categories;
    $.getJSON('/api/categories/', (data) =>
    {
        categories = data;
        for (let i = 0; i < categories.length; i++)
        {
            $("#categoryList").append($("<a />")
                .text(categories[i].Category)
                .attr("class", "dropdown-item")
                .attr("href", "#")
                .on("click", (e) =>
                {
                    e.preventDefault();
                    $("#categoryName").text(categories[i].Category);
                    getProducts(categories[i].Value);
                }));
        }
        $("#categoryContainer").show();
    });
}

function getProducts(category)
{
    $("#productCard").hide();
    $("#productsList").html("");

    $.getJSON(`/api/products/bycategory/${category}`, (products) => 
    {
        $.each(products, (index, product) => 
        {
            $("#productsList").append($("<li />")
                .text(product.ProductName)
                .on("click", (e) =>
                {
                    e.preventDefault();
                    getProduct(product.ProductID);
                }));
        });
        $("#productsContainer").show();
    });
}

function getProduct(productId)
{
    $.getJSON(`/api/products/${productId}`, (product) =>
    {
        $("#productNumber").html("Product Id: " + product.ProductID);
        $("#productName").html("Product Number: " + product.ProductName);
        $("#price").html("Price: $" + Number(product.UnitPrice).toFixed(2));
        $("#productCard").show();
    });
}