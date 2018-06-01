$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var yourName = $("input#yourName").val();
    var age = parseInt($("input#age").val());

    if (age) {
      
        } else {
          alert('Please enter your age.');
        }



    $(".yourName").text(yourName);





    $("#ruby, #cSharp, #css").show();

  });
});
