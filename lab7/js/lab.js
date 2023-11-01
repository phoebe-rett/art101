/**
 * Author: Phoebe Rettberg
 * Created: 10.30.2023
 * License: Public Domain
 */

//basis for code from Wes Modes
function sortUserName(){
    var userName = window.prompt ("Tell me your full name so I can fix it");
    console.log("userName =", userName);
    //split string to array
    //removing spaces from: https://stackoverflow.com/questions/5963182/how-to-remove-spaces-from-a-string-using-javascript
    var nameArray = userName.split('').filter(e => e.trim().length);
    console.log("nameArray =", nameArray);
    //sort the array
    //localeCompare from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
    var nameArraySort = nameArray.sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true }));
    console.log("nameArraySort= ", nameArraySort);
    //reverse the sort
    var nameArraySortReverse = nameArray.reverse();
    console.log("nameArraySortReverse= ", nameArraySortReverse);
    //join array back to a string
    var nameSorted = nameArraySort.join('~');
    console.log("nameSorted =", nameSorted);
    
    return nameSorted;
}

//output
document.writeln(">:) Fixed your name: ",
    sortUserName(), "! </br>");