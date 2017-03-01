$( document ).ready(function() {
  $("section.home").fadeIn(400);

  $(".links").on("click", function(){
    deactivateLink();
    activateLink($(this));

    var section = $(this).prop("classList")[1]
    swapSection(section);
  });

  function deactivateLink() {
    $(".links.active").removeClass("active")
  }

  function activateLink(button) {
    button.addClass("active")
  }

  function swapSection(section) {
    $("main section:visible").fadeOut(400, function() {
      fadeInNewSection(section)
    });
  }

  function fadeInNewSection(section) {
    $("section." + section).fadeIn(400);
  }
});
