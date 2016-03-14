$(document).ready(readyFunction);

function readyFunction() {
  $("#submit-btn").click(enterCity);


	function enterCity() {	
	event.preventDefault();

	var city = ($("#city-type").val());
  	
  	if (city == "NYC" || city== "New York" || city =="New York City") {

  		$("body").addClass("nyc");
      $("body").removeClass("sf");
      $("body").removeClass("la");
      $("body").removeClass("austin");
      $("body").removeClass("sydney");
    
    }

    else if (city === "SF" || city === "San Francisco" || city === "Bay Area" ) {
      $("body").addClass("sf");
      $("body").removeClass("nyc");
      $("body").removeClass("la");
      $("body").removeClass("austin");
      $("body").removeClass("sydney");
    
    }

    else if (city === "Los Angeles" || city === "LA" || city === "LAX" ) {
      $("body").addClass("la");
      $("body").removeClass("nyc");
      $("body").removeClass("sf");
      $("body").removeClass("austin");
      $("body").removeClass("sydney");
    
    }

    else if (city === "Austin" || city === "ATX" ) {
      $("body").addClass("austin");
      $("body").removeClass("nyc");
      $("body").removeClass("sf");
      $("body").removeClass("la");
      $("body").removeClass("sydney");

    }

    else if (city === "Sydney" || city === "SYD" ) {
      $("body").addClass("sydney");
      $("body").removeClass("nyc");
      $("body").removeClass("sf");
      $("body").removeClass("la");
      $("body").removeClass("austin");
    
    }

    else {
      $("body").removeClass();
  	
    }

}
}
  
 