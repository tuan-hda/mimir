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
   - Answer: "I am a frontend software engineer with nearly 3 years building production web apps in banking and developer-platform environments. My strongest areas are React, TypeScript, Next.js, frontend architecture, API integration, observability, and production hardening. Recently I integrated Chatwoot into a React/Next contact-center app using Web Components and Shadow DOM, built a Go/Redis BFF to protect backend tokens, helped migrate offset pagination to cursor pagination, and improved monorepo build performance by about 50%. I like roles where frontend work is close to product, performance, reliability, and real users, which is why Axon's public-safety mission is interesting to me."

2. Why Axon?
   - Answer: Connect mission and work style. "Axon works on public safety systems where product quality matters beyond convenience. The JD also emphasizes frontend ownership, product/design partnership, performance, architecture discussions, and cross-team collaboration. That matches my experience shipping operational banking portals and developer platforms where reliability, observability, and maintainability matter."

3. Why this Frontend Software Engineer I role?
   - Answer: "It is a good match for my React/JavaScript background and my experience owning end-to-end frontend features. I want to continue deepening frontend engineering, especially performance, architecture, and user-facing systems at scale, while contributing to a mission-driven product."

4. Tell me about a feature you owned end to end.
   - Answer: Use Chatwoot integration or AutoWRX marketplace. Include requirements, design/API alignment, frontend implementation, rollout, observability, and post-release fixes.

5. Tell me about a project where you worked with Product and Design.
   - Answer: Mention translating user flows into UI states, clarifying edge cases, aligning API contracts, validating with demos, and iterating based on feedback.

6. Describe a time you improved performance.
   - Answer: Use monorepo build performance improvement or cursor pagination. Explain baseline, bottleneck, change, measurement, and result.

7. Describe a time you improved reliability or observability.
   - Answer: OpenTelemetry/Sentry instrumentation. Explain trace IDs, error grouping, logs, spans, correlation, incident triage, and SRE bot integration.

8. Tell me about a difficult technical decision.
   - Answer: Chatwoot integration: iframe vs direct embedding vs Web Components. Chose Web Components/Shadow DOM to isolate styles and preserve host ownership of auth/transport/permissions.

9. Tell me about a mistake you made.
   - Answer: Pick a real but contained example. Structure: missed edge case, impact, fix, prevention. Avoid blaming others.

10. Tell me about a time you disagreed with a teammate.
    - Answer: Focus on data and alignment. "I clarified goals, compared tradeoffs, wrote a small proof of concept or benchmark, and aligned on the option that reduced risk."

11. How do you handle code review feedback?
    - Answer: "I separate ego from code, ask clarifying questions, accept improvements quickly, and discuss tradeoffs when feedback changes architecture. I also try to make review easy by keeping PRs focused and explaining context."

12. How do you review other people's code?
    - Answer: "I look for correctness, edge cases, maintainability, performance, security, test coverage, and fit with existing patterns. I try to distinguish blocking comments from suggestions."

13. Tell me about mentoring or coaching.
    - Answer: Mention helping teammates understand frontend architecture, shared instrumentation, code review habits, or development workflow.

14. How do you communicate with senior leaders?
    - Answer: "I summarize user impact, risk, options, tradeoffs, and recommendation. I avoid excessive implementation detail unless it affects timeline or risk."

15. How do you work in a fast-paced environment?
    - Answer: "I clarify priority, reduce scope to the useful first release, instrument important flows, and keep communication frequent so surprises surface early."

16. Tell me about a time you handled ambiguity.
    - Answer: Use data design for cursor pagination. Explain missing requirements, clarifying access patterns, defining API contract, aligning backend/frontend.

17. Tell me about a production issue you handled.
    - Answer: Use observability or deployment recovery. Include detection, mitigation, root cause, prevention.

18. How do you decide when code is good enough to ship?
    - Answer: "It meets requirements, handles known edge cases, has appropriate tests, does not introduce unacceptable performance/security risk, is observable enough for production, and has a rollback or mitigation path when needed."

19. How do you handle deadlines?
    - Answer: "I identify must-haves, cut non-essential scope, communicate risk early, and protect quality on critical paths."

20. Tell me about a time you learned a new technology quickly.
    - Answer: Web Components/Shadow DOM, Go/Redis BFF, OpenTelemetry, AWS Bedrock, or Electron.

21. What does "Force for Good" mean to you?
    - Answer: "Engineering decisions should improve real people's safety and trust. For frontend, that means accessible, reliable, secure, understandable interfaces that help users act correctly under pressure."

22. How do you handle hybrid onsite collaboration?
    - Answer: "I use onsite time for high-bandwidth work like design discussions, architecture alignment, and mentoring, and remote time for focused implementation and documentation."

23. What kind of team culture helps you do your best work?
    - Answer: "Clear ownership, candid but respectful feedback, strong engineering standards, and people who care about users."

24. What are your weaknesses?
    - Answer: Give a real growth area. Example: "Earlier I sometimes over-invested in making a solution too generic. I now start with the concrete use case, add extension points only when they are justified, and validate with teammates."

25. Where do you want to grow?
    - Answer: "Large-scale frontend architecture, product thinking, performance at scale, and becoming stronger at influencing technical direction across teams."

26. Why are you leaving/currently considering opportunities?
    - Answer: Keep positive. "I am looking for a role where I can apply my frontend/platform experience to a larger mission-driven product and keep growing with strong engineers."

27. What project are you most proud of?
    - Answer: Choose Chatwoot integration or AutoWRX. Emphasize business/user impact and technical difficulty.

28. How do you earn trust with a new team?
    - Answer: "I listen first, learn the codebase, take ownership of small but valuable tasks, communicate clearly, and follow through."

29. How do you handle unclear requirements?
    - Answer: "I ask about user goals, states, edge cases, API constraints, success metrics, and rollout. Then I document assumptions and confirm before building deeply."

30. What questions would you ask Product before starting a feature?
    - Answer: Target user, success metric, core flow, edge cases, permissions, loading/error states, analytics, accessibility, rollout, dependencies.

31. How do you collaborate with backend engineers?
    - Answer: "I align on API shape, error contracts, auth, pagination, caching, versioning, observability, and test data. I prefer written contracts or OpenAPI when possible."

32. Tell me about your English communication.
    - Answer: "I use English professionally in documentation, code review, technical discussions, and cross-team communication. I have IELTS 7.0."

## 2. CV Deep-Dive Questions

33. Explain your Chatwoot integration.
    - Answer: "We embedded a Vue 3/Vite dashboard into a React/Next.js contact-center app using Web Components and Shadow DOM. The host app kept control over auth, transport, tenant scope, permissions, and realtime events. This reduced integration risk while isolating UI implementation details."

34. Why Web Components instead of iframe?
    - Answer: Web Components allow tighter integration, shared events, better host control, and smoother UX. iframe gives stronger isolation but makes routing, auth, sizing, events, and styling integration harder.

35. What does Shadow DOM solve?
    - Answer: It encapsulates DOM and CSS so embedded UI styles do not leak into the host and host styles do not accidentally break the embedded component.

36. What problems can Shadow DOM introduce?
    - Answer: Styling/theming complexity, event retargeting, accessibility testing nuances, focus management issues, and harder global CSS assumptions.

37. Explain `lexi-session`.
    - Answer: "It is a Go + Redis BFF that keeps backend tokens out of the browser. It proxies HTTP, bridges WebSocket, supports rate limiting and multi-client sessions, and emits production observability."

38. Why use a BFF?
    - Answer: A Backend-for-Frontend can protect secrets, simplify browser-facing APIs, centralize auth/session logic, adapt backend contracts, and enforce rate limits/security policies.

39. Why Redis/Dragonfly for session handling?
    - Answer: Low-latency shared state, TTL-based expiration, distributed access across instances, pub/sub or stream patterns if needed, and good fit for session/rate-limit counters.

40. What are risks of storing sessions in Redis?
    - Answer: Eviction, data loss depending on persistence, hot keys, inconsistent TTLs, serialization bugs, and operational dependency on Redis availability.

41. Explain your cursor pagination migration.
    - Answer: "Offset pagination slows down and can return unstable results as data changes. Cursor pagination uses a stable ordering key and cursor token to fetch next/previous pages consistently and efficiently."

42. How does bidirectional cursor pagination work?
    - Answer: Use a stable sort, usually createdAt plus id. `after` fetches newer/next items; `before` fetches previous items. Query one extra row to compute `hasNextPage` or `hasPreviousPage`.

43. What makes cursor pagination hard?
    - Answer: Stable sorting, duplicate timestamps, backwards navigation, filtering changes, cursor encoding/versioning, cache invalidation, and UI state for page boundaries.

44. Explain your OpenTelemetry/Sentry work.
    - Answer: "We standardized frontend/project instrumentation so traces, spans, and errors could be correlated. This improved debugging and reduced incident triage time."

45. What should be captured in frontend observability?
    - Answer: route changes, API latency, errors, user-impacting failed actions, Web Vitals, trace IDs, release version, environment, user/session IDs when privacy-safe.

46. What should not be captured?
    - Answer: tokens, passwords, PII, sensitive banking/customer data, full request bodies with secrets, or excessive breadcrumbs that create privacy/security risk.

47. How did you improve monorepo build performance?
    - Answer: Mention likely levers: caching, dependency graph cleanup, parallelization, Vite/Turborepo config, avoiding unnecessary rebuilds, optimizing TypeScript checks, and measuring before/after.

48. What can slow down a frontend monorepo?
    - Answer: broad dependency invalidation, slow TypeScript project references, large bundles, duplicate packages, excessive lint/typecheck on unchanged packages, bad caching, huge generated files.

49. Explain AutoWRX.
    - Answer: "A cloud-based rapid prototyping environment for software-defined vehicle applications. I built React/Vite UIs for API catalogs, prototype execution, telemetry visualization, and demos."

50. Explain the plugin architecture you helped shape.
    - Answer: "Core platform stays lean and stable; optional plugins contribute UI/capabilities through defined contracts. This improves modularity, avoids core bloat, and allows configuration-driven extensibility."

51. What are plugin architecture risks?
    - Answer: unstable extension APIs, version compatibility, dependency conflicts, security boundaries, performance overhead, and weak ownership of plugin behavior.

52. Explain your API decoupling work.
    - Answer: "We separated monolithic APIs into more maintainable services with centralized auth/routing. The goal was clearer ownership, easier evolution, and better deployment/control."

53. Why use Kong or an API gateway?
    - Answer: centralized routing, auth, rate limiting, observability, request transformation, service discovery, and consistent edge policies.

54. What are downsides of an API gateway?
    - Answer: another operational dependency, latency, misconfiguration risk, and central bottleneck if all policies become gateway-specific.

55. Explain your Docker CI/CD automation.
    - Answer: "I built scripts/pipelines to package, deploy, restart, and monitor environments, reducing manual deployment effort by around 80%."

56. How do you make deployment scripts safe?
    - Answer: idempotency, clear logs, environment validation, health checks, rollback path, secrets hygiene, dry-run mode when possible.

57. Explain your AI recruitment platform thesis.
    - Answer: Full-stack platform for screening, job/talent search, audio questioning, assessment, and GenAI-assisted evaluation using React/TS, Node, Redis, React Query, LangChain, Qdrant, AWS, Stripe.

58. How would you discuss GenAI safely in an interview?
    - Answer: Mention usefulness but also evaluation, hallucination control, privacy, prompt/version control, fallback, monitoring, and human review for high-impact decisions.

59. Explain Lucky Wheel safeguards.
    - Answer: Backend-driven outcomes, validation of codes, state checks, navigation guards, and preventing client-only rule bypass.

60. What interview risks are in your CV?
    - Answer: Be ready to defend exact ownership, quantify performance improvements, explain security design for BFF/tokens, and go deep on React/TS fundamentals rather than only architecture stories.

## 3. Computer Science Fundamentals

61. What happens when you type a URL and press Enter?
    - Answer: Browser checks cache, parses URL, resolves DNS, opens TCP connection, negotiates TLS for HTTPS, sends HTTP request, receives response, parses HTML, discovers resources, builds DOM/CSSOM, runs JS, lays out, paints, and handles async loading.

62. Explain process vs thread.
    - Answer: A process has its own memory space and resources. Threads run within a process and share memory, making communication cheaper but synchronization harder.

63. What is a context switch?
    - Answer: The OS saves the state of one running thread/process and loads another. It has overhead due to CPU register/cache/TLB effects.

64. What is virtual memory?
    - Answer: An abstraction giving each process its own address space. The OS maps virtual pages to physical memory or disk, improving isolation and memory management.

65. What is a race condition?
    - Answer: Behavior depends on unpredictable timing between concurrent operations. Fix with synchronization, atomic operations, immutable data, transactions, or avoiding shared mutable state.

66. What is deadlock?
    - Answer: Two or more operations wait forever for each other's resources. Conditions: mutual exclusion, hold-and-wait, no preemption, circular wait.

67. What is starvation?
    - Answer: A task waits indefinitely because other tasks keep getting resources or priority.

68. What is the difference between concurrency and parallelism?
    - Answer: Concurrency is managing multiple tasks in overlapping time. Parallelism is executing tasks simultaneously on multiple cores.

69. What is CPU-bound vs I/O-bound work?
    - Answer: CPU-bound is limited by computation. I/O-bound is limited by waiting on network, disk, database, etc.

70. Why is Node.js good for I/O-heavy workloads?
    - Answer: Its event loop and non-blocking I/O can handle many concurrent connections without one thread per request.

71. What is a file descriptor?
    - Answer: An OS handle representing an open file, socket, pipe, or other I/O resource.

72. What is DNS?
    - Answer: Domain Name System maps human-readable domain names to IP addresses through recursive and authoritative resolvers.

73. TCP vs UDP?
    - Answer: TCP is connection-oriented, reliable, ordered, congestion-controlled. UDP is connectionless, lower overhead, no built-in reliability or ordering.

74. HTTP/1.1 vs HTTP/2 vs HTTP/3?
    - Answer: HTTP/1.1 has limited connection multiplexing. HTTP/2 multiplexes streams over TCP and compresses headers. HTTP/3 uses QUIC over UDP to reduce head-of-line blocking and improve connection migration.

75. What is TLS?
    - Answer: Protocol providing encryption, integrity, and server identity verification for network communication.

76. What is the TLS handshake?
    - Answer: Client/server negotiate protocol/ciphers, verify certificate, exchange keys, then use symmetric encryption for data.

77. What is HTTP caching?
    - Answer: Reusing responses based on headers like `Cache-Control`, `ETag`, `Last-Modified`, and freshness validation.

78. What is CDN caching?
    - Answer: Edge servers cache static or cacheable dynamic content close to users, reducing latency and origin load.

79. What is CORS?
    - Answer: Browser security mechanism controlling whether a page from one origin can access resources from another origin.

80. What triggers a CORS preflight?
    - Answer: Non-simple methods, non-simple headers, or certain content types cause the browser to send an `OPTIONS` request first.

81. What is same-origin policy?
    - Answer: Browser rule restricting scripts from one origin from reading data from another origin unless explicitly allowed.

82. What is a reverse proxy?
    - Answer: A server in front of backends that handles routing, TLS termination, load balancing, caching, compression, or access control.

83. Load balancing strategies?
    - Answer: round robin, least connections, weighted, consistent hashing, latency-based, or health-aware routing.

84. What is idempotency?
    - Answer: An operation can be repeated with the same effect as once. GET, PUT, DELETE are generally idempotent by HTTP semantics; POST usually is not unless designed with idempotency keys.

85. What is eventual consistency?
    - Answer: Replicas may temporarily differ but converge later. Useful for distributed systems where strong consistency is costly.

86. SQL vs NoSQL?
    - Answer: SQL gives relational modeling, strong query semantics, joins, transactions. NoSQL often gives flexible schema, horizontal scaling patterns, or specialized access models.

87. What is an index?
    - Answer: Data structure that speeds reads by allowing lookup/sort/filter without scanning the whole table, at the cost of write overhead and storage.

88. What is a transaction?
    - Answer: A group of database operations executed with ACID properties: atomicity, consistency, isolation, durability.

89. What is isolation level?
    - Answer: Defines how concurrent transactions see each other. Examples: read committed, repeatable read, serializable.

90. What is a message queue?
    - Answer: A system for asynchronous communication between producers and consumers, improving decoupling, buffering, and retry handling.

## 4. Security And Authentication

91. Authentication vs authorization?
    - Answer: Authentication verifies who you are. Authorization decides what you can access.

92. Session cookie auth vs JWT auth?
    - Answer: Cookie session stores state server-side and sends session ID. JWT stores signed claims client-side/statelessly. Cookies are easier to revoke server-side; JWTs scale statelessly but need careful expiry/revocation.

93. Access token vs refresh token?
    - Answer: Access token is short-lived and used for APIs. Refresh token is longer-lived and used to obtain new access tokens.

94. Where should browser tokens be stored?
    - Answer: Prefer HttpOnly, Secure, SameSite cookies for sensitive tokens. Avoid localStorage for high-value tokens because XSS can read it.

95. What is XSS?
    - Answer: Cross-site scripting lets attacker execute JS in a user's browser. Prevent with escaping, sanitization, CSP, avoiding unsafe HTML injection, and framework-safe rendering.

96. What is CSRF?
    - Answer: Cross-site request forgery tricks a browser into sending authenticated requests. Mitigate with SameSite cookies, CSRF tokens, checking origin/referer, and non-cookie bearer tokens where appropriate.

97. Why does SameSite help?
    - Answer: It controls whether cookies are sent on cross-site requests. `Lax` or `Strict` reduces CSRF risk.

98. What is CSP?
    - Answer: Content Security Policy restricts what scripts/styles/images/connect sources can load, reducing XSS impact.

99. What is clickjacking?
    - Answer: Attacker embeds your page in a hidden/misleading frame. Prevent with `X-Frame-Options` or CSP `frame-ancestors`.

100.  What is SQL injection?
      - Answer: Attacker alters SQL queries through untrusted input. Prevent with parameterized queries and avoiding string-concatenated SQL.

101.  What is SSRF?
      - Answer: Server-side request forgery tricks a server into making requests to internal/external targets. Prevent with allowlists, network policies, URL validation, and metadata service protections.

102.  What is open redirect?
      - Answer: App redirects to attacker-controlled URL. Prevent by validating redirect targets against allowlists or internal paths.

103.  What is OAuth 2.0?
      - Answer: Authorization framework where a client obtains access tokens to access resources on behalf of a user or service.

104.  What is OIDC?
      - Answer: OpenID Connect adds identity/authentication on top of OAuth 2.0, including ID tokens and user identity claims.

105.  What is PKCE?
      - Answer: Proof Key for Code Exchange protects public clients by binding auth code exchange to a client-generated verifier/challenge.

106.  What is the difference between ID token and access token?
      - Answer: ID token proves authentication to the client. Access token authorizes API access to a resource server.

107.  How do you rotate refresh tokens?
      - Answer: Issue a new refresh token each use, invalidate old one, detect reuse as possible theft, and force re-authentication.

108.  How would you secure a WebSocket?
      - Answer: Use WSS, authenticate during handshake or initial message, validate origin, enforce authorization per channel, rate limit, heartbeat, close unauthorized connections.

109.  How do you handle tenant scoping?
      - Answer: Enforce tenant ID on server side from trusted auth claims/session, never only from client input. Check permissions on every query/resource.

110.  How would you design frontend permission checks?
      - Answer: Use frontend checks for UX only. Server remains source of truth. Hide/disable UI based on permission model, but backend enforces all actions.

111.  How do you avoid leaking secrets in frontend apps?
      - Answer: Never ship private keys/tokens in JS bundles. Use backend/BFF for secret-bearing calls. Treat `NEXT_PUBLIC_*` as public.

112.  How do you protect logs and monitoring data?
      - Answer: redact PII/secrets, limit breadcrumbs, scrub request headers/bodies, enforce retention policies, and control access.

113.  How would you rate limit login?
      - Answer: Combine IP/user/device counters, exponential backoff, captcha after threshold, account lock with care, and monitoring for credential stuffing.

114.  What is defense in depth?
      - Answer: Multiple independent controls so failure of one layer does not fully compromise the system.

## 5. JavaScript Fundamentals

115. What are JavaScript primitive types?
     - Answer: string, number, bigint, boolean, undefined, symbol, null. Objects are non-primitive.

116. `var` vs `let` vs `const`?
     - Answer: `var` is function-scoped and hoisted with undefined. `let` and `const` are block-scoped and have temporal dead zone. `const` prevents rebinding, not object mutation.

117. What is hoisting?
     - Answer: Declarations are processed before execution. Function declarations are callable before definition; `let/const` are hoisted but inaccessible before initialization.

118. What is closure?
     - Answer: A function retains access to variables from its lexical scope after that outer scope has returned.

119. Common closure bug?
     - Answer: Loops with `var` share one binding; use `let` or create a new scope.

120. What is the event loop?
     - Answer: JS runs on a call stack. Async callbacks are queued. The event loop moves tasks to the stack when empty. Microtasks usually run before the next macrotask/render opportunity.

121. Microtask vs macrotask?
     - Answer: Promises/queueMicrotask are microtasks. setTimeout, setInterval, I/O callbacks are macrotasks. Microtasks drain before next macrotask.

122. `Promise.all` vs `Promise.allSettled`?
     - Answer: `all` rejects on first rejection. `allSettled` waits for all and returns status/value or reason.

123. `==` vs `===`?
     - Answer: `==` performs type coercion. `===` compares without coercion except normal reference/value rules.

124. What is prototypal inheritance?
     - Answer: Objects can delegate property lookup to a prototype object. Classes are syntax over prototypes.

125. What is `this`?
     - Answer: Runtime binding based on call site for normal functions; lexical for arrow functions.

126. What is debouncing?
     - Answer: Delay execution until events stop firing for a period. Useful for search input.

127. What is throttling?
     - Answer: Limit execution to at most once per interval. Useful for scroll/resize handlers.

128. Shallow copy vs deep copy?
     - Answer: Shallow copy duplicates top-level references; nested objects remain shared. Deep copy recursively copies nested structures.

129. What is optional chaining?
     - Answer: `obj?.a?.b` safely returns undefined if any part is nullish.

130. What is nullish coalescing?
     - Answer: `a ?? b` returns `b` only when `a` is null or undefined, unlike `||` which treats falsy values as fallback.

131. What is tree shaking?
     - Answer: Bundlers remove unused exports when modules are statically analyzable, especially ES modules.

132. What is memory leak in JS?
     - Answer: Objects remain reachable unintentionally via timers, closures, global refs, event listeners, caches, or detached DOM nodes.

133. How do you debug a memory leak?
     - Answer: Chrome heap snapshots, allocation timeline, check detached nodes, event listeners, subscriptions, long-lived caches.

134. What is a service worker?
     - Answer: Background script that can intercept network requests, cache assets, enable offline support, and handle push/background sync.

## 6. TypeScript

135. Why TypeScript?
     - Answer: Static typing catches errors earlier, documents contracts, improves refactoring, editor support, and large-codebase maintainability.

136. `interface` vs `type`?
     - Answer: Both model shapes. Interfaces can merge declarations and are commonly used for object contracts. Types can express unions, primitives, tuples, mapped/conditional types.

137. What is a union type?
     - Answer: A value can be one of several types, e.g. `string | number`.

138. What is a discriminated union?
     - Answer: Union members share a literal discriminant field, allowing safe narrowing in switches.

139. What is type narrowing?
     - Answer: TypeScript refines a type based on runtime checks like `typeof`, `in`, equality, or custom type guards.

140. What is `unknown` vs `any`?
     - Answer: `any` disables type safety. `unknown` forces validation/narrowing before use.

141. What is `never`?
     - Answer: Type representing impossible values. Useful for exhaustive checks.

142. What are generics?
     - Answer: Type parameters that let functions/classes/components preserve type relationships without losing specificity.

143. Example of generic API response type?
     - Answer: `type ApiResponse<T> = { data: T; error?: string }`.

144. What is `keyof`?
     - Answer: Produces union of property names of a type.

145. What is mapped type?
     - Answer: Creates a type by iterating over keys, e.g. `Partial<T>`.

146. What is conditional type?
     - Answer: Type-level if expression, e.g. `T extends string ? A : B`.

147. What does `as const` do?
     - Answer: Narrows values to literal readonly types.

148. What is type assertion?
     - Answer: Tells compiler to treat a value as a type. It does not change runtime value, so use carefully.

149. How do you type React props?
     - Answer: Define explicit `type Props = { ... }`; include children only when needed; avoid overly broad `React.FC` if project style avoids it.

150. How do you type API data safely?
     - Answer: TypeScript types plus runtime validation for external data, e.g. Zod or manual guards, because external JSON is untrusted.

151. How do you avoid overengineering TS types?
     - Answer: Prefer readable domain types and simple generics. Use advanced types only when they remove real duplication or prevent real mistakes.

152. What is module augmentation?
     - Answer: Extending types from another module, often for framework/library customization.

153. What are project references?
     - Answer: TypeScript feature for splitting large projects into smaller buildable units, improving monorepo typecheck performance.

154. What TS compiler options matter most?
     - Answer: `strict`, `noImplicitAny`, `strictNullChecks`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes` depending on maturity.

## 7. React And Frontend Architecture

155. What is React's mental model?
     - Answer: UI is a function of state. React renders component trees, compares changes, and updates the DOM efficiently.

156. What is reconciliation?
     - Answer: React compares previous and next element trees to decide what DOM updates are needed.

157. Why are keys important?
     - Answer: Keys let React preserve identity across list changes. Bad keys cause incorrect state reuse and extra rerenders.

158. Why is index as key risky?
     - Answer: Reordering/inserting/removing items can attach old component state to the wrong item.

159. Controlled vs uncontrolled input?
     - Answer: Controlled input value is driven by React state. Uncontrolled input stores value in the DOM and is read via ref or form submission.

160. `useEffect` vs `useLayoutEffect`?
     - Answer: `useEffect` runs after paint. `useLayoutEffect` runs synchronously after DOM mutation before paint, useful for layout measurement but can block rendering.

161. Common `useEffect` mistakes?
     - Answer: missing dependencies, derived state in effects, no cleanup, async race conditions, fetching without cancellation/stale guards.

162. How do you avoid stale closures?
     - Answer: include dependencies, use functional state updates, refs for mutable latest values, or stable callbacks where appropriate.

163. What is React Strict Mode?
     - Answer: Development mode checks that intentionally double-invoke certain lifecycle/effect paths to expose unsafe side effects.

164. What is memoization in React?
     - Answer: `React.memo`, `useMemo`, `useCallback` can avoid expensive recalculations/rerenders when dependencies are stable.

165. When should you not memoize?
     - Answer: When computation is cheap, dependencies always change, or added complexity outweighs performance benefit.

166. How do you debug unnecessary rerenders?
     - Answer: React DevTools Profiler, why-did-you-render, checking prop identity, context changes, state location, memo boundaries.

167. What is context good for?
     - Answer: Sharing low-frequency global-ish values like theme, auth user, locale. Avoid using one huge frequently changing context for everything.

168. Redux vs TanStack Query?
     - Answer: Redux manages client/application state. TanStack Query manages server state: fetching, caching, refetching, invalidation, loading/error states.

169. When use Redux?
     - Answer: Complex client state, cross-page workflows, event-driven state, undo/redo, or when project already has Redux patterns.

170. When use TanStack Query?
     - Answer: Remote data fetching with caching, mutations, invalidation, retries, pagination, background refetching.

171. How does optimistic update work?
     - Answer: Update UI/cache before server confirms, rollback on failure, invalidate/refetch to reconcile.

172. How do you handle API errors in React?
     - Answer: Local form errors for expected validation, toast/banner for action failures, error boundaries for render failures, logging/monitoring for unexpected errors.

173. What are error boundaries?
     - Answer: React components that catch render/lifecycle errors below them and show fallback UI. They do not catch async event handler errors.

174. What is Suspense?
     - Answer: React mechanism for declaratively waiting on async resources/code-split components and showing fallback UI.

175. What is code splitting?
     - Answer: Splitting bundle into chunks loaded on demand, reducing initial JS.

176. SPA vs SSR vs SSG?
     - Answer: SPA renders mostly in browser. SSR renders per request on server. SSG pre-renders at build time. Tradeoffs: SEO, freshness, latency, infrastructure, interactivity.

177. What is hydration?
     - Answer: Client React attaches event handlers/state to server-rendered HTML.

178. What causes hydration mismatch?
     - Answer: Rendering different HTML on server and client due to dates, random values, browser-only APIs, locale, auth state, or nondeterminism.

179. Next.js App Router concept?
     - Answer: File-based routing with layouts, server components, client components, nested routes, streaming, and data fetching patterns.

180. Server Components vs Client Components?
     - Answer: Server Components render on server and can access server resources without shipping JS. Client Components run in browser and handle interactivity/hooks/browser APIs.

181. How do you decide component boundaries?
     - Answer: Based on responsibility, reuse, state ownership, testability, performance, and whether it needs browser interactivity.

182. What is a design system?
     - Answer: Shared components, tokens, patterns, and guidelines for consistent UI and faster development.

183. How do you build accessible components?
     - Answer: semantic HTML, labels, keyboard support, focus states, ARIA only when needed, color contrast, screen reader testing.

184. How do you handle forms?
     - Answer: schema validation, accessible labels/errors, touched/dirty states, submission state, server validation mapping, idempotency where needed.

185. How do you structure a frontend project?
     - Answer: Follow existing patterns. Common options: feature-based modules, shared UI/components, API clients, hooks, state, routes, tests.

186. What is microfrontend?
     - Answer: Independently developed/deployed frontend slices composed into one app. Useful for autonomy but adds integration, dependency, UX, and performance complexity.

187. When would you avoid microfrontends?
     - Answer: Small team/product, high need for consistent UX, low deployment independence, or when a modular monolith is enough.

188. What is Web Component interoperability with React?
     - Answer: React can render custom elements, pass attributes/properties with care, and listen to custom events via refs or wrappers.

189. How do you manage feature flags?
     - Answer: Central service/config, typed flags, default behavior, rollout targeting, kill switch, cleanup after rollout.

190. How do you handle frontend logging?
     - Answer: structured events, levels, context, redaction, sampling, correlation IDs, and integration with Sentry/OTel.

## 8. Performance, Optimization, And Scale

191. What are Core Web Vitals?
     - Answer: LCP measures loading, INP measures interaction responsiveness, CLS measures layout stability.

192. How do you improve LCP?
     - Answer: optimize server response, critical CSS, image sizing/compression/preload, reduce render-blocking JS/CSS, use CDN/cache.

193. How do you improve INP?
     - Answer: reduce long tasks, split work, debounce expensive handlers, memoize where useful, virtualize lists, avoid blocking main thread.

194. How do you improve CLS?
     - Answer: reserve dimensions for images/ads/dynamic content, avoid inserting content above existing content, use stable fonts/layout.

195. How do you profile frontend performance?
     - Answer: Chrome Performance panel, React Profiler, Lighthouse, Web Vitals, bundle analyzer, production RUM.

196. What is a long task?
     - Answer: Main-thread task over about 50ms that can delay input and rendering.

197. How do you handle large lists?
     - Answer: virtualization/windowing, pagination/infinite scroll, memoized row rendering, stable keys, avoid heavy per-row work.

198. How do you optimize bundle size?
     - Answer: code splitting, tree shaking, dependency audit, dynamic imports, remove duplicate deps, lighter libraries, analyze chunks.

199. How do you optimize images?
     - Answer: correct dimensions, modern formats, compression, lazy loading, responsive `srcset`, CDN transformations.

200. How do you optimize API-heavy pages?
     - Answer: parallelize independent requests, batch when useful, cache server state, avoid waterfalls, pagination, prefetch, skeleton states.

201. What is request waterfall?
     - Answer: Sequential network requests where later requests wait unnecessarily for earlier ones, increasing total load time.

202. What is caching strategy for frontend data?
     - Answer: Determine freshness, invalidation triggers, stale-while-revalidate, optimistic updates, cache keys, and permission/tenant boundaries.

203. What is stale-while-revalidate?
     - Answer: Serve cached data immediately while refetching in background to update cache.

204. How do you avoid overfetching?
     - Answer: API field selection, endpoint design, pagination, filtering server-side, GraphQL fragments or REST query params when appropriate.

205. How do you avoid underfetching?
     - Answer: Design endpoints/query composition so page requirements can be fetched without many sequential calls.

206. What is backpressure?
     - Answer: Mechanism to prevent producers from overwhelming consumers, e.g. rate limiting, queues, flow control.

207. How do you optimize WebSocket UI updates?
     - Answer: batch updates, throttle rendering, normalize data, avoid full-list rerenders, use incremental patching, handle reconnect/resync.

208. How do you scale frontend build systems?
     - Answer: task caching, incremental builds, project references, affected-package detection, parallelization, dependency hygiene, remote cache.

209. How do you measure if an optimization worked?
     - Answer: define metric and baseline, change one variable when possible, measure locally and in production/RUM, check regressions.

210. Performance tradeoff of SSR?
     - Answer: Faster first HTML/SEO but more server complexity and possible hydration cost. Client JS still matters.

211. What is TTFB?
     - Answer: Time to first byte from request start to first response byte. Affected by network, server processing, CDN/cache.

212. What is lazy loading?
     - Answer: Loading resources only when needed, such as below-the-fold images or route chunks.

213. What is prefetching?
     - Answer: Loading likely-needed resources before the user explicitly asks, trading bandwidth for perceived speed.

214. What causes memory pressure in a React app?
     - Answer: retained large data sets, event listeners, unbounded caches, timers, subscriptions, detached DOM, heavy client state.

## 9. DSA And Problem-Solving

215. How do you approach a coding problem?
     - Answer: Clarify input/output/constraints, discuss brute force, improve with data structures, analyze complexity, code cleanly, test edge cases.

216. Array vs linked list?
     - Answer: Arrays provide O(1) indexing and cache locality; inserts/deletes in middle cost O(n). Linked lists have O(1) insertion with node reference but O(n) access and poor cache locality.

217. Stack use cases?
     - Answer: parentheses validation, DFS, undo, call stack, monotonic stack.

218. Queue use cases?
     - Answer: BFS, task scheduling, rate limiting, producer-consumer.

219. Hash map complexity?
     - Answer: Average O(1) insert/lookup/delete; worst-case O(n) with collisions, though modern implementations mitigate.

220. Set use cases?
     - Answer: uniqueness, membership checks, duplicate detection, visited nodes.

221. Binary search requirement?
     - Answer: Search space must be monotonic or sorted; can be over values, not only arrays.

222. BFS vs DFS?
     - Answer: BFS explores level by level and finds shortest path in unweighted graphs. DFS explores deep paths and is useful for traversal, cycle detection, topological sort.

223. What is topological sort?
     - Answer: Ordering directed acyclic graph nodes so dependencies come before dependents.

224. How detect cycle in directed graph?
     - Answer: DFS with visiting/visited states or Kahn's algorithm checking if processed count is less than node count.

225. What is dynamic programming?
     - Answer: Solving problems with overlapping subproblems and optimal substructure by memoization or tabulation.

226. Memoization vs tabulation?
     - Answer: Memoization is top-down recursion with cache. Tabulation is bottom-up iterative filling.

227. Sliding window pattern?
     - Answer: Maintain a moving range to solve contiguous subarray/string problems efficiently.

228. Two pointers pattern?
     - Answer: Use two indexes moving through data, often for sorted arrays, partitioning, or pairs.

229. Prefix sum?
     - Answer: Precompute cumulative sums to answer range sum queries quickly.

230. Trie use case?
     - Answer: Prefix search, autocomplete, dictionary lookup.

231. Heap use case?
     - Answer: priority queue, top K, scheduling, merging sorted lists.

232. Monotonic stack use case?
     - Answer: next greater/smaller element, histogram rectangle, stock span.

233. Union Find use case?
     - Answer: dynamic connectivity, connected components, Kruskal's MST.

234. Big O of sorting?
     - Answer: Comparison sorts are generally O(n log n) lower bound. Counting/radix can be linear under constraints.

235. Stable sort?
     - Answer: Preserves relative order of equal elements.

236. Recursion risks?
     - Answer: stack overflow, repeated work without memoization, unclear base cases.

237. How do you test DSA solutions?
     - Answer: empty input, single item, duplicates, negative values, sorted/reversed, max constraints, invalid cases if allowed.

238. Problem: valid parentheses.
     - Answer: Use stack; push opening brackets, pop and match on closing. Valid if stack empty at end. O(n) time, O(n) space.

239. Problem: two sum.
     - Answer: Iterate numbers, store value->index in map, check target-current. O(n) time, O(n) space.

240. Problem: merge intervals.
     - Answer: Sort by start, iterate, merge when next start <= current end. O(n log n).

241. Problem: longest substring without repeating chars.
     - Answer: Sliding window with char->last index, move left past duplicates. O(n).

242. Problem: LRU cache.
     - Answer: Hash map plus doubly linked list. Map gives node lookup; list maintains recency. Get/put O(1).

243. Problem: debounce function.
     - Answer: Keep timer in closure. Clear previous timer, schedule new call after delay.

244. Problem: throttle function.
     - Answer: Track last execution time or timer. Execute at most once per interval.

245. Problem: flatten nested array.
     - Answer: DFS recursion/stack. Watch for max depth and non-array values.

246. Problem: deep equality.
     - Answer: Compare primitives, arrays lengths/items, object keys/values, handle null, dates/maps if required, and cycles if required.

247. Problem: implement Promise.all.
     - Answer: Return new Promise, resolve values by index, count completions, reject immediately on first rejection.

248. Problem: retry async function.
     - Answer: Loop attempts, catch errors, delay/backoff, stop after max attempts, preserve final error.

249. Problem: build tree from flat list.
     - Answer: Map id->node, then attach each node to parent children; roots have no parent. O(n).

250. Problem: search suggestions.
     - Answer: Trie for prefix lookup or sorted array with binary search range; choose based on update/query pattern.

## 10. Coding Questions Likely For This Role

251. Implement a React search box with debounced API calls.
     - Answer: Use controlled input, `useEffect` with debounce timer, abort previous fetch, show loading/error/empty states, cache if needed.

252. Build an infinite scrolling list.
     - Answer: Use cursor pagination, `IntersectionObserver`, TanStack Query `useInfiniteQuery`, stable keys, duplicate prevention, loading/error/retry.

253. Implement a table with sorting/filtering/pagination.
     - Answer: Keep query state in URL or component state, server-side for large data, use stable sort, debounced filters, loading states.

254. Implement an auth guard in React/Next.js.
     - Answer: Server-side/session check when possible, redirect unauthenticated users, avoid flashing protected content, enforce server authorization.

255. Implement role-based UI permissions.
     - Answer: Fetch permission claims, central helper/hook, hide/disable actions, but backend must enforce.

256. Implement a toast system.
     - Answer: Context/provider or external store, queue items with IDs, auto-dismiss timers, manual dismiss, accessibility live region.

257. Implement modal with accessibility.
     - Answer: Portal, focus trap, restore focus, Escape close, backdrop click if desired, `aria-modal`, labelled title, prevent background scroll.

258. Implement optimistic mutation.
     - Answer: Snapshot cache, update cache immediately, rollback on error, invalidate/refetch on settle.

259. Implement file upload with progress.
     - Answer: Use XHR/axios or fetch streams if supported, validate type/size, show progress, retry/cancel, handle server errors.

260. Implement WebSocket chat UI.
     - Answer: Connection lifecycle, auth, reconnect with backoff, heartbeat, message ordering, optimistic sends, dedupe, resync on reconnect.

261. Implement client-side rate limiting for a button.
     - Answer: Disable while pending, debounce/throttle clicks, backend idempotency key for real protection.

262. Implement a custom hook for localStorage.
     - Answer: Initialize safely in browser, serialize/parse with fallback, listen to storage events if cross-tab sync needed.

263. Implement error boundary.
     - Answer: Class component with `getDerivedStateFromError` and `componentDidCatch`, fallback UI, report error.

264. Implement virtualized list.
     - Answer: Calculate visible range from scroll offset/item height, render only range plus overscan. Prefer library in production.

265. Implement a type-safe API client.
     - Answer: Define endpoint functions, response types, runtime validation for external data, standardized error handling, auth headers/cookies.

266. Implement breadcrumb navigation.
     - Answer: Derive from route config, include labels/params, accessible nav landmark and ordered list.

267. Implement feature flag hook.
     - Answer: Read flag config from provider/cache, return typed value/default, support loading and override/test behavior.

268. Implement a reusable data-fetching hook.
     - Answer: Prefer TanStack Query; otherwise manage loading/error/data, cancellation, dependencies, stale results, refetch.

269. Implement frontend telemetry around a button action.
     - Answer: Start span/event, attach route/action/user-safe context, capture success/failure latency, redact sensitive data.

270. Implement secure embedding of third-party UI.
     - Answer: Decide iframe vs Web Component, isolate styles, define event contract, validate messages, handle auth without exposing secrets.

## 11. System Design - Frontend And Full Stack

271. Design a public-safety data dashboard.
     - Answer: Clarify users, data freshness, permissions, filters, map/table/chart views, audit logs, reliability, accessibility. Architecture: React/Next frontend, API gateway/BFF, backend services, cache, search/indexing, observability, RBAC.

272. Design a real-time incident feed.
     - Answer: WebSocket/SSE for realtime, cursor pagination for history, reconnect/resync, dedupe by event ID, backpressure, filters, permission checks, monitoring.

273. Design a chat/contact-center frontend.
     - Answer: Conversation list, message panel, assignment, presence, WebSocket, optimistic sending, message ordering, attachment upload, auth, observability.

274. Design frontend architecture for multi-tenant app.
     - Answer: Tenant resolved server-side, tenant-aware API calls/cache keys, route guards, branding config, permission model, data isolation, audit logs.

275. Design a frontend SDK/widget.
     - Answer: Small bundle, isolated styles, async loader, versioning, configuration, event API, security, CSP compatibility, graceful failure, performance budget.

276. Design a BFF for frontend auth.
     - Answer: Browser uses secure HttpOnly cookie. BFF stores/refreshes backend tokens server-side, proxies APIs, enforces CSRF/rate limit, logs trace IDs.

277. Design cursor pagination API.
     - Answer: Request: `limit`, `after`, `before`, filters. Response: `edges`, `pageInfo`. Cursor encodes stable sort fields/version. Enforce deterministic order and max limit.

278. Design notification system.
     - Answer: Event producer, queue, notification service, user preferences, delivery channels, retry, idempotency, read/unread state, frontend realtime updates.

279. Design file upload system.
     - Answer: Frontend requests signed URL, uploads directly to object storage, backend records metadata, virus scan, progress UI, retry/resume, access control.

280. Design audit logging for sensitive actions.
     - Answer: Server-side immutable logs with actor, action, target, tenant, timestamp, request ID, before/after if safe, retention/search, tamper resistance.

281. Design feature flag platform usage.
     - Answer: Flag evaluation server/client depending sensitivity, target rules, default values, kill switches, audit changes, cleanup process.

282. Design observability for frontend app.
     - Answer: RUM metrics, error tracking, distributed tracing, logs, release tracking, source maps, privacy scrubbing, dashboards and alerts.

283. Design a plugin-based frontend platform.
     - Answer: Stable plugin contract, manifest, lazy loading, sandbox/isolation, permissions, version compatibility, theming, observability, fallback on plugin failure.

284. Design frontend deployment pipeline.
     - Answer: lint/typecheck/test/build, bundle analysis, environment config validation, preview deployments, smoke tests, canary, rollback, source maps upload.

285. Design a form builder.
     - Answer: Schema-driven fields, validation rules, conditional logic, versioned submissions, renderer, accessibility, draft autosave, backend validation.

286. Design an API catalog UI.
     - Answer: Search/filter, endpoint details, schema examples, auth info, versioning, try-it console with safe sandboxing, generated docs from OpenAPI.

287. Design offline-capable frontend.
     - Answer: Service worker cache, local storage/IndexedDB, sync queue, conflict resolution, stale indicators, security around cached sensitive data.

288. Design rate limiting for public API.
     - Answer: token bucket/leaky bucket, per-user/IP/API key, Redis counters, headers, 429 responses, burst handling, monitoring.

289. Design a role and permission model.
     - Answer: Users, roles, permissions, tenant scope, resource-level checks, server enforcement, frontend UX mapping, audit changes.

290. Design a system for live telemetry visualization.
     - Answer: Stream ingestion, time-series storage, aggregation, WebSocket/SSE updates, chart decimation, time range filters, backpressure, downsampling.

291. Design a secure third-party integration.
     - Answer: OAuth/client credentials, token storage, webhook validation, retries, rate limits, audit logs, least privilege, failure modes.

292. Design frontend for high-stakes workflows.
     - Answer: clear status, confirmation for destructive actions, undo where possible, audit trail, accessibility, latency feedback, error recovery, no ambiguous UI.

## 12. Frontend Testing And Quality

293. Unit vs integration vs E2E tests?
     - Answer: Unit tests isolated logic/components. Integration tests multiple units together. E2E tests full user flows in browser.

294. What to test in React components?
     - Answer: user-visible behavior, accessibility roles/labels, state transitions, error/loading states, integration with mocked APIs.

295. What not to over-test?
     - Answer: implementation details, exact internal state, library behavior, brittle snapshots.

296. Jest vs React Testing Library?
     - Answer: Jest is test runner/assertion/mocking ecosystem. RTL helps render components and query like a user.

297. How do you test async UI?
     - Answer: mock API, use `findBy`/`waitFor`, assert loading then success/error, handle timers carefully.

298. How do you test hooks?
     - Answer: Use component or hook testing utilities; prefer testing behavior through components when possible.

299. How do you test TanStack Query?
     - Answer: Provide test QueryClient with retries off, mock network, assert loading/data/error and cache invalidation behavior.

300. How do you test accessibility?
     - Answer: semantic queries, keyboard navigation tests, axe checks, screen reader spot checks for complex widgets.

301. How do you test performance regressions?
     - Answer: bundle size checks, Lighthouse CI, Web Vitals/RUM monitoring, targeted performance tests for critical interactions.

302. How do you test WebSocket flows?
     - Answer: mock WebSocket server/client, test connect/message/reconnect/error states, dedupe/order handling.

303. What belongs in CI?
     - Answer: lint, typecheck, unit/integration tests, build, dependency audit if applicable, bundle limits, E2E smoke for critical flows.

304. How do you make tests less flaky?
     - Answer: avoid arbitrary sleeps, wait for real conditions, isolate test data, control timers/network, reduce cross-test shared state.

305. What is test pyramid?
     - Answer: Many fast unit tests, fewer integration tests, fewer expensive E2E tests. Shape can vary by product risk.

## 13. Code Review And Architecture Discussion

306. What do you look for in architecture design meetings?
     - Answer: problem clarity, constraints, alternatives, tradeoffs, data flow, failure modes, security, observability, rollout, ownership.

307. How do you propose a design?
     - Answer: Write context, goals, non-goals, options, recommendation, risks, migration plan, open questions.

308. How do you prevent frontend architecture from becoming messy?
     - Answer: clear boundaries, consistent data-fetching/state patterns, shared components, lint rules, code review, deleting old paths.

309. When would you introduce abstraction?
     - Answer: When duplication is real, variation points are understood, and abstraction makes usage simpler without hiding important behavior.

310. How do you handle tech debt?
     - Answer: classify risk, connect to business/user impact, fix opportunistically near touched code, schedule bigger work with measurable benefit.

311. How do you migrate a large frontend feature safely?
     - Answer: strangler pattern, feature flags, compatibility layer, tests, metrics, gradual rollout, rollback plan.

312. How do you handle breaking API changes?
     - Answer: version contract, support old/new temporarily, update clients, monitor usage, communicate timeline, remove old path after migration.

313. How do you document frontend decisions?
     - Answer: lightweight ADRs, README near code, diagrams for data flow, examples for shared utilities/components.

314. What makes a PR easy to review?
     - Answer: focused scope, clear description, screenshots for UI, test notes, linked ticket, small commits if helpful.

315. How do you evaluate a dependency?
     - Answer: maintenance, bundle size, API fit, security, license, community, alternatives, cost of replacing.

316. How do you deal with legacy code?
     - Answer: understand behavior first, add characterization tests for risky paths, make small changes, improve boundaries gradually.

## 14. Axon-Specific Prep Questions

317. How would you make public safety data accessible and actionable?
     - Answer: clear hierarchy, fast search/filter, maps/tables/timelines, trustworthy data freshness indicators, permissions, auditability, accessibility, and strong error states.

318. What does quality mean for Axon's product domain?
     - Answer: correctness, reliability, security, performance, accessibility, auditability, and calm UX under stressful workflows.

319. How would you handle sensitive evidence/public-safety data in frontend?
     - Answer: least privilege, server-side authorization, no sensitive local storage, redacted logs, secure transport, audit events, timeout/session policies.

320. How would you design UI for users under pressure?
     - Answer: reduce cognitive load, clear primary actions, stable layout, visible status, keyboard accessibility, avoid ambiguous states, strong confirmation/error recovery.

321. How do you balance speed and safety?
     - Answer: ship small slices, protect critical paths with tests/feature flags/observability, and keep rollback paths available.

322. How would you contribute beyond assigned tickets?
     - Answer: improve tooling, documentation, observability, code review quality, onboarding notes, and shared components.

323. What would you ask Axon interviewers?
     - Answer: team product area, frontend architecture, React/Next usage, testing expectations, performance metrics, release process, collaboration with Product/Design, biggest current frontend challenge.

324. What is your 30-60-90 day plan?
     - Answer: 30: learn product/code/team and ship small fixes. 60: own a feature and improve a pain point. 90: drive a larger feature or quality/performance improvement with measurable impact.

325. What should Axon know about your background that is not obvious?
     - Answer: "I am strongest when frontend work touches system reliability and product ownership. I can build UI, but I also care about API contracts, auth, observability, deployment, and maintainability."

## 15. Questions To Ask The Interviewer

326. What product area would this role support?
     - Good signal: You care about real team context.

327. What frontend stack and architecture does the team use today?
     - Good signal: You can map your React/TS/Next/Vite experience.

328. What are the biggest frontend performance or reliability challenges now?
     - Good signal: Connect to your performance/observability experience.

329. How does the team collaborate with Product and Design?
     - Good signal: Aligns with JD's end-to-end ownership.

330. What does code review look like at Axon?
     - Good signal: Aligns with quality and engineering culture.

331. How are frontend releases done?
     - Good signal: Lets you discuss CI/CD, observability, rollback.

332. How do teams measure user impact and product quality?
     - Good signal: Mission/product maturity.

333. What does success look like in the first 6 months?
     - Good signal: Clarifies expectations.

334. What mentorship or growth paths are available?
     - Good signal: Growth-oriented but not passive.

335. What is one technical challenge the team is excited to solve this year?
     - Good signal: Opens architecture conversation.

## 16. Fast Revision Checklist

- Be ready to explain every CV bullet in detail: goal, your ownership, tradeoffs, result.
- Prepare one STAR story each for: ownership, conflict, failure, performance, production issue, ambiguity, mentoring.
- Practice coding out loud in JavaScript/TypeScript.
- Review React hooks, rendering, state, effects, memoization, accessibility, testing.
- Review browser fundamentals: event loop, rendering pipeline, HTTP, caching, CORS, security.
- Review auth/security: cookies, JWT, OAuth/OIDC, CSRF, XSS, WebSocket auth, tenant scoping.
- Review DSA patterns: hash map, sliding window, two pointers, stack/queue, BFS/DFS, binary search, heap, DP.
- Prepare 5 questions for Axon about team, architecture, releases, product domain, and success criteria.
