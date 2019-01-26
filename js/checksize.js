$(document).ready(function () {
  var btn = $("#btn");
  btn.click(function () {
    var request = "https://api.github.com/repos/";
    request += $("#input").val();

    $.ajax({
      url: request,
      type: 'GET',
      success: function (data) {
        var size = data.size;
        // Convert to MB in case its bigger than 1024KB
        if (size >= 1024) {
          var size = size / 1024;
          alert("Repo size is: " + size.toFixed(2) + "MB");
        } else {
          alert("Repo size is: " + size + "KB");
        }
      },
      error: function (data) {
        if (data.status == 404) {
          alert("Repo not found.");
        }
        else {
          alert("Error while triggering API.");
        }
      }
    });
  });
});
