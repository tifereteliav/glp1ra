// GLP-1 MUSCLE DEFENDER - SIMULATION LOGIC

// Game Questions Database with Clinical Explanations
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
        explanation: "טיפול ב-GLP1-RA מוביל לירידה משמעותית במשקל, אך כחלק מכך עלול להתרחש איבוד של מסת שריר רזה. לכן נדרשת התערבות מונעת הכוללת תזונה עשירה בחלבון ואימוני כוח כדי לשמר מסת שריר חיונית."
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
        explanation: "כל התשובות נכונות! שמירה על מסת שריר דורשת גישה רב-תחומית ומשולבת: צריכת חלבון מספקת, ביצוע אימוני התנגדות סדירים, והתערבויות רפואיות/פרמקולוגיות תומכות במידת הצורך."
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
        explanation: "הכמות המומלצת היא כ-1.2 עד 1.5 גרם לכל ק\"ג משקל גוף ליום. בעת גרעון קלורי וירידה מהירה במשקל, כמות זו הכרחית כדי לספק חומצות אמינו לשימור ולבניית רקמת השריר ולמניעת סרקופניה."
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
        explanation: "אימוני התנגדות וכוח לפחות פעמיים בשבוע הם היעילים ביותר למניעת פירוק שריר, שכן הם יוצרים גירוי מכני ישיר המאותת לגוף לשמר את רקמת השריר גם במהלך ירידה קלורית במשקל."
    },
    {
        text: "הטיפול במונג'רו בחולי סוכרת הביא במקביל לירידה בכל הבאים פרט ל:",
        options: [
            "א. לחץ דם דיאסטולי",
            "ב. LDL (כולסטרול)",
            "ג. HDL (כולסטרול)",
            "ד. לחץ דם סיסטולי"
        ],
        correctIndex: 2, // Option C (HDL כולסטרול)
        difficulty: "זהירות, שאלה של אנדוקרינולוגים 🔬",
        explanation: "התשובה היא HDL כולסטרול! הטיפול במונג'רו מביא לירידה ברמות הסוכר, לחץ דם סיסטולי, לחץ דם דיאסטולי ו-LDL (הכולסטרול הרע). לעומת זאת, רמות ה-HDL (הכולסטרול הטוב) אינן יורדות ואף נוטות לעלות."
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
        explanation: "הירידה במשקל בקרב חולי סוכרת (SURPASS) הייתה קטנה יותר בהשוואה לאנשים ללא סוכרת (SURMOUNT). חולי סוכרת סוג 2 מתאפיינים בעמידות מורכבת לאינסולין ובשינויים מטבוליים המקשים על ירידה במשקל בהשוואה לאוכלוסייה ללא סוכרת."
    },
    {
        text: "מחקר SURMOUNT-OSA מצא שיפור ב-Apnea Hypopnea Index (מדד דום נשימה בשינה) בקרב איזו אוכלוסייה?",
        options: [
            "א. אנשים אשר נעזרו במכשיר PAP בלבד",
            "ב. אנשים אשר לא נעזרו במכשיר PAP בלבד",
            "ג. שניהם (אנשים אשר נעזרו ואשר לא נעזרו במכשיר PAP)",
            "ד. אף אחד מהנ\"ל"
        ],
        correctIndex: 2, // Option C (שניהם)
        difficulty: "שאלה למומחי שינה 😴",
        explanation: "השיפור נצפה בשתי האוכלוסיות (שניהם)! מחקר SURMOUNT-OSA הדגים ירידה משמעותית ומובהקת במדד ה-AHI הן בקרב מטופלים שהשתמשו במכשיר PAP והן בקרב מטופלים שלא השתמשו ב-PAP."
    }
];

// Avatar config
const avatarEmojis = {
    protein: { normal: '🥩' },
    lift: { normal: '🏋️‍♂️' },
    science: { normal: '🔬' }
};

const avatarNames = {
    protein: 'אלוף החלבון',
    lift: 'מאמנת הכוח',
    science: 'חוקר המטבוליזם'
};

// Simulation State
let state = {
    currentQuestionIndex: 0,
    selectedAvatar: 'protein',
    feedbackMode: 'instant', // 'instant' | 'summary'
    selectedOptionIndex: null,
    questionChecked: false, // In instant mode: whether answer was revealed
    answersCorrect: 0,
    userAnswers: [] // Stores chosen option index for each question
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
    
    if (type === 'select') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(380, now);
        gainNode.gain.setValueAtTime(0.06, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.12);
    } else if (type === 'success') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.setValueAtTime(659.25, now + 0.1);
        gainNode.gain.setValueAtTime(0.15, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
    } else if (type === 'error') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(160, now);
        osc.frequency.exponentialRampToValueAtTime(80, now + 0.35);
        gainNode.gain.setValueAtTime(0.14, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
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
const nextQuestionBtn = document.getElementById("next-question-btn");
const nextBtnSpan = nextQuestionBtn.querySelector("span");

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

// Screen transition helper
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

// Feedback Mode Selection Logic
document.querySelectorAll(".mode-card").forEach(card => {
    card.addEventListener("click", () => {
        document.querySelectorAll(".mode-card").forEach(c => c.classList.remove("active"));
        card.classList.add("active");
        state.feedbackMode = card.dataset.mode;
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

// START SIMULATION
document.getElementById("start-game-btn").addEventListener("click", () => {
    state.currentQuestionIndex = 0;
    state.answersCorrect = 0;
    state.selectedOptionIndex = null;
    state.questionChecked = false;
    state.userAnswers = new Array(questions.length).fill(null);

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
    state.selectedOptionIndex = null;
    state.questionChecked = false;

    questionIndexBadge.textContent = `שאלה ${index + 1} מתוך ${questions.length}`;
    questionText.textContent = q.text;
    feedbackPanel.classList.add('hidden');
    
    activeAvatarEmoji.textContent = avatarEmojis[state.selectedAvatar].normal;
    activeAvatarEmoji.className = "avatar-reaction-emoji";

    if (q.difficulty) {
        difficultyBadge.textContent = q.difficulty;
        difficultyBadge.classList.remove("hidden");
    } else {
        difficultyBadge.classList.add("hidden");
    }

    // Set initial button text based on mode
    const isLast = (index === questions.length - 1);
    if (state.feedbackMode === 'instant') {
        nextBtnSpan.textContent = "בדוק תשובה";
    } else {
        nextBtnSpan.textContent = isLast ? "לסיום הסימולציה" : "המשך לשאלה הבאה";
    }

    // Build options
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
        
        button.addEventListener("click", () => handleSelectOption(idx));
        optionsContainer.appendChild(button);
    });
}

// HANDLE OPTION SELECT
function handleSelectOption(selectedIndex) {
    // If already checked in instant mode, do not allow changing
    if (state.feedbackMode === 'instant' && state.questionChecked) {
        return;
    }

    state.selectedOptionIndex = selectedIndex;
    playSound('select');

    // Highlight selected option
    const optionButtons = document.querySelectorAll(".option-btn");
    optionButtons.forEach((btn, idx) => {
        if (idx === selectedIndex) {
            btn.classList.add("selected");
        } else {
            btn.classList.remove("selected");
        }
    });

    const isLast = (state.currentQuestionIndex === questions.length - 1);

    if (state.feedbackMode === 'instant') {
        // Instant Mode: Prompt user to check answer
        feedbackTitle.textContent = "הבחירה שלך סומנה ✍️";
        feedbackTitle.style.color = "var(--purple)";
        feedbackIcon.textContent = "🎯";
        feedbackDesc.innerHTML = "ניתן לשנות את הבחירה, או ללחוץ על <strong>'בדוק תשובה'</strong> לקבלת משוב והסבר קליני.";
        nextBtnSpan.textContent = "בדוק תשובה";
    } else {
        // Summary Mode: User can change anytime, advances on click
        feedbackTitle.textContent = "הבחירה שלך סומנה 📥";
        feedbackTitle.style.color = "var(--purple)";
        feedbackIcon.textContent = "📝";
        feedbackDesc.innerHTML = "ניתן לשנות את התשובה או ללחוץ על הכפתור כדי להמשיך הלאה.<br>(התשובות וההסברים המלאים יוצגו בסיום הסימולציה).";
        nextBtnSpan.textContent = isLast ? "לסיום הסימולציה" : "המשך לשאלה הבאה";
    }
    
    feedbackPanel.classList.remove('hidden');
}

// ACTION BUTTON CLICK (בדוק תשובה / המשך לשאלה הבאה)
nextQuestionBtn.addEventListener("click", () => {
    if (state.selectedOptionIndex === null) return;

    const q = questions[state.currentQuestionIndex];
    const isLast = (state.currentQuestionIndex === questions.length - 1);
    const optionButtons = document.querySelectorAll(".option-btn");

    if (state.feedbackMode === 'instant') {
        if (!state.questionChecked) {
            // STEP 1: EVALUATE & REVEAL EXPLANATION
            state.questionChecked = true;
            state.userAnswers[state.currentQuestionIndex] = state.selectedOptionIndex;
            const isCorrect = (state.selectedOptionIndex === q.correctIndex);

            optionButtons.forEach(btn => btn.disabled = true);

            if (isCorrect) {
                state.answersCorrect++;
                playSound('success');
                activeAvatarEmoji.textContent = avatarEmojis[state.selectedAvatar].correct;
                activeAvatarEmoji.classList.add("excited");

                optionButtons[state.selectedOptionIndex].classList.remove("selected");
                optionButtons[state.selectedOptionIndex].classList.add("correct");

                feedbackTitle.textContent = "נכון מאוד! 🎉";
                feedbackTitle.style.color = "var(--green)";
                feedbackIcon.textContent = "🛡️";
                feedbackDesc.innerHTML = q.explanation;
            } else {
                playSound('error');
                activeAvatarEmoji.textContent = avatarEmojis[state.selectedAvatar].incorrect;

                optionButtons[state.selectedOptionIndex].classList.remove("selected");
                optionButtons[state.selectedOptionIndex].classList.add("incorrect");
                optionButtons[q.correctIndex].classList.add("correct");

                feedbackTitle.textContent = "לא מדויק ⚠️";
                feedbackTitle.style.color = "var(--red)";
                feedbackIcon.textContent = "💡";
                feedbackDesc.innerHTML = `<strong>התשובה הנכונה היא: ${q.options[q.correctIndex]}</strong><br><br>${q.explanation}`;
            }

            nextBtnSpan.textContent = isLast ? "לסיום הסימולציה" : "המשך לשאלה הבאה";
            return;
        } else {
            // STEP 2: ADVANCE TO NEXT QUESTION
            advanceQuestion();
        }
    } else {
        // Summary Mode: Record answer silently and advance immediately
        state.userAnswers[state.currentQuestionIndex] = state.selectedOptionIndex;
        if (state.selectedOptionIndex === q.correctIndex) {
            state.answersCorrect++;
        }
        advanceQuestion();
    }
});

// Advance to next question or finish
function advanceQuestion() {
    state.currentQuestionIndex++;
    
    if (state.currentQuestionIndex < questions.length) {
        updateHUD();
        loadQuestion(state.currentQuestionIndex);
    } else {
        finishGame();
    }
}

// FINISH GAME
function finishGame() {
    dashboard.classList.add('hidden');
    showScreen(finishScreen);
    
    const totalQuestions = questions.length;
    const percentage = Math.round((state.answersCorrect / totalQuestions) * 100);
    
    // Relative Score Displays
    const finalPercentageEl = document.getElementById("final-percentage");
    const finalRatioEl = document.getElementById("final-ratio-text");
    
    finalPercentageEl.textContent = `${percentage}%`;
    finalRatioEl.textContent = `ענית נכון על ${state.answersCorrect} מתוך ${totalQuestions} שאלות (${percentage}%)`;
    
    // Set color accent based on score
    if (percentage >= 85) {
        finalPercentageEl.style.background = "linear-gradient(135deg, #10b981 0%, #34d399 100%)";
    } else if (percentage >= 60) {
        finalPercentageEl.style.background = "linear-gradient(135deg, #a855f7 0%, #10b981 100%)";
    } else {
        finalPercentageEl.style.background = "linear-gradient(135deg, #f97316 0%, #ef4444 100%)";
    }
    finalPercentageEl.style.webkitBackgroundClip = "text";
    finalPercentageEl.style.webkitTextFillColor = "transparent";

    // Raffle Code Card
    const codeEl = document.getElementById("finish-code-val");
    const codeInstructionsEl = document.querySelector(".code-instructions");
    
    if (state.answersCorrect === totalQuestions) {
        codeEl.textContent = "GLP1";
        codeEl.style.textShadow = "0 0 25px rgba(16, 185, 129, 0.5), 0 0 45px var(--green)";
        codeInstructionsEl.textContent = "מושלם! 100% הצלחה! שמור/י קוד זה על מנת להכניס אותו לטופס ההגרלה לפרסי הכנס.";
        codeInstructionsEl.style.color = "var(--green)";
    } else {
        codeEl.textContent = "muscle";
        codeEl.style.textShadow = "0 0 25px rgba(249, 115, 22, 0.5), 0 0 45px var(--orange)";
        codeInstructionsEl.textContent = "השלמת את הסימולציה! שמור/י קוד זה על מנת להכניס אותו לטופס ההגרלה לפרסי הכנס.";
        codeInstructionsEl.style.color = "var(--orange)";
    }
    
    // Dynamic Comprehensive Review of Questions and Explanations
    const reviewListContainer = document.getElementById("questions-review-list");
    reviewListContainer.innerHTML = '';

    questions.forEach((q, idx) => {
        const userPick = state.userAnswers[idx];
        const isCorrect = (userPick === q.correctIndex);

        const card = document.createElement("div");
        card.className = `review-card ${isCorrect ? 'correct-card' : 'incorrect-card'}`;

        const topBar = document.createElement("div");
        topBar.className = "review-top-bar";

        const qNum = document.createElement("span");
        qNum.className = "review-q-num";
        qNum.textContent = `שאלה ${idx + 1} מתוך ${totalQuestions}`;

        const badge = document.createElement("span");
        badge.className = `review-badge ${isCorrect ? 'correct' : 'incorrect'}`;
        badge.textContent = isCorrect ? "תשובה נכונה ✅" : "תשובה שגויה ❌";

        topBar.appendChild(qNum);
        topBar.appendChild(badge);

        const qTitle = document.createElement("div");
        qTitle.className = "review-q-text";
        qTitle.textContent = q.text;

        const userPickRow = document.createElement("div");
        userPickRow.className = `review-ans-row ${isCorrect ? 'correct-pick' : 'user-pick'}`;
        const userChoiceText = userPick !== null && userPick !== undefined ? q.options[userPick] : "לא סומנה תשובה";
        userPickRow.innerHTML = `<strong>התשובה שבחרת:</strong> ${userChoiceText}`;

        card.appendChild(topBar);
        card.appendChild(qTitle);
        card.appendChild(userPickRow);

        if (!isCorrect) {
            const correctRow = document.createElement("div");
            correctRow.className = "review-ans-row correct-pick";
            correctRow.innerHTML = `<strong>התשובה הנכונה:</strong> ${q.options[q.correctIndex]}`;
            card.appendChild(correctRow);
        }

        const explanationDiv = document.createElement("div");
        explanationDiv.className = "review-explanation";
        explanationDiv.innerHTML = `<strong>💡 הסבר קליני:</strong> ${q.explanation}`;
        card.appendChild(explanationDiv);

        reviewListContainer.appendChild(card);
    });

    playSound('complete');
    startConfetti();
}

// RESTART SIMULATION
document.getElementById("restart-game-btn").addEventListener("click", () => {
    stopConfetti();
    showScreen(startScreen);
});

// MODAL WINDOW CONTROL
const infoModalText = document.querySelector("#info-modal .modal-body");
if (infoModalText) {
    infoModalText.innerHTML = `
        <p><strong>איך מתבצעת הסימולציה?</strong></p>
        <ul>
            <li>במסך הפתיחה תוכלו לבחור את אופן קבלת המשוב: <strong>משוב מיידי</strong> אחרי כל שאלה, או <strong>משוב מרוכז</strong> בסיום.</li>
            <li>עונים על 7 שאלות קליניות ומטבוליות בנושא טיפול ב-GLP1 ושמירה על מסת שריר.</li>
            <li>בסיום הסימולציה מקבלים ציון יחסי מתוך 100%, קוד הגרלה לכנס, ופירוט מלא של כל התשובות וההסברים הרפואיים.</li>
        </ul>
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
