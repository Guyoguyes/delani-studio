$(document).ready(function(){
    $(".hidden p").hide();
    $("#design").click(function(){
        $("#design img").toggle();
        $("#design p").toggle();
    });
     $("#development").click(function(){
         $("#development img").toggle();
         $("#development p").toggle();
     });
     $("#product").click(function(){
         $("#product img").toggle();
         $("#product p").toggle();
     });

     $(".port").hover(function() {
        $(this).children(".card").fadeToggle(1000, "linear");
        // $(".card").toggle();
        
       });

    
       $("#contact").submit(function (e) {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        if (name == "" || email == "") {
            alert("Cannot submit without name and email");
        } else {
            alert("thank you " + name + " \n message submitted successfully. We will get back to you as soon as possible");
        }
    });
    
});