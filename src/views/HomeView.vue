<script setup lang="ts">
import { computed, shallowRef } from 'vue'

type Topic = 'frontend' | 'go' | 'cloud' | 'devops'
type GeneratorTopic = Topic | 'all'

type Task = {
  id: string
  topic: Topic
  title: string
  kind: string
  brief: string
  source?: 'seed' | 'ai'
}

type GeneratedTaskPayload = {
  topic: Topic
  title: string
  kind: string
  brief: string
}

const topicLabels: Record<Topic, string> = {
  frontend: 'Frontend',
  go: 'Go',
  cloud: 'Cloud',
  devops: 'DevOps',
}

const generatorTopicLabels: Record<GeneratorTopic, string> = {
  all: 'All',
  ...topicLabels,
}

const tasks = shallowRef<Task[]>([
  {
    id: 'frontend-state-debug',
    topic: 'frontend',
    title: 'Debug a UI state mismatch after navigation',
    kind: 'Debug',
    brief: 'Trace where derived state became stale and note the smallest structural cleanup.',
    source: 'seed',
  },
  {
    id: 'go-readiness',
    topic: 'go',
    title: 'Diagnose a flaky readiness probe in a Go service',
    kind: 'Incident',
    brief:
      'Work through a failed startup path and write the smallest safe fix you would try first.',
    source: 'seed',
  },
  {
    id: 'cloud-rollout',
    topic: 'cloud',
    title: 'Review a risky rollout plan for a small service',
    kind: 'Decision',
    brief: 'Write the checks, rollback triggers, and signals you would want before shipping.',
    source: 'seed',
  },
  {
    id: 'devops-logs',
    topic: 'devops',
    title: 'Read noisy service logs and extract the actual incident',
    kind: 'Explain',
    brief: 'Separate symptoms from cause and write the update you would send to the team.',
    source: 'seed',
  },
])

const selectedTaskId = shallowRef<string | null>(tasks.value[0]?.id ?? null)
const learningTasks = shallowRef<Task[]>([])

const generatorTopic = shallowRef<GeneratorTopic>('all')
const generatorFocus = shallowRef('')
const generatorStatus = shallowRef<'idle' | 'loading' | 'error'>('idle')
const generatorError = shallowRef('')

const selectedTask = computed<Task | null>(
  () => tasks.value.find((task) => task.id === selectedTaskId.value) ?? null,
)

const displayedLearningTasks = computed(() => [...learningTasks.value].reverse())

const isSelectedTaskConfirmed = computed(
  () =>
    selectedTask.value !== null &&
    learningTasks.value.some((task) => task.id === selectedTask.value?.id),
)

const aiModel = import.meta.env.VITE_OPENAI_MODEL ?? 'gpt-5.2'
const aiBaseUrl = import.meta.env.VITE_OPENAI_BASE_URL ?? 'https://api.openai.com/v1'
const aiApiKey = import.meta.env.VITE_OPENAI_API_KEY ?? ''

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

function normalizeTopic(value: string): Topic | null {
  if (value === 'frontend' || value === 'go' || value === 'cloud' || value === 'devops') {
    return value
  }

  return null
}

function buildGeneratorPrompt(topic: GeneratorTopic, focus: string) {
  const focusLine = focus.trim().length
    ? `Focus the task around this extra context: ${focus.trim()}.`
    : 'Do not rely on extra context outside the topic itself.'

  const topicLine =
    topic === 'all'
      ? 'Choose the best topic from frontend, go, cloud, or devops.'
      : `Topic: ${topicLabels[topic]}.`

  return [
    'You generate one concrete engineering learning task.',
    topicLine,
    focusLine,
    'Return JSON only with keys: topic, title, kind, brief.',
    'The topic value must be exactly one of: frontend, go, cloud, devops.',
    'Make the task specific, practical, and sized for one focused work session.',
    'Use a short kind such as Build, Debug, Incident, Decision, Explain, or Refactor.',
    'The brief should be one concise sentence.',
    'Do not include markdown fences.',
  ].join(' ')
}

function createTaskId(topic: Topic, title: string) {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 40)

  return `${topic}-${slug || Date.now()}`
}

async function generateTask() {
  if (!aiApiKey) {
    generatorStatus.value = 'error'
    generatorError.value =
      'Set VITE_OPENAI_API_KEY to generate items from AI in this local app.'
    return
  }

  generatorStatus.value = 'loading'
  generatorError.value = ''

  try {
    const response = await fetch(`${aiBaseUrl}/responses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${aiApiKey}`,
      },
      body: JSON.stringify({
        model: aiModel,
        input: buildGeneratorPrompt(generatorTopic.value, generatorFocus.value),
      }),
    })

    if (!response.ok) {
      throw new Error(`Request failed with ${response.status}`)
    }

    const data = (await response.json()) as { output_text?: string }
    const rawText = data.output_text?.trim()

    if (!rawText) {
      throw new Error('No text was returned from the model.')
    }

    const parsed = JSON.parse(rawText) as GeneratedTaskPayload
    const parsedTopic =
      generatorTopic.value === 'all' ? normalizeTopic(parsed.topic) : generatorTopic.value

    if (!parsedTopic || !parsed.title || !parsed.kind || !parsed.brief) {
      throw new Error('The model response was missing required fields.')
    }

    const newTask: Task = {
      id: createTaskId(parsedTopic, parsed.title),
      topic: parsedTopic,
      title: parsed.title,
      kind: parsed.kind,
      brief: parsed.brief,
      source: 'ai',
    }

    tasks.value = [newTask, ...tasks.value]
    selectedTaskId.value = newTask.id
    generatorFocus.value = ''
    generatorStatus.value = 'idle'
  } catch (error) {
    generatorStatus.value = 'error'
    generatorError.value =
      error instanceof Error ? error.message : 'Something went wrong while generating the task.'
  }
}
</script>

<template>
  <div class="min-h-[100dvh] bg-[var(--color-bg)] text-[var(--color-ink)]">
    <div class="pointer-events-none fixed inset-0 overflow-hidden">
      <div class="grain-layer absolute inset-0 opacity-20" />
    </div>

    <main
      class="relative mx-auto flex w-full max-w-[1320px] flex-col px-4 pb-10 pt-5 sm:px-6 sm:pb-14 sm:pt-6 lg:px-8"
    >
      <header class="border-b border-black/12 pb-8">
        <p class="text-[0.72rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">Mimir</p>
        <div class="mt-6 grid gap-8 lg:grid-cols-[0.9fr_1.3fr] lg:items-end">
          <div class="space-y-3">
            <h1
              class="font-serif-display max-w-[12ch] text-4xl font-medium tracking-[-0.06em] sm:text-5xl lg:text-[4.1rem]"
            >
              Choose something worth doing next.
            </h1>
          </div>
          <p class="max-w-[56ch] text-sm leading-7 text-[var(--color-muted)] sm:text-base">
            Generate a fresh item for frontend, go, cloud, or devops, or let AI choose across all of them.
          </p>
        </div>
      </header>

      <section class="pt-8 lg:pt-10">
        <div class="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div class="min-w-0">
            <div class="rounded-[1.2rem] border border-black/18 bg-[rgba(255,255,255,0.5)] px-5 py-5">
              <div class="flex flex-col gap-5">
                <div class="flex flex-wrap items-end justify-between gap-4 border-b border-black/14 pb-4">
                  <div>
                    <p class="text-[0.72rem] uppercase tracking-[0.22em] text-[var(--color-accent)]">
                      AI generator
                    </p>
                    <h2 class="font-serif-display mt-2 text-2xl font-medium tracking-[-0.04em]">
                      Create a new item
                    </h2>
                  </div>
                  <p class="max-w-[34ch] text-sm leading-6 text-[var(--color-muted)]">
                    Personal-use setup. Add your OpenAI key through `VITE_OPENAI_API_KEY`.
                  </p>
                </div>

                <div class="flex flex-wrap gap-2.5">
                  <button
                    v-for="(label, topic) in generatorTopicLabels"
                    :key="topic"
                    type="button"
                    class="rounded-full border px-4 py-2 text-sm transition duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-black/[0.04] active:scale-[0.98]"
                    :class="
                      generatorTopic === topic
                        ? 'border-[color:var(--color-accent)] bg-[rgba(127,89,51,0.16)] text-[var(--color-ink)]'
                        : 'border-black/18 bg-[rgba(255,255,255,0.6)] text-[var(--color-ink)]/80'
                    "
                    @click="generatorTopic = topic as GeneratorTopic"
                  >
                    {{ label }}
                  </button>
                </div>

                <label class="flex flex-col gap-2">
                  <span class="text-sm text-[var(--color-ink)]/85">Optional focus</span>
                  <textarea
                    v-model="generatorFocus"
                    rows="3"
                    class="rounded-[1rem] border border-black/18 bg-[rgba(255,255,255,0.72)] px-4 py-3 text-sm leading-6 outline-none transition duration-300 placeholder:text-[color:rgba(79,71,62,0.72)] focus:border-[color:var(--color-accent)]"
                    placeholder="Example: auth flows, incident handling, deployment safety, rendering bugs..."
                  />
                </label>

                <div class="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    class="rounded-full border border-black/18 bg-[rgba(255,255,255,0.74)] px-4 py-2 text-sm text-[var(--color-ink)] transition duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[rgba(127,89,51,0.08)] active:scale-[0.98] disabled:cursor-wait disabled:opacity-45"
                    :disabled="generatorStatus === 'loading'"
                    @click="generateTask"
                  >
                    {{ generatorStatus === 'loading' ? 'Generating...' : 'Generate item' }}
                  </button>
                  <p v-if="generatorStatus === 'error'" class="text-sm text-[var(--color-accent)]">
                    {{ generatorError }}
                  </p>
                </div>
              </div>
            </div>

            <div class="mt-8 flex flex-wrap items-end justify-between gap-4 border-b border-black/12 pb-4">
              <div>
                <p class="text-[0.72rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  Things to do
                </p>
                <h2 class="font-serif-display mt-2 text-2xl font-medium tracking-[-0.04em]">
                  Current queue
                </h2>
              </div>
              <p class="max-w-[34ch] text-sm leading-6 text-[var(--color-muted)]">
                Select one item from the list, then add it to your learning queue.
              </p>
            </div>

            <div
              v-if="selectedTask"
              class="mt-5 rounded-[1.2rem] border border-[color:var(--color-accent)] bg-[rgba(176,137,89,0.05)] px-5 py-4"
            >
              <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div class="min-w-0">
                  <p class="text-[0.72rem] uppercase tracking-[0.22em] text-[var(--color-accent)]">
                    Selected
                  </p>
                  <h3 class="font-serif-display mt-2 text-lg font-medium tracking-[-0.03em] text-[var(--color-ink)]">
                    {{ selectedTask.title }}
                  </h3>
                  <p class="mt-1 text-sm text-[var(--color-muted)]">
                    {{ topicLabels[selectedTask.topic] }} · {{ selectedTask.kind }}
                    <span v-if="selectedTask.source === 'ai'">· AI</span>
                  </p>
                  <p class="mt-2 max-w-[62ch] text-sm leading-6 text-[var(--color-muted)]">
                    {{ selectedTask.brief }}
                  </p>
                </div>
                <button
                  type="button"
                  class="w-fit rounded-full border border-black/14 px-4 py-2 text-sm text-[var(--color-ink)] transition duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-black/[0.03] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-45"
                  :disabled="isSelectedTaskConfirmed"
                  @click="confirmSelectedTask"
                >
                  {{ isSelectedTaskConfirmed ? 'Added to learning' : 'Confirm selection' }}
                </button>
              </div>
            </div>

            <div class="mt-4 space-y-2">
              <button
                v-for="(task, index) in tasks"
                :key="task.id"
                type="button"
                class="reveal-item group grid w-full gap-4 rounded-[1rem] border-l-2 border-transparent px-2 py-5 text-left transition duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-black/[0.02] active:scale-[0.995] sm:grid-cols-[minmax(0,1fr)_auto] sm:px-3"
                :class="
                  selectedTaskId === task.id
                    ? 'border-[color:var(--color-accent)] bg-[rgba(176,137,89,0.04)]'
                    : ''
                "
                :style="{ '--delay': `${index * 55}ms` }"
                @click="selectTask(task.id)"
              >
                <div class="min-w-0">
                  <p
                    class="text-[0.72rem] uppercase tracking-[0.18em]"
                    :class="
                      selectedTaskId === task.id
                        ? 'text-[var(--color-accent)]'
                        : 'text-[var(--color-muted)]'
                    "
                  >
                    {{ topicLabels[task.topic] }}
                  </p>
                  <h3
                    class="font-serif-display mt-2 text-lg font-medium tracking-[-0.03em] transition duration-300"
                    :class="
                      selectedTaskId === task.id
                        ? 'text-[var(--color-ink)]'
                        : 'text-[var(--color-ink)]/88 group-hover:text-[var(--color-ink)]'
                    "
                  >
                    {{ task.title }}
                  </h3>
                  <p class="mt-2 max-w-[62ch] text-sm leading-6 text-[var(--color-muted)]">
                    {{ task.brief }}
                  </p>
                </div>
                <div class="flex items-center justify-start gap-2 sm:justify-end">
                  <span
                    v-if="task.source === 'ai'"
                    class="rounded-full border border-black/14 px-3 py-2 text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]"
                  >
                    AI
                  </span>
                  <span
                    class="rounded-full border px-4 py-2 text-sm transition duration-300"
                    :class="
                      selectedTaskId === task.id
                        ? 'border-[color:var(--color-accent)] bg-[rgba(176,137,89,0.08)] text-[var(--color-ink)]'
                        : 'border-black/14 text-[var(--color-muted)] group-hover:border-black/20'
                    "
                  >
                    {{ task.kind }}
                  </span>
                </div>
              </button>
            </div>
          </div>

          <aside class="space-y-4">
            <div class="border-b border-black/12 pb-4">
              <p class="text-[0.72rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                Learning
              </p>
              <p class="mt-1 text-sm leading-6 text-[var(--color-muted)]">
                Confirmed items to work through next.
              </p>
            </div>

            <div v-if="learningTasks.length" class="space-y-2">
              <article
                v-for="task in displayedLearningTasks"
                :key="task.id"
                class="space-y-3 rounded-[1rem] px-3 py-4"
              >
                <div class="flex items-start justify-between gap-3">
                  <div class="min-w-0">
                    <p class="text-[0.72rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      {{ topicLabels[task.topic] }}
                    </p>
                    <p class="font-serif-display mt-2 text-base font-medium tracking-[-0.02em] text-[var(--color-ink)]">
                      {{ task.title }}
                    </p>
                    <p class="mt-1 text-sm text-[var(--color-muted)]">{{ task.kind }}</p>
                  </div>
                  <button
                    type="button"
                    class="rounded-full border border-black/14 px-3 py-1.5 text-sm text-[var(--color-muted)] transition duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-black/[0.03] hover:text-[var(--color-ink)] active:scale-[0.98]"
                    @click="removeLearningTask(task.id)"
                  >
                    Remove
                  </button>
                </div>
              </article>
            </div>

            <div
              v-else
              class="rounded-[1rem] border border-dashed border-black/16 px-5 py-8 text-sm leading-6 text-[var(--color-muted)]"
            >
              Confirm a task to start building your learning list.
            </div>
          </aside>
        </div>
      </section>
    </main>
  </div>
</template>
