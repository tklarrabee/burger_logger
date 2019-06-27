$(document).ready(function(){
    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var newBurger = {
            burger_name: $("#ca").val().trim(),
            devoured: false
        };

        $.post("/api/burger", newBurger).then( function(){
            location.reload();
        });
    });
})