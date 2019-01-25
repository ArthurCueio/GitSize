$(document).ready(function() {
  var btn = $("#btn");
  btn.click(function() {
    var request = "https://api.github.com/repos/";
    request += $("#input").val();
    $.get(request, function(data) {
      var size = data.size;
      // Convert to MB in case its bigger than 1024KB
      if (size >= 1024) {
        var size = size / 1024;
        alert("Repo size is: " + size.toFixed(2) +"MB");
      } else {
        alert("Repo size is: " + size +"KB");
      }
    });
  });
});
