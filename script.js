const canvas = document.getElementById("galaxy");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
resize();
window.addEventListener("resize", resize);

let stars = [];

for (let i = 0; i < 500; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.6,
    speed: Math.random() * 1 + 0.2
  });
}

function animateGalaxy() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";

  stars.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();

    s.x -= s.speed;

    if (s.x < 0) {
      s.x = canvas.width;
      s.y = Math.random() * canvas.height;
    }
  });

  requestAnimationFrame(animateGalaxy);
}

animateGalaxy();

const form = document.getElementById("ContactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); 

  alert("Your message has been sent successfully!");

  form.reset(); 
});
