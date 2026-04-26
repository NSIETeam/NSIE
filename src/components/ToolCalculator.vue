<script setup>
import { ref } from 'vue'

const num1 = ref('')
const num2 = ref('')
const operator = ref('+')
const result = ref('')

function calculate() {
  const a = parseFloat(num1.value)
  const b = parseFloat(num2.value)
  if (isNaN(a) || isNaN(b)) {
    result.value = 'Please enter valid numbers'
    return
  }
  switch (operator.value) {
    case '+': result.value = `${a} + ${b} = ${a + b}`; break
    case '-': result.value = `${a} - ${b} = ${a - b}`; break
    case '*': result.value = `${a} × ${b} = ${a * b}`; break
    case '/':
      if (b === 0) { result.value = 'Cannot divide by zero'; return }
      result.value = `${a} ÷ ${b} = ${(a / b).toFixed(4)}`
      break
  }
}
</script>

<template>
  <div class="tool-widget">
    <input v-model="num1" type="number" placeholder="Number 1" class="tool-input" />
    <select v-model="operator" class="tool-select">
      <option value="+">+</option>
      <option value="-">−</option>
      <option value="*">×</option>
      <option value="/">÷</option>
    </select>
    <input v-model="num2" type="number" placeholder="Number 2" class="tool-input" />
    <button @click="calculate" class="tool-btn">Calculate</button>
    <div v-if="result" class="tool-result">{{ result }}</div>
  </div>
</template>
