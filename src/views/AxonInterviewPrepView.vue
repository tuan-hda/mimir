<script setup lang="ts">
import { computed } from 'vue'

import InterviewPrepSection from '../components/axon-prep/InterviewPrepSection.vue'
import questionBankMarkdown from '../content/axonInterviewQuestionBank.md?raw'

type QuestionItem = {
  id: string
  number: number
  prompt: string
  answerLines: string[]
}

type PrepSection = {
  id: string
  number: number
  title: string
  introLines: string[]
  questions: QuestionItem[]
  notes: string[]
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function cleanLine(value: string) {
  return value
    .replace(/^\s+-\s*/, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function parseQuestionBank(markdown: string) {
  const lines = markdown.split('\n')
  const title =
    lines.find((line) => line.startsWith('# '))?.replace(/^#\s+/, '') ?? 'Axon Interview Prep'
  const overviewLines: string[] = []
  const sections: PrepSection[] = []
  let currentSection: PrepSection | null = null
  let currentQuestion: QuestionItem | null = null
  let beforeSections = true

  for (const line of lines.slice(1)) {
    const sectionMatch = line.match(/^##\s+(\d+)\.\s+(.+)$/)
    const questionMatch = line.match(/^(\d+)\.\s+(.+)$/)
    const trimmed = line.trim()

    if (sectionMatch) {
      const number = Number(sectionMatch[1] ?? 0)
      const titleText = (sectionMatch[2] ?? '').trim()

      currentSection = {
        id: `${number}-${slugify(titleText)}`,
        number,
        title: titleText,
        introLines: [],
        questions: [],
        notes: [],
      }
      sections.push(currentSection)
      currentQuestion = null
      beforeSections = false
      continue
    }

    if (beforeSections) {
      if (trimmed.length > 0) {
        overviewLines.push(cleanLine(line))
      }
      continue
    }

    if (!currentSection || trimmed.length === 0) {
      continue
    }

    if (questionMatch) {
      const number = Number(questionMatch[1] ?? 0)
      currentQuestion = {
        id: `q-${number}`,
        number,
        prompt: (questionMatch[2] ?? '').trim(),
        answerLines: [],
      }
      currentSection.questions.push(currentQuestion)
      continue
    }

    if (currentQuestion) {
      currentQuestion.answerLines.push(cleanLine(line))
      continue
    }

    if (trimmed.length > 0) {
      currentSection.notes.push(cleanLine(line))
    }
  }

  return {
    title,
    overviewLines,
    sections,
  }
}

const questionBank = parseQuestionBank(questionBankMarkdown)

const totalQuestions = computed(() =>
  questionBank.sections.reduce((total, section) => total + section.questions.length, 0),
)

const totalAnswers = computed(() =>
  questionBank.sections.reduce(
    (total, section) =>
      total + section.questions.filter((question) => question.answerLines.length > 0).length,
    0,
  ),
)

const technicalSections = computed(
  () =>
    questionBank.sections.filter((section) =>
      /fundamentals|security|javascript|typescript|react|performance|dsa|coding|system|testing/i.test(
        section.title,
      ),
    ).length,
)
</script>

<template>
  <div class="min-h-[100dvh] bg-[var(--color-bg)] text-[var(--color-ink)]">
    <div class="pointer-events-none fixed inset-0 overflow-hidden">
      <div class="grain-layer absolute inset-0 opacity-20" />
    </div>

    <main
      class="relative mx-auto flex w-full max-w-[1360px] flex-col px-4 pb-14 pt-5 sm:px-6 sm:pt-6 lg:px-8"
    >
      <header class="border-b border-black/12 pb-8">
        <p class="text-[0.72rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
          Axon interview prep
        </p>

        <div
          class="mt-6 grid gap-8 lg:grid-cols-[minmax(0,0.98fr)_minmax(360px,0.62fr)] lg:items-end"
        >
          <div>
            <h1
              class="font-serif-display max-w-[13ch] text-4xl font-medium sm:text-5xl lg:text-[4.4rem]"
            >
              {{ questionBank.title }}
            </h1>
            <div class="mt-5 grid gap-2 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
              <p v-for="line in questionBank.overviewLines" :key="line">
                {{ line }}
              </p>
            </div>
          </div>

          <aside
            class="grid gap-3 rounded-[1.2rem] border border-black/14 bg-[rgba(255,255,255,0.68)] p-4"
          >
            <div class="grid grid-cols-3 gap-2">
              <div class="border-r border-black/10 pr-3">
                <p class="font-serif-display text-3xl font-medium">{{ totalQuestions }}</p>
                <p class="mt-1 text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">
                  Questions
                </p>
              </div>
              <div class="border-r border-black/10 pr-3">
                <p class="font-serif-display text-3xl font-medium">{{ totalAnswers }}</p>
                <p class="mt-1 text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">
                  Answers
                </p>
              </div>
              <div>
                <p class="font-serif-display text-3xl font-medium">{{ technicalSections }}</p>
                <p class="mt-1 text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">
                  Tech areas
                </p>
              </div>
            </div>

            <p class="border-t border-black/10 pt-3 text-sm leading-6 text-[var(--color-muted)]">
              Full imported study bank from the Axon JD and your CV. Use the section rail to jump
              between behavioral, fundamentals, auth, DSA, frontend, coding, system design, and
              closing questions.
            </p>
          </aside>
        </div>
      </header>

      <div class="grid gap-7 pt-7 lg:grid-cols-[280px_minmax(0,1fr)]">
        <nav class="lg:sticky lg:top-24 lg:self-start">
          <div class="rounded-[1rem] border border-black/14 bg-[rgba(255,255,255,0.72)] p-3">
            <p class="px-2 pb-2 text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
              Sections
            </p>
            <div class="max-h-[calc(100dvh-9rem)] space-y-1 overflow-auto pr-1">
              <a
                v-for="section in questionBank.sections"
                :key="section.id"
                :href="`#${section.id}`"
                class="block rounded-[0.75rem] px-3 py-2 text-sm leading-5 text-[var(--color-muted)] transition duration-200 hover:bg-black/[0.04] hover:text-[var(--color-ink)]"
              >
                <span class="text-[0.72rem] uppercase tracking-[0.16em] text-[var(--color-accent)]">
                  {{ String(section.number).padStart(2, '0') }}
                </span>
                <span class="mt-1 block">{{ section.title }}</span>
              </a>
            </div>
          </div>
        </nav>

        <div class="grid min-w-0 gap-5">
          <InterviewPrepSection
            v-for="section in questionBank.sections"
            :key="section.id"
            :section="section"
          />
        </div>
      </div>
    </main>
  </div>
</template>
