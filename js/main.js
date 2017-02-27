$( document ).ready(function() {
  $("section.home").fadeIn(2000);

  $(".links").each(function(index, value) {
    console.log(index)
    console.log(value.innerHTML)
  });

});
