$(document).ready(function() {

    $(".theButton").click(function(){
        $("#panel .container").siblings().hide();
    }); /* When a colored panel is clicked, all panels vanish */

    
    $(".theButton").click(function(){
        $(this).hide();
    }); /* When a colored panel is clicked, just that panel disappears */

    $(".theButton").click(function(){
	    $("#panel .container").siblings().fadeTo(.5);
    }); /* When a panel is clicked, all siblings fade to 10% opacity */


    $(".superButton").click(function(){
	    $("#panel .container").siblings().fadeTo(1);	
    });/* When reset is clicked, all panels revert to full opacity */

    
    $(".theButton").mouseenter(function(){
        $(this).addClass("makeBlack");
    }); /* When the mouse hovers over a panel, that panel turns black */

  
    $(".theButton").mouseleave(function(){
        $(this).removeClass("makeBlack");
    });    /* When the mouse moves away, the panel reverts back to its previous colour */


    $(".theButton").click(function(){
    var col = $(this).css('background-color');
        $('.superButton').text( col);
    }); /* Change the text in the reset button to display the colour (RGB) of the selected panel. */
});