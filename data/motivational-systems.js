/* ============================================================
   PSYCHEELOOP — DATA FILE: MOTIVATIONAL SYSTEMS PROFILE
   Same shape as /data/love-languages.js — see that file for
   fully commented field explanations.
   ============================================================ */

window.QUIZ_DATA = {
  id: 'motivational-systems',
  title: 'The Motivational Systems Profile',
  eyebrow: 'Original framework · 30 questions · ~6 minutes',
  intro: "An original personality framework built from five independently validated motivational and cognitive science constructs — not a relabeled Big Five. You'll get a full profile across all five systems plus a dominant pattern.",
  scaleLabels: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
  blendThreshold: 10,

  questions: [
    { id: 1, cat: 'TV', text: 'I tend to notice what could go wrong before I notice what could go right.' },
    { id: 2, cat: 'RO', text: 'Being around people I care about recharges me more than almost anything else.' },
    { id: 3, cat: 'AD', text: 'When I see a new opportunity, I feel an urge to pursue it right away.' },
    { id: 4, cat: 'AU', text: 'I feel frustrated when someone tells me exactly how to do something I could figure out myself.' },
    { id: 5, cat: 'DP', text: 'I enjoy working through complex problems, even when a simple answer would do.' },
    { id: 6, cat: 'RO', text: "I make decisions with how they'll affect my relationships in mind." },
    { id: 7, cat: 'TV', text: 'I feel uneasy moving forward without a backup plan.' },
    { id: 8, cat: 'AD', text: 'I get a rush of energy when working toward something I really want.' },
    { id: 9, cat: 'DP', text: 'I prefer to fully understand something before forming an opinion on it.' },
    { id: 10, cat: 'AU', text: 'Having control over my own schedule matters more to me than most other things.' },
    { id: 11, cat: 'AD', text: 'I actively seek out situations where I could gain something significant.' },
    { id: 12, cat: 'TV', text: 'Even small risks can occupy my thoughts until I\'ve addressed them.' },
    { id: 13, cat: 'RO', text: 'A sense of belonging to a group matters a great deal to my wellbeing.' },
    { id: 14, cat: 'DP', text: 'I often think through several angles before making a decision.' },
    { id: 15, cat: 'AU', text: 'I prefer figuring things out my own way over following a set process.' },
    { id: 16, cat: 'TV', text: 'I prepare for worst-case scenarios more than most people I know.' },
    { id: 17, cat: 'AD', text: 'Positive possibilities excite me more than they worry me.' },
    { id: 18, cat: 'RO', text: 'I actively invest time in maintaining close relationships.' },
    { id: 19, cat: 'DP', text: 'Puzzles, debates, or in-depth analysis feel satisfying rather than draining.' },
    { id: 20, cat: 'AU', text: 'Being told what to do, even with good intentions, can feel constraining.' },
    { id: 21, cat: 'TV', text: 'Warning signs and potential problems catch my attention quickly.' },
    { id: 22, cat: 'AD', text: 'I find it easy to stay motivated when a goal feels reachable.' },
    { id: 23, cat: 'RO', text: 'Feeling disconnected from others affects my mood significantly.' },
    { id: 24, cat: 'DP', text: "I'm uncomfortable accepting an explanation without examining it closely." },
    { id: 25, cat: 'AU', text: 'I value the freedom to change my plans over strict consistency.' },
    { id: 26, cat: 'TV', text: 'I feel a strong pull to double-check things before committing.' },
    { id: 27, cat: 'AD', text: 'I often initiate new projects or plans without waiting for perfect conditions.' },
    { id: 28, cat: 'RO', text: 'I find deep satisfaction in helping people I\'m close to.' },
    { id: 29, cat: 'DP', text: "I'd rather reason through a problem myself than simply follow someone else's conclusion." },
    { id: 30, cat: 'AU', text: "I feel most like myself when I'm making my own decisions, without external pressure." }
  ],

  categories: {
    AD: {
      name: 'The Initiator',
      icon: '🎯',
      summary: 'You are motivated primarily by opportunity and forward momentum — energized by pursuing goals rather than maintaining the status quo. (Grounded in Behavioral Activation System research — Gray, 1987; Carver & White, 1994.)',
      inPractice: [
        'Fast starter on new projects; comfortable with uncertainty when there\'s upside potential.',
        'Naturally optimistic framing of challenges.',
        'Strong at generating momentum in stalled situations.'
      ],
      nuance: 'May underweight risk or move forward before fully vetting a plan, particularly if Threat Vigilance runs low for you. Can lose interest once the "chase" is over and the follow-through phase begins.',
      relationships: 'You bring energy and forward motion to relationships, but partners with higher Threat Vigilance may experience you as under-cautious — naming this difference explicitly avoids friction.',
      tips: [
        'Pair major decisions with a brief "what could go wrong" check.',
        'Build follow-through systems for the phase after initial excitement fades.',
        'Notice when enthusiasm is being read by others as impulsiveness.'
      ]
    },
    TV: {
      name: 'The Sentinel',
      icon: '🛡️',
      summary: 'You are motivated primarily by risk-awareness and problem-prevention — noticing what could go wrong before others do. (Grounded in Behavioral Inhibition System research — Gray, 1987; Carver & White, 1994.)',
      inPractice: [
        'Excellent at anticipating problems before they escalate.',
        'Thorough and reliable under pressure.',
        'A natural safeguard in group decision-making.'
      ],
      nuance: 'Can default to worst-case framing even in low-risk situations. If Approach Drive is comparatively low, opportunities may be under-pursued out of excess caution.',
      relationships: 'Often the person others rely on to catch what they missed — but this can be misread as pessimism. Being explicit that caution comes from care helps prevent misunderstanding.',
      tips: [
        'Distinguish genuinely high-stakes situations from lower-stakes ones where vigilance adds unnecessary friction.',
        'Set a personal time limit for risk-assessment on reversible decisions.',
        'Share your reasoning with collaborators rather than just the caution itself.'
      ]
    },
    DP: {
      name: 'The Analyst',
      icon: '🧩',
      summary: 'You are motivated by understanding — reasoning things through carefully rather than relying on quick judgment. (Grounded in Need for Cognition research — Cacioppo & Petty, 1982.)',
      inPractice: [
        'Careful, well-reasoned decision-making.',
        'Resistant to manipulation via oversimplified claims or social pressure.',
        'Strong at identifying flaws in arguments or plans others have overlooked.'
      ],
      nuance: 'Can over-deliberate on decisions that don\'t warrant it. Lower Relational Orientation paired with this trait can come across as detached during emotionally-driven discussions.',
      relationships: 'Brings rigor and clarity to shared decisions — but partners may need you to signal when you\'ve reached a conclusion versus when you\'re still processing.',
      tips: [
        'Set explicit decision deadlines for lower-stakes choices.',
        "Practice voicing your reasoning process out loud so others aren't left guessing.",
        'Notice moments when a conversation calls for emotional validation rather than analysis.'
      ]
    },
    RO: {
      name: 'The Connector',
      icon: '🤝',
      summary: 'You are motivated primarily by belonging and connection — relationships are a central organizing force in your decisions. (Grounded in Self-Determination Theory\'s relatedness need — Deci & Ryan, 2000.)',
      inPractice: [
        'Strong at building and maintaining trust.',
        "Attuned to others' emotional states.",
        'A natural stabilizing presence in group settings.'
      ],
      nuance: 'May over-prioritize others\' preferences at the expense of your own, particularly if Autonomy Drive is comparatively low.',
      relationships: 'This is your core strength area — worth checking that your investment in connection is reciprocated proportionally.',
      tips: [
        'Practice making some decisions based primarily on your own preference.',
        'Notice relationships where the emotional investment feels one-sided.',
        "Build in dedicated time for your own goals that isn't relationally motivated."
      ]
    },
    AU: {
      name: 'The Architect',
      icon: '🧭',
      summary: 'You are motivated primarily by self-direction — you want ownership over your own decisions and methods. (Grounded in Self-Determination Theory\'s autonomy need — Deci & Ryan, 1985, 2000.)',
      inPractice: [
        "Strong internal motivation that doesn't depend on external validation.",
        'Comfortable working independently.',
        'Tends to take ownership of outcomes.'
      ],
      nuance: "May resist helpful structure or guidance purely because it's externally imposed, even when it would genuinely help.",
      relationships: 'You do best with people who offer support without control — worth communicating this explicitly.',
      tips: [
        "Distinguish structure that's genuinely unhelpful from structure that simply wasn't your idea.",
        'Practice accepting input as information rather than as a threat to your independence.',
        'In collaborative settings, negotiate for autonomy over specific parts of a process.'
      ]
    }
  },

  disclaimer: 'The Motivational Systems Profile is an original assessment inspired by established psychological research (reinforcement sensitivity theory, need for cognition, and self-determination theory); it is not itself a peer-reviewed or population-normed instrument. Treat results as a structured, research-informed self-reflection exercise.'
};
