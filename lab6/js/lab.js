/**
 * Author: Phoebe Rettberg
 * Created: 10.26.2023
 * License: Public Domain
 */


//Define Variables
myTransport = ["my car", " my feet", " the loop bus", " the metro"];

//Create an object for my main ride
myMainRide= { 
  make: "Ford", 
  model: "Fusion", 
  color: "White", 
  year: 2009, 
  age: function () {
    return 2023-this.year;
  }
};

//output
document.writeln("Kinds of transport I use: ", myTransport, "</br>");

document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");