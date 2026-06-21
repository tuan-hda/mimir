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
              7 days to make your experience easy to believe.
            </h1>
            <p class="mt-4 max-w-[58ch] text-sm leading-7 text-[var(--color-muted)] sm:text-base">
              This plan is built from your final Axon CV. It is intentionally narrow: seven days, four anchor
              stories, and a steady increase in depth so you can handle follow-up questions instead of just rehearsing
              polished surface answers.
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
                <p class="text-[0.72rem] uppercase tracking-[0.18em] text-[var(--color-accent)]">What to do</p>
                <ul class="mt-3 space-y-2 pl-5 text-sm leading-6 text-[var(--color-muted)]">
                  <li v-for="item in day.tasks" :key="item">{{ item }}</li>
                </ul>
              </div>
            </div>

            <div class="space-y-4">
              <div class="rounded-[1rem] border border-black/10 bg-white px-4 py-4">
                <p class="text-[0.72rem] uppercase tracking-[0.18em] text-[var(--color-accent)]">Deep dive to prepare</p>
                <ul class="mt-3 space-y-2 pl-5 text-sm leading-6 text-[var(--color-muted)]">
                  <li v-for="item in day.deepDive" :key="item">{{ item }}</li>
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
  tasks: string[]
  deepDive: string[]
  output: string[]
}

const days: DayPlan[] = [
  {
    label: 'Day 1',
    title: 'Build the spine of your story',
    date: 'Sunday, June 21, 2026',
    goal:
      'Stop sounding like someone who touched many things and start sounding like someone who owned a few important things deeply.',
    tasks: [
      'Write a 90-second self introduction.',
      'Write a 2-minute Cake summary and a 2-minute Bosch summary in English.',
      'Lock 4 anchor stories: ChatOps/widget/lexi-session, cursor pagination, tracing + SRE bot impact, Bosch platform/API ownership.',
      'For each story, write the problem, why it mattered, your role, tradeoff, and result.',
    ],
    deepDive: [
      'ChatOps/widget/lexi-session: why the embedding model mattered, why Web Components made sense, what the host app still owned, and where the session boundary lived.',
      'Prepare for: Why was this not just a simpler iframe or a separate app?'
    ],
    output: [
      'Record Tell me about yourself and Walk me through your recent experience.',
      'Finish with 1 intro and 4 STAR outlines you can speak without reading.',
    ],
  },
  {
    label: 'Day 2',
    title: 'React and JavaScript fundamentals',
    date: 'Monday, June 22, 2026',
    goal:
      'Make sure your practical experience is backed by frontend fundamentals clean enough for follow-up questions.',
    tasks: [
      'Review rendering, reconciliation, rerenders, keys, memoization, and state ownership.',
      'Review useEffect, stale closures, cleanup, and dependency mistakes.',
      'Review controlled inputs, composition, custom hooks, lifting state, and event flow.',
      'Review the JavaScript event loop, promises, closures, debouncing, and throttling.',
    ],
    deepDive: [
      'Use the ChatOps integration story to explain state ownership, rerender boundaries, and how you kept the embedded dashboard from becoming a maintenance trap.',
      'Prepare for: How did you structure the integration so host concerns stayed clear?'
    ],
    output: [
      'Answer 15 short React and JavaScript questions out loud in English.',
      'Create a one-page note with the 10 frontend concepts you least want to blank on.',
    ],
  },
  {
    label: 'Day 3',
    title: 'Quality, performance, and engineering judgment',
    date: 'Tuesday, June 23, 2026',
    goal:
      'Prepare the answers that make you sound like someone who improves engineering quality, not just someone who ships tickets.',
    tasks: [
      'Review render performance, lazy loading, route splitting, and frontend performance tradeoffs.',
      'Review testing strategy and how you think about code review quality.',
      'Review how you talk about production debugging and safe rollout behavior.',
      'Prepare one answer for code quality, one for performance, and one for debugging.',
    ],
    deepDive: [
      'Cursor pagination: why offset-based pagination became a problem, what changed in frontend state and URL behavior, and why cursor improved response time and scalability.',
      'Prepare for: What tradeoffs did cursor pagination introduce for the UI or API contract?'
    ],
    output: [
      'Practice three answers under 2 minutes each: quality, performance, debugging.',
      'Make sure each answer lands on a specific result, not just effort.',
    ],
  },
  {
    label: 'Day 4',
    title: 'Observability, incidents, and production depth',
    date: 'Wednesday, June 24, 2026',
    goal:
      'Turn the tracing and SRE bot work into a strong story about production leverage, not just instrumentation setup.',
    tasks: [
      'Review the debugging pain that existed before shared tracing.',
      'Review what changed technically after the instrumentation work.',
      'Review how trace IDs became genuinely useful to engineers, not just present in logs.',
      'Review how incident triage got faster once the SRE bot could consume the trace context.',
    ],
    deepDive: [
      'Tracing + SRE bot story: explain the original problem, what you actually contributed, which shared conventions had to exist, and why incident triage got materially faster.',
      'Also prep a shorter shared-core-packages side story so you can explain cross-project reliability work without naming too many internals.'
    ],
    output: [
      'Practice one 3-minute version and one 90-second version of the tracing story.',
      'End the day with one story that proves technical depth and one that proves cross-team leverage.',
    ],
  },
  {
    label: 'Day 5',
    title: 'Bosch deep dive and cross-layer ownership',
    date: 'Thursday, June 25, 2026',
    goal:
      'Make Bosch sound like serious platform and product ownership, not just an older role on the CV.',
    tasks: [
      'Review what AutoWRX actually was, who used it, and why the product mattered.',
      'Review the Version 2 features you led and what changed for users.',
      'Review the API decoupling story: what the monolith pain was and what centralized auth/routing improved.',
      'Review CI/CD, environment operations, and customer/demo environment support.',
    ],
    deepDive: [
      'Bosch platform/API story: tell it as one coherent system story instead of a list of responsibilities.',
      'Prepare for: What was the hardest architectural or maintainability decision you made there?'
    ],
    output: [
      'Practice one answer for Tell me about something technically challenging you built using Bosch, not Cake.',
      'Finish with one Bosch story strong enough to stand beside your Cake stories.',
    ],
  },
  {
    label: 'Day 6',
    title: 'Behavioral and mock interview pressure test',
    date: 'Friday, June 26, 2026',
    goal:
      'Find where your answers still sound generic, too long, or too backend-heavy for a frontend role.',
    tasks: [
      'Run a mock interview: 45 minutes behavioral and CV walkthrough, 45 minutes technical and design.',
      'Use question types around conflict, ambiguity, difficult bugs, performance, tradeoffs, and system thinking.',
      'After the mock, review every answer that exceeded 2 minutes.',
      'Rewrite answers that are still weak on impact, ownership, or clarity.',
    ],
    deepDive: [
      'Stress-test all 4 anchor stories. For each one, check whether you clearly answered what the problem was, why it mattered, what you personally did, what tradeoff existed, and what changed after shipping.',
      'Watch for a common failure mode: starting with implementation before context.'
    ],
    output: [
      'Write down your 5 weakest answers and replace them with shorter, sharper versions.',
    ],
  },
  {
    label: 'Day 7',
    title: 'Full simulation and final tightening',
    date: 'Saturday, June 27, 2026',
    goal:
      'Go into the interview with calm recall and a small set of dependable stories, not with 40 half-prepared ideas.',
    tasks: [
      'Run one full simulation: intro, CV walkthrough, 2 behavioral questions, 2 frontend questions, 1 design question, and Why Axon.',
      'Create a one-page cheat sheet with intro, 4 anchor stories, 10 technical bullets, and 3 questions to ask Axon.',
      'Do one final pass on the phrases you want to sound natural saying in English.',
      'Stop cramming after that.',
    ],
    deepDive: [
      'Ask yourself one last time: if the interviewer chooses any of the 4 anchor stories and drills deeper for 10 minutes, can you hold the conversation without drifting or repeating yourself?',
      'If the answer is no, fix only that gap. Do not reopen the entire prep plan.'
    ],
    output: [
      'Leave the day with one clean interview package you can trust under pressure.',
    ],
  },
]
</script>
