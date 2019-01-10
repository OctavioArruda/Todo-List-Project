/* Check off specific to dos by Clicking */
$(document).ready(function(){

    $("ul").on("click", "li",function(){
        $(this).toggleClass("completed");
    })

    $("ul").on("click","span    ",function(event){
        $(this).parent().fadeOut(500, function(){
            $(this).remove();
        });
        event.stopPropagation();
    })

    $("input[type='text']").keypress(function(event){
        // console.log("Keypress");
        if(event.which === 13){
            // checking for the enter key (13)
            // console.log("You hit enter");

            var todoText = $(this).val();
            $(this).val("");
            $("ul").append("<li><span>X</span> " + todoText + "</li>");
        }
    });


})

