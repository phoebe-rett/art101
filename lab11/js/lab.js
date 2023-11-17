/**
 * Author: Phoebe Rettberg
 * Created: 11.16.2023
 * License: Public Domain
 */

function sortString(inputString) {
    //split string into array, ignore spaces
    return inputString.split('').filter(e => e.trim().length)
    //sort string, ignore capitals, reverse order, and join
    .sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true })).reverse().join('');
};

// click listener for button
$("#submit").click(function(){
    const userName = $("#user-name").val();
    userNameSorted = sortString(userName);
    $("#output p").append('<div class="text"><p>' + userNameSorted + '</p></div>');
});

