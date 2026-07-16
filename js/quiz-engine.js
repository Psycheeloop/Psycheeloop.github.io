/* ============================================================
   PSYCHEELOOP — LIKERT QUIZ ENGINE
   Used by every self-report (Likert-scale) quiz: Love Languages,
   Motivational Systems Profile, Big Five, Conflict Style,
   Attachment Style, Stress & Coping.

   HOW THIS WORKS:
   Each quiz page loads its own /data/<quiz-id>.js file first,
   which defines a single global object called QUIZ_DATA.
   This file (quiz-engine.js) reads QUIZ_DATA and does everything
   else: rendering questions, tracking progress, scoring, and
   rendering the results screen. You should not need to edit this
   file to change quiz content — edit the relevant /data/ file
   instead.

   EXPECTED SHAPE OF QUIZ_DATA — see /data/love-languages.js for
   a fully commented example.
   ============================================================ */

(function () {
  const data = window.QUIZ_DATA;
  if (!data) {
    console.error('QUIZ_DATA not found — make sure the /data/ file is loaded before quiz-engine.js');
    return;
  }

  const questionListEl = document.getElementById('question-list');
  const progressFillEl = document.getElementById('progress-fill');
  const submitBtn = document.getElementById('submit-btn');
  const submitHint = document.getElementById('submit-hint');
  const quizSection = document.getElementById('quiz-section');
  const resultsSection = document.getElementById('results-section');

  const categoryKeys = Object.keys(data.categories);

  // ---- Render questions ----
  data.questions.forEach((q, index) => {
    const block = document.createElement('div');
    block.className = 'question-block';
    block.innerHTML = `
      <span class="question-number">Question ${index + 1} of ${data.questions.length}</span>
      <p class="question-text">${q.text}</p>
      <div class="likert-scale" role="radiogroup" aria-label="${q.text}">
        ${data.scaleLabels.map((label, i) => `
          <div class="likert-option">
            <input type="radio" name="q${q.id}" id="q${q.id}_${i + 1}" value="${i + 1}" data-cat="${q.cat}">
            <label for="q${q.id}_${i + 1}">
              <span class="dot"></span>
              <span>${label}</span>
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
      Array.from(document.querySelectorAll('.likert-scale input:checked')).map(el => el.name)
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
    const rawScores = {};
    categoryKeys.forEach(k => rawScores[k] = 0);

    data.questions.forEach(q => {
      const checked = document.querySelector(`input[name="q${q.id}"]:checked`);
      rawScores[q.cat] += checked ? parseInt(checked.value, 10) : 0;
    });

    const itemsPerCategory = {};
    categoryKeys.forEach(k => itemsPerCategory[k] = data.questions.filter(q => q.cat === k).length);

    const normalized = {};
    categoryKeys.forEach(k => {
      const min = itemsPerCategory[k] * 1;
      const max = itemsPerCategory[k] * 5;
      normalized[k] = Math.round(((rawScores[k] - min) / (max - min)) * 100);
    });

    renderResults(normalized);
    quizSection.style.display = 'none';
    resultsSection.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ---- Results rendering ----
  function renderResults(normalized) {
    const ranked = categoryKeys
      .map(k => ({ key: k, score: normalized[k] }))
      .sort((a, b) => b.score - a.score);

    const top = ranked[0];
    const second = ranked[1];
    const isBlend = data.blendThreshold != null && (top.score - second.score) <= data.blendThreshold;

    // Headline
    const headlineEl = document.getElementById('result-headline');
    const subEl = document.getElementById('result-sub');
    if (isBlend) {
      headlineEl.textContent = `${data.categories[top.key].name} + ${data.categories[second.key].name}`;
      subEl.textContent = `Your top two scores were close — you show a genuine blend of both patterns.`;
    } else {
      headlineEl.textContent = data.categories[top.key].name;
      subEl.textContent = data.categories[top.key].summary || '';
    }

    // Bar chart — always show full profile, highest to lowest
    const chartEl = document.getElementById('bar-chart');
    chartEl.innerHTML = ranked.map(r => `
      <div class="bar-row">
        <div class="bar-label"><span>${data.categories[r.key].name}</span><span>${r.score}</span></div>
        <div class="bar-track"><div class="bar-fill" style="width:${r.score}%"></div></div>
      </div>
    `).join('');
    // Trigger transition after paint
    requestAnimationFrame(() => {
      document.querySelectorAll('.bar-fill').forEach(el => { el.style.width = el.style.width; });
    });

    // Detail cards — one per category, ordered by score
    const cardsEl = document.getElementById('result-cards');
    cardsEl.innerHTML = ranked.map(r => {
      const c = data.categories[r.key];
      return `
        <div class="result-card">
          <h3>${c.icon || ''} ${c.name} <span class="score-tag">${r.score}/100</span></h3>
          <p>${c.summary}</p>
          ${c.inPractice ? `<h4>How it shows up</h4><ul>${c.inPractice.map(i => `<li>${i}</li>`).join('')}</ul>` : ''}
          ${c.nuance ? `<h4>Research note</h4><p>${c.nuance}</p>` : ''}
          ${c.relationships ? `<h4>In relationships</h4><p>${c.relationships}</p>` : ''}
          ${c.tips ? `<h4>Worth trying</h4><ul>${c.tips.map(t => `<li>${t}</li>`).join('')}</ul>` : ''}
        </div>
      `;
    }).join('');

    // Disclaimer
    document.getElementById('result-disclaimer').textContent = data.disclaimer || '';
  }

  // ---- Retake ----
  const retakeBtn = document.getElementById('retake-btn');
  if (retakeBtn) {
    retakeBtn.addEventListener('click', () => {
      document.querySelectorAll('.likert-scale input:checked').forEach(el => el.checked = false);
      updateProgress();
      resultsSection.style.display = 'none';
      quizSection.style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();
