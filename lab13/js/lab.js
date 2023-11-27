/**
 * Author: Phoebe Rettberg
 * Created: 11.26.2023
 * License: Public Domain
 */

//Creating function
function FizzBuzz(){
//loop though 1-200
    for (var index=1;index<=200;index++){
        let output = "";
        //conditional: If divisable by 3 say Fizz
        if (index % 3 == 0){
            output+= " Fizz";
        } 
        //conditional: If divisable by 5 say Buzz
        if (index % 5 == 0){
            output+= " Buzz";
        }
        //conditional: If divisable by 7 say Boom
        if (index % 7 == 0){
            output+=" Boom"
        }
        //conditional: anything else, output the number
        else{
            output= index
        }
        //output in div, with commas
        $("#output p").append("" + output + ", ");
    }
}

//Calling function
FizzBuzz();

