let $box = $(".box");
let $button = $(".button");

$button.on("click", function() {
  $box.toggleClass("active");
});
