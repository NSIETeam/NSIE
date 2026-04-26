<script setup>
import ToolCalculator from '../components/ToolCalculator.vue'
import ToolConverter from '../components/ToolConverter.vue'
</script>

<template>
  <article>
    <h1>Online Tools</h1>
    <p class="subtitle">Useful tools for daily work and learning.</p>

    <div class="tools-grid">
      <div class="tool-card">
        <h2 class="tool-title">Calculator</h2>
        <p class="tool-desc">A simple calculator for basic arithmetic operations.</p>
        <ToolCalculator />
      </div>

      <div class="tool-card">
        <h2 class="tool-title">Unit Converter</h2>
        <p class="tool-desc">Convert between different units of length.</p>
        <ToolConverter />
      </div>

      <div class="tool-card tool-coming">
        <h2 class="tool-title">JSON Formatter</h2>
        <p class="tool-desc">Format and validate JSON data.</p>
        <span class="coming-badge">Coming soon</span>
      </div>

      <div class="tool-card tool-coming">
        <h2 class="tool-title">Base64 Encoder/Decoder</h2>
        <p class="tool-desc">Encode and decode Base64 strings.</p>
        <span class="coming-badge">Coming soon</span>
      </div>

      <div class="tool-card tool-coming">
        <h2 class="tool-title">Color Picker</h2>
        <p class="tool-desc">Pick colors and get HEX/RGB values.</p>
        <span class="coming-badge">Coming soon</span>
      </div>

      <div class="tool-card tool-coming">
        <h2 class="tool-title">Markdown Preview</h2>
        <p class="tool-desc">Preview Markdown in real-time.</p>
        <span class="coming-badge">Coming soon</span>
      </div>
    </div>
  </article>
</template>

<style scoped>
.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.tool-card {
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1.25rem;
  transition: box-shadow 0.2s;
}

.tool-card:hover {
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
}

.tool-card.tool-coming {
  opacity: 0.6;
}

.tool-title {
  font-size: 1.05rem;
  margin-bottom: 0.3rem;
}

.tool-desc {
  font-size: 0.875rem;
  color: var(--text-muted);
  margin-bottom: 0.75rem;
}

.coming-badge {
  display: inline-block;
  font-size: 0.75rem;
  padding: 0.15rem 0.5rem;
  border: 1px dashed var(--text-muted);
  border-radius: 4px;
  color: var(--text-muted);
}

@media (max-width: 480px) {
  .tools-grid {
    grid-template-columns: 1fr;
  }
}
</style>
