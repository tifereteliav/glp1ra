// GLP-1 MUSCLE DEFENDER - GAME LOGIC

// Game Questions Database by Zone
const zone1Questions = [
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
    }
];

const zone2Questions = [
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
    activeZone: 1, // 1: Muscle Defense, 2: Diabetes Conference
    activeQuestions: zone1Questions,
    muscleMass: 100,
    fatLost: 0,
    shieldPower: 0,
    currentQuestionIndex: 0,
    selectedAvatar: 'protein',
    answersCorrect: 0
};

// Sound synthesizer using Web Audio API (No files needed!)
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
        // High pitch pleasant double chime
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
        gainNode.gain.setValueAtTime(0.15, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
    } else if (type === 'error') {
        // Low buzzing sliding tone
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.exponentialRampToValueAtTime(80, now + 0.4);
        gainNode.gain.setValueAtTime(0.15, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
        osc.start(now);
        osc.stop(now + 0.4);
    } else if (type === 'complete') {
        // Fun celebratory fanfare
        osc.type = 'sine';
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
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

const lblMeter1Title = document.getElementById("lbl-meter-1-title");
const lblMeter2Title = document.getElementById("lbl-meter-2-title");
const lblMeter3Title = document.getElementById("lbl-meter-3-title");

const finalMetric1Lbl = document.getElementById("final-metric-1-lbl");
const finalMetric2Lbl = document.getElementById("final-metric-2-lbl");
const finalEmoji1 = document.getElementById("final-emoji-1");
const finalEmoji2 = document.getElementById("final-emoji-2");

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

// Confetti Particle System on Canvas
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
    
    // Smooth transitions for colors
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

// Transition helper between screens
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

// Zone selection UI logic
document.querySelectorAll(".zone-card").forEach(card => {
    card.addEventListener("click", () => {
        document.querySelectorAll(".zone-card").forEach(c => c.classList.remove("active"));
        card.classList.add("active");
        state.activeZone = parseInt(card.dataset.zone);
        state.activeQuestions = state.activeZone === 1 ? zone1Questions : zone2Questions;
    });
});

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

    // Dynamically update HUD names based on Zone
    if (state.activeZone === 1) {
        lblMeter1Title.textContent = "מסת שריר";
        lblMeter2Title.textContent = "איבוד שומן";
        lblMeter3Title.textContent = "חומת מגן";
    } else {
        lblMeter1Title.textContent = "ידע קליני";
        lblMeter2Title.textContent = "איזון סוכרת";
        lblMeter3Title.textContent = "כוח מונג'רו";
    }

    // Set Active Avatar Badge
    activeAvatarEmoji.textContent = avatarEmojis[state.selectedAvatar].normal;
    activeAvatarEmoji.className = "avatar-reaction-emoji"; // Reset classes
    activeAvatarName.textContent = avatarNames[state.selectedAvatar];

    updateHUD();
    dashboard.classList.remove('hidden');
    showScreen(gameScreen);
    loadQuestion(0);
});

// LOAD QUESTION
function loadQuestion(index) {
    const q = state.activeQuestions[index];
    questionIndexBadge.textContent = `שאלה ${index + 1} מתוך ${state.activeQuestions.length}`;
    questionText.textContent = q.text;
    feedbackPanel.classList.add('hidden');
    
    // Set normal avatar emoji
    activeAvatarEmoji.textContent = avatarEmojis[state.selectedAvatar].normal;
    activeAvatarEmoji.classList.remove("excited");

    // Display difficulty badge if present (Zone 2)
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
        
        // Add Letter Marker
        const marker = document.createElement("div");
        marker.className = "option-marker";
        const letters = ["א", "ב", "ג", "ד"];
        marker.textContent = letters[idx];
        
        const textSpan = document.createElement("span");
        // Extract content after the letter label if exists, else take full
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
    const q = state.activeQuestions[state.currentQuestionIndex];
    const optionButtons = document.querySelectorAll(".option-btn");
    
    // Disable options
    optionButtons.forEach(btn => btn.disabled = true);
    
    const isCorrect = selectedIndex === q.correctIndex;
    const progressIncrement = Math.round(100 / state.activeQuestions.length);

    if (isCorrect) {
        playSound('success');
        state.answersCorrect++;
        
        // Avatar reaction
        activeAvatarEmoji.textContent = avatarEmojis[state.selectedAvatar].correct;
        activeAvatarEmoji.classList.add("excited");

        // Boost progress bars
        state.fatLost = Math.min(100, state.fatLost + progressIncrement);
        state.shieldPower = Math.min(100, state.shieldPower + progressIncrement);
        
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
        
        // Avatar reaction
        activeAvatarEmoji.textContent = avatarEmojis[state.selectedAvatar].incorrect;

        // Shake screen container for tactile feedback
        gameScreen.classList.add("shake");
        setTimeout(() => gameScreen.classList.remove("shake"), 500);
        
        // Calculate penalty damage
        const damage = 20;
        const shieldAbsorption = (state.shieldPower / 100) * 10;
        const netDamage = Math.max(5, Math.round(damage - shieldAbsorption));
        
        state.muscleMass = Math.max(0, state.muscleMass - netDamage);
        state.shieldPower = Math.max(0, state.shieldPower - 15);
        
        optionButtons[selectedIndex].classList.add("incorrect");
        optionButtons[q.correctIndex].classList.add("correct");
        optionButtons.forEach((btn, idx) => {
            if (idx !== selectedIndex && idx !== q.correctIndex) btn.classList.add("dimmed");
        });
        
        feedbackTitle.textContent = "אופס! לא מדויק ⚠️";
        feedbackTitle.style.color = "var(--red)";
        feedbackIcon.textContent = "💔";
        
        // Custom message based on metric names
        const metricName = state.activeZone === 1 ? "מסת שריר" : "נקודות ידע";
        let damageMsg = `איבדת ${netDamage}% ${metricName}. `;
        if (shieldAbsorption > 0 && state.activeZone === 1) {
            damageMsg += `(מגן השריר בלם ${Math.round(shieldAbsorption)}% מהנזק!)`;
        } else if (shieldAbsorption > 0 && state.activeZone === 2) {
            damageMsg += `(כוח המונג'רו ספג חלק מהטעות!)`;
        }
        
        feedbackDesc.innerHTML = `<strong>${damageMsg}</strong><br>${q.explanation}`;
    }
    
    updateHUD();
    feedbackPanel.classList.remove('hidden');
}

// NEXT QUESTION / FINISH GAME
document.getElementById("next-question-btn").addEventListener("click", () => {
    state.currentQuestionIndex++;
    
    if (state.currentQuestionIndex < state.activeQuestions.length) {
        loadQuestion(state.currentQuestionIndex);
    } else {
        finishGame();
    }
});

// FINISH GAME SCREEN
function finishGame() {
    dashboard.classList.add('hidden');
    showScreen(finishScreen);
    
    // Set score numbers
    document.getElementById("final-muscle").textContent = `${state.muscleMass}%`;
    document.getElementById("final-fat").textContent = `${state.fatLost}%`;
    
    const badgeEl = document.getElementById("final-badge");
    const adviceEl = document.getElementById("advice-text");
    
    let badgeText = "";
    let adviceText = "";
    
    if (state.activeZone === 1) {
        // Customize Metrics Labels for Zone 1
        finalMetric1Lbl.textContent = "מסת שריר שנשמרה";
        finalMetric2Lbl.textContent = "אחוזי שומן שירדו";
        finalEmoji1.textContent = "💪";
        finalEmoji2.textContent = "🔥";

        if (state.muscleMass >= 90) {
            badgeText = "🛡️ מגן שרירים אגדי";
            badgeEl.style.background = "linear-gradient(135deg, var(--green) 0%, hsl(160, 80%, 45%) 100%)";
            adviceText = "פנומנלי! הדגמת הבנה מושלמת בפיזיולוגיה ובתזונה. הצלחת לרדת במשקל תוך שמירה כמעט מלאה על רקמת השריר המטבולית שלך. המשך/י כך!";
        } else if (state.muscleMass >= 70) {
            badgeText = "🏋️‍♂️ מגן שרירים מוסמך";
            badgeEl.style.background = "linear-gradient(135deg, var(--purple) 0%, var(--green) 100%)";
            adviceText = "עבודה מצוינת! שמרת על רוב מסת השריר שלך בזמן הטיפול. זכור/י: צריכת חלבון עקבית (כ-1.2-1.5 גרם לק\"ג) יחד עם לפחות שני אימוני כוח שבועיים יבטיחו תוצאות ארוכות טווח.";
        } else if (state.muscleMass >= 50) {
            badgeText = "🔬 מתלמד מטבולי";
            badgeEl.style.background = "linear-gradient(135deg, var(--orange) 0%, var(--purple) 100%)";
            adviceText = "השרירים שלך ספגו מעט פגיעה. למרות הירידה במשקל, חשוב לשים דגש רב יותר על אימוני כוח והוספת חלבון לתפריט היומי כדי למנוע ירידה בקצב חילוף החומרים.";
        } else {
            badgeText = "⚠️ סכנת סרקופניה";
            badgeEl.style.background = "linear-gradient(135deg, var(--red) 0%, var(--orange) 100%)";
            adviceText = "שים/י לב: מסת השריר שלך ירדה באופן משמעותי! ירידה כזו עלולה להוביל לחולשה ועייפות. מומלץ להתייעץ עם דיאטנ/ית קליני/ת ומאמנ/ת כושר כדי להתאים מחדש את שגרת התזונה והאימונים.";
        }
    } else {
        // Customize Metrics Labels for Zone 2 (Conference)
        finalMetric1Lbl.textContent = "רמת ידע קליני";
        finalMetric2Lbl.textContent = "מדד איזון סוכרת";
        finalEmoji1.textContent = "🎓";
        finalEmoji2.textContent = "🩸";

        // Zone 2 Scoring
        if (state.muscleMass >= 90) {
            badgeText = "🎓 אנדוקרינולוג מומחה בכיר";
            badgeEl.style.background = "linear-gradient(135deg, var(--green) 0%, hsl(160, 80%, 45%) 100%)";
            adviceText = "פנטסטי! ענית נכון על כל השאלות הקשות של הכנס. הפגנת הבנה מעמיקה במחקרי SURMOUNT-OSA, SURPASS והפרמטרים הלבביים של מונג'רו. מומחה מטבולי אמיתי!";
        } else if (state.muscleMass >= 70) {
            badgeText = "🧬 מומחה מטבולי";
            badgeEl.style.background = "linear-gradient(135deg, var(--purple) 0%, var(--green) 100%)";
            adviceText = "כל הכבוד! הידע המטבולי שלך גבוה מאוד. הראית הבנה מצוינת ביעדי הטיפול, השפעות המולקולות על שומנים ולחצי דם, ורענון קל של מחקרי ה-OSA יביא אותך לשלמות קלינית.";
        } else if (state.muscleMass >= 50) {
            badgeText = "🔬 מתלמד קליני";
            badgeEl.style.background = "linear-gradient(135deg, var(--orange) 0%, var(--purple) 100%)";
            adviceText = "הפגנת ידע בסיסי טוב, אך חלק מהשאלות הקליניות המורכבות הטעו אותך. מומלץ לעבור על השקפים העוסקים בירידה במשקל בחולי סוכרת סוג 2 לעומת ללא סוכרת.";
        } else {
            badgeText = "⚠️ מומלץ לחזור על המחקרי קליני";
            badgeEl.style.background = "linear-gradient(135deg, var(--red) 0%, var(--orange) 100%)";
            adviceText = "שאלות קשות! השפעות מונג'רו על ליפידים (ירידה ב-LDL ועלייה ב-HDL) ודום נשימה בשינה (OSA) הן קריטיות. מומלץ לחזור על החומר המקצועי של כנס סוכרת 2026 כדי להכיר את העדויות האחרונות.";
        }
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
