function selectQuote() {
  
    var randomNumber = Math.floor(Math.random() * 4);
    var quoteText = document.querySelector("blockquote");
              
    switch (randomNumber) {
      
      case 0:
        quoteText.innerHTML = `<div id="quote">"Do I believe the Earth is shaped like a frisbee? I believe it is. Do I know for sure? No. That's why I want to go up in space"</div> <br> - Mike Hughes`;
        break;
      case 1:
        quoteText.innerHTML = `<div id="quote">"I like playing frisbee. It is the only sport where you can throw something at a person and it's okay"</div> <br> - Demetri Martin`;
        break;
      case 2:
        quoteText.innerHTML = `<div id="quote">"Being good at school is like being good at Frisbee. It's nice, but it's not relevant"</div> <br> - Seth Godin`;
        break;
      case 3:
        quoteText.innerHTML = `<div id="quote">"I used to play Ultimate Frisbee, and I just got a reputation for making popcorn at parties. I don’t mean to brag on myself, but I make the popcorn in the pot, and it comes out fine every time."</div> <br> - Bill Nye`;
        break;
    }
}
window.onload = selectQuote;