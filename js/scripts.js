$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var yourName = $("input#yourName").val();


    $(".yourName").text(yourName);


    $("#ruby, #cSharp, #css").show();

  });
});
