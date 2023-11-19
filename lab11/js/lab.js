/**
 * Author: Phoebe Rettberg
 * Created: 11.16.2023
 * License: Public Domain
 */

//Credit to Wes Modes: 

//New name, reverse alphabetical one word
function sortString(inputString) {
    //split string into array, ignore spaces
    return inputString.split('').filter(e => e.trim().length)
    //sort string, ignore capitals, reverse order, and join
    .sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true })).reverse().join('');
};

// click listener for button
$("#submit").click(function(){
    //set value
    const userName = $("#user-name").val();
    //apply sorting
    userNameSorted = sortString(userName);
    //return sorted name
    $("#output p").append('<div class="text"><p>' + userNameSorted + '</p></div>');
});

//New name, randomized with spaces, title case
function sortStringBonus(inputString) {
    //split
    const nameArray = inputString.split('');
    //randomize
    for (let i = nameArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [nameArray[i], nameArray[j]] = [nameArray[j], nameArray[i]];
    }
    //join and return
    const sortStringBonus = nameArray.join('');
    return sortStringBonus;
};
 
//title case
String.prototype.toTitleCase = function() {
    return this.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};

// click listener for button
$("#submit-two").click(function(){
    // set value
    const userNameBonus = $("#user-name-two").val();
    // apply sort and title case
    userNameSortedBonus = sortStringBonus(userNameBonus).toTitleCase();
    // return new name
    $("#output-two p").append('<div class="text"><p>' + userNameSortedBonus + '</p></div>');
});
