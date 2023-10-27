window.onload = function () {
  Particles.init({
    selector: ".background",
  });
};

const particles = Particles.init({
  selector: ".background",
  color: ["#03dac6", "#ff0266", "#000000"],
  connectParticles: true,
  responsive: [
    {
      breakpoint: 368,
      options: {
        color: ["#faebd7", "#03dac6", "#ff0266"],
        maxParticles: 43,
        connectParticles: false,
      },
    },
  ],
});

/*                            letra animada                   */

let animationContainer = document.querySelector('.animated-title');
let textData = animationContainer.getAttribute('aria-label');

function splitWords() {
  let splitedText = textData.split(' ');
  
  splitedText.join('& &').split('&').forEach(function(e){
    let span = document.createElement('span');
    span.classList.add('animated-word');
    span.setAttribute('data-text', e); 
    animationContainer.appendChild(span);
  });
  splitLetters();
}
splitWords()


function splitLetters() {
  let animatedWords = document.querySelectorAll('.animated-word');
  animatedWords.forEach(function(e, i){
    e.getAttribute('data-text').split('').forEach(function(f, j) {
      f = f == ' ' ? '&#32;' : f;
      let span = document.createElement('span');
      span.classList.add('animated-element');
      span.setAttribute('aria-hidden', 'true'); 
      span.innerHTML = f;
      e.appendChild(span);
    });
    animate(e, i);
  })
}

function animate(e, i) {
  let wordCount = e.getAttribute('data-text').length;
  e.style.opacity = 1;
  e.classList.add('animate');
}