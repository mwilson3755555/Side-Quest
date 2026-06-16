function acceptQuest(card, name) {
  const btn = card.querySelector('.btn-accept');
  if (btn.textContent === 'ACCEPTED ✓') return;
  btn.textContent = 'ACCEPTED ✓';
  btn.style.opacity = '0.6';
  btn.style.cursor = 'default';
  showToast(`Quest accepted: ${name} (+XP incoming!)`);
}
const randomQuests = [
  { name: "The Selfie Dare", desc: "Get a selfie with someone wearing the same colour top as you.", xp: 120, icon: "🤳" },
  { name: "Trivia Hustle", desc: "Join a pub quiz mid-round and get at least one question right.", xp: 200, icon: "🧠" },
  // ...more quests
];

function rollQuest() {
  const q = randomQuests[Math.floor(Math.random() * randomQuests.length)];
  const card = document.createElement('div');
  card.className = 'quest-card green';
  card.innerHTML = `
    <div class="quest-title">${q.name}</div>
    <div class="quest-desc">${q.desc}</div>
    <div class="quest-xp">⚡ +${q.xp} XP</div>
  `;
  document.querySelector('.filter-tabs').insertAdjacentElement('afterend', card);
}
function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toast-text').textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}
