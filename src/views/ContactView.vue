<script setup>
import { ref } from 'vue'

const form = ref({ name: '', email: '', message: '' })
const submitted = ref(false)

function handleSubmit(e) {
  e.preventDefault()
  if (!form.value.email || !form.value.message) return
  submitted.value = true
  // In production, would POST to a service
  setTimeout(() => {
    submitted.value = false
    form.value = { name: '', email: '', message: '' }
  }, 3000)
}
</script>

<template>
  <article>
    <h1>Any Question Or Advice?</h1>
    <p>You can leave your words on this page. You can also contact me by other ways.</p>
    <p><strong>Email</strong>: <a href="mailto:NSIETeam@outlook.com">NSIETeam@outlook.com</a></p>

    <h2>Contact Form</h2>
    <form @submit="handleSubmit" class="contact-form">
      <div class="form-group">
        <label for="name">Name</label>
        <input id="name" v-model="form.name" type="text" placeholder="Your name" class="form-input" />
      </div>
      <div class="form-group">
        <label for="email">Email <span class="required">*</span></label>
        <input id="email" v-model="form.email" type="email" placeholder="Your email" required class="form-input" />
      </div>
      <div class="form-group">
        <label for="message">Message <span class="required">*</span></label>
        <textarea id="message" v-model="form.message" placeholder="Your message" required class="form-textarea"></textarea>
      </div>
      <button type="submit" class="form-btn" :disabled="submitted">
        {{ submitted ? 'Sent ✓' : 'Send Message' }}
      </button>
    </form>

    <div class="lang-note">English Version</div>

    <hr />

    <h1 lang="zh-CN">任何问题或者建议？</h1>
    <p lang="zh-CN">你可以在此页留言。同样，您也可以通过其他方式联系我。</p>
    <p lang="zh-CN"><strong>邮箱</strong>: <a href="mailto:NSIETeam@outlook.com">NSIETeam@outlook.com</a></p>

    <h2 lang="zh-CN">联系表单</h2>
    <form @submit="handleSubmit" class="contact-form" lang="zh-CN">
      <div class="form-group">
        <label for="name-cn">姓名</label>
        <input id="name-cn" v-model="form.name" type="text" placeholder="您的姓名" class="form-input" />
      </div>
      <div class="form-group">
        <label for="email-cn">邮箱 <span class="required">*</span></label>
        <input id="email-cn" v-model="form.email" type="email" placeholder="您的邮箱" required class="form-input" />
      </div>
      <div class="form-group">
        <label for="message-cn">消息 <span class="required">*</span></label>
        <textarea id="message-cn" v-model="form.message" placeholder="您的消息" required class="form-textarea"></textarea>
      </div>
      <button type="submit" class="form-btn" :disabled="submitted">
        {{ submitted ? '已发送 ✓' : '发送消息' }}
      </button>
    </form>

    <div class="lang-note" lang="zh-CN">简体中文版本</div>
  </article>
</template>

<style scoped>
.contact-form {
  max-width: 520px;
  margin: 1.5rem 0;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
}

.required {
  color: #c00;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.55rem 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: 0.9rem;
  font-family: inherit;
  background: var(--bg-card);
  color: var(--text-color);
  transition: border-color 0.15s;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--accent);
}

.form-textarea {
  min-height: 120px;
  resize: vertical;
}

.form-btn {
  font-size: 0.9rem;
  padding: 0.55rem 1.5rem;
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  transition: opacity 0.15s;
}

.form-btn:hover:not(:disabled) {
  opacity: 0.85;
}

.form-btn:disabled {
  opacity: 0.6;
  cursor: default;
}

.lang-note {
  display: inline-block;
  font-size: 0.8rem;
  padding: 0.2rem 0.6rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  color: var(--text-muted);
  margin-top: 0.5rem;
}

hr {
  margin: 2rem 0;
  border: none;
  border-top: 1px solid var(--border-color);
}
</style>
