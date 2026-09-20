const ZONES = [
  {
    id: 'shore', name: 'Sunny Shore', icon: '🏖️', color: '#ff795f', unlock: 0, x: 35, y: 73,
    description: 'Easy everyday words', restored: 'The beach is bright and breezy again!',
    words: [
      ['cat', '🐱', 'A small pet that says meow.', 'A kitten skips onto the sand!'],
      ['dog', '🐶', 'A friendly pet that can bark.', 'A puppy finds its favourite ball!'],
      ['sun', '☀️', 'It shines brightly in the sky.', 'Warm sunshine fills the beach!'],
      ['hat', '🧢', 'You wear it on your head.', 'Pip puts on a very smart hat!'],
      ['boat', '⛵', 'It carries people across water.', 'A little boat sails into the bay!'],
      ['fish', '🐠', 'It swims and lives in water.', 'Colourful fish return to the reef!'],
      ['crab', '🦀', 'It walks sideways on the beach.', 'A red crab dances by the rocks!'],
      ['shell', '🐚', 'You might find one in the sand.', 'A pearly shell begins to sparkle!'],
      ['kite', '🪁', 'It flies at the end of a string.', 'A rainbow kite swoops through the sky!'],
      ['star', '⭐', 'It twinkles in the night sky.', 'A golden star lights the way!'],
      ['duck', '🦆', 'A bird that likes to swim.', 'A duck paddles into the lagoon!'],
      ['frog', '🐸', 'A green animal that can jump.', 'A little frog leaps onto a lily pad!']
    ]
  },
  {
    id: 'forest', name: 'Whispering Woods', icon: '🌳', color: '#27a86f', unlock: 5, x: 47, y: 47,
    description: 'Nature and home words', restored: 'The trees are whispering happy words again!',
    words: [
      ['tree', '🌳', 'It has a trunk, branches and leaves.', 'A sleepy tree stretches its branches!'],
      ['bird', '🐦', 'It has feathers, wings and a beak.', 'A blue bird sings a brand-new song!'],
      ['green', '🟢', 'The colour of fresh grass.', 'The forest turns bright and green!'],
      ['plant', '🌱', 'It grows in soil and needs water.', 'A tiny seedling pops out of the ground!'],
      ['river', '🏞️', 'Water that flows across the land.', 'The river bubbles back to life!'],
      ['apple', '🍎', 'A crunchy red or green fruit.', 'Juicy apples appear in the trees!'],
      ['horse', '🐴', 'A large animal people can ride.', 'A horse trots along the woodland path!'],
      ['mouse', '🐭', 'A tiny animal with a long tail.', 'A little mouse finds its cosy home!'],
      ['house', '🏠', 'A building where people live.', 'The forest cottage lights glow warmly!'],
      ['chair', '🪑', 'You sit on it.', 'A woodland reading chair appears!'],
      ['clock', '🕰️', 'It tells us the time.', 'The old clock begins to tick again!'],
      ['brush', '🪥', 'You use one to clean or tidy.', 'Pip brushes every feather neatly!']
    ]
  },
  {
    id: 'peaks', name: 'Cloudy Peaks', icon: '⛰️', color: '#4d8edb', unlock: 14, x: 67, y: 24,
    description: 'Adventure words', restored: 'The mountain path is open once more!',
    words: [
      ['cloud', '☁️', 'A white or grey shape in the sky.', 'A fluffy cloud reveals the path!'],
      ['storm', '⛈️', 'Wild weather with wind and rain.', 'The storm rumbles safely away!'],
      ['stone', '🪨', 'A small piece of rock.', 'Stepping stones rise across the stream!'],
      ['eagle', '🦅', 'A large bird that flies very high.', 'An eagle circles above the mountain!'],
      ['trail', '🥾', 'A path through the countryside.', 'A winding trail glows ahead!'],
      ['water', '💧', 'We drink it when we are thirsty.', 'Fresh water rushes down the waterfall!'],
      ['light', '🔦', 'It helps us see in the dark.', 'A lantern lights the rocky path!'],
      ['snow', '❄️', 'Soft white flakes from winter clouds.', 'Snowflakes twirl around the peak!'],
      ['boots', '🥾', 'Strong shoes for walking outside.', 'Magic boots march up the mountain!'],
      ['goat', '🐐', 'An animal that climbs rocky hills.', 'A mountain goat shows Pip the way!'],
      ['wind', '🌬️', 'Moving air that you can feel.', 'The wind spins a row of pinwheels!'],
      ['climb', '🧗', 'To move upwards using hands and feet.', 'A rope ladder drops from the cliff!']
    ]
  },
  {
    id: 'castle', name: 'Storybook Castle', icon: '🏰', color: '#925bc6', unlock: 25, x: 87, y: 18,
    description: 'Magical spelling', restored: 'Music and laughter fill the castle halls!',
    words: [
      ['queen', '👑', 'A woman who rules a kingdom.', 'The queen returns to her golden throne!'],
      ['king', '🤴', 'A man who rules a kingdom.', 'The king opens the grand castle gates!'],
      ['magic', '🪄', 'A mysterious and wonderful power.', 'A swirl of magic fills the courtyard!'],
      ['dragon', '🐉', 'A legendary creature that may breathe fire.', 'The friendly dragon lights the lanterns!'],
      ['crown', '👑', 'A royal headpiece.', 'The lost crown sparkles once more!'],
      ['tower', '🗼', 'A tall, narrow part of a building.', 'The tallest tower rings its bell!'],
      ['sword', '⚔️', 'A long weapon from old stories.', 'The silver sword becomes a shining key!'],
      ['knight', '🛡️', 'A brave armoured hero in old stories.', 'The knight raises a colourful flag!'],
      ['royal', '🏰', 'Connected with a king or queen.', 'The royal banners dance in the breeze!'],
      ['guard', '💂', 'Someone who keeps a place safe.', 'The guard welcomes everyone inside!'],
      ['feast', '🍽️', 'A large and special meal.', 'A wonderful feast appears in the hall!'],
      ['dream', '💭', 'A story your mind makes while sleeping.', 'A happy dream floats across the moon!']
    ]
  },
  {
    id: 'cave', name: 'Crystal Cave', icon: '💎', color: '#f09b32', unlock: 38, x: 84, y: 61,
    description: 'Champion words', restored: 'Every crystal shines with a rescued word!',
    words: [
      ['crystal', '💎', 'A clear, sparkling kind of stone.', 'A giant crystal glows turquoise!'],
      ['treasure', '🪙', 'Something precious hidden away.', 'The treasure chest clicks open!'],
      ['diamond', '💠', 'A very hard and valuable stone.', 'A diamond lights the deepest tunnel!'],
      ['lantern', '🏮', 'A light protected by a case.', 'Golden lanterns glow along the walls!'],
      ['shadow', '👤', 'A dark shape made when light is blocked.', 'The shadows turn into friendly shapes!'],
      ['sparkle', '✨', 'To shine with tiny flashes of light.', 'The whole cave begins to sparkle!'],
      ['secret', '🤫', 'Something kept hidden from others.', 'A secret doorway slides open!'],
      ['journey', '🗺️', 'A trip from one place to another.', 'A map reveals the next journey!'],
      ['friend', '🤝', 'A person you know and like.', 'All the island friends cheer together!'],
      ['brave', '🦁', 'Ready to face something difficult.', 'Pip feels brave enough to fly ahead!'],
      ['bright', '🌟', 'Giving out lots of light.', 'The crystals glow clear and bright!'],
      ['adventure', '🧭', 'An exciting and unusual experience.', 'A new adventure appears beyond the island!']
    ]
  }
].map(zone => ({
  ...zone,
  words: zone.words.map(([word, emoji, clue, action]) => ({ word, emoji, clue, action, zone: zone.id }))
}));

const STORAGE_KEY = 'word-rescue-island-v2';
const DEFAULT_STATE = {
  name: 'Explorer', accent: 'en-GB', sound: true, seenIntro: false,
  stars: 0, gems: 0, mastered: {}, zonePlays: {}, customWords: [], lastPlayed: null, streakDays: 0
};

const $ = selector => document.querySelector(selector);
const elements = {
  mapScreen: $('#mapScreen'), questScreen: $('#questScreen'), zonePins: $('#zonePins'),
  welcomeModal: $('#welcomeModal'), settingsModal: $('#settingsModal'), completeModal: $('#completeModal'),
  starCount: $('#starCount'), gemCount: $('#gemCount'), mapGreeting: $('#mapGreeting'),
  guideTitle: $('#guideTitle'), guideText: $('#guideText'), customPracticeButton: $('#customPracticeButton'),
  soundButton: $('#soundButton'), settingsButton: $('#settingsButton'), homeButton: $('#homeButton'),
  questIcon: $('#questIcon'), questWorld: $('#questWorld'), questionNumber: $('#questionNumber'),
  questProgress: $('#questProgress'), pictureClue: $('#pictureClue'), clueText: $('#clueText'),
  letterSlots: $('#letterSlots'), letterTray: $('#letterTray'), hintLine: $('#hintLine'),
  checkButton: $('#checkButton'), clearButton: $('#clearButton'), listenButton: $('#listenButton'),
  leaveQuestButton: $('#leaveQuestButton'), speechBubble: $('#speechBubble'), comboBadge: $('#comboBadge'),
  questRescued: $('#questRescued'), rescueDots: $('#rescueDots'), chest: $('#chest'),
  successBanner: $('#successBanner'), successWord: $('#successWord'), successAction: $('#successAction'),
  nextButton: $('#nextButton'), confetti: $('#confetti'), difficultyLabel: $('#difficultyLabel'),
  playerNameInput: $('#playerNameInput'), startAdventureButton: $('#startAdventureButton'),
  closeSettingsButton: $('#closeSettingsButton'), settingsName: $('#settingsName'),
  voiceAccent: $('#voiceAccent'), customWordsInput: $('#customWordsInput'),
  saveSettingsButton: $('#saveSettingsButton'), resetProgressButton: $('#resetProgressButton'),
  completeTitle: $('#completeTitle'), completeMessage: $('#completeMessage'),
  earnedStars: $('#earnedStars'), earnedGems: $('#earnedGems'), bestCombo: $('#bestCombo'),
  replayButton: $('#replayButton'), returnMapButton: $('#returnMapButton'), toast: $('#toast')
};

let state = loadState();
let quest = null;
let selectedTileIds = [];
let audioContext = null;
let toastTimer = null;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    return saved ? { ...DEFAULT_STATE, ...saved, mastered: saved.mastered || {}, zonePlays: saved.zonePlays || {} } : { ...DEFAULT_STATE };
  } catch {
    return { ...DEFAULT_STATE };
  }
}

function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch { /* Private browsing can block storage. */ }
}

function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function scramble(word) {
  const chars = word.toUpperCase().split('');
  let shuffled = shuffle(chars);
  let attempts = 0;
  while (shuffled.join('') === chars.join('') && attempts < 8) {
    shuffled = shuffle(chars);
    attempts += 1;
  }
  if (shuffled.join('') === chars.join('') && chars.length > 1) shuffled = [...chars.slice(1), chars[0]];
  return shuffled.map((char, index) => ({ id: `${index}-${char}`, char }));
}

function difficultyFor(word) {
  if (word.length <= 4) return 'WARM-UP WORD';
  if (word.length <= 6) return 'TRAIL WORD';
  return 'CHAMPION WORD';
}

function pickWords(zone) {
  const fresh = shuffle(zone.words.filter(item => !state.mastered[item.word]));
  const practised = shuffle(zone.words.filter(item => state.mastered[item.word]));
  return [...fresh, ...practised].slice(0, 5);
}

function customZone() {
  return {
    id: 'custom', name: 'My Word Pack', icon: '✨', color: '#ff795f', unlock: 0,
    restored: 'Your special school words are shining!',
    words: state.customWords.map(word => ({
      word, emoji: '✨', clue: 'Listen carefully and build your special word.',
      action: `You rescued your special word: ${word}!`, zone: 'custom'
    }))
  };
}

function renderMap() {
  elements.starCount.textContent = state.stars;
  elements.gemCount.textContent = state.gems;
  elements.mapGreeting.textContent = `Hello, ${state.name || 'Explorer'}!`;
  elements.soundButton.textContent = state.sound ? '🔊' : '🔇';
  elements.soundButton.setAttribute('aria-label', state.sound ? 'Turn sound off' : 'Turn sound on');
  elements.zonePins.innerHTML = '';

  ZONES.forEach(zone => {
    const locked = state.stars < zone.unlock;
    const mastered = zone.words.filter(item => state.mastered[item.word]).length;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `zone-pin${locked ? ' locked' : ''}`;
    button.dataset.zone = zone.id;
    button.style.left = `${zone.x}%`;
    button.style.top = `${zone.y}%`;
    button.style.setProperty('--zone', zone.color);
    button.disabled = locked;
    button.setAttribute('aria-label', locked ? `${zone.name}, locked. Rescue ${zone.unlock - state.stars} more words.` : `Play ${zone.name}. ${mastered} of ${zone.words.length} words rescued.`);
    button.innerHTML = `<span class="pin-bubble"><span>${locked ? '🔒' : zone.icon}</span></span><span class="pin-label"><strong>${zone.name}</strong><small>${locked ? `${zone.unlock - state.stars} more ⭐` : `${mastered}/${zone.words.length} rescued`}</small></span>`;
    if (!locked) button.addEventListener('click', () => startQuest(zone));
    elements.zonePins.appendChild(button);
  });

  const nextZone = ZONES.find(zone => state.stars < zone.unlock);
  if (state.stars === 0) {
    elements.guideTitle.textContent = 'Pip has a message!';
    elements.guideText.textContent = 'Begin at Sunny Shore and rescue your first five words.';
  } else if (nextZone) {
    elements.guideTitle.textContent = `${state.stars} words rescued — wonderful!`;
    elements.guideText.textContent = `Rescue ${nextZone.unlock - state.stars} more to open ${nextZone.name}.`;
  } else {
    elements.guideTitle.textContent = 'The whole island is open!';
    elements.guideText.textContent = 'Replay any place to turn rescued words into champion words.';
  }
  elements.customPracticeButton.classList.toggle('hidden', state.customWords.length < 5);
}

function showScreen(name) {
  elements.mapScreen.classList.toggle('active', name === 'map');
  elements.questScreen.classList.toggle('active', name === 'quest');
  if (name === 'map') renderMap();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function startQuest(zone) {
  const words = pickWords(zone);
  if (words.length < 5) {
    showToast('Add at least five special words first.');
    return;
  }
  quest = {
    zone, words, index: 0, rescued: 0, newStars: 0, earnedGems: 0,
    combo: 0, bestCombo: 0, wrongCount: 0, firstTry: true, tiles: [], locked: false
  };
  elements.questIcon.textContent = zone.icon;
  elements.questWorld.textContent = zone.name.toUpperCase();
  elements.rescueDots.innerHTML = words.map(() => '<i></i>').join('');
  showScreen('quest');
  loadWord();
}

function loadWord() {
  if (!quest) return;
  const item = quest.words[quest.index];
  quest.tiles = scramble(item.word);
  quest.wrongCount = 0;
  quest.firstTry = true;
  quest.locked = false;
  selectedTileIds = [];

  elements.pictureClue.textContent = item.emoji;
  elements.clueText.textContent = item.clue;
  elements.difficultyLabel.textContent = difficultyFor(item.word);
  elements.questionNumber.textContent = `${quest.index + 1} of ${quest.words.length}`;
  elements.questProgress.style.width = `${(quest.index / quest.words.length) * 100}%`;
  elements.questRescued.textContent = quest.rescued;
  elements.hintLine.textContent = 'Tap the letters in the right order.';
  elements.hintLine.className = 'hint-line';
  elements.successBanner.classList.add('hidden');
  elements.speechBubble.textContent = quest.index === 0 ? 'Listen carefully, then build the word!' : encouragement();
  elements.comboBadge.classList.toggle('hidden', quest.combo < 2);
  if (quest.combo >= 2) elements.comboBadge.innerHTML = `🔥 <strong>${quest.combo}</strong> word streak!`;
  renderLetters();
  setTimeout(() => speakWord(item.word), 350);
}

function encouragement() {
  const lines = ['You are doing brilliantly!', 'Your spelling magic is working!', 'The island is waking up!', 'Ready for the next rescue?'];
  return lines[Math.floor(Math.random() * lines.length)];
}

function renderLetters() {
  if (!quest) return;
  const item = quest.words[quest.index];
  elements.letterSlots.innerHTML = '';
  item.word.split('').forEach((_, index) => {
    const tileId = selectedTileIds[index];
    const tile = quest.tiles.find(candidate => candidate.id === tileId);
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `letter-slot${tile ? ' filled' : ''}`;
    button.textContent = tile?.char || '';
    button.setAttribute('aria-label', tile ? `Remove letter ${tile.char}` : `Empty letter ${index + 1}`);
    button.disabled = !tile || quest.locked;
    if (tile) button.addEventListener('click', () => removeTile(index));
    elements.letterSlots.appendChild(button);
  });

  elements.letterTray.innerHTML = '';
  quest.tiles.forEach(tile => {
    const used = selectedTileIds.includes(tile.id);
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `letter-tile${used ? ' used' : ''}`;
    button.textContent = tile.char;
    button.disabled = used || quest.locked;
    button.setAttribute('aria-label', used ? `${tile.char}, used` : `Add letter ${tile.char}`);
    button.addEventListener('click', () => addTile(tile.id));
    elements.letterTray.appendChild(button);
  });
  elements.checkButton.disabled = selectedTileIds.length !== item.word.length || quest.locked;
  elements.clearButton.disabled = !selectedTileIds.length || quest.locked;
}

function addTile(id) {
  if (!quest || quest.locked || selectedTileIds.includes(id)) return;
  selectedTileIds.push(id);
  playTone(410 + selectedTileIds.length * 35, .05, 'sine');
  renderLetters();
}

function removeTile(index) {
  if (!quest || quest.locked) return;
  selectedTileIds.splice(index, 1);
  playTone(300, .04, 'sine');
  renderLetters();
}

function clearLetters() {
  if (!quest || quest.locked) return;
  selectedTileIds = [];
  renderLetters();
}

function builtWord() {
  if (!quest) return '';
  return selectedTileIds.map(id => quest.tiles.find(tile => tile.id === id)?.char || '').join('').toLowerCase();
}

function checkWord() {
  if (!quest || quest.locked) return;
  const item = quest.words[quest.index];
  if (builtWord() === item.word.toLowerCase()) rescueWord(item);
  else missWord(item);
}

function missWord(item) {
  if (!quest) return;
  quest.wrongCount += 1;
  quest.firstTry = false;
  quest.combo = 0;
  playTone(180, .15, 'triangle');
  elements.hintLine.className = 'hint-line error';
  if (quest.wrongCount === 1) {
    elements.hintLine.textContent = `Nearly! The word starts with “${item.word[0].toUpperCase()}”. Try once more.`;
    elements.speechBubble.textContent = 'That was a brave try. Listen again!';
    speakWord(item.word);
  } else {
    elements.hintLine.textContent = `Let’s rebuild it. Listen for each sound in “${item.word}”.`;
    elements.speechBubble.textContent = 'No rush — every try helps your brain grow!';
    const firstTile = quest.tiles.find(tile => tile.char.toLowerCase() === item.word[0].toLowerCase() && !selectedTileIds.includes(tile.id));
    selectedTileIds = firstTile ? [firstTile.id] : [];
    speakWord(item.word);
    renderLetters();
  }
}

function rescueWord(item) {
  if (!quest) return;
  quest.locked = true;
  quest.rescued += 1;
  quest.combo += 1;
  quest.bestCombo = Math.max(quest.bestCombo, quest.combo);
  const wasNew = !state.mastered[item.word];
  state.mastered[item.word] = Math.min(3, (state.mastered[item.word] || 0) + 1);
  if (wasNew) {
    state.stars += 1;
    quest.newStars += 1;
  }
  const gems = quest.firstTry ? 2 : 1;
  state.gems += gems;
  quest.earnedGems += gems;
  saveState();
  renderLetters();

  elements.starCount.textContent = state.stars;
  elements.gemCount.textContent = state.gems;
  elements.hintLine.textContent = quest.firstTry ? 'Perfect spelling — first try!' : 'You found it — excellent perseverance!';
  elements.hintLine.className = 'hint-line good';
  elements.successWord.textContent = item.word.toUpperCase();
  elements.successAction.textContent = item.action;
  elements.successBanner.classList.remove('hidden');
  elements.questRescued.textContent = quest.rescued;
  [...elements.rescueDots.children].forEach((dot, index) => dot.classList.toggle('done', index < quest.rescued));
  elements.chest.classList.remove('bump');
  requestAnimationFrame(() => elements.chest.classList.add('bump'));
  elements.comboBadge.classList.toggle('hidden', quest.combo < 2);
  if (quest.combo >= 2) elements.comboBadge.innerHTML = `🔥 <strong>${quest.combo}</strong> word streak!`;
  elements.speechBubble.textContent = quest.firstTry ? 'First try! Spectacular spelling!' : 'You kept going and rescued it!';
  elements.nextButton.textContent = quest.index === quest.words.length - 1 ? 'Open treasure →' : 'Next word →';
  playSuccessSound();
  burstConfetti(quest.firstTry ? 24 : 14);
}

function nextWord() {
  if (!quest) return;
  if (quest.index < quest.words.length - 1) {
    quest.index += 1;
    loadWord();
  } else completeQuest();
}

function completeQuest() {
  if (!quest) return;
  state.zonePlays[quest.zone.id] = (state.zonePlays[quest.zone.id] || 0) + 1;
  updateDailyStreak();
  saveState();
  elements.completeTitle.textContent = `${quest.rescued} words rescued!`;
  elements.completeMessage.textContent = quest.zone.restored;
  elements.earnedStars.textContent = `+${quest.newStars}`;
  elements.earnedGems.textContent = `+${quest.earnedGems}`;
  elements.bestCombo.textContent = quest.bestCombo;
  elements.completeModal.classList.remove('hidden');
  burstConfetti(45);
  playFanfare();
}

function updateDailyStreak() {
  const today = new Date();
  const key = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  if (state.lastPlayed === key) return;
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  const yesterdayKey = `${yesterday.getFullYear()}-${yesterday.getMonth() + 1}-${yesterday.getDate()}`;
  state.streakDays = state.lastPlayed === yesterdayKey ? state.streakDays + 1 : 1;
  state.lastPlayed = key;
}

function returnToMap() {
  elements.completeModal.classList.add('hidden');
  elements.successBanner.classList.add('hidden');
  quest = null;
  showScreen('map');
}

function replayQuest() {
  if (!quest) return;
  elements.completeModal.classList.add('hidden');
  startQuest(quest.zone);
}

function speakWord(word) {
  if (!state.sound || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = state.accent;
  utterance.rate = .72;
  utterance.pitch = 1.08;
  const voices = window.speechSynthesis.getVoices();
  const exact = voices.find(voice => voice.lang === state.accent);
  const approximate = voices.find(voice => voice.lang.startsWith(state.accent.slice(0, 2)));
  if (exact || approximate) utterance.voice = exact || approximate;
  window.speechSynthesis.speak(utterance);
}

function playTone(frequency, duration, type = 'sine', delay = 0) {
  if (!state.sound) return;
  try {
    audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const start = audioContext.currentTime + delay;
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(.0001, start);
    gain.gain.exponentialRampToValueAtTime(.11, start + .015);
    gain.gain.exponentialRampToValueAtTime(.0001, start + duration);
    oscillator.connect(gain).connect(audioContext.destination);
    oscillator.start(start);
    oscillator.stop(start + duration + .02);
  } catch { /* Sound is an enhancement. */ }
}

function playSuccessSound() {
  playTone(523, .17, 'sine');
  playTone(659, .17, 'sine', .1);
  playTone(784, .25, 'sine', .2);
}

function playFanfare() {
  [523, 659, 784, 1047].forEach((note, index) => playTone(note, .28, 'triangle', index * .12));
}

function burstConfetti(amount) {
  const colors = ['#ffd85c', '#65d6a6', '#ff795f', '#66c7ef', '#925bc6'];
  elements.confetti.innerHTML = '';
  for (let i = 0; i < amount; i += 1) {
    const piece = document.createElement('i');
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[i % colors.length];
    piece.style.animationDelay = `${Math.random() * .25}s`;
    piece.style.setProperty('--drift', `${Math.random() * 160 - 80}px`);
    elements.confetti.appendChild(piece);
  }
  setTimeout(() => { elements.confetti.innerHTML = ''; }, 1600);
}

function showToast(message) {
  clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.remove('hidden');
  toastTimer = setTimeout(() => elements.toast.classList.add('hidden'), 2600);
}

function openSettings() {
  elements.settingsName.value = state.name;
  elements.voiceAccent.value = state.accent;
  elements.customWordsInput.value = state.customWords.join(', ');
  elements.settingsModal.classList.remove('hidden');
}

function parseCustomWords(value) {
  return [...new Set(value.split(/[\n,]+/).map(word => word.trim().toLowerCase()).filter(word => /^[a-z][a-z'-]{1,17}$/.test(word)))].slice(0, 40);
}

function saveSettings() {
  const name = elements.settingsName.value.trim().replace(/[^a-zA-Z '-]/g, '').slice(0, 16);
  state.name = name || 'Explorer';
  state.accent = elements.voiceAccent.value;
  state.customWords = parseCustomWords(elements.customWordsInput.value);
  saveState();
  renderMap();
  elements.settingsModal.classList.add('hidden');
  showToast(state.customWords.length ? `${state.customWords.length} school words saved.` : 'Settings saved.');
}

function resetProgress() {
  if (!window.confirm('Reset all rescued words, stars and gems? Your custom word list will stay.')) return;
  const customWords = state.customWords;
  const name = state.name;
  const accent = state.accent;
  const sound = state.sound;
  state = { ...DEFAULT_STATE, name, accent, sound, customWords, seenIntro: true };
  saveState();
  renderMap();
  elements.settingsModal.classList.add('hidden');
  showToast('The island is ready for a fresh adventure.');
}

function beginAdventure() {
  const name = elements.playerNameInput.value.trim().replace(/[^a-zA-Z '-]/g, '').slice(0, 16);
  state.name = name || state.name || 'Explorer';
  state.seenIntro = true;
  saveState();
  renderMap();
  elements.welcomeModal.classList.add('hidden');
  playTone(523, .16, 'sine');
  setTimeout(() => speakWord(`Welcome, ${state.name}`), 200);
}

function toggleSound() {
  state.sound = !state.sound;
  saveState();
  renderMap();
  if (state.sound) {
    playTone(659, .16, 'sine');
    showToast('Sound is on.');
  } else {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    showToast('Sound is off.');
  }
}

function registerGameTools() {
  const context = document.modelContext;
  if (!context?.registerTool) return;
  const signal = new AbortController().signal;
  const register = tool => {
    try { Promise.resolve(context.registerTool(tool, { signal })).catch(() => {}); } catch { /* Optional browser feature. */ }
  };
  register({
    name: 'read_word_rescue_progress',
    title: 'Read spelling adventure progress',
    description: 'Read the explorer name, rescued word total, gems, unlocked island areas, and words that need more practice. Does not change progress.',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
    annotations: { readOnlyHint: true, untrustedContentHint: true },
    execute(input) {
      if (!input || typeof input !== 'object' || Array.isArray(input) || Object.keys(input).length) throw new Error('This tool takes an empty object.');
      return {
        explorer: state.name,
        wordsRescued: state.stars,
        gems: state.gems,
        dailyStreak: state.streakDays,
        unlockedAreas: ZONES.filter(zone => state.stars >= zone.unlock).map(zone => zone.name),
        developingWords: Object.entries(state.mastered).filter(([, level]) => level < 3).map(([word]) => word)
      };
    }
  });
  register({
    name: 'open_spelling_quest',
    title: 'Open a spelling quest',
    description: 'Open one currently unlocked island area and prepare a five-word spelling quest. This changes only the visible game screen.',
    inputSchema: {
      type: 'object',
      properties: { area: { type: 'string', enum: ZONES.map(zone => zone.id), description: 'Island area identifier.' } },
      required: ['area'], additionalProperties: false
    },
    annotations: { readOnlyHint: false, destructiveHint: false, idempotentHint: true, openWorldHint: false },
    execute(input) {
      const zone = ZONES.find(item => item.id === input?.area);
      if (!zone) throw new Error('Choose a valid island area.');
      if (state.stars < zone.unlock) return { opened: false, reason: `Rescue ${zone.unlock - state.stars} more words to unlock ${zone.name}.` };
      startQuest(zone);
      return { opened: true, area: zone.name, wordCount: 5 };
    }
  });
}

elements.startAdventureButton.addEventListener('click', beginAdventure);
elements.playerNameInput.addEventListener('keydown', event => { if (event.key === 'Enter') beginAdventure(); });
elements.settingsButton.addEventListener('click', openSettings);
elements.closeSettingsButton.addEventListener('click', () => elements.settingsModal.classList.add('hidden'));
elements.saveSettingsButton.addEventListener('click', saveSettings);
elements.resetProgressButton.addEventListener('click', resetProgress);
elements.soundButton.addEventListener('click', toggleSound);
elements.homeButton.addEventListener('click', returnToMap);
elements.leaveQuestButton.addEventListener('click', returnToMap);
elements.listenButton.addEventListener('click', () => quest && speakWord(quest.words[quest.index].word));
elements.clearButton.addEventListener('click', clearLetters);
elements.checkButton.addEventListener('click', checkWord);
elements.nextButton.addEventListener('click', nextWord);
elements.returnMapButton.addEventListener('click', returnToMap);
elements.replayButton.addEventListener('click', replayQuest);
elements.customPracticeButton.addEventListener('click', () => startQuest(customZone()));

[elements.settingsModal].forEach(modal => modal.addEventListener('click', event => {
  if (event.target === modal) modal.classList.add('hidden');
}));

document.addEventListener('keydown', event => {
  if (!quest || !elements.questScreen.classList.contains('active') || quest.locked) return;
  if (event.key === 'Backspace') { removeTile(selectedTileIds.length - 1); event.preventDefault(); return; }
  if (event.key === 'Enter' && !elements.checkButton.disabled) { checkWord(); return; }
  const key = event.key.toUpperCase();
  const tile = quest.tiles.find(item => item.char === key && !selectedTileIds.includes(item.id));
  if (tile) addTile(tile.id);
});

if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
}

renderMap();
registerGameTools();
elements.playerNameInput.value = state.name === 'Explorer' ? '' : state.name;
if (state.seenIntro) elements.welcomeModal.classList.add('hidden');
