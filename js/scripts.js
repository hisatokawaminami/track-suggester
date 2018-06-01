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


    var total = question1 + question2;


    $(".yourName").text(yourName);

    if (total === 2) {
        $("#ruby").show();
        $("#css").hide();
        $("#cSharp").hide();
    }
    else if (total === 3) {
        $("#ruby").hide();
        $("#css").show();
        $("#cSharp").hide();
    }
    else if (total === 4) {
        $("#ruby").hide();
        $("#css").hide();
        $("#cSharp").show();
      }




      });
    });
