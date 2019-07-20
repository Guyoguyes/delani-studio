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

    $("#name").submit(function(event){
        var name = document.getElementById("name");
       

        name.ForEach(function(mess){
            var userinput = $("input" + mess).value();
            $("." + mess).text(userinput);
        });
        $("#text").show(+ name + "we have received your message. Thank you fro reaching out to us.");

        event.preventDefault();
    });
});