$(document).ready(function() {
  generateQuote();

    function generateQuote() {
      var quotes = ["Wandering around the web is like living in a world in which every doorway is actually one of those science fiction devices which deposit you in a completely different part of the world when you walk through them. In fact, it isn't like it, it is it. @Douglas Adams", "I didn't have a manifesto. I had some discontent. It seemed to me that midcentury mainstream American science fiction had often been triumphalist and militaristic, a sort of folk propaganda for American exceptionalism. @William Gibson", "Science fiction is trying to find alternative ways of looking at realities. @Iain Banks", "Science fiction has a way of letting you talk about where we are in the world and letting you be a bit of a pop philosopher without being didactic. @Brit Marling", "Change is the principal feature of our age and literature should explore how people deal with it. The best science fiction does that, head-on. @David Brin", "Science fiction writers foresee the inevitable, and although problems and catastrophes may be inevitable, solutions are not. @Isaac Asimov"];
      seed = Math.round(Math.random() * (quotes.length - 1));
      arr = quotes[seed].split('@');
      document.getElementById("quotation").textContent = arr[0];
      document.getElementById("author").textContent = arr[1];

    }

   document.getElementById("btn").onclick = generateQuote();
}