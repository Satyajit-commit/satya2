const canvas = document.getElementById('confettiCanvas');
const ctx = canvas.getContext('2d');

const resizeCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const confetti = [];
const colors = ['#FF5733', '#FFC300', '#DAF7A6', '#FF69B4', '#6495ED'];

for (let i = 0; i < 150; i++) {
  confetti.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 8 + 2,
    color: colors[Math.floor(Math.random() * colors.length)],
    dx: (Math.random() - 0.5) * 4,
    dy: Math.random() * 5 + 1,
    rotation: Math.random() * 360,
  });
}

const drawConfetti = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach(c => {
    ctx.save();
    ctx.translate(c.x, c.y);
    ctx.rotate((c.rotation * Math.PI) / 180);
    ctx.fillStyle = c.color;
    ctx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size);
    ctx.restore();
    c.x += c.dx;
    c.y += c.dy;
    c.rotation += c.dy;

    if (c.x > canvas.width) c.x = 0;
    if (c.x < 0) c.x = canvas.width;
    if (c.y > canvas.height) c.y = 0;
  });
};

const animate = () => {
  drawConfetti();
  requestAnimationFrame(animate);
};
animate();