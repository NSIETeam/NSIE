<script setup>
import { ref } from 'vue'

const units = {
  km: { label: 'Kilometers', toMeter: 1000 },
  m:  { label: 'Meters', toMeter: 1 },
  cm: { label: 'Centimeters', toMeter: 0.01 },
  mm: { label: 'Millimeters', toMeter: 0.001 },
  mile: { label: 'Miles', toMeter: 1609.344 },
  ft: { label: 'Feet', toMeter: 0.3048 },
  in: { label: 'Inches', toMeter: 0.0254 },
}

const value = ref('')
const from = ref('km')
const to = ref('m')
const result = ref('')

function convert() {
  const v = parseFloat(value.value)
  if (isNaN(v)) {
    result.value = 'Please enter a valid number'
    return
  }
  const inMeters = v * units[from.value].toMeter
  const out = inMeters / units[to.value].toMeter
  result.value = `${v} ${from.value} = ${out.toFixed(6)} ${to.value}`
}
</script>

<template>
  <div class="tool-widget">
    <input v-model="value" type="number" placeholder="Value" class="tool-input" />
    <select v-model="from" class="tool-select">
      <option v-for="(u, k) in units" :key="k" :value="k">{{ u.label }}</option>
    </select>
    <span class="tool-arrow">→</span>
    <select v-model="to" class="tool-select">
      <option v-for="(u, k) in units" :key="k" :value="k">{{ u.label }}</option>
    </select>
    <button @click="convert" class="tool-btn">Convert</button>
    <div v-if="result" class="tool-result">{{ result }}</div>
  </div>
</template>
