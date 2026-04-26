<script setup>
import { ref, computed } from 'vue'
import { posts, getAllCategories } from '../data/posts.js'

const searchQuery = ref('')
const activeCategory = ref('')

const categories = getAllCategories()

const filteredPosts = computed(() => {
  return posts.filter(p => {
    const matchSearch = !searchQuery.value ||
      p.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchCat = !activeCategory.value ||
      p.categories.includes(activeCategory.value)
    return matchSearch && matchCat
  })
})
</script>

<template>
  <article>
    <h1>Blog Posts</h1>
    <p class="subtitle">Share thoughts, technical articles, and updates.</p>

    <div class="blog-controls">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search posts..."
        class="search-input"
      />
      <div class="category-tags">
        <button
          :class="['cat-tag', { active: !activeCategory }]"
          @click="activeCategory = ''"
        >All</button>
        <button
          v-for="cat in categories"
          :key="cat"
          :class="['cat-tag', { active: activeCategory === cat }]"
          @click="activeCategory = activeCategory === cat ? '' : cat"
        >{{ cat }}</button>
      </div>
    </div>

    <div v-if="filteredPosts.length === 0" class="empty-state">
      No posts found.
    </div>

    <ul class="post-list">
      <li v-for="p in filteredPosts" :key="p.id" class="post-item">
        <h2 class="post-title">
          <router-link :to="`/blog/${p.id}`">{{ p.title }}</router-link>
        </h2>
        <div class="post-meta">
          <time :datetime="p.date">{{ new Date(p.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</time>
          <span v-if="p.categories.length" class="meta-categories">
            • Categories: {{ p.categories.join(', ') }}
          </span>
        </div>
        <p class="post-excerpt">{{ p.excerpt }}</p>
        <router-link :to="`/blog/${p.id}`" class="read-more">Read more →</router-link>
      </li>
    </ul>
  </article>
</template>

<style scoped>
.blog-controls {
  margin: 1.5rem 0;
}

.search-input {
  width: 100%;
  padding: 0.6rem 0.8rem;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: 0.9rem;
  font-family: inherit;
  background: var(--bg-card);
  color: var(--text-color);
  margin-bottom: 0.75rem;
  transition: border-color 0.15s;
}

.search-input:focus {
  outline: none;
  border-color: var(--accent);
}

.category-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.cat-tag {
  font-size: 0.8rem;
  padding: 0.2rem 0.6rem;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  background: transparent;
  color: var(--text-muted);
  cursor: pointer;
  transition: all 0.15s;
  font-family: inherit;
}

.cat-tag:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.cat-tag.active {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
}

.post-list {
  list-style: none;
  padding: 0;
}

.post-item {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border-color);
}

.post-item:last-child {
  border-bottom: none;
}

.post-title {
  font-size: 1.35rem;
  margin-bottom: 0.3rem;
}

.post-title a {
  color: var(--text-color);
  text-decoration: none;
}

.post-title a:hover {
  color: var(--accent);
}

.post-meta {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 0.6rem;
}

.post-excerpt {
  color: var(--text-muted);
  font-size: 0.925rem;
  line-height: 1.6;
}

.read-more {
  font-size: 0.875rem;
}

.empty-state {
  text-align: center;
  padding: 3rem 0;
  color: var(--text-muted);
}
</style>
