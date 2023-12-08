/**
 * Author: Phoebe Rettberg
 * Created: 12.05.2023
 * License: Public Domain
 */


$.ajax({
    url: "https://xkcd.com/info.0.json",
    type: "GET",
    dataType : "json",
    success: function(data) {
        console.log(data);
        
        comicObj = data;

        yesterday = data.num - 1;

        lastWeek = data.num - 7;

        $("#comic h2").html(comicObj.title);
        $("#comic p").html("<img src='" + comicObj.img + "'alt=" + comicObj.alt + "/>");

    },
    error: function (jqXHR, textStatus, errorThrown) { 
      console.log("Error:", textStatus, errorThrown);
  }
});




$("#day").click(function(){
  $.ajax({
    url: "https://xkcd.com/" + yesterday + "/info.0.json",
    type: "GET",
    dataType : "json",
    success: function(data) {
        console.log("yesterday", data);

        $("#comic h2").html(data.title);
        $("#comic p").html("<img src='" + data.img + "'alt=" + data.alt + "/>");

    },
    error: function (jqXHR, textStatus, errorThrown) { 
      console.log("Error:", textStatus, errorThrown);
  }
})});


$("#week").click(function(){
  $.ajax({
    url: "https://xkcd.com/" + lastWeek + "/info.0.json",
    type: "GET",
    dataType : "json",
    success: function(data) {
        console.log("lastWeek", data);

        $("#comic h2").html(data.title);
        $("#comic p").html("<img src='" + data.img + "'alt=" + data.alt + "/>");

    },
    error: function (jqXHR, textStatus, errorThrown) { 
      console.log("Error:", textStatus, errorThrown);
  }
})})