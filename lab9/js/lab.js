/**
 * Author: Phoebe Rettberg
 * Created: 11.10.2023
 * License: Public Domain
 */

//lab 9 title
$("h1").click(function(){
    //changes color
    $("h1").toggleClass("title-click");
    //changes title text
    $("h1").text("Lab 9: Libraries & jQuery");
    //changes button one text
    $("#button-one").text("now here!"); 
});

//challenge
$("#challenge").append("<br><button id= 'button-one'>...</button>");

$("#button-one").click(function(){
    //reveals challenges section by changing class
    $("#challenge").toggleClass("clicked");
    //output challenge heading
    $("#challenge h2").text("Challenge");
    //ouput challenge text
    $("#challenge p").text('For this assignment we had to experiment with jQuery funcitons like ".click" and ".toggleClass"!');
    //hides button one
    $("#button-one").hide();
    //change text on button two
    $("#button-two").text("now here!"); 
});

//problems
$("#problems").append("<br><button id= 'button-two'>...</button>");

$("#button-two").click(function(){
    //same process as challenge section
    $("#problems").toggleClass("clicked");
    $("#problems h2").text("Problems");
    $("#problems p").text("I'm very new to jQuery so there was a lot of experimenting to get things to work. I made a lot of mistakes like forgetting semicolons or using the wrong ID. I found stackoverflow super useful in figuring out how to do what I wanted to, like using multiple functions when using .click or chaning text.");
    $("#button-two").hide();
    $("#button-three").text("now here!"); 
});


//results
$("#results").append("<br><button id= 'button-three'>...</button>");

$("#button-three").click(function(){
    //same as others, minus changing the text of the next button
    $("#results").toggleClass("clicked");
    $("#results h2").text("Results");
    $("#results p").text("You're looking at them!");
    $("#button-three").hide();
});