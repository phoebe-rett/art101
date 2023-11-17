/**
 * Author: Phoebe Rettberg
 * Created: 11.14.2023
 * License: Public Domain
 */


//I was able to get the Lorem Ipsum text to work so I wanted to try doing a dialogue exchange from a show I like
//Dialogue is from Fleabag season 2 episode 5

//I figured it made sense to put the lines in an array but used chatGPT to help figure out how to call the elements in sequential order. It suggested setting a currentIndex to 0 but adding 1 each time

const dialogue = ["Tell the truth", "...It's horrendous...","It's horrendous", "It's modern", "Don't lie!", "I'm not", "I look like a pencil", "You-you don't look-", "Don't laugh","It's okay!","It's not okay! I'm gonna lose my job","You won't lose your job, it's cool","It's not cool!","It's edgy","Oh f*** off!", "No, it's chic.", "It's unsalvagable!", "Claire, it's French!", "Really?", "Yes."];

let currentIndex = 0;

// click listener for button
$("#fleabag").click(function(){
    const element = dialogue[currentIndex];
    $("#output").append('<div class="script"><p>' + element + '</p></div>');
    currentIndex = (currentIndex + 1) % dialogue.length;
});

//reveal lab info
$(document).ready(function(){
    $("#lab-ten").hide();
});

$("#lab-info").click(function(){
   $("#lab-ten").toggle();
});

//Random Generated text
function generateRandomText() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
};

//Lorem ipsum button
$("#make-convo").click(function(){
    const newText = generateRandomText();
    $("#output-two").append('<div class="text"><p>' + newText + '</p></div>');
});
