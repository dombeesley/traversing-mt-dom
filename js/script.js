$(document).ready(function() {
 
    $("p").click(function(){
		$(this).children("a").css("background-color", "yellow"); 
	});

    $("#button1").click(function(){
        $(this).next().slideToggle("slow");
    }); /** Use that relationship to close the p element by clicking on the button using .slideToggle(‘slow’) */

    /** Use slideDown to display the card paragraphs when the card_image is clicked. */

    $(".card_image").click(function(){
        $(this).next().children("p").slideDown();
    });

    $(".card").click(function() {
		$(this).toggleClass("card_pink");	 
    });
    
    $("#select_btn").click(function(){
        $(".card:not(.card_pink)").hide();	
    });

    $("#all_btn").click(function(){
        $(".card").show();
    });

}); 


