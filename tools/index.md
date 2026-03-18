---
layout: default
title: Tools
---

# Online Tools

Useful tools for daily work and learning.

<div class="tools-grid">
    <div class="tool-card">
        <h3 class="tool-title">Calculator</h3>
        <p class="tool-description">A simple calculator for basic arithmetic operations.</p>
        <div data-tool="calculator"></div>
    </div>

    <div class="tool-card">
        <h3 class="tool-title">Unit Converter</h3>
        <p class="tool-description">Convert between different units of length.</p>
        <div data-tool="converter"></div>
    </div>

    <div class="tool-card">
        <h3 class="tool-title">JSON Formatter</h3>
        <p class="tool-description">Format and validate JSON data. (Coming soon)</p>
        <a href="#" class="tool-link">Try it</a>
    </div>

    <div class="tool-card">
        <h3 class="tool-title">Base64 Encoder/Decoder</h3>
        <p class="tool-description">Encode and decode Base64 strings. (Coming soon)</p>
        <a href="#" class="tool-link">Try it</a>
    </div>

    <div class="tool-card">
        <h3 class="tool-title">Color Picker</h3>
        <p class="tool-description">Pick colors and get HEX/RGB values. (Coming soon)</p>
        <a href="#" class="tool-link">Try it</a>
    </div>

    <div class="tool-card">
        <h3 class="tool-title">Markdown Preview</h3>
        <p class="tool-description">Preview Markdown in real-time. (Coming soon)</p>
        <a href="#" class="tool-link">Try it</a>
    </div>
</div>

## Plugin System
This tools page supports a plugin system. Developers can add new tools by registering JavaScript plugins.

```javascript
NSIE.Plugins.register('myTool', {
    init: function(container) {
        // Initialize tool
    }
});
```