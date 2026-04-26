<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { posts } from '../data/posts.js'

const route = useRoute()
const post = computed(() => posts.find(p => p.id === route.params.id))
</script>

<template>
  <article v-if="post" class="post-article">
    <header class="post-header">
      <h1>{{ post.title }}</h1>
      <div class="post-meta">
        <time :datetime="post.date">{{ new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</time>
        <span v-if="post.author"> • {{ post.author }}</span>
        <span v-if="post.categories.length"> • Categories: {{ post.categories.join(', ') }}</span>
      </div>
    </header>
    <div class="post-content" v-html="post.content"></div>
    <footer class="post-footer">
      <router-link to="/blog" class="back-link">← Back to Blog</router-link>
    </footer>
  </article>

  <div v-else class="not-found">
    <h2>Post not found</h2>
    <router-link to="/blog">← Back to Blog</router-link>
  </div>
</template>

<style scoped>
.post-header {
  margin-bottom: 2rem;
}

.post-header h1 {
  font-size: 1.75rem;
  margin-bottom: 0.4rem;
}

.post-meta {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.post-content {
  font-size: 1rem;
  line-height: 1.8;
}

.post-content h2 {
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  font-size: 1.3rem;
}

.post-content p {
  margin-bottom: 1rem;
}

.post-content ul,
.post-content ol {
  margin: 0.5rem 0 1rem 1.5rem;
}

.post-content li {
  margin-bottom: 0.3rem;
}

.post-content hr {
  margin: 1.5rem 0;
  border: none;
  border-top: 1px solid var(--border-color);
}

.post-footer {
  margin-top: 3rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
}

.back-link {
  font-size: 0.9rem;
}

.not-found {
  text-align: center;
  padding: 4rem 0;
}
</style>
