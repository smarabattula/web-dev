alert("Welcome");

// Modify Style
$("h1").addClass("title"); // = "Buenos Dias!"

// Modify Text
$(".e").text("no!");
$(".a").html("<em>Google Search!</em>");

//Modify Attributes
$(".a").attr("href","https://www.google.com");
$(".a").attr("target","_blank");

// Add Event Handlers
$(".b").click(function(){
    $(".b").css("color","orange");
})

$("button").click(function(){
    console.log(this.className.slice(-1));
})

