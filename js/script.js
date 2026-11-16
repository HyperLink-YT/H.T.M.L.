const facts = ['The page you requested called in sick today.', 
  'Oh no! You\'re venturing out into the ERROR PAGE! You\'re going to get totally SPOILED!', 
  'Lost? Frightened? Confused? GOOD! Hahahahaha!', 
  '"Huh!? I swear something was supposed to be here!" You exclaimed to yourself in sheer bewilderment, but alas, not a single page to be found.', 
  'The idea of a fully functioning page stored at the URL you requested was nothing but an illusion.', 
  'Sorry, nothing.', 
  'Maybe you should just click on the links provided to you via the main page instead of fiddle-farting around on the outskirts like an imbecile!', 
  'Absolute 404! 10/10.', 
  'No Way? No Way!', 
  'You think that JUST because you got this message, that makes you VERY special, huh?! Well, you most certainly are NOT!', 
  'Haha! Look at the idiot who searched for a page that doesn\'t exist! Point and laugh!', 
  'Error? I hardly know \'er!', 
  'Hey, look! Nothing!', 
  'To be or not to be? Apparently, the answer was \'not to be\'.', 
  'I could just sit here and watch the checkered background move diagonally ALLLL day long. Don\'t you agree?', 
  'Why is there so much randomized text for a page most people won\'t see? Because I\'m CRAAAAAZY!', 
  'Maybe the real page was the friends we made along the way.', 
  'Look ma, no page!', 
  'I AM ERROR.'];

!function newFact() {
  const randomFact = Math.floor(Math.random() * facts.length);
  document.getElementById('factDisplay').innerHTML = facts[randomFact];
}();