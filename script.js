const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const slides = $$('.slide');
const dots = $$('.dot');
const totalSlides = $('#totalSlides');
const currentSlide = $('#currentSlide');
const progressFill = $('#progressFill');

totalSlides.textContent = String(slides.length).padStart(2, '0');

function updateProgress() {
  const scrollTop = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const pct = maxScroll <= 0 ? 0 : scrollTop / maxScroll;
  progressFill.style.width = `${pct * 100}%`;
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const index = slides.indexOf(entry.target);
    currentSlide.textContent = String(index + 1).padStart(2, '0');
    dots.forEach((dot) => dot.classList.toggle('active', dot.getAttribute('href') === `#${entry.target.id}`));
  });
}, { threshold: 0.55 });
slides.forEach((slide) => observer.observe(slide));
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

window.addEventListener('keydown', (event) => {
  if (!['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp'].includes(event.key)) return;
  const current = Number(currentSlide.textContent) - 1;
  let next = current;
  if (event.key === 'ArrowDown' || event.key === 'PageDown') next = Math.min(slides.length - 1, current + 1);
  if (event.key === 'ArrowUp' || event.key === 'PageUp') next = Math.max(0, current - 1);
  slides[next].scrollIntoView({ behavior: 'smooth' });
});

// Background star field
const starCanvas = $('#starfield');
const sctx = starCanvas.getContext('2d');
let stars = [];
function resizeStars() {
  const dpr = window.devicePixelRatio || 1;
  starCanvas.width = Math.floor(window.innerWidth * dpr);
  starCanvas.height = Math.floor(window.innerHeight * dpr);
  starCanvas.style.width = `${window.innerWidth}px`;
  starCanvas.style.height = `${window.innerHeight}px`;
  sctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const count = Math.floor((window.innerWidth * window.innerHeight) / 6500);
  stars = Array.from({ length: count }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    r: Math.random() * 1.7 + 0.2,
    a: Math.random() * 0.7 + 0.15,
    v: Math.random() * 0.15 + 0.03
  }));
}
function drawStars() {
  sctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  stars.forEach((star) => {
    star.y += star.v;
    if (star.y > window.innerHeight) star.y = 0;
    sctx.beginPath();
    sctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    sctx.fillStyle = `rgba(255,255,255,${star.a})`;
    sctx.fill();
  });
  requestAnimationFrame(drawStars);
}
window.addEventListener('resize', resizeStars);
resizeStars();
drawStars();

function setupCanvas(canvas) {
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  function fit() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round((rect.width * 460 / 720) * dpr);
    canvas.style.height = `${rect.width * 460 / 720}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  fit();
  window.addEventListener('resize', fit);
  return { ctx, get width() { return canvas.clientWidth; }, get height() { return canvas.clientHeight; } };
}

function drawGrid(ctx, w, h) {
  ctx.save();
  ctx.strokeStyle = 'rgba(255,255,255,0.07)';
  ctx.lineWidth = 1;
  for (let x = 0; x < w; x += 48) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
  }
  for (let y = 0; y < h; y += 48) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
  }
  ctx.restore();
}

// Transit simulator
const transit = setupCanvas($('#transitCanvas'));
const planetSizeInput = $('#planetSize');
const transitSpeedInput = $('#transitSpeed');
let transitT = 0;
function drawTransit() {
  const ctx = transit.ctx, w = transit.width, h = transit.height;
  ctx.clearRect(0, 0, w, h);
  drawGrid(ctx, w, h);

  const starX = w * 0.28, starY = h * 0.42, starR = Math.min(w, h) * 0.18;
  const rp = Number(planetSizeInput.value) * Math.min(w, h) / 460;
  transitT += Number(transitSpeedInput.value) * 0.0035;
  const phase = (transitT % 1);
  const px = starX - starR * 1.75 + phase * starR * 3.5;
  const py = starY;

  const grad = ctx.createRadialGradient(starX - starR * .25, starY - starR * .25, 0, starX, starY, starR * 1.2);
  grad.addColorStop(0, '#fff9c7');
  grad.addColorStop(0.45, '#ffd166');
  grad.addColorStop(1, '#ff8a1c');
  ctx.fillStyle = grad;
  ctx.beginPath(); ctx.arc(starX, starY, starR, 0, Math.PI * 2); ctx.fill();
  ctx.shadowColor = '#ffd166'; ctx.shadowBlur = 35;
  ctx.beginPath(); ctx.arc(starX, starY, starR, 0, Math.PI * 2); ctx.strokeStyle = 'rgba(255,209,102,0.8)'; ctx.stroke(); ctx.shadowBlur = 0;

  ctx.fillStyle = '#080b18';
  ctx.beginPath(); ctx.arc(px, py, rp, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = 'rgba(101,231,255,0.7)'; ctx.lineWidth = 2; ctx.stroke();

  // Light curve panel
  const gx = w * 0.52, gy = h * 0.18, gw = w * 0.38, gh = h * 0.52;
  ctx.fillStyle = 'rgba(0,0,0,0.18)'; ctx.strokeStyle = 'rgba(255,255,255,0.16)'; ctx.lineWidth = 1;
  roundRect(ctx, gx, gy, gw, gh, 16); ctx.fill(); ctx.stroke();
  ctx.fillStyle = 'rgba(255,255,255,0.55)'; ctx.font = '13px JetBrains Mono'; ctx.fillText('brightness vs time', gx + 18, gy + 28);
  ctx.strokeStyle = 'rgba(255,255,255,0.18)';
  ctx.beginPath(); ctx.moveTo(gx + 28, gy + gh - 34); ctx.lineTo(gx + gw - 18, gy + gh - 34); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(gx + 28, gy + 42); ctx.lineTo(gx + 28, gy + gh - 34); ctx.stroke();
  const depth = (rp / starR) ** 2;
  ctx.strokeStyle = '#65e7ff'; ctx.lineWidth = 3; ctx.beginPath();
  for (let i = 0; i <= 220; i++) {
    const x = gx + 35 + i * (gw - 65) / 220;
    const t = i / 220;
    const dip = Math.exp(-((t - 0.5) ** 2) / 0.006) * depth;
    const y = gy + 68 + dip * 800;
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.stroke();
  ctx.fillStyle = '#f7fbff';
  ctx.font = '14px Inter';
  ctx.fillText(`depth ≈ ${(depth * 100).toFixed(2)}%`, gx + 18, gy + gh - 12);

  requestAnimationFrame(drawTransit);
}

// Radial velocity simulator
const rv = setupCanvas($('#rvCanvas'));
const rvMass = $('#rvMass');
const rvInclination = $('#rvInclination');
let rvT = 0;
function drawRV() {
  const ctx = rv.ctx, w = rv.width, h = rv.height;
  ctx.clearRect(0, 0, w, h);
  drawGrid(ctx, w, h);
  rvT += 0.012;
  const mass = Number(rvMass.value);
  const inc = Number(rvInclination.value) * Math.PI / 180;
  const amp = mass * Math.sin(inc);
  const cx = w * 0.26, cy = h * 0.45;
  const orbitR = Math.min(w, h) * 0.19;
  const angle = rvT;
  const wobble = amp * 0.9;
  const sx = cx - Math.cos(angle) * wobble;
  const sy = cy - Math.sin(angle) * wobble * 0.35;
  const px = cx + Math.cos(angle) * orbitR;
  const py = cy + Math.sin(angle) * orbitR * 0.55;
  ctx.strokeStyle = 'rgba(255,255,255,0.22)'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.ellipse(cx, cy, orbitR, orbitR * 0.55, 0, 0, Math.PI * 2); ctx.stroke();
  ctx.fillStyle = 'rgba(255,255,255,0.18)'; ctx.beginPath(); ctx.arc(cx, cy, 4, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#ffd166'; ctx.shadowColor = '#ffd166'; ctx.shadowBlur = 25; ctx.beginPath(); ctx.arc(sx, sy, 23, 0, Math.PI * 2); ctx.fill(); ctx.shadowBlur = 0;
  ctx.fillStyle = '#65e7ff'; ctx.beginPath(); ctx.arc(px, py, 9, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = 'rgba(255,255,255,0.24)'; ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(px, py); ctx.stroke();

  const gx = w * 0.5, gy = h * 0.16, gw = w * 0.43, gh = h * 0.58;
  ctx.fillStyle = 'rgba(0,0,0,0.18)'; ctx.strokeStyle = 'rgba(255,255,255,0.16)';
  roundRect(ctx, gx, gy, gw, gh, 16); ctx.fill(); ctx.stroke();
  ctx.fillStyle = 'rgba(255,255,255,0.55)'; ctx.font = '13px JetBrains Mono'; ctx.fillText('stellar radial velocity', gx + 18, gy + 28);
  ctx.strokeStyle = 'rgba(255,255,255,0.16)';
  ctx.beginPath(); ctx.moveTo(gx + 26, gy + gh/2); ctx.lineTo(gx + gw - 20, gy + gh/2); ctx.stroke();
  ctx.strokeStyle = '#9b7cff'; ctx.lineWidth = 3; ctx.beginPath();
  for (let i = 0; i <= 260; i++) {
    const x = gx + 32 + i * (gw - 64) / 260;
    const y = gy + gh/2 - Math.sin(i/260 * Math.PI * 4 + rvT) * amp * 6;
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.stroke();
  ctx.fillStyle = '#f7fbff'; ctx.font = '14px Inter'; ctx.fillText(`amplitude ∝ Mₚ sin i = ${amp.toFixed(1)}`, gx + 18, gy + gh - 18);
  requestAnimationFrame(drawRV);
}

// Microlensing simulator
const lens = setupCanvas($('#lensCanvas'));
const lensAlign = $('#lensAlign');
let lensT = 0;
function drawLens() {
  const ctx = lens.ctx, w = lens.width, h = lens.height;
  ctx.clearRect(0, 0, w, h);
  drawGrid(ctx, w, h);
  lensT += 0.008;
  const a = Number(lensAlign.value);
  const sourceX = w * 0.22, sourceY = h * 0.42;
  const lensX = w * 0.34 + Math.sin(lensT) * 70, lensY = h * 0.42 + Math.cos(lensT * .7) * 20;
  ctx.strokeStyle = 'rgba(101,231,255,0.25)'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(sourceX, sourceY); ctx.quadraticCurveTo(w * 0.35, sourceY - 75, w * 0.47, sourceY); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(sourceX, sourceY); ctx.quadraticCurveTo(w * 0.35, sourceY + 75, w * 0.47, sourceY); ctx.stroke();
  ctx.fillStyle = '#65e7ff'; ctx.shadowColor = '#65e7ff'; ctx.shadowBlur = 18; ctx.beginPath(); ctx.arc(sourceX, sourceY, 12, 0, Math.PI*2); ctx.fill(); ctx.shadowBlur = 0;
  ctx.fillStyle = '#ffd166'; ctx.shadowColor = '#ffd166'; ctx.shadowBlur = 24; ctx.beginPath(); ctx.arc(lensX, lensY, 18, 0, Math.PI*2); ctx.fill(); ctx.shadowBlur = 0;
  ctx.fillStyle = '#ff6b9c'; ctx.beginPath(); ctx.arc(lensX + 36, lensY - 17, 6, 0, Math.PI*2); ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,0.72)'; ctx.font = '13px JetBrains Mono'; ctx.fillText('background star', sourceX - 48, sourceY + 40); ctx.fillText('lens + planet', lensX - 36, lensY - 34);

  const gx = w * 0.5, gy = h * 0.16, gw = w * 0.43, gh = h * 0.58;
  ctx.fillStyle = 'rgba(0,0,0,0.18)'; ctx.strokeStyle = 'rgba(255,255,255,0.16)';
  roundRect(ctx, gx, gy, gw, gh, 16); ctx.fill(); ctx.stroke();
  ctx.fillStyle = 'rgba(255,255,255,0.55)'; ctx.font = '13px JetBrains Mono'; ctx.fillText('microlensing light curve', gx + 18, gy + 28);
  ctx.strokeStyle = '#65e7ff'; ctx.lineWidth = 3; ctx.beginPath();
  for (let i = 0; i <= 260; i++) {
    const t = (i - 130) / 52;
    const u = Math.sqrt((t * t) + (1.15 - a/11) ** 2);
    const A = (u*u + 2) / (u * Math.sqrt(u*u + 4));
    const bump = Math.exp(-((t - 0.75) ** 2) / 0.018) * 0.25;
    const x = gx + 30 + i * (gw - 60) / 260;
    const y = gy + gh - 42 - (A - 1 + bump) * 85;
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.stroke();
  ctx.fillStyle = '#f7fbff'; ctx.font = '14px Inter'; ctx.fillText('planetary anomaly = short extra bump', gx + 18, gy + gh - 16);
  requestAnimationFrame(drawLens);
}

function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

drawTransit();
drawRV();
drawLens();
