<script setup lang="ts">
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

defineProps<{
  section: PrepSection
}>()
</script>

<template>
  <section
    :id="section.id"
    class="scroll-mt-24 rounded-[1.15rem] border border-black/14 bg-[rgba(255,255,255,0.72)]"
  >
    <header class="border-b border-black/10 bg-[rgba(251,248,242,0.92)] px-5 py-5 sm:px-6">
      <p class="text-[0.72rem] uppercase tracking-[0.18em] text-[var(--color-accent)]">
        Section {{ section.number }} / {{ section.questions.length || section.notes.length }} items
      </p>
      <h2 class="font-serif-display mt-2 text-3xl font-medium sm:text-[2.35rem]">
        {{ section.title }}
      </h2>
      <div
        v-if="section.introLines.length"
        class="mt-3 grid gap-2 text-sm leading-6 text-[var(--color-muted)]"
      >
        <p v-for="line in section.introLines" :key="line">{{ line }}</p>
      </div>
    </header>

    <div class="grid gap-3 px-4 py-4 sm:px-5 sm:py-5">
      <article
        v-for="question in section.questions"
        :key="question.id"
        class="rounded-[0.9rem] border border-black/10 bg-white px-4 py-4"
      >
        <div class="flex items-start gap-3">
          <span
            class="mt-0.5 inline-flex h-8 min-w-8 items-center justify-center rounded-full border border-[color:rgba(127,89,51,0.22)] bg-[rgba(127,89,51,0.08)] text-xs font-semibold text-[var(--color-accent)]"
          >
            {{ question.number }}
          </span>
          <div class="min-w-0">
            <h3 class="text-base font-semibold leading-7 text-[var(--color-ink)]">
              {{ question.prompt }}
            </h3>
            <div
              v-if="question.answerLines.length"
              class="mt-3 grid gap-2 text-sm leading-6 text-[var(--color-muted)]"
            >
              <p v-for="line in question.answerLines" :key="line">
                {{ line }}
              </p>
            </div>
          </div>
        </div>
      </article>

      <div
        v-if="section.notes.length"
        class="rounded-[0.9rem] border border-[color:rgba(127,89,51,0.16)] bg-[rgba(127,89,51,0.06)] px-4 py-4"
      >
        <p class="text-xs uppercase tracking-[0.18em] text-[var(--color-accent)]">Notes</p>
        <ul class="mt-3 grid gap-2 pl-5 text-sm leading-6 text-[var(--color-muted)]">
          <li v-for="note in section.notes" :key="note">{{ note }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>
