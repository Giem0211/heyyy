
const text = "Hello pu Gwennn, movie date, tara???";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}

window.onload = function () {
  typeWriter();

  const yesLink = "https://docs.google.com/forms/d/e/1FAIpQLSe5IjrKRqrqP3oLALd6TezkN4fOd_ouJ0mJ44NRDa6V-zzHIA/viewform?usp=pp_url&entry.1559214853=Yes";
  const noLink = "https://docs.google.com/forms/d/e/1FAIpQLSe5IjrKRqrqP3oLALd6TezkN4fOd_ouJ0mJ44NRDa6V-zzHIA/viewform?usp=pp_url&entry.1559214853=No";

  const yesBtn = document.querySelector('.yes');
  const noBtn = document.querySelector('.no');

  // begging texts to cycle through
  const beggingTexts = [
    "No 😅",
    "Legit ba🥺",
    "Baka naman 😭",
    "Ayaw mo ba ako kasama 🍿",
    "Come on na, pls po",
    "Don't break my heart 💔",
    "Last chance 😭👉👈"
  ];
  let noClickCount = 0;

  if (yesBtn && noBtn) {
    yesBtn.addEventListener('click', () => {
      alert("Yay! Can't wait! 🍿💕");
      window.open(yesLink, "_blank");
    });

    noBtn.addEventListener('click', () => {
      noClickCount++;

      // shrink the No button
      let scale = Math.max(0.5, 1 - noClickCount * 0.1); 
      noBtn.style.transform = `scale(${scale})`;

      // change text
      if (noClickCount < beggingTexts.length) {
        noBtn.textContent = beggingTexts[noClickCount];
      } else {
        noBtn.textContent = "🥺";
      }

      // grow the Yes button
      let yesScale = 1 + noClickCount * 0.2;
      yesBtn.style.transform = `scale(${yesScale})`;

      // if she really insists "No", still open the link
      if (noClickCount > 6) {
        alert("Oki diwag 😭");
        window.open(noLink, "_blank");
      }
    });
  } else {
    console.error("Buttons not found.");
  }
};
