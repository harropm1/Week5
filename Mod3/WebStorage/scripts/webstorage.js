"use strict";

$(function ()
{
    $("#enter").on("click", function ()
    {
        $("#enter").prop("href", "webstorageresponse.html");
        if (typeof (Storage) !== "undefined")
        {
            localStorage.setItem("Name", $("#name").val());
            localStorage.setItem("Role", $("input[name='studentOrInstructor']:checked").val());
        }
    });
});