$(document).ready(function(){
  //MAIN LAYOUTS
  $("#first_div_layout").show();
  $("#second_div_layout").hide();
  $("#third_div_layout").hide();
  //GIF Section
  $("#a_id_eat_gif").show();
  $("#b_id_eat_gif").hide();
  //ABOUT ME
  $("#about_me").fadeOut('fast');

  $("#enterButton").click(function() {
      var name = $("#nameInput").val();
      if(name.trim() === "") {
        $("#a_id_eat_gif").hide();
        $("#b_id_eat_gif").show();
      } else {
        $("#a_id_eat_gif").show();
        $("#b_id_eat_gif").hide();
        $("#nameDisplay").text(name);
        $("#first_div_layout").hide();
        $("#second_div_layout").show();
        $("#third_div_layout").hide();
      }
    });

  //Moving Button  
  $("#no_button").on({
    mouseover: function() {
      $(this).css({
        left: (Math.random() * 300) + "px",
        top: (Math.random() * 550) + "px",
      });
    }
  });  

  //ON YESS BUTTON CLICK
  $("#yes_button").click(function(){
    $("#first_div_layout").hide();
    $("#second_div_layout").hide();
    $("#third_div_layout").show();
    //ABOUT ME
    $("#about_me").delay(2000).fadeIn('slow');
  });

  //LOOP BUTTON CLICK
  $("#retry_button").click(function(){
    $("#first_div_layout").show();
    $("#second_div_layout").hide();
    $("#third_div_layout").hide();
  });
}); 