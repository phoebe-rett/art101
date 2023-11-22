/**
 * Author: Phoebe Rettberg
 * Created: 11.20.2023
 * License: Public Domain
 */

//For refactoring: ChatGPT suggested I used current index in lab 10. I referenced my code from lab 10 when figuring how to refactor code here.
const houseArray =[
"Gryffindor! </br> You're brave or something.", 
"Ravenclaw! </br> You're like smart.", 
"Slytherin!</br> You're evil!", 
"Hufflepuff!</br> You're nice :)"];

function sortingHat(str){
    const len = str.length;
    const mod = len % 4;
    const currentIndex = mod;
    return houseArray[currentIndex];
};

$("#button").click(function(){
    const name = $("#input").val();
    const house = sortingHat(name);
    $("#output p").html('<div class = "text"><p>' + "You've been sorted into " + house + '</p></div>');
    //ChatGPT suggestion to get input box to clear:
    $("#input").val('');
});
