$(document).ready(function () {

    var num = $('#input-line').val();
    var g = +num

    var fizzBuzz = function (g) {
       if (g < 101 && g >= 1 && g % 1==0){
        for (var i = 1; i <= g; i++) {
           if (1 % 15 == 0) {
               $('body').append("<div>Fizz-Buzz</div>");
           }

            else if (1 % 5 == 0) {
               $('body').append("<div>Buzz</div>");
           }

           else if (1 % 3 == 0) {
               $('body').append("<div>Fizz</div>");
           }

          else {
          $('body').append("<div>" + i + "</div>");
            }
        
        else {
          alert("Please enter a WHOLE NUMERIC value between 1-100")
            }
       }
     };
     
    $(document).keydown(function (event) {
        if (event.which == 13) {
            alert();
        }
    $(document).on('click', '#Enter', function(){
        alert();
    })
    })
      
  });