
Vue.component("elementos", {
  props: ["hero"],
  template: "<div class='back'> <img src='img/{{hero.img}}' >  </div>"
});


new Vue({
  el: "#memory_board",
  data: {
    cards: [
      { id: 1, name: "aquaman", img: "aquaman.jpg" },
      { id: 2, name: "batman", img: "batman.jpg" },
      { id: 3, name: "captain america", img: "captain-america.jpg" },
      { id: 4, name: "fantastic four", img: "fantastic-four.jpg" },
      { id: 5, name: "flash", img: "flash.jpg" },
      { id: 6, name: "green arrow", img: "green-arrow.jpg" },
      { id: 7, name: "green lantern", img: "green-lantern.jpg" },
      { id: 8, name: "ironman", img: "ironman.jpg" },
      { id: 9, name: "spiderman", img: "spiderman.jpg" },
      { id: 10, name: "superman", img: "superman.jpg" },
      { id: 11, name: "the avengers", img: "the-avengers.jpg" },
      { id: 12, name: "thor", img: "thor.jpg" },
      { id: 13, name: "aquaman", img: "aquaman.jpg" },
      { id: 14, name: "batman", img: "batman.jpg" },
      { id: 15, name: "captain america", img: "captain-america.jpg" },
      { id: 16, name: "fantastic four", img: "fantastic-four.jpg" },
      { id: 17, name: "flash", img: "flash.jpg" },
      { id: 18, name: "green arrow", img: "green-arrow.jpg" },
      { id: 19, name: "green lantern", img: "green-lantern.jpg" },
      { id: 20, name: "ironman", img: "ironman.jpg" },
      { id: 21, name: "spiderman", img: "spiderman.jpg" },
      { id: 22, name: "superman", img: "superman.jpg" },
      { id: 23, name: "the avengers", img: "the-avengers.jpg" },
      { id: 24, name: "thor", img: "thor.jpg" }
    ]
  }
});

/* <div class="card" >
    <div class="back"> <img src="img/{{hero.img}}"> </img></div>
    <div class="front" style="background: url(img/{{hero.img}}) no-repeat"></div>
</div> */
// var memoryGame = new MemoryGame(cards);


// document.addEventListener("DOMContentLoaded", function(event) { 
//   var html = '';
//   memoryGame.cards.forEach(function (pic) {
//     html += '<div class="card" data-card-name="'+ pic.name +'">';
//     html += '  <div class="back" name="'+ pic.img +'"></div>';
//     html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
//     html += '</div>';
//   });

//   // Add all the div's to the HTML
//   document.querySelector('#memory_board').innerHTML = html;

//   // Bind the click event of each element to a function
//   document.querySelectorAll('.back').forEach(function(card) {
//     card.onclick = function() {
//       // TODO: write some code here
//       console.log('Card clicked')


