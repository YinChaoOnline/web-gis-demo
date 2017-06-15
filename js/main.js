$(document).ready(

    //HACK:enable search panel to search with enter key;
    $("#txtRestaurantName").keyup(function (event) {
        if (event.keyCode == 13) {
            $("#btnSearch").click();
        }
    })
);


