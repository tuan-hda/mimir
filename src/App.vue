<script setup lang="ts">
import { computed, shallowRef } from 'vue'

type Topic = {
  id: string
  name: string
  note: string
}

type Task = {
  id: string
  topicId: string
  title: string
  kind: string
  brief: string
}

const topics: Topic[] = [
  { id: 'all', name: 'All', note: 'Everything currently in rotation.' },
  { id: 'ai', name: 'AI', note: 'Agents, evals, memory, tool use.' },
  { id: 'frontend', name: 'Frontend', note: 'Runtime behavior, UI polish, debugging.' },
  { id: 'go', name: 'Go backend', note: 'HTTP, concurrency, sessions, service design.' },
  { id: 'devops', name: 'DevOps and cloud', note: 'Deployments, observability, incident response.' },
]

const tasks: Task[] = [
  {
    id: 'go-readiness',
    topicId: 'go',
    title: 'Diagnose a flaky readiness probe in a Go service',
    kind: 'Incident',
    brief:
      'Work through a failed startup path and write the smallest safe fix you would try first.',
  },
  {
    id: 'agent-eval',
    topicId: 'ai',
    title: 'Turn one agent idea into a small eval plan',
    kind: 'Build',
    brief: 'Define the task, success criteria, and the one failure case you expect to catch early.',
  },
  {
    id: 'rendering-bug',
    topicId: 'frontend',
    title: 'Debug a UI state mismatch after navigation',
    kind: 'Debug',
    brief: 'Trace where derived state became stale and note the smallest structural cleanup.',
  },
  {
    id: 'bff-tradeoff',
    topicId: 'go',
    title: 'Compare a Go BFF against a thinner edge layer',
    kind: 'Decision',
    brief: 'Write a short recommendation based on control, complexity, and future maintenance.',
  },
  {
    id: 'cloud-logs',
    topicId: 'devops',
    title: 'Read noisy Cloud Run logs and extract the actual incident',
    kind: 'Explain',
    brief: 'Separate symptoms from cause and write the update you would send to the team.',
  },
  {
    id: 'article-to-build',
    topicId: 'ai',
    title: 'Read one article and turn it into something buildable',
    kind: 'Learn',
    brief: 'Keep only the one idea that deserves an experiment and discard the rest.',
  },
]

const selectedTopicId = shallowRef<string>('all')
const selectedTaskId = shallowRef<string | null>(tasks[0]?.id ?? null)
const learningTasks = shallowRef<Task[]>([])

const visibleTasks = computed(() =>
  selectedTopicId.value === 'all'
    ? tasks
    : tasks.filter((task) => task.topicId === selectedTopicId.value),
)

const selectedTopic = computed<Topic>(
  () => topics.find((topic) => topic.id === selectedTopicId.value) ?? topics[0]!,
)

const selectedTask = computed<Task | null>(
  () => tasks.find((task) => task.id === selectedTaskId.value) ?? null,
)

const isSelectedTaskConfirmed = computed(
  () =>
    selectedTask.value !== null &&
    learningTasks.value.some((task) => task.id === selectedTask.value?.id),
)

function selectTopic(topicId: string) {
  selectedTopicId.value = topicId
  const firstVisibleTask =
    topicId === 'all' ? tasks[0] : tasks.find((task) => task.topicId === topicId) ?? null
  selectedTaskId.value = firstVisibleTask?.id ?? null
}

function selectTask(taskId: string) {
  selectedTaskId.value = taskId
}

function confirmSelectedTask() {
  if (selectedTask.value === null || isSelectedTaskConfirmed.value) {
    return
  }

  learningTasks.value = [...learningTasks.value, selectedTask.value]
}

function removeLearningTask(taskId: string) {
  learningTasks.value = learningTasks.value.filter((task) => task.id !== taskId)
}
</script>

<template>
  <div class="min-h-[100dvh] bg-[var(--color-bg)] text-[var(--color-ink)]">
    <div class="pointer-events-none fixed inset-0 overflow-hidden">
      <div class="grain-layer absolute inset-0 opacity-30" />
    </div>

    <main
      class="relative mx-auto flex w-full max-w-[1380px] flex-col px-4 pb-10 pt-5 sm:px-6 sm:pb-14 sm:pt-6 lg:px-8"
    >
      <header class="border-b border-black/6 pb-8">
        <p class="text-[0.72rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">Mimir</p>
        <div class="mt-6 grid gap-8 lg:grid-cols-[0.9fr_1.3fr] lg:items-end">
          <div class="space-y-3">
            <h1
              class="font-serif-display max-w-[12ch] text-4xl font-medium tracking-[-0.06em] sm:text-5xl lg:text-[4.2rem]"
            >
              Choose something worth doing next.
            </h1>
          </div>
          <p class="max-w-[58ch] text-sm leading-7 text-[var(--color-muted)] sm:text-base">
            Pick a topic, choose one concrete thing, then confirm it into your learning list.
          </p>
        </div>
      </header>

      <section class="pt-8 lg:pt-10">
        <div class="grid min-w-0 gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div class="min-w-0">
            <div class="border-b border-black/6 pb-5">
              <p class="text-[0.72rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                Topics
              </p>
              <div class="mt-4 flex flex-wrap gap-2.5">
                <button
                  v-for="topic in topics"
                  :key="topic.id"
                  type="button"
                  class="rounded-full border px-4 py-2 text-sm transition duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[1px] active:scale-[0.98]"
                  :class="
                    selectedTopicId === topic.id
                      ? 'border-[color:var(--color-accent)] bg-[rgba(176,137,89,0.08)] font-medium text-[var(--color-ink)]'
                      : 'border-black/8 bg-white/45 font-medium text-[color:rgba(33,29,24,0.88)] hover:border-black/14 hover:text-[var(--color-ink)]'
                  "
                  @click="selectTopic(topic.id)"
                >
                  {{ topic.name }}
                </button>
              </div>
            </div>

            <div class="flex flex-wrap items-end justify-between gap-4 border-b border-black/6 pb-4">
              <div>
                <p class="text-[0.72rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  Things to do
                </p>
                <h2 class="font-serif-display mt-2 text-2xl font-medium tracking-[-0.04em]">
                  {{ selectedTopic.name }}
                </h2>
              </div>
              <p class="max-w-[38ch] text-sm leading-6 text-[var(--color-muted)]">
                {{ selectedTopic.note }}
              </p>
            </div>

            <div
              v-if="selectedTask"
              class="mt-5 flex flex-col gap-4 rounded-[1.5rem] border border-black/8 bg-white/55 px-5 py-4 sm:flex-row sm:items-end sm:justify-between"
            >
              <div class="min-w-0">
                <p class="text-[0.72rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  Selected
                </p>
                <h3 class="font-serif-display mt-2 text-lg font-medium tracking-[-0.03em] text-[var(--color-ink)]">
                  {{ selectedTask.title }}
                </h3>
                <p class="mt-1 text-sm leading-6 text-[var(--color-muted)]">
                  {{ selectedTask.brief }}
                </p>
              </div>
              <button
                type="button"
                class="w-fit rounded-full border border-black/8 px-4 py-2 text-sm text-[var(--color-ink)] transition duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[1px] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-45"
                :disabled="isSelectedTaskConfirmed"
                @click="confirmSelectedTask"
              >
                {{ isSelectedTaskConfirmed ? 'Added to learning' : 'Confirm selection' }}
              </button>
            </div>

            <div v-if="visibleTasks.length" class="divide-y divide-black/6">
              <button
                v-for="(task, index) in visibleTasks"
                :key="task.id"
                type="button"
                class="reveal-item group grid w-full gap-4 rounded-[1.2rem] px-3 py-5 text-left transition duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white/50 hover:-translate-y-[1px] active:scale-[0.995] sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:px-4"
                :style="{ '--delay': `${index * 70}ms` }"
                @click="selectTask(task.id)"
              >
                <div class="min-w-0">
                  <h3
                    class="font-serif-display text-lg font-medium tracking-[-0.03em] transition duration-300"
                    :class="
                      selectedTaskId === task.id
                        ? 'text-[var(--color-ink)]'
                        : 'text-[var(--color-ink)]/84 group-hover:text-[var(--color-ink)]'
                    "
                  >
                    {{ task.title }}
                  </h3>
                  <p class="mt-2 max-w-[62ch] text-sm leading-6 text-[var(--color-muted)]">
                    {{ task.brief }}
                  </p>
                </div>
                <div class="flex items-center justify-start sm:justify-end">
                  <span
                    class="rounded-full border px-4 py-2 text-sm transition duration-300 group-hover:border-black/14"
                    :class="
                      selectedTaskId === task.id
                        ? 'border-[color:var(--color-accent)] bg-[rgba(176,137,89,0.08)] text-[var(--color-ink)]'
                        : 'border-black/8 bg-white/50 text-[var(--color-muted)]'
                    "
                  >
                    {{ task.kind }}
                  </span>
                </div>
              </button>
            </div>

            <div
              v-else
              class="mt-6 rounded-[1.5rem] border border-dashed border-black/10 bg-white/40 px-5 py-8 text-sm leading-6 text-[var(--color-muted)]"
            >
              Nothing is queued for this topic yet.
            </div>
          </div>

          <aside class="space-y-4">
            <div class="space-y-1 border-b border-black/6 pb-4">
              <p class="text-[0.72rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                Learning
              </p>
              <p class="text-sm leading-6 text-[var(--color-muted)]">
                Confirmed items to work through next.
              </p>
            </div>

            <div v-if="learningTasks.length" class="divide-y divide-black/6">
              <article v-for="task in learningTasks" :key="task.id" class="space-y-3 py-4">
                <div class="flex items-start justify-between gap-3">
                  <div class="min-w-0">
                    <p class="text-base font-medium tracking-[-0.02em] text-[var(--color-ink)]">
                      {{ task.title }}
                    </p>
                    <p class="mt-1 text-sm text-[var(--color-muted)]">{{ task.kind }}</p>
                  </div>
                  <button
                    type="button"
                    class="rounded-full border border-black/8 px-3 py-1.5 text-sm text-[var(--color-muted)] transition duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-[var(--color-ink)] active:scale-[0.98]"
                    @click="removeLearningTask(task.id)"
                  >
                    Remove
                  </button>
                </div>
              </article>
            </div>

            <div
              v-else
              class="rounded-[1.5rem] border border-dashed border-black/10 bg-white/40 px-5 py-8 text-sm leading-6 text-[var(--color-muted)]"
            >
              Confirm a task to start building your learning list.
            </div>
          </aside>
        </div>
      </section>
    </main>
  </div>
</template>
