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
        correctIndex: 1 // Option B
    },
    {
        text: "מה מהאסטרטגיות הבאות יכולה למנוע איבוד מסת שריר במקביל לירידה במשקל?",
        options: [
            "א. צריכת חלבון נאותה",
            "ב. אימוני כוח",
            "ג. התערבויות פרמקולוגיות",
            "ד. כל התשובות נכונות"
        ],
        correctIndex: 3 // Option D
    },
    {
        text: "מהי כמות החלבון היומית המומלצת למניעת איבוד שריר בזמן טיפול ב-GLP1-RA?",
        options: [
            "א. 0.8 גרם לכל קילוגרם משקל גוף (כמו האוכלוסיה הכללית)",
            "ב. כ-1.2 עד 1.5 גרם לכל קילוגרם משקל גוף",
            "ג. אין צורך בחלבון כלל, פחמימות בלבד מונעות פירוק שריר",
            "ד. מספיק לאכול ארוחת חלבון אחת לשבוע"
        ],
        correctIndex: 1 // Option B
    },
    {
        text: "איזה סוג של אימון גופני הוא החיוני ביותר להגנה על השריר מפני פירוק בעקבות ירידה מהירה במשקל?",
        options: [
            "א. אימוני התנגדות וכוח (משקולות, רצועות או משקל גוף) לפחות פעמיים בשבוע",
            "ב. ריצות מרתון ואימוני אירובי ממושכים ללא עבודה על כוח",
            "ג. מתיחות קלות בלבד פעם בשבועיים",
            "ד. הליכה של 5 דקות בלבד פעם ביומיים"
        ],
        correctIndex: 0 // Option A
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
        difficulty: "זהירות, שאלה של אנדוקרינולוגים 🔬"
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
        difficulty: "קושי: פרופסור מטבולי 🧠"
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
        difficulty: "שאלה למומחי שינה 😴"
    }
];

// Avatar config
const avatarEmojis = {
    protein: { normal: '🥩', correct: '🤔', incorrect: '🤔' },
    lift: { normal: '🏋️‍♂️', correct: '🤔', incorrect: '🤔' },
    science: { normal: '🔬', correct: '🤔', incorrect: '🤔' }
};

const avatarNames = {
    protein: 'אלוף החלבון',
    lift: 'מאמנת הכוח',
    science: 'חוקר המטבוליזם'
};

// Game State variables
let state = {
    muscleMass: 100,
    currentQuestionIndex: 0,
    selectedAvatar: 'protein',
    answersCorrect: 0
};

// Soft neutral keyclick sound using Web Audio API
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
    
    if (type === 'select') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(350, now);
        gainNode.gain.setValueAtTime(0.08, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
        osc.start(now);
        osc.stop(now + 0.15);
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

// UI Screens Cache
const passcodeScreen = document.getElementById("passcode-screen");
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const finishScreen = document.getElementById("finish-screen");
const dashboard = document.getElementById("dashboard");

const challengeProgressBar = document.getElementById("challenge-progress-bar");
const challengeProgressVal = document.getElementById("challenge-progress-val");

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

// Update HUD Progress
function updateHUD() {
    const totalQuestions = questions.length;
    const progressPercent = Math.round((state.currentQuestionIndex / totalQuestions) * 100);
    
    challengeProgressBar.style.width = `${progressPercent}%`;
    challengeProgressVal.textContent = `שאלה ${state.currentQuestionIndex + 1} מתוך ${totalQuestions}`;
}

// Transition helper between screens
function showScreen(screenToShow) {
    [passcodeScreen, startScreen, gameScreen, finishScreen].forEach(s => {
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

// VERIFY PASSCODE (Transition from Screen 0 to Screen 1)
document.getElementById("verify-passcode-btn").addEventListener("click", () => {
    const passcodeVal = document.getElementById("passcode-input").value.trim();
    const errorEl = document.getElementById("passcode-error");
    const inputEl = document.getElementById("passcode-input");
    
    if (passcodeVal !== "5656") {
        errorEl.classList.remove("hidden");
        inputEl.style.borderColor = "var(--red)";
        inputEl.style.boxShadow = "0 0 15px var(--red-glow)";
        inputEl.classList.add("shake");
        setTimeout(() => inputEl.classList.remove("shake"), 500);
        return;
    }
    
    // Clear inputs and error
    errorEl.classList.add("hidden");
    inputEl.style.borderColor = "var(--border-color)";
    inputEl.style.boxShadow = "none";
    inputEl.value = ""; 

    // Sound and show welcome screen
    playSound('select');
    showScreen(startScreen);
});

// START GAME (Transition from Screen 1 to Screen 2)
document.getElementById("start-game-btn").addEventListener("click", () => {
    // Reset state values
    state.muscleMass = 100;
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

// HANDLE ANSWER (No correctness leakage to user)
function handleAnswer(selectedIndex) {
    const q = questions[state.currentQuestionIndex];
    const optionButtons = document.querySelectorAll(".option-btn");
    
    optionButtons.forEach(btn => btn.disabled = true);
    
    const isCorrect = selectedIndex === q.correctIndex;
    
    playSound('select');

    if (isCorrect) {
        state.answersCorrect++;
    }

    optionButtons[selectedIndex].classList.add("selected");
    
    feedbackTitle.textContent = "התשובה נקלטה! 📥";
    feedbackTitle.style.color = "var(--purple)";
    feedbackIcon.textContent = "📝";
    feedbackDesc.innerHTML = "תשובתך נשמרה בהצלחה במערכת האתגר.<br>לחץ/י על כפתור ההמשך כדי להתקדם לשאלה הבאה.";
    
    const totalQuestions = questions.length;
    const progressPercent = Math.round(((state.currentQuestionIndex + 1) / totalQuestions) * 100);
    challengeProgressBar.style.width = `${progressPercent}%`;

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
    
    document.getElementById("final-muscle").textContent = `${state.answersCorrect} / ${questions.length}`;
    
    const codeEl = document.getElementById("finish-code-val");
    const codeInstructionsEl = document.querySelector(".code-instructions");
    
    if (state.answersCorrect === questions.length) {
        codeEl.textContent = "GLP1";
        codeEl.style.textShadow = "0 0 25px rgba(16, 185, 129, 0.5), 0 0 45px var(--green)";
        codeInstructionsEl.textContent = "מדהים! ענית נכון על כל 7 השאלות! הצג/י קוד זה לנציג/ת הכנס לקבלת הפרס הגדול!";
        codeInstructionsEl.style.color = "var(--green)";
    } else {
        codeEl.textContent = "muscle";
        codeEl.style.textShadow = "0 0 25px rgba(249, 115, 22, 0.5), 0 0 45px var(--orange)";
        codeInstructionsEl.textContent = "השלמת את האתגר! הצג/י קוד זה לנציג/ת הכנס לקבלת שי בהתאם לציון!";
        codeInstructionsEl.style.color = "var(--orange)";
    }
    
    const adviceEl = document.getElementById("advice-text");
    adviceEl.innerHTML = `<strong>סיכום אתגר:</strong> כדי לשמור על בריאות מטבולית אופטימלית תחת טיפול ב-GLP1-RA, יש להקפיד על צריכת חלבון מספקת (1.2-1.5 גרם לק"ג), ביצוע אימוני כוח לפחות פעמיים בשבוע, והבנת ההשפעות הרב-מערכתיות של המולקולות (שיפור בפרופיל השומנים עם עליית HDL והטבה בדום נשימה בשינה).`;
    
    playSound('complete');
    startConfetti();
}

// RESTART GAME (Lock back to passcode screen for conference kiosks)
document.getElementById("restart-game-btn").addEventListener("click", () => {
    stopConfetti();
    showScreen(passcodeScreen);
});

// MODAL WINDOW CONTROL
const infoModalText = document.querySelector("#info-modal .modal-body");
if (infoModalText) {
    infoModalText.innerHTML = `
        <p><strong>איך משחקים?</strong></p>
        <ul>
            <li>עליך להכניס את קוד הכניסה <strong>5656</strong> בשער הכניסה כדי לפתוח את האתגר.</li>
            <li>במסך הבא, בחר/י את הגיבור/ה המטבולי/ת שלך.</li>
            <li>ענה/י על 7 שאלות מטבוליות וקליניות ברצף.</li>
            <li>התשובות יישמרו במערכת ולא ייחשפו במהלך המשחק (כדי לשמור על המתח!).</li>
            <li>בסיום תקבל/י קוד המבוסס על רמת ההצלחה שלך.</li>
        </ul>
        <p><strong>חלוקת פרסים:</strong></p>
        <p>
            תוצאה מושלמת (7/7) תעניק לך את קוד העל <strong>GLP1</strong>. כל תוצאה אחרת תעניק את קוד המגן <strong>muscle</strong>.
        </p>
    `;
}

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
