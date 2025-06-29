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

  if (yesBtn && noBtn) {
    yesBtn.addEventListener('click', () => {
      alert("Yay! Can't wait! 🍿💕");
      window.open(yesLink, "_blank");
    });

    noBtn.addEventListener('click', () => {
      alert("Oki diwag");
      window.open(noLink, "_blank");
    });
  } else {
    console.error("Buttons not found.");
  }
};
