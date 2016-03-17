$(document).ready(pageReady);

function pageReady() {
    $("#submit-btn").click(submitClick);
    function submitClick() {  
        event.preventDefault();
    
console.log("hi!");

    //get the value of the #city-type input and correct for capitalization
    var city = $("#city-type").val();
    city = city.toLowerCase().trim();
    
    //reset classes
    resetBody();
    
    //if the user inputs SF/San Francisco/Bay Area change the css class to "sf"
    if (city === "sf" || city === "san francisco" || city === "bay area") {
        $("body").addClass("sf");
    }
    
    //if the user inputs New York City/NYC/New York change the css class to "nyc"
    else if (city === "new york city" || city === "nyc" || city === "new york") {
        $("body").addClass("nyc");
    }
        
    //if the user inputs Los Angeles/LA/LAX change the css class to "la"
    else if (city === "los angeles" || city === "la" || city === "lax") {
        $("body").addClass("la");
    }
        
    //if the user inputs Austin/ATX change the css class to "austin"
    else if (city === "austin" || city === "atx") {
        $("body").addClass("austin");
    }
    
    //if the user inputs Sydney/SYD change the css class to "sydney"
    else if (city === "sydney" || city === "syd") {
        $("body").addClass("sydney");
    }

}

function resetBody() {
    $("body").removeClass("sf nyc la austin sydney");
}

}