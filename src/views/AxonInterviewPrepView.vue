<template>
  <div class="min-h-[100dvh] bg-[var(--color-bg)] text-[var(--color-ink)]">
    <div class="pointer-events-none fixed inset-0 overflow-hidden">
      <div class="grain-layer absolute inset-0 opacity-20" />
    </div>

    <main class="relative mx-auto flex w-full max-w-[1180px] flex-col px-4 pb-14 pt-5 sm:px-6 sm:pt-6 lg:px-8">
      <section
        class="rounded-[1.4rem] border border-black/14 bg-[rgba(255,255,255,0.74)] px-6 py-7 shadow-[0_14px_38px_rgba(23,19,15,0.06)] sm:px-8 sm:py-8"
      >
        <div
          class="inline-flex items-center gap-2 rounded-full border border-[color:rgba(127,89,51,0.18)] bg-[rgba(127,89,51,0.1)] px-3 py-1.5 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[var(--color-accent)]"
        >
          Axon interview prep
        </div>
        <div class="mt-5 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <h1
              class="font-serif-display max-w-[12ch] text-4xl font-medium tracking-[-0.06em] sm:text-5xl lg:text-[4.25rem]"
            >
              Every question worth preparing for.
            </h1>
            <p class="mt-4 max-w-[60ch] text-sm leading-7 text-[var(--color-muted)] sm:text-base">
              Built from your final CV and the Axon Frontend Software Engineer I job post. This page is no longer a
              7-day plan. It is a full question bank: likely round-one questions, deep-dive follow-ups, sharp
              technical questions, and harder prompts that test whether your experience really holds up.
            </p>
          </div>
          <div class="grid gap-3">
            <div class="rounded-[1rem] border border-black/12 bg-[rgba(251,248,242,0.9)] px-4 py-4">
              <p class="text-[0.72rem] uppercase tracking-[0.18em] text-[var(--color-accent)]">Signals from the JD</p>
              <p class="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                React, JavaScript fundamentals, code quality, performance, end-to-end features, architecture meetings,
                collaboration, mentoring, and clear English communication.
              </p>
            </div>
            <div class="rounded-[1rem] border border-black/12 bg-[rgba(251,248,242,0.9)] px-4 py-4">
              <p class="text-[0.72rem] uppercase tracking-[0.18em] text-[var(--color-accent)]">Strongest anchors from your CV</p>
              <p class="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                ChatOps and widget integration, lexi-session boundary design, cursor pagination migration, tracing and
                SRE bot impact, build-time improvement, and Bosch platform/API ownership.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="mt-6 grid gap-4">
        <article
          v-for="group in groups"
          :key="group.title"
          class="rounded-[1.3rem] border border-black/14 bg-[rgba(255,255,255,0.74)] shadow-[0_10px_28px_rgba(23,19,15,0.05)]"
        >
          <div class="border-b border-black/10 bg-[rgba(251,248,242,0.95)] px-6 py-5">
            <p class="text-[0.72rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
              {{ group.label }}
            </p>
            <h2 class="font-serif-display mt-2 text-[1.7rem] font-medium tracking-[-0.04em]">
              {{ group.title }}
            </h2>
            <p class="mt-3 max-w-[70ch] text-sm leading-6 text-[var(--color-muted)]">
              {{ group.intro }}
            </p>
          </div>

          <div class="grid gap-4 px-6 py-5 lg:grid-cols-[1.05fr_0.95fr]">
            <div class="rounded-[1rem] border border-black/10 bg-white px-4 py-4">
              <p class="text-[0.72rem] uppercase tracking-[0.18em] text-[var(--color-accent)]">Questions to practice</p>
              <ul class="mt-3 space-y-2 pl-5 text-sm leading-6 text-[var(--color-muted)]">
                <li v-for="question in group.questions" :key="question">{{ question }}</li>
              </ul>
            </div>

            <div class="space-y-4">
              <div class="rounded-[1rem] border border-black/10 bg-white px-4 py-4">
                <p class="text-[0.72rem] uppercase tracking-[0.18em] text-[var(--color-accent)]">What a strong answer should cover</p>
                <ul class="mt-3 space-y-2 pl-5 text-sm leading-6 text-[var(--color-muted)]">
                  <li v-for="point in group.cover" :key="point">{{ point }}</li>
                </ul>
              </div>

              <div
                v-if="group.followUps.length"
                class="rounded-[1rem] border border-black/10 bg-[rgba(127,89,51,0.06)] px-4 py-4"
              >
                <p class="text-[0.72rem] uppercase tracking-[0.18em] text-[var(--color-accent)]">Hard follow-ups</p>
                <ul class="mt-3 space-y-2 pl-5 text-sm leading-6 text-[var(--color-muted)]">
                  <li v-for="followUp in group.followUps" :key="followUp">{{ followUp }}</li>
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
type QuestionGroup = {
  label: string
  title: string
  intro: string
  questions: string[]
  cover: string[]
  followUps: string[]
}

const groups: QuestionGroup[] = [
  {
    label: 'Behavioral core',
    title: 'How you introduce and position yourself',
    intro:
      'These are the questions that shape the rest of the interview. If you answer them well, the interviewer starts looking for evidence that confirms a strong impression instead of looking for reasons to doubt you.',
    questions: [
      'Introduce yourself.',
      'Walk me through your recent experience.',
      'Why are you interested in Axon?',
      'What is your strongest point that distinguishes you from other candidates?',
      'What is an achievement you are most proud of that proves your strongest point?',
      'What have you learned most from your past projects?',
      'What kind of work do you want to do next?',
    ],
    cover: [
      'Position yourself quickly as a frontend engineer with real production ownership, not as a generalist who happens to know some frontend.',
      'Name your strongest signals early: React and TypeScript product work, architecture-minded thinking, debugging and observability, and cross-team delivery.',
      'When asked about your strongest point, anchor it in one or two real stories instead of adjectives.',
      'Keep Why Axon grounded in the role itself: ownership, product impact, quality bar, and engineering collaboration.',
    ],
    followUps: [
      'Why are you a better fit for this role than someone with deeper pure frontend specialization?',
      'Your CV touches many systems. What exactly do you want the interviewer to remember about you?',
      'What part of your experience best transfers to public-safety or mission-driven product work?',
    ],
  },
  {
    label: 'Cake flagship story',
    title: 'ChatOps, widget, and embedded integration',
    intro:
      'This is likely your highest-upside experience because it combines frontend integration complexity, product concerns, and architectural tradeoffs. You should assume the interviewer may spend a long time here.',
    questions: [
      'Tell me about the ChatOps integration project.',
      'What made that project technically difficult from a frontend perspective?',
      'Why Web Components?',
      'Why not iframe?',
      'Could this have been a normal shared component instead?',
      'How did you structure the integration so host concerns stayed clear?',
      'How did you handle state ownership and rerender boundaries?',
      'How did you handle shared router concerns and URL search params?',
      'How did you test the boundary between the host app and the embedded dashboard?',
      'What were the hardest tradeoffs in that integration?',
    ],
    cover: [
      'Explain the product problem before the architecture. The interviewer should understand why this feature existed and why the integration had to feel native.',
      'Be explicit that the host owned auth, transport, permissions, tenant context, routing ownership, and shared product concerns.',
      'The embedded dashboard owned feature-specific UI behavior and local workflow state.',
      'Web Components were the interoperability boundary between a React host and a Vue feature surface, without pretending the embedded feature was just a lightweight reusable component.',
      'Routing remained host-owned, and route-related information crossed the boundary in a controlled, scoped way instead of letting both sides freely mutate shared URL state.',
    ],
    followUps: [
      'What would have gone wrong if both the host and embedded app treated the URL as fully theirs?',
      'If the host changed auth or permission behavior, how would you keep the embedded dashboard from drifting out of sync?',
      'What made this integration maintainable over time instead of becoming a hidden second app inside the host?',
    ],
  },
  {
    label: 'Performance and frontend architecture',
    title: 'Cursor pagination, state, and scalability',
    intro:
      'This is one of the cleanest stories on your CV for showing product reasoning, backend alignment, and frontend state design. It maps well to Axon’s quality and performance signals.',
    questions: [
      'Tell me about the cursor pagination migration.',
      'Why was offset-based pagination not good enough?',
      'What changed in the frontend when moving from offset to cursor pagination?',
      'How did you align the design with backend engineers?',
      'What tradeoffs did cursor pagination introduce for the UI?',
      'How did URL state and browser navigation behavior change?',
      'How did you know the migration improved performance or scalability?',
      'If you had to design that table flow from scratch again, what would you do differently?',
    ],
    cover: [
      'Start with the user and data problem: larger datasets, consistency, scalability, or response-time concerns, not just a technical preference.',
      'Explain the frontend implications clearly: state shape, page transition assumptions, cursor history, URL behavior, and edge cases.',
      'Show that this was not a solo frontend change but a cross-team contract discussion with backend.',
      'Land on the result in product terms and engineering terms: better response time, more scalable retrieval pattern, safer long-term direction.',
    ],
    followUps: [
      'What did cursor pagination make harder for the frontend compared with page-number-based navigation?',
      'How would you support back/forward navigation or deep-linking cleanly in a cursor-based flow?',
      'If users demanded “jump to page 20,” how would you think about that tradeoff?',
    ],
  },
  {
    label: 'Debugging and production leverage',
    title: 'Tracing, shared instrumentation, and faster incident response',
    intro:
      'This story is strong because it shows platform leverage beyond one app. It is not only about setup. It is about making debugging materially easier and reducing triage time.',
    questions: [
      'Tell me about the tracing and instrumentation work.',
      'What debugging pain existed before you changed anything?',
      'What exactly did you contribute to the shared instrumentation effort?',
      'How did trace IDs become useful in practice rather than just present in logs?',
      'How did this support the SRE bot workflow?',
      'How do you know incident triage actually got better?',
      'How would you explain the value of observability to a product-focused stakeholder?',
      'What was hard about making shared instrumentation work across multiple portals?',
    ],
    cover: [
      'Start with the original problem: fragmented debugging, poor traceability, too much investigation noise, or slow incident triage.',
      'Be specific about your contribution: shared instrumentation, propagation conventions, surfacing trace context, shared package behavior, debugging ergonomics.',
      'Tie the SRE bot point to a real workflow improvement, not just a cool side feature.',
      'Make sure the answer lands on impact: faster incident triage, lower debugging overhead, better cross-team operational visibility.',
    ],
    followUps: [
      'What part of this work was actually frontend engineering versus platform support work?',
      'How would you keep instrumentation from becoming noisy or expensive over time?',
      'If a team resisted adopting the shared pattern, how would you persuade them?',
    ],
  },
  {
    label: 'Quality and engineering maturity',
    title: 'Shared packages, reliability work, and development workflow',
    intro:
      'These questions test whether you improve engineering systems, not just feature throughput. They also give you room to talk about AI use in a grounded way.',
    questions: [
      'How do you keep code quality high?',
      'Tell me about a reliability issue you fixed in shared code or shared packages.',
      'How do you think about reusability versus over-abstraction?',
      'When should a team create a shared package, and when should it not?',
      'How do you review risky frontend changes?',
      'Do you use AI in your work process? To what extent?',
      'How have Claude or Codex changed your workflow, if at all?',
    ],
    cover: [
      'Use shared core package maintenance to show reliability and compatibility thinking across multiple consuming teams.',
      'Talk about reusability as a tradeoff, not a virtue by default. Shared code should reduce real complexity, not create premature abstraction.',
      'For AI, stay practical: implementation speed, faster iteration, review support, documentation help, but accountability still stays with you.',
      'A strong answer here sounds like judgment, not just process slogans.',
    ],
    followUps: [
      'How do you avoid AI making you faster but sloppier?',
      'How do you know a shared abstraction is helping instead of creating invisible coupling?',
      'Tell me about a time shared code made something worse before it got better.',
    ],
  },
  {
    label: 'Bosch depth',
    title: 'Platform work, APIs, and cross-layer ownership',
    intro:
      'Bosch gives you range. If overused, it can sound broad and slightly dated. If told well, it proves you can work across product surfaces, services, deployment, and operations with real ownership.',
    questions: [
      'Tell me about the most technically challenging thing you built at Bosch.',
      'What was AutoWRX, and why did it matter?',
      'How did you approach Version 2 feature delivery across frontend, backend, and deployment layers?',
      'What was painful about the monolithic API, and what did decoupling improve?',
      'How did centralized auth and routing help?',
      'How did your CI/CD or environment work change the team’s day-to-day experience?',
      'What did Bosch teach you that made you better at your later Cake work?',
    ],
    cover: [
      'Explain the product and user first so the architecture has context.',
      'Tell one coherent system story, not five unrelated bullet points.',
      'Use Bosch to show breadth and ownership, but keep the framing tied to frontend product and engineering decisions.',
      'The best end point is that Bosch trained your cross-layer judgment and made you stronger in later frontend platform work.',
    ],
    followUps: [
      'What was the hardest maintainability tradeoff you made there?',
      'If you had stayed longer, what would you have redesigned next?',
      'Where did frontend concerns stop and platform concerns begin in that role?',
    ],
  },
  {
    label: 'Frontend fundamentals',
    title: 'React, JavaScript, and browser depth',
    intro:
      'The JD explicitly asks for React and JavaScript proficiency plus good computer science background. Even if the interviewer starts with your experience, you should expect some fundamentals checks.',
    questions: [
      'What happens in React when state changes?',
      'What causes unnecessary rerenders, and how do you reduce them?',
      'When would you use useMemo or useCallback, and when would you avoid them?',
      'What problems can stale closures cause in React?',
      'How does useEffect cleanup work?',
      'Controlled vs uncontrolled inputs: when would you choose each?',
      'Explain debouncing and throttling. When would you use each?',
      'Explain the JavaScript event loop at a practical level.',
      'What are closures, and where do they commonly cause bugs in frontend code?',
      'How would you explain the difference between client state and server state?',
    ],
    cover: [
      'Keep answers practical. The interviewer is not looking for textbook recitation alone; they want to hear that you can apply the concept to real product work.',
      'Whenever possible, connect a concept back to one of your stories: rerenders in embedded integration, state shape in pagination, cleanup in realtime behavior.',
      'If you are unsure on a detail, stay structured instead of hand-wavy.',
    ],
    followUps: [
      'What is an example from your work where state ownership was more important than optimization?',
      'When has memoization hurt readability more than it helped performance?',
      'How would you debug a stale-state bug that only appears after navigation?',
    ],
  },
  {
    label: 'Architecture and system thinking',
    title: 'Small system design prompts for a frontend engineer',
    intro:
      'Axon mentions architecture meetings and end-to-end features. That usually means you should be ready for design discussion, even if it is not a full formal system design round.',
    questions: [
      'Design a chat widget that works across multiple websites.',
      'Design a scalable internal data table for large datasets.',
      'How would you design a reusable frontend surface that can live inside multiple host apps?',
      'How would you structure a frontend app so product features can move fast without turning the codebase chaotic?',
      'How would you introduce observability into a frontend-heavy product surface?',
      'How would you roll out a risky frontend change safely?',
    ],
    cover: [
      'Talk through requirements, ownership boundaries, state model, edge cases, failure handling, observability, rollout, and testing.',
      'Do not jump straight into tools. Start with responsibilities and constraints.',
      'The strongest answers will sound like product-aware architecture, not abstract system design theater.',
    ],
    followUps: [
      'What would you measure after launch?',
      'How would you keep the design maintainable as more teams touched it?',
      'Where would you deliberately keep things simple instead of making them more generic?',
    ],
  },
  {
    label: 'Coding and harder screens',
    title: 'Questions that may appear if the interviewer wants more rigor',
    intro:
      'The JD mentions computer science background and programming fundamentals. Even for a frontend role, some companies use coding or CS questions to test baseline rigor. Your backend question bank is a useful warning sign here.',
    questions: [
      'Implement a simple rate limiter: N requests per user per T seconds.',
      'Given an array of integers, find the subarray with the largest sum. If there are many answers, choose the one with the smallest starting index, then the shortest one.',
      'Explain B-tree indexes at a high level and why they are often used.',
      'What does ACID mean?',
      'What are database isolation levels, at a practical level?',
      'Process vs thread: what is the practical difference?',
      'What is virtual memory, and why does it matter?',
      'What is a hash function and why is it used?',
      'What is JWT, and what problems does it solve or create?',
    ],
    cover: [
      'Do not assume these will appear, but do not be surprised if one or two do.',
      'For CS questions, practical clarity beats overreaching. You want to sound solid, not encyclopedic.',
      'For coding, be ready to speak while solving: clarify assumptions, outline approach, discuss complexity, then implement.',
    ],
    followUps: [
      'What if the rate limiter must work across multiple servers?',
      'Why would TCP or TLS details matter to a frontend or full-stack-minded engineer?',
      'How much backend or systems depth should a frontend engineer actually have?',
    ],
  },
  {
    label: 'Pressure questions',
    title: 'Behavioral prompts that can expose weak spots',
    intro:
      'These are the questions that usually feel uncomfortable because they test self-awareness, conflict handling, and maturity rather than polished project summaries.',
    questions: [
      'Tell me about a disagreement with backend, product, or another engineer.',
      'Tell me about a time you wanted more autonomy or clearer ownership.',
      'Tell me about a time your first technical idea was wrong.',
      'What part of your current experience is not yet at the level you want?',
      'What would a skeptical interviewer worry about when looking at your CV?',
      'What do you do when requirements are unclear but you still need to move forward?',
      'What kind of feedback have you received repeatedly in your career?',
    ],
    cover: [
      'Choose stories that show judgment, not resentment.',
      'A strong answer includes tension, your reasoning, how you handled people, what changed, and what you learned.',
      'Do not avoid self-awareness questions. Answer them directly and calmly.',
    ],
    followUps: [
      'What did you personally do to reduce that conflict, beyond being technically correct?',
      'How do you know when to push harder versus when to align and move on?',
      'If your interviewer challenged your strongest story, how would you defend it without sounding defensive?',
    ],
  },
]
</script>
