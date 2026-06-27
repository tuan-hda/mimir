# Axon Frontend Software Engineer I - Interview Question Bank

Sources:

- JD: https://job-boards.greenhouse.io/axon/jobs/7702631003
- CV: `Hoang_Dinh_Anh_Tuan_CV.pdf`

Role signal from JD:

- Frontend Software Engineer I in Ho Chi Minh City, hybrid Tuesday-Friday onsite.
- ReactJS, JavaScript, data structures, algorithms, performance, code quality.
- End-to-end feature ownership with Product and Design.
- Code reviews, architecture design meetings, cross-team collaboration.
- Public-safety/data-access mission, quality bar, communication in English.

Candidate signal from CV:

- Nearly 3 years across banking, developer platforms, contact-center, SDK/widget, observability, platform architecture.
- Strong React, Next.js, TypeScript, Vite, Redux, TanStack Query, Web Components, WebSocket, Go, Redis, Node, Express, Docker, Nginx, Kong, GCP/AWS.
- Relevant stories: Chatwoot integration via Web Components/Shadow DOM, `lexi-session` BFF, cursor pagination migration, OpenTelemetry/Sentry, build performance improvement, AutoWRX plugin architecture, CI/CD automation, AI recruitment platform.

How to use this:

- For behavioral questions, answer with STAR: Situation, Task, Action, Result.
- For technical questions, answer in layers: definition, tradeoff, implementation detail, failure mode.
- For coding/DSA, speak first, define constraints, test edge cases, then code.

## 1. Behavioral And Mission Fit

1. Tell me about yourself.
   - Sample answer: I would answer this with a concrete STAR story rather than a generic claim. "I am a frontend software
   engineer with nearly 3 years building production web apps in banking and developer-platform environments. My
   strongest areas are React, TypeScript, Next.js, frontend architecture, API integration, observability, and
   production hardening. Recently I integrated Chatwoot into a React/Next contact-center app using Web Components and
   Shadow DOM, built a Go/Redis BFF to protect backend tokens, helped migrate offset pagination to cursor pagination,
   and improved monorepo build performance by about 50%. I like roles where frontend work is close to product,
   performance, reliability, and real users, which is why Axon's public-safety mission is interesting to me." For
   "Tell me about yourself", I would state the situation briefly, name my responsibility, explain the action I
   personally took, and close with measurable impact or learning. For this exact prompt, the details I would include
   are: Open with a short present-tense summary, then prove it with two or three projects rather than listing every
   technology. I would close by connecting the lesson back to Axon: strong frontend work is not only speed, but also
   judgment, communication, reliability, and user trust.
2. Why Axon?
   - Sample answer: I would answer this with a concrete STAR story rather than a generic claim. Connect mission and work
   style. "Axon works on public safety systems where product quality matters beyond convenience. The JD also
   emphasizes frontend ownership, product/design partnership, performance, architecture discussions, and cross-team
   collaboration. That matches my experience shipping operational banking portals and developer platforms where
   reliability, observability, and maintainability matter." For "Why Axon?", I would state the situation briefly, name
   my responsibility, explain the action I personally took, and close with measurable impact or learning. For this
   exact prompt, the details I would include are: Tie motivation to public safety, trustworthy UX, secure data
   handling, and the JD signals around React, quality, performance, and collaboration. I would close by connecting the
   lesson back to Axon: strong frontend work is not only speed, but also judgment, communication, reliability, and
   user trust.
3. Why this Frontend Software Engineer I role?
   - Sample answer: I would answer this with a concrete STAR story rather than a generic claim. "It is a good match for
   my React/JavaScript background and my experience owning end-to-end frontend features. I want to continue deepening
   frontend engineering, especially performance, architecture, and user-facing systems at scale, while contributing to
   a mission-driven product." For "Why this Frontend Software Engineer I role?", I would state the situation briefly,
   name my responsibility, explain the action I personally took, and close with measurable impact or learning. For
   this exact prompt, the details I would include are: Emphasize that you can contribute hands-on now while still
   being hungry to learn from senior engineers and architecture reviews. I would close by connecting the lesson back
   to Axon: strong frontend work is not only speed, but also judgment, communication, reliability, and user trust.
4. Tell me about a feature you owned end to end.
   - Sample answer: I would answer this with a concrete STAR story rather than a generic claim. Use Chatwoot integration
   or AutoWRX marketplace. Include requirements, design/API alignment, frontend implementation, rollout,
   observability, and post-release fixes. For "Tell me about a feature you owned end to end", I would state the
   situation briefly, name my responsibility, explain the action I personally took, and close with measurable impact
   or learning. For this prompt, I would choose one real project or work situation, keep the story under two minutes,
   and make the outcome concrete enough that the interviewer can ask follow-up questions. I would close by connecting
   the lesson back to Axon: strong frontend work is not only speed, but also judgment, communication, reliability, and
   user trust.
5. Tell me about a project where you worked with Product and Design.
   - Sample answer: I would answer this with a concrete STAR story rather than a generic claim. Mention translating user
   flows into UI states, clarifying edge cases, aligning API contracts, validating with demos, and iterating based on
   feedback. For "Tell me about a project where you worked with Product and Design", I would state the situation
   briefly, name my responsibility, explain the action I personally took, and close with measurable impact or
   learning. For this prompt, I would choose one real project or work situation, keep the story under two minutes, and
   make the outcome concrete enough that the interviewer can ask follow-up questions. I would close by connecting the
   lesson back to Axon: strong frontend work is not only speed, but also judgment, communication, reliability, and
   user trust.
6. Describe a time you improved performance.
   - Sample answer: I would answer this with a concrete STAR story rather than a generic claim. Use monorepo build
   performance improvement or cursor pagination. Explain baseline, bottleneck, change, measurement, and result. For
   "Describe a time you improved performance", I would state the situation briefly, name my responsibility, explain
   the action I personally took, and close with measurable impact or learning. For this prompt, I would choose one
   real project or work situation, keep the story under two minutes, and make the outcome concrete enough that the
   interviewer can ask follow-up questions. I would close by connecting the lesson back to Axon: strong frontend work
   is not only speed, but also judgment, communication, reliability, and user trust.
7. Describe a time you improved reliability or observability.
   - Sample answer: I would answer this with a concrete STAR story rather than a generic claim. OpenTelemetry/Sentry
   instrumentation. Explain trace IDs, error grouping, logs, spans, correlation, incident triage, and SRE bot
   integration. For "Describe a time you improved reliability or observability", I would state the situation briefly,
   name my responsibility, explain the action I personally took, and close with measurable impact or learning. For
   this exact prompt, the details I would include are: Focus on actionable signals, not logging everything: errors,
   latency, Web Vitals, trace IDs, release, and privacy-safe metadata. I would close by connecting the lesson back to
   Axon: strong frontend work is not only speed, but also judgment, communication, reliability, and user trust.
8. Tell me about a difficult technical decision.
   - Sample answer: I would answer this with a concrete STAR story rather than a generic claim. Chatwoot integration:
   iframe vs direct embedding vs Web Components. Chose Web Components/Shadow DOM to isolate styles and preserve host
   ownership of auth/transport/permissions. For "Tell me about a difficult technical decision", I would state the
   situation briefly, name my responsibility, explain the action I personally took, and close with measurable impact
   or learning. For this prompt, I would choose one real project or work situation, keep the story under two minutes,
   and make the outcome concrete enough that the interviewer can ask follow-up questions. I would close by connecting
   the lesson back to Axon: strong frontend work is not only speed, but also judgment, communication, reliability, and
   user trust.
9. Tell me about a mistake you made.
   - Sample answer: I would answer this with a concrete STAR story rather than a generic claim. Pick a real but contained
   example. Structure: missed edge case, impact, fix, prevention. Avoid blaming others. For "Tell me about a mistake
   you made", I would state the situation briefly, name my responsibility, explain the action I personally took, and
   close with measurable impact or learning. For this prompt, I would choose one real project or work situation, keep
   the story under two minutes, and make the outcome concrete enough that the interviewer can ask follow-up questions.
   I would close by connecting the lesson back to Axon: strong frontend work is not only speed, but also judgment,
   communication, reliability, and user trust.
10. Tell me about a time you disagreed with a teammate.
   - Sample answer: I would answer this with a concrete STAR story rather than a generic claim. Focus on data and
   alignment. "I clarified goals, compared tradeoffs, wrote a small proof of concept or benchmark, and aligned on the
   option that reduced risk." For "Tell me about a time you disagreed with a teammate", I would state the situation
   briefly, name my responsibility, explain the action I personally took, and close with measurable impact or
   learning. For this prompt, I would choose one real project or work situation, keep the story under two minutes, and
   make the outcome concrete enough that the interviewer can ask follow-up questions. I would close by connecting the
   lesson back to Axon: strong frontend work is not only speed, but also judgment, communication, reliability, and
   user trust.
11. How do you handle code review feedback?
   - Sample answer: I would answer this with a concrete STAR story rather than a generic claim. "I separate ego from
   code, ask clarifying questions, accept improvements quickly, and discuss tradeoffs when feedback changes
   architecture. I also try to make review easy by keeping PRs focused and explaining context." For "How do you handle
   code review feedback?", I would state the situation briefly, name my responsibility, explain the action I
   personally took, and close with measurable impact or learning. For this prompt, I would choose one real project or
   work situation, keep the story under two minutes, and make the outcome concrete enough that the interviewer can ask
   follow-up questions. I would close by connecting the lesson back to Axon: strong frontend work is not only speed,
   but also judgment, communication, reliability, and user trust.
12. How do you review other people's code?
   - Sample answer: I would answer this with a concrete STAR story rather than a generic claim. "I look for correctness,
   edge cases, maintainability, performance, security, test coverage, and fit with existing patterns. I try to
   distinguish blocking comments from suggestions." For "How do you review other people's code?", I would state the
   situation briefly, name my responsibility, explain the action I personally took, and close with measurable impact
   or learning. For this prompt, I would choose one real project or work situation, keep the story under two minutes,
   and make the outcome concrete enough that the interviewer can ask follow-up questions. I would close by connecting
   the lesson back to Axon: strong frontend work is not only speed, but also judgment, communication, reliability, and
   user trust.
13. Tell me about mentoring or coaching.
   - Sample answer: I would answer this with a concrete STAR story rather than a generic claim. Mention helping teammates
   understand frontend architecture, shared instrumentation, code review habits, or development workflow. For "Tell me
   about mentoring or coaching", I would state the situation briefly, name my responsibility, explain the action I
   personally took, and close with measurable impact or learning. For this prompt, I would choose one real project or
   work situation, keep the story under two minutes, and make the outcome concrete enough that the interviewer can ask
   follow-up questions. I would close by connecting the lesson back to Axon: strong frontend work is not only speed,
   but also judgment, communication, reliability, and user trust.
14. How do you communicate with senior leaders?
   - Sample answer: I would answer this with a concrete STAR story rather than a generic claim. "I summarize user impact,
   risk, options, tradeoffs, and recommendation. I avoid excessive implementation detail unless it affects timeline or
   risk." For "How do you communicate with senior leaders?", I would state the situation briefly, name my
   responsibility, explain the action I personally took, and close with measurable impact or learning. For this
   prompt, I would choose one real project or work situation, keep the story under two minutes, and make the outcome
   concrete enough that the interviewer can ask follow-up questions. I would close by connecting the lesson back to
   Axon: strong frontend work is not only speed, but also judgment, communication, reliability, and user trust.
15. How do you work in a fast-paced environment?
   - Sample answer: I would answer this with a concrete STAR story rather than a generic claim. "I clarify priority,
   reduce scope to the useful first release, instrument important flows, and keep communication frequent so surprises
   surface early." For "How do you work in a fast-paced environment?", I would state the situation briefly, name my
   responsibility, explain the action I personally took, and close with measurable impact or learning. For this
   prompt, I would choose one real project or work situation, keep the story under two minutes, and make the outcome
   concrete enough that the interviewer can ask follow-up questions. I would close by connecting the lesson back to
   Axon: strong frontend work is not only speed, but also judgment, communication, reliability, and user trust.
16. Tell me about a time you handled ambiguity.
   - Sample answer: I would answer this with a concrete STAR story rather than a generic claim. Use data design for
   cursor pagination. Explain missing requirements, clarifying access patterns, defining API contract, aligning
   backend/frontend. For "Tell me about a time you handled ambiguity", I would state the situation briefly, name my
   responsibility, explain the action I personally took, and close with measurable impact or learning. For this
   prompt, I would choose one real project or work situation, keep the story under two minutes, and make the outcome
   concrete enough that the interviewer can ask follow-up questions. I would close by connecting the lesson back to
   Axon: strong frontend work is not only speed, but also judgment, communication, reliability, and user trust.
17. Tell me about a production issue you handled.
   - Sample answer: I would answer this with a concrete STAR story rather than a generic claim. Use observability or
   deployment recovery. Include detection, mitigation, root cause, prevention. For "Tell me about a production issue
   you handled", I would state the situation briefly, name my responsibility, explain the action I personally took,
   and close with measurable impact or learning. For this prompt, I would choose one real project or work situation,
   keep the story under two minutes, and make the outcome concrete enough that the interviewer can ask follow-up
   questions. I would close by connecting the lesson back to Axon: strong frontend work is not only speed, but also
   judgment, communication, reliability, and user trust.
18. How do you decide when code is good enough to ship?
   - Sample answer: I would answer this with a concrete STAR story rather than a generic claim. "It meets requirements,
   handles known edge cases, has appropriate tests, does not introduce unacceptable performance/security risk, is
   observable enough for production, and has a rollback or mitigation path when needed." For "How do you decide when
   code is good enough to ship?", I would state the situation briefly, name my responsibility, explain the action I
   personally took, and close with measurable impact or learning. For this prompt, I would choose one real project or
   work situation, keep the story under two minutes, and make the outcome concrete enough that the interviewer can ask
   follow-up questions. I would close by connecting the lesson back to Axon: strong frontend work is not only speed,
   but also judgment, communication, reliability, and user trust.
19. How do you handle deadlines?
   - Sample answer: I would answer this with a concrete STAR story rather than a generic claim. "I identify must-haves,
   cut non-essential scope, communicate risk early, and protect quality on critical paths." For "How do you handle
   deadlines?", I would state the situation briefly, name my responsibility, explain the action I personally took, and
   close with measurable impact or learning. For this prompt, I would choose one real project or work situation, keep
   the story under two minutes, and make the outcome concrete enough that the interviewer can ask follow-up questions.
   I would close by connecting the lesson back to Axon: strong frontend work is not only speed, but also judgment,
   communication, reliability, and user trust.
20. Tell me about a time you learned a new technology quickly.
   - Sample answer: I would answer this with a concrete STAR story rather than a generic claim. Web Components/Shadow
   DOM, Go/Redis BFF, OpenTelemetry, AWS Bedrock, or Electron. For "Tell me about a time you learned a new technology
   quickly", I would state the situation briefly, name my responsibility, explain the action I personally took, and
   close with measurable impact or learning. For this prompt, I would choose one real project or work situation, keep
   the story under two minutes, and make the outcome concrete enough that the interviewer can ask follow-up questions.
   I would close by connecting the lesson back to Axon: strong frontend work is not only speed, but also judgment,
   communication, reliability, and user trust.
21. What does "Force for Good" mean to you?
   - Sample answer: I would answer this with a concrete STAR story rather than a generic claim. "Engineering decisions
   should improve real people's safety and trust. For frontend, that means accessible, reliable, secure,
   understandable interfaces that help users act correctly under pressure." For "What does "Force for Good" mean to
   you?", I would state the situation briefly, name my responsibility, explain the action I personally took, and close
   with measurable impact or learning. For this prompt, I would choose one real project or work situation, keep the
   story under two minutes, and make the outcome concrete enough that the interviewer can ask follow-up questions. I
   would close by connecting the lesson back to Axon: strong frontend work is not only speed, but also judgment,
   communication, reliability, and user trust.
22. How do you handle hybrid onsite collaboration?
   - Sample answer: I would answer this with a concrete STAR story rather than a generic claim. "I use onsite time for
   high-bandwidth work like design discussions, architecture alignment, and mentoring, and remote time for focused
   implementation and documentation." For "How do you handle hybrid onsite collaboration?", I would state the
   situation briefly, name my responsibility, explain the action I personally took, and close with measurable impact
   or learning. For this prompt, I would choose one real project or work situation, keep the story under two minutes,
   and make the outcome concrete enough that the interviewer can ask follow-up questions. I would close by connecting
   the lesson back to Axon: strong frontend work is not only speed, but also judgment, communication, reliability, and
   user trust.
23. What kind of team culture helps you do your best work?
   - Sample answer: I would answer this with a concrete STAR story rather than a generic claim. "Clear ownership, candid
   but respectful feedback, strong engineering standards, and people who care about users." For "What kind of team
   culture helps you do your best work?", I would state the situation briefly, name my responsibility, explain the
   action I personally took, and close with measurable impact or learning. For this prompt, I would choose one real
   project or work situation, keep the story under two minutes, and make the outcome concrete enough that the
   interviewer can ask follow-up questions. I would close by connecting the lesson back to Axon: strong frontend work
   is not only speed, but also judgment, communication, reliability, and user trust.
24. What are your weaknesses?
   - Sample answer: I would answer this with a concrete STAR story rather than a generic claim. Give a real growth area.
   Example: "Earlier I sometimes over-invested in making a solution too generic. I now start with the concrete use
   case, add extension points only when they are justified, and validate with teammates." For "What are your
   weaknesses?", I would state the situation briefly, name my responsibility, explain the action I personally took,
   and close with measurable impact or learning. For this prompt, I would choose one real project or work situation,
   keep the story under two minutes, and make the outcome concrete enough that the interviewer can ask follow-up
   questions. I would close by connecting the lesson back to Axon: strong frontend work is not only speed, but also
   judgment, communication, reliability, and user trust.
25. Where do you want to grow?
   - Sample answer: I would answer this with a concrete STAR story rather than a generic claim. "Large-scale frontend
   architecture, product thinking, performance at scale, and becoming stronger at influencing technical direction
   across teams." For "Where do you want to grow?", I would state the situation briefly, name my responsibility,
   explain the action I personally took, and close with measurable impact or learning. For this prompt, I would choose
   one real project or work situation, keep the story under two minutes, and make the outcome concrete enough that the
   interviewer can ask follow-up questions. I would close by connecting the lesson back to Axon: strong frontend work
   is not only speed, but also judgment, communication, reliability, and user trust.
26. Why are you leaving/currently considering opportunities?
   - Sample answer: I would answer this with a concrete STAR story rather than a generic claim. Keep positive. "I am
   looking for a role where I can apply my frontend/platform experience to a larger mission-driven product and keep
   growing with strong engineers." For "Why are you leaving/currently considering opportunities?", I would state the
   situation briefly, name my responsibility, explain the action I personally took, and close with measurable impact
   or learning. For this prompt, I would choose one real project or work situation, keep the story under two minutes,
   and make the outcome concrete enough that the interviewer can ask follow-up questions. I would close by connecting
   the lesson back to Axon: strong frontend work is not only speed, but also judgment, communication, reliability, and
   user trust.
27. What project are you most proud of?
   - Sample answer: I would answer this with a concrete STAR story rather than a generic claim. Choose Chatwoot
   integration or AutoWRX. Emphasize business/user impact and technical difficulty. For "What project are you most
   proud of?", I would state the situation briefly, name my responsibility, explain the action I personally took, and
   close with measurable impact or learning. For this prompt, I would choose one real project or work situation, keep
   the story under two minutes, and make the outcome concrete enough that the interviewer can ask follow-up questions.
   I would close by connecting the lesson back to Axon: strong frontend work is not only speed, but also judgment,
   communication, reliability, and user trust.
28. How do you earn trust with a new team?
   - Sample answer: I would answer this with a concrete STAR story rather than a generic claim. "I listen first, learn
   the codebase, take ownership of small but valuable tasks, communicate clearly, and follow through." For "How do you
   earn trust with a new team?", I would state the situation briefly, name my responsibility, explain the action I
   personally took, and close with measurable impact or learning. For this prompt, I would choose one real project or
   work situation, keep the story under two minutes, and make the outcome concrete enough that the interviewer can ask
   follow-up questions. I would close by connecting the lesson back to Axon: strong frontend work is not only speed,
   but also judgment, communication, reliability, and user trust.
29. How do you handle unclear requirements?
   - Sample answer: I would answer this with a concrete STAR story rather than a generic claim. "I ask about user goals,
   states, edge cases, API constraints, success metrics, and rollout. Then I document assumptions and confirm before
   building deeply." For "How do you handle unclear requirements?", I would state the situation briefly, name my
   responsibility, explain the action I personally took, and close with measurable impact or learning. For this
   prompt, I would choose one real project or work situation, keep the story under two minutes, and make the outcome
   concrete enough that the interviewer can ask follow-up questions. I would close by connecting the lesson back to
   Axon: strong frontend work is not only speed, but also judgment, communication, reliability, and user trust.
30. What questions would you ask Product before starting a feature?
   - Sample answer: I would answer this with a concrete STAR story rather than a generic claim. Target user, success
   metric, core flow, edge cases, permissions, loading/error states, analytics, accessibility, rollout, dependencies.
   For "What questions would you ask Product before starting a feature?", I would state the situation briefly, name my
   responsibility, explain the action I personally took, and close with measurable impact or learning. For this
   prompt, I would choose one real project or work situation, keep the story under two minutes, and make the outcome
   concrete enough that the interviewer can ask follow-up questions. I would close by connecting the lesson back to
   Axon: strong frontend work is not only speed, but also judgment, communication, reliability, and user trust.
31. How do you collaborate with backend engineers?
   - Sample answer: I would answer this with a concrete STAR story rather than a generic claim. "I align on API shape,
   error contracts, auth, pagination, caching, versioning, observability, and test data. I prefer written contracts or
   OpenAPI when possible." For "How do you collaborate with backend engineers?", I would state the situation briefly,
   name my responsibility, explain the action I personally took, and close with measurable impact or learning. For
   this prompt, I would choose one real project or work situation, keep the story under two minutes, and make the
   outcome concrete enough that the interviewer can ask follow-up questions. I would close by connecting the lesson
   back to Axon: strong frontend work is not only speed, but also judgment, communication, reliability, and user
   trust.
32. Tell me about your English communication.
   - Sample answer: I would answer this with a concrete STAR story rather than a generic claim. "I use English
   professionally in documentation, code review, technical discussions, and cross-team communication. I have IELTS
   7.0." For "Tell me about your English communication", I would state the situation briefly, name my responsibility,
   explain the action I personally took, and close with measurable impact or learning. For this prompt, I would choose
   one real project or work situation, keep the story under two minutes, and make the outcome concrete enough that the
   interviewer can ask follow-up questions. I would close by connecting the lesson back to Axon: strong frontend work
   is not only speed, but also judgment, communication, reliability, and user trust.
## 2. CV Deep-Dive Questions

33. Explain your Chatwoot integration.
   - Sample answer: "We embedded a Vue 3/Vite dashboard into a React/Next.js contact-center app using Web Components and
   Shadow DOM. The host app kept control over auth, transport, tenant scope, permissions, and realtime events. This
   reduced integration risk while isolating UI implementation details." For this CV deep dive, I would make the answer
   concrete: what problem existed, what alternatives I considered, what I personally built or aligned, and what
   changed for users, reliability, security, or developer workflow. For this exact prompt, the details I would include
   are: Mention React/Next host, Vue/Vite embedded surface, Web Components, Shadow DOM, auth ownership, tenant scope,
   permissions, and realtime events. That keeps the answer honest and interview-ready: specific enough to defend in
   follow-up questions, but focused on impact instead of technology name-dropping.
34. Why Web Components instead of iframe?
   - Sample answer: Web Components allow tighter integration, shared events, better host control, and smoother UX. iframe
   gives stronger isolation but makes routing, auth, sizing, events, and styling integration harder. For this CV deep
   dive, I would make the answer concrete: what problem existed, what alternatives I considered, what I personally
   built or aligned, and what changed for users, reliability, security, or developer workflow. For this exact prompt,
   the details I would include are: Contrast iframe isolation, direct component coupling, and custom-element
   contracts; explain why a small public API with custom events was useful. Discuss isolation benefits but also
   routing, sizing, theming, focus, analytics, and auth handoff friction. That keeps the answer honest and
   interview-ready: specific enough to defend in follow-up questions, but focused on impact instead of technology
   name-dropping.
35. What does Shadow DOM solve?
   - Sample answer: It encapsulates DOM and CSS so embedded UI styles do not leak into the host and host styles do not
   accidentally break the embedded component. For this CV deep dive, I would make the answer concrete: what problem
   existed, what alternatives I considered, what I personally built or aligned, and what changed for users,
   reliability, security, or developer workflow. For this exact prompt, the details I would include are: Be precise
   that Shadow DOM gives DOM/CSS encapsulation, not a true security sandbox. That keeps the answer honest and
   interview-ready: specific enough to defend in follow-up questions, but focused on impact instead of technology
   name-dropping.
36. What problems can Shadow DOM introduce?
   - Sample answer: Styling/theming complexity, event retargeting, accessibility testing nuances, focus management
   issues, and harder global CSS assumptions. For this CV deep dive, I would make the answer concrete: what problem
   existed, what alternatives I considered, what I personally built or aligned, and what changed for users,
   reliability, security, or developer workflow. For this exact prompt, the details I would include are: Be precise
   that Shadow DOM gives DOM/CSS encapsulation, not a true security sandbox. That keeps the answer honest and
   interview-ready: specific enough to defend in follow-up questions, but focused on impact instead of technology
   name-dropping.
37. Explain `lexi-session`.
   - Sample answer: "It is a Go + Redis BFF that keeps backend tokens out of the browser. It proxies HTTP, bridges
   WebSocket, supports rate limiting and multi-client sessions, and emits production observability." For this CV deep
   dive, I would make the answer concrete: what problem existed, what alternatives I considered, what I personally
   built or aligned, and what changed for users, reliability, security, or developer workflow. For this exact prompt,
   the details I would include are: Frame it as a Go/Redis BFF that kept backend tokens out of browser JavaScript and
   centralized session, proxy, WebSocket, rate-limit, and observability concerns. That keeps the answer honest and
   interview-ready: specific enough to defend in follow-up questions, but focused on impact instead of technology
   name-dropping.
38. Why use a BFF?
   - Sample answer: A Backend-for-Frontend can protect secrets, simplify browser-facing APIs, centralize auth/session
   logic, adapt backend contracts, and enforce rate limits/security policies. For this CV deep dive, I would make the
   answer concrete: what problem existed, what alternatives I considered, what I personally built or aligned, and what
   changed for users, reliability, security, or developer workflow. For this exact prompt, the details I would include
   are: Explain the browser-facing API boundary: safer token handling, product-shaped endpoints, normalized errors,
   and fewer secrets in the client. That keeps the answer honest and interview-ready: specific enough to defend in
   follow-up questions, but focused on impact instead of technology name-dropping.
39. Why Redis/Dragonfly for session handling?
   - Sample answer: Low-latency shared state, TTL-based expiration, distributed access across instances, pub/sub or
   stream patterns if needed, and good fit for session/rate-limit counters. For this CV deep dive, I would make the
   answer concrete: what problem existed, what alternatives I considered, what I personally built or aligned, and what
   changed for users, reliability, security, or developer workflow. For this exact prompt, the details I would include
   are: Cover TTLs, low-latency shared state, eviction risk, hot keys, persistence tradeoffs, and monitoring. Cover
   Redis-compatible low-latency shared state, TTLs, counters, and operational risks such as eviction and availability.
   That keeps the answer honest and interview-ready: specific enough to defend in follow-up questions, but focused on
   impact instead of technology name-dropping.
40. What are risks of storing sessions in Redis?
   - Sample answer: Eviction, data loss depending on persistence, hot keys, inconsistent TTLs, serialization bugs, and
   operational dependency on Redis availability. For this CV deep dive, I would make the answer concrete: what problem
   existed, what alternatives I considered, what I personally built or aligned, and what changed for users,
   reliability, security, or developer workflow. For this exact prompt, the details I would include are: Cover TTLs,
   low-latency shared state, eviction risk, hot keys, persistence tradeoffs, and monitoring. That keeps the answer
   honest and interview-ready: specific enough to defend in follow-up questions, but focused on impact instead of
   technology name-dropping.
41. Explain your cursor pagination migration.
   - Sample answer: "Offset pagination slows down and can return unstable results as data changes. Cursor pagination uses
   a stable ordering key and cursor token to fetch next/previous pages consistently and efficiently." For this CV deep
   dive, I would make the answer concrete: what problem existed, what alternatives I considered, what I personally
   built or aligned, and what changed for users, reliability, security, or developer workflow. For this exact prompt,
   the details I would include are: Explain stable ordering, opaque cursors, next/previous cursors, filter
   invalidation, duplicate prevention, and the tradeoff against random page jumps. That keeps the answer honest and
   interview-ready: specific enough to defend in follow-up questions, but focused on impact instead of technology
   name-dropping.
42. How does bidirectional cursor pagination work?
   - Sample answer: Use a stable sort, usually createdAt plus id. `after` fetches newer/next items; `before` fetches
   previous items. Query one extra row to compute `hasNextPage` or `hasPreviousPage`. For this CV deep dive, I would
   make the answer concrete: what problem existed, what alternatives I considered, what I personally built or aligned,
   and what changed for users, reliability, security, or developer workflow. For this exact prompt, the details I
   would include are: Explain stable ordering, opaque cursors, next/previous cursors, filter invalidation, duplicate
   prevention, and the tradeoff against random page jumps. Mention reversing sort internally or carrying previous
   cursors while keeping cursors opaque to the frontend. That keeps the answer honest and interview-ready: specific
   enough to defend in follow-up questions, but focused on impact instead of technology name-dropping.
43. What makes cursor pagination hard?
   - Sample answer: Stable sorting, duplicate timestamps, backwards navigation, filtering changes, cursor
   encoding/versioning, cache invalidation, and UI state for page boundaries. For this CV deep dive, I would make the
   answer concrete: what problem existed, what alternatives I considered, what I personally built or aligned, and what
   changed for users, reliability, security, or developer workflow. For this exact prompt, the details I would include
   are: Explain stable ordering, opaque cursors, next/previous cursors, filter invalidation, duplicate prevention, and
   the tradeoff against random page jumps. That keeps the answer honest and interview-ready: specific enough to defend
   in follow-up questions, but focused on impact instead of technology name-dropping.
44. Explain your OpenTelemetry/Sentry work.
   - Sample answer: "We standardized frontend/project instrumentation so traces, spans, and errors could be correlated.
   This improved debugging and reduced incident triage time." For this CV deep dive, I would make the answer concrete:
   what problem existed, what alternatives I considered, what I personally built or aligned, and what changed for
   users, reliability, security, or developer workflow. For this exact prompt, the details I would include are:
   Connect frontend symptoms to backend traces with trace IDs, route/action names, release, timing, and sanitized
   metadata. Mention safe error context, release tracking, route/action breadcrumbs, source maps, and scrubbing
   secrets or PII. That keeps the answer honest and interview-ready: specific enough to defend in follow-up questions,
   but focused on impact instead of technology name-dropping.
45. What should be captured in frontend observability?
   - Sample answer: route changes, API latency, errors, user-impacting failed actions, Web Vitals, trace IDs, release
   version, environment, user/session IDs when privacy-safe. For this CV deep dive, I would make the answer concrete:
   what problem existed, what alternatives I considered, what I personally built or aligned, and what changed for
   users, reliability, security, or developer workflow. For this exact prompt, the details I would include are: Focus
   on actionable signals, not logging everything: errors, latency, Web Vitals, trace IDs, release, and privacy-safe
   metadata. That keeps the answer honest and interview-ready: specific enough to defend in follow-up questions, but
   focused on impact instead of technology name-dropping.
46. What should not be captured?
   - Sample answer: tokens, passwords, PII, sensitive banking/customer data, full request bodies with secrets, or
   excessive breadcrumbs that create privacy/security risk. For this CV deep dive, I would make the answer concrete:
   what problem existed, what alternatives I considered, what I personally built or aligned, and what changed for
   users, reliability, security, or developer workflow. For this prompt, I would be ready to defend exact ownership,
   alternatives considered, tradeoffs, and production impact instead of only naming the technology. That keeps the
   answer honest and interview-ready: specific enough to defend in follow-up questions, but focused on impact instead
   of technology name-dropping.
47. How did you improve monorepo build performance?
   - Sample answer: Mention likely levers: caching, dependency graph cleanup, parallelization, Vite/Turborepo config,
   avoiding unnecessary rebuilds, optimizing TypeScript checks, and measuring before/after. For this CV deep dive, I
   would make the answer concrete: what problem existed, what alternatives I considered, what I personally built or
   aligned, and what changed for users, reliability, security, or developer workflow. For this exact prompt, the
   details I would include are: Discuss dependency graph hygiene, incremental builds, task caching, TypeScript
   boundaries, and avoiding changes that invalidate every package. Measure first, identify repeated work, improve
   cache hits, reduce invalidation, and verify faster feedback for engineers. That keeps the answer honest and
   interview-ready: specific enough to defend in follow-up questions, but focused on impact instead of technology
   name-dropping.
48. What can slow down a frontend monorepo?
   - Sample answer: broad dependency invalidation, slow TypeScript project references, large bundles, duplicate packages,
   excessive lint/typecheck on unchanged packages, bad caching, huge generated files. For this CV deep dive, I would
   make the answer concrete: what problem existed, what alternatives I considered, what I personally built or aligned,
   and what changed for users, reliability, security, or developer workflow. For this exact prompt, the details I
   would include are: Discuss dependency graph hygiene, incremental builds, task caching, TypeScript boundaries, and
   avoiding changes that invalidate every package. That keeps the answer honest and interview-ready: specific enough
   to defend in follow-up questions, but focused on impact instead of technology name-dropping.
49. Explain AutoWRX.
   - Sample answer: "A cloud-based rapid prototyping environment for software-defined vehicle applications. I built
   React/Vite UIs for API catalogs, prototype execution, telemetry visualization, and demos." For this CV deep dive, I
   would make the answer concrete: what problem existed, what alternatives I considered, what I personally built or
   aligned, and what changed for users, reliability, security, or developer workflow. For this exact prompt, the
   details I would include are: Position it as a platform UI for software-defined vehicle prototyping with API
   catalogs, telemetry, marketplace/plugin surfaces, and demos. That keeps the answer honest and interview-ready:
   specific enough to defend in follow-up questions, but focused on impact instead of technology name-dropping.
50. Explain the plugin architecture you helped shape.
   - Sample answer: "Core platform stays lean and stable; optional plugins contribute UI/capabilities through defined
   contracts. This improves modularity, avoids core bloat, and allows configuration-driven extensibility." For this CV
   deep dive, I would make the answer concrete: what problem existed, what alternatives I considered, what I
   personally built or aligned, and what changed for users, reliability, security, or developer workflow. For this
   exact prompt, the details I would include are: Discuss manifests, permissions, version compatibility, extension
   points, failure isolation, and avoiding arbitrary host access. That keeps the answer honest and interview-ready:
   specific enough to defend in follow-up questions, but focused on impact instead of technology name-dropping.
51. What are plugin architecture risks?
   - Sample answer: unstable extension APIs, version compatibility, dependency conflicts, security boundaries,
   performance overhead, and weak ownership of plugin behavior. For this CV deep dive, I would make the answer
   concrete: what problem existed, what alternatives I considered, what I personally built or aligned, and what
   changed for users, reliability, security, or developer workflow. For this exact prompt, the details I would include
   are: Discuss manifests, permissions, version compatibility, extension points, failure isolation, and avoiding
   arbitrary host access. That keeps the answer honest and interview-ready: specific enough to defend in follow-up
   questions, but focused on impact instead of technology name-dropping.
52. Explain your API decoupling work.
   - Sample answer: "We separated monolithic APIs into more maintainable services with centralized auth/routing. The goal
   was clearer ownership, easier evolution, and better deployment/control." For this CV deep dive, I would make the
   answer concrete: what problem existed, what alternatives I considered, what I personally built or aligned, and what
   changed for users, reliability, security, or developer workflow. For this prompt, I would be ready to defend exact
   ownership, alternatives considered, tradeoffs, and production impact instead of only naming the technology. That
   keeps the answer honest and interview-ready: specific enough to defend in follow-up questions, but focused on
   impact instead of technology name-dropping.
53. Why use Kong or an API gateway?
   - Sample answer: centralized routing, auth, rate limiting, observability, request transformation, service discovery,
   and consistent edge policies. For this CV deep dive, I would make the answer concrete: what problem existed, what
   alternatives I considered, what I personally built or aligned, and what changed for users, reliability, security,
   or developer workflow. For this exact prompt, the details I would include are: Cover routing, auth, rate limits,
   TLS, observability, and the danger of hiding business logic in gateway config. Use Kong as a concrete gateway
   example for cross-cutting concerns, but call out latency, config drift, and debugging complexity. That keeps the
   answer honest and interview-ready: specific enough to defend in follow-up questions, but focused on impact instead
   of technology name-dropping.
54. What are downsides of an API gateway?
   - Sample answer: another operational dependency, latency, misconfiguration risk, and central bottleneck if all
   policies become gateway-specific. For this CV deep dive, I would make the answer concrete: what problem existed,
   what alternatives I considered, what I personally built or aligned, and what changed for users, reliability,
   security, or developer workflow. For this exact prompt, the details I would include are: Cover routing, auth, rate
   limits, TLS, observability, and the danger of hiding business logic in gateway config. That keeps the answer honest
   and interview-ready: specific enough to defend in follow-up questions, but focused on impact instead of technology
   name-dropping.
55. Explain your Docker CI/CD automation.
   - Sample answer: "I built scripts/pipelines to package, deploy, restart, and monitor environments, reducing manual
   deployment effort by around 80%." For this CV deep dive, I would make the answer concrete: what problem existed,
   what alternatives I considered, what I personally built or aligned, and what changed for users, reliability,
   security, or developer workflow. For this exact prompt, the details I would include are: Mention reproducible
   builds, immutable images, environment separation, health checks, rollback, and avoiding hidden local state. Talk
   about typecheck/build/test gates, deterministic artifacts, deployment safety, smoke tests, and rollback. That keeps
   the answer honest and interview-ready: specific enough to defend in follow-up questions, but focused on impact
   instead of technology name-dropping.
56. How do you make deployment scripts safe?
   - Sample answer: idempotency, clear logs, environment validation, health checks, rollback path, secrets hygiene,
   dry-run mode when possible. For this CV deep dive, I would make the answer concrete: what problem existed, what
   alternatives I considered, what I personally built or aligned, and what changed for users, reliability, security,
   or developer workflow. For this prompt, I would be ready to defend exact ownership, alternatives considered,
   tradeoffs, and production impact instead of only naming the technology. That keeps the answer honest and
   interview-ready: specific enough to defend in follow-up questions, but focused on impact instead of technology
   name-dropping.
57. Explain your AI recruitment platform thesis.
   - Sample answer: Full-stack platform for screening, job/talent search, audio questioning, assessment, and
   GenAI-assisted evaluation using React/TS, Node, Redis, React Query, LangChain, Qdrant, AWS, Stripe. For this CV
   deep dive, I would make the answer concrete: what problem existed, what alternatives I considered, what I
   personally built or aligned, and what changed for users, reliability, security, or developer workflow. For this
   prompt, I would be ready to defend exact ownership, alternatives considered, tradeoffs, and production impact
   instead of only naming the technology. That keeps the answer honest and interview-ready: specific enough to defend
   in follow-up questions, but focused on impact instead of technology name-dropping.
58. How would you discuss GenAI safely in an interview?
   - Sample answer: Mention usefulness but also evaluation, hallucination control, privacy, prompt/version control,
   fallback, monitoring, and human review for high-impact decisions. For this CV deep dive, I would make the answer
   concrete: what problem existed, what alternatives I considered, what I personally built or aligned, and what
   changed for users, reliability, security, or developer workflow. For this exact prompt, the details I would include
   are: Balance usefulness with bias, privacy, explainability, human review, and evaluation; do not sound like you
   trust generated output blindly. That keeps the answer honest and interview-ready: specific enough to defend in
   follow-up questions, but focused on impact instead of technology name-dropping.
59. Explain Lucky Wheel safeguards.
   - Sample answer: Backend-driven outcomes, validation of codes, state checks, navigation guards, and preventing
   client-only rule bypass. For this CV deep dive, I would make the answer concrete: what problem existed, what
   alternatives I considered, what I personally built or aligned, and what changed for users, reliability, security,
   or developer workflow. For this exact prompt, the details I would include are: Use this as an anti-abuse story:
   server-side outcome authority, idempotency, eligibility, rate limits, audit logs, and duplicate-click protection.
   That keeps the answer honest and interview-ready: specific enough to defend in follow-up questions, but focused on
   impact instead of technology name-dropping.
60. What interview risks are in your CV?
   - Sample answer: Be ready to defend exact ownership, quantify performance improvements, explain security design for
   BFF/tokens, and go deep on React/TS fundamentals rather than only architecture stories. For this CV deep dive, I
   would make the answer concrete: what problem existed, what alternatives I considered, what I personally built or
   aligned, and what changed for users, reliability, security, or developer workflow. For this prompt, I would be
   ready to defend exact ownership, alternatives considered, tradeoffs, and production impact instead of only naming
   the technology. That keeps the answer honest and interview-ready: specific enough to defend in follow-up questions,
   but focused on impact instead of technology name-dropping.
## 3. Computer Science Fundamentals

61. What happens when you type a URL and press Enter?
   - Sample answer: Browser checks cache, parses URL, resolves DNS, opens TCP connection, negotiates TLS for HTTPS, sends
   HTTP request, receives response, parses HTML, discovers resources, builds DOM/CSSOM, runs JS, lays out, paints, and
   handles async loading. A complete answer should define the concept, show how it behaves in a real system, and name
   the tradeoff or failure mode that matters to web applications. For this exact prompt, the details I would include
   are: Walk from browser cache/service worker, DNS, TCP or QUIC, TLS, HTTP, server routing, response, parsing,
   loading resources, rendering, and hydration. This style shows fundamentals without sounding academic: definition,
   real example, tradeoff, and why it affects frontend or distributed systems.
62. Explain process vs thread.
   - Sample answer: A process has its own memory space and resources. Threads run within a process and share memory,
   making communication cheaper but synchronization harder. A complete answer should define the concept, show how it
   behaves in a real system, and name the tradeoff or failure mode that matters to web applications. For this exact
   prompt, the details I would include are: A process owns isolated memory and resources; threads share process
   memory, which is cheaper but can introduce races. This style shows fundamentals without sounding academic:
   definition, real example, tradeoff, and why it affects frontend or distributed systems.
63. What is a context switch?
   - Sample answer: The OS saves the state of one running thread/process and loads another. It has overhead due to CPU
   register/cache/TLB effects. A complete answer should define the concept, show how it behaves in a real system, and
   name the tradeoff or failure mode that matters to web applications. For this exact prompt, the details I would
   include are: Explain saving/restoring CPU state, scheduler overhead, cache disruption, and why too many runnable
   tasks can hurt performance. This style shows fundamentals without sounding academic: definition, real example,
   tradeoff, and why it affects frontend or distributed systems.
64. What is virtual memory?
   - Sample answer: An abstraction giving each process its own address space. The OS maps virtual pages to physical
   memory or disk, improving isolation and memory management. A complete answer should define the concept, show how it
   behaves in a real system, and name the tradeoff or failure mode that matters to web applications. For this exact
   prompt, the details I would include are: Mention isolated address spaces, page tables, paging, protection, and how
   it lets the OS manage memory safely. This style shows fundamentals without sounding academic: definition, real
   example, tradeoff, and why it affects frontend or distributed systems.
65. What is a race condition?
   - Sample answer: Behavior depends on unpredictable timing between concurrent operations. Fix with synchronization,
   atomic operations, immutable data, transactions, or avoiding shared mutable state. A complete answer should define
   the concept, show how it behaves in a real system, and name the tradeoff or failure mode that matters to web
   applications. For this exact prompt, the details I would include are: Explain timing-dependent bugs and mitigations
   such as locks, transactions, idempotency, queues, or single ownership. This style shows fundamentals without
   sounding academic: definition, real example, tradeoff, and why it affects frontend or distributed systems.
66. What is deadlock?
   - Sample answer: Two or more operations wait forever for each other's resources. Conditions: mutual exclusion,
   hold-and-wait, no preemption, circular wait. A complete answer should define the concept, show how it behaves in a
   real system, and name the tradeoff or failure mode that matters to web applications. For this exact prompt, the
   details I would include are: Name mutual exclusion, hold-and-wait, no preemption, circular wait, and mitigations
   such as lock ordering and timeouts. This style shows fundamentals without sounding academic: definition, real
   example, tradeoff, and why it affects frontend or distributed systems.
67. What is starvation?
   - Sample answer: A task waits indefinitely because other tasks keep getting resources or priority. A complete answer
   should define the concept, show how it behaves in a real system, and name the tradeoff or failure mode that matters
   to web applications. For this exact prompt, the details I would include are: Describe fairness problems where a
   task never gets resources; aging and fair scheduling can help. This style shows fundamentals without sounding
   academic: definition, real example, tradeoff, and why it affects frontend or distributed systems.
68. What is the difference between concurrency and parallelism?
   - Sample answer: Concurrency is managing multiple tasks in overlapping time. Parallelism is executing tasks
   simultaneously on multiple cores. A complete answer should define the concept, show how it behaves in a real
   system, and name the tradeoff or failure mode that matters to web applications. For this exact prompt, the details
   I would include are: Concurrency is multiple tasks in progress; parallelism is simultaneous execution, often on
   multiple cores. This style shows fundamentals without sounding academic: definition, real example, tradeoff, and
   why it affects frontend or distributed systems.
69. What is CPU-bound vs I/O-bound work?
   - Sample answer: CPU-bound is limited by computation. I/O-bound is limited by waiting on network, disk, database, etc.
   A complete answer should define the concept, show how it behaves in a real system, and name the tradeoff or failure
   mode that matters to web applications. For this exact prompt, the details I would include are: CPU-bound work needs
   compute optimization/workers; I/O-bound work benefits from async scheduling, caching, batching, and fewer round
   trips. This style shows fundamentals without sounding academic: definition, real example, tradeoff, and why it
   affects frontend or distributed systems.
70. Why is Node.js good for I/O-heavy workloads?
   - Sample answer: Its event loop and non-blocking I/O can handle many concurrent connections without one thread per
   request. A complete answer should define the concept, show how it behaves in a real system, and name the tradeoff
   or failure mode that matters to web applications. For this exact prompt, the details I would include are: Node fits
   I/O-heavy workloads because the event loop handles many pending operations, but CPU-heavy work can block all
   requests. This style shows fundamentals without sounding academic: definition, real example, tradeoff, and why it
   affects frontend or distributed systems.
71. What is a file descriptor?
   - Sample answer: An OS handle representing an open file, socket, pipe, or other I/O resource. A complete answer should
   define the concept, show how it behaves in a real system, and name the tradeoff or failure mode that matters to web
   applications. For this exact prompt, the details I would include are: A file descriptor is an OS handle for
   files/sockets/pipes; leaks can exhaust limits and break servers. This style shows fundamentals without sounding
   academic: definition, real example, tradeoff, and why it affects frontend or distributed systems.
72. What is DNS?
   - Sample answer: Domain Name System maps human-readable domain names to IP addresses through recursive and
   authoritative resolvers. A complete answer should define the concept, show how it behaves in a real system, and
   name the tradeoff or failure mode that matters to web applications. For this exact prompt, the details I would
   include are: DNS maps names to records, uses caching and TTLs, and can affect both latency and rollout behavior.
   This style shows fundamentals without sounding academic: definition, real example, tradeoff, and why it affects
   frontend or distributed systems.
73. TCP vs UDP?
   - Sample answer: TCP is connection-oriented, reliable, ordered, congestion-controlled. UDP is connectionless, lower
   overhead, no built-in reliability or ordering. A complete answer should define the concept, show how it behaves in
   a real system, and name the tradeoff or failure mode that matters to web applications. For this exact prompt, the
   details I would include are: TCP is reliable and ordered with congestion control; compare it with UDP for
   latency-sensitive or app-managed reliability cases. UDP is datagram-based and low overhead but does not guarantee
   delivery or ordering. This style shows fundamentals without sounding academic: definition, real example, tradeoff,
   and why it affects frontend or distributed systems.
74. HTTP/1.1 vs HTTP/2 vs HTTP/3?
   - Sample answer: HTTP/1.1 has limited connection multiplexing. HTTP/2 multiplexes streams over TCP and compresses
   headers. HTTP/3 uses QUIC over UDP to reduce head-of-line blocking and improve connection migration. A complete
   answer should define the concept, show how it behaves in a real system, and name the tradeoff or failure mode that
   matters to web applications. For this exact prompt, the details I would include are: Compare connection limits,
   multiplexing, head-of-line blocking, and QUIC/HTTP/3 behavior. This style shows fundamentals without sounding
   academic: definition, real example, tradeoff, and why it affects frontend or distributed systems.
75. What is TLS?
   - Sample answer: Protocol providing encryption, integrity, and server identity verification for network communication.
   A complete answer should define the concept, show how it behaves in a real system, and name the tradeoff or failure
   mode that matters to web applications. For this exact prompt, the details I would include are: TLS authenticates
   the server, negotiates keys, encrypts traffic, and adds handshake cost that can be reduced with reuse and modern
   protocols. This style shows fundamentals without sounding academic: definition, real example, tradeoff, and why it
   affects frontend or distributed systems.
76. What is the TLS handshake?
   - Sample answer: Client/server negotiate protocol/ciphers, verify certificate, exchange keys, then use symmetric
   encryption for data. A complete answer should define the concept, show how it behaves in a real system, and name
   the tradeoff or failure mode that matters to web applications. For this exact prompt, the details I would include
   are: TLS authenticates the server, negotiates keys, encrypts traffic, and adds handshake cost that can be reduced
   with reuse and modern protocols. This style shows fundamentals without sounding academic: definition, real example,
   tradeoff, and why it affects frontend or distributed systems.
77. What is HTTP caching?
   - Sample answer: Reusing responses based on headers like `Cache-Control`, `ETag`, `Last-Modified`, and freshness
   validation. A complete answer should define the concept, show how it behaves in a real system, and name the
   tradeoff or failure mode that matters to web applications. For this exact prompt, the details I would include are:
   Mention Cache-Control, ETag, Last-Modified, immutable assets, stale-while-revalidate, and invalidation. This style
   shows fundamentals without sounding academic: definition, real example, tradeoff, and why it affects frontend or
   distributed systems.
78. What is CDN caching?
   - Sample answer: Edge servers cache static or cacheable dynamic content close to users, reducing latency and origin
   load. A complete answer should define the concept, show how it behaves in a real system, and name the tradeoff or
   failure mode that matters to web applications. For this exact prompt, the details I would include are: Mention
   Cache-Control, ETag, Last-Modified, immutable assets, stale-while-revalidate, and invalidation. CDNs reduce latency
   by caching near users, but cache keys, TTLs, purges, and Vary headers must be correct. This style shows
   fundamentals without sounding academic: definition, real example, tradeoff, and why it affects frontend or
   distributed systems.
79. What is CORS?
   - Sample answer: Browser security mechanism controlling whether a page from one origin can access resources from
   another origin. A complete answer should define the concept, show how it behaves in a real system, and name the
   tradeoff or failure mode that matters to web applications. For this exact prompt, the details I would include are:
   CORS is browser-enforced server opt-in for cross-origin reads; include allowed origins, methods, headers, and
   credentials. This style shows fundamentals without sounding academic: definition, real example, tradeoff, and why
   it affects frontend or distributed systems.
80. What triggers a CORS preflight?
   - Sample answer: Non-simple methods, non-simple headers, or certain content types cause the browser to send an
   `OPTIONS` request first. A complete answer should define the concept, show how it behaves in a real system, and
   name the tradeoff or failure mode that matters to web applications. For this exact prompt, the details I would
   include are: CORS is browser-enforced server opt-in for cross-origin reads; include allowed origins, methods,
   headers, and credentials. Preflight is an OPTIONS check for non-simple cross-origin requests; custom headers and
   unsafe methods commonly trigger it. This style shows fundamentals without sounding academic: definition, real
   example, tradeoff, and why it affects frontend or distributed systems.
81. What is same-origin policy?
   - Sample answer: Browser rule restricting scripts from one origin from reading data from another origin unless
   explicitly allowed. A complete answer should define the concept, show how it behaves in a real system, and name the
   tradeoff or failure mode that matters to web applications. For this exact prompt, the details I would include are:
   Same-origin policy isolates scheme, host, and port so one site cannot read another site without permission. This
   style shows fundamentals without sounding academic: definition, real example, tradeoff, and why it affects frontend
   or distributed systems.
82. What is a reverse proxy?
   - Sample answer: A server in front of backends that handles routing, TLS termination, load balancing, caching,
   compression, or access control. A complete answer should define the concept, show how it behaves in a real system,
   and name the tradeoff or failure mode that matters to web applications. For this exact prompt, the details I would
   include are: A reverse proxy handles routing, TLS termination, compression, caching, auth integration, and load
   balancing in front of services. This style shows fundamentals without sounding academic: definition, real example,
   tradeoff, and why it affects frontend or distributed systems.
83. Load balancing strategies?
   - Sample answer: round robin, least connections, weighted, consistent hashing, latency-based, or health-aware routing.
   A complete answer should define the concept, show how it behaves in a real system, and name the tradeoff or failure
   mode that matters to web applications. For this exact prompt, the details I would include are: Mention round robin,
   least connections, weighted routing, consistent hashing, health checks, and sticky sessions when needed. This style
   shows fundamentals without sounding academic: definition, real example, tradeoff, and why it affects frontend or
   distributed systems.
84. What is idempotency?
   - Sample answer: An operation can be repeated with the same effect as once. GET, PUT, DELETE are generally idempotent
   by HTTP semantics; POST usually is not unless designed with idempotency keys. A complete answer should define the
   concept, show how it behaves in a real system, and name the tradeoff or failure mode that matters to web
   applications. For this exact prompt, the details I would include are: Retries should not duplicate side effects;
   use idempotency keys for payments, uploads, or high-impact actions. This style shows fundamentals without sounding
   academic: definition, real example, tradeoff, and why it affects frontend or distributed systems.
85. What is eventual consistency?
   - Sample answer: Replicas may temporarily differ but converge later. Useful for distributed systems where strong
   consistency is costly. A complete answer should define the concept, show how it behaves in a real system, and name
   the tradeoff or failure mode that matters to web applications. For this exact prompt, the details I would include
   are: The UI may need pending/stale indicators because replicas or async processors can lag behind writes. This
   style shows fundamentals without sounding academic: definition, real example, tradeoff, and why it affects frontend
   or distributed systems.
86. SQL vs NoSQL?
   - Sample answer: SQL gives relational modeling, strong query semantics, joins, transactions. NoSQL often gives
   flexible schema, horizontal scaling patterns, or specialized access models. A complete answer should define the
   concept, show how it behaves in a real system, and name the tradeoff or failure mode that matters to web
   applications. For this exact prompt, the details I would include are: SQL fits relational data, joins, constraints,
   and transactions; NoSQL can fit flexible schemas or high-scale access patterns. Compare
   document/key-value/wide-column models with relational guarantees and query patterns. This style shows fundamentals
   without sounding academic: definition, real example, tradeoff, and why it affects frontend or distributed systems.
87. What is an index?
   - Sample answer: Data structure that speeds reads by allowing lookup/sort/filter without scanning the whole table, at
   the cost of write overhead and storage. A complete answer should define the concept, show how it behaves in a real
   system, and name the tradeoff or failure mode that matters to web applications. For this exact prompt, the details
   I would include are: Indexes speed reads but cost storage and write performance, so they should match real
   query/filter/sort patterns. This style shows fundamentals without sounding academic: definition, real example,
   tradeoff, and why it affects frontend or distributed systems.
88. What is a transaction?
   - Sample answer: A group of database operations executed with ACID properties: atomicity, consistency, isolation,
   durability. A complete answer should define the concept, show how it behaves in a real system, and name the
   tradeoff or failure mode that matters to web applications. For this exact prompt, the details I would include are:
   Transactions protect invariants with ACID semantics when multiple operations must succeed or fail together. This
   style shows fundamentals without sounding academic: definition, real example, tradeoff, and why it affects frontend
   or distributed systems.
89. What is isolation level?
   - Sample answer: Defines how concurrent transactions see each other. Examples: read committed, repeatable read,
   serializable. A complete answer should define the concept, show how it behaves in a real system, and name the
   tradeoff or failure mode that matters to web applications. For this exact prompt, the details I would include are:
   Isolation levels trade concurrency for anomalies such as dirty reads, non-repeatable reads, and phantom reads. This
   style shows fundamentals without sounding academic: definition, real example, tradeoff, and why it affects frontend
   or distributed systems.
90. What is a message queue?
   - Sample answer: A system for asynchronous communication between producers and consumers, improving decoupling,
   buffering, and retry handling. A complete answer should define the concept, show how it behaves in a real system,
   and name the tradeoff or failure mode that matters to web applications. For this exact prompt, the details I would
   include are: Queues decouple producers/consumers, absorb spikes, enable retries, and need idempotent consumers plus
   dead-letter handling. This style shows fundamentals without sounding academic: definition, real example, tradeoff,
   and why it affects frontend or distributed systems.
## 4. Security And Authentication

91. Authentication vs authorization?
   - Sample answer: Authentication verifies who you are. Authorization decides what you can access. I would answer in
   threat-model form: what can go wrong, which control reduces the risk, what belongs on the server versus the
   browser, and how to verify or monitor it. For this exact prompt, the details I would include are: Authentication
   proves identity; authorization decides allowed resources/actions and must be enforced server-side. Authorization
   should be based on trusted claims/session and checked for every sensitive resource/action. For Axon-style products,
   I would emphasize least privilege, server-side enforcement, privacy-aware logs, audit trails, and defense in depth.
92. Session cookie auth vs JWT auth?
   - Sample answer: Cookie session stores state server-side and sends session ID. JWT stores signed claims
   client-side/statelessly. Cookies are easier to revoke server-side; JWTs scale statelessly but need careful
   expiry/revocation. I would answer in threat-model form: what can go wrong, which control reduces the risk, what
   belongs on the server versus the browser, and how to verify or monitor it. For this exact prompt, the details I
   would include are: HttpOnly Secure SameSite cookies reduce browser-token theft risk, but need CSRF protections and
   server-side session management. JWTs are stateless signed claims, but need short expiry, audience validation,
   rotation/revocation strategy, and careful storage. For Axon-style products, I would emphasize least privilege,
   server-side enforcement, privacy-aware logs, audit trails, and defense in depth.
93. Access token vs refresh token?
   - Sample answer: Access token is short-lived and used for APIs. Refresh token is longer-lived and used to obtain new
   access tokens. I would answer in threat-model form: what can go wrong, which control reduces the risk, what belongs
   on the server versus the browser, and how to verify or monitor it. For this exact prompt, the details I would
   include are: Access tokens should be short-lived and scoped to APIs/resources. Refresh tokens are high value,
   should be protected, rotated, and monitored for reuse. For Axon-style products, I would emphasize least privilege,
   server-side enforcement, privacy-aware logs, audit trails, and defense in depth.
94. Where should browser tokens be stored?
   - Sample answer: Prefer HttpOnly, Secure, SameSite cookies for sensitive tokens. Avoid localStorage for high-value
   tokens because XSS can read it. I would answer in threat-model form: what can go wrong, which control reduces the
   risk, what belongs on the server versus the browser, and how to verify or monitor it. For this exact prompt, the
   details I would include are: Prefer HttpOnly Secure SameSite cookies or a BFF session for high-value tokens;
   localStorage is vulnerable to XSS. For Axon-style products, I would emphasize least privilege, server-side
   enforcement, privacy-aware logs, audit trails, and defense in depth.
95. What is XSS?
   - Sample answer: Cross-site scripting lets attacker execute JS in a user's browser. Prevent with escaping,
   sanitization, CSP, avoiding unsafe HTML injection, and framework-safe rendering. I would answer in threat-model
   form: what can go wrong, which control reduces the risk, what belongs on the server versus the browser, and how to
   verify or monitor it. For this exact prompt, the details I would include are: React escaping helps, but dangerous
   HTML, unsafe markdown, third-party scripts, CSP, and sanitization still matter. For Axon-style products, I would
   emphasize least privilege, server-side enforcement, privacy-aware logs, audit trails, and defense in depth.
96. What is CSRF?
   - Sample answer: Cross-site request forgery tricks a browser into sending authenticated requests. Mitigate with
   SameSite cookies, CSRF tokens, checking origin/referer, and non-cookie bearer tokens where appropriate. I would
   answer in threat-model form: what can go wrong, which control reduces the risk, what belongs on the server versus
   the browser, and how to verify or monitor it. For this exact prompt, the details I would include are: CSRF abuses
   automatically attached credentials; SameSite, CSRF tokens, origin checks, and method semantics mitigate it. For
   Axon-style products, I would emphasize least privilege, server-side enforcement, privacy-aware logs, audit trails,
   and defense in depth.
97. Why does SameSite help?
   - Sample answer: It controls whether cookies are sent on cross-site requests. `Lax` or `Strict` reduces CSRF risk. I
   would answer in threat-model form: what can go wrong, which control reduces the risk, what belongs on the server
   versus the browser, and how to verify or monitor it. For this exact prompt, the details I would include are:
   SameSite controls cross-site cookie sending and reduces CSRF risk, especially Lax or Strict where product flow
   allows. For Axon-style products, I would emphasize least privilege, server-side enforcement, privacy-aware logs,
   audit trails, and defense in depth.
98. What is CSP?
   - Sample answer: Content Security Policy restricts what scripts/styles/images/connect sources can load, reducing XSS
   impact. I would answer in threat-model form: what can go wrong, which control reduces the risk, what belongs on the
   server versus the browser, and how to verify or monitor it. For this exact prompt, the details I would include are:
   CSP limits script/style/connect/frame sources and can reduce XSS blast radius; report-only mode helps rollout. For
   Axon-style products, I would emphasize least privilege, server-side enforcement, privacy-aware logs, audit trails,
   and defense in depth.
99. What is clickjacking?
   - Sample answer: Attacker embeds your page in a hidden/misleading frame. Prevent with `X-Frame-Options` or CSP
   `frame-ancestors`. I would answer in threat-model form: what can go wrong, which control reduces the risk, what
   belongs on the server versus the browser, and how to verify or monitor it. For this exact prompt, the details I
   would include are: Use CSP frame-ancestors or X-Frame-Options to prevent hostile framing of sensitive pages. For
   Axon-style products, I would emphasize least privilege, server-side enforcement, privacy-aware logs, audit trails,
   and defense in depth.
100. What is SQL injection?
   - Sample answer: Attacker alters SQL queries through untrusted input. Prevent with parameterized queries and avoiding
   string-concatenated SQL. I would answer in threat-model form: what can go wrong, which control reduces the risk,
   what belongs on the server versus the browser, and how to verify or monitor it. For this exact prompt, the details
   I would include are: SQL fits relational data, joins, constraints, and transactions; NoSQL can fit flexible schemas
   or high-scale access patterns. Parameterized queries and server-side validation matter; frontend validation is
   never a security boundary. For Axon-style products, I would emphasize least privilege, server-side enforcement,
   privacy-aware logs, audit trails, and defense in depth.
101. What is SSRF?
   - Sample answer: Server-side request forgery tricks a server into making requests to internal/external targets.
   Prevent with allowlists, network policies, URL validation, and metadata service protections. I would answer in
   threat-model form: what can go wrong, which control reduces the risk, what belongs on the server versus the
   browser, and how to verify or monitor it. For this exact prompt, the details I would include are: SSRF happens when
   a server fetches attacker-controlled URLs; use allowlists, network policy, metadata protections, and strict URL
   parsing. For Axon-style products, I would emphasize least privilege, server-side enforcement, privacy-aware logs,
   audit trails, and defense in depth.
102. What is open redirect?
   - Sample answer: App redirects to attacker-controlled URL. Prevent by validating redirect targets against allowlists
   or internal paths. I would answer in threat-model form: what can go wrong, which control reduces the risk, what
   belongs on the server versus the browser, and how to verify or monitor it. For this exact prompt, the details I
   would include are: Only allow relative or signed/allowlisted redirect targets, especially around login flows. For
   Axon-style products, I would emphasize least privilege, server-side enforcement, privacy-aware logs, audit trails,
   and defense in depth.
103. What is OAuth 2.0?
   - Sample answer: Authorization framework where a client obtains access tokens to access resources on behalf of a user
   or service. I would answer in threat-model form: what can go wrong, which control reduces the risk, what belongs on
   the server versus the browser, and how to verify or monitor it. For this exact prompt, the details I would include
   are: OAuth 2.0 is delegated authorization involving client, authorization server, resource server, scopes, and
   access tokens. For Axon-style products, I would emphasize least privilege, server-side enforcement, privacy-aware
   logs, audit trails, and defense in depth.
104. What is OIDC?
   - Sample answer: OpenID Connect adds identity/authentication on top of OAuth 2.0, including ID tokens and user
   identity claims. I would answer in threat-model form: what can go wrong, which control reduces the risk, what
   belongs on the server versus the browser, and how to verify or monitor it. For this exact prompt, the details I
   would include are: OIDC adds identity on top of OAuth with ID tokens and user claims. For Axon-style products, I
   would emphasize least privilege, server-side enforcement, privacy-aware logs, audit trails, and defense in depth.
105. What is PKCE?
   - Sample answer: Proof Key for Code Exchange protects public clients by binding auth code exchange to a
   client-generated verifier/challenge. I would answer in threat-model form: what can go wrong, which control reduces
   the risk, what belongs on the server versus the browser, and how to verify or monitor it. For this exact prompt,
   the details I would include are: PKCE protects public clients by binding the authorization code exchange to a
   verifier generated by the client. For Axon-style products, I would emphasize least privilege, server-side
   enforcement, privacy-aware logs, audit trails, and defense in depth.
106. What is the difference between ID token and access token?
   - Sample answer: ID token proves authentication to the client. Access token authorizes API access to a resource
   server. I would answer in threat-model form: what can go wrong, which control reduces the risk, what belongs on the
   server versus the browser, and how to verify or monitor it. For this exact prompt, the details I would include are:
   Access tokens should be short-lived and scoped to APIs/resources. ID tokens prove authentication to the client;
   access tokens authorize calls to resource servers. For Axon-style products, I would emphasize least privilege,
   server-side enforcement, privacy-aware logs, audit trails, and defense in depth.
107. How do you rotate refresh tokens?
   - Sample answer: Issue a new refresh token each use, invalidate old one, detect reuse as possible theft, and force
   re-authentication. I would answer in threat-model form: what can go wrong, which control reduces the risk, what
   belongs on the server versus the browser, and how to verify or monitor it. For this exact prompt, the details I
   would include are: Refresh tokens are high value, should be protected, rotated, and monitored for reuse. Rotate on
   every use, invalidate the old token, and treat reuse as theft of the token family. For Axon-style products, I would
   emphasize least privilege, server-side enforcement, privacy-aware logs, audit trails, and defense in depth.
108. How would you secure a WebSocket?
   - Sample answer: Use WSS, authenticate during handshake or initial message, validate origin, enforce authorization per
   channel, rate limit, heartbeat, close unauthorized connections. I would answer in threat-model form: what can go
   wrong, which control reduces the risk, what belongs on the server versus the browser, and how to verify or monitor
   it. For this exact prompt, the details I would include are: Secure WebSockets with WSS, authentication, origin
   checks, channel authorization, heartbeat, reconnect/backoff, and rate limits. For Axon-style products, I would
   emphasize least privilege, server-side enforcement, privacy-aware logs, audit trails, and defense in depth.
109. How do you handle tenant scoping?
   - Sample answer: Enforce tenant ID on server side from trusted auth claims/session, never only from client input.
   Check permissions on every query/resource. I would answer in threat-model form: what can go wrong, which control
   reduces the risk, what belongs on the server versus the browser, and how to verify or monitor it. For this exact
   prompt, the details I would include are: Tenant scope must come from trusted auth/session context, not editable
   client input, and must be included in cache keys and server queries. For Axon-style products, I would emphasize
   least privilege, server-side enforcement, privacy-aware logs, audit trails, and defense in depth.
110. How would you design frontend permission checks?
   - Sample answer: Use frontend checks for UX only. Server remains source of truth. Hide/disable UI based on permission
   model, but backend enforces all actions. I would answer in threat-model form: what can go wrong, which control
   reduces the risk, what belongs on the server versus the browser, and how to verify or monitor it. For this exact
   prompt, the details I would include are: Frontend permission checks are UX; backend policy is enforcement.
   Hide/disable actions but never rely on the browser. For Axon-style products, I would emphasize least privilege,
   server-side enforcement, privacy-aware logs, audit trails, and defense in depth.
111. How do you avoid leaking secrets in frontend apps?
   - Sample answer: Never ship private keys/tokens in JS bundles. Use backend/BFF for secret-bearing calls. Treat
   `NEXT_PUBLIC_*` as public. I would answer in threat-model form: what can go wrong, which control reduces the risk,
   what belongs on the server versus the browser, and how to verify or monitor it. For this exact prompt, the details
   I would include are: Anything in a frontend bundle is public; secret-bearing calls belong behind backend/BFF
   boundaries. For Axon-style products, I would emphasize least privilege, server-side enforcement, privacy-aware
   logs, audit trails, and defense in depth.
112. How do you protect logs and monitoring data?
   - Sample answer: redact PII/secrets, limit breadcrumbs, scrub request headers/bodies, enforce retention policies, and
   control access. I would answer in threat-model form: what can go wrong, which control reduces the risk, what
   belongs on the server versus the browser, and how to verify or monitor it. For this exact prompt, the details I
   would include are: Scrub tokens, passwords, PII, headers, and sensitive payloads; control retention and access. For
   Axon-style products, I would emphasize least privilege, server-side enforcement, privacy-aware logs, audit trails,
   and defense in depth.
113. How would you rate limit login?
   - Sample answer: Combine IP/user/device counters, exponential backoff, captcha after threshold, account lock with
   care, and monitoring for credential stuffing. I would answer in threat-model form: what can go wrong, which control
   reduces the risk, what belongs on the server versus the browser, and how to verify or monitor it. For this exact
   prompt, the details I would include are: Use server-side counters plus client UX throttling, exponential backoff,
   monitoring, and careful lockout behavior. For Axon-style products, I would emphasize least privilege, server-side
   enforcement, privacy-aware logs, audit trails, and defense in depth.
114. What is defense in depth?
   - Sample answer: Multiple independent controls so failure of one layer does not fully compromise the system. I would
   answer in threat-model form: what can go wrong, which control reduces the risk, what belongs on the server versus
   the browser, and how to verify or monitor it. For this exact prompt, the details I would include are: Layer
   independent controls so one failure does not compromise the whole system. For Axon-style products, I would
   emphasize least privilege, server-side enforcement, privacy-aware logs, audit trails, and defense in depth.
## 5. JavaScript Fundamentals

115. What are JavaScript primitive types?
   - Sample answer: string, number, bigint, boolean, undefined, symbol, null. Objects are non-primitive. I would add a
   small JavaScript example, then mention the production pitfall because interviewers usually want to know whether I
   can apply the concept in real React code. For this exact prompt, the details I would include are: Primitives are
   value-like, while objects/arrays are references; null is a historical typeof edge case. I would be ready to write a
   tiny snippet and explain execution order, mutation/reference behavior, or cleanup depending on the prompt.
116. `var` vs `let` vs `const`?
   - Sample answer: `var` is function-scoped and hoisted with undefined. `let` and `const` are block-scoped and have
   temporal dead zone. `const` prevents rebinding, not object mutation. I would add a small JavaScript example, then
   mention the production pitfall because interviewers usually want to know whether I can apply the concept in real
   React code. For this exact prompt, the details I would include are: Prefer const by default, let for reassignment,
   and avoid var because function scope and hoisting surprise people. I would be ready to write a tiny snippet and
   explain execution order, mutation/reference behavior, or cleanup depending on the prompt.
117. What is hoisting?
   - Sample answer: Declarations are processed before execution. Function declarations are callable before definition;
   `let/const` are hoisted but inaccessible before initialization. I would add a small JavaScript example, then
   mention the production pitfall because interviewers usually want to know whether I can apply the concept in real
   React code. For this exact prompt, the details I would include are: Function declarations are usable before
   definition; let/const are hoisted but blocked by the temporal dead zone. I would be ready to write a tiny snippet
   and explain execution order, mutation/reference behavior, or cleanup depending on the prompt.
118. What is closure?
   - Sample answer: A function retains access to variables from its lexical scope after that outer scope has returned. I
   would add a small JavaScript example, then mention the production pitfall because interviewers usually want to know
   whether I can apply the concept in real React code. For this exact prompt, the details I would include are:
   Closures retain lexical variables and power callbacks, hooks, debouncing, memoization, and private state; stale
   closures are the pitfall. I would be ready to write a tiny snippet and explain execution order, mutation/reference
   behavior, or cleanup depending on the prompt.
119. Common closure bug?
   - Sample answer: Loops with `var` share one binding; use `let` or create a new scope. I would add a small JavaScript
   example, then mention the production pitfall because interviewers usually want to know whether I can apply the
   concept in real React code. For this exact prompt, the details I would include are: Closures retain lexical
   variables and power callbacks, hooks, debouncing, memoization, and private state; stale closures are the pitfall. I
   would be ready to write a tiny snippet and explain execution order, mutation/reference behavior, or cleanup
   depending on the prompt.
120. What is the event loop?
   - Sample answer: JS runs on a call stack. Async callbacks are queued. The event loop moves tasks to the stack when
   empty. Microtasks usually run before the next macrotask/render opportunity. I would add a small JavaScript example,
   then mention the production pitfall because interviewers usually want to know whether I can apply the concept in
   real React code. For this exact prompt, the details I would include are: Explain sync stack first, then microtasks
   such as promises, then macrotasks such as timers, with rendering opportunities between work. I would be ready to
   write a tiny snippet and explain execution order, mutation/reference behavior, or cleanup depending on the prompt.
121. Microtask vs macrotask?
   - Sample answer: Promises/queueMicrotask are microtasks. setTimeout, setInterval, I/O callbacks are macrotasks.
   Microtasks drain before next macrotask. I would add a small JavaScript example, then mention the production pitfall
   because interviewers usually want to know whether I can apply the concept in real React code. For this exact
   prompt, the details I would include are: Promise microtasks drain before the next macrotask, which can starve
   rendering if abused. Timers, I/O callbacks, and user events are macrotasks; they run after microtasks are drained.
   I would be ready to write a tiny snippet and explain execution order, mutation/reference behavior, or cleanup
   depending on the prompt.
122. `Promise.all` vs `Promise.allSettled`?
   - Sample answer: `all` rejects on first rejection. `allSettled` waits for all and returns status/value or reason. I
   would add a small JavaScript example, then mention the production pitfall because interviewers usually want to know
   whether I can apply the concept in real React code. For this exact prompt, the details I would include are:
   Promise.all preserves result order and rejects on first failure; allSettled is better for partial results. I would
   be ready to write a tiny snippet and explain execution order, mutation/reference behavior, or cleanup depending on
   the prompt.
123. `==` vs `===`?
   - Sample answer: `==` performs type coercion. `===` compares without coercion except normal reference/value rules. I
   would add a small JavaScript example, then mention the production pitfall because interviewers usually want to know
   whether I can apply the concept in real React code. For this exact prompt, the details I would include are: Strict
   equality avoids coercion surprises such as false, 0, empty string, null, and undefined. I would be ready to write a
   tiny snippet and explain execution order, mutation/reference behavior, or cleanup depending on the prompt.
124. What is prototypal inheritance?
   - Sample answer: Objects can delegate property lookup to a prototype object. Classes are syntax over prototypes. I
   would add a small JavaScript example, then mention the production pitfall because interviewers usually want to know
   whether I can apply the concept in real React code. For this exact prompt, the details I would include are:
   Property lookup delegates through prototypes; class syntax sits on top of this model. I would be ready to write a
   tiny snippet and explain execution order, mutation/reference behavior, or cleanup depending on the prompt.
125. What is `this`?
   - Sample answer: Runtime binding based on call site for normal functions; lexical for arrow functions. I would add a
   small JavaScript example, then mention the production pitfall because interviewers usually want to know whether I
   can apply the concept in real React code. For this exact prompt, the details I would include are: Normal functions
   bind this from call site; arrow functions capture lexical this. I would be ready to write a tiny snippet and
   explain execution order, mutation/reference behavior, or cleanup depending on the prompt.
126. What is debouncing?
   - Sample answer: Delay execution until events stop firing for a period. Useful for search input. I would add a small
   JavaScript example, then mention the production pitfall because interviewers usually want to know whether I can
   apply the concept in real React code. For this exact prompt, the details I would include are: Debounce waits for a
   quiet period, ideal for search input and resize completion. I would be ready to write a tiny snippet and explain
   execution order, mutation/reference behavior, or cleanup depending on the prompt.
127. What is throttling?
   - Sample answer: Limit execution to at most once per interval. Useful for scroll/resize handlers. I would add a small
   JavaScript example, then mention the production pitfall because interviewers usually want to know whether I can
   apply the concept in real React code. For this exact prompt, the details I would include are: Throttle limits
   execution frequency, useful for scroll, resize, drag, or telemetry streams. I would be ready to write a tiny
   snippet and explain execution order, mutation/reference behavior, or cleanup depending on the prompt.
128. Shallow copy vs deep copy?
   - Sample answer: Shallow copy duplicates top-level references; nested objects remain shared. Deep copy recursively
   copies nested structures. I would add a small JavaScript example, then mention the production pitfall because
   interviewers usually want to know whether I can apply the concept in real React code. For this exact prompt, the
   details I would include are: Shallow copies share nested objects, which can break React state expectations if
   nested values mutate. Deep copy recursively copies nested data but must handle dates, cycles, functions, and class
   instances carefully. I would be ready to write a tiny snippet and explain execution order, mutation/reference
   behavior, or cleanup depending on the prompt.
129. What is optional chaining?
   - Sample answer: `obj?.a?.b` safely returns undefined if any part is nullish. I would add a small JavaScript example,
   then mention the production pitfall because interviewers usually want to know whether I can apply the concept in
   real React code. For this exact prompt, the details I would include are: Optional chaining prevents null/undefined
   property crashes but should not hide required-data bugs silently. I would be ready to write a tiny snippet and
   explain execution order, mutation/reference behavior, or cleanup depending on the prompt.
130. What is nullish coalescing?
   - Sample answer: `a ?? b` returns `b` only when `a` is null or undefined, unlike `||` which treats falsy values as
   fallback. I would add a small JavaScript example, then mention the production pitfall because interviewers usually
   want to know whether I can apply the concept in real React code. For this exact prompt, the details I would include
   are: Nullish coalescing preserves valid falsy values like 0, false, and empty string. I would be ready to write a
   tiny snippet and explain execution order, mutation/reference behavior, or cleanup depending on the prompt.
131. What is tree shaking?
   - Sample answer: Bundlers remove unused exports when modules are statically analyzable, especially ES modules. I would
   add a small JavaScript example, then mention the production pitfall because interviewers usually want to know
   whether I can apply the concept in real React code. For this exact prompt, the details I would include are: Works
   best with static ES modules and side-effect-free packages; CommonJS and package side effects limit it. I would be
   ready to write a tiny snippet and explain execution order, mutation/reference behavior, or cleanup depending on the
   prompt.
132. What is memory leak in JS?
   - Sample answer: Objects remain reachable unintentionally via timers, closures, global refs, event listeners, caches,
   or detached DOM nodes. I would add a small JavaScript example, then mention the production pitfall because
   interviewers usually want to know whether I can apply the concept in real React code. For this exact prompt, the
   details I would include are: Look for timers, listeners, subscriptions, global refs, unbounded caches, detached DOM
   nodes, and closures retaining large values. I would be ready to write a tiny snippet and explain execution order,
   mutation/reference behavior, or cleanup depending on the prompt.
133. How do you debug a memory leak?
   - Sample answer: Chrome heap snapshots, allocation timeline, check detached nodes, event listeners, subscriptions,
   long-lived caches. I would add a small JavaScript example, then mention the production pitfall because interviewers
   usually want to know whether I can apply the concept in real React code. For this exact prompt, the details I would
   include are: Look for timers, listeners, subscriptions, global refs, unbounded caches, detached DOM nodes, and
   closures retaining large values. I would be ready to write a tiny snippet and explain execution order,
   mutation/reference behavior, or cleanup depending on the prompt.
134. What is a service worker?
   - Sample answer: Background script that can intercept network requests, cache assets, enable offline support, and
   handle push/background sync. I would add a small JavaScript example, then mention the production pitfall because
   interviewers usually want to know whether I can apply the concept in real React code. For this exact prompt, the
   details I would include are: Service workers intercept requests, cache assets, enable offline/push, and need
   careful cache invalidation. I would be ready to write a tiny snippet and explain execution order,
   mutation/reference behavior, or cleanup depending on the prompt.
## 6. TypeScript

135. Why TypeScript?
   - Sample answer: Static typing catches errors earlier, documents contracts, improves refactoring, editor support, and
   large-codebase maintainability. The practical angle is using TypeScript to make contracts explicit without turning
   the type system into unreadable infrastructure. For this exact prompt, the details I would include are: Use
   TypeScript to make contracts explicit and catch refactor mistakes before runtime. I would also mention where
   runtime validation is still required because TypeScript disappears after compilation.
136. `interface` vs `type`?
   - Sample answer: Both model shapes. Interfaces can merge declarations and are commonly used for object contracts.
   Types can express unions, primitives, tuples, mapped/conditional types. The practical angle is using TypeScript to
   make contracts explicit without turning the type system into unreadable infrastructure. For this exact prompt, the
   details I would include are: Interfaces are good object contracts and can merge; type aliases handle unions,
   tuples, mapped and conditional types. I would also mention where runtime validation is still required because
   TypeScript disappears after compilation.
137. What is a union type?
   - Sample answer: A value can be one of several types, e.g. `string | number`. The practical angle is using TypeScript
   to make contracts explicit without turning the type system into unreadable infrastructure. For this exact prompt,
   the details I would include are: Unions model one-of-many values and are useful for loading/success/error states. I
   would also mention where runtime validation is still required because TypeScript disappears after compilation.
138. What is a discriminated union?
   - Sample answer: Union members share a literal discriminant field, allowing safe narrowing in switches. The practical
   angle is using TypeScript to make contracts explicit without turning the type system into unreadable
   infrastructure. For this exact prompt, the details I would include are: Discriminated unions use a literal tag to
   make narrowing and exhaustive checks reliable. I would also mention where runtime validation is still required
   because TypeScript disappears after compilation.
139. What is type narrowing?
   - Sample answer: TypeScript refines a type based on runtime checks like `typeof`, `in`, equality, or custom type
   guards. The practical angle is using TypeScript to make contracts explicit without turning the type system into
   unreadable infrastructure. For this exact prompt, the details I would include are: Narrow with typeof, in,
   equality, user-defined guards, or schema validation at trust boundaries. I would also mention where runtime
   validation is still required because TypeScript disappears after compilation.
140. What is `unknown` vs `any`?
   - Sample answer: `any` disables type safety. `unknown` forces validation/narrowing before use. The practical angle is
   using TypeScript to make contracts explicit without turning the type system into unreadable infrastructure. For
   this exact prompt, the details I would include are: unknown forces validation before use; any turns off checking
   and should be localized. I would also mention where runtime validation is still required because TypeScript
   disappears after compilation.
141. What is `never`?
   - Sample answer: Type representing impossible values. Useful for exhaustive checks. The practical angle is using
   TypeScript to make contracts explicit without turning the type system into unreadable infrastructure. For this
   exact prompt, the details I would include are: never represents impossible values and is useful for exhaustive
   switch checks. I would also mention where runtime validation is still required because TypeScript disappears after
   compilation.
142. What are generics?
   - Sample answer: Type parameters that let functions/classes/components preserve type relationships without losing
   specificity. The practical angle is using TypeScript to make contracts explicit without turning the type system
   into unreadable infrastructure. For this exact prompt, the details I would include are: Generics preserve type
   relationships, such as API response data or reusable hooks/components. I would also mention where runtime
   validation is still required because TypeScript disappears after compilation.
143. Example of generic API response type?
   - Sample answer: `type ApiResponse<T> = { data: T; error?: string }`. The practical angle is using TypeScript to make
   contracts explicit without turning the type system into unreadable infrastructure. For this prompt, I would include
   a small type example, the benefit, and the point where runtime validation or simpler typing is still better. I
   would also mention where runtime validation is still required because TypeScript disappears after compilation.
144. What is `keyof`?
   - Sample answer: Produces union of property names of a type. The practical angle is using TypeScript to make contracts
   explicit without turning the type system into unreadable infrastructure. For this exact prompt, the details I would
   include are: keyof creates a union of property names and helps with type-safe table columns, form fields, and
   accessors. I would also mention where runtime validation is still required because TypeScript disappears after
   compilation.
145. What is mapped type?
   - Sample answer: Creates a type by iterating over keys, e.g. `Partial<T>`. The practical angle is using TypeScript to
   make contracts explicit without turning the type system into unreadable infrastructure. For this exact prompt, the
   details I would include are: Mapped types transform properties across keys, powering utilities such as Partial and
   form error maps. I would also mention where runtime validation is still required because TypeScript disappears
   after compilation.
146. What is conditional type?
   - Sample answer: Type-level if expression, e.g. `T extends string ? A : B`. The practical angle is using TypeScript to
   make contracts explicit without turning the type system into unreadable infrastructure. For this exact prompt, the
   details I would include are: Conditional types are type-level if statements; useful but easy to overcomplicate. I
   would also mention where runtime validation is still required because TypeScript disappears after compilation.
147. What does `as const` do?
   - Sample answer: Narrows values to literal readonly types. The practical angle is using TypeScript to make contracts
   explicit without turning the type system into unreadable infrastructure. For this exact prompt, the details I would
   include are: as const narrows values to readonly literals, useful for action names, route config, and
   discriminants. I would also mention where runtime validation is still required because TypeScript disappears after
   compilation.
148. What is type assertion?
   - Sample answer: Tells compiler to treat a value as a type. It does not change runtime value, so use carefully. The
   practical angle is using TypeScript to make contracts explicit without turning the type system into unreadable
   infrastructure. For this exact prompt, the details I would include are: Assertions do not validate runtime data;
   prefer guards/schemas when handling external JSON. I would also mention where runtime validation is still required
   because TypeScript disappears after compilation.
149. How do you type React props?
   - Sample answer: Define explicit `type Props = { ... }`; include children only when needed; avoid overly broad
   `React.FC` if project style avoids it. The practical angle is using TypeScript to make contracts explicit without
   turning the type system into unreadable infrastructure. For this exact prompt, the details I would include are:
   Type props explicitly, model variants with discriminated unions, and avoid overly broad component contracts. I
   would also mention where runtime validation is still required because TypeScript disappears after compilation.
150. How do you type API data safely?
   - Sample answer: TypeScript types plus runtime validation for external data, e.g. Zod or manual guards, because
   external JSON is untrusted. The practical angle is using TypeScript to make contracts explicit without turning the
   type system into unreadable infrastructure. For this exact prompt, the details I would include are: External JSON
   is untrusted; combine TypeScript types with runtime validation or generated clients. I would also mention where
   runtime validation is still required because TypeScript disappears after compilation.
151. How do you avoid overengineering TS types?
   - Sample answer: Prefer readable domain types and simple generics. Use advanced types only when they remove real
   duplication or prevent real mistakes. The practical angle is using TypeScript to make contracts explicit without
   turning the type system into unreadable infrastructure. For this prompt, I would include a small type example, the
   benefit, and the point where runtime validation or simpler typing is still better. I would also mention where
   runtime validation is still required because TypeScript disappears after compilation.
152. What is module augmentation?
   - Sample answer: Extending types from another module, often for framework/library customization. The practical angle
   is using TypeScript to make contracts explicit without turning the type system into unreadable infrastructure. For
   this prompt, I would include a small type example, the benefit, and the point where runtime validation or simpler
   typing is still better. I would also mention where runtime validation is still required because TypeScript
   disappears after compilation.
153. What are project references?
   - Sample answer: TypeScript feature for splitting large projects into smaller buildable units, improving monorepo
   typecheck performance. The practical angle is using TypeScript to make contracts explicit without turning the type
   system into unreadable infrastructure. For this exact prompt, the details I would include are: Project references
   split TypeScript monorepos into buildable units and improve incremental typecheck performance. I would also mention
   where runtime validation is still required because TypeScript disappears after compilation.
154. What TS compiler options matter most?
   - Sample answer: `strict`, `noImplicitAny`, `strictNullChecks`, `noUncheckedIndexedAccess`,
   `exactOptionalPropertyTypes` depending on maturity. The practical angle is using TypeScript to make contracts
   explicit without turning the type system into unreadable infrastructure. For this exact prompt, the details I would
   include are: strict, strictNullChecks, noImplicitAny, noUncheckedIndexedAccess, and exactOptionalPropertyTypes are
   high-signal options. I would also mention where runtime validation is still required because TypeScript disappears
   after compilation.
## 7. React And Frontend Architecture

155. What is React's mental model?
   - Sample answer: UI is a function of state. React renders component trees, compares changes, and updates the DOM
   efficiently. I would connect the concept to user-visible behavior: predictable state, correct rendering,
   accessibility, performance, and maintainable component ownership. For this prompt, I would include a small UI
   example, one common bug, and the mitigation I would use in a production React codebase. The strongest answer
   includes one common bug and one practical mitigation, not just a definition.
156. What is reconciliation?
   - Sample answer: React compares previous and next element trees to decide what DOM updates are needed. I would connect
   the concept to user-visible behavior: predictable state, correct rendering, accessibility, performance, and
   maintainable component ownership. For this exact prompt, the details I would include are: Stable identity helps
   React preserve state and update the DOM efficiently. The strongest answer includes one common bug and one practical
   mitigation, not just a definition.
157. Why are keys important?
   - Sample answer: Keys let React preserve identity across list changes. Bad keys cause incorrect state reuse and extra
   rerenders. I would connect the concept to user-visible behavior: predictable state, correct rendering,
   accessibility, performance, and maintainable component ownership. For this exact prompt, the details I would
   include are: Use stable domain IDs for dynamic lists; bad keys cause wrong state reuse and extra renders. The
   strongest answer includes one common bug and one practical mitigation, not just a definition.
158. Why is index as key risky?
   - Sample answer: Reordering/inserting/removing items can attach old component state to the wrong item. I would connect
   the concept to user-visible behavior: predictable state, correct rendering, accessibility, performance, and
   maintainable component ownership. For this exact prompt, the details I would include are: Indexes speed reads but
   cost storage and write performance, so they should match real query/filter/sort patterns. Index keys are risky when
   items insert, remove, sort, or filter because state can attach to the wrong row. The strongest answer includes one
   common bug and one practical mitigation, not just a definition.
159. Controlled vs uncontrolled input?
   - Sample answer: Controlled input value is driven by React state. Uncontrolled input stores value in the DOM and is
   read via ref or form submission. I would connect the concept to user-visible behavior: predictable state, correct
   rendering, accessibility, performance, and maintainable component ownership. For this exact prompt, the details I
   would include are: Controlled inputs make validation and derived UI easier; uncontrolled inputs can be simpler for
   basic forms. Reduce long tasks, split work, optimize handlers, avoid unnecessary rerenders, and move heavy compute
   off the main thread. The strongest answer includes one common bug and one practical mitigation, not just a
   definition.
160. `useEffect` vs `useLayoutEffect`?
   - Sample answer: `useEffect` runs after paint. `useLayoutEffect` runs synchronously after DOM mutation before paint,
   useful for layout measurement but can block rendering. I would connect the concept to user-visible behavior:
   predictable state, correct rendering, accessibility, performance, and maintainable component ownership. For this
   exact prompt, the details I would include are: Effects synchronize with external systems; avoid using them for pure
   derived state and always handle cleanup/races. useLayoutEffect blocks paint and should be reserved for layout
   measurement or flicker prevention. The strongest answer includes one common bug and one practical mitigation, not
   just a definition.
161. Common `useEffect` mistakes?
   - Sample answer: missing dependencies, derived state in effects, no cleanup, async race conditions, fetching without
   cancellation/stale guards. I would connect the concept to user-visible behavior: predictable state, correct
   rendering, accessibility, performance, and maintainable component ownership. For this exact prompt, the details I
   would include are: Effects synchronize with external systems; avoid using them for pure derived state and always
   handle cleanup/races. The strongest answer includes one common bug and one practical mitigation, not just a
   definition.
162. How do you avoid stale closures?
   - Sample answer: include dependencies, use functional state updates, refs for mutable latest values, or stable
   callbacks where appropriate. I would connect the concept to user-visible behavior: predictable state, correct
   rendering, accessibility, performance, and maintainable component ownership. For this exact prompt, the details I
   would include are: Closures retain lexical variables and power callbacks, hooks, debouncing, memoization, and
   private state; stale closures are the pitfall. Fix with correct dependencies, functional updates, refs for latest
   mutable values, or moving logic into the event path. The strongest answer includes one common bug and one practical
   mitigation, not just a definition.
163. What is React Strict Mode?
   - Sample answer: Development mode checks that intentionally double-invoke certain lifecycle/effect paths to expose
   unsafe side effects. I would connect the concept to user-visible behavior: predictable state, correct rendering,
   accessibility, performance, and maintainable component ownership. For this exact prompt, the details I would
   include are: Strict Mode surfaces unsafe side effects and missing cleanup through extra development checks. The
   strongest answer includes one common bug and one practical mitigation, not just a definition.
164. What is memoization in React?
   - Sample answer: `React.memo`, `useMemo`, `useCallback` can avoid expensive recalculations/rerenders when dependencies
   are stable. I would connect the concept to user-visible behavior: predictable state, correct rendering,
   accessibility, performance, and maintainable component ownership. For this exact prompt, the details I would
   include are: Memoization helps expensive calculations or referential stability, but adds overhead and complexity.
   Memoization is top-down caching; tabulation is bottom-up iteration. The strongest answer includes one common bug
   and one practical mitigation, not just a definition.
165. When should you not memoize?
   - Sample answer: When computation is cheap, dependencies always change, or added complexity outweighs performance
   benefit. I would connect the concept to user-visible behavior: predictable state, correct rendering, accessibility,
   performance, and maintainable component ownership. For this prompt, I would include a small UI example, one common
   bug, and the mitigation I would use in a production React codebase. The strongest answer includes one common bug
   and one practical mitigation, not just a definition.
166. How do you debug unnecessary rerenders?
   - Sample answer: React DevTools Profiler, why-did-you-render, checking prop identity, context changes, state location,
   memo boundaries. I would connect the concept to user-visible behavior: predictable state, correct rendering,
   accessibility, performance, and maintainable component ownership. For this exact prompt, the details I would
   include are: Use React Profiler, prop identity inspection, state boundary cleanup, and context splitting before
   adding memo everywhere. The strongest answer includes one common bug and one practical mitigation, not just a
   definition.
167. What is context good for?
   - Sample answer: Sharing low-frequency global-ish values like theme, auth user, locale. Avoid using one huge
   frequently changing context for everything. I would connect the concept to user-visible behavior: predictable
   state, correct rendering, accessibility, performance, and maintainable component ownership. For this exact prompt,
   the details I would include are: Context fits low-frequency app-wide values; high-frequency server data often
   belongs in a query cache or local state. The strongest answer includes one common bug and one practical mitigation,
   not just a definition.
168. Redux vs TanStack Query?
   - Sample answer: Redux manages client/application state. TanStack Query manages server state: fetching, caching,
   refetching, invalidation, loading/error states. I would connect the concept to user-visible behavior: predictable
   state, correct rendering, accessibility, performance, and maintainable component ownership. For this exact prompt,
   the details I would include are: Redux is useful for complex client state and workflows; not every server response
   belongs there. TanStack Query manages server state, caching, retries, invalidation, background refresh, and
   mutation workflows. The strongest answer includes one common bug and one practical mitigation, not just a
   definition.
169. When use Redux?
   - Sample answer: Complex client state, cross-page workflows, event-driven state, undo/redo, or when project already
   has Redux patterns. I would connect the concept to user-visible behavior: predictable state, correct rendering,
   accessibility, performance, and maintainable component ownership. For this exact prompt, the details I would
   include are: Redux is useful for complex client state and workflows; not every server response belongs there. The
   strongest answer includes one common bug and one practical mitigation, not just a definition.
170. When use TanStack Query?
   - Sample answer: Remote data fetching with caching, mutations, invalidation, retries, pagination, background
   refetching. I would connect the concept to user-visible behavior: predictable state, correct rendering,
   accessibility, performance, and maintainable component ownership. For this exact prompt, the details I would
   include are: TanStack Query manages server state, caching, retries, invalidation, background refresh, and mutation
   workflows. The strongest answer includes one common bug and one practical mitigation, not just a definition.
171. How does optimistic update work?
   - Sample answer: Update UI/cache before server confirms, rollback on failure, invalidate/refetch to reconcile. I would
   connect the concept to user-visible behavior: predictable state, correct rendering, accessibility, performance, and
   maintainable component ownership. For this exact prompt, the details I would include are: Optimistic updates need
   rollback, conflict handling, duplicate-submit protection, and final invalidation/refetch. The strongest answer
   includes one common bug and one practical mitigation, not just a definition.
172. How do you handle API errors in React?
   - Sample answer: Local form errors for expected validation, toast/banner for action failures, error boundaries for
   render failures, logging/monitoring for unexpected errors. I would connect the concept to user-visible behavior:
   predictable state, correct rendering, accessibility, performance, and maintainable component ownership. For this
   exact prompt, the details I would include are: Normalize errors, show actionable messages, preserve user input,
   allow safe retry, and log safe context. The strongest answer includes one common bug and one practical mitigation,
   not just a definition.
173. What are error boundaries?
   - Sample answer: React components that catch render/lifecycle errors below them and show fallback UI. They do not
   catch async event handler errors. I would connect the concept to user-visible behavior: predictable state, correct
   rendering, accessibility, performance, and maintainable component ownership. For this exact prompt, the details I
   would include are: Error boundaries catch render errors below them, not arbitrary async/event errors unless
   surfaced into render state. The strongest answer includes one common bug and one practical mitigation, not just a
   definition.
174. What is Suspense?
   - Sample answer: React mechanism for declaratively waiting on async resources/code-split components and showing
   fallback UI. I would connect the concept to user-visible behavior: predictable state, correct rendering,
   accessibility, performance, and maintainable component ownership. For this exact prompt, the details I would
   include are: Suspense coordinates loading boundaries and code/data loading but needs careful fallback placement.
   The strongest answer includes one common bug and one practical mitigation, not just a definition.
175. What is code splitting?
   - Sample answer: Splitting bundle into chunks loaded on demand, reducing initial JS. I would connect the concept to
   user-visible behavior: predictable state, correct rendering, accessibility, performance, and maintainable component
   ownership. For this exact prompt, the details I would include are: Split by route or heavy feature, then prefetch
   likely next interactions to avoid later delays. The strongest answer includes one common bug and one practical
   mitigation, not just a definition.
176. SPA vs SSR vs SSG?
   - Sample answer: SPA renders mostly in browser. SSR renders per request on server. SSG pre-renders at build time.
   Tradeoffs: SEO, freshness, latency, infrastructure, interactivity. I would connect the concept to user-visible
   behavior: predictable state, correct rendering, accessibility, performance, and maintainable component ownership.
   For this exact prompt, the details I would include are: SPA favors rich client interactivity; SSR improves first
   render/SEO; SSG works for mostly static content. The strongest answer includes one common bug and one practical
   mitigation, not just a definition.
177. What is hydration?
   - Sample answer: Client React attaches event handlers/state to server-rendered HTML. I would connect the concept to
   user-visible behavior: predictable state, correct rendering, accessibility, performance, and maintainable component
   ownership. For this exact prompt, the details I would include are: Hydration attaches client behavior to server
   HTML; mismatches come from nondeterministic render output. The strongest answer includes one common bug and one
   practical mitigation, not just a definition.
178. What causes hydration mismatch?
   - Sample answer: Rendering different HTML on server and client due to dates, random values, browser-only APIs, locale,
   auth state, or nondeterminism. I would connect the concept to user-visible behavior: predictable state, correct
   rendering, accessibility, performance, and maintainable component ownership. For this exact prompt, the details I
   would include are: Hydration attaches client behavior to server HTML; mismatches come from nondeterministic render
   output. The strongest answer includes one common bug and one practical mitigation, not just a definition.
179. Next.js App Router concept?
   - Sample answer: File-based routing with layouts, server components, client components, nested routes, streaming, and
   data fetching patterns. I would connect the concept to user-visible behavior: predictable state, correct rendering,
   accessibility, performance, and maintainable component ownership. For this exact prompt, the details I would
   include are: Separate server data loading from client interactivity and keep client components only where browser
   APIs/state/effects are needed. The strongest answer includes one common bug and one practical mitigation, not just
   a definition.
180. Server Components vs Client Components?
   - Sample answer: Server Components render on server and can access server resources without shipping JS. Client
   Components run in browser and handle interactivity/hooks/browser APIs. I would connect the concept to user-visible
   behavior: predictable state, correct rendering, accessibility, performance, and maintainable component ownership.
   For this exact prompt, the details I would include are: Server Components reduce client JS and can access server
   data directly, while Client Components handle interaction. The strongest answer includes one common bug and one
   practical mitigation, not just a definition.
181. How do you decide component boundaries?
   - Sample answer: Based on responsibility, reuse, state ownership, testability, performance, and whether it needs
   browser interactivity. I would connect the concept to user-visible behavior: predictable state, correct rendering,
   accessibility, performance, and maintainable component ownership. For this exact prompt, the details I would
   include are: Choose boundaries around ownership, state locality, reuse, rendering cost, and testability. The
   strongest answer includes one common bug and one practical mitigation, not just a definition.
182. What is a design system?
   - Sample answer: Shared components, tokens, patterns, and guidelines for consistent UI and faster development. I would
   connect the concept to user-visible behavior: predictable state, correct rendering, accessibility, performance, and
   maintainable component ownership. For this exact prompt, the details I would include are: A design system should
   provide accessible primitives, tokens, patterns, and documentation, not only colors. The strongest answer includes
   one common bug and one practical mitigation, not just a definition.
183. How do you build accessible components?
   - Sample answer: semantic HTML, labels, keyboard support, focus states, ARIA only when needed, color contrast, screen
   reader testing. I would connect the concept to user-visible behavior: predictable state, correct rendering,
   accessibility, performance, and maintainable component ownership. For this exact prompt, the details I would
   include are: Use semantic HTML, keyboard support, focus management, labels, contrast, and ARIA only when needed.
   The strongest answer includes one common bug and one practical mitigation, not just a definition.
184. How do you handle forms?
   - Sample answer: schema validation, accessible labels/errors, touched/dirty states, submission state, server
   validation mapping, idempotency where needed. I would connect the concept to user-visible behavior: predictable
   state, correct rendering, accessibility, performance, and maintainable component ownership. For this exact prompt,
   the details I would include are: Handle validation, dirty/submitting state, error placement, accessibility, and
   preserving user input on failure. The strongest answer includes one common bug and one practical mitigation, not
   just a definition.
185. How do you structure a frontend project?
   - Sample answer: Follow existing patterns. Common options: feature-based modules, shared UI/components, API clients,
   hooks, state, routes, tests. I would connect the concept to user-visible behavior: predictable state, correct
   rendering, accessibility, performance, and maintainable component ownership. For this prompt, I would include a
   small UI example, one common bug, and the mitigation I would use in a production React codebase. The strongest
   answer includes one common bug and one practical mitigation, not just a definition.
186. What is microfrontend?
   - Sample answer: Independently developed/deployed frontend slices composed into one app. Useful for autonomy but adds
   integration, dependency, UX, and performance complexity. I would connect the concept to user-visible behavior:
   predictable state, correct rendering, accessibility, performance, and maintainable component ownership. For this
   exact prompt, the details I would include are: Microfrontends enable independent ownership/deploys but add routing,
   auth, design-system, performance, and observability complexity. The strongest answer includes one common bug and
   one practical mitigation, not just a definition.
187. When would you avoid microfrontends?
   - Sample answer: Small team/product, high need for consistent UX, low deployment independence, or when a modular
   monolith is enough. I would connect the concept to user-visible behavior: predictable state, correct rendering,
   accessibility, performance, and maintainable component ownership. For this exact prompt, the details I would
   include are: Microfrontends enable independent ownership/deploys but add routing, auth, design-system, performance,
   and observability complexity. The strongest answer includes one common bug and one practical mitigation, not just a
   definition.
188. What is Web Component interoperability with React?
   - Sample answer: React can render custom elements, pass attributes/properties with care, and listen to custom events
   via refs or wrappers. I would connect the concept to user-visible behavior: predictable state, correct rendering,
   accessibility, performance, and maintainable component ownership. For this prompt, I would include a small UI
   example, one common bug, and the mitigation I would use in a production React codebase. The strongest answer
   includes one common bug and one practical mitigation, not just a definition.
189. How do you manage feature flags?
   - Sample answer: Central service/config, typed flags, default behavior, rollout targeting, kill switch, cleanup after
   rollout. I would connect the concept to user-visible behavior: predictable state, correct rendering, accessibility,
   performance, and maintainable component ownership. For this exact prompt, the details I would include are: Flags
   need ownership, defaults, exposure logging, cleanup dates, and rollback strategy. The strongest answer includes one
   common bug and one practical mitigation, not just a definition.
190. How do you handle frontend logging?
   - Sample answer: structured events, levels, context, redaction, sampling, correlation IDs, and integration with
   Sentry/OTel. I would connect the concept to user-visible behavior: predictable state, correct rendering,
   accessibility, performance, and maintainable component ownership. For this prompt, I would include a small UI
   example, one common bug, and the mitigation I would use in a production React codebase. The strongest answer
   includes one common bug and one practical mitigation, not just a definition.
## 8. Performance, Optimization, And Scale

191. What are Core Web Vitals?
   - Sample answer: LCP measures loading, INP measures interaction responsiveness, CLS measures layout stability. My
   performance answer would start with measurement, identify the bottleneck, change the smallest useful thing, and
   verify with the same metric under realistic conditions. For this exact prompt, the details I would include are:
   Define LCP, INP, and CLS as user-centered measures of loading, responsiveness, and layout stability. I would avoid
   guessing: if the metric does not improve or the UX tradeoff is worse, the optimization is not successful.
192. How do you improve LCP?
   - Sample answer: optimize server response, critical CSS, image sizing/compression/preload, reduce render-blocking
   JS/CSS, use CDN/cache. My performance answer would start with measurement, identify the bottleneck, change the
   smallest useful thing, and verify with the same metric under realistic conditions. For this exact prompt, the
   details I would include are: Improve server response, critical path, hero image/font loading, render-blocking
   JS/CSS, and above-fold content. I would avoid guessing: if the metric does not improve or the UX tradeoff is worse,
   the optimization is not successful.
193. How do you improve INP?
   - Sample answer: reduce long tasks, split work, debounce expensive handlers, memoize where useful, virtualize lists,
   avoid blocking main thread. My performance answer would start with measurement, identify the bottleneck, change the
   smallest useful thing, and verify with the same metric under realistic conditions. For this exact prompt, the
   details I would include are: Reduce long tasks, split work, optimize handlers, avoid unnecessary rerenders, and
   move heavy compute off the main thread. I would avoid guessing: if the metric does not improve or the UX tradeoff
   is worse, the optimization is not successful.
194. How do you improve CLS?
   - Sample answer: reserve dimensions for images/ads/dynamic content, avoid inserting content above existing content,
   use stable fonts/layout. My performance answer would start with measurement, identify the bottleneck, change the
   smallest useful thing, and verify with the same metric under realistic conditions. For this exact prompt, the
   details I would include are: Reserve dimensions, avoid late content insertion, stabilize fonts/media/ads, and do
   not shift controls during interaction. I would avoid guessing: if the metric does not improve or the UX tradeoff is
   worse, the optimization is not successful.
195. How do you profile frontend performance?
   - Sample answer: Chrome Performance panel, React Profiler, Lighthouse, Web Vitals, bundle analyzer, production RUM. My
   performance answer would start with measurement, identify the bottleneck, change the smallest useful thing, and
   verify with the same metric under realistic conditions. For this exact prompt, the details I would include are: Use
   Chrome Performance, React Profiler, Web Vitals, network waterfall, bundle analyzer, and production telemetry. I
   would avoid guessing: if the metric does not improve or the UX tradeoff is worse, the optimization is not
   successful.
196. What is a long task?
   - Sample answer: Main-thread task over about 50ms that can delay input and rendering. My performance answer would
   start with measurement, identify the bottleneck, change the smallest useful thing, and verify with the same metric
   under realistic conditions. For this exact prompt, the details I would include are: A long task blocks the main
   thread for roughly 50ms+ and causes jank or delayed input. I would avoid guessing: if the metric does not improve
   or the UX tradeoff is worse, the optimization is not successful.
197. How do you handle large lists?
   - Sample answer: virtualization/windowing, pagination/infinite scroll, memoized row rendering, stable keys, avoid
   heavy per-row work. My performance answer would start with measurement, identify the bottleneck, change the
   smallest useful thing, and verify with the same metric under realistic conditions. For this exact prompt, the
   details I would include are: Use pagination or virtualization, stable keys, overscan, and accessibility-aware
   keyboard/focus behavior. I would avoid guessing: if the metric does not improve or the UX tradeoff is worse, the
   optimization is not successful.
198. How do you optimize bundle size?
   - Sample answer: code splitting, tree shaking, dependency audit, dynamic imports, remove duplicate deps, lighter
   libraries, analyze chunks. My performance answer would start with measurement, identify the bottleneck, change the
   smallest useful thing, and verify with the same metric under realistic conditions. For this exact prompt, the
   details I would include are: Use code splitting, tree shaking, dependency audits, modern output, and avoid
   duplicate libraries. I would avoid guessing: if the metric does not improve or the UX tradeoff is worse, the
   optimization is not successful.
199. How do you optimize images?
   - Sample answer: correct dimensions, modern formats, compression, lazy loading, responsive `srcset`, CDN
   transformations. My performance answer would start with measurement, identify the bottleneck, change the smallest
   useful thing, and verify with the same metric under realistic conditions. For this exact prompt, the details I
   would include are: Use correct dimensions, responsive srcset, modern formats, compression, lazy loading, and
   priority for above-fold images. I would avoid guessing: if the metric does not improve or the UX tradeoff is worse,
   the optimization is not successful.
200. How do you optimize API-heavy pages?
   - Sample answer: parallelize independent requests, batch when useful, cache server state, avoid waterfalls,
   pagination, prefetch, skeleton states. My performance answer would start with measurement, identify the bottleneck,
   change the smallest useful thing, and verify with the same metric under realistic conditions. For this exact
   prompt, the details I would include are: Parallelize independent requests, avoid waterfalls, cache data, and
   consider BFF aggregation for screen-shaped data. I would avoid guessing: if the metric does not improve or the UX
   tradeoff is worse, the optimization is not successful.
201. What is request waterfall?
   - Sample answer: Sequential network requests where later requests wait unnecessarily for earlier ones, increasing
   total load time. My performance answer would start with measurement, identify the bottleneck, change the smallest
   useful thing, and verify with the same metric under realistic conditions. For this exact prompt, the details I
   would include are: Waterfalls happen when one request unnecessarily waits for another; fix with parallelism,
   preloading, or API composition. I would avoid guessing: if the metric does not improve or the UX tradeoff is worse,
   the optimization is not successful.
202. What is caching strategy for frontend data?
   - Sample answer: Determine freshness, invalidation triggers, stale-while-revalidate, optimistic updates, cache keys,
   and permission/tenant boundaries. My performance answer would start with measurement, identify the bottleneck,
   change the smallest useful thing, and verify with the same metric under realistic conditions. For this exact
   prompt, the details I would include are: Mention Cache-Control, ETag, Last-Modified, immutable assets,
   stale-while-revalidate, and invalidation. I would avoid guessing: if the metric does not improve or the UX tradeoff
   is worse, the optimization is not successful.
203. What is stale-while-revalidate?
   - Sample answer: Serve cached data immediately while refetching in background to update cache. My performance answer
   would start with measurement, identify the bottleneck, change the smallest useful thing, and verify with the same
   metric under realistic conditions. For this exact prompt, the details I would include are: Show cached data
   quickly, refresh in background, and communicate stale/syncing states when correctness matters. I would avoid
   guessing: if the metric does not improve or the UX tradeoff is worse, the optimization is not successful.
204. How do you avoid overfetching?
   - Sample answer: API field selection, endpoint design, pagination, filtering server-side, GraphQL fragments or REST
   query params when appropriate. My performance answer would start with measurement, identify the bottleneck, change
   the smallest useful thing, and verify with the same metric under realistic conditions. For this exact prompt, the
   details I would include are: Overfetching wastes network and render time; shape responses, paginate, or select
   fields deliberately. I would avoid guessing: if the metric does not improve or the UX tradeoff is worse, the
   optimization is not successful.
205. How do you avoid underfetching?
   - Sample answer: Design endpoints/query composition so page requirements can be fetched without many sequential calls.
   My performance answer would start with measurement, identify the bottleneck, change the smallest useful thing, and
   verify with the same metric under realistic conditions. For this exact prompt, the details I would include are:
   Underfetching creates extra round trips; compose endpoints or batch related data when the screen needs it together.
   I would avoid guessing: if the metric does not improve or the UX tradeoff is worse, the optimization is not
   successful.
206. What is backpressure?
   - Sample answer: Mechanism to prevent producers from overwhelming consumers, e.g. rate limiting, queues, flow control.
   My performance answer would start with measurement, identify the bottleneck, change the smallest useful thing, and
   verify with the same metric under realistic conditions. For this exact prompt, the details I would include are:
   When producers outpace consumers, coalesce, drop, buffer, or slow updates so the UI remains responsive. I would
   avoid guessing: if the metric does not improve or the UX tradeoff is worse, the optimization is not successful.
207. How do you optimize WebSocket UI updates?
   - Sample answer: batch updates, throttle rendering, normalize data, avoid full-list rerenders, use incremental
   patching, handle reconnect/resync. My performance answer would start with measurement, identify the bottleneck,
   change the smallest useful thing, and verify with the same metric under realistic conditions. For this exact
   prompt, the details I would include are: Secure WebSockets with WSS, authentication, origin checks, channel
   authorization, heartbeat, reconnect/backoff, and rate limits. Batch updates, coalesce bursts, cap history, pause
   hidden views when safe, and render incrementally. I would avoid guessing: if the metric does not improve or the UX
   tradeoff is worse, the optimization is not successful.
208. How do you scale frontend build systems?
   - Sample answer: task caching, incremental builds, project references, affected-package detection, parallelization,
   dependency hygiene, remote cache. My performance answer would start with measurement, identify the bottleneck,
   change the smallest useful thing, and verify with the same metric under realistic conditions. For this exact
   prompt, the details I would include are: Use incremental compilation, dependency graphs, caching, parallelism, and
   package boundaries that do not invalidate everything. I would avoid guessing: if the metric does not improve or the
   UX tradeoff is worse, the optimization is not successful.
209. How do you measure if an optimization worked?
   - Sample answer: define metric and baseline, change one variable when possible, measure locally and in production/RUM,
   check regressions. My performance answer would start with measurement, identify the bottleneck, change the smallest
   useful thing, and verify with the same metric under realistic conditions. For this prompt, I would name the metric,
   the likely bottleneck, the change I would try, and the way I would verify it did not hurt UX or correctness. I
   would avoid guessing: if the metric does not improve or the UX tradeoff is worse, the optimization is not
   successful.
210. Performance tradeoff of SSR?
   - Sample answer: Faster first HTML/SEO but more server complexity and possible hydration cost. Client JS still
   matters. My performance answer would start with measurement, identify the bottleneck, change the smallest useful
   thing, and verify with the same metric under realistic conditions. For this prompt, I would name the metric, the
   likely bottleneck, the change I would try, and the way I would verify it did not hurt UX or correctness. I would
   avoid guessing: if the metric does not improve or the UX tradeoff is worse, the optimization is not successful.
211. What is TTFB?
   - Sample answer: Time to first byte from request start to first response byte. Affected by network, server processing,
   CDN/cache. My performance answer would start with measurement, identify the bottleneck, change the smallest useful
   thing, and verify with the same metric under realistic conditions. For this exact prompt, the details I would
   include are: TTFB includes network setup plus server processing and is affected by caching, edge location, and
   backend dependencies. I would avoid guessing: if the metric does not improve or the UX tradeoff is worse, the
   optimization is not successful.
212. What is lazy loading?
   - Sample answer: Loading resources only when needed, such as below-the-fold images or route chunks. My performance
   answer would start with measurement, identify the bottleneck, change the smallest useful thing, and verify with the
   same metric under realistic conditions. For this exact prompt, the details I would include are: Lazy load
   non-critical code/media, but avoid delaying features the user immediately needs. I would avoid guessing: if the
   metric does not improve or the UX tradeoff is worse, the optimization is not successful.
213. What is prefetching?
   - Sample answer: Loading likely-needed resources before the user explicitly asks, trading bandwidth for perceived
   speed. My performance answer would start with measurement, identify the bottleneck, change the smallest useful
   thing, and verify with the same metric under realistic conditions. For this exact prompt, the details I would
   include are: Prefetch likely next routes/data while respecting bandwidth, device constraints, and cache freshness.
   I would avoid guessing: if the metric does not improve or the UX tradeoff is worse, the optimization is not
   successful.
214. What causes memory pressure in a React app?
   - Sample answer: retained large data sets, event listeners, unbounded caches, timers, subscriptions, detached DOM,
   heavy client state. My performance answer would start with measurement, identify the bottleneck, change the
   smallest useful thing, and verify with the same metric under realistic conditions. For this prompt, I would name
   the metric, the likely bottleneck, the change I would try, and the way I would verify it did not hurt UX or
   correctness. I would avoid guessing: if the metric does not improve or the UX tradeoff is worse, the optimization
   is not successful.
## 9. DSA And Problem-Solving

215. How do you approach a coding problem?
   - Sample answer: Clarify input/output/constraints, discuss brute force, improve with data structures, analyze
   complexity, code cleanly, test edge cases. I would first clarify constraints and examples, then explain the data
   structure or pattern, complexity, edge cases, and tests before coding. For this prompt, I would walk through an
   example, state the invariant, then cover complexity and edge cases before writing code. I would finish by naming
   time and space complexity and testing empty, boundary, duplicate, and large-input cases.
216. Array vs linked list?
   - Sample answer: Arrays provide O(1) indexing and cache locality; inserts/deletes in middle cost O(n). Linked lists
   have O(1) insertion with node reference but O(n) access and poor cache locality. I would first clarify constraints
   and examples, then explain the data structure or pattern, complexity, edge cases, and tests before coding. For this
   exact prompt, the details I would include are: Arrays have random access and cache locality; linked lists make
   known-node insertion/removal cheap but lose indexing. I would finish by naming time and space complexity and
   testing empty, boundary, duplicate, and large-input cases.
217. Stack use cases?
   - Sample answer: parentheses validation, DFS, undo, call stack, monotonic stack. I would first clarify constraints and
   examples, then explain the data structure or pattern, complexity, edge cases, and tests before coding. For this
   exact prompt, the details I would include are: Stacks solve LIFO problems such as parentheses, undo, DFS, and
   monotonic stacks. I would finish by naming time and space complexity and testing empty, boundary, duplicate, and
   large-input cases.
218. Queue use cases?
   - Sample answer: BFS, task scheduling, rate limiting, producer-consumer. I would first clarify constraints and
   examples, then explain the data structure or pattern, complexity, edge cases, and tests before coding. For this
   exact prompt, the details I would include are: Queues solve FIFO flows such as BFS, job processing, rate limits,
   and producer/consumer buffers. I would finish by naming time and space complexity and testing empty, boundary,
   duplicate, and large-input cases.
219. Hash map complexity?
   - Sample answer: Average O(1) insert/lookup/delete; worst-case O(n) with collisions, though modern implementations
   mitigate. I would first clarify constraints and examples, then explain the data structure or pattern, complexity,
   edge cases, and tests before coding. For this exact prompt, the details I would include are: Hash maps give average
   O(1) lookup and fit counting, grouping, complements, and deduplication. I would finish by naming time and space
   complexity and testing empty, boundary, duplicate, and large-input cases.
220. Set use cases?
   - Sample answer: uniqueness, membership checks, duplicate detection, visited nodes. I would first clarify constraints
   and examples, then explain the data structure or pattern, complexity, edge cases, and tests before coding. For this
   exact prompt, the details I would include are: Sets fit membership checks, duplicate detection, and sliding-window
   uniqueness. I would finish by naming time and space complexity and testing empty, boundary, duplicate, and
   large-input cases.
221. Binary search requirement?
   - Sample answer: Search space must be monotonic or sorted; can be over values, not only arrays. I would first clarify
   constraints and examples, then explain the data structure or pattern, complexity, edge cases, and tests before
   coding. For this exact prompt, the details I would include are: Requires sorted or monotonic structure; define
   low/high invariants carefully. I would finish by naming time and space complexity and testing empty, boundary,
   duplicate, and large-input cases.
222. BFS vs DFS?
   - Sample answer: BFS explores level by level and finds shortest path in unweighted graphs. DFS explores deep paths and
   is useful for traversal, cycle detection, topological sort. I would first clarify constraints and examples, then
   explain the data structure or pattern, complexity, edge cases, and tests before coding. For this exact prompt, the
   details I would include are: BFS is level-order and finds shortest paths in unweighted graphs. DFS fits traversal,
   backtracking, connected components, and cycle detection. I would finish by naming time and space complexity and
   testing empty, boundary, duplicate, and large-input cases.
223. What is topological sort?
   - Sample answer: Ordering directed acyclic graph nodes so dependencies come before dependents. I would first clarify
   constraints and examples, then explain the data structure or pattern, complexity, edge cases, and tests before
   coding. For this exact prompt, the details I would include are: Topological sort orders DAG dependencies; cycles
   mean no valid ordering. I would finish by naming time and space complexity and testing empty, boundary, duplicate,
   and large-input cases.
224. How detect cycle in directed graph?
   - Sample answer: DFS with visiting/visited states or Kahn's algorithm checking if processed count is less than node
   count. I would first clarify constraints and examples, then explain the data structure or pattern, complexity, edge
   cases, and tests before coding. For this exact prompt, the details I would include are: Use DFS colors or Kahn
   in-degree counting for directed cycle detection. I would finish by naming time and space complexity and testing
   empty, boundary, duplicate, and large-input cases.
225. What is dynamic programming?
   - Sample answer: Solving problems with overlapping subproblems and optimal substructure by memoization or tabulation.
   I would first clarify constraints and examples, then explain the data structure or pattern, complexity, edge cases,
   and tests before coding. For this exact prompt, the details I would include are: DP applies when subproblems
   overlap and optimal results compose. I would finish by naming time and space complexity and testing empty,
   boundary, duplicate, and large-input cases.
226. Memoization vs tabulation?
   - Sample answer: Memoization is top-down recursion with cache. Tabulation is bottom-up iterative filling. I would
   first clarify constraints and examples, then explain the data structure or pattern, complexity, edge cases, and
   tests before coding. For this exact prompt, the details I would include are: Memoization helps expensive
   calculations or referential stability, but adds overhead and complexity. Memoization is top-down caching;
   tabulation is bottom-up iteration. I would finish by naming time and space complexity and testing empty, boundary,
   duplicate, and large-input cases.
227. Sliding window pattern?
   - Sample answer: Maintain a moving range to solve contiguous subarray/string problems efficiently. I would first
   clarify constraints and examples, then explain the data structure or pattern, complexity, edge cases, and tests
   before coding. For this exact prompt, the details I would include are: Sliding window maintains a contiguous
   invariant while moving left/right pointers. I would finish by naming time and space complexity and testing empty,
   boundary, duplicate, and large-input cases.
228. Two pointers pattern?
   - Sample answer: Use two indexes moving through data, often for sorted arrays, partitioning, or pairs. I would first
   clarify constraints and examples, then explain the data structure or pattern, complexity, edge cases, and tests
   before coding. For this exact prompt, the details I would include are: Two pointers reduce nested loops, often on
   sorted arrays or range problems. I would finish by naming time and space complexity and testing empty, boundary,
   duplicate, and large-input cases.
229. Prefix sum?
   - Sample answer: Precompute cumulative sums to answer range sum queries quickly. I would first clarify constraints and
   examples, then explain the data structure or pattern, complexity, edge cases, and tests before coding. For this
   exact prompt, the details I would include are: Prefix sums preprocess cumulative values for fast range queries and
   combine well with hash maps. I would finish by naming time and space complexity and testing empty, boundary,
   duplicate, and large-input cases.
230. Trie use case?
   - Sample answer: Prefix search, autocomplete, dictionary lookup. I would first clarify constraints and examples, then
   explain the data structure or pattern, complexity, edge cases, and tests before coding. For this exact prompt, the
   details I would include are: Tries trade memory for fast prefix search and autocomplete. I would finish by naming
   time and space complexity and testing empty, boundary, duplicate, and large-input cases.
231. Heap use case?
   - Sample answer: priority queue, top K, scheduling, merging sorted lists. I would first clarify constraints and
   examples, then explain the data structure or pattern, complexity, edge cases, and tests before coding. For this
   exact prompt, the details I would include are: Heaps support efficient min/max access for top-k, scheduling, and
   priority queues. I would finish by naming time and space complexity and testing empty, boundary, duplicate, and
   large-input cases.
232. Monotonic stack use case?
   - Sample answer: next greater/smaller element, histogram rectangle, stock span. I would first clarify constraints and
   examples, then explain the data structure or pattern, complexity, edge cases, and tests before coding. For this
   exact prompt, the details I would include are: Stacks solve LIFO problems such as parentheses, undo, DFS, and
   monotonic stacks. Monotonic stacks keep ordered candidates for next greater/smaller and span problems. I would
   finish by naming time and space complexity and testing empty, boundary, duplicate, and large-input cases.
233. Union Find use case?
   - Sample answer: dynamic connectivity, connected components, Kruskal's MST. I would first clarify constraints and
   examples, then explain the data structure or pattern, complexity, edge cases, and tests before coding. For this
   exact prompt, the details I would include are: Union Find handles connectivity with path compression and union by
   rank/size. I would finish by naming time and space complexity and testing empty, boundary, duplicate, and
   large-input cases.
234. Big O of sorting?
   - Sample answer: Comparison sorts are generally O(n log n) lower bound. Counting/radix can be linear under
   constraints. I would first clarify constraints and examples, then explain the data structure or pattern,
   complexity, edge cases, and tests before coding. For this exact prompt, the details I would include are: General
   comparison sorting is O(n log n); stability preserves original order among equal keys. I would finish by naming
   time and space complexity and testing empty, boundary, duplicate, and large-input cases.
235. Stable sort?
   - Sample answer: Preserves relative order of equal elements. I would first clarify constraints and examples, then
   explain the data structure or pattern, complexity, edge cases, and tests before coding. For this exact prompt, the
   details I would include are: Clarify server/client sorting/filtering/pagination, keep URL/cache keys aligned, and
   handle empty/loading/error states. I would finish by naming time and space complexity and testing empty, boundary,
   duplicate, and large-input cases.
236. Recursion risks?
   - Sample answer: stack overflow, repeated work without memoization, unclear base cases. I would first clarify
   constraints and examples, then explain the data structure or pattern, complexity, edge cases, and tests before
   coding. For this exact prompt, the details I would include are: Recursion risks stack overflow, repeated work, and
   fragile base cases; memoization or iteration can help. I would finish by naming time and space complexity and
   testing empty, boundary, duplicate, and large-input cases.
237. How do you test DSA solutions?
   - Sample answer: empty input, single item, duplicates, negative values, sorted/reversed, max constraints, invalid
   cases if allowed. I would first clarify constraints and examples, then explain the data structure or pattern,
   complexity, edge cases, and tests before coding. For this prompt, I would walk through an example, state the
   invariant, then cover complexity and edge cases before writing code. I would finish by naming time and space
   complexity and testing empty, boundary, duplicate, and large-input cases.
238. Problem: valid parentheses.
   - Sample answer: Use stack; push opening brackets, pop and match on closing. Valid if stack empty at end. O(n) time,
   O(n) space. I would first clarify constraints and examples, then explain the data structure or pattern, complexity,
   edge cases, and tests before coding. For this exact prompt, the details I would include are: Use a stack, push
   opening brackets, pop on matching close, reject mismatches and leftover opens. I would finish by naming time and
   space complexity and testing empty, boundary, duplicate, and large-input cases.
239. Problem: two sum.
   - Sample answer: Iterate numbers, store value->index in map, check target-current. O(n) time, O(n) space. I would
   first clarify constraints and examples, then explain the data structure or pattern, complexity, edge cases, and
   tests before coding. For this exact prompt, the details I would include are: Use a hash map from value to index,
   checking complement before insert to avoid using the same element twice. I would finish by naming time and space
   complexity and testing empty, boundary, duplicate, and large-input cases.
240. Problem: merge intervals.
   - Sample answer: Sort by start, iterate, merge when next start <= current end. O(n log n). I would first clarify
   constraints and examples, then explain the data structure or pattern, complexity, edge cases, and tests before
   coding. For this exact prompt, the details I would include are: Sort by start, then merge if the next start is
   within the current end. I would finish by naming time and space complexity and testing empty, boundary, duplicate,
   and large-input cases.
241. Problem: longest substring without repeating chars.
   - Sample answer: Sliding window with char->last index, move left past duplicates. O(n). I would first clarify
   constraints and examples, then explain the data structure or pattern, complexity, edge cases, and tests before
   coding. For this exact prompt, the details I would include are: Use sliding window plus a map/set of last seen
   positions to maintain uniqueness. I would finish by naming time and space complexity and testing empty, boundary,
   duplicate, and large-input cases.
242. Problem: LRU cache.
   - Sample answer: Hash map plus doubly linked list. Map gives node lookup; list maintains recency. Get/put O(1). I
   would first clarify constraints and examples, then explain the data structure or pattern, complexity, edge cases,
   and tests before coding. For this exact prompt, the details I would include are: Use hash map plus doubly linked
   list or ordered map for O(1) get/put and recency updates. I would finish by naming time and space complexity and
   testing empty, boundary, duplicate, and large-input cases.
243. Problem: debounce function.
   - Sample answer: Keep timer in closure. Clear previous timer, schedule new call after delay. I would first clarify
   constraints and examples, then explain the data structure or pattern, complexity, edge cases, and tests before
   coding. For this prompt, I would walk through an example, state the invariant, then cover complexity and edge cases
   before writing code. I would finish by naming time and space complexity and testing empty, boundary, duplicate, and
   large-input cases.
244. Problem: throttle function.
   - Sample answer: Track last execution time or timer. Execute at most once per interval. I would first clarify
   constraints and examples, then explain the data structure or pattern, complexity, edge cases, and tests before
   coding. For this prompt, I would walk through an example, state the invariant, then cover complexity and edge cases
   before writing code. I would finish by naming time and space complexity and testing empty, boundary, duplicate, and
   large-input cases.
245. Problem: flatten nested array.
   - Sample answer: DFS recursion/stack. Watch for max depth and non-array values. I would first clarify constraints and
   examples, then explain the data structure or pattern, complexity, edge cases, and tests before coding. For this
   exact prompt, the details I would include are: Clarify depth and types, then use recursion or an explicit stack. I
   would finish by naming time and space complexity and testing empty, boundary, duplicate, and large-input cases.
246. Problem: deep equality.
   - Sample answer: Compare primitives, arrays lengths/items, object keys/values, handle null, dates/maps if required,
   and cycles if required. I would first clarify constraints and examples, then explain the data structure or pattern,
   complexity, edge cases, and tests before coding. For this exact prompt, the details I would include are: Handle
   primitives, arrays, objects, null, dates, key length/order, and cycles if required. I would finish by naming time
   and space complexity and testing empty, boundary, duplicate, and large-input cases.
247. Problem: implement Promise.all.
   - Sample answer: Return new Promise, resolve values by index, count completions, reject immediately on first
   rejection. I would first clarify constraints and examples, then explain the data structure or pattern, complexity,
   edge cases, and tests before coding. For this exact prompt, the details I would include are: Promise.all preserves
   result order and rejects on first failure; allSettled is better for partial results. I would finish by naming time
   and space complexity and testing empty, boundary, duplicate, and large-input cases.
248. Problem: retry async function.
   - Sample answer: Loop attempts, catch errors, delay/backoff, stop after max attempts, preserve final error. I would
   first clarify constraints and examples, then explain the data structure or pattern, complexity, edge cases, and
   tests before coding. For this exact prompt, the details I would include are: Include max attempts, backoff,
   retryable error rules, cancellation, and final error propagation. I would finish by naming time and space
   complexity and testing empty, boundary, duplicate, and large-input cases.
249. Problem: build tree from flat list.
   - Sample answer: Map id->node, then attach each node to parent children; roots have no parent. O(n). I would first
   clarify constraints and examples, then explain the data structure or pattern, complexity, edge cases, and tests
   before coding. For this exact prompt, the details I would include are: Build id map first, then attach children in
   O(n), handling missing parents and cycles if required. I would finish by naming time and space complexity and
   testing empty, boundary, duplicate, and large-input cases.
250. Problem: search suggestions.
   - Sample answer: Trie for prefix lookup or sorted array with binary search range; choose based on update/query
   pattern. I would first clarify constraints and examples, then explain the data structure or pattern, complexity,
   edge cases, and tests before coding. For this exact prompt, the details I would include are: A trie, sorted list
   with binary search, or backend search endpoint can fit depending on data size and freshness. I would finish by
   naming time and space complexity and testing empty, boundary, duplicate, and large-input cases.
## 10. Coding Questions Likely For This Role

251. Implement a React search box with debounced API calls.
   - Sample answer: Use controlled input, `useEffect` with debounce timer, abort previous fetch, show loading/error/empty
   states, cache if needed. I would describe the implementation plan before coding: state model, API contract, async
   behavior, accessibility, error states, tests, and production concerns. For this exact prompt, the details I would
   include are: Use local input state, debounced query, abort/ignore stale requests, loading/error/empty states, and
   caching for repeated queries. After the basic version works, I would call out how I would harden it for production
   rather than overbuilding from the first line.
252. Build an infinite scrolling list.
   - Sample answer: Use cursor pagination, `IntersectionObserver`, TanStack Query `useInfiniteQuery`, stable keys,
   duplicate prevention, loading/error/retry. I would describe the implementation plan before coding: state model, API
   contract, async behavior, accessibility, error states, tests, and production concerns. For this exact prompt, the
   details I would include are: Use cursor pagination, IntersectionObserver, deduplication, end state, scroll
   restoration, and virtualization when needed. After the basic version works, I would call out how I would harden it
   for production rather than overbuilding from the first line.
253. Implement a table with sorting/filtering/pagination.
   - Sample answer: Keep query state in URL or component state, server-side for large data, use stable sort, debounced
   filters, loading states. I would describe the implementation plan before coding: state model, API contract, async
   behavior, accessibility, error states, tests, and production concerns. For this exact prompt, the details I would
   include are: General comparison sorting is O(n log n); stability preserves original order among equal keys. Clarify
   server/client sorting/filtering/pagination, keep URL/cache keys aligned, and handle empty/loading/error states.
   After the basic version works, I would call out how I would harden it for production rather than overbuilding from
   the first line.
254. Implement an auth guard in React/Next.js.
   - Sample answer: Server-side/session check when possible, redirect unauthenticated users, avoid flashing protected
   content, enforce server authorization. I would describe the implementation plan before coding: state model, API
   contract, async behavior, accessibility, error states, tests, and production concerns. For this exact prompt, the
   details I would include are: Avoid flashing protected content, preserve return URL, handle loading/expired
   sessions, and rely on server enforcement. After the basic version works, I would call out how I would harden it for
   production rather than overbuilding from the first line.
255. Implement role-based UI permissions.
   - Sample answer: Fetch permission claims, central helper/hook, hide/disable actions, but backend must enforce. I would
   describe the implementation plan before coding: state model, API contract, async behavior, accessibility, error
   states, tests, and production concerns. For this exact prompt, the details I would include are: Frontend permission
   checks are UX; backend policy is enforcement. Hide/disable actions but never rely on the browser. Centralize
   permission checks, explain disabled actions, and keep server policy authoritative. After the basic version works, I
   would call out how I would harden it for production rather than overbuilding from the first line.
256. Implement a toast system.
   - Sample answer: Context/provider or external store, queue items with IDs, auto-dismiss timers, manual dismiss,
   accessibility live region. I would describe the implementation plan before coding: state model, API contract, async
   behavior, accessibility, error states, tests, and production concerns. For this exact prompt, the details I would
   include are: Use provider/queue, variants, auto-dismiss, pause behavior, and accessible live regions. After the
   basic version works, I would call out how I would harden it for production rather than overbuilding from the first
   line.
257. Implement modal with accessibility.
   - Sample answer: Portal, focus trap, restore focus, Escape close, backdrop click if desired, `aria-modal`, labelled
   title, prevent background scroll. I would describe the implementation plan before coding: state model, API
   contract, async behavior, accessibility, error states, tests, and production concerns. For this exact prompt, the
   details I would include are: Use portal, focus trap, Escape handling, aria-modal, labelled title, inert background,
   scroll lock, and restore focus. Test keyboard navigation, labels, focus, roles, contrast where possible, and use
   axe-style tooling plus manual checks. After the basic version works, I would call out how I would harden it for
   production rather than overbuilding from the first line.
258. Implement optimistic mutation.
   - Sample answer: Snapshot cache, update cache immediately, rollback on error, invalidate/refetch on settle. I would
   describe the implementation plan before coding: state model, API contract, async behavior, accessibility, error
   states, tests, and production concerns. For this exact prompt, the details I would include are: Optimistic updates
   need rollback, conflict handling, duplicate-submit protection, and final invalidation/refetch. After the basic
   version works, I would call out how I would harden it for production rather than overbuilding from the first line.
259. Implement file upload with progress.
   - Sample answer: Use XHR/axios or fetch streams if supported, validate type/size, show progress, retry/cancel, handle
   server errors. I would describe the implementation plan before coding: state model, API contract, async behavior,
   accessibility, error states, tests, and production concerns. For this exact prompt, the details I would include
   are: Validate file type/size, show progress, support cancel/retry, use signed URLs or multipart upload, and handle
   processing/scanning state. After the basic version works, I would call out how I would harden it for production
   rather than overbuilding from the first line.
260. Implement WebSocket chat UI.
   - Sample answer: Connection lifecycle, auth, reconnect with backoff, heartbeat, message ordering, optimistic sends,
   dedupe, resync on reconnect. I would describe the implementation plan before coding: state model, API contract,
   async behavior, accessibility, error states, tests, and production concerns. For this exact prompt, the details I
   would include are: Secure WebSockets with WSS, authentication, origin checks, channel authorization, heartbeat,
   reconnect/backoff, and rate limits. After the basic version works, I would call out how I would harden it for
   production rather than overbuilding from the first line.
261. Implement client-side rate limiting for a button.
   - Sample answer: Disable while pending, debounce/throttle clicks, backend idempotency key for real protection. I would
   describe the implementation plan before coding: state model, API contract, async behavior, accessibility, error
   states, tests, and production concerns. For this exact prompt, the details I would include are: Use server-side
   counters plus client UX throttling, exponential backoff, monitoring, and careful lockout behavior. After the basic
   version works, I would call out how I would harden it for production rather than overbuilding from the first line.
262. Implement a custom hook for localStorage.
   - Sample answer: Initialize safely in browser, serialize/parse with fallback, listen to storage events if cross-tab
   sync needed. I would describe the implementation plan before coding: state model, API contract, async behavior,
   accessibility, error states, tests, and production concerns. For this exact prompt, the details I would include
   are: Guard SSR, parse JSON safely, sync storage events, expose setter/remover, and never store secrets. After the
   basic version works, I would call out how I would harden it for production rather than overbuilding from the first
   line.
263. Implement error boundary.
   - Sample answer: Class component with `getDerivedStateFromError` and `componentDidCatch`, fallback UI, report error. I
   would describe the implementation plan before coding: state model, API contract, async behavior, accessibility,
   error states, tests, and production concerns. For this prompt, I would build the simplest correct version first,
   then explain the production hardening around accessibility, errors, tests, and scale. After the basic version
   works, I would call out how I would harden it for production rather than overbuilding from the first line.
264. Implement virtualized list.
   - Sample answer: Calculate visible range from scroll offset/item height, render only range plus overscan. Prefer
   library in production. I would describe the implementation plan before coding: state model, API contract, async
   behavior, accessibility, error states, tests, and production concerns. For this exact prompt, the details I would
   include are: Use proven libraries, fixed/measured row heights, overscan, and keyboard/focus accessibility. After
   the basic version works, I would call out how I would harden it for production rather than overbuilding from the
   first line.
265. Implement a type-safe API client.
   - Sample answer: Define endpoint functions, response types, runtime validation for external data, standardized error
   handling, auth headers/cookies. I would describe the implementation plan before coding: state model, API contract,
   async behavior, accessibility, error states, tests, and production concerns. For this exact prompt, the details I
   would include are: Type requests/responses, normalize errors, support abort signals, attach auth safely, and parse
   untrusted JSON. After the basic version works, I would call out how I would harden it for production rather than
   overbuilding from the first line.
266. Implement breadcrumb navigation.
   - Sample answer: Derive from route config, include labels/params, accessible nav landmark and ordered list. I would
   describe the implementation plan before coding: state model, API contract, async behavior, accessibility, error
   states, tests, and production concerns. For this exact prompt, the details I would include are: Derive from route
   metadata or matched routes, support dynamic labels, and expose accessible navigation. After the basic version
   works, I would call out how I would harden it for production rather than overbuilding from the first line.
267. Implement feature flag hook.
   - Sample answer: Read flag config from provider/cache, return typed value/default, support loading and override/test
   behavior. I would describe the implementation plan before coding: state model, API contract, async behavior,
   accessibility, error states, tests, and production concerns. For this prompt, I would build the simplest correct
   version first, then explain the production hardening around accessibility, errors, tests, and scale. After the
   basic version works, I would call out how I would harden it for production rather than overbuilding from the first
   line.
268. Implement a reusable data-fetching hook.
   - Sample answer: Prefer TanStack Query; otherwise manage loading/error/data, cancellation, dependencies, stale
   results, refetch. I would describe the implementation plan before coding: state model, API contract, async
   behavior, accessibility, error states, tests, and production concerns. For this prompt, I would build the simplest
   correct version first, then explain the production hardening around accessibility, errors, tests, and scale. After
   the basic version works, I would call out how I would harden it for production rather than overbuilding from the
   first line.
269. Implement frontend telemetry around a button action.
   - Sample answer: Start span/event, attach route/action/user-safe context, capture success/failure latency, redact
   sensitive data. I would describe the implementation plan before coding: state model, API contract, async behavior,
   accessibility, error states, tests, and production concerns. For this exact prompt, the details I would include
   are: Capture action, route, result, latency, release, trace ID, and safe metadata without PII. After the basic
   version works, I would call out how I would harden it for production rather than overbuilding from the first line.
270. Implement secure embedding of third-party UI.
   - Sample answer: Decide iframe vs Web Component, isolate styles, define event contract, validate messages, handle auth
   without exposing secrets. I would describe the implementation plan before coding: state model, API contract, async
   behavior, accessibility, error states, tests, and production concerns. For this prompt, I would build the simplest
   correct version first, then explain the production hardening around accessibility, errors, tests, and scale. After
   the basic version works, I would call out how I would harden it for production rather than overbuilding from the
   first line.
## 11. System Design - Frontend And Full Stack

271. Design a public-safety data dashboard.
   - Sample answer: Clarify users, data freshness, permissions, filters, map/table/chart views, audit logs, reliability,
   accessibility. Architecture: React/Next frontend, API gateway/BFF, backend services, cache, search/indexing,
   observability, RBAC. I would structure the design around requirements, data model, frontend state, API contracts,
   auth/permissions, performance, failure modes, observability, and rollout. For this exact prompt, the details I
   would include are: Prioritize hierarchy, freshness, filtering, permissions, drill-down, auditability, and
   accessible scanning. I would close with tradeoffs, risks, and what I would validate through a prototype, metrics,
   or staged rollout.
272. Design a real-time incident feed.
   - Sample answer: WebSocket/SSE for realtime, cursor pagination for history, reconnect/resync, dedupe by event ID,
   backpressure, filters, permission checks, monitoring. I would structure the design around requirements, data model,
   frontend state, API contracts, auth/permissions, performance, failure modes, observability, and rollout. For this
   exact prompt, the details I would include are: Use WebSocket/SSE, cursor history, ordering, dedupe, backpressure,
   reconnect, and stale/offline indicators. I would close with tradeoffs, risks, and what I would validate through a
   prototype, metrics, or staged rollout.
273. Design a chat/contact-center frontend.
   - Sample answer: Conversation list, message panel, assignment, presence, WebSocket, optimistic sending, message
   ordering, attachment upload, auth, observability. I would structure the design around requirements, data model,
   frontend state, API contracts, auth/permissions, performance, failure modes, observability, and rollout. For this
   exact prompt, the details I would include are: Model conversations, messages, participants, unread state,
   attachments, permissions, delivery, and realtime updates. I would close with tradeoffs, risks, and what I would
   validate through a prototype, metrics, or staged rollout.
274. Design frontend architecture for multi-tenant app.
   - Sample answer: Tenant resolved server-side, tenant-aware API calls/cache keys, route guards, branding config,
   permission model, data isolation, audit logs. I would structure the design around requirements, data model,
   frontend state, API contracts, auth/permissions, performance, failure modes, observability, and rollout. For this
   exact prompt, the details I would include are: Tenant scope must come from trusted auth/session context, not
   editable client input, and must be included in cache keys and server queries. Include tenant in trusted server
   context, routing, cache keys, tests, and audit logs. I would close with tradeoffs, risks, and what I would validate
   through a prototype, metrics, or staged rollout.
275. Design a frontend SDK/widget.
   - Sample answer: Small bundle, isolated styles, async loader, versioning, configuration, event API, security, CSP
   compatibility, graceful failure, performance budget. I would structure the design around requirements, data model,
   frontend state, API contracts, auth/permissions, performance, failure modes, observability, and rollout. For this
   exact prompt, the details I would include are: Small bundle, stable API, versioning, theming hooks, sandboxing,
   initialization, and docs are key. I would close with tradeoffs, risks, and what I would validate through a
   prototype, metrics, or staged rollout.
276. Design a BFF for frontend auth.
   - Sample answer: Browser uses secure HttpOnly cookie. BFF stores/refreshes backend tokens server-side, proxies APIs,
   enforces CSRF/rate limit, logs trace IDs. I would structure the design around requirements, data model, frontend
   state, API contracts, auth/permissions, performance, failure modes, observability, and rollout. For this exact
   prompt, the details I would include are: Explain the browser-facing API boundary: safer token handling,
   product-shaped endpoints, normalized errors, and fewer secrets in the client. I would close with tradeoffs, risks,
   and what I would validate through a prototype, metrics, or staged rollout.
277. Design cursor pagination API.
   - Sample answer: Request: `limit`, `after`, `before`, filters. Response: `edges`, `pageInfo`. Cursor encodes stable
   sort fields/version. Enforce deterministic order and max limit. I would structure the design around requirements,
   data model, frontend state, API contracts, auth/permissions, performance, failure modes, observability, and
   rollout. For this exact prompt, the details I would include are: Explain stable ordering, opaque cursors,
   next/previous cursors, filter invalidation, duplicate prevention, and the tradeoff against random page jumps. I
   would close with tradeoffs, risks, and what I would validate through a prototype, metrics, or staged rollout.
278. Design notification system.
   - Sample answer: Event producer, queue, notification service, user preferences, delivery channels, retry, idempotency,
   read/unread state, frontend realtime updates. I would structure the design around requirements, data model,
   frontend state, API contracts, auth/permissions, performance, failure modes, observability, and rollout. For this
   exact prompt, the details I would include are: Design channels, preferences, priority, dedupe, read state, retry,
   and auditability. I would close with tradeoffs, risks, and what I would validate through a prototype, metrics, or
   staged rollout.
279. Design file upload system.
   - Sample answer: Frontend requests signed URL, uploads directly to object storage, backend records metadata, virus
   scan, progress UI, retry/resume, access control. I would structure the design around requirements, data model,
   frontend state, API contracts, auth/permissions, performance, failure modes, observability, and rollout. For this
   exact prompt, the details I would include are: Validate file type/size, show progress, support cancel/retry, use
   signed URLs or multipart upload, and handle processing/scanning state. I would close with tradeoffs, risks, and
   what I would validate through a prototype, metrics, or staged rollout.
280. Design audit logging for sensitive actions.
   - Sample answer: Server-side immutable logs with actor, action, target, tenant, timestamp, request ID, before/after if
   safe, retention/search, tamper resistance. I would structure the design around requirements, data model, frontend
   state, API contracts, auth/permissions, performance, failure modes, observability, and rollout. For this exact
   prompt, the details I would include are: Capture actor, action, resource, timestamp, result, reason/context,
   correlation ID, and tamper resistance. I would close with tradeoffs, risks, and what I would validate through a
   prototype, metrics, or staged rollout.
281. Design feature flag platform usage.
   - Sample answer: Flag evaluation server/client depending sensitivity, target rules, default values, kill switches,
   audit changes, cleanup process. I would structure the design around requirements, data model, frontend state, API
   contracts, auth/permissions, performance, failure modes, observability, and rollout. For this prompt, I would state
   assumptions, draw the main components, define the data/API contract, and call out security, performance, and
   rollout risks. I would close with tradeoffs, risks, and what I would validate through a prototype, metrics, or
   staged rollout.
282. Design observability for frontend app.
   - Sample answer: RUM metrics, error tracking, distributed tracing, logs, release tracking, source maps, privacy
   scrubbing, dashboards and alerts. I would structure the design around requirements, data model, frontend state, API
   contracts, auth/permissions, performance, failure modes, observability, and rollout. For this exact prompt, the
   details I would include are: Focus on actionable signals, not logging everything: errors, latency, Web Vitals,
   trace IDs, release, and privacy-safe metadata. I would close with tradeoffs, risks, and what I would validate
   through a prototype, metrics, or staged rollout.
283. Design a plugin-based frontend platform.
   - Sample answer: Stable plugin contract, manifest, lazy loading, sandbox/isolation, permissions, version
   compatibility, theming, observability, fallback on plugin failure. I would structure the design around
   requirements, data model, frontend state, API contracts, auth/permissions, performance, failure modes,
   observability, and rollout. For this exact prompt, the details I would include are: Discuss manifests, permissions,
   version compatibility, extension points, failure isolation, and avoiding arbitrary host access. I would close with
   tradeoffs, risks, and what I would validate through a prototype, metrics, or staged rollout.
284. Design frontend deployment pipeline.
   - Sample answer: lint/typecheck/test/build, bundle analysis, environment config validation, preview deployments, smoke
   tests, canary, rollback, source maps upload. I would structure the design around requirements, data model, frontend
   state, API contracts, auth/permissions, performance, failure modes, observability, and rollout. For this prompt, I
   would state assumptions, draw the main components, define the data/API contract, and call out security,
   performance, and rollout risks. I would close with tradeoffs, risks, and what I would validate through a prototype,
   metrics, or staged rollout.
285. Design a form builder.
   - Sample answer: Schema-driven fields, validation rules, conditional logic, versioned submissions, renderer,
   accessibility, draft autosave, backend validation. I would structure the design around requirements, data model,
   frontend state, API contracts, auth/permissions, performance, failure modes, observability, and rollout. For this
   exact prompt, the details I would include are: Needs schema, validation, conditional logic, versioning, preview,
   accessible controls, and migration of existing submissions. I would close with tradeoffs, risks, and what I would
   validate through a prototype, metrics, or staged rollout.
286. Design an API catalog UI.
   - Sample answer: Search/filter, endpoint details, schema examples, auth info, versioning, try-it console with safe
   sandboxing, generated docs from OpenAPI. I would structure the design around requirements, data model, frontend
   state, API contracts, auth/permissions, performance, failure modes, observability, and rollout. For this exact
   prompt, the details I would include are: Support search, filtering, ownership, examples, auth requirements,
   versions, changelog, and safe try-it flows. I would close with tradeoffs, risks, and what I would validate through
   a prototype, metrics, or staged rollout.
287. Design offline-capable frontend.
   - Sample answer: Service worker cache, local storage/IndexedDB, sync queue, conflict resolution, stale indicators,
   security around cached sensitive data. I would structure the design around requirements, data model, frontend
   state, API contracts, auth/permissions, performance, failure modes, observability, and rollout. For this exact
   prompt, the details I would include are: Use local cache, sync queue, conflict resolution, stale indicators, and
   sensitive-data-at-rest controls. I would close with tradeoffs, risks, and what I would validate through a
   prototype, metrics, or staged rollout.
288. Design rate limiting for public API.
   - Sample answer: token bucket/leaky bucket, per-user/IP/API key, Redis counters, headers, 429 responses, burst
   handling, monitoring. I would structure the design around requirements, data model, frontend state, API contracts,
   auth/permissions, performance, failure modes, observability, and rollout. For this exact prompt, the details I
   would include are: Use server-side counters plus client UX throttling, exponential backoff, monitoring, and careful
   lockout behavior. I would close with tradeoffs, risks, and what I would validate through a prototype, metrics, or
   staged rollout.
289. Design a role and permission model.
   - Sample answer: Users, roles, permissions, tenant scope, resource-level checks, server enforcement, frontend UX
   mapping, audit changes. I would structure the design around requirements, data model, frontend state, API
   contracts, auth/permissions, performance, failure modes, observability, and rollout. For this exact prompt, the
   details I would include are: Frontend permission checks are UX; backend policy is enforcement. Hide/disable actions
   but never rely on the browser. Model actions on resources, group into roles, enforce in backend, and surface
   explainable UX states. I would close with tradeoffs, risks, and what I would validate through a prototype, metrics,
   or staged rollout.
290. Design a system for live telemetry visualization.
   - Sample answer: Stream ingestion, time-series storage, aggregation, WebSocket/SSE updates, chart decimation, time
   range filters, backpressure, downsampling. I would structure the design around requirements, data model, frontend
   state, API contracts, auth/permissions, performance, failure modes, observability, and rollout. For this exact
   prompt, the details I would include are: Downsample, window, aggregate, batch realtime updates, and keep charts
   responsive under high event volume. I would close with tradeoffs, risks, and what I would validate through a
   prototype, metrics, or staged rollout.
291. Design a secure third-party integration.
   - Sample answer: OAuth/client credentials, token storage, webhook validation, retries, rate limits, audit logs, least
   privilege, failure modes. I would structure the design around requirements, data model, frontend state, API
   contracts, auth/permissions, performance, failure modes, observability, and rollout. For this prompt, I would state
   assumptions, draw the main components, define the data/API contract, and call out security, performance, and
   rollout risks. I would close with tradeoffs, risks, and what I would validate through a prototype, metrics, or
   staged rollout.
292. Design frontend for high-stakes workflows.
   - Sample answer: clear status, confirmation for destructive actions, undo where possible, audit trail, accessibility,
   latency feedback, error recovery, no ambiguous UI. I would structure the design around requirements, data model,
   frontend state, API contracts, auth/permissions, performance, failure modes, observability, and rollout. For this
   exact prompt, the details I would include are: Reduce cognitive load, make state obvious, confirm destructive
   actions, log sensitive actions, and handle failures calmly. I would close with tradeoffs, risks, and what I would
   validate through a prototype, metrics, or staged rollout.
## 12. Frontend Testing And Quality

293. Unit vs integration vs E2E tests?
   - Sample answer: Unit tests isolated logic/components. Integration tests multiple units together. E2E tests full user
   flows in browser. My testing answer would focus on confidence per cost: cover risky behavior, avoid brittle
   implementation assertions, and make tests deterministic in CI. For this exact prompt, the details I would include
   are: Unit tests verify small logic; integration tests verify pieces together; E2E tests cover critical browser
   workflows. The goal is confidence in behavior users depend on, especially auth, permissions, async data,
   accessibility, and high-value workflows.
294. What to test in React components?
   - Sample answer: user-visible behavior, accessibility roles/labels, state transitions, error/loading states,
   integration with mocked APIs. My testing answer would focus on confidence per cost: cover risky behavior, avoid
   brittle implementation assertions, and make tests deterministic in CI. For this exact prompt, the details I would
   include are: Test user-visible behavior, interactions, accessibility roles, async states, and callbacks/API
   effects. The goal is confidence in behavior users depend on, especially auth, permissions, async data,
   accessibility, and high-value workflows.
295. What not to over-test?
   - Sample answer: implementation details, exact internal state, library behavior, brittle snapshots. My testing answer
   would focus on confidence per cost: cover risky behavior, avoid brittle implementation assertions, and make tests
   deterministic in CI. For this exact prompt, the details I would include are: Avoid testing implementation details,
   library internals, brittle snapshots, and every CSS class when behavior matters more. The goal is confidence in
   behavior users depend on, especially auth, permissions, async data, accessibility, and high-value workflows.
296. Jest vs React Testing Library?
   - Sample answer: Jest is test runner/assertion/mocking ecosystem. RTL helps render components and query like a user.
   My testing answer would focus on confidence per cost: cover risky behavior, avoid brittle implementation
   assertions, and make tests deterministic in CI. For this exact prompt, the details I would include are: Jest/Vitest
   runs tests and mocks; React Testing Library encourages user-centered queries and interactions. The goal is
   confidence in behavior users depend on, especially auth, permissions, async data, accessibility, and high-value
   workflows.
297. How do you test async UI?
   - Sample answer: mock API, use `findBy`/`waitFor`, assert loading then success/error, handle timers carefully. My
   testing answer would focus on confidence per cost: cover risky behavior, avoid brittle implementation assertions,
   and make tests deterministic in CI. For this exact prompt, the details I would include are: Mock network
   deterministically, await visible state changes, and test loading, success, error, and empty states. The goal is
   confidence in behavior users depend on, especially auth, permissions, async data, accessibility, and high-value
   workflows.
298. How do you test hooks?
   - Sample answer: Use component or hook testing utilities; prefer testing behavior through components when possible. My
   testing answer would focus on confidence per cost: cover risky behavior, avoid brittle implementation assertions,
   and make tests deterministic in CI. For this exact prompt, the details I would include are: Test hooks through a
   small component or hook utility, focusing on returned state, side effects, and cleanup. The goal is confidence in
   behavior users depend on, especially auth, permissions, async data, accessibility, and high-value workflows.
299. How do you test TanStack Query?
   - Sample answer: Provide test QueryClient with retries off, mock network, assert loading/data/error and cache
   invalidation behavior. My testing answer would focus on confidence per cost: cover risky behavior, avoid brittle
   implementation assertions, and make tests deterministic in CI. For this exact prompt, the details I would include
   are: TanStack Query manages server state, caching, retries, invalidation, background refresh, and mutation
   workflows. The goal is confidence in behavior users depend on, especially auth, permissions, async data,
   accessibility, and high-value workflows.
300. How do you test accessibility?
   - Sample answer: semantic queries, keyboard navigation tests, axe checks, screen reader spot checks for complex
   widgets. My testing answer would focus on confidence per cost: cover risky behavior, avoid brittle implementation
   assertions, and make tests deterministic in CI. For this exact prompt, the details I would include are: Test
   keyboard navigation, labels, focus, roles, contrast where possible, and use axe-style tooling plus manual checks.
   The goal is confidence in behavior users depend on, especially auth, permissions, async data, accessibility, and
   high-value workflows.
301. How do you test performance regressions?
   - Sample answer: bundle size checks, Lighthouse CI, Web Vitals/RUM monitoring, targeted performance tests for critical
   interactions. My testing answer would focus on confidence per cost: cover risky behavior, avoid brittle
   implementation assertions, and make tests deterministic in CI. For this exact prompt, the details I would include
   are: Use bundle budgets, Web Vitals, profiling, and critical-flow monitoring. The goal is confidence in behavior
   users depend on, especially auth, permissions, async data, accessibility, and high-value workflows.
302. How do you test WebSocket flows?
   - Sample answer: mock WebSocket server/client, test connect/message/reconnect/error states, dedupe/order handling. My
   testing answer would focus on confidence per cost: cover risky behavior, avoid brittle implementation assertions,
   and make tests deterministic in CI. For this exact prompt, the details I would include are: Secure WebSockets with
   WSS, authentication, origin checks, channel authorization, heartbeat, reconnect/backoff, and rate limits. The goal
   is confidence in behavior users depend on, especially auth, permissions, async data, accessibility, and high-value
   workflows.
303. What belongs in CI?
   - Sample answer: lint, typecheck, unit/integration tests, build, dependency audit if applicable, bundle limits, E2E
   smoke for critical flows. My testing answer would focus on confidence per cost: cover risky behavior, avoid brittle
   implementation assertions, and make tests deterministic in CI. For this prompt, I would choose tests that prove
   user-visible behavior and failure handling without locking the implementation in place. The goal is confidence in
   behavior users depend on, especially auth, permissions, async data, accessibility, and high-value workflows.
304. How do you make tests less flaky?
   - Sample answer: avoid arbitrary sleeps, wait for real conditions, isolate test data, control timers/network, reduce
   cross-test shared state. My testing answer would focus on confidence per cost: cover risky behavior, avoid brittle
   implementation assertions, and make tests deterministic in CI. For this exact prompt, the details I would include
   are: Use deterministic data, isolated state, controlled timers, condition-based waits, and avoid real network
   dependencies. The goal is confidence in behavior users depend on, especially auth, permissions, async data,
   accessibility, and high-value workflows.
305. What is test pyramid?
   - Sample answer: Many fast unit tests, fewer integration tests, fewer expensive E2E tests. Shape can vary by product
   risk. My testing answer would focus on confidence per cost: cover risky behavior, avoid brittle implementation
   assertions, and make tests deterministic in CI. For this exact prompt, the details I would include are: Favor many
   cheap unit tests, fewer integration tests, and a small set of valuable E2E tests. The goal is confidence in
   behavior users depend on, especially auth, permissions, async data, accessibility, and high-value workflows.
## 13. Code Review And Architecture Discussion

306. What do you look for in architecture design meetings?
   - Sample answer: problem clarity, constraints, alternatives, tradeoffs, data flow, failure modes, security,
   observability, rollout, ownership. I would show practical judgment: understand the existing system, compare
   options, make tradeoffs explicit, and choose a change the team can operate safely. For this exact prompt, the
   details I would include are: Look for problem statement, constraints, alternatives, tradeoffs, ownership, rollout,
   observability, and failure modes. That demonstrates senior-leaning judgment while staying practical for the scope
   of the role.
307. How do you propose a design?
   - Sample answer: Write context, goals, non-goals, options, recommendation, risks, migration plan, open questions. I
   would show practical judgment: understand the existing system, compare options, make tradeoffs explicit, and choose
   a change the team can operate safely. For this exact prompt, the details I would include are: Write context,
   goals/non-goals, options, recommendation, risks, migration, metrics, and open questions. That demonstrates
   senior-leaning judgment while staying practical for the scope of the role.
308. How do you prevent frontend architecture from becoming messy?
   - Sample answer: clear boundaries, consistent data-fetching/state patterns, shared components, lint rules, code
   review, deleting old paths. I would show practical judgment: understand the existing system, compare options, make
   tradeoffs explicit, and choose a change the team can operate safely. For this exact prompt, the details I would
   include are: Mess happens when state ownership, API boundaries, component responsibilities, and shared abstractions
   are unclear. That demonstrates senior-leaning judgment while staying practical for the scope of the role.
309. When would you introduce abstraction?
   - Sample answer: When duplication is real, variation points are understood, and abstraction makes usage simpler
   without hiding important behavior. I would show practical judgment: understand the existing system, compare
   options, make tradeoffs explicit, and choose a change the team can operate safely. For this exact prompt, the
   details I would include are: Introduce abstraction only when duplication is real and variation points are
   understood. That demonstrates senior-leaning judgment while staying practical for the scope of the role.
310. How do you handle tech debt?
   - Sample answer: classify risk, connect to business/user impact, fix opportunistically near touched code, schedule
   bigger work with measurable benefit. I would show practical judgment: understand the existing system, compare
   options, make tradeoffs explicit, and choose a change the team can operate safely. For this exact prompt, the
   details I would include are: Prioritize by user risk, incident frequency, developer drag, and migration cost. That
   demonstrates senior-leaning judgment while staying practical for the scope of the role.
311. How do you migrate a large frontend feature safely?
   - Sample answer: strangler pattern, feature flags, compatibility layer, tests, metrics, gradual rollout, rollback
   plan. I would show practical judgment: understand the existing system, compare options, make tradeoffs explicit,
   and choose a change the team can operate safely. For this exact prompt, the details I would include are: Use
   feature flags, adapters, parallel paths, tests, metrics, and rollback. That demonstrates senior-leaning judgment
   while staying practical for the scope of the role.
312. How do you handle breaking API changes?
   - Sample answer: version contract, support old/new temporarily, update clients, monitor usage, communicate timeline,
   remove old path after migration. I would show practical judgment: understand the existing system, compare options,
   make tradeoffs explicit, and choose a change the team can operate safely. For this exact prompt, the details I
   would include are: Coordinate versioning, contract tests, compatibility windows, docs, and release order. That
   demonstrates senior-leaning judgment while staying practical for the scope of the role.
313. How do you document frontend decisions?
   - Sample answer: lightweight ADRs, README near code, diagrams for data flow, examples for shared utilities/components.
   I would show practical judgment: understand the existing system, compare options, make tradeoffs explicit, and
   choose a change the team can operate safely. For this exact prompt, the details I would include are: Use short ADRs
   with context, options, decision, consequences, and links. That demonstrates senior-leaning judgment while staying
   practical for the scope of the role.
314. What makes a PR easy to review?
   - Sample answer: focused scope, clear description, screenshots for UI, test notes, linked ticket, small commits if
   helpful. I would show practical judgment: understand the existing system, compare options, make tradeoffs explicit,
   and choose a change the team can operate safely. For this exact prompt, the details I would include are: Keep PRs
   focused, described, tested, and include screenshots/recordings for UI changes. That demonstrates senior-leaning
   judgment while staying practical for the scope of the role.
315. How do you evaluate a dependency?
   - Sample answer: maintenance, bundle size, API fit, security, license, community, alternatives, cost of replacing. I
   would show practical judgment: understand the existing system, compare options, make tradeoffs explicit, and choose
   a change the team can operate safely. For this exact prompt, the details I would include are: Check maintenance,
   security, bundle cost, accessibility, license, API stability, and exit cost. That demonstrates senior-leaning
   judgment while staying practical for the scope of the role.
316. How do you deal with legacy code?
   - Sample answer: understand behavior first, add characterization tests for risky paths, make small changes, improve
   boundaries gradually. I would show practical judgment: understand the existing system, compare options, make
   tradeoffs explicit, and choose a change the team can operate safely. For this exact prompt, the details I would
   include are: Add characterization tests, improve in small steps, and avoid rewrites without a migration path. That
   demonstrates senior-leaning judgment while staying practical for the scope of the role.
## 14. Axon-Specific Prep Questions

317. How would you make public safety data accessible and actionable?
   - Sample answer: clear hierarchy, fast search/filter, maps/tables/timelines, trustworthy data freshness indicators,
   permissions, auditability, accessibility, and strong error states. For Axon, I would keep the answer tied to
   trustworthy public-safety software: clarity, reliability, secure data handling, auditability, and users working
   under pressure. For this exact prompt, the details I would include are: Use semantic HTML, keyboard support, focus
   management, labels, contrast, and ARIA only when needed. Make priority, freshness, filters, permissions, and
   drill-down obvious. That is the through-line I want interviewers to remember: I care about product impact and
   production responsibility, not just shipping UI.
318. What does quality mean for Axon's product domain?
   - Sample answer: correctness, reliability, security, performance, accessibility, auditability, and calm UX under
   stressful workflows. For Axon, I would keep the answer tied to trustworthy public-safety software: clarity,
   reliability, secure data handling, auditability, and users working under pressure. For this exact prompt, the
   details I would include are: Quality includes correctness, uptime, security, performance, auditability,
   accessibility, and clear recovery. That is the through-line I want interviewers to remember: I care about product
   impact and production responsibility, not just shipping UI.
319. How would you handle sensitive evidence/public-safety data in frontend?
   - Sample answer: least privilege, server-side authorization, no sensitive local storage, redacted logs, secure
   transport, audit events, timeout/session policies. For Axon, I would keep the answer tied to trustworthy
   public-safety software: clarity, reliability, secure data handling, auditability, and users working under pressure.
   For this exact prompt, the details I would include are: Minimize exposure, enforce permissions, redact logs,
   protect previews/downloads, and audit access. That is the through-line I want interviewers to remember: I care
   about product impact and production responsibility, not just shipping UI.
320. How would you design UI for users under pressure?
   - Sample answer: reduce cognitive load, clear primary actions, stable layout, visible status, keyboard accessibility,
   avoid ambiguous states, strong confirmation/error recovery. For Axon, I would keep the answer tied to trustworthy
   public-safety software: clarity, reliability, secure data handling, auditability, and users working under pressure.
   For this exact prompt, the details I would include are: Use stable layouts, clear hierarchy, obvious next actions,
   confirmations, and calm error messages. That is the through-line I want interviewers to remember: I care about
   product impact and production responsibility, not just shipping UI.
321. How do you balance speed and safety?
   - Sample answer: ship small slices, protect critical paths with tests/feature flags/observability, and keep rollback
   paths available. For Axon, I would keep the answer tied to trustworthy public-safety software: clarity,
   reliability, secure data handling, auditability, and users working under pressure. For this prompt, I would tie the
   answer to public-safety users: clear information, careful permissions, sensitive data handling, and reliable
   recovery from failure. That is the through-line I want interviewers to remember: I care about product impact and
   production responsibility, not just shipping UI.
322. How would you contribute beyond assigned tickets?
   - Sample answer: improve tooling, documentation, observability, code review quality, onboarding notes, and shared
   components. For Axon, I would keep the answer tied to trustworthy public-safety software: clarity, reliability,
   secure data handling, auditability, and users working under pressure. For this prompt, I would tie the answer to
   public-safety users: clear information, careful permissions, sensitive data handling, and reliable recovery from
   failure. That is the through-line I want interviewers to remember: I care about product impact and production
   responsibility, not just shipping UI.
323. What would you ask Axon interviewers?
   - Sample answer: team product area, frontend architecture, React/Next usage, testing expectations, performance
   metrics, release process, collaboration with Product/Design, biggest current frontend challenge. For Axon, I would
   keep the answer tied to trustworthy public-safety software: clarity, reliability, secure data handling,
   auditability, and users working under pressure. For this prompt, I would tie the answer to public-safety users:
   clear information, careful permissions, sensitive data handling, and reliable recovery from failure. That is the
   through-line I want interviewers to remember: I care about product impact and production responsibility, not just
   shipping UI.
324. What is your 30-60-90 day plan?
   - Sample answer: 30: learn product/code/team and ship small fixes. 60: own a feature and improve a pain point. 90:
   drive a larger feature or quality/performance improvement with measurable impact. For Axon, I would keep the answer
   tied to trustworthy public-safety software: clarity, reliability, secure data handling, auditability, and users
   working under pressure. For this exact prompt, the details I would include are: 30 days learn and ship small fixes;
   60 days own a slice; 90 days improve a shared pattern or reliability/performance area. That is the through-line I
   want interviewers to remember: I care about product impact and production responsibility, not just shipping UI.
325. What should Axon know about your background that is not obvious?
   - Sample answer: "I am strongest when frontend work touches system reliability and product ownership. I can build UI,
   but I also care about API contracts, auth, observability, deployment, and maintainability." For Axon, I would keep
   the answer tied to trustworthy public-safety software: clarity, reliability, secure data handling, auditability,
   and users working under pressure. For this prompt, I would tie the answer to public-safety users: clear
   information, careful permissions, sensitive data handling, and reliable recovery from failure. That is the
   through-line I want interviewers to remember: I care about product impact and production responsibility, not just
   shipping UI.
## 15. Questions To Ask The Interviewer

326. What product area would this role support?
   - Sample answer: I would ask this because it reveals how the team actually works beyond the job description. For "What
   product area would this role support?", I would listen for concrete details, examples, and success criteria rather
   than only broad positive statements. For this exact prompt, the details I would include are: A good follow-up is to
   ask what would make someone in this role unusually successful in the first six months.
327. What frontend stack and architecture does the team use today?
   - Sample answer: I would ask this because it reveals how the team actually works beyond the job description. For "What
   frontend stack and architecture does the team use today?", I would listen for concrete details, examples, and
   success criteria rather than only broad positive statements. For this exact prompt, the details I would include
   are: A good follow-up is to ask what would make someone in this role unusually successful in the first six months.
328. What are the biggest frontend performance or reliability challenges now?
   - Sample answer: I would ask this because it reveals how the team actually works beyond the job description. For "What
   are the biggest frontend performance or reliability challenges now?", I would listen for concrete details,
   examples, and success criteria rather than only broad positive statements. I would use the interviewer response to
   understand expectations, current pain points, and where this role can create visible impact. A good follow-up is to
   ask what would make someone in this role unusually successful in the first six months.
329. How does the team collaborate with Product and Design?
   - Sample answer: I would ask this because it reveals how the team actually works beyond the job description. For "How
   does the team collaborate with Product and Design?", I would listen for concrete details, examples, and success
   criteria rather than only broad positive statements. I would use the interviewer response to understand
   expectations, current pain points, and where this role can create visible impact. A good follow-up is to ask what
   would make someone in this role unusually successful in the first six months.
330. What does code review look like at Axon?
   - Sample answer: I would ask this because it reveals how the team actually works beyond the job description. For "What
   does code review look like at Axon?", I would listen for concrete details, examples, and success criteria rather
   than only broad positive statements. I would use the interviewer response to understand expectations, current pain
   points, and where this role can create visible impact. A good follow-up is to ask what would make someone in this
   role unusually successful in the first six months.
331. How are frontend releases done?
   - Sample answer: I would ask this because it reveals how the team actually works beyond the job description. For "How
   are frontend releases done?", I would listen for concrete details, examples, and success criteria rather than only
   broad positive statements. I would use the interviewer response to understand expectations, current pain points,
   and where this role can create visible impact. A good follow-up is to ask what would make someone in this role
   unusually successful in the first six months.
332. How do teams measure user impact and product quality?
   - Sample answer: I would ask this because it reveals how the team actually works beyond the job description. For "How
   do teams measure user impact and product quality?", I would listen for concrete details, examples, and success
   criteria rather than only broad positive statements. I would use the interviewer response to understand
   expectations, current pain points, and where this role can create visible impact. A good follow-up is to ask what
   would make someone in this role unusually successful in the first six months.
333. What does success look like in the first 6 months?
   - Sample answer: I would ask this because it reveals how the team actually works beyond the job description. For "What
   does success look like in the first 6 months?", I would listen for concrete details, examples, and success criteria
   rather than only broad positive statements. I would use the interviewer response to understand expectations,
   current pain points, and where this role can create visible impact. A good follow-up is to ask what would make
   someone in this role unusually successful in the first six months.
334. What mentorship or growth paths are available?
   - Sample answer: I would ask this because it reveals how the team actually works beyond the job description. For "What
   mentorship or growth paths are available?", I would listen for concrete details, examples, and success criteria
   rather than only broad positive statements. I would use the interviewer response to understand expectations,
   current pain points, and where this role can create visible impact. A good follow-up is to ask what would make
   someone in this role unusually successful in the first six months.
335. What is one technical challenge the team is excited to solve this year?
   - Sample answer: I would ask this because it reveals how the team actually works beyond the job description. For "What
   is one technical challenge the team is excited to solve this year?", I would listen for concrete details, examples,
   and success criteria rather than only broad positive statements. For this exact prompt, the details I would include
   are: A good follow-up is to ask what would make someone in this role unusually successful in the first six months.
## 16. Fast Revision Checklist

- Be ready to explain every CV bullet in detail: goal, your ownership, tradeoffs, result.
- Prepare one STAR story each for: ownership, conflict, failure, performance, production issue, ambiguity, mentoring.
- Practice coding out loud in JavaScript/TypeScript.
- Review React hooks, rendering, state, effects, memoization, accessibility, testing.
- Review browser fundamentals: event loop, rendering pipeline, HTTP, caching, CORS, security.
- Review auth/security: cookies, JWT, OAuth/OIDC, CSRF, XSS, WebSocket auth, tenant scoping.
- Review DSA patterns: hash map, sliding window, two pointers, stack/queue, BFS/DFS, binary search, heap, DP.
- Prepare 5 questions for Axon about team, architecture, releases, product domain, and success criteria.
