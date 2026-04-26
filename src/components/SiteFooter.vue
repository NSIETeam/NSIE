<script setup>
</script>

<template>
  <footer class="site-footer">
    <div class="footer-motto">Do One Thing And Do It Well</div>
    <div class="footer-copyright">&copy; {{ new Date().getFullYear() }} NSIE Team</div>
    <div class="footer-links">
      <router-link to="/privacy">Privacy</router-link>
      <span class="sep">|</span>
      <router-link to="/terms">Terms</router-link>
      <span class="sep">|</span>
      <a href="mailto:NSIETeam@outlook.com">Contact</a>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  border-top: 1px solid var(--border-color);
  padding-top: 1.5rem;
  text-align: center;
  font-size: 0.875rem;
  color: var(--text-muted);
}

.footer-motto {
  font-style: italic;
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

.footer-copyright {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.15s;
}

.footer-links a:hover {
  color: var(--accent);
}

.sep {
  margin: 0 0.5rem;
}
</style>
