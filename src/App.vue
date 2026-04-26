<script setup>
import { RouterView } from 'vue-router'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <div class="app-shell">
    <SiteHeader />
    <main class="main-content">
      <RouterView />
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.app-shell {
  max-width: 820px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  margin: 2.5rem 0;
}
</style>
