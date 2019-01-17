$(document).ready(function() {
  $("#questions").submit(function(event) {
    event.preventDefault();

    var hobby = $("input:radio[name=hobby]:checked").val();
    var food = $("input:radio[name=food]:checked").val();
    var place = $("input:radio[name=place]:checked").val();

    if ( hobby === "golf" && food === "soup" || food === "soup" && place === "clubhouse" || hobby === "golf" && place === "clubhouse") {
      $("#caddyshack").show();
      $("#roverdan").hide();
      $("#larryBurns").hide();
      $("#backtoschool").hide();
    }
    else if ( hobby === "diving" && food === "cafeteriafood" || food === "cafeteriafood" && place === "school" || hobby === "diving" && place === "school") {
      $("#backtoschool").show();
      $("#roverdan").hide();
      $("#larryBurns").hide();
      $("#caddyshack").hide();
    }
    else if ( hobby === "running" && food === "bones" || food === "bones" && place === "doghouse" || hobby === "running" && place === "doghouse") {
      $("#roverdan").show();
      $("#caddyshack").hide();
      $("#larryBurns").hide();
      $("#backtoschool").hide();
    }
    else if (hobby === "other" || food === "other" || place === "other"){
    $("#larryBurns").show();
    $("#roverdan").hide();
    $("#caddyshack").hide();
    $("#backtoschool").hide();
  }
  });
});
