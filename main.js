$(document).ready(function()
{
  // dichiaro due variabili che mi torneranno utili più tardi
  var slide = $(".images .slide");
  var dot = $(".nav .fa-circle");

  // Imposto cosa accadrà quando cliccheranno la freccietta per andare avanti
  $('.next').click(
    function() {
      // mi richiamo le funzioni che ho già dichiarato

      Next();
      dotNext();
    }
  );
  // Imposto cosa accadrà quando cliccheranno la freccietta per andare indietro

  $('.prev').click(
    function() {
      // mi richiamo le funzioni che ho già dichiarato

      Prev();
      dotPrev();
    }
  )
  // Imposto cosa accade quando si clicca un pallino invece della freccia
  dot.click(
    function () {
      // dichiaro una variabile che mi fa ottenere un numero tra 0 e 3 (in questo caso) grazie alla funzione index di jquery e l'utilizzo del this il numero ottenuto varia rispetto a quello che clicca l'utente
      var indeX=$(this).index();
      console.log(indeX);
      // Riutilizzo la variabile che ho dichiarato all'inizio che non è altro che la raccolta delle immagini e grazie ad eq() (che mi fa trovare dato un numero l'elemento che corrisponde a quel numero in una lista di elementi) riesco a far capire al programma quale slide deve cercare
      var currentSlide=slide.eq(indeX);
      console.log(currentSlide);
      // Alla slide trovata gli do la classe active
      currentSlide.addClass('active');
      // e do la classe active anche al bottone premuto
      $(this).addClass('active');
        // e all'immagine che non è la slide che mi serve gli rimuovo la classe active facendo la stessa cosa al bottone
      	$(".images img").not(currentSlide).removeClass('active');
      	$(".fa-circle").not(this).removeClass('active');
  });
})
// Inizio funzioni
// funzione per andare avanti nel carousel
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

// funzione per andare indietro nel carousel

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
// funzione per andare avanti con i pallini quando si clicca la freccia
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

// funzione per andare indietro con i pallini quando si clicca la freccia

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
// fine funzioni
