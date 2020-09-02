$(document).ready(function()
{

  $('.next').click(
    function() {
      Next();
      dotNext();
    }
  );

  $('.prev').click(
    function() {
      Prev();
      dotPrev();
    }
  )
})
&('.fa-circle').click(
  function() {
    alert("ciao")
  }
)
function Next() {
  var imgActive = $("img.active");
  imgActive.removeClass("active");
  if (imgActive.hasClass("last") == true) {
    var nextImg = $("img.first");
  }
  else {
    var nextImg = imgActive.next()
  }
  nextImg.addClass("active");
}


function Prev() {
  var imgActive = $("img.active");
  imgActive.removeClass("active");
  if (imgActive.hasClass("first") == true) {
    var nextImg = $("img.last");
  }
  else {
    var nextImg = imgActive.prev()
  }
  nextImg.addClass("active");
}

function dotNext() {
  var dotActive = $("i.active");
  dotActive.removeClass("active");
  if (dotActive.hasClass("last") == true) {
    var nextDot = $("i.first");
  }
  else {
    var nextDot = dotActive.next()
  }
  nextDot.addClass("active");
}


function dotPrev() {
  var dotActive = $("i.active");
  dotActive.removeClass("active");
  if (dotActive.hasClass("first") == true) {
    var nextDot = $("i.last");
  }
  else {
    var nextDot = dotActive.prev()
  }
  nextDot.addClass("active");
}

// function dotClick() {
//   var puntoCliccato = $(this).children()
// if () {
//
// }
// }
