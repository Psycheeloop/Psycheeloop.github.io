/* ============================================================
   PSYCHEELOOP — REASONING QUIZ ENGINE
   Used only by the Logical Reasoning quiz — this one has right/
   wrong answers and difficulty-weighted scoring, so it needs its
   own engine rather than the Likert one (see quiz-engine.js).

   Edit /data/logical-reasoning.js to change questions, answers,
   or explanations — you shouldn't need to touch this file.
   ============================================================ */

(function () {
  const data = window.QUIZ_DATA;
  if (!data) {
    console.error('QUIZ_DATA not found — make sure the /data/ file is loaded before reasoning-engine.js');
    return;
  }

  const questionListEl = document.getElementById('question-list');
  const progressFillEl = document.getElementById('progress-fill');
  const submitBtn = document.getElementById('submit-btn');
  const submitHint = document.getElementById('submit-hint');
  const quizSection = document.getElementById('quiz-section');
  const resultsSection = document.getElementById('results-section');

  const difficultyPoints = { easy: 1, medium: 2, hard: 3 };
  const typeKeys = Object.keys(data.types);

  // ---- Render questions ----
  data.questions.forEach((q, index) => {
    const block = document.createElement('div');
    block.className = 'question-block';
    block.innerHTML = `
      <span class="question-number">Question ${index + 1} of ${data.questions.length}</span>
      <p class="question-text">${q.text}</p>
      <div class="mc-options" role="radiogroup" aria-label="${q.text}">
        ${q.options.map((opt, i) => `
          <div class="mc-option">
            <label>
              <input type="radio" name="q${q.id}" value="${i}">
              <span>${opt}</span>
            </label>
          </div>
        `).join('')}
      </div>
    `;
    questionListEl.appendChild(block);
  });

  // ---- Progress tracking ----
  function updateProgress() {
    const total = data.questions.length;
    const answered = new Set(
      Array.from(document.querySelectorAll('.mc-options input:checked')).map(el => el.name)
    ).size;
    const pct = Math.round((answered / total) * 100);
    progressFillEl.style.width = pct + '%';
    submitHint.textContent = `${answered} of ${total} answered`;
    submitBtn.disabled = answered < total;
  }

  questionListEl.addEventListener('change', updateProgress);
  updateProgress();

  // ---- Scoring ----
  submitBtn.addEventListener('click', () => {
    const pointsByType = {};
    const maxByType = {};
    typeKeys.forEach(k => { pointsByType[k] = 0; maxByType[k] = 0; });

    let totalPoints = 0;
    let totalMax = 0;

    data.questions.forEach(q => {
      const weight = difficultyPoints[q.difficulty];
      maxByType[q.type] += weight;
      totalMax += weight;

      const checked = document.querySelector(`input[name="q${q.id}"]:checked`);
      const answeredIndex = checked ? parseInt(checked.value, 10) : -1;
      if (answeredIndex === q.correctIndex) {
        pointsByType[q.type] += weight;
        totalPoints += weight;
      }
    });

    const normalized = {};
    typeKeys.forEach(k => {
      normalized[k] = Math.round((pointsByType[k] / maxByType[k]) * 100);
    });
    const composite = Math.round((totalPoints / totalMax) * 100);

    renderResults(normalized, composite);
    quizSection.style.display = 'none';
    resultsSection.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  function bandFor(score) {
    if (score >= 86) return 'Exceptional';
    if (score >= 66) return 'Strong';
    if (score >= 41) return 'Solid';
    return 'Developing';
  }

  // ---- Results rendering ----
  function renderResults(normalized, composite) {
    const ranked = typeKeys
      .map(k => ({ key: k, score: normalized[k] }))
      .sort((a, b) => b.score - a.score);

    document.getElementById('result-headline').textContent = `${bandFor(composite)} — ${composite}/100`;
    document.getElementById('result-sub').textContent =
      `Your strongest area was ${data.types[ranked[0].key].name}. ${data.types[ranked[ranked.length - 1].key].name} has the most room to grow.`;

    const chartEl = document.getElementById('bar-chart');
    chartEl.innerHTML = ranked.map(r => `
      <div class="bar-row">
        <div class="bar-label"><span>${data.types[r.key].name}</span><span>${r.score} · ${bandFor(r.score)}</span></div>
        <div class="bar-track"><div class="bar-fill" style="width:${r.score}%"></div></div>
      </div>
    `).join('');

    const cardsEl = document.getElementById('result-cards');
    cardsEl.innerHTML = ranked.map(r => {
      const t = data.types[r.key];
      return `
        <div class="result-card">
          <h3>${t.icon || ''} ${t.name} <span class="score-tag">${r.score}/100 · ${bandFor(r.score)}</span></h3>
          <p>${t.description}</p>
        </div>
      `;
    }).join('');

    // Answer review
    const reviewEl = document.getElementById('answer-review');
    if (reviewEl) {
      reviewEl.innerHTML = data.questions.map((q, i) => {
        const checked = document.querySelector(`input[name="q${q.id}"]:checked`);
        const answeredIndex = checked ? parseInt(checked.value, 10) : -1;
        const correct = answeredIndex === q.correctIndex;
        return `
          <div class="result-card">
            <h4 style="margin-top:0;">Question ${i + 1} — ${correct ? '✓ Correct' : '✗ Incorrect'}</h4>
            <p>${q.text}</p>
            <p><strong>Correct answer:</strong> ${q.options[q.correctIndex]}</p>
            <p>${q.explanation}</p>
          </div>
        `;
      }).join('');
    }

    document.getElementById('result-disclaimer').textContent = data.disclaimer || '';
  }

  // ---- Retake ----
  const retakeBtn = document.getElementById('retake-btn');
  if (retakeBtn) {
    retakeBtn.addEventListener('click', () => {
      document.querySelectorAll('.mc-options input:checked').forEach(el => el.checked = false);
      updateProgress();
      resultsSection.style.display = 'none';
      quizSection.style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();
