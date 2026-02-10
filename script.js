document.addEventListener("DOMContentLoaded", () => {

  let sections = document.querySelectorAll(".section");
  sections.forEach((page) => {
    page.classList.add("hidden");
  });





  //  TYPEWRITER EFFECT
  const typeText = document.getElementById("typeText");

  const text = [
    "Hey love...",
    "I tried to find the perfect Valentine gift...",
    "So I built one"
  ];

  function opening() {

    let delay = 0;
    typeText.innerHTML = "";

    for (let i = 0; i < text.length; i++) {
      for (let j = 0; j < text[i].length; j++) {
        setTimeout(() => {
          typeText.innerHTML += text[i][j];
        }, delay);
        delay += 90;
      }
      setTimeout(() => {
        typeText.innerHTML += "<br>";
      }, delay);
      delay += 500;
    }

    navActive();
  }
  opening();


  const texts = [
    "I think I found a bug in my heart…",
    "It crashes every time I see you.",
    "Tried debugging.",
    "Turns out… you’re not the bug.",
    "You’re the feature."
  ];

  let active = document.querySelector(".active");
  let story = document.querySelector(".story");



  // NAVIGATION TO STORY
  function navActive() {
    document.getElementById("start").addEventListener("click", () => {

      active.scrollIntoView({ behavior: "smooth" });
      active.classList.remove("hidden");

      let open = document.querySelector(".opening");
      if (open) {
        open.classList.add("hidden");
      }
    });

    let tIndex = 0;
    const flirtText = document.getElementById("flirtText");
    const continueBtn = document.getElementById("continue");
    continueBtn.addEventListener("click", () => {

      if (tIndex < texts.length) {
        flirtText.innerText = texts[tIndex++];

      } else {
        flirtText.innerText =
          "So… should I keep refactoring my feelings\nor deploy them straight to you? 😌❤️";

        continueBtn.innerText = "👉 Next Level →";

        continueBtn.onclick = () => {
          if (active) {
            active.classList.add("hidden");

          }
          if (story) {
            story.classList.remove("hidden");
            story.scrollIntoView({ behavior: "smooth" });
          }

          scrollCards();
        };
      }
    });
  }


  const heartbeat = document.querySelector(".heartbeat");


  // SCROLL REVEAL CARDS
  function scrollCards() {

    const cards = document.querySelectorAll(".card");
    const cardHeart = document.getElementById("cardHeart");

    let open = 0;
    cards.forEach(card => {
      card.addEventListener("click", () => {

        if (!card.classList.contains("clicked")) {
          card.classList.add("clicked");
          open++;

          if (open === cards.length) {
            cardHeart.classList.remove("hidden");
          }
        }
      });
    });

    cardHeart.onclick = () => {
      if (story) {
        story.classList.add("hidden");

      }
      if (heartbeat) {
        heartbeat.classList.remove("hidden");
        heartbeat.scrollIntoView({ behavior: "smooth" });
      }
      beat();
    };

  }



  const proposal = document.querySelector(".proposal");

  // heartbeat
  const beats = [
    "My heart’s been racing…",
    "Because I’ve been wanting to ask you this…"
  ];


  function beat() {

    let heartIdx = 0;
    // innerHTML =  " ";
    const beatText = document.querySelector(".beat-text");
    const heart = document.getElementById("heart");

    heart.onclick = () => {
      if (heartIdx < beats.length) {
        beatText.innerText = beats[heartIdx++];
        return;
      }

      if (heartbeat) {
        heartbeat.classList.add("hidden");

      }
      if (proposal) {
        proposal.classList.remove("hidden");
        proposal.scrollIntoView({ behavior: "smooth" });
      }
      propose();
    };

  }


  // yes button
  function propose() {
   document.querySelectorAll(".yesBtn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelector(".proposal").classList.add("hidden");
      document.querySelector(".final").classList.remove("hidden");
      document.body.style.background = "#fce4ec";
      startHearts();
    });
  });

  }
  

  //   floating hearts
  let heartsStarted = false;

  function startHearts() {
    if (heartsStarted) return;
    heartsStarted = true;

    setInterval(() => {
      const h = document.createElement("div");
      h.className = "heart";

      const icon = document.createElement("i");
      icon.className = "fa-solid fa-heart";
      icon.style.color = "#e27a7a";

      h.appendChild(icon);
      h.style.left = Math.random() * 100 + "vw";
      document.body.appendChild(h);
      setTimeout(() => h.remove(), 6000);
    }, 300);
  }


  // restart button
  const restart = document.getElementById("restartBtn");

  restart.addEventListener("click", ()=>{
    location.reload();
  });


// on double click the hearts pop out
document.addEventListener("dblclick", (e) => {

  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");

    const icon = document.createElement("i");
    icon.className = "fa-solid fa-heart";
    icon.style.color = "#bf2136";

    heart.appendChild(icon);

    heart.style.position = "fixed";
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    heart.style.pointerEvents = "none";
    heart.style.fontSize = "18px";
    heart.style.zIndex = "9999";

    const x = (Math.random() - 0.5) * 250;
    const y = (Math.random() - 0.5) * 250;

    heart.animate(
      [
        { transform: "translate(0,0)", opacity: 1 },
        { transform: `translate(${x}px, ${y}px) scale(0.3)`, opacity: 0 }
      ],
      {
        duration: 900,
        easing: "ease-out"
      }
    );

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 900);
  }

});



});



