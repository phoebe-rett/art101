/**
 * Author: Phoebe Rettberg
 * Created: 11.10.2023
 * License: Public Domain
 */

//lab 9 title
$("h1").click(function(){
    $("h1").toggleClass("title-click")
})
.click(function(){
    $("h1").text("Lab 9: Libraries & jQuery")
})
.click(function(){
    $("#button-one").text("now here!") 
});

//challenge
$("#challenge").append("<br><button id= 'button-one'>...</button>");

$("#button-one").click(function(){
    $("#challenge").toggleClass("clicked")
})
.click(function(){
    $("#challenge h2").text("Challenge")
})
.click(function(){
    $("#challenge p").text('For this assignment we had to experiment with jQuery funcitons like ".click" and ".toggleClass"!')
})
.click(function(){
    $("#button-one").hide()
})
.click(function(){
    $("#button-two").text("now here!") 
});

//problems
$("#problems").append("<br><button id= 'button-two'>...</button>");

$("#button-two").click(function(){
    $("#problems").toggleClass("clicked")
})
.click(function(){
    $("#problems h2").text("Problems")
})
.click(function(){
    $("#problems p").text("I'm very new to jQuery so there was a lot of experimenting ot get things to work. I made a lot of mistakes like forgetting semicolons or using the wrong ID. I found stackoverflow super useful in figuring out how to do what I wanted to, like using multiple functions when using .click or chaning text.")
})
.click(function(){
    $("#button-two").hide()
})
.click(function(){
    $("#button-three").text("now here!") 
})
.click(function(){
    $("#button-three").addClasss("emphasize-button")
});

//results
$("#results").append("<br><button id= 'button-three'>...</button>");

$("#button-three").click(function(){
    $("#results").toggleClass("clicked")
})
.click(function(){
    $("#results h2").text("Results")
})
.click(function(){
    $("#results p").text("You're looking at them!")
})
.click(function(){
    $("#button-three").hide()
});