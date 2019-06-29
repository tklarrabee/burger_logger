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

    $(".devour").on("click", function(event){
        // event.preventDefault();
        let id = $(this).data("id");
        let eatBarf = $(this).data("neweat")
        
        if (eatBarf){eatBarf = false}
        else {eatBarf = true}
        console.log(eatBarf);
        let burgyBurg = {devoured: eatBarf}
        // $.put("/api/burger/"+id, {devoured: eatBarf});
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: burgyBurg
          }).then(function(){
              console.log("Burger State " + burgyBurg)

              location.reload();
          })
    });
})