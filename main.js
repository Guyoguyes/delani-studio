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
        
       });

    $(".contact").submit(function(event){
        var name = document.getElementById("name");
       
        $(".forms").append(+ name + "we have received your email.we will get back to you soon ")
        

        event.preventDefault();
    });
    
});