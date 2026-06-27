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
   - Answer: "I am a frontend software engineer with nearly 3 years building production web apps in banking and
   developer-platform environments. My strongest areas are React, TypeScript, Next.js, frontend architecture, API
   integration, observability, and production hardening. Recently I integrated Chatwoot into a React/Next
   contact-center app using Web Components and Shadow DOM, built a Go/Redis BFF to protect backend tokens, helped
   migrate offset pagination to cursor pagination, and improved monorepo build performance by about 50%. I like roles
   where frontend work is close to product, performance, reliability, and real users, which is why Axon's
   public-safety mission is interesting to me."

2. Why Axon?
   - Answer: "Axon works on public safety systems where product quality matters beyond convenience. The JD also
   emphasizes frontend ownership, product/design partnership, performance, architecture discussions, and cross-team
   collaboration. That matches my experience shipping operational banking portals and developer platforms where
   reliability, observability, and maintainability matter." Public safety, trustworthy UX, secure data handling, React
   quality, performance, and collaboration are the main reasons the role fits my background.

3. Why this Frontend Software Engineer I role?
   - Answer: "It is a good match for my React/JavaScript background and my experience owning end-to-end frontend
   features. I want to continue deepening frontend engineering, especially performance, architecture, and user-facing
   systems at scale, while contributing to a mission-driven product." I can contribute hands-on immediately while
   continuing to learn from senior engineers and architecture reviews.

4. Tell me about a feature you owned end to end.
   - Answer: A feature I owned end to end was the Chatwoot integration. The contact-center app needed chat capability
   inside an existing React/Next workflow without unsafe auth handling or a disconnected user experience. I aligned
   requirements with Product, clarified the API/session boundary with backend, implemented the Web Component
   integration, handled loading, permissions, routing context, realtime events, and observability, then supported
   rollout and post-release fixes.

5. Tell me about a project where you worked with Product and Design.
   - Answer: In product and design collaboration, I translate user flows into complete UI behavior: loading, empty,
   error, permission-denied, stale-data, and success states. I clarify edge cases, align API contracts with backend
   engineers, validate behavior with demos, and iterate when static design assumptions meet real operational data.

6. Describe a time you improved performance.
   - Answer: A concrete performance improvement was the cursor pagination migration and monorepo build feedback work.
   Offset pagination became slower and less stable for large changing datasets, so cursor pagination improved
   consistency and scalability. In the monorepo, reducing unnecessary rebuilds and improving caching cut build
   feedback time by roughly 50%.

7. Describe a time you improved reliability or observability.
   - Answer: The reliability improvement was shared OpenTelemetry/Sentry instrumentation. Frontend errors included
   release, route/action, trace ID, timing, environment, and sanitized metadata, which made it easier to correlate
   user-facing failures with backend traces, logs, and incident-triage workflows. Actionable observability captures
   errors, latency, Web Vitals, trace IDs, release, and privacy-safe metadata.

8. Tell me about a difficult technical decision.
   - Answer: Chatwoot integration: iframe vs direct embedding vs Web Components. Chose Web Components/Shadow DOM to
   isolate styles and preserve host ownership of auth/transport/permissions.

9. Tell me about a mistake you made.
   - Answer: One mistake was underestimating a navigation/state edge case in an internal UI. The normal path worked, but
   returning with different query parameters could leave duplicated derived state stale. I fixed it by making
   URL/server data the source of truth, reducing duplicated state, and adding tests around reload and navigation
   behavior.

10. Tell me about a time you disagreed with a teammate.
   - Answer: "I clarified goals, compared tradeoffs, wrote a small proof of concept or benchmark, and aligned on the
   option that reduced risk."

11. How do you handle code review feedback?
   - Answer: "I separate ego from code, ask clarifying questions, accept improvements quickly, and discuss tradeoffs when
   feedback changes architecture. I also try to make review easy by keeping PRs focused and explaining context."

12. How do you review other people's code?
   - Answer: "I look for correctness, edge cases, maintainability, performance, security, test coverage, and fit with
   existing patterns. I try to distinguish blocking comments from suggestions."

13. Tell me about mentoring or coaching.
   - Answer: I have helped teammates understand frontend architecture, shared instrumentation, code review habits, and
   development workflow by pairing on concrete tasks, explaining the principle behind the pattern, and leaving behind
   reusable examples or documentation.

14. How do you communicate with senior leaders?
   - Answer: "I summarize user impact, risk, options, tradeoffs, and recommendation. I avoid excessive implementation
   detail unless it affects timeline or risk."

15. How do you work in a fast-paced environment?
   - Answer: "I clarify priority, reduce scope to the useful first release, instrument important flows, and keep
   communication frequent so surprises surface early."

16. Tell me about a time you handled ambiguity.
   - Answer: Cursor pagination was an ambiguity-heavy project. The team had to clarify access patterns, stable ordering,
   filter behavior, next/previous navigation, cache keys, URL behavior, duplicate handling, and the frontend/backend
   API contract before the implementation could be reliable.

17. Tell me about a production issue you handled.
   - Answer: A production issue is handled in phases: detect user impact, mitigate the immediate failure, identify root
   cause, and prevent recurrence. Observability with trace IDs, release metadata, route/action names, timing, and safe
   error context makes each phase faster and less dependent on guesswork.

18. How do you decide when code is good enough to ship?
   - Answer: "It meets requirements, handles known edge cases, has appropriate tests, does not introduce unacceptable
   performance/security risk, is observable enough for production, and has a rollback or mitigation path when needed."

19. How do you handle deadlines?
   - Answer: "I identify must-haves, cut non-essential scope, communicate risk early, and protect quality on critical
   paths."

20. Tell me about a time you learned a new technology quickly.
   - Answer: A concrete example is learning Web Components and Shadow DOM for the Chatwoot integration. The production
   need forced fast learning around custom elements, lifecycle callbacks, property/event APIs, style encapsulation,
   focus behavior, accessibility, and framework interoperability.

21. What does "Force for Good" mean to you?
   - Answer: Force for Good means building technology that improves safety, trust, and accountability for real people. In
   frontend work, that means reliable, accessible, secure, and understandable interfaces that help users act correctly
   under pressure. It also means protecting sensitive data, avoiding misleading UI states, preventing unauthorized
   actions, and making errors recoverable instead of confusing. Axon's mission makes frontend quality meaningful
   because public-safety users need tools they can trust in serious situations.

22. How do you handle hybrid onsite collaboration?
   - Answer: "I use onsite time for high-bandwidth work like design discussions, architecture alignment, and mentoring,
   and remote time for focused implementation and documentation."

23. What kind of team culture helps you do your best work?
   - Answer: "Clear ownership, candid but respectful feedback, strong engineering standards, and people who care about
   users."

24. What are your weaknesses?
   - Answer: "Earlier I sometimes over-invested in making a solution too generic. I now start with the concrete use case,
   add extension points only when they are justified, and validate with teammates."

25. Where do you want to grow?
   - Answer: "Large-scale frontend architecture, product thinking, performance at scale, and becoming stronger at
   influencing technical direction across teams."

26. Why are you leaving/currently considering opportunities?
   - Answer: "I am looking for a role where I can apply my frontend/platform experience to a larger mission-driven
   product and keep growing with strong engineers."

27. What project are you most proud of?
   - Answer: The project I am most proud of is the Chatwoot integration because it had direct user impact and real
   technical difficulty across framework interoperability, auth/session boundaries, permissions, routing, realtime
   events, and production observability.

28. How do you earn trust with a new team?
   - Answer: "I listen first, learn the codebase, take ownership of small but valuable tasks, communicate clearly, and
   follow through."

29. How do you handle unclear requirements?
   - Answer: "I ask about user goals, states, edge cases, API constraints, success metrics, and rollout. Then I document
   assumptions and confirm before building deeply."

30. What questions would you ask Product before starting a feature?
   - Answer: Target user, success metric, core flow, edge cases, permissions, loading/error states, analytics,
   accessibility, rollout, dependencies.

31. How do you collaborate with backend engineers?
   - Answer: "I align on API shape, error contracts, auth, pagination, caching, versioning, observability, and test data.
   I prefer written contracts or OpenAPI when possible."

32. Tell me about your English communication.
   - Answer: "I use English professionally in documentation, code review, technical discussions, and cross-team
   communication. I have IELTS 7.0."

## 2. CV Deep-Dive Questions

33. Explain your Chatwoot integration.
   - Answer: "We embedded a Vue 3/Vite dashboard into a React/Next.js contact-center app using Web Components and Shadow
   DOM. The host app kept control over auth, transport, tenant scope, permissions, and realtime events. This reduced
   integration risk while isolating UI implementation details." React/Next host, Vue/Vite embedded surface, Web
   Components, Shadow DOM, auth ownership, tenant scope, permissions, and realtime events.

34. Why Web Components instead of iframe?
   - Answer: Web Components allow tighter integration, shared events, better host control, and smoother UX. iframe gives
   stronger isolation but makes routing, auth, sizing, events, and styling integration harder. Contrast iframe
   isolation, direct component coupling, and custom-element contracts; explain why a small public API with custom
   events was useful. isolation benefits but also routing, sizing, theming, focus, analytics, and auth handoff
   friction.

35. What does Shadow DOM solve?
   - Answer: It encapsulates DOM and CSS so embedded UI styles do not leak into the host and host styles do not
   accidentally break the embedded component. Be precise that Shadow DOM gives DOM/CSS encapsulation, not a true
   security sandbox.

36. What problems can Shadow DOM introduce?
   - Answer: Styling/theming complexity, event retargeting, accessibility testing nuances, focus management issues, and
   harder global CSS assumptions. Be precise that Shadow DOM gives DOM/CSS encapsulation, not a true security sandbox.

37. Explain `lexi-session`.
   - Answer: "It is a Go + Redis BFF that keeps backend tokens out of the browser. It proxies HTTP, bridges WebSocket,
   supports rate limiting and multi-client sessions, and emits production observability." Frame it as a Go/Redis BFF
   that kept backend tokens out of browser JavaScript and centralized session, proxy, WebSocket, rate-limit, and
   observability concerns.

38. Why use a BFF?
   - Answer: A Backend-for-Frontend can protect secrets, simplify browser-facing APIs, centralize auth/session logic,
   adapt backend contracts, and enforce rate limits/security policies. the browser-facing API boundary: safer token
   handling, product-shaped endpoints, normalized errors, and fewer secrets in the client.

39. Why Redis/Dragonfly for session handling?
   - Answer: Low-latency shared state, TTL-based expiration, distributed access across instances, pub/sub or stream
   patterns if needed, and good fit for session/rate-limit counters. Cover TTLs, low-latency shared state, eviction
   risk, hot keys, persistence tradeoffs, and monitoring. Cover Redis-compatible low-latency shared state, TTLs,
   counters, and operational risks such as eviction and availability.

40. What are risks of storing sessions in Redis?
   - Answer: Eviction, data loss depending on persistence, hot keys, inconsistent TTLs, serialization bugs, and
   operational dependency on Redis availability. Cover TTLs, low-latency shared state, eviction risk, hot keys,
   persistence tradeoffs, and monitoring.

41. Explain your cursor pagination migration.
   - Answer: "Offset pagination slows down and can return unstable results as data changes. Cursor pagination uses a
   stable ordering key and cursor token to fetch next/previous pages consistently and efficiently." Stable ordering,
   opaque cursors, next/previous cursors, filter invalidation, duplicate prevention, and the tradeoff against random
   page jumps.

42. How does bidirectional cursor pagination work?
   - Answer: Bidirectional cursor pagination uses a stable sort, usually createdAt plus id, and returns opaque cursors
   for both next and previous navigation. The after cursor fetches records after the current page boundary; the before
   cursor fetches records before it. The backend may reverse sort internally for previous pages, then return items in
   the normal display order. The frontend treats cursors as opaque, resets them when filters or sort change, and
   prevents duplicate rows when data changes.

43. What makes cursor pagination hard?
   - Answer: Stable sorting, duplicate timestamps, backwards navigation, filtering changes, cursor encoding/versioning,
   cache invalidation, and UI state for page boundaries. Stable ordering, opaque cursors, next/previous cursors,
   filter invalidation, duplicate prevention, and the tradeoff against random page jumps.

44. Explain your OpenTelemetry/Sentry work.
   - Answer: OpenTelemetry and Sentry connect frontend symptoms to production root cause. Useful frontend telemetry
   includes release version, route/action name, trace ID, API timing, environment, source maps, and sanitized
   metadata. That context lets engineers correlate browser errors with backend traces and logs. Sensitive values such
   as tokens, PII, banking data, and full request bodies must be scrubbed. The result is faster incident triage and
   safer debugging.

45. What should be captured in frontend observability?
   - Answer: route changes, API latency, errors, user-impacting failed actions, Web Vitals, trace IDs, release version,
   environment, user/session IDs when privacy-safe. Actionable observability captures errors, latency, Web Vitals,
   trace IDs, release, and privacy-safe metadata.

46. What should not be captured?
   - Answer: tokens, passwords, PII, sensitive banking/customer data, full request bodies with secrets, or excessive
   breadcrumbs that create privacy/security risk.

47. How did you improve monorepo build performance?
   - Answer: Monorepo build performance improves by measuring the slow path, then reducing repeated work. The main levers
   are dependency graph cleanup, task caching, incremental builds, TypeScript project boundaries, parallelization,
   Vite/Turborepo tuning, and avoiding changes that invalidate every package. The result should be verified with
   before/after build times and cache-hit rates. In my experience, this kind of cleanup reduced build feedback time by
   roughly 50%.

48. What can slow down a frontend monorepo?
   - Answer: Frontend monorepos slow down when dependency invalidation is too broad, TypeScript checks rebuild too much,
   cache keys are weak, shared packages are too large, generated files trigger unrelated work, duplicate dependencies
   inflate installs/bundles, and CI runs expensive tasks on unchanged packages. Good monorepo health depends on clear
   package boundaries, incremental builds, task caching, project references, dependency hygiene, and targeted
   test/build execution.

49. Explain AutoWRX.
   - Answer: "A cloud-based rapid prototyping environment for software-defined vehicle applications. I built React/Vite
   UIs for API catalogs, prototype execution, telemetry visualization, and demos." It is a platform UI for
   software-defined vehicle prototyping with API catalogs, telemetry, marketplace/plugin surfaces, and demos.

50. Explain the plugin architecture you helped shape.
   - Answer: A plugin architecture keeps the core platform stable while optional plugins contribute UI or capabilities
   through defined contracts. The host owns extension points, permissions, version compatibility, lifecycle, error
   handling, and shared services. Plugins should not reach into arbitrary host internals because that makes upgrades
   unsafe. A good plugin system uses manifests, scoped permissions, documented APIs, failure isolation, and
   compatibility rules so the platform can evolve without breaking every extension.

51. What are plugin architecture risks?
   - Answer: Plugin architecture risks include unstable extension APIs, version incompatibility, dependency conflicts,
   excessive permissions, security boundary mistakes, performance overhead, inconsistent UX, and unclear ownership
   when a plugin fails. Mitigations include manifests, permission scopes, version contracts, sandboxing or error
   isolation, performance budgets, review process, monitoring, and clear deprecation policy. The platform must make
   plugin failure contained instead of letting one extension destabilize the host.

52. Explain your API decoupling work.
   - Answer: "We separated monolithic APIs into more maintainable services with centralized auth/routing. The goal was
   clearer ownership, easier evolution, and better deployment/control."

53. Why use Kong or an API gateway?
   - Answer: centralized routing, auth, rate limiting, observability, request transformation, service discovery, and
   consistent edge policies. Cover routing, auth, rate limits, TLS, observability, and the danger of hiding business
   logic in gateway config. Use Kong as a concrete gateway example for cross-cutting concerns, but call out latency,
   config drift, and debugging complexity.

54. What are downsides of an API gateway?
   - Answer: another operational dependency, latency, misconfiguration risk, and central bottleneck if all policies
   become gateway-specific. Cover routing, auth, rate limits, TLS, observability, and the danger of hiding business
   logic in gateway config.

55. Explain your Docker CI/CD automation.
   - Answer: "I built scripts/pipelines to package, deploy, restart, and monitor environments, reducing manual deployment
   effort by around 80%." reproducible builds, immutable images, environment separation, health checks, rollback, and
   avoiding hidden local state. Talk about typecheck/build/test gates, deterministic artifacts, deployment safety,
   smoke tests, and rollback.

56. How do you make deployment scripts safe?
   - Answer: idempotency, clear logs, environment validation, health checks, rollback path, secrets hygiene, dry-run mode
   when possible.

57. Explain your AI recruitment platform thesis.
   - Answer: Full-stack platform for screening, job/talent search, audio questioning, assessment, and GenAI-assisted
   evaluation using React/TS, Node, Redis, React Query, LangChain, Qdrant, AWS, Stripe.

58. How would you discuss GenAI safely in an interview?
   - Answer: GenAI is useful for summarization, search, drafting, classification, and workflow assistance, but safe usage
   requires evaluation, hallucination control, privacy protection, prompt/version control, fallback behavior,
   monitoring, and human review for high-impact decisions. Balance usefulness with bias, privacy, explainability,
   human review, and evaluation; do not sound like you trust generated output blindly.

59. Explain Lucky Wheel safeguards.
   - Answer: Backend-driven outcomes, validation of codes, state checks, navigation guards, and preventing client-only
   rule bypass. Use this as an anti-abuse story: server-side outcome authority, idempotency, eligibility, rate limits,
   audit logs, and duplicate-click protection.

60. What interview risks are in your CV?
   - Answer: Be ready to defend exact ownership, quantify performance improvements, explain security design for
   BFF/tokens, and go deep on React/TS fundamentals rather than only architecture stories.

## 3. Computer Science Fundamentals

61. What happens when you type a URL and press Enter?
   - Answer: Browser checks cache, parses URL, resolves DNS, opens TCP connection, negotiates TLS for HTTPS, sends HTTP
   request, receives response, parses HTML, discovers resources, builds DOM/CSSOM, runs JS, lays out, paints, and
   handles async loading. Walk from browser cache/service worker, DNS, TCP or QUIC, TLS, HTTP, server routing,
   response, parsing, loading resources, rendering, and hydration.

62. Explain process vs thread.
   - Answer: A process has its own memory space and resources. Threads run within a process and share memory, making
   communication cheaper but synchronization harder. A process owns isolated memory and resources; threads share
   process memory, which is cheaper but can introduce races.

63. What is a context switch?
   - Answer: The OS saves the state of one running thread/process and loads another. It has overhead due to CPU
   register/cache/TLB effects. saving/restoring CPU state, scheduler overhead, cache disruption, and why too many
   runnable tasks can hurt performance.

64. What is virtual memory?
   - Answer: An abstraction giving each process its own address space. The OS maps virtual pages to physical memory or
   disk, improving isolation and memory management. isolated address spaces, page tables, paging, protection, and how
   it lets the OS manage memory safely.

65. What is a race condition?
   - Answer: Behavior depends on unpredictable timing between concurrent operations. Fix with synchronization, atomic
   operations, immutable data, transactions, or avoiding shared mutable state. timing-dependent bugs and mitigations
   such as locks, transactions, idempotency, queues, or single ownership.

66. What is deadlock?
   - Answer: Two or more operations wait forever for each other's resources. Conditions: mutual exclusion, hold-and-wait,
   no preemption, circular wait. Name mutual exclusion, hold-and-wait, no preemption, circular wait, and mitigations
   such as lock ordering and timeouts.

67. What is starvation?
   - Answer: A task waits indefinitely because other tasks keep getting resources or priority. Describe fairness problems
   where a task never gets resources; aging and fair scheduling can help.

68. What is the difference between concurrency and parallelism?
   - Answer: Concurrency is managing multiple tasks in overlapping time. Parallelism is executing tasks simultaneously on
   multiple cores. Concurrency is multiple tasks in progress; parallelism is simultaneous execution, often on multiple
   cores.

69. What is CPU-bound vs I/O-bound work?
   - Answer: CPU-bound is limited by computation. I/O-bound is limited by waiting on network, disk, database, etc.
   CPU-bound work needs compute optimization/workers; I/O-bound work benefits from async scheduling, caching,
   batching, and fewer round trips.

70. Why is Node.js good for I/O-heavy workloads?
   - Answer: Its event loop and non-blocking I/O can handle many concurrent connections without one thread per request.
   Node fits I/O-heavy workloads because the event loop handles many pending operations, but CPU-heavy work can block
   all requests.

71. What is a file descriptor?
   - Answer: An OS handle representing an open file, socket, pipe, or other I/O resource. A file descriptor is an OS
   handle for files/sockets/pipes; leaks can exhaust limits and break servers.

72. What is DNS?
   - Answer: Domain Name System maps human-readable domain names to IP addresses through recursive and authoritative
   resolvers. DNS maps names to records, uses caching and TTLs, and can affect both latency and rollout behavior.

73. TCP vs UDP?
   - Answer: TCP is connection-oriented, reliable, ordered, congestion-controlled. UDP is connectionless, lower overhead,
   no built-in reliability or ordering. TCP is reliable and ordered with congestion control; compare it with UDP for
   latency-sensitive or app-managed reliability cases. UDP is datagram-based and low overhead but does not guarantee
   delivery or ordering.

74. HTTP/1.1 vs HTTP/2 vs HTTP/3?
   - Answer: HTTP/1.1 has limited connection multiplexing. HTTP/2 multiplexes streams over TCP and compresses headers.
   HTTP/3 uses QUIC over UDP to reduce head-of-line blocking and improve connection migration. Compare connection
   limits, multiplexing, head-of-line blocking, and QUIC/HTTP/3 behavior.

75. What is TLS?
   - Answer: Protocol providing encryption, integrity, and server identity verification for network communication. TLS
   authenticates the server, negotiates keys, encrypts traffic, and adds handshake cost that can be reduced with reuse
   and modern protocols.

76. What is the TLS handshake?
   - Answer: Client/server negotiate protocol/ciphers, verify certificate, exchange keys, then use symmetric encryption
   for data. TLS authenticates the server, negotiates keys, encrypts traffic, and adds handshake cost that can be
   reduced with reuse and modern protocols.

77. What is HTTP caching?
   - Answer: Reusing responses based on headers like `Cache-Control`, `ETag`, `Last-Modified`, and freshness validation.
   Cache-Control, ETag, Last-Modified, immutable assets, stale-while-revalidate, and invalidation.

78. What is CDN caching?
   - Answer: Edge servers cache static or cacheable dynamic content close to users, reducing latency and origin load.
   Cache-Control, ETag, Last-Modified, immutable assets, stale-while-revalidate, and invalidation. CDNs reduce latency
   by caching near users, but cache keys, TTLs, purges, and Vary headers must be correct.

79. What is CORS?
   - Answer: Browser security mechanism controlling whether a page from one origin can access resources from another
   origin. CORS is browser-enforced server opt-in for cross-origin reads; include allowed origins, methods, headers,
   and credentials.

80. What triggers a CORS preflight?
   - Answer: Non-simple methods, non-simple headers, or certain content types cause the browser to send an `OPTIONS`
   request first. CORS is browser-enforced server opt-in for cross-origin reads; include allowed origins, methods,
   headers, and credentials. Preflight is an OPTIONS check for non-simple cross-origin requests; custom headers and
   unsafe methods commonly trigger it.

81. What is same-origin policy?
   - Answer: Browser rule restricting scripts from one origin from reading data from another origin unless explicitly
   allowed. Same-origin policy isolates scheme, host, and port so one site cannot read another site without
   permission.

82. What is a reverse proxy?
   - Answer: A server in front of backends that handles routing, TLS termination, load balancing, caching, compression,
   or access control. A reverse proxy handles routing, TLS termination, compression, caching, auth integration, and
   load balancing in front of services.

83. Load balancing strategies?
   - Answer: round robin, least connections, weighted, consistent hashing, latency-based, or health-aware routing. round
   robin, least connections, weighted routing, consistent hashing, health checks, and sticky sessions when needed.

84. What is idempotency?
   - Answer: An operation can be repeated with the same effect as once. GET, PUT, DELETE are generally idempotent by HTTP
   semantics; POST usually is not unless designed with idempotency keys. Retries should not duplicate side effects;
   use idempotency keys for payments, uploads, or high-impact actions.

85. What is eventual consistency?
   - Answer: Replicas may temporarily differ but converge later. Useful for distributed systems where strong consistency
   is costly. The UI may need pending/stale indicators because replicas or async processors can lag behind writes.

86. SQL vs NoSQL?
   - Answer: SQL gives relational modeling, strong query semantics, joins, transactions. NoSQL often gives flexible
   schema, horizontal scaling patterns, or specialized access models. SQL fits relational data, joins, constraints,
   and transactions; NoSQL can fit flexible schemas or high-scale access patterns. Compare
   document/key-value/wide-column models with relational guarantees and query patterns.

87. What is an index?
   - Answer: Data structure that speeds reads by allowing lookup/sort/filter without scanning the whole table, at the
   cost of write overhead and storage. Indexes speed reads but cost storage and write performance, so they should
   match real query/filter/sort patterns.

88. What is a transaction?
   - Answer: A group of database operations executed with ACID properties: atomicity, consistency, isolation, durability.
   Transactions protect invariants with ACID semantics when multiple operations must succeed or fail together.

89. What is isolation level?
   - Answer: Defines how concurrent transactions see each other. Examples: read committed, repeatable read, serializable.
   Isolation levels trade concurrency for anomalies such as dirty reads, non-repeatable reads, and phantom reads.

90. What is a message queue?
   - Answer: A system for asynchronous communication between producers and consumers, improving decoupling, buffering,
   and retry handling. Queues decouple producers/consumers, absorb spikes, enable retries, and need idempotent
   consumers plus dead-letter handling.

## 4. Security And Authentication

91. Authentication vs authorization?
   - Answer: Authentication verifies who you are. Authorization decides what you can access. Authentication proves
   identity; authorization decides allowed resources/actions and must be enforced server-side. Authorization should be
   based on trusted claims/session and checked for every sensitive resource/action.

92. Session cookie auth vs JWT auth?
   - Answer: Cookie session stores state server-side and sends session ID. JWT stores signed claims
   client-side/statelessly. Cookies are easier to revoke server-side; JWTs scale statelessly but need careful
   expiry/revocation. HttpOnly Secure SameSite cookies reduce browser-token theft risk, but need CSRF protections and
   server-side session management. JWTs are stateless signed claims, but need short expiry, audience validation,
   rotation/revocation strategy, and careful storage.

93. Access token vs refresh token?
   - Answer: Access token is short-lived and used for APIs. Refresh token is longer-lived and used to obtain new access
   tokens. Access tokens should be short-lived and scoped to APIs/resources. Refresh tokens are high value, should be
   protected, rotated, and monitored for reuse.

94. Where should browser tokens be stored?
   - Answer: Prefer HttpOnly, Secure, SameSite cookies for sensitive tokens. Avoid localStorage for high-value tokens
   because XSS can read it. Prefer HttpOnly Secure SameSite cookies or a BFF session for high-value tokens;
   localStorage is vulnerable to XSS.

95. What is XSS?
   - Answer: Cross-site scripting lets attacker execute JS in a user's browser. Prevent with escaping, sanitization, CSP,
   avoiding unsafe HTML injection, and framework-safe rendering. React escaping helps, but dangerous HTML, unsafe
   markdown, third-party scripts, CSP, and sanitization still matter.

96. What is CSRF?
   - Answer: Cross-site request forgery tricks a browser into sending authenticated requests. Mitigate with SameSite
   cookies, CSRF tokens, checking origin/referer, and non-cookie bearer tokens where appropriate. CSRF abuses
   automatically attached credentials; SameSite, CSRF tokens, origin checks, and method semantics mitigate it.

97. Why does SameSite help?
   - Answer: It controls whether cookies are sent on cross-site requests. `Lax` or `Strict` reduces CSRF risk. SameSite
   controls cross-site cookie sending and reduces CSRF risk, especially Lax or Strict where product flow allows.

98. What is CSP?
   - Answer: Content Security Policy restricts what scripts/styles/images/connect sources can load, reducing XSS impact.
   CSP limits script/style/connect/frame sources and can reduce XSS blast radius; report-only mode helps rollout.

99. What is clickjacking?
   - Answer: Attacker embeds your page in a hidden/misleading frame. Prevent with `X-Frame-Options` or CSP
   `frame-ancestors`. Use CSP frame-ancestors or X-Frame-Options to prevent hostile framing of sensitive pages.

100. What is SQL injection?
   - Answer: Attacker alters SQL queries through untrusted input. Prevent with parameterized queries and avoiding
   string-concatenated SQL. SQL fits relational data, joins, constraints, and transactions; NoSQL can fit flexible
   schemas or high-scale access patterns. Parameterized queries and server-side validation matter; frontend validation
   is never a security boundary.

101. What is SSRF?
   - Answer: Server-side request forgery tricks a server into making requests to internal/external targets. Prevent with
   allowlists, network policies, URL validation, and metadata service protections. SSRF happens when a server fetches
   attacker-controlled URLs; use allowlists, network policy, metadata protections, and strict URL parsing.

102. What is open redirect?
   - Answer: App redirects to attacker-controlled URL. Prevent by validating redirect targets against allowlists or
   internal paths. Only allow relative or signed/allowlisted redirect targets, especially around login flows.

103. What is OAuth 2.0?
   - Answer: Authorization framework where a client obtains access tokens to access resources on behalf of a user or
   service. OAuth 2.0 is delegated authorization involving client, authorization server, resource server, scopes, and
   access tokens.

104. What is OIDC?
   - Answer: OpenID Connect adds identity/authentication on top of OAuth 2.0, including ID tokens and user identity
   claims. OIDC adds identity on top of OAuth with ID tokens and user claims.

105. What is PKCE?
   - Answer: Proof Key for Code Exchange protects public clients by binding auth code exchange to a client-generated
   verifier/challenge. PKCE protects public clients by binding the authorization code exchange to a verifier generated
   by the client.

106. What is the difference between ID token and access token?
   - Answer: ID token proves authentication to the client. Access token authorizes API access to a resource server.
   Access tokens should be short-lived and scoped to APIs/resources. ID tokens prove authentication to the client;
   access tokens authorize calls to resource servers.

107. How do you rotate refresh tokens?
   - Answer: Issue a new refresh token each use, invalidate old one, detect reuse as possible theft, and force
   re-authentication. Refresh tokens are high value, should be protected, rotated, and monitored for reuse. Rotate on
   every use, invalidate the old token, and treat reuse as theft of the token family.

108. How would you secure a WebSocket?
   - Answer: Use WSS, authenticate during handshake or initial message, validate origin, enforce authorization per
   channel, rate limit, heartbeat, close unauthorized connections. Secure WebSockets with WSS, authentication, origin
   checks, channel authorization, heartbeat, reconnect/backoff, and rate limits.

109. How do you handle tenant scoping?
   - Answer: Enforce tenant ID on server side from trusted auth claims/session, never only from client input. Check
   permissions on every query/resource. Tenant scope must come from trusted auth/session context, not editable client
   input, and must be included in cache keys and server queries.

110. How would you design frontend permission checks?
   - Answer: Use frontend checks for UX only. Server remains source of truth. Hide/disable UI based on permission model,
   but backend enforces all actions. Frontend permission checks are UX; backend policy is enforcement. Hide/disable
   actions but never rely on the browser.

111. How do you avoid leaking secrets in frontend apps?
   - Answer: Never ship private keys/tokens in JS bundles. Use backend/BFF for secret-bearing calls. Treat
   `NEXT_PUBLIC_*` as public. Anything in a frontend bundle is public; secret-bearing calls belong behind backend/BFF
   boundaries.

112. How do you protect logs and monitoring data?
   - Answer: redact PII/secrets, limit breadcrumbs, scrub request headers/bodies, enforce retention policies, and control
   access. Scrub tokens, passwords, PII, headers, and sensitive payloads; control retention and access.

113. How would you rate limit login?
   - Answer: Combine IP/user/device counters, exponential backoff, captcha after threshold, account lock with care, and
   monitoring for credential stuffing. Use server-side counters plus client UX throttling, exponential backoff,
   monitoring, and careful lockout behavior.

114. What is defense in depth?
   - Answer: Multiple independent controls so failure of one layer does not fully compromise the system. Layer
   independent controls so one failure does not compromise the whole system.

## 5. JavaScript Fundamentals

115. What are JavaScript primitive types?
   - Answer: string, number, bigint, boolean, undefined, symbol, null. Objects are non-primitive. Primitives are
   value-like, while objects/arrays are references; null is a historical typeof edge case.

116. `var` vs `let` vs `const`?
   - Answer: `var` is function-scoped and hoisted with undefined. `let` and `const` are block-scoped and have temporal
   dead zone. `const` prevents rebinding, not object mutation. Prefer const by default, let for reassignment, and
   avoid var because function scope and hoisting surprise people.

117. What is hoisting?
   - Answer: Declarations are processed before execution. Function declarations are callable before definition;
   `let/const` are hoisted but inaccessible before initialization. Function declarations are usable before definition;
   let/const are hoisted but blocked by the temporal dead zone.

118. What is closure?
   - Answer: A function retains access to variables from its lexical scope after that outer scope has returned. Closures
   retain lexical variables and power callbacks, hooks, debouncing, memoization, and private state; stale closures are
   the pitfall.

119. Common closure bug?
   - Answer: Loops with `var` share one binding; use `let` or create a new scope. Closures retain lexical variables and
   power callbacks, hooks, debouncing, memoization, and private state; stale closures are the pitfall.

120. What is the event loop?
   - Answer: JS runs on a call stack. Async callbacks are queued. The event loop moves tasks to the stack when empty.
   Microtasks usually run before the next macrotask/render opportunity. sync stack first, then microtasks such as
   promises, then macrotasks such as timers, with rendering opportunities between work.

121. Microtask vs macrotask?
   - Answer: Promises/queueMicrotask are microtasks. setTimeout, setInterval, I/O callbacks are macrotasks. Microtasks
   drain before next macrotask. Promise microtasks drain before the next macrotask, which can starve rendering if
   abused. Timers, I/O callbacks, and user events are macrotasks; they run after microtasks are drained.

122. `Promise.all` vs `Promise.allSettled`?
   - Answer: `all` rejects on first rejection. `allSettled` waits for all and returns status/value or reason. Promise.all
   preserves result order and rejects on first failure; allSettled is better for partial results.

123. `==` vs `===`?
   - Answer: `==` performs type coercion. `===` compares without coercion except normal reference/value rules. Strict
   equality avoids coercion surprises such as false, 0, empty string, null, and undefined.

124. What is prototypal inheritance?
   - Answer: Objects can delegate property lookup to a prototype object. Classes are syntax over prototypes. Property
   lookup delegates through prototypes; class syntax sits on top of this model.

125. What is `this`?
   - Answer: Runtime binding based on call site for normal functions; lexical for arrow functions. Normal functions bind
   this from call site; arrow functions capture lexical this.

126. What is debouncing?
   - Answer: Delay execution until events stop firing for a period. Useful for search input. Debounce waits for a quiet
   period, ideal for search input and resize completion.

127. What is throttling?
   - Answer: Limit execution to at most once per interval. Useful for scroll/resize handlers. Throttle limits execution
   frequency, useful for scroll, resize, drag, or telemetry streams.

128. Shallow copy vs deep copy?
   - Answer: Shallow copy duplicates top-level references; nested objects remain shared. Deep copy recursively copies
   nested structures. Shallow copies share nested objects, which can break React state expectations if nested values
   mutate. Deep copy recursively copies nested data but must handle dates, cycles, functions, and class instances
   carefully.

129. What is optional chaining?
   - Answer: `obj?.a?.b` safely returns undefined if any part is nullish. Optional chaining prevents null/undefined
   property crashes but should not hide required-data bugs silently.

130. What is nullish coalescing?
   - Answer: `a ?? b` returns `b` only when `a` is null or undefined, unlike `||` which treats falsy values as fallback.
   Nullish coalescing preserves valid falsy values like 0, false, and empty string.

131. What is tree shaking?
   - Answer: Bundlers remove unused exports when modules are statically analyzable, especially ES modules. Works best
   with static ES modules and side-effect-free packages; CommonJS and package side effects limit it.

132. What is memory leak in JS?
   - Answer: Objects remain reachable unintentionally via timers, closures, global refs, event listeners, caches, or
   detached DOM nodes. Look for timers, listeners, subscriptions, global refs, unbounded caches, detached DOM nodes,
   and closures retaining large values.

133. How do you debug a memory leak?
   - Answer: Chrome heap snapshots, allocation timeline, check detached nodes, event listeners, subscriptions, long-lived
   caches. Look for timers, listeners, subscriptions, global refs, unbounded caches, detached DOM nodes, and closures
   retaining large values.

134. What is a service worker?
   - Answer: Background script that can intercept network requests, cache assets, enable offline support, and handle
   push/background sync. Service workers intercept requests, cache assets, enable offline/push, and need careful cache
   invalidation.

## 6. TypeScript

135. Why TypeScript?
   - Answer: Static typing catches errors earlier, documents contracts, improves refactoring, editor support, and
   large-codebase maintainability. Use TypeScript to make contracts explicit and catch refactor mistakes before
   runtime.

136. `interface` vs `type`?
   - Answer: Both model shapes. Interfaces can merge declarations and are commonly used for object contracts. Types can
   express unions, primitives, tuples, mapped/conditional types. Interfaces are good object contracts and can merge;
   type aliases handle unions, tuples, mapped and conditional types.

137. What is a union type?
   - Answer: A value can be one of several types, e.g. `string | number`. Unions model one-of-many values and are useful
   for loading/success/error states.

138. What is a discriminated union?
   - Answer: Union members share a literal discriminant field, allowing safe narrowing in switches. Discriminated unions
   use a literal tag to make narrowing and exhaustive checks reliable.

139. What is type narrowing?
   - Answer: TypeScript refines a type based on runtime checks like `typeof`, `in`, equality, or custom type guards.
   Narrow with typeof, in, equality, user-defined guards, or schema validation at trust boundaries.

140. What is `unknown` vs `any`?
   - Answer: `any` disables type safety. `unknown` forces validation/narrowing before use. unknown forces validation
   before use; any turns off checking and should be localized.

141. What is `never`?
   - Answer: Type representing impossible values. Useful for exhaustive checks. never represents impossible values and is
   useful for exhaustive switch checks.

142. What are generics?
   - Answer: Type parameters that let functions/classes/components preserve type relationships without losing
   specificity. Generics preserve type relationships, such as API response data or reusable hooks/components.

143. Example of generic API response type?
   - Answer: `type ApiResponse<T> = { data: T; error?: string }`.

144. What is `keyof`?
   - Answer: Produces union of property names of a type. keyof creates a union of property names and helps with type-safe
   table columns, form fields, and accessors.

145. What is mapped type?
   - Answer: Creates a type by iterating over keys, e.g. `Partial<T>`. Mapped types transform properties across keys,
   powering utilities such as Partial and form error maps.

146. What is conditional type?
   - Answer: Type-level if expression, e.g. `T extends string ? A: B`. Conditional types are type-level if statements;
   useful but easy to overcomplicate.

147. What does `as const` do?
   - Answer: Narrows values to literal readonly types. as const narrows values to readonly literals, useful for action
   names, route config, and discriminants.

148. What is type assertion?
   - Answer: Tells compiler to treat a value as a type. It does not change runtime value, so use carefully. Assertions do
   not validate runtime data; prefer guards/schemas when handling external JSON.

149. How do you type React props?
   - Answer: Define explicit `type Props = {... }`; include children only when needed; avoid overly broad `React.FC` if
   project style avoids it. Type props explicitly, model variants with discriminated unions, and avoid overly broad
   component contracts.

150. How do you type API data safely?
   - Answer: TypeScript types plus runtime validation for external data, e.g. Zod or manual guards, because external JSON
   is untrusted. External JSON is untrusted; combine TypeScript types with runtime validation or generated clients.

151. How do you avoid overengineering TS types?
   - Answer: Prefer readable domain types and simple generics. Use advanced types only when they remove real duplication
   or prevent real mistakes.

152. What is module augmentation?
   - Answer: Extending types from another module, often for framework/library customization.

153. What are project references?
   - Answer: TypeScript feature for splitting large projects into smaller buildable units, improving monorepo typecheck
   performance. Project references split TypeScript monorepos into buildable units and improve incremental typecheck
   performance.

154. What TS compiler options matter most?
   - Answer: `strict`, `noImplicitAny`, `strictNullChecks`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`
   depending on maturity. strict, strictNullChecks, noImplicitAny, noUncheckedIndexedAccess, and
   exactOptionalPropertyTypes are high-signal options.

## 7. React And Frontend Architecture

155. What is React's mental model?
   - Answer: UI is a function of state. React renders component trees, compares changes, and updates the DOM efficiently.
   I connect the concept to user-visible behavior: predictable state, correct rendering, accessibility, performance,
   and maintainable component ownership.

156. What is reconciliation?
   - Answer: React compares previous and next element trees to decide what DOM updates are needed. I connect the concept
   to user-visible behavior: predictable state, correct rendering, accessibility, performance, and maintainable
   component ownership. Stable identity helps React preserve state and update the DOM efficiently.

157. Why are keys important?
   - Answer: Keys let React preserve identity across list changes. Bad keys cause incorrect state reuse and extra
   rerenders. I connect the concept to user-visible behavior: predictable state, correct rendering, accessibility,
   performance, and maintainable component ownership. Use stable domain IDs for dynamic lists; bad keys cause wrong
   state reuse and extra renders.

158. Why is index as key risky?
   - Answer: Reordering/inserting/removing items can attach old component state to the wrong item. I connect the concept
   to user-visible behavior: predictable state, correct rendering, accessibility, performance, and maintainable
   component ownership. Indexes speed reads but cost storage and write performance, so they should match real
   query/filter/sort patterns. Index keys are risky when items insert, remove, sort, or filter because state can
   attach to the wrong row.

159. Controlled vs uncontrolled input?
   - Answer: Controlled input value is driven by React state. Uncontrolled input stores value in the DOM and is read via
   ref or form submission. I connect the concept to user-visible behavior: predictable state, correct rendering,
   accessibility, performance, and maintainable component ownership. Controlled inputs make validation and derived UI
   easier; uncontrolled inputs can be simpler for basic forms. Reduce long tasks, split work, optimize handlers, avoid
   unnecessary rerenders, and move heavy compute off the main thread.

160. `useEffect` vs `useLayoutEffect`?
   - Answer: `useEffect` runs after paint. `useLayoutEffect` runs synchronously after DOM mutation before paint, useful
   for layout measurement but can block rendering. I connect the concept to user-visible behavior: predictable state,
   correct rendering, accessibility, performance, and maintainable component ownership. Effects synchronize with
   external systems; avoid using them for pure derived state and always handle cleanup/races. useLayoutEffect blocks
   paint and should be reserved for layout measurement or flicker prevention.

161. Common `useEffect` mistakes?
   - Answer: missing dependencies, derived state in effects, no cleanup, async race conditions, fetching without
   cancellation/stale guards. I connect the concept to user-visible behavior: predictable state, correct rendering,
   accessibility, performance, and maintainable component ownership. Effects synchronize with external systems; avoid
   using them for pure derived state and always handle cleanup/races.

162. How do you avoid stale closures?
   - Answer: include dependencies, use functional state updates, refs for mutable latest values, or stable callbacks
   where appropriate. I connect the concept to user-visible behavior: predictable state, correct rendering,
   accessibility, performance, and maintainable component ownership. Closures retain lexical variables and power
   callbacks, hooks, debouncing, memoization, and private state; stale closures are the pitfall. Fix with correct
   dependencies, functional updates, refs for latest mutable values, or moving logic into the event path.

163. What is React Strict Mode?
   - Answer: Development mode checks that intentionally double-invoke certain lifecycle/effect paths to expose unsafe
   side effects. I connect the concept to user-visible behavior: predictable state, correct rendering, accessibility,
   performance, and maintainable component ownership. Strict Mode surfaces unsafe side effects and missing cleanup
   through extra development checks.

164. What is memoization in React?
   - Answer: `React.memo`, `useMemo`, `useCallback` can avoid expensive recalculations/rerenders when dependencies are
   stable. I connect the concept to user-visible behavior: predictable state, correct rendering, accessibility,
   performance, and maintainable component ownership. Memoization helps expensive calculations or referential
   stability, but adds overhead and complexity. Memoization is top-down caching; tabulation is bottom-up iteration.

165. When should you not memoize?
   - Answer: When computation is cheap, dependencies always change, or added complexity outweighs performance benefit. I
   connect the concept to user-visible behavior: predictable state, correct rendering, accessibility, performance, and
   maintainable component ownership.

166. How do you debug unnecessary rerenders?
   - Answer: React DevTools Profiler, why-did-you-render, checking prop identity, context changes, state location, memo
   boundaries. I connect the concept to user-visible behavior: predictable state, correct rendering, accessibility,
   performance, and maintainable component ownership. Use React Profiler, prop identity inspection, state boundary
   cleanup, and context splitting before adding memo everywhere.

167. What is context good for?
   - Answer: Sharing low-frequency global-ish values like theme, auth user, locale. Avoid using one huge frequently
   changing context for everything. I connect the concept to user-visible behavior: predictable state, correct
   rendering, accessibility, performance, and maintainable component ownership. Context fits low-frequency app-wide
   values; high-frequency server data often belongs in a query cache or local state.

168. Redux vs TanStack Query?
   - Answer: Redux manages client/application state. TanStack Query manages server state: fetching, caching, refetching,
   invalidation, loading/error states. I connect the concept to user-visible behavior: predictable state, correct
   rendering, accessibility, performance, and maintainable component ownership. Redux is useful for complex client
   state and workflows; not every server response belongs there. TanStack Query manages server state, caching,
   retries, invalidation, background refresh, and mutation workflows.

169. When use Redux?
   - Answer: Complex client state, cross-page workflows, event-driven state, undo/redo, or when project already has Redux
   patterns. I connect the concept to user-visible behavior: predictable state, correct rendering, accessibility,
   performance, and maintainable component ownership. Redux is useful for complex client state and workflows; not
   every server response belongs there.

170. When use TanStack Query?
   - Answer: Remote data fetching with caching, mutations, invalidation, retries, pagination, background refetching. I
   connect the concept to user-visible behavior: predictable state, correct rendering, accessibility, performance, and
   maintainable component ownership. TanStack Query manages server state, caching, retries, invalidation, background
   refresh, and mutation workflows.

171. How does optimistic update work?
   - Answer: Update UI/cache before server confirms, rollback on failure, invalidate/refetch to reconcile. I connect the
   concept to user-visible behavior: predictable state, correct rendering, accessibility, performance, and
   maintainable component ownership. Optimistic updates need rollback, conflict handling, duplicate-submit protection,
   and final invalidation/refetch.

172. How do you handle API errors in React?
   - Answer: Local form errors for expected validation, toast/banner for action failures, error boundaries for render
   failures, logging/monitoring for unexpected errors. I connect the concept to user-visible behavior: predictable
   state, correct rendering, accessibility, performance, and maintainable component ownership. Normalize errors, show
   actionable messages, preserve user input, allow safe retry, and log safe context.

173. What are error boundaries?
   - Answer: React components that catch render/lifecycle errors below them and show fallback UI. They do not catch async
   event handler errors. I connect the concept to user-visible behavior: predictable state, correct rendering,
   accessibility, performance, and maintainable component ownership. Error boundaries catch render errors below them,
   not arbitrary async/event errors unless surfaced into render state.

174. What is Suspense?
   - Answer: React mechanism for declaratively waiting on async resources/code-split components and showing fallback UI.
   I connect the concept to user-visible behavior: predictable state, correct rendering, accessibility, performance,
   and maintainable component ownership. Suspense coordinates loading boundaries and code/data loading but needs
   careful fallback placement.

175. What is code splitting?
   - Answer: Splitting bundle into chunks loaded on demand, reducing initial JS. I connect the concept to user-visible
   behavior: predictable state, correct rendering, accessibility, performance, and maintainable component ownership.
   Split by route or heavy feature, then prefetch likely next interactions to avoid later delays.

176. SPA vs SSR vs SSG?
   - Answer: SPA renders mostly in browser. SSR renders per request on server. SSG pre-renders at build time. Tradeoffs:
   SEO, freshness, latency, infrastructure, interactivity. I connect the concept to user-visible behavior: predictable
   state, correct rendering, accessibility, performance, and maintainable component ownership. SPA favors rich client
   interactivity; SSR improves first render/SEO; SSG works for mostly static content.

177. What is hydration?
   - Answer: Client React attaches event handlers/state to server-rendered HTML. I connect the concept to user-visible
   behavior: predictable state, correct rendering, accessibility, performance, and maintainable component ownership.
   Hydration attaches client behavior to server HTML; mismatches come from nondeterministic render output.

178. What causes hydration mismatch?
   - Answer: Rendering different HTML on server and client due to dates, random values, browser-only APIs, locale, auth
   state, or nondeterminism. I connect the concept to user-visible behavior: predictable state, correct rendering,
   accessibility, performance, and maintainable component ownership. Hydration attaches client behavior to server
   HTML; mismatches come from nondeterministic render output.

179. Next.js App Router concept?
   - Answer: File-based routing with layouts, server components, client components, nested routes, streaming, and data
   fetching patterns. I connect the concept to user-visible behavior: predictable state, correct rendering,
   accessibility, performance, and maintainable component ownership. Separate server data loading from client
   interactivity and keep client components only where browser APIs/state/effects are needed.

180. Server Components vs Client Components?
   - Answer: Server Components render on server and can access server resources without shipping JS. Client Components
   run in browser and handle interactivity/hooks/browser APIs. I connect the concept to user-visible behavior:
   predictable state, correct rendering, accessibility, performance, and maintainable component ownership. Server
   Components reduce client JS and can access server data directly, while Client Components handle interaction.

181. How do you decide component boundaries?
   - Answer: Based on responsibility, reuse, state ownership, testability, performance, and whether it needs browser
   interactivity. I connect the concept to user-visible behavior: predictable state, correct rendering, accessibility,
   performance, and maintainable component ownership. Choose boundaries around ownership, state locality, reuse,
   rendering cost, and testability.

182. What is a design system?
   - Answer: Shared components, tokens, patterns, and guidelines for consistent UI and faster development. I connect the
   concept to user-visible behavior: predictable state, correct rendering, accessibility, performance, and
   maintainable component ownership. A design system should provide accessible primitives, tokens, patterns, and
   documentation, not only colors.

183. How do you build accessible components?
   - Answer: semantic HTML, labels, keyboard support, focus states, ARIA only when needed, color contrast, screen reader
   testing. I connect the concept to user-visible behavior: predictable state, correct rendering, accessibility,
   performance, and maintainable component ownership. Use semantic HTML, keyboard support, focus management, labels,
   contrast, and ARIA only when needed.

184. How do you handle forms?
   - Answer: schema validation, accessible labels/errors, touched/dirty states, submission state, server validation
   mapping, idempotency where needed. I connect the concept to user-visible behavior: predictable state, correct
   rendering, accessibility, performance, and maintainable component ownership. Handle validation, dirty/submitting
   state, error placement, accessibility, and preserving user input on failure.

185. How do you structure a frontend project?
   - Answer: Follow existing patterns. Common options: feature-based modules, shared UI/components, API clients, hooks,
   state, routes, tests. I connect the concept to user-visible behavior: predictable state, correct rendering,
   accessibility, performance, and maintainable component ownership.

186. What is microfrontend?
   - Answer: Independently developed/deployed frontend slices composed into one app. Useful for autonomy but adds
   integration, dependency, UX, and performance complexity. I connect the concept to user-visible behavior:
   predictable state, correct rendering, accessibility, performance, and maintainable component ownership.
   Microfrontends enable independent ownership/deploys but add routing, auth, design-system, performance, and
   observability complexity.

187. When would you avoid microfrontends?
   - Answer: Small team/product, high need for consistent UX, low deployment independence, or when a modular monolith is
   enough. I connect the concept to user-visible behavior: predictable state, correct rendering, accessibility,
   performance, and maintainable component ownership. Microfrontends enable independent ownership/deploys but add
   routing, auth, design-system, performance, and observability complexity.

188. What is Web Component interoperability with React?
   - Answer: React can render custom elements, pass attributes/properties with care, and listen to custom events via refs
   or wrappers. I connect the concept to user-visible behavior: predictable state, correct rendering, accessibility,
   performance, and maintainable component ownership.

189. How do you manage feature flags?
   - Answer: Central service/config, typed flags, default behavior, rollout targeting, kill switch, cleanup after
   rollout. I connect the concept to user-visible behavior: predictable state, correct rendering, accessibility,
   performance, and maintainable component ownership. Flags need ownership, defaults, exposure logging, cleanup dates,
   and rollback strategy.

190. How do you handle frontend logging?
   - Answer: structured events, levels, context, redaction, sampling, correlation IDs, and integration with Sentry/OTel.
   I connect the concept to user-visible behavior: predictable state, correct rendering, accessibility, performance,
   and maintainable component ownership.

## 8. Performance, Optimization, And Scale

191. What are Core Web Vitals?
   - Answer: LCP measures loading, INP measures interaction responsiveness, CLS measures layout stability. Performance
   work starts with measurement, identifies the bottleneck, applies the smallest useful change, and verifies with the
   same metric under realistic conditions. Define LCP, INP, and CLS as user-centered measures of loading,
   responsiveness, and layout stability.

192. How do you improve LCP?
   - Answer: optimize server response, critical CSS, image sizing/compression/preload, reduce render-blocking JS/CSS, use
   CDN/cache. Performance work starts with measurement, identifies the bottleneck, applies the smallest useful change,
   and verifies with the same metric under realistic conditions. Improve server response, critical path, hero
   image/font loading, render-blocking JS/CSS, and above-fold content.

193. How do you improve INP?
   - Answer: reduce long tasks, split work, debounce expensive handlers, memoize where useful, virtualize lists, avoid
   blocking main thread. Performance work starts with measurement, identifies the bottleneck, applies the smallest
   useful change, and verifies with the same metric under realistic conditions. Reduce long tasks, split work,
   optimize handlers, avoid unnecessary rerenders, and move heavy compute off the main thread.

194. How do you improve CLS?
   - Answer: reserve dimensions for images/ads/dynamic content, avoid inserting content above existing content, use
   stable fonts/layout. Performance work starts with measurement, identifies the bottleneck, applies the smallest
   useful change, and verifies with the same metric under realistic conditions. Reserve dimensions, avoid late content
   insertion, stabilize fonts/media/ads, and do not shift controls during interaction.

195. How do you profile frontend performance?
   - Answer: Chrome Performance panel, React Profiler, Lighthouse, Web Vitals, bundle analyzer, production RUM.
   Performance work starts with measurement, identifies the bottleneck, applies the smallest useful change, and
   verifies with the same metric under realistic conditions. Use Chrome Performance, React Profiler, Web Vitals,
   network waterfall, bundle analyzer, and production telemetry.

196. What is a long task?
   - Answer: Main-thread task over about 50ms that can delay input and rendering. Performance work starts with
   measurement, identifies the bottleneck, applies the smallest useful change, and verifies with the same metric under
   realistic conditions. A long task blocks the main thread for roughly 50ms+ and causes jank or delayed input.

197. How do you handle large lists?
   - Answer: virtualization/windowing, pagination/infinite scroll, memoized row rendering, stable keys, avoid heavy
   per-row work. Performance work starts with measurement, identifies the bottleneck, applies the smallest useful
   change, and verifies with the same metric under realistic conditions. Use pagination or virtualization, stable
   keys, overscan, and accessibility-aware keyboard/focus behavior.

198. How do you optimize bundle size?
   - Answer: code splitting, tree shaking, dependency audit, dynamic imports, remove duplicate deps, lighter libraries,
   analyze chunks. Performance work starts with measurement, identifies the bottleneck, applies the smallest useful
   change, and verifies with the same metric under realistic conditions. Use code splitting, tree shaking, dependency
   audits, modern output, and avoid duplicate libraries.

199. How do you optimize images?
   - Answer: correct dimensions, modern formats, compression, lazy loading, responsive `srcset`, CDN transformations.
   Performance work starts with measurement, identifies the bottleneck, applies the smallest useful change, and
   verifies with the same metric under realistic conditions. Use correct dimensions, responsive srcset, modern
   formats, compression, lazy loading, and priority for above-fold images.

200. How do you optimize API-heavy pages?
   - Answer: parallelize independent requests, batch when useful, cache server state, avoid waterfalls, pagination,
   prefetch, skeleton states. Performance work starts with measurement, identifies the bottleneck, applies the
   smallest useful change, and verifies with the same metric under realistic conditions. Parallelize independent
   requests, avoid waterfalls, cache data, and consider BFF aggregation for screen-shaped data.

201. What is request waterfall?
   - Answer: Sequential network requests where later requests wait unnecessarily for earlier ones, increasing total load
   time. Performance work starts with measurement, identifies the bottleneck, applies the smallest useful change, and
   verifies with the same metric under realistic conditions. Waterfalls happen when one request unnecessarily waits
   for another; fix with parallelism, preloading, or API composition.

202. What is caching strategy for frontend data?
   - Answer: Determine freshness, invalidation triggers, stale-while-revalidate, optimistic updates, cache keys, and
   permission/tenant boundaries. Performance work starts with measurement, identifies the bottleneck, applies the
   smallest useful change, and verifies with the same metric under realistic conditions. Cache-Control, ETag,
   Last-Modified, immutable assets, stale-while-revalidate, and invalidation.

203. What is stale-while-revalidate?
   - Answer: Serve cached data immediately while refetching in background to update cache. Performance work starts with
   measurement, identifies the bottleneck, applies the smallest useful change, and verifies with the same metric under
   realistic conditions. Show cached data quickly, refresh in background, and communicate stale/syncing states when
   correctness matters.

204. How do you avoid overfetching?
   - Answer: API field selection, endpoint design, pagination, filtering server-side, GraphQL fragments or REST query
   params when appropriate. Performance work starts with measurement, identifies the bottleneck, applies the smallest
   useful change, and verifies with the same metric under realistic conditions. Overfetching wastes network and render
   time; shape responses, paginate, or select fields deliberately.

205. How do you avoid underfetching?
   - Answer: Design endpoints/query composition so page requirements can be fetched without many sequential calls.
   Performance work starts with measurement, identifies the bottleneck, applies the smallest useful change, and
   verifies with the same metric under realistic conditions. Underfetching creates extra round trips; compose
   endpoints or batch related data when the screen needs it together.

206. What is backpressure?
   - Answer: Mechanism to prevent producers from overwhelming consumers, e.g. rate limiting, queues, flow control.
   Performance work starts with measurement, identifies the bottleneck, applies the smallest useful change, and
   verifies with the same metric under realistic conditions. When producers outpace consumers, coalesce, drop, buffer,
   or slow updates so the UI remains responsive.

207. How do you optimize WebSocket UI updates?
   - Answer: batch updates, throttle rendering, normalize data, avoid full-list rerenders, use incremental patching,
   handle reconnect/resync. Performance work starts with measurement, identifies the bottleneck, applies the smallest
   useful change, and verifies with the same metric under realistic conditions. Secure WebSockets with WSS,
   authentication, origin checks, channel authorization, heartbeat, reconnect/backoff, and rate limits. Batch updates,
   coalesce bursts, cap history, pause hidden views when safe, and render incrementally.

208. How do you scale frontend build systems?
   - Answer: task caching, incremental builds, project references, affected-package detection, parallelization,
   dependency hygiene, remote cache. Performance work starts with measurement, identifies the bottleneck, applies the
   smallest useful change, and verifies with the same metric under realistic conditions. Use incremental compilation,
   dependency graphs, caching, parallelism, and package boundaries that do not invalidate everything.

209. How do you measure if an optimization worked?
   - Answer: define metric and baseline, change one variable when possible, measure locally and in production/RUM, check
   regressions. Performance work starts with measurement, identifies the bottleneck, applies the smallest useful
   change, and verifies with the same metric under realistic conditions.

210. Performance tradeoff of SSR?
   - Answer: Faster first HTML/SEO but more server complexity and possible hydration cost. Client JS still matters.
   Performance work starts with measurement, identifies the bottleneck, applies the smallest useful change, and
   verifies with the same metric under realistic conditions.

211. What is TTFB?
   - Answer: Time to first byte from request start to first response byte. Affected by network, server processing,
   CDN/cache. Performance work starts with measurement, identifies the bottleneck, applies the smallest useful change,
   and verifies with the same metric under realistic conditions. TTFB includes network setup plus server processing
   and is affected by caching, edge location, and backend dependencies.

212. What is lazy loading?
   - Answer: Loading resources only when needed, such as below-the-fold images or route chunks. Performance work starts
   with measurement, identifies the bottleneck, applies the smallest useful change, and verifies with the same metric
   under realistic conditions. Lazy load non-critical code/media, but avoid delaying features the user immediately
   needs.

213. What is prefetching?
   - Answer: Loading likely-needed resources before the user explicitly asks, trading bandwidth for perceived speed.
   Performance work starts with measurement, identifies the bottleneck, applies the smallest useful change, and
   verifies with the same metric under realistic conditions. Prefetch likely next routes/data while respecting
   bandwidth, device constraints, and cache freshness.

214. What causes memory pressure in a React app?
   - Answer: retained large data sets, event listeners, unbounded caches, timers, subscriptions, detached DOM, heavy
   client state. Performance work starts with measurement, identifies the bottleneck, applies the smallest useful
   change, and verifies with the same metric under realistic conditions.

## 9. DSA And Problem-Solving

215. How do you approach a coding problem?
   - Answer: Clarify input/output/constraints, discuss brute force, improve with data structures, analyze complexity,
   code cleanly, test edge cases.

216. Array vs linked list?
   - Answer: Arrays provide O(1) indexing and cache locality; inserts/deletes in middle cost O(n). Linked lists have O(1)
   insertion with node reference but O(n) access and poor cache locality. Arrays have random access and cache
   locality; linked lists make known-node insertion/removal cheap but lose indexing.

217. Stack use cases?
   - Answer: parentheses validation, DFS, undo, call stack, monotonic stack. Stacks solve LIFO problems such as
   parentheses, undo, DFS, and monotonic stacks.

218. Queue use cases?
   - Answer: BFS, task scheduling, rate limiting, producer-consumer. Queues solve FIFO flows such as BFS, job processing,
   rate limits, and producer/consumer buffers.

219. Hash map complexity?
   - Answer: Average O(1) insert/lookup/delete; worst-case O(n) with collisions, though modern implementations mitigate.
   Hash maps give average O(1) lookup and fit counting, grouping, complements, and deduplication.

220. Set use cases?
   - Answer: uniqueness, membership checks, duplicate detection, visited nodes. Sets fit membership checks, duplicate
   detection, and sliding-window uniqueness.

221. Binary search requirement?
   - Answer: Search space must be monotonic or sorted; can be over values, not only arrays. Requires sorted or monotonic
   structure; define low/high invariants carefully.

222. BFS vs DFS?
   - Answer: BFS explores level by level and finds shortest path in unweighted graphs. DFS explores deep paths and is
   useful for traversal, cycle detection, topological sort. BFS is level-order and finds shortest paths in unweighted
   graphs. DFS fits traversal, backtracking, connected components, and cycle detection.

223. What is topological sort?
   - Answer: Ordering directed acyclic graph nodes so dependencies come before dependents. Topological sort orders DAG
   dependencies; cycles mean no valid ordering.

224. How detect cycle in directed graph?
   - Answer: DFS with visiting/visited states or Kahn's algorithm checking if processed count is less than node count.
   Use DFS colors or Kahn in-degree counting for directed cycle detection.

225. What is dynamic programming?
   - Answer: Solving problems with overlapping subproblems and optimal substructure by memoization or tabulation. DP
   applies when subproblems overlap and optimal results compose.

226. Memoization vs tabulation?
   - Answer: Memoization is top-down recursion with cache. Tabulation is bottom-up iterative filling. Memoization helps
   expensive calculations or referential stability, but adds overhead and complexity. Memoization is top-down caching;
   tabulation is bottom-up iteration.

227. Sliding window pattern?
   - Answer: Maintain a moving range to solve contiguous subarray/string problems efficiently. Sliding window maintains a
   contiguous invariant while moving left/right pointers.

228. Two pointers pattern?
   - Answer: Use two indexes moving through data, often for sorted arrays, partitioning, or pairs. Two pointers reduce
   nested loops, often on sorted arrays or range problems.

229. Prefix sum?
   - Answer: Precompute cumulative sums to answer range sum queries quickly. Prefix sums preprocess cumulative values for
   fast range queries and combine well with hash maps.

230. Trie use case?
   - Answer: Prefix search, autocomplete, dictionary lookup. Tries trade memory for fast prefix search and autocomplete.

231. Heap use case?
   - Answer: priority queue, top K, scheduling, merging sorted lists. Heaps support efficient min/max access for top-k,
   scheduling, and priority queues.

232. Monotonic stack use case?
   - Answer: next greater/smaller element, histogram rectangle, stock span. Stacks solve LIFO problems such as
   parentheses, undo, DFS, and monotonic stacks. Monotonic stacks keep ordered candidates for next greater/smaller and
   span problems.

233. Union Find use case?
   - Answer: dynamic connectivity, connected components, Kruskal's MST. Union Find handles connectivity with path
   compression and union by rank/size.

234. Big O of sorting?
   - Answer: Comparison sorts are generally O(n log n) lower bound. Counting/radix can be linear under constraints.
   General comparison sorting is O(n log n); stability preserves original order among equal keys.

235. Stable sort?
   - Answer: Preserves relative order of equal elements. Clarify server/client sorting/filtering/pagination, keep
   URL/cache keys aligned, and handle empty/loading/error states.

236. Recursion risks?
   - Answer: stack overflow, repeated work without memoization, unclear base cases. Recursion risks stack overflow,
   repeated work, and fragile base cases; memoization or iteration can help.

237. How do you test DSA solutions?
   - Answer: empty input, single item, duplicates, negative values, sorted/reversed, max constraints, invalid cases if
   allowed.

238. Problem: valid parentheses.
   - Answer: Use stack; push opening brackets, pop and match on closing. Valid if stack empty at end. O(n) time, O(n)
   space. Use a stack, push opening brackets, pop on matching close, reject mismatches and leftover opens.

239. Problem: two sum.
   - Answer: Iterate numbers, store value->index in map, check target-current. O(n) time, O(n) space. Use a hash map from
   value to index, checking complement before insert to avoid using the same element twice.

240. Problem: merge intervals.
   - Answer: Sort by start, iterate, merge when next start <= current end. O(n log n). Sort by start, then merge if the
   next start is within the current end.

241. Problem: longest substring without repeating chars.
   - Answer: Sliding window with char->last index, move left past duplicates. O(n). Use sliding window plus a map/set of
   last seen positions to maintain uniqueness.

242. Problem: LRU cache.
   - Answer: Hash map plus doubly linked list. Map gives node lookup; list maintains recency. Get/put O(1). Use hash map
   plus doubly linked list or ordered map for O(1) get/put and recency updates.

243. Problem: debounce function.
   - Answer: Keep timer in closure. Clear previous timer, schedule new call after delay.

244. Problem: throttle function.
   - Answer: Track last execution time or timer. Execute at most once per interval.

245. Problem: flatten nested array.
   - Answer: DFS recursion/stack. Watch for max depth and non-array values. Clarify depth and types, then use recursion
   or an explicit stack.

246. Problem: deep equality.
   - Answer: Compare primitives, arrays lengths/items, object keys/values, handle null, dates/maps if required, and
   cycles if required. Handle primitives, arrays, objects, null, dates, key length/order, and cycles if required.

247. Problem: implement Promise.all.
   - Answer: Return new Promise, resolve values by index, count completions, reject immediately on first rejection.
   Promise.all preserves result order and rejects on first failure; allSettled is better for partial results.

248. Problem: retry async function.
   - Answer: Loop attempts, catch errors, delay/backoff, stop after max attempts, preserve final error. Include max
   attempts, backoff, retryable error rules, cancellation, and final error propagation.

249. Problem: build tree from flat list.
   - Answer: Map id->node, then attach each node to parent children; roots have no parent. O(n). Build id map first, then
   attach children in O(n), handling missing parents and cycles if required.

250. Problem: search suggestions.
   - Answer: Trie for prefix lookup or sorted array with binary search range; choose based on update/query pattern. A
   trie, sorted list with binary search, or backend search endpoint can fit depending on data size and freshness.

## 10. Coding Questions Likely For This Role

251. Implement a React search box with debounced API calls.
   - Answer: Use controlled input, `useEffect` with debounce timer, abort previous fetch, show loading/error/empty
   states, cache if needed. I describe the implementation plan before coding: state model, API contract, async
   behavior, accessibility, error states, tests, and production concerns. Use local input state, debounced query,
   abort/ignore stale requests, loading/error/empty states, and caching for repeated queries.

252. Build an infinite scrolling list.
   - Answer: Use cursor pagination, `IntersectionObserver`, TanStack Query `useInfiniteQuery`, stable keys, duplicate
   prevention, loading/error/retry. I describe the implementation plan before coding: state model, API contract, async
   behavior, accessibility, error states, tests, and production concerns. Use cursor pagination, IntersectionObserver,
   deduplication, end state, scroll restoration, and virtualization when needed.

253. Implement a table with sorting/filtering/pagination.
   - Answer: Keep query state in URL or component state, server-side for large data, use stable sort, debounced filters,
   loading states. I describe the implementation plan before coding: state model, API contract, async behavior,
   accessibility, error states, tests, and production concerns. General comparison sorting is O(n log n); stability
   preserves original order among equal keys. Clarify server/client sorting/filtering/pagination, keep URL/cache keys
   aligned, and handle empty/loading/error states.

254. Implement an auth guard in React/Next.js.
   - Answer: Server-side/session check when possible, redirect unauthenticated users, avoid flashing protected content,
   enforce server authorization. I describe the implementation plan before coding: state model, API contract, async
   behavior, accessibility, error states, tests, and production concerns. Avoid flashing protected content, preserve
   return URL, handle loading/expired sessions, and rely on server enforcement.

255. Implement role-based UI permissions.
   - Answer: Fetch permission claims, central helper/hook, hide/disable actions, but backend must enforce. I describe the
   implementation plan before coding: state model, API contract, async behavior, accessibility, error states, tests,
   and production concerns. Frontend permission checks are UX; backend policy is enforcement. Hide/disable actions but
   never rely on the browser. Centralize permission checks, explain disabled actions, and keep server policy
   authoritative.

256. Implement a toast system.
   - Answer: Context/provider or external store, queue items with IDs, auto-dismiss timers, manual dismiss, accessibility
   live region. I describe the implementation plan before coding: state model, API contract, async behavior,
   accessibility, error states, tests, and production concerns. Use provider/queue, variants, auto-dismiss, pause
   behavior, and accessible live regions.

257. Implement modal with accessibility.
   - Answer: Portal, focus trap, restore focus, Escape close, backdrop click if desired, `aria-modal`, labelled title,
   prevent background scroll. I describe the implementation plan before coding: state model, API contract, async
   behavior, accessibility, error states, tests, and production concerns. Use portal, focus trap, Escape handling,
   aria-modal, labelled title, inert background, scroll lock, and restore focus. Test keyboard navigation, labels,
   focus, roles, contrast where possible, and use axe-style tooling plus manual checks.

258. Implement optimistic mutation.
   - Answer: Snapshot cache, update cache immediately, rollback on error, invalidate/refetch on settle. I describe the
   implementation plan before coding: state model, API contract, async behavior, accessibility, error states, tests,
   and production concerns. Optimistic updates need rollback, conflict handling, duplicate-submit protection, and
   final invalidation/refetch.

259. Implement file upload with progress.
   - Answer: Use XHR/axios or fetch streams if supported, validate type/size, show progress, retry/cancel, handle server
   errors. I describe the implementation plan before coding: state model, API contract, async behavior, accessibility,
   error states, tests, and production concerns. Validate file type/size, show progress, support cancel/retry, use
   signed URLs or multipart upload, and handle processing/scanning state.

260. Implement WebSocket chat UI.
   - Answer: Connection lifecycle, auth, reconnect with backoff, heartbeat, message ordering, optimistic sends, dedupe,
   resync on reconnect. I describe the implementation plan before coding: state model, API contract, async behavior,
   accessibility, error states, tests, and production concerns. Secure WebSockets with WSS, authentication, origin
   checks, channel authorization, heartbeat, reconnect/backoff, and rate limits.

261. Implement client-side rate limiting for a button.
   - Answer: Disable while pending, debounce/throttle clicks, backend idempotency key for real protection. I describe the
   implementation plan before coding: state model, API contract, async behavior, accessibility, error states, tests,
   and production concerns. Use server-side counters plus client UX throttling, exponential backoff, monitoring, and
   careful lockout behavior.

262. Implement a custom hook for localStorage.
   - Answer: Initialize safely in browser, serialize/parse with fallback, listen to storage events if cross-tab sync
   needed. I describe the implementation plan before coding: state model, API contract, async behavior, accessibility,
   error states, tests, and production concerns. Guard SSR, parse JSON safely, sync storage events, expose
   setter/remover, and never store secrets.

263. Implement error boundary.
   - Answer: Class component with `getDerivedStateFromError` and `componentDidCatch`, fallback UI, report error. I
   describe the implementation plan before coding: state model, API contract, async behavior, accessibility, error
   states, tests, and production concerns.

264. Implement virtualized list.
   - Answer: Calculate visible range from scroll offset/item height, render only range plus overscan. Prefer library in
   production. I describe the implementation plan before coding: state model, API contract, async behavior,
   accessibility, error states, tests, and production concerns. Use proven libraries, fixed/measured row heights,
   overscan, and keyboard/focus accessibility.

265. Implement a type-safe API client.
   - Answer: Define endpoint functions, response types, runtime validation for external data, standardized error
   handling, auth headers/cookies. I describe the implementation plan before coding: state model, API contract, async
   behavior, accessibility, error states, tests, and production concerns. Type requests/responses, normalize errors,
   support abort signals, attach auth safely, and parse untrusted JSON.

266. Implement breadcrumb navigation.
   - Answer: Derive from route config, include labels/params, accessible nav landmark and ordered list. I describe the
   implementation plan before coding: state model, API contract, async behavior, accessibility, error states, tests,
   and production concerns. Derive from route metadata or matched routes, support dynamic labels, and expose
   accessible navigation.

267. Implement feature flag hook.
   - Answer: Read flag config from provider/cache, return typed value/default, support loading and override/test
   behavior. I describe the implementation plan before coding: state model, API contract, async behavior,
   accessibility, error states, tests, and production concerns.

268. Implement a reusable data-fetching hook.
   - Answer: Prefer TanStack Query; otherwise manage loading/error/data, cancellation, dependencies, stale results,
   refetch. I describe the implementation plan before coding: state model, API contract, async behavior,
   accessibility, error states, tests, and production concerns.

269. Implement frontend telemetry around a button action.
   - Answer: Start span/event, attach route/action/user-safe context, capture success/failure latency, redact sensitive
   data. I describe the implementation plan before coding: state model, API contract, async behavior, accessibility,
   error states, tests, and production concerns. Capture action, route, result, latency, release, trace ID, and safe
   metadata without PII.

270. Implement secure embedding of third-party UI.
   - Answer: Decide iframe vs Web Component, isolate styles, define event contract, validate messages, handle auth
   without exposing secrets. I describe the implementation plan before coding: state model, API contract, async
   behavior, accessibility, error states, tests, and production concerns.

## 11. System Design - Frontend And Full Stack

271. Design a public-safety data dashboard.
   - Answer: Clarify users, data freshness, permissions, filters, map/table/chart views, audit logs, reliability,
   accessibility. Architecture: React/Next frontend, API gateway/BFF, backend services, cache, search/indexing,
   observability, RBAC. The design covers requirements, data model, frontend state, API contracts, auth/permissions,
   performance, failure modes, observability, and rollout. Prioritize hierarchy, freshness, filtering, permissions,
   drill-down, auditability, and accessible scanning.

272. Design a real-time incident feed.
   - Answer: WebSocket/SSE for realtime, cursor pagination for history, reconnect/resync, dedupe by event ID,
   backpressure, filters, permission checks, monitoring. The design covers requirements, data model, frontend state,
   API contracts, auth/permissions, performance, failure modes, observability, and rollout. Use WebSocket/SSE, cursor
   history, ordering, dedupe, backpressure, reconnect, and stale/offline indicators.

273. Design a chat/contact-center frontend.
   - Answer: Conversation list, message panel, assignment, presence, WebSocket, optimistic sending, message ordering,
   attachment upload, auth, observability. The design covers requirements, data model, frontend state, API contracts,
   auth/permissions, performance, failure modes, observability, and rollout. Model conversations, messages,
   participants, unread state, attachments, permissions, delivery, and realtime updates.

274. Design frontend architecture for multi-tenant app.
   - Answer: Tenant resolved server-side, tenant-aware API calls/cache keys, route guards, branding config, permission
   model, data isolation, audit logs. The design covers requirements, data model, frontend state, API contracts,
   auth/permissions, performance, failure modes, observability, and rollout. Tenant scope must come from trusted
   auth/session context, not editable client input, and must be included in cache keys and server queries. Include
   tenant in trusted server context, routing, cache keys, tests, and audit logs.

275. Design a frontend SDK/widget.
   - Answer: Small bundle, isolated styles, async loader, versioning, configuration, event API, security, CSP
   compatibility, graceful failure, performance budget. The design covers requirements, data model, frontend state,
   API contracts, auth/permissions, performance, failure modes, observability, and rollout. Small bundle, stable API,
   versioning, theming hooks, sandboxing, initialization, and docs are key.

276. Design a BFF for frontend auth.
   - Answer: Browser uses secure HttpOnly cookie. BFF stores/refreshes backend tokens server-side, proxies APIs, enforces
   CSRF/rate limit, logs trace IDs. The design covers requirements, data model, frontend state, API contracts,
   auth/permissions, performance, failure modes, observability, and rollout. the browser-facing API boundary: safer
   token handling, product-shaped endpoints, normalized errors, and fewer secrets in the client.

277. Design cursor pagination API.
   - Answer: Request: `limit`, `after`, `before`, filters. Response: `edges`, `pageInfo`. Cursor encodes stable sort
   fields/version. Enforce deterministic order and max limit. The design covers requirements, data model, frontend
   state, API contracts, auth/permissions, performance, failure modes, observability, and rollout. Stable ordering,
   opaque cursors, next/previous cursors, filter invalidation, duplicate prevention, and the tradeoff against random
   page jumps.

278. Design notification system.
   - Answer: Event producer, queue, notification service, user preferences, delivery channels, retry, idempotency,
   read/unread state, frontend realtime updates. The design covers requirements, data model, frontend state, API
   contracts, auth/permissions, performance, failure modes, observability, and rollout. Design channels, preferences,
   priority, dedupe, read state, retry, and auditability.

279. Design file upload system.
   - Answer: Frontend requests signed URL, uploads directly to object storage, backend records metadata, virus scan,
   progress UI, retry/resume, access control. The design covers requirements, data model, frontend state, API
   contracts, auth/permissions, performance, failure modes, observability, and rollout. Validate file type/size, show
   progress, support cancel/retry, use signed URLs or multipart upload, and handle processing/scanning state.

280. Design audit logging for sensitive actions.
   - Answer: Server-side immutable logs with actor, action, target, tenant, timestamp, request ID, before/after if safe,
   retention/search, tamper resistance. The design covers requirements, data model, frontend state, API contracts,
   auth/permissions, performance, failure modes, observability, and rollout. Capture actor, action, resource,
   timestamp, result, reason/context, correlation ID, and tamper resistance.

281. Design feature flag platform usage.
   - Answer: Flag evaluation server/client depending sensitivity, target rules, default values, kill switches, audit
   changes, cleanup process. The design covers requirements, data model, frontend state, API contracts,
   auth/permissions, performance, failure modes, observability, and rollout.

282. Design observability for frontend app.
   - Answer: RUM metrics, error tracking, distributed tracing, logs, release tracking, source maps, privacy scrubbing,
   dashboards and alerts. The design covers requirements, data model, frontend state, API contracts, auth/permissions,
   performance, failure modes, observability, and rollout. Actionable observability captures errors, latency, Web
   Vitals, trace IDs, release, and privacy-safe metadata.

283. Design a plugin-based frontend platform.
   - Answer: Stable plugin contract, manifest, lazy loading, sandbox/isolation, permissions, version compatibility,
   theming, observability, fallback on plugin failure. The design covers requirements, data model, frontend state, API
   contracts, auth/permissions, performance, failure modes, observability, and rollout. manifests, permissions,
   version compatibility, extension points, failure isolation, and avoiding arbitrary host access.

284. Design frontend deployment pipeline.
   - Answer: lint/typecheck/test/build, bundle analysis, environment config validation, preview deployments, smoke tests,
   canary, rollback, source maps upload. The design covers requirements, data model, frontend state, API contracts,
   auth/permissions, performance, failure modes, observability, and rollout.

285. Design a form builder.
   - Answer: Schema-driven fields, validation rules, conditional logic, versioned submissions, renderer, accessibility,
   draft autosave, backend validation. The design covers requirements, data model, frontend state, API contracts,
   auth/permissions, performance, failure modes, observability, and rollout. Needs schema, validation, conditional
   logic, versioning, preview, accessible controls, and migration of existing submissions.

286. Design an API catalog UI.
   - Answer: Search/filter, endpoint details, schema examples, auth info, versioning, try-it console with safe
   sandboxing, generated docs from OpenAPI. The design covers requirements, data model, frontend state, API contracts,
   auth/permissions, performance, failure modes, observability, and rollout. Support search, filtering, ownership,
   examples, auth requirements, versions, changelog, and safe try-it flows.

287. Design offline-capable frontend.
   - Answer: Service worker cache, local storage/IndexedDB, sync queue, conflict resolution, stale indicators, security
   around cached sensitive data. The design covers requirements, data model, frontend state, API contracts,
   auth/permissions, performance, failure modes, observability, and rollout. Use local cache, sync queue, conflict
   resolution, stale indicators, and sensitive-data-at-rest controls.

288. Design rate limiting for public API.
   - Answer: token bucket/leaky bucket, per-user/IP/API key, Redis counters, headers, 429 responses, burst handling,
   monitoring. The design covers requirements, data model, frontend state, API contracts, auth/permissions,
   performance, failure modes, observability, and rollout. Use server-side counters plus client UX throttling,
   exponential backoff, monitoring, and careful lockout behavior.

289. Design a role and permission model.
   - Answer: Users, roles, permissions, tenant scope, resource-level checks, server enforcement, frontend UX mapping,
   audit changes. The design covers requirements, data model, frontend state, API contracts, auth/permissions,
   performance, failure modes, observability, and rollout. Frontend permission checks are UX; backend policy is
   enforcement. Hide/disable actions but never rely on the browser. Model actions on resources, group into roles,
   enforce in backend, and surface explainable UX states.

290. Design a system for live telemetry visualization.
   - Answer: Stream ingestion, time-series storage, aggregation, WebSocket/SSE updates, chart decimation, time range
   filters, backpressure, downsampling. The design covers requirements, data model, frontend state, API contracts,
   auth/permissions, performance, failure modes, observability, and rollout. Downsample, window, aggregate, batch
   realtime updates, and keep charts responsive under high event volume.

291. Design a secure third-party integration.
   - Answer: OAuth/client credentials, token storage, webhook validation, retries, rate limits, audit logs, least
   privilege, failure modes. The design covers requirements, data model, frontend state, API contracts,
   auth/permissions, performance, failure modes, observability, and rollout.

292. Design frontend for high-stakes workflows.
   - Answer: clear status, confirmation for destructive actions, undo where possible, audit trail, accessibility, latency
   feedback, error recovery, no ambiguous UI. The design covers requirements, data model, frontend state, API
   contracts, auth/permissions, performance, failure modes, observability, and rollout. Reduce cognitive load, make
   state obvious, confirm destructive actions, log sensitive actions, and handle failures calmly.

## 12. Frontend Testing And Quality

293. Unit vs integration vs E2E tests?
   - Answer: Unit tests isolated logic/components. Integration tests multiple units together. E2E tests full user flows
   in browser. The testing strategy focuses on confidence per cost: cover risky behavior, avoid brittle implementation
   assertions, and make tests deterministic in CI. Unit tests verify small logic; integration tests verify pieces
   together; E2E tests cover critical browser workflows. The goal is confidence in behavior users depend on,
   especially auth, permissions, async data, accessibility, and high-value workflows.

294. What to test in React components?
   - Answer: user-visible behavior, accessibility roles/labels, state transitions, error/loading states, integration with
   mocked APIs. The testing strategy focuses on confidence per cost: cover risky behavior, avoid brittle
   implementation assertions, and make tests deterministic in CI. Test user-visible behavior, interactions,
   accessibility roles, async states, and callbacks/API effects. The goal is confidence in behavior users depend on,
   especially auth, permissions, async data, accessibility, and high-value workflows.

295. What not to over-test?
   - Answer: implementation details, exact internal state, library behavior, brittle snapshots. The testing strategy
   focuses on confidence per cost: cover risky behavior, avoid brittle implementation assertions, and make tests
   deterministic in CI. Avoid testing implementation details, library internals, brittle snapshots, and every CSS
   class when behavior matters more. The goal is confidence in behavior users depend on, especially auth, permissions,
   async data, accessibility, and high-value workflows.

296. Jest vs React Testing Library?
   - Answer: Jest is test runner/assertion/mocking ecosystem. RTL helps render components and query like a user. The
   testing strategy focuses on confidence per cost: cover risky behavior, avoid brittle implementation assertions, and
   make tests deterministic in CI. Jest/Vitest runs tests and mocks; React Testing Library encourages user-centered
   queries and interactions. The goal is confidence in behavior users depend on, especially auth, permissions, async
   data, accessibility, and high-value workflows.

297. How do you test async UI?
   - Answer: mock API, use `findBy`/`waitFor`, assert loading then success/error, handle timers carefully. The testing
   strategy focuses on confidence per cost: cover risky behavior, avoid brittle implementation assertions, and make
   tests deterministic in CI. Mock network deterministically, await visible state changes, and test loading, success,
   error, and empty states. The goal is confidence in behavior users depend on, especially auth, permissions, async
   data, accessibility, and high-value workflows.

298. How do you test hooks?
   - Answer: Use component or hook testing utilities; prefer testing behavior through components when possible. The
   testing strategy focuses on confidence per cost: cover risky behavior, avoid brittle implementation assertions, and
   make tests deterministic in CI. Test hooks through a small component or hook utility, focusing on returned state,
   side effects, and cleanup. The goal is confidence in behavior users depend on, especially auth, permissions, async
   data, accessibility, and high-value workflows.

299. How do you test TanStack Query?
   - Answer: Provide test QueryClient with retries off, mock network, assert loading/data/error and cache invalidation
   behavior. The testing strategy focuses on confidence per cost: cover risky behavior, avoid brittle implementation
   assertions, and make tests deterministic in CI. TanStack Query manages server state, caching, retries,
   invalidation, background refresh, and mutation workflows. The goal is confidence in behavior users depend on,
   especially auth, permissions, async data, accessibility, and high-value workflows.

300. How do you test accessibility?
   - Answer: semantic queries, keyboard navigation tests, axe checks, screen reader spot checks for complex widgets. The
   testing strategy focuses on confidence per cost: cover risky behavior, avoid brittle implementation assertions, and
   make tests deterministic in CI. Test keyboard navigation, labels, focus, roles, contrast where possible, and use
   axe-style tooling plus manual checks. The goal is confidence in behavior users depend on, especially auth,
   permissions, async data, accessibility, and high-value workflows.

301. How do you test performance regressions?
   - Answer: bundle size checks, Lighthouse CI, Web Vitals/RUM monitoring, targeted performance tests for critical
   interactions. The testing strategy focuses on confidence per cost: cover risky behavior, avoid brittle
   implementation assertions, and make tests deterministic in CI. Use bundle budgets, Web Vitals, profiling, and
   critical-flow monitoring. The goal is confidence in behavior users depend on, especially auth, permissions, async
   data, accessibility, and high-value workflows.

302. How do you test WebSocket flows?
   - Answer: mock WebSocket server/client, test connect/message/reconnect/error states, dedupe/order handling. The
   testing strategy focuses on confidence per cost: cover risky behavior, avoid brittle implementation assertions, and
   make tests deterministic in CI. Secure WebSockets with WSS, authentication, origin checks, channel authorization,
   heartbeat, reconnect/backoff, and rate limits. The goal is confidence in behavior users depend on, especially auth,
   permissions, async data, accessibility, and high-value workflows.

303. What belongs in CI?
   - Answer: lint, typecheck, unit/integration tests, build, dependency audit if applicable, bundle limits, E2E smoke for
   critical flows. The testing strategy focuses on confidence per cost: cover risky behavior, avoid brittle
   implementation assertions, and make tests deterministic in CI. The goal is confidence in behavior users depend on,
   especially auth, permissions, async data, accessibility, and high-value workflows.

304. How do you make tests less flaky?
   - Answer: avoid arbitrary sleeps, wait for real conditions, isolate test data, control timers/network, reduce
   cross-test shared state. The testing strategy focuses on confidence per cost: cover risky behavior, avoid brittle
   implementation assertions, and make tests deterministic in CI. Use deterministic data, isolated state, controlled
   timers, condition-based waits, and avoid real network dependencies. The goal is confidence in behavior users depend
   on, especially auth, permissions, async data, accessibility, and high-value workflows.

305. What is test pyramid?
   - Answer: Many fast unit tests, fewer integration tests, fewer expensive E2E tests. Shape can vary by product risk.
   The testing strategy focuses on confidence per cost: cover risky behavior, avoid brittle implementation assertions,
   and make tests deterministic in CI. Favor many cheap unit tests, fewer integration tests, and a small set of
   valuable E2E tests. The goal is confidence in behavior users depend on, especially auth, permissions, async data,
   accessibility, and high-value workflows.

## 13. Code Review And Architecture Discussion

306. What do you look for in architecture design meetings?
   - Answer: problem clarity, constraints, alternatives, tradeoffs, data flow, failure modes, security, observability,
   rollout, ownership. I show practical judgment: understand the existing system, compare options, make tradeoffs
   explicit, and choose a change the team can operate safely. Look for problem statement, constraints, alternatives,
   tradeoffs, ownership, rollout, observability, and failure modes.

307. How do you propose a design?
   - Answer: Write context, goals, non-goals, options, recommendation, risks, migration plan, open questions. I show
   practical judgment: understand the existing system, compare options, make tradeoffs explicit, and choose a change
   the team can operate safely. Write context, goals/non-goals, options, recommendation, risks, migration, metrics,
   and open questions.

308. How do you prevent frontend architecture from becoming messy?
   - Answer: clear boundaries, consistent data-fetching/state patterns, shared components, lint rules, code review,
   deleting old paths. I show practical judgment: understand the existing system, compare options, make tradeoffs
   explicit, and choose a change the team can operate safely. Mess happens when state ownership, API boundaries,
   component responsibilities, and shared abstractions are unclear.

309. When would you introduce abstraction?
   - Answer: When duplication is real, variation points are understood, and abstraction makes usage simpler without
   hiding important behavior. I show practical judgment: understand the existing system, compare options, make
   tradeoffs explicit, and choose a change the team can operate safely. Introduce abstraction only when duplication is
   real and variation points are understood.

310. How do you handle tech debt?
   - Answer: classify risk, connect to business/user impact, fix opportunistically near touched code, schedule bigger
   work with measurable benefit. I show practical judgment: understand the existing system, compare options, make
   tradeoffs explicit, and choose a change the team can operate safely. Prioritize by user risk, incident frequency,
   developer drag, and migration cost.

311. How do you migrate a large frontend feature safely?
   - Answer: strangler pattern, feature flags, compatibility layer, tests, metrics, gradual rollout, rollback plan. I
   show practical judgment: understand the existing system, compare options, make tradeoffs explicit, and choose a
   change the team can operate safely. Use feature flags, adapters, parallel paths, tests, metrics, and rollback.

312. How do you handle breaking API changes?
   - Answer: version contract, support old/new temporarily, update clients, monitor usage, communicate timeline, remove
   old path after migration. I show practical judgment: understand the existing system, compare options, make
   tradeoffs explicit, and choose a change the team can operate safely. Coordinate versioning, contract tests,
   compatibility windows, docs, and release order.

313. How do you document frontend decisions?
   - Answer: lightweight ADRs, README near code, diagrams for data flow, examples for shared utilities/components. I show
   practical judgment: understand the existing system, compare options, make tradeoffs explicit, and choose a change
   the team can operate safely. Use short ADRs with context, options, decision, consequences, and links.

314. What makes a PR easy to review?
   - Answer: focused scope, clear description, screenshots for UI, test notes, linked ticket, small commits if helpful. I
   show practical judgment: understand the existing system, compare options, make tradeoffs explicit, and choose a
   change the team can operate safely. Keep PRs focused, described, tested, and include screenshots/recordings for UI
   changes.

315. How do you evaluate a dependency?
   - Answer: maintenance, bundle size, API fit, security, license, community, alternatives, cost of replacing. I show
   practical judgment: understand the existing system, compare options, make tradeoffs explicit, and choose a change
   the team can operate safely. Check maintenance, security, bundle cost, accessibility, license, API stability, and
   exit cost.

316. How do you deal with legacy code?
   - Answer: understand behavior first, add characterization tests for risky paths, make small changes, improve
   boundaries gradually. I show practical judgment: understand the existing system, compare options, make tradeoffs
   explicit, and choose a change the team can operate safely. Add characterization tests, improve in small steps, and
   avoid rewrites without a migration path.

## 14. Axon-Specific Prep Questions

317. How would you make public safety data accessible and actionable?
   - Answer: Public-safety data becomes accessible and actionable when the UI makes priority, freshness, ownership, and
   next action obvious. The design needs strong hierarchy, filters, search, drill-down, permission-aware views,
   keyboard accessibility, and clear loading/error states. Users should be able to answer what happened, who is
   involved, what changed, and what action is available without scanning unrelated noise.

318. What does quality mean for Axon's product domain?
   - Answer: Quality in Axon's product domain means correctness, reliability, security, performance, accessibility,
   auditability, and understandable failure behavior. A polished UI is not enough if permissions are wrong, stale data
   looks current, logs leak sensitive information, or errors leave users guessing. The product must be dependable
   under pressure and support investigation, accountability, and recovery after something goes wrong.

319. How would you handle sensitive evidence/public-safety data in frontend?
   - Answer: Sensitive evidence and public-safety data need least-privilege access, server-side authorization, tenant
   scoping, redacted logs, protected previews/downloads, careful browser caching, timeout/session policies, and audit
   trails. The frontend should minimize exposure, avoid putting secrets or sensitive payloads in telemetry, clearly
   communicate permission boundaries, and never rely on client-side checks as the enforcement layer.

320. How would you design UI for users under pressure?
   - Answer: UI for users under pressure should reduce cognitive load. The layout needs clear hierarchy, stable
   positioning, obvious primary actions, readable status, strong contrast, keyboard accessibility, and calm error
   messages. Destructive or high-impact actions need confirmation and auditability. The interface should avoid
   ambiguity, surprise layout shifts, hidden state, and noisy decoration that slows decision-making.

321. How do you balance speed and safety?
   - Answer: Speed and safety are balanced by shipping small complete slices, protecting critical safeguards, and using
   feature flags or staged rollout for riskier changes. Fast delivery should not skip auth checks, data correctness,
   error states, observability, or rollback. Non-critical polish can be deferred; production protections for users and
   support teams cannot.

322. How would you contribute beyond assigned tickets?
   - Answer: Contribution beyond assigned tickets includes improving shared components, documentation, test coverage,
   observability, performance profiling, code review quality, onboarding notes, and small developer-experience fixes.
   These improvements compound because they make future product work safer and faster for the whole team.

323. What would you ask Axon interviewers?
   - Answer: Useful questions for Axon interviewers include: which product area this role supports, what users and
   workflows are most important, what frontend architecture is used today, what reliability/performance challenges
   exist, how Product and Design collaborate with engineering, how releases are done, and what success looks like in
   the first six months.

324. What is your 30-60-90 day plan?
   - Answer: In the first 30 days, I learn the product domain, users, codebase, team conventions, design system, release
   process, and production-support expectations while shipping small fixes. By 60 days, I own a scoped feature slice,
   contribute meaningfully in code review, and understand the main API/auth/data patterns. By 90 days, I improve a
   shared frontend pattern, reliability gap, performance bottleneck, or observability workflow while taking more
   independent ownership of user-facing work.

325. What should Axon know about your background that is not obvious?
   - Answer: My background is not only a list of frontend tools. The useful pattern is frontend product engineering with
   system awareness: React and TypeScript for UI, API contracts for reliable data flow, BFF/session work for safer
   auth boundaries, WebSocket/realtime work for operational workflows, observability for production debugging, and
   CI/CD/build work for delivery quality. That combination helps me build interfaces that are usable, maintainable,
   secure, and supportable after release.

## 15. Questions To Ask The Interviewer

326. What product area would this role support?
   - Answer: This asks which product surface, user workflow, and public-safety problem the role supports. The answer
   reveals the domain context, data sensitivity, user personas, and where frontend quality has the most impact.

327. What frontend stack and architecture does the team use today?
   - Answer: This asks what React/TypeScript architecture, rendering model, state/data libraries, design system, monorepo
   tooling, testing strategy, and deployment patterns the team uses today. The answer shows how quickly a new engineer
   can become productive and where architecture is evolving.

328. What are the biggest frontend performance or reliability challenges now?
   - Answer: This asks where the team currently feels pain: Core Web Vitals, large lists, realtime updates, release
   confidence, error rates, observability gaps, bundle size, backend latency, or complex permissions. The answer
   reveals the highest-value technical problems for the role.

329. How does the team collaborate with Product and Design?
   - Answer: This asks how product ideas move through discovery, design, engineering, edge-case review, implementation,
   and rollout. The answer shows whether frontend engineers help shape UX and requirements or only receive finished
   tickets.

330. What does code review look like at Axon?
   - Answer: This asks about quality bar, PR size, reviewer expectations, architecture feedback, test requirements, and
   how the team handles disagreement. The answer reveals how engineering standards are taught and enforced.

331. How are frontend releases done?
   - Answer: This asks about CI/CD, deployment frequency, feature flags, rollback, smoke tests, monitoring, ownership,
   and production verification. The answer shows how safely and quickly frontend changes reach users.

332. How do teams measure user impact and product quality?
   - Answer: This asks which signals the team trusts: adoption, task completion, reliability, support tickets,
   performance metrics, accessibility, qualitative feedback, or operational outcomes. The answer shows whether quality
   is measured after release.

333. What does success look like in the first 6 months?
   - Answer: This asks for concrete expectations: product knowledge, shipped features, code quality, collaboration,
   ownership, reliability improvements, and independence. The answer turns the first six months into visible goals.

334. What mentorship or growth paths are available?
   - Answer: This asks how engineers receive feedback, learn architecture, pair with senior engineers, grow into
   ownership, and find mentorship. The answer reveals whether the team invests in long-term engineering growth.

335. What is one technical challenge the team is excited to solve this year?
   - Answer: This asks which problem the team is energized by, not only what backlog item is urgent. The answer reveals
   technical direction, product ambition, and where this role can contribute meaningful engineering work.

## 16. Fast Revision Checklist

- Be ready to explain every CV bullet in detail: goal, your ownership, tradeoffs, result.
- Prepare one STAR story each for: ownership, conflict, failure, performance, production issue, ambiguity, mentoring.
- Practice coding out loud in JavaScript/TypeScript.
- Review React hooks, rendering, state, effects, memoization, accessibility, testing.
- Review browser fundamentals: event loop, rendering pipeline, HTTP, caching, CORS, security.
- Review auth/security: cookies, JWT, OAuth/OIDC, CSRF, XSS, WebSocket auth, tenant scoping.
- Review DSA patterns: hash map, sliding window, two pointers, stack/queue, BFS/DFS, binary search, heap, DP.
- Prepare 5 questions for Axon about team, architecture, releases, product domain, and success criteria.
