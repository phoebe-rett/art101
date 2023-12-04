/**
 * Author: Phoebe Rettberg
 * Created: 11.30.2023
 * License: Public Domain
 */

//I used ChatGPT to help create a random number from the array and to make sure the number was the same for both question and answer

function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}
let randomIndex;

$("#question").click(function() {
    randomIndex = getRandomNumber();
    $("#output2 p").html('');
    $.ajax({
        url: "https://jservice.io/api/clues",
        method: "GET",
        dataType: "json",
    })
    .done(function(quiz) {
        console.log(quiz);
        $("#output1 p").html(quiz[randomIndex].question);
    });
});

$("#answer").click(function() {
     $.ajax({
       url: "https://jservice.io/api/clues",
       method: "GET",
       dataType: "json",
    })
    .done(function(quiz) {
    $("#output2 p").html(quiz[randomIndex].answer);
    });
});