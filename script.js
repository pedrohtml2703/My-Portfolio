const typing = document.querySelector(".typing");

const words = [
  "Desenvolvedor Front-End",
  "UI Designer",
  "Criador de Interfaces",
  "Web Developer"
];

let wordIndex = 0;
let letterIndex = 0;

function typeEffect() {

  if (letterIndex < words[wordIndex].length) {

    typing.innerHTML += words[wordIndex].charAt(letterIndex);

    letterIndex++;

    setTimeout(typeEffect, 100);

  } else {

    setTimeout(deleteEffect, 1500);

  }

}

function deleteEffect() {

  if (letterIndex > 0) {

    typing.innerHTML = words[wordIndex].substring(0, letterIndex - 1);

    letterIndex--;

    setTimeout(deleteEffect, 50);

  } else {

    wordIndex++;

    if (wordIndex >= words.length) {
      wordIndex = 0;
    }

    setTimeout(typeEffect, 300);

  }

}

typeEffect();

/* ANIMAÇÃO AO ROLAR */

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {

  cards.forEach(card => {

    const top = card.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

      card.style.opacity = "1";
      card.style.transform = "translateY(0)";

    }

  });

});

cards.forEach(card => {

  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "0.6s";

});
