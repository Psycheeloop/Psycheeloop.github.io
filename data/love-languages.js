/* ============================================================
   PSYCHEELOOP — DATA FILE: LOVE LANGUAGES
   ============================================================
   This is the fully commented reference example — every other
   Likert-quiz data file (Big Five, Attachment Style, etc.) follows
   this same shape.

   TO EDIT QUESTION TEXT: change the "text" value for that question.
   TO EDIT A RESULT PAGE: change the fields inside "categories".
   TO ADD/REMOVE A QUESTION: add/remove an entry from "questions"
     and update the matching category's item count automatically
     adjusts — no scoring math needs to change by hand.
   TO CHANGE THE "BLEND" SENSITIVITY: change blendThreshold (the
     point gap, out of 100, below which two top scores count as
     a blended result instead of a single winner).
   ============================================================ */

window.QUIZ_DATA = {
  id: 'love-languages',
  title: 'The Love Languages Quiz',
  eyebrow: 'Relationships · 25 questions · ~5 minutes',
  intro: "This quiz explores how you naturally express and prefer to receive affection. Answer honestly based on how you actually feel — you'll get a full profile across all five love languages, not just a single label.",
  scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
  blendThreshold: 2,

  questions: [
    { id: 1, cat: 'WA', text: "Hearing someone say they're proud of me lifts my mood for the whole day." },
    { id: 2, cat: 'PT', text: "A hand on my shoulder or a hug can calm me down faster than words can." },
    { id: 3, cat: 'AS', text: "When someone handles a task for me without being asked, I feel genuinely cared for." },
    { id: 4, cat: 'RG', text: "I hold onto small gifts from people I love — they mean more to me than their price tag." },
    { id: 5, cat: 'QT', text: "I feel most connected to someone when we've had uninterrupted time together, phones away." },
    { id: 6, cat: 'WA', text: "I replay compliments from people I care about in my head afterward." },
    { id: 7, cat: 'AS', text: "Someone doing the dishes or running an errand for me feels like a real gesture of love." },
    { id: 8, cat: 'QT', text: "I'd choose a quiet evening of full attention from someone over an expensive outing with distractions." },
    { id: 9, cat: 'PT', text: "I notice when physical affection (hugs, hand-holding) is missing from a relationship." },
    { id: 10, cat: 'RG', text: "I put a lot of thought into finding the \"right\" gift for people I care about." },
    { id: 11, cat: 'WA', text: "Verbal encouragement matters more to me than most other ways someone could show support." },
    { id: 12, cat: 'QT', text: "I feel a bit hurt when someone I'm close to is constantly distracted when we're together." },
    { id: 13, cat: 'AS', text: "I show love mostly through doing things for people rather than saying things to them." },
    { id: 14, cat: 'PT', text: "Sitting close to someone (even without talking) makes me feel secure." },
    { id: 15, cat: 'RG', text: "A thoughtful, unexpected gift can make me feel deeply understood." },
    { id: 16, cat: 'WA', text: "I find it easy to tell people exactly why I appreciate them." },
    { id: 17, cat: 'AS', text: "I feel frustrated when I offer to help someone and they don't take me up on it." },
    { id: 18, cat: 'QT', text: "Long, uninterrupted conversations are one of my favorite parts of any relationship." },
    { id: 19, cat: 'PT', text: "I initiate physical affection (hugs, touch) fairly often with people I'm close to." },
    { id: 20, cat: 'RG', text: "I remember specific gifts people have given me years later." },
    { id: 21, cat: 'WA', text: "A written note or message telling me how someone feels about me means a lot." },
    { id: 22, cat: 'QT', text: "I'd rather have someone's full attention for an hour than a gift." },
    { id: 23, cat: 'AS', text: "I feel most loved when someone anticipates a need I have and takes care of it." },
    { id: 24, cat: 'PT', text: "Physical closeness is one of the first things I miss when I'm apart from someone I love." },
    { id: 25, cat: 'RG', text: "Giving gifts is one of my favorite ways to show someone I've been thinking of them." }
  ],

  categories: {
    WA: {
      name: 'Words of Affirmation',
      icon: '💬',
      summary: 'You feel most loved through verbal and written expressions — compliments, encouragement, and hearing people articulate their appreciation out loud.',
      inPractice: [
        'Romantic: you treasure texts or comments telling you what your partner values about you.',
        'Friendship: a friend saying "I\'m proud of you" sticks with you longer than most gestures.',
        'Family: verbal praise from parents or siblings carries extra emotional weight.'
      ],
      nuance: "Words of Affirmation is consistently one of the most commonly reported preferences in love-language studies, but research cautions against assuming this is your only need — people generally rate all five languages as meaningful, not just their top one.",
      relationships: "Pairs well with any language, but can feel under-nourished by a partner whose default is Acts of Service or Gifts, since affection may be shown rather than said — worth naming this gap explicitly.",
      tips: [
        "Tell people directly, in words, when you need reassurance — don't assume they'll infer it.",
        'Keep a folder of meaningful messages you can revisit on hard days.',
        'Practice giving the same kind of affirmation you crave — it\'s often reciprocal.'
      ]
    },
    QT: {
      name: 'Quality Time',
      icon: '⏳',
      summary: 'Undivided attention — not just shared presence — is what makes you feel valued.',
      inPractice: [
        'Romantic: device-free dinners or walks mean more to you than grand gestures.',
        "Friendship: you'd rather have a long one-on-one catchup than a group hangout.",
        'Family: traditions like a weekly call or shared activity feel like an anchor.'
      ],
      nuance: 'Quality time is closely tied to broader relationship-science findings on responsiveness — being truly seen and heard by a partner predicts satisfaction independent of any love-language framework.',
      relationships: "Can clash with a partner whose Acts of Service style means they show love by staying busy doing things for you rather than sitting with you — both are valid, but worth discussing openly.",
      tips: [
        'Protect small, regular windows of distraction-free time rather than waiting for big occasions.',
        "Say explicitly when a conversation feels rushed or divided — it's a valid need, not neediness.",
        'Initiate shared activities rather than passive time (e.g., cooking together vs. parallel scrolling).'
      ]
    },
    AS: {
      name: 'Acts of Service',
      icon: '🛠️',
      summary: 'Actions — help, effort, follow-through — speak louder to you than words or symbols.',
      inPractice: [
        'Romantic: a partner handling something stressful without being asked feels like love in action.',
        'Friendship: a friend showing up to help you move or prep for an event means more than a card.',
        'Family: practical support (rides, errands, meals) reads as deep care.'
      ],
      nuance: 'Acts of Service is one of the languages researchers note overlaps significantly with other categories — an act of service can also carry emotional/verbal meaning, which is part of why measuring these as fully distinct categories has proven scientifically tricky.',
      relationships: "Pairs smoothly with Quality Time and Words of Affirmation but can feel invisible to a Gifts- or Touch-oriented partner unless you name what you're doing and why.",
      tips: [
        'Be specific about what kind of help actually feels supportive (unsolicited help can sometimes feel like control).',
        "Say thank you out loud when someone helps — it reinforces what's landing for you.",
        "Don't assume your effort will be read as love the same way you experience others' — check in."
      ]
    },
    RG: {
      name: 'Receiving Gifts',
      icon: '🎁',
      summary: 'Thoughtful objects — not the cost, but the intention behind them — feel like tangible proof of being known.',
      inPractice: [
        'Romantic: a partner remembering an offhand comment and turning it into a gift feels deeply personal.',
        'Friendship: a small souvenir from a trip signals "I thought of you while apart."',
        'Family: handmade or sentimental gifts often outweigh expensive ones.'
      ],
      nuance: "Of all five languages, Receiving Gifts is the one most frequently misunderstood as materialism — but studies emphasize it's the thoughtfulness and symbolism, not monetary value, that drives the emotional response.",
      relationships: 'Can be misread by a partner who deprioritizes gift-giving as "not a big deal" — pairing well requires explicitly sharing why symbols matter to you.',
      tips: [
        'Communicate that it\'s the thought, not the price, that matters to you.',
        'Keep a running note of things people mention wanting — it makes future gifts easier and more meaningful.',
        'Give small, frequent tokens rather than waiting for occasions, if that fits your relationship style.'
      ]
    },
    PT: {
      name: 'Physical Touch',
      icon: '🤗',
      summary: 'Physical closeness — hugs, hand-holding, sitting near each other — is your most direct channel for feeling safe and loved.',
      inPractice: [
        'Romantic: casual touch throughout the day (not just intimacy) is what keeps you feeling connected.',
        'Friendship: a hug hello/goodbye carries real emotional weight.',
        'Family: physical affection growing up often shapes how central this language feels as an adult.'
      ],
      nuance: 'Physical touch has some of the clearest biological grounding of the five languages (linked to oxytocin release and stress reduction), but needing touch doesn\'t mean other languages are unimportant to you.',
      relationships: 'Most naturally complements Quality Time; may require more explicit communication with a Words- or Gifts-oriented partner who doesn\'t default to physical expression.',
      tips: [
        "Name your need for physical affection directly — others may not initiate it as often as you'd like.",
        'Notice non-romantic forms of touch (a hand on the arm, sitting close) that can meet this need too.',
        'Respect that others may need more warm-up time before physical closeness feels comfortable.'
      ]
    }
  },

  disclaimer: "This quiz is inspired by Gary Chapman's popular love languages concept, not a clinically validated psychological instrument. Research suggests most people value all five ways of expressing and receiving love rather than having one dominant \"type.\" Treat your results as a reflective starting point for conversation with people you care about, not a fixed label."
};
