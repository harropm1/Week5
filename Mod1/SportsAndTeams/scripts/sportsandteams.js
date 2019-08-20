"use strict";

$(function ()
{
    let data = [
        { sport: "Football", bestTeam: "Dallas Cowboys" },
        { sport: "Baseball", bestTeam: "Texas Rangers" },
        { sport: "Basketbal", bestTeam: "Dallas Mavericks" },
        { sport: "Hockey", bestTeam: "Dallas Stars" },
        { sport: "Soccer", bestTeam: "FCDallas" }
    ];

    let len = data.length;

    for (let i = 0; i < len; i++)
    {
        let htmlString = `
        <tr>
            <td>${data[i].sport}</td>
            <td>${data[i].bestTeam}</td>
        </tr>
        `;
        $("#tableBody").append(htmlString);
    }
});
