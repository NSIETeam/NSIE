// Main JavaScript file for NSIE Team website

document.addEventListener('DOMContentLoaded', function() {
    console.log('NSIE Team website loaded');

    // Mobile navigation toggle (if needed)
    initMobileNav();

    // Form handling
    initForms();

    // Tool functionality
    initTools();

    // Blog search (if implemented)
    initBlogSearch();
});

function initMobileNav() {
    // Add mobile navigation toggle if needed
    const nav = document.querySelector('.site-nav');
    if (window.innerWidth < 768 && nav) {
        // Could add hamburger menu here
    }
}

function initForms() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Basic validation
            const email = this.querySelector('input[type="email"]');
            const message = this.querySelector('textarea');

            if (!email.value || !message.value) {
                alert('Please fill in all required fields.');
                return;
            }

            // In a real implementation, this would send to a server
            // For now, just show a message
            alert('Thank you for your message! This is a demo form. In production, this would send an email.');
            this.reset();
        });
    }
}

function initTools() {
    // Initialize tool functionality
    const tools = document.querySelectorAll('[data-tool]');

    tools.forEach(tool => {
        const toolType = tool.getAttribute('data-tool');

        switch(toolType) {
            case 'calculator':
                initCalculator(tool);
                break;
            case 'converter':
                initConverter(tool);
                break;
            // Add more tools as needed
        }
    });
}

function initCalculator(container) {
    // Simple calculator implementation
    container.innerHTML = `
        <div class="calculator">
            <input type="number" class="calc-input" placeholder="Number 1">
            <select class="calc-operator">
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">×</option>
                <option value="/">÷</option>
            </select>
            <input type="number" class="calc-input" placeholder="Number 2">
            <button class="calc-button">Calculate</button>
            <div class="calc-result"></div>
        </div>
    `;

    const button = container.querySelector('.calc-button');
    button.addEventListener('click', function() {
        const inputs = container.querySelectorAll('.calc-input');
        const operator = container.querySelector('.calc-operator').value;
        const resultDiv = container.querySelector('.calc-result');

        const num1 = parseFloat(inputs[0].value);
        const num2 = parseFloat(inputs[1].value);

        if (isNaN(num1) || isNaN(num2)) {
            resultDiv.textContent = 'Please enter valid numbers';
            return;
        }

        let result;
        switch(operator) {
            case '+': result = num1 + num2; break;
            case '-': result = num1 - num2; break;
            case '*': result = num1 * num2; break;
            case '/':
                if (num2 === 0) {
                    resultDiv.textContent = 'Cannot divide by zero';
                    return;
                }
                result = num1 / num2;
                break;
        }

        resultDiv.textContent = `Result: ${result}`;
    });
}

function initConverter(container) {
    // Unit converter example
    container.innerHTML = `
        <div class="converter">
            <input type="number" class="convert-input" placeholder="Value">
            <select class="convert-from">
                <option value="km">Kilometers</option>
                <option value="m">Meters</option>
                <option value="cm">Centimeters</option>
            </select>
            <span>to</span>
            <select class="convert-to">
                <option value="m">Meters</option>
                <option value="km">Kilometers</option>
                <option value="cm">Centimeters</option>
            </select>
            <button class="convert-button">Convert</button>
            <div class="convert-result"></div>
        </div>
    `;

    const button = container.querySelector('.convert-button');
    button.addEventListener('click', function() {
        const input = container.querySelector('.convert-input');
        const from = container.querySelector('.convert-from').value;
        const to = container.querySelector('.convert-to').value;
        const resultDiv = container.querySelector('.convert-result');

        const value = parseFloat(input.value);
        if (isNaN(value)) {
            resultDiv.textContent = 'Please enter a valid number';
            return;
        }

        // Convert to meters first
        let inMeters;
        switch(from) {
            case 'km': inMeters = value * 1000; break;
            case 'm': inMeters = value; break;
            case 'cm': inMeters = value / 100; break;
        }

        // Convert from meters to target
        let result;
        switch(to) {
            case 'km': result = inMeters / 1000; break;
            case 'm': result = inMeters; break;
            case 'cm': result = inMeters * 100; break;
        }

        resultDiv.textContent = `${value} ${from} = ${result.toFixed(2)} ${to}`;
    });
}

function initBlogSearch() {
    const searchInput = document.getElementById('blog-search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            // Implement client-side search if needed
            console.log('Search:', this.value);
        });
    }
}

// Plugin system foundation
window.NSIE = window.NSIE || {};
window.NSIE.Plugins = {
    register: function(name, plugin) {
        this[name] = plugin;
        console.log(`Plugin ${name} registered`);
    },

    // Webhook handler (example)
    handleWebhook: function(type, data) {
        console.log(`Webhook received: ${type}`, data);
        // Dispatch to registered webhook handlers
        if (this.webhookHandlers && this.webhookHandlers[type]) {
            this.webhookHandlers[type](data);
        }
    }
};