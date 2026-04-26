<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const route = useRoute()
const menuOpen = ref(false)

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/blog', label: 'Blog' },
  { path: '/tools', label: 'Tools' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
]

function isActive(path) {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

function navigate(path) {
  menuOpen.value = false
  router.push(path)
}
</script>

<template>
  <header class="site-header">
    <div class="header-inner">
      <router-link to="/" class="logo-link">
        <img src="/NSIE.png" alt="NSIE Logo" height="36" />
      </router-link>

      <button
        class="hamburger"
        :class="{ open: menuOpen }"
        @click="menuOpen = !menuOpen"
        aria-label="Toggle navigation"
      >
        <span></span><span></span><span></span>
      </button>

      <nav class="site-nav" :class="{ open: menuOpen }">
        <a
          v-for="item in navItems"
          :key="item.path"
          :href="item.path"
          class="nav-link"
          :class="{ active: isActive(item.path) }"
          @click.prevent="navigate(item.path)"
        >{{ item.label }}</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 0.75rem;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo-link img {
  display: block;
}

.site-nav {
  display: flex;
  gap: 0.25rem;
}

.nav-link {
  text-decoration: none;
  color: var(--text-muted);
  font-size: 0.9375rem;
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  transition: color 0.15s, background 0.15s;
}

.nav-link:hover {
  color: var(--text-color);
  background: var(--bg-hover);
}

.nav-link.active {
  color: var(--accent);
  font-weight: 500;
}

/* Hamburger — hidden on desktop */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  z-index: 100;
}

.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text-color);
  border-radius: 2px;
  transition: 0.2s;
}

.hamburger.open span:nth-child(1) {
  transform: rotate(45deg) translate(4px, 4px);
}
.hamburger.open span:nth-child(2) {
  opacity: 0;
}
.hamburger.open span:nth-child(3) {
  transform: rotate(-45deg) translate(4px, -4px);
}

@media (max-width: 640px) {
  .hamburger {
    display: flex;
  }

  .site-nav {
    position: fixed;
    top: 0;
    right: -260px;
    width: 240px;
    height: 100vh;
    flex-direction: column;
    background: var(--bg-card);
    border-left: 1px solid var(--border-color);
    padding: 5rem 1.5rem 2rem;
    gap: 0.25rem;
    transition: right 0.25s ease;
    z-index: 99;
    box-shadow: -4px 0 20px rgba(0,0,0,0.06);
  }

  .site-nav.open {
    right: 0;
  }

  .nav-link {
    font-size: 1rem;
    padding: 0.6rem 0.75rem;
    display: block;
  }
}
</style>
