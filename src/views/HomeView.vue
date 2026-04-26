<script setup>
import { posts } from '../data/posts.js'
</script>

<template>
  <article>
    <h1>Hello World!</h1>
    <p>Welcome to NSIE Team's official website.</p>

    <section class="info-block">
      <h2>Version</h2>
      <p><strong>0.0.3</strong> — Vue 3 + Vite modern stack</p>
    </section>

    <section class="info-block">
      <h2>Updates</h2>
      <ul>
        <li>Reconstructed with Vue 3 + Vite — <code>npm run dev</code> to start</li>
        <li>Client-side routing with hash-based URLs for GitHub Pages</li>
        <li>Built-in blog system with search and categories</li>
        <li>Interactive tools section (Calculator, Unit Converter)</li>
      </ul>
    </section>

    <section class="info-block">
      <h2>Recent Posts</h2>
      <ul class="mini-post-list">
        <li v-for="p in posts.slice(0, 3)" :key="p.id">
          <router-link :to="`/blog/${p.id}`">{{ p.title }}</router-link>
          <span class="post-date">— {{ p.date }}</span>
        </li>
      </ul>
      <router-link to="/blog" class="read-more">All posts →</router-link>
    </section>

    <section class="info-block">
      <h2>Features</h2>
      <ul>
        <li><strong>Blog</strong> — Share thoughts and technical articles</li>
        <li><strong>Tools</strong> — Useful online tools for daily work</li>
        <li><strong>About</strong> — Learn about NSIE Team</li>
        <li><strong>Contact</strong> — Get in touch with us</li>
      </ul>
    </section>

    <hr />
    <p class="motto"><em>Do One Thing And Do It Well</em></p>
  </article>
</template>

<style scoped>
.mini-post-list {
  list-style: none;
  padding: 0;
}

.mini-post-list li {
  margin-bottom: 0.4rem;
}

.post-date {
  color: var(--text-muted);
  font-size: 0.875rem;
}

.read-more {
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.9rem;
}

.motto {
  text-align: center;
  margin-top: 2rem;
  color: var(--text-muted);
}
</style>
