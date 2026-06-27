// GLP-1 MUSCLE DEFENDER - GAME LOGIC

// Game Questions Database (7 Questions Sequential Flow)
const questions = [
    {
        text: "מה מההיגדים הבאים לגבי הקשר בין בריאות השריר לסינדרום המטבולי נכון?",
        options: [
            "א. בממוצע, לחולי סוכרת מסת שריר דומה לשל האוכלוסיה הכללית",
            "ב. טיפול ב-GLP1-RA כרוך באיבוד מסת שריר כחלק מהירידה במשקל",
            "ג. לא ניתן למנוע איבוד מסת שריר משני לטיפול הנ\"ל",
            "ד. בקשישים אין משמעות קלינית לירידה במסת השריר"
        ],
        correctIndex: 1, // Option B
        explanation: "נכון מאוד! ירידה מהירה במשקל תחת טיפול ב-GLP1-RA (כגון אוזמפיק, וויגובי) עלולה לגרור איבוד של עד 20-40% מסת שריר מכלל המשקל שיורד. לכן חשוב מאוד ללוות את הטיפול בהתערבויות מתאימות."
    },
    {
        text: "מה מהאסטרטגיות הבאות יכולה למנוע איבוד מסת שריר במקביל לירידה במשקל?",
        options: [
            "א. צריכת חלבון נאותה",
            "ב. אימוני כוח",
            "ג. התערבויות פרמקולוגיות",
            "ד. כל התשובות נכונות"
        ],
        correctIndex: 3, // Option D
        explanation: "מדויק! שילוב של צריכת חלבון מספקת, אימוני התנגדות (כוח) סדירים ולפעמים טיפולים רפואיים משלימים, מהווים יחד את הנוסחה המנצחת להגנה על השריר בזמן הרזיה."
    },
    {
        text: "מהי כמות החלבון היומית המומלצת למניעת איבוד שריר בזמן טיפול ב-GLP1-RA?",
        options: [
            "א. 0.8 גרם לכל קילוגרם משקל גוף (כמו האוכלוסיה הכללית)",
            "ב. כ-1.2 עד 1.5 גרם לכל קילוגרם משקל גוף",
            "ג. אין צורך בחלבון כלל, פחמימות בלבד מונעות פירוק שריר",
            "ד. מספיק לאכול ארוחת חלבון אחת לשבוע"
        ],
        correctIndex: 1, // Option B
        explanation: "תשובה מצוינת! בשל המאזן הקלורי השלילי, מומלץ להעלות את כמות החלבון לכ-1.2-1.5 גרם לקילוגרם משקל גוף ביום כדי לתמוך בבניית השריר ומניעת שחיקתו."
    },
    {
        text: "איזה סוג של אימון גופני הוא החיוני ביותר להגנה על השריר מפני פירוק בעקבות ירידה מהירה במשקל?",
        options: [
            "א. אימוני התנגדות וכוח (משקולות, רצועות או משקל גוף) לפחות פעמיים בשבוע",
            "ב. ריצות מרתון ואימוני אירובי ממושכים ללא עבודה על כוח",
            "ג. מתיחות קלות בלבד פעם בשבועיים",
            "ד. הליכה של 5 דקות בלבד פעם ביומיים"
        ],
        correctIndex: 0, // Option A
        explanation: "מעולה! אימוני התנגדות מספקים גירוי מכני ישיר לשרירים המאותת לגוף שהם חיוניים, ובכך מונעים מהגוף להשתמש ברקמת השריר לצורכי אנרגיה."
    },
    {
        text: "הטיפול במונג'רו בחולי סוכרת הביא במקביל לירידה בכל הבאים פרט ל:",
        options: [
            "א. לחץ דם דיאסטולי",
            "ב. LDL (כולסטרול)",
            "ג. HDL (כולסטרול)",
            "ד. לחץ דם סיסטולי"
        ],
        correctIndex: 2, // Option C (HDL)
        difficulty: "זהירות, שאלה של אנדוקרינולוגים 🔬",
        explanation: "בינגו קליני! 🎯 מונג'רו הוא טיפול עוצמתי - הוא מפחית סוכר, משקל, לחצי דם (סיסטולי ודיאסטולי) ואת הכולסטרול ה'רע' (LDL). אבל ה-HDL? אותו הוא דווקא *מעלה* (כי זה הכולסטרול ה'טוב' שמגן על הלב)! כי בחיים תמיד טוב שיהיה משהו שעולה למעלה. 😉"
    },
    {
        text: "בהשוואה (בלתי ישירה) של מחקרי SURPASS של מונג'רו בחולי סוכרת לעומת מחקרי SURMOUNT של מונג'רו באנשים החיים עם השמנה ללא סוכרת, הירידה במשקל בקרב חולי הסוכרת היתה:",
        options: [
            "א. קטנה יותר",
            "ב. גדולה יותר",
            "ג. זהה",
            "ד. לא ניתן להשוות"
        ],
        correctIndex: 0, // Option A
        difficulty: "קושי: פרופסור מטבולי 🧠",
        explanation: "פענחת את הקוד! 🧬 עם סוכרת סוג 2, הגוף קצת יותר 'עקשן' לגבי ירידה במשקל בשל עמידות גבוהה לאינסולין, שינויים מטבוליים מורכבים והיסטוריה הורמונלית. לכן הירידה במחקרי SURPASS (חולי סוכרת) היתה קטנה יותר מאשר במחקרי SURMOUNT (ללא סוכרת). ועדיין - מדובר בירידת משקל מרשימה ומשנת חיים!"
    },
    {
        text: "מחקר SURMOUNT-OSA מצא שיפור ב-Apnea Hypopnea Index (מדד דום נשימה בשינה) בקרב איזו אוכלוסייה?",
        options: [
            "א. שניהם (אנשים שנעזרו ושלא נעזרו במכשיר PAP)",
            "ב. אנשים אשר נעזרו במכשיר PAP בלבד",
            "ג. אנשים אשר לא נעזרו במכשיר PAP בלבד",
            "ד. אף אחד מהנ\"ל"
        ],
        correctIndex: 0, // Option A
        difficulty: "שאלה למומחי שינה 😴",
        explanation: "לילה שקט ועמוק! 😴 מחקר SURMOUNT-OSA ההיסטורי שפורסם ב-NEJM 2024 הוכיח כי טיפול במונג'רו הביא לשיפור דרמטי ב-AHI (הפחתת דום נשימה בשינה) בשתי האוכלוסיות - גם אצל אלו המשתמשים ב-PAP וגם אצל אלו שלא משתמשים! ירידת השומן באיזור הצוואר מקלה על המעבר, ומאפשרת שינה מתוקה לכולם."
    }
];

// Avatar config (Emojis & reactions)
const avatarEmojis = {
    protein: { normal: '🥩', correct: '😄', incorrect: '😅' },
    lift: { normal: '🏋️‍♂️', correct: '💪', incorrect: '😰' },
    science: { normal: '🔬', correct: '🧠', incorrect: '🤦‍♂️' }
};

const avatarNames = {
    protein: 'אלוף החלבון',
    lift: 'מאמנת הכוח',
    science: 'חוקר המטבוליזם'
};

// Game State variables
let state = {
    muscleMass: 100,
    fatLost: 0,
    shieldPower: 0,
    currentQuestionIndex: 0,
    selectedAvatar: 'protein',
    answersCorrect: 0
};

// Sound synthesizer using Web Audio API
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(type) {
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    const now = audioCtx.currentTime;
    
    if (type === 'success') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.setValueAtTime(659.25, now + 0.1);
        gainNode.gain.setValueAtTime(0.15, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
    } else if (type === 'error') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.exponentialRampToValueAtTime(80, now + 0.4);
        gainNode.gain.setValueAtTime(0.15, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
        osc.start(now);
        osc.stop(now + 0.4);
    } else if (type === 'complete') {
        osc.type = 'sine';
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, idx) => {
            const tempOsc = audioCtx.createOscillator();
            const tempGain = audioCtx.createGain();
            tempOsc.connect(tempGain);
            tempGain.connect(audioCtx.destination);
            tempOsc.frequency.setValueAtTime(freq, now + idx * 0.12);
            tempGain.gain.setValueAtTime(0.12, now + idx * 0.12);
            tempGain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.12 + 0.3);
            tempOsc.start(now + idx * 0.12);
            tempOsc.stop(now + idx * 0.12 + 0.35);
        });
    }
}

// UI Elements Cache
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const finishScreen = document.getElementById("finish-screen");
const dashboard = document.getElementById("dashboard");

const muscleBar = document.getElementById("muscle-bar");
const muscleVal = document.getElementById("muscle-val");
const fatBar = document.getElementById("fat-bar");
const fatVal = document.getElementById("fat-val");
const shieldBar = document.getElementById("shield-bar");
const shieldVal = document.getElementById("shield-val");

const activeAvatarEmoji = document.getElementById("active-avatar-emoji");
const activeAvatarName = document.getElementById("active-avatar-name");
const difficultyBadge = document.getElementById("difficulty-badge");

const questionText = document.getElementById("question-text");
const questionIndexBadge = document.getElementById("question-index");
const optionsContainer = document.getElementById("options-container");
const feedbackPanel = document.getElementById("feedback-panel");
const feedbackTitle = document.getElementById("feedback-title");
const feedbackDesc = document.getElementById("feedback-desc");
const feedbackIcon = document.getElementById("feedback-icon");

const infoModal = document.getElementById("info-modal");

// Confetti Particle System
const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");
let confettiActive = false;
let confettiParticles = [];
const confettiColors = ['#a855f7', '#10b981', '#f97316', '#3b82f6', '#eab308'];

function resizeCanvas() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
}

window.addEventListener('resize', resizeCanvas);

class ConfettiParticle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * -canvas.height;
        this.size = Math.random() * 8 + 4;
        this.color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        this.speedY = Math.random() * 3 + 2;
        this.speedX = Math.random() * 2 - 1;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 4 - 2;
    }
    update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.rotation += this.rotationSpeed;
        if (this.y > canvas.height) {
            this.y = -20;
            this.x = Math.random() * canvas.width;
        }
    }
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
    }
}

function startConfetti() {
    confettiActive = true;
    resizeCanvas();
    confettiParticles = Array.from({ length: 80 }, () => new ConfettiParticle());
    animateConfetti();
}

function stopConfetti() {
    confettiActive = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function animateConfetti() {
    if (!confettiActive) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiParticles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateConfetti);
}

// Update HUD / Meters
function updateHUD() {
    muscleBar.style.width = `${state.muscleMass}%`;
    muscleVal.textContent = `${state.muscleMass}%`;
    
    if (state.muscleMass < 60) {
        muscleBar.className = "progress-fill fill-orange";
        muscleVal.className = "meter-value text-orange";
    } else if (state.muscleMass < 40) {
        muscleBar.className = "progress-fill fill-red";
        muscleVal.className = "meter-value text-red";
    } else {
        muscleBar.className = "progress-fill fill-green";
        muscleVal.className = "meter-value text-green";
    }

    fatBar.style.width = `${state.fatLost}%`;
    fatVal.textContent = `${state.fatLost}%`;

    shieldBar.style.width = `${state.shieldPower}%`;
    shieldVal.textContent = `${state.shieldPower}%`;
}

// Transition helper
function showScreen(screenToShow) {
    [startScreen, gameScreen, finishScreen].forEach(s => {
        s.classList.remove('active');
        s.classList.add('hidden');
    });
    screenToShow.classList.remove('hidden');
    setTimeout(() => {
        screenToShow.classList.add('active');
    }, 50);
}

// Avatar selection UI logic
document.querySelectorAll(".avatar-card").forEach(card => {
    card.addEventListener("click", () => {
        document.querySelectorAll(".avatar-card").forEach(c => c.classList.remove("active"));
        card.classList.add("active");
        state.selectedAvatar = card.dataset.avatar;
    });
});

// START GAME
document.getElementById("start-game-btn").addEventListener("click", () => {
    // Reset state values
    state.muscleMass = 100;
    state.fatLost = 0;
    state.shieldPower = 0;
    state.currentQuestionIndex = 0;
    state.answersCorrect = 0;

    // Set Active Avatar Badge
    activeAvatarEmoji.textContent = avatarEmojis[state.selectedAvatar].normal;
    activeAvatarEmoji.className = "avatar-reaction-emoji";
    activeAvatarName.textContent = avatarNames[state.selectedAvatar];

    updateHUD();
    dashboard.classList.remove('hidden');
    showScreen(gameScreen);
    loadQuestion(0);
});

// LOAD QUESTION
function loadQuestion(index) {
    const q = questions[index];
    questionIndexBadge.textContent = `שאלה ${index + 1} מתוך ${questions.length}`;
    questionText.textContent = q.text;
    feedbackPanel.classList.add('hidden');
    
    // Set normal avatar emoji
    activeAvatarEmoji.textContent = avatarEmojis[state.selectedAvatar].normal;
    activeAvatarEmoji.classList.remove("excited");

    // Display difficulty badge if present (Questions 5, 6, 7)
    if (q.difficulty) {
        difficultyBadge.textContent = q.difficulty;
        difficultyBadge.classList.remove("hidden");
    } else {
        difficultyBadge.classList.add("hidden");
    }

    // Clear and build options
    optionsContainer.innerHTML = '';
    
    q.options.forEach((optText, idx) => {
        const button = document.createElement("button");
        button.className = "option-btn";
        
        const marker = document.createElement("div");
        marker.className = "option-marker";
        const letters = ["א", "ב", "ג", "ד"];
        marker.textContent = letters[idx];
        
        const textSpan = document.createElement("span");
        const textToDisplay = optText.includes('. ') ? optText.substring(3) : optText;
        textSpan.textContent = textToDisplay;
        
        button.appendChild(marker);
        button.appendChild(textSpan);
        
        button.addEventListener("click", () => handleAnswer(idx));
        optionsContainer.appendChild(button);
    });
}

// HANDLE ANSWER
function handleAnswer(selectedIndex) {
    const q = questions[state.currentQuestionIndex];
    const optionButtons = document.querySelectorAll(".option-btn");
    
    optionButtons.forEach(btn => btn.disabled = true);
    
    const isCorrect = selectedIndex === q.correctIndex;
    // 7 questions total, so progress increment is 14% per question (7 * 14 = 98 ~ 100%)
    const progressIncrement = 14;

    if (isCorrect) {
        playSound('success');
        state.answersCorrect++;
        
        // Avatar reaction
        activeAvatarEmoji.textContent = avatarEmojis[state.selectedAvatar].correct;
        activeAvatarEmoji.classList.add("excited");

        // Boost progress bars
        state.fatLost = Math.min(100, state.fatLost + progressIncrement);
        state.shieldPower = Math.min(100, state.shieldPower + progressIncrement);
        
        // On last question, ensure it hits 100%
        if (state.currentQuestionIndex === questions.length - 1) {
            state.fatLost = 100;
        }

        optionButtons[selectedIndex].classList.add("correct");
        optionButtons.forEach((btn, idx) => {
            if (idx !== selectedIndex) btn.classList.add("dimmed");
        });
        
        feedbackTitle.textContent = "נכון מאוד! 🎉";
        feedbackTitle.style.color = "var(--green)";
        feedbackIcon.textContent = "🛡️";
        feedbackDesc.textContent = q.explanation;
        
    } else {
        playSound('error');
        
        activeAvatarEmoji.textContent = avatarEmojis[state.selectedAvatar].incorrect;

        gameScreen.classList.add("shake");
        setTimeout(() => gameScreen.classList.remove("shake"), 500);
        
        // Penalty is 15% damage (slightly lower since there are more questions)
        const damage = 15;
        const shieldAbsorption = (state.shieldPower / 100) * 8;
        const netDamage = Math.max(5, Math.round(damage - shieldAbsorption));
        
        state.muscleMass = Math.max(0, state.muscleMass - netDamage);
        state.shieldPower = Math.max(0, state.shieldPower - 10);
        
        optionButtons[selectedIndex].classList.add("incorrect");
        optionButtons[q.correctIndex].classList.add("correct");
        optionButtons.forEach((btn, idx) => {
            if (idx !== selectedIndex && idx !== q.correctIndex) btn.classList.add("dimmed");
        });
        
        feedbackTitle.textContent = "אופס! לא מדויק ⚠️";
        feedbackTitle.style.color = "var(--red)";
        feedbackIcon.textContent = "💔";
        
        let damageMsg = `איבדת ${netDamage}% מסת שריר. `;
        if (shieldAbsorption > 0) {
            damageMsg += `(מגן השריר בלם ${Math.round(shieldAbsorption)}% מהנזק!)`;
        }
        
        feedbackDesc.innerHTML = `<strong>${damageMsg}</strong><br>${q.explanation}`;
    }
    
    updateHUD();
    feedbackPanel.classList.remove('hidden');
}

// NEXT QUESTION / FINISH GAME
document.getElementById("next-question-btn").addEventListener("click", () => {
    state.currentQuestionIndex++;
    
    if (state.currentQuestionIndex < questions.length) {
        loadQuestion(state.currentQuestionIndex);
    } else {
        finishGame();
    }
});

// FINISH GAME
function finishGame() {
    dashboard.classList.add('hidden');
    showScreen(finishScreen);
    
    // Set score numbers
    document.getElementById("final-muscle").textContent = `${state.muscleMass}%`;
    // If they got all correct, show 100% fat loss target
    document.getElementById("final-fat").textContent = `${state.answersCorrect === questions.length ? 100 : state.fatLost}%`;
    
    const badgeEl = document.getElementById("final-badge");
    const adviceEl = document.getElementById("advice-text");
    
    let badgeText = "";
    let adviceText = "";
    
    if (state.muscleMass >= 85) {
        badgeText = "🏆 מגן שרירים אגדי";
        badgeEl.style.background = "linear-gradient(135deg, var(--green) 0%, hsl(160, 80%, 45%) 100%)";
        adviceText = "פנומנלי! הגנת בהצלחה על מסת השריר שלך והפגנת ידע קליני מושלם בכנס סוכרת 2026. שמרת על חילוף החומרים ומנעת סרקופניה כמו מקצוען/ית!";
    } else if (state.muscleMass >= 65) {
        badgeText = "🏋️‍♂️ מגן שרירים מוסמך";
        badgeEl.style.background = "linear-gradient(135deg, var(--purple) 0%, var(--green) 100%)";
        adviceText = "עבודה מצוינת! שמרת על רוב מסת השריר שלך. זכור/י: צריכת חלבון מספקת (1.2-1.5 גרם לק\"ג), אימוני התנגדות קבועים והכרת ההשפעות המטבוליות של מונג'רו (העלאת HDL ושיפור דום נשימה בשינה) הן חיוניות ביותר.";
    } else if (state.muscleMass >= 45) {
        badgeText = "🔬 מתלמד מטבולי";
        badgeEl.style.background = "linear-gradient(135deg, var(--orange) 0%, var(--purple) 100%)";
        adviceText = "השרירים שלך ספגו מעט פגיעה. למרות הירידה המבורכת במשקל, חשוב לשים דגש רב יותר על אימוני כוח ותזונה עשירה בחלבון כדי לתמוך במטבוליזם ולמנוע עייפות.";
    } else {
        badgeText = "⚠️ סכנת סרקופניה";
        badgeEl.style.background = "linear-gradient(135deg, var(--red) 0%, var(--orange) 100%)";
        adviceText = "שים/י לב: איבדת מסת שריר משמעותית במהלך הירידה במשקל! מומלץ להתייעץ עם דיאטנ/ית ומאמנ/ת כושר כדי להתאים מחדש את שגרת התזונה (חלבונים) ואימוני ההתנגדות שלך.";
    }
    
    badgeEl.textContent = badgeText;
    adviceEl.textContent = adviceText;
    
    playSound('complete');
    startConfetti();
}

// RESTART GAME
document.getElementById("restart-game-btn").addEventListener("click", () => {
    stopConfetti();
    showScreen(startScreen);
});

// MODAL WINDOW CONTROL
const infoBtn = document.getElementById("info-btn");
const closeModalBtn = document.getElementById("close-modal-btn");

infoBtn.addEventListener("click", () => {
    infoModal.classList.remove("hidden");
});

closeModalBtn.addEventListener("click", () => {
    infoModal.classList.add("hidden");
});

infoModal.addEventListener("click", (e) => {
    if (e.target === infoModal) {
        infoModal.classList.add("hidden");
    }
});
