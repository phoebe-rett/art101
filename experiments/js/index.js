
console.log("JavaScript");

$("#my-button").click(function(){
    console.log("button pressed");
    var name = prompt("Name please: ");
    $('#title').html('Hello '+ name);
});
