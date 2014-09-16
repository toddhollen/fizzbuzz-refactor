$(document).ready(function () {

        var fizzBuzz = function (g) {

            var num = $('#input-line').val();
            var g = +num;

       if (g < 101 && g >= 1 && g % 1==0){

        for (var i = 1; i <= g; i++) {
            
            if (i % 15 == 0) {
            $('body').append("<div class='data'>Fizz-Buzz</div>");
            } 

            else if (i % 5 == 0) {
            $('body').append("<div class='data'>Buzz</div>");
            } 

            else if (i % 3 == 0) {
            $('body').append("<div class='data'>Fizz</div>");
            } 

            else {
            $('body').append("<div class='data'>" + i + "</div>");
            }
            
        };
        
        } else { alert("Please enter a WHOLE NUMERIC value between 1-100") }
     };
     
    $(document).keydown(function (event) {
        if (event.which == 13) {
            $('.data').remove();
            fizzBuzz();
        }
    });

    $(document).on('click', '#Enter', function(){
         $('.data').remove();
        fizzBuzz();
    });
      
  });