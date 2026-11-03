// ========================================================
// faxriddin.uz "SPACE" Cosmic Particles & Meteor Canvas Engine
// ========================================================

(function () {
  const canvas = document.getElementById('cosmic-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const particles = [];
  const particleCount = Math.min(Math.floor((width * height) / 12000), 90);
  const meteors = [];

  const mouse = {
    x: width / 2,
    y: height / 2,
    radius: 120,
    isActive: false
  };

  const colors = [
    'rgba(255, 59, 48, 0.7)',   // neon red
    'rgba(0, 240, 255, 0.7)',   // neon cyan
    'rgba(168, 85, 247, 0.7)',  // neon purple
    'rgba(255, 255, 255, 0.8)', // pure white stars
    'rgba(255, 184, 0, 0.6)'    // golden glow
  ];

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2 + 0.6;
      this.baseX = this.x;
      this.baseY = this.y;
      this.density = Math.random() * 20 + 2;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.alpha = Math.random() * 0.7 + 0.2;
      this.pulseSpeed = 0.01 + Math.random() * 0.02;
      this.pulse = Math.random() * Math.PI;
    }

    update() {
      this.pulse += this.pulseSpeed;
      this.currentAlpha = this.alpha + Math.sin(this.pulse) * 0.25;

      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse interaction
      if (mouse.isActive) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouse.radius - distance) / mouse.radius;
          const directionX = forceDirectionX * force * 1.5;
          const directionY = forceDirectionY * force * 1.5;
          this.x -= directionX;
          this.y -= directionY;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = Math.max(0.1, Math.min(1, this.currentAlpha));
      ctx.shadowBlur = this.size > 1.5 ? 8 : 0;
      ctx.shadowColor = this.color;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  class Meteor {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width + 200;
      this.y = Math.random() * -100;
      this.len = Math.random() * 80 + 70;
      this.speed = Math.random() * 8 + 6;
      this.size = Math.random() * 1.5 + 0.8;
      this.angle = (45 * Math.PI) / 180;
      this.active = true;
    }

    update() {
      this.x -= this.speed * Math.cos(this.angle);
      this.y += this.speed * Math.sin(this.angle);

      if (this.x < -100 || this.y > height + 100) {
        this.active = false;
      }
    }

    draw() {
      if (!this.active) return;
      ctx.save();
      ctx.beginPath();
      ctx.lineWidth = this.size;
      const tailX = this.x + this.len * Math.cos(this.angle);
      const tailY = this.y - this.len * Math.sin(this.angle);

      const grad = ctx.createLinearGradient(this.x, this.y, tailX, tailY);
      grad.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
      grad.addColorStop(0.3, 'rgba(255, 59, 48, 0.6)');
      grad.addColorStop(1, 'rgba(139, 92, 246, 0)');

      ctx.strokeStyle = grad;
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(tailX, tailY);
      ctx.stroke();
      ctx.restore();
    }
  }

  // Initialize
  function init() {
    particles.length = 0;
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }

  // Spawn meteors periodically
  setInterval(() => {
    if (meteors.length < 3 && Math.random() > 0.4) {
      meteors.push(new Meteor());
    }
  }, 3500);

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw particle constellations
    ctx.lineWidth = 0.5;
    for (let a = 0; a < particles.length; a++) {
      for (let b = a + 1; b < particles.length; b++) {
        let dx = particles[a].x - particles[b].x;
        let dy = particles[a].y - particles[b].y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 85) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.12 * (1 - dist / 85)})`;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
        }
      }
    }

    // Update & draw particles
    particles.forEach((p) => {
      p.update();
      p.draw();
    });

    // Update & draw meteors
    for (let i = meteors.length - 1; i >= 0; i--) {
      meteors[i].update();
      meteors[i].draw();
      if (!meteors[i].active) {
        meteors.splice(i, 1);
      }
    }

    requestAnimationFrame(animate);
  }

  // Event Listeners
  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    init();
  });

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.isActive = true;
  });

  window.addEventListener('mouseleave', () => {
    mouse.isActive = false;
  });

  init();
  animate();
})();
