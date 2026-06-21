<template>
  <div class="min-h-[100dvh] bg-[var(--color-bg)] text-[var(--color-ink)]">
    <div class="pointer-events-none fixed inset-0 overflow-hidden">
      <div class="grain-layer absolute inset-0 opacity-20" />
    </div>

    <main class="relative mx-auto flex w-full max-w-[1080px] flex-col px-4 pb-14 pt-5 sm:px-6 sm:pt-6 lg:px-8">
      <section
        class="rounded-[1.4rem] border border-black/14 bg-[rgba(255,255,255,0.72)] px-6 py-7 shadow-[0_14px_38px_rgba(23,19,15,0.06)] sm:px-8 sm:py-8"
      >
        <div
          class="inline-flex items-center gap-2 rounded-full border border-[color:rgba(127,89,51,0.18)] bg-[rgba(127,89,51,0.1)] px-3 py-1.5 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[var(--color-accent)]"
        >
          Axon prep
        </div>
        <div class="mt-5 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <h1 class="font-serif-display max-w-[11ch] text-4xl font-medium tracking-[-0.06em] sm:text-5xl lg:text-[4.2rem]">
              7 days of answering the questions you are most likely to get.
            </h1>
            <p class="mt-4 max-w-[58ch] text-sm leading-7 text-[var(--color-muted)] sm:text-base">
              This plan is built from your final Axon CV and tuned for a question-first round 1. Instead of generic
              review blocks, each day is organized around the exact kinds of questions an interviewer is likely to ask,
              plus the parts of your experience that should anchor your answers.
            </p>
          </div>
          <div class="grid gap-3">
            <div class="rounded-[1rem] border border-black/12 bg-[rgba(251,248,242,0.9)] px-4 py-4">
              <p class="text-[0.72rem] uppercase tracking-[0.18em] text-[var(--color-accent)]">Anchor stories</p>
              <p class="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                ChatOps/widget/lexi-session, cursor pagination, tracing + SRE bot impact, Bosch platform/API ownership.
              </p>
            </div>
            <div class="rounded-[1rem] border border-black/12 bg-[rgba(251,248,242,0.9)] px-4 py-4">
              <p class="text-[0.72rem] uppercase tracking-[0.18em] text-[var(--color-accent)]">Main objective</p>
              <p class="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                Sound like a frontend engineer with production depth, not someone who vaguely touched many systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="mt-6 grid gap-4">
        <article
          v-for="day in days"
          :key="day.label"
          class="rounded-[1.3rem] border border-black/14 bg-[rgba(255,255,255,0.74)] shadow-[0_10px_28px_rgba(23,19,15,0.05)]"
        >
          <div class="flex flex-col gap-2 border-b border-black/10 bg-[rgba(251,248,242,0.95)] px-6 py-5 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <p class="text-[0.72rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">{{ day.label }}</p>
              <h2 class="font-serif-display mt-2 text-[1.65rem] font-medium tracking-[-0.04em]">
                {{ day.title }}
              </h2>
            </div>
            <p class="text-sm font-medium text-[var(--color-muted)]">{{ day.date }}</p>
          </div>

          <div class="grid gap-4 px-6 py-5 lg:grid-cols-[1.05fr_0.95fr]">
            <div class="space-y-4">
              <div class="rounded-[1rem] border border-black/10 bg-white px-4 py-4">
                <p class="text-[0.72rem] uppercase tracking-[0.18em] text-[var(--color-accent)]">Goal</p>
                <p class="mt-2 text-sm leading-6 text-[var(--color-muted)]">{{ day.goal }}</p>
              </div>

              <div class="rounded-[1rem] border border-black/10 bg-white px-4 py-4">
                <p class="text-[0.72rem] uppercase tracking-[0.18em] text-[var(--color-accent)]">Questions to practice</p>
                <ul class="mt-3 space-y-2 pl-5 text-sm leading-6 text-[var(--color-muted)]">
                  <li v-for="item in day.questions" :key="item">{{ item }}</li>
                </ul>
              </div>
            </div>

            <div class="space-y-4">
              <div class="rounded-[1rem] border border-black/10 bg-white px-4 py-4">
                <p class="text-[0.72rem] uppercase tracking-[0.18em] text-[var(--color-accent)]">A good answer should cover</p>
                <ul class="mt-3 space-y-2 pl-5 text-sm leading-6 text-[var(--color-muted)]">
                  <li v-for="item in day.cover" :key="item">{{ item }}</li>
                </ul>
              </div>

              <div class="rounded-[1rem] border border-black/10 bg-[rgba(127,89,51,0.06)] px-4 py-4">
                <p class="text-[0.72rem] uppercase tracking-[0.18em] text-[var(--color-accent)]">Drill / output</p>
                <ul class="mt-3 space-y-2 pl-5 text-sm leading-6 text-[var(--color-muted)]">
                  <li v-for="item in day.output" :key="item">{{ item }}</li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
type DayPlan = {
  label: string
  title: string
  date: string
  goal: string
  questions: string[]
  cover: string[]
  output: string[]
}

const days: DayPlan[] = [
  {
    label: 'Day 1',
    title: 'Tell me about yourself',
    date: 'Sunday, June 21, 2026',
    goal:
      'Build an intro that immediately positions you for this role instead of reciting your full background.',
    questions: [
      'Introduce yourself.',
      'Walk me through your recent experience.',
      'Why are you interested in Axon?',
      'What is your strongest point that distinguishes you from other candidates?',
    ],
    cover: [
      'Start with your current shape: frontend engineer with production experience across digital banking and developer platforms.',
      'Land quickly on React, TypeScript, Next.js, product-facing frontend work, and cross-team delivery.',
      'Name 2 or 3 memorable signals only: platform thinking, debugging/observability, and ownership of real production features.',
      'Have a short Why Axon answer ready around meaningful product work, ownership, and engineering quality.',
    ],
    output: [
      'Record a 90-second self introduction and a 2-minute CV walkthrough.',
      'Finish with one version that sounds natural enough to say without memorizing it word for word.',
    ],
  },
  {
    label: 'Day 2',
    title: 'Most prized project and what you learned',
    date: 'Monday, June 22, 2026',
    goal:
      'Choose which project to use as your flagship story and make sure you can explain why it mattered and what it taught you.',
    questions: [
      'What is your most prized project?',
      'What have you learned most from your past projects?',
      'Tell me about a project you are proud of.',
      'Which project best represents how you work?',
    ],
    cover: [
      'Use the ChatOps/widget/lexi-session story as your flagship project unless the interviewer clearly wants Bosch.',
      'Explain the actual product problem first, then the integration challenge, then your architectural decisions.',
      'Be clear on what you personally owned versus what backend or SRE owned.',
      'End with what the project taught you about frontend system boundaries, maintainability, and product integration.',
    ],
    output: [
      'Write one 3-minute version and one 90-second version of your flagship project story.',
      'Write one sentence for what that project taught you that changed how you engineer now.',
    ],
  },
  {
    label: 'Day 3',
    title: 'ChatOps integration deep dive',
    date: 'Tuesday, June 23, 2026',
    goal:
      'Be able to defend the hardest technical follow-ups in your strongest Cake story.',
    questions: [
      'Why Web Components?',
      'Why not iframe?',
      'What were the hardest tradeoffs?',
      'How did you structure the integration so host concerns stayed clear?',
      'How did you handle shared routing and URL search params?',
      'How did you test that boundary?',
    ],
    cover: [
      'Host-owned concerns stayed in the host: auth, permissions, tenant context, routing ownership, API clients, and realtime wiring.',
      'Embedded dashboard owned feature-specific UI behavior and local workflow state.',
      'Web Components were the interoperability boundary between React host and Vue dashboard, without pretending it was just a simple shared component.',
      'Routing stayed host-owned, and route-related data had to cross the boundary in a controlled way so shared search params did not become a free-for-all.',
    ],
    output: [
      'Practice this whole story as a follow-up-heavy technical conversation, not as one monologue.',
      'Get comfortable answering the same core decision from 4 different angles without repeating yourself.',
    ],
  },
  {
    label: 'Day 4',
    title: 'Quality, performance, and debugging',
    date: 'Wednesday, June 24, 2026',
    goal:
      'Prepare the answers that prove you raise engineering quality and can talk concretely about performance or debugging work.',
    questions: [
      'Tell me about a performance problem you solved.',
      'How do you keep code quality high?',
      'Tell me about a debugging or production issue you handled.',
      'How do you approach safe rollout or production hardening?',
    ],
    cover: [
      'Use cursor pagination for performance and frontend scalability.',
      'Use tracing plus SRE bot integration for debugging leverage and faster incident triage.',
      'Use build-time improvement and shared core package maintenance as quality signals, but keep the explanation outcome-focused.',
      'Always say what was painful before, what changed, and how you know it mattered afterward.',
    ],
    output: [
      'Practice one answer each for quality, performance, and debugging, all under 2 minutes.',
      'Strip out any answer that sounds like generic engineering values instead of a real project story.',
    ],
  },
  {
    label: 'Day 5',
    title: 'Bosch and technical breadth',
    date: 'Thursday, June 25, 2026',
    goal:
      'Make Bosch sound like substantial engineering ownership and use it to show range beyond your Cake stories.',
    questions: [
      'Tell me about something technically challenging you built.',
      'What is a project that proves your strongest engineering point?',
      'How have your past projects shaped the way you design systems now?',
      'What is the achievement you are most proud of that proves your strong point?',
    ],
    cover: [
      'Explain what AutoWRX actually was and who the users were before diving into architecture.',
      'Tell one coherent Bosch story around Version 2 features, API decoupling, CI/CD, and operations support.',
      'Use Bosch to show cross-layer judgment and product thinking, not just tool familiarity.',
      'End with what Bosch taught you that made you stronger in your later Cake work.',
    ],
    output: [
      'Prepare one Bosch answer that can stand on its own if the interviewer gets tired of hearing only Cake stories.',
      'Write a one-line summary of what Bosch proves about you as an engineer.',
    ],
  },
  {
    label: 'Day 6',
    title: 'Behavioral pressure test',
    date: 'Friday, June 26, 2026',
    goal:
      'Use the reusable behavioral prompts from the backend loop to test whether your FE answers still sound grounded under pressure.',
    questions: [
      'Do you use AI in your work process? To what extent?',
      'Describe an occasion of conflict or disagreement that changed the direction of the work.',
      'Tell me about a time you wanted more autonomy or clearer ownership.',
      'What have you learned most from your projects about working with others?',
    ],
    cover: [
      'For AI usage, stay practical: implementation speed, reviews, docs, iteration, but with responsibility still on you.',
      'For conflict or autonomy, choose a story that shows maturity and product judgment, not frustration.',
      'For collaboration, pull from backend alignment on pagination or shared tracing adoption.',
      'Every behavioral answer still needs scope, your role, tension, decision, and outcome.',
    ],
    output: [
      'Run a 45-minute behavioral mock and write down the 5 answers that still sound too generic.',
      'Rewrite those answers so they land on a real decision and a real result.',
    ],
  },
  {
    label: 'Day 7',
    title: 'Round 1 simulation',
    date: 'Saturday, June 27, 2026',
    goal:
      'Put the whole thing together in the format a round 1 interviewer is most likely to use.',
    questions: [
      'Introduce yourself.',
      'What project are you most proud of?',
      'Tell me about a performance or debugging story.',
      'Tell me about a technically challenging integration decision.',
      'What have you learned most from your past projects?',
      'Why Axon?',
    ],
    cover: [
      'The interviewer should leave with four strong impressions: you are solid on frontend fundamentals, you owned real production work, you think clearly about boundaries and tradeoffs, and you communicate in a calm structured way.',
      'If a story still falls apart under follow-up questions, fix only that one story instead of reopening the whole prep plan.',
    ],
    output: [
      'Run one full mock round 1 with all six questions above.',
      'Finish with a one-page cheat sheet: intro, 4 anchor stories, 8 likely follow-ups, and 3 questions to ask the interviewer.',
    ],
  },
]
</script>
