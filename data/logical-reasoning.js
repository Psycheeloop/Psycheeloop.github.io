/* ============================================================
   PSYCHEELOOP — DATA FILE: LOGICAL REASONING
   ============================================================
   This quiz uses reasoning-engine.js, NOT quiz-engine.js, because
   it scores right/wrong answers with difficulty weighting instead
   of Likert self-report. See reasoning-engine.js for scoring logic.

   Each question needs: id, type (must match a key in "types"
   below), difficulty ("easy" | "medium" | "hard" — worth 1/2/3
   points respectively), text, options (array of 4 strings),
   correctIndex (0-based index into options), and explanation.
   ============================================================ */

window.QUIZ_DATA = {
  id: 'logical-reasoning',
  title: 'The Logical Reasoning Assessment',
  eyebrow: 'Cognitive · 24 questions · untimed',
  intro: "A performance-based reasoning test across four question types. This is not an IQ test — real IQ scores require standardized, professionally normed administration. There's no time limit; take the time you need.",

  types: {
    inductive: { name: 'Pattern / Inductive Reasoning', icon: '🔢', description: 'The ability to observe examples and infer the underlying rule — spotting trends, debugging the unfamiliar, or picking up a new game\'s rules from a few rounds.' },
    deductive: { name: 'Deductive / Logical Reasoning', icon: '🔗', description: 'The ability to draw guaranteed conclusions from given premises, step by step — evaluating whether a conclusion actually follows, independent of whether it "feels" right.' },
    quantitative: { name: 'Quantitative Reasoning', icon: '📊', description: 'Reasoning with numbers, proportions, and mathematical relationships in applied, multi-step problems.' },
    spatial: { name: 'Spatial Reasoning', icon: '🧊', description: 'Mental manipulation of objects, orientations, and spatial relationships.' }
  },

  questions: [
    { id: 1, type: 'spatial', difficulty: 'easy', text: 'A clock reads 3:00. If the minute hand moves 90 degrees clockwise, what time does the clock now show?', options: ['3:15', '3:30', '3:45', '3:00'], correctIndex: 0, explanation: 'The minute hand moves 15 minutes per 90°, so 3:00 + 15 minutes = 3:15.' },
    { id: 2, type: 'quantitative', difficulty: 'easy', text: 'If 3 apples cost $6, how much would 7 apples cost at the same price per apple?', options: ['$12', '$14', '$18', '$21'], correctIndex: 1, explanation: '$6 ÷ 3 = $2 per apple; $2 × 7 = $14.' },
    { id: 3, type: 'inductive', difficulty: 'easy', text: 'What comes next in the sequence: 2, 4, 6, 8, ___?', options: ['9', '10', '12', '11'], correctIndex: 1, explanation: 'The pattern adds 2 each step, so the next number is 10.' },
    { id: 4, type: 'deductive', difficulty: 'easy', text: 'All squares are rectangles. This shape is a square. What must be true of this shape?', options: ['It is a triangle', 'It is a rectangle', 'It is a circle', 'It cannot be determined'], correctIndex: 1, explanation: 'Direct application of the given category rule — all squares are rectangles.' },
    { id: 5, type: 'spatial', difficulty: 'easy', text: 'You are facing North. You turn 90 degrees clockwise, then turn another 180 degrees clockwise. Which direction are you now facing?', options: ['North', 'South', 'East', 'West'], correctIndex: 3, explanation: '90° + 180° = 270° clockwise from North, which lands on West.' },
    { id: 6, type: 'quantitative', difficulty: 'easy', text: 'A train travels 60 miles in 2 hours at a constant speed. At that same speed, how far will it travel in 5 hours?', options: ['120 miles', '150 miles', '180 miles', '300 miles'], correctIndex: 1, explanation: '60 ÷ 2 = 30 mph; 30 × 5 = 150 miles.' },
    { id: 7, type: 'inductive', difficulty: 'easy', text: 'What number continues the pattern: 3, 6, 12, 24, ___?', options: ['30', '36', '48', '40'], correctIndex: 2, explanation: 'The pattern doubles each step (×2), so the next number is 48.' },
    { id: 8, type: 'deductive', difficulty: 'easy', text: 'If it is raining, then the ground is wet. It is raining. What can we conclude?', options: ['The ground is wet', 'The ground is dry', 'It will stop raining', 'Nothing can be concluded'], correctIndex: 0, explanation: 'A valid direct deduction (modus ponens): the condition is met, so the consequence follows.' },
    { id: 9, type: 'spatial', difficulty: 'medium', text: 'A cube has its six faces numbered 1 through 6, with 1 opposite 6, 2 opposite 5, and 3 opposite 4. If face 1 is on top, which face is on the bottom?', options: ['5', '6', '3', '4'], correctIndex: 1, explanation: "Face 1's stated opposite is face 6, so face 6 is on the bottom." },
    { id: 10, type: 'quantitative', difficulty: 'medium', text: 'A store offers a 20% discount on an $80 item, then takes an additional 10% off the already-discounted price. What is the final price?', options: ['$56.00', '$57.60', '$60.00', '$64.00'], correctIndex: 1, explanation: '$80 × 0.80 = $64; $64 × 0.90 = $57.60. Discounts apply sequentially, not additively.' },
    { id: 11, type: 'inductive', difficulty: 'medium', text: 'Complete the pattern: 1, 4, 9, 16, 25, ___?', options: ['30', '36', '32', '49'], correctIndex: 1, explanation: 'The pattern is perfect squares (1², 2², 3²...); the next is 6² = 36.' },
    { id: 12, type: 'deductive', difficulty: 'medium', text: 'All members of the Blue Team wear helmets. Sam does not wear a helmet. What can we conclude about Sam?', options: ['Sam is on the Blue Team', 'Sam is not on the Blue Team', 'Sam is on a team called Red', 'Cannot be determined'], correctIndex: 1, explanation: 'Valid deduction by contrapositive (modus tollens): failing the condition means Sam cannot be on the Blue Team.' },
    { id: 13, type: 'spatial', difficulty: 'medium', text: 'You are standing at the center of a room, facing the door (the North wall). The window is on your right. Which wall is the window on?', options: ['North', 'South', 'East', 'West'], correctIndex: 2, explanation: 'Facing North, your right hand points East.' },
    { id: 14, type: 'quantitative', difficulty: 'medium', text: 'The average of five numbers is 20. If one number is removed, the average of the remaining four numbers is 18. What was the removed number?', options: ['20', '22', '28', '30'], correctIndex: 2, explanation: 'Sum of 5 = 100; sum of remaining 4 = 72; removed number = 100 − 72 = 28.' },
    { id: 15, type: 'inductive', difficulty: 'medium', text: 'What letter comes next in this sequence: A, C, F, J, O, ___?', options: ['T', 'S', 'U', 'R'], correctIndex: 2, explanation: 'The letter-position gaps increase by 1 each time (2,3,4,5, then 6); position 21 is U.' },
    { id: 16, type: 'deductive', difficulty: 'medium', text: 'Some cats are black. All black things absorb more heat in sunlight. What can we conclude?', options: ['All cats absorb more heat in sunlight', 'Some cats absorb more heat in sunlight', 'No cats absorb more heat in sunlight', 'All heat-absorbing things are cats'], correctIndex: 1, explanation: 'Valid for the subset of cats confirmed black — but this cannot be generalized to "all" cats.' },
    { id: 17, type: 'spatial', difficulty: 'hard', text: 'A rectangular garden is divided into a 3×3 grid of nine equal square plots. The center plot is planted with roses. Plots sharing a full edge with the rose plot (not just a corner) are planted with tulips. How many plots are tulips?', options: ['2', '3', '4', '8'], correctIndex: 2, explanation: 'A center cell in a 3×3 grid has exactly 4 edge-adjacent neighbors (up, down, left, right).' },
    { id: 18, type: 'quantitative', difficulty: 'hard', text: 'Pipe A can fill a tank in 6 hours. Pipe B can fill the same tank in 3 hours. If both pipes are used together, how long will it take to fill the tank?', options: ['2 hours', '3 hours', '4.5 hours', '1.5 hours'], correctIndex: 0, explanation: 'Combined rate = 1/6 + 1/3 = 1/2 tank per hour, so it takes 2 hours to fill.' },
    { id: 19, type: 'inductive', difficulty: 'hard', text: 'Complete the sequence: 2, 3, 5, 8, 13, 21, ___?', options: ['29', '34', '32', '36'], correctIndex: 1, explanation: 'Each term is the sum of the two before it (Fibonacci-style): 13 + 21 = 34.' },
    { id: 20, type: 'deductive', difficulty: 'hard', text: 'If a number is divisible by 6, then it is divisible by both 2 and 3. The number 15 is divisible by 3 but not by 2. What can we conclude?', options: ['15 is divisible by 6', '15 is not divisible by 6', '15 is divisible by 2', 'Not enough information'], correctIndex: 1, explanation: 'Divisibility by 6 requires divisibility by both 2 AND 3; 15 fails the "divisible by 2" condition, so it fails divisibility by 6.' },
    { id: 21, type: 'spatial', difficulty: 'hard', text: 'A cube is painted red on all six faces, then cut into 27 equal smaller cubes (a 3×3×3 arrangement). How many small cubes have paint on exactly 2 faces?', options: ['6', '8', '12', '24'], correctIndex: 2, explanation: 'In a 3×3×3 cube, each of the 12 edges has exactly one non-corner cube with 2 painted faces.' },
    { id: 22, type: 'quantitative', difficulty: 'hard', text: 'A car depreciates by 15% of its current value each year. If it is worth $20,000 today, approximately what will it be worth in 2 years?', options: ['$14,000', '$14,450', '$15,300', '$17,000'], correctIndex: 1, explanation: 'Compound depreciation: $20,000 × 0.85 × 0.85 = $14,450 — not simple/flat depreciation.' },
    { id: 23, type: 'inductive', difficulty: 'hard', text: 'What comes next in the sequence: 4, 9, 19, 39, 79, ___?', options: ['149', '158', '159', '169'], correctIndex: 2, explanation: 'The pattern is ×2, +1 each step: 79 × 2 + 1 = 159.' },
    { id: 24, type: 'deductive', difficulty: 'hard', text: 'All engineers at the firm have a degree in a STEM field. No one without a STEM degree can access the lab. Maria works at the firm and cannot access the lab. What can we conclude about Maria?', options: ['Maria is an engineer', 'Maria is not an engineer', 'Maria has a STEM degree', 'Cannot be determined'], correctIndex: 3, explanation: 'The premise only tells us "no STEM degree → no lab access." Lacking lab access does not validly tell us her STEM/engineer status — assuming otherwise is the "affirming the consequent" fallacy.' }
  ],

  disclaimer: 'This is an original reasoning assessment for self-reflection, not a clinically validated or professionally normed IQ test. It should not be used for diagnostic, educational placement, or employment decisions.'
};
