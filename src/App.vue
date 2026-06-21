<template>
  <div class="min-h-[100dvh] bg-[var(--color-bg)] text-[var(--color-ink)]">
    <header class="sticky top-0 z-20 border-b border-black/10 bg-[rgba(251,250,247,0.88)] backdrop-blur">
      <div class="mx-auto flex w-full max-w-[1320px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <RouterLink
          to="/"
          class="font-serif-display text-[1.45rem] font-medium tracking-[-0.04em] text-[var(--color-ink)]"
        >
          Mimir
        </RouterLink>

        <nav class="flex flex-wrap items-center gap-2">
          <RouterLink
            to="/"
            class="rounded-full border border-black/12 px-4 py-2 text-sm text-[var(--color-muted)] transition duration-300 hover:bg-black/[0.03] hover:text-[var(--color-ink)]"
            active-class="border-[color:var(--color-accent)] bg-[rgba(127,89,51,0.09)] text-[var(--color-ink)]"
          >
            Home
          </RouterLink>
          <RouterLink
            to="/axon-interview-prep"
            class="rounded-full border border-black/12 px-4 py-2 text-sm text-[var(--color-muted)] transition duration-300 hover:bg-black/[0.03] hover:text-[var(--color-ink)]"
            active-class="border-[color:var(--color-accent)] bg-[rgba(127,89,51,0.09)] text-[var(--color-ink)]"
          >
            Axon interview prep
          </RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>
