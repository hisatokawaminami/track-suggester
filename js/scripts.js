$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var yourName = $("input#yourName").val();
    var age = parseInt($("input#age").val());
    var computerType = $("input:radio[name=computerType]:checked").val();

    // var question1 = parseInt($("input:radio[name=question1]:checked").val());
    // var question2 = parseInt($("input:radio[name=question2]:checked").val());

    if (age) {
            } else {
              alert('Please enter your age.');
            }
    var question1 = parseInt($("#rate").val());
    var question2 = parseInt($("#rate2").val());
    var question3 = parseInt($("#rate3").val());

    var total = question1 + question2 + question3;

    $(".yourName").text(yourName);


 console.log(total);

    if (total < 5) {
        $("#ruby").show();
        $("#css").hide();
        $("#cSharp").show();
    }
    else if (total >= 5 && total <= 7) {
        $("#ruby").hide();
        $("#css").show();
        $("#cSharp").hide();
    }
    else  {
        $("#ruby").hide();
        $("#css").hide();
        $("#cSharp").show();
      }




      });
    });
