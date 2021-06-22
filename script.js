"use strict";
$("#loadData").on("click", function (e) {
  $.getJSON(
    "https://script.google.com/macros/s/AKfycbwFHBLPeSW-KXBev8XkGNFFPPpluIzyy-qGIgOVZJ2qzSzm8V1WehH8rBUXQG-2EfRfAQ/exec",
    function (data) {
      let html = "";
      data.forEach((element) => {
        html += `<ul><li>${element}</li></ul>`;
      });
      $("#output").html(html);
      html = "";
    }
  );
});
$("#myForm").submit(function (e) {
  e.preventDefault();
  let data = $("#myForm input").serialize();
  let url =
    "https://script.google.com/macros/s/AKfycbwFHBLPeSW-KXBev8XkGNFFPPpluIzyy-qGIgOVZJ2qzSzm8V1WehH8rBUXQG-2EfRfAQ/exec";
  $.ajax({
    type: "POST",
    url: url,
    data: data,
    success: function (response) {
      $("#myForm").trigger("reset");
    },
  });
});
