# NSIE Team Website

Official website for NSIE Team (Nature Science & Industrial Engineering).

## Features

- **Static Site**: Built with Jekyll and hosted on GitHub Pages
- **Blog System**: Markdown-based blog with categories and tags
- **Tools Section**: Interactive online tools (calculator, unit converter, etc.)
- **Responsive Design**: Mobile-friendly layout
- **Extensible Architecture**: Plugin system and API interfaces
- **Comment System**: Disqus integration for blog comments
- **Contact Forms**: Email contact with form validation

## Quick Start

### Prerequisites
- Ruby ≥ 2.5.0
- Bundler (`gem install bundler`)
- Git

### Local Development
```bash
# Clone repository
git clone https://github.com/yourusername/nsieteam-website.git
cd nsieteam-website

# Install dependencies
bundle install

# Run local server
bundle exec jekyll serve

# Open browser: http://localhost:4000
```

### Deployment
1. Push to GitHub repository
2. Configure GitHub Pages in repository Settings
3. Set custom domain: `nsieteam.cn`
4. Enable HTTPS

## Project Structure

```
.
├── _config.yml          # Site configuration
├── _layouts/           # HTML layouts
│   ├── default.html    # Default layout
│   └── post.html       # Blog post layout
├── _includes/          # Reusable components
│   ├── header.html     # Site header
│   ├── footer.html     # Site footer
│   ├── navigation.html # Navigation menu
│   └── disqus_comments.html # Comments integration
├── _posts/             # Blog posts (Markdown)
├── _site/              # Generated site (ignored)
├── assets/             # Images, fonts, etc.
├── css/                # Stylesheets
├── js/                 # JavaScript files
├── tools/              # Tools pages
├── api/                # API documentation
├── docs/               # System documentation
├── index.md            # Home page
├── about.md            # About page
├── blog.md             # Blog listing
├── contact.md          # Contact page
└── Gemfile             # Ruby dependencies
```

## Configuration

### Site Settings (_config.yml)
```yaml
title: NSIE Team
description: Nature Science & Industrial Engineering
url: https://nsieteam.cn
email: NSIETeam@outlook.com

# Disqus comments
disqus:
  shortname: your_disqus_shortname
```

### Custom Domain
1. Add DNS records:
   - A records pointing to GitHub Pages IPs
   - CNAME record for www subdomain
2. Configure in GitHub Pages settings
3. Enable HTTPS enforcement

## Blog Management

### Adding Posts
1. Create file in `_posts/` with name `YYYY-MM-DD-title.md`
2. Add front matter:
   ```yaml
   ---
   layout: post
   title: "Post Title"
   date: 2026-02-20
   categories: [category1, category2]
   author: NSIE Team
   ---
   ```
3. Write content in Markdown

### Categories and Tags
- Use `categories` in front matter for broad grouping
- Use `tags` for specific keywords
- Categories appear in blog listing and navigation

## Tools Development

### Adding New Tools
1. Create tool HTML/Markdown in `tools/` directory
2. Register JavaScript plugin:
   ```javascript
   NSIE.Plugins.register('toolName', {
       init: function(container) {
           // Tool implementation
       }
   });
   ```
3. Add to tools grid in `tools/index.md`

### Built-in Tools
- **Calculator**: Basic arithmetic operations
- **Unit Converter**: Length unit conversion
- **JSON Formatter**: Coming soon
- **Base64 Encoder/Decoder**: Coming soon
- **Color Picker**: Coming soon
- **Markdown Preview**: Coming soon

## Extension Interfaces

### JavaScript Plugin System
```javascript
// Register plugin
NSIE.Plugins.register('myPlugin', {
    init: function(container, config) {
        // Initialize
    },
    destroy: function() {
        // Cleanup
    }
});

// Use plugin
const plugin = NSIE.Plugins.myPlugin;
```

### Webhook Integration
- GitHub repository events
- Deployment notifications
- Contact form submissions
- Analytics data

### REST API (Future)
- Blog API: CRUD operations
- Comments API: User comments
- Tools API: Tool execution
- User API: Authentication

## System Maintenance

### Documentation
- `docs/DEPLOYMENT.md`: Deployment procedures
- `docs/MAINTENANCE.md`: Maintenance tasks
- `docs/MONITORING.md`: Monitoring configuration
- `api/README.md`: API and extension documentation

### Regular Tasks
- Daily: Check website availability
- Weekly: Update dependencies, check broken links
- Monthly: Performance audit, security scan
- Quarterly: Security audit, disaster recovery test

### Backup Strategy
- Code: GitHub repository
- Content: `_posts/`, `assets/`, `_config.yml`
- Automated weekly backups
- 30-day retention

## Performance Optimization

### Image Optimization
```bash
# Install imagemin
npm install -g imagemin-cli

# Optimize images
imagemin assets/* --out-dir=assets/optimized
```

### CSS/JS Minification
```bash
# Install minification tools
npm install -g uglify-js clean-css-cli

# Minify JavaScript
uglifyjs js/main.js -o js/main.min.js

# Minify CSS
cleancss -o css/style.min.css css/style.css
```

### CDN Integration
- Use CDN for libraries (jQuery, Bootstrap, etc.)
- Configure custom CDN for assets
- Enable browser caching

## Security

### SSL/TLS
- GitHub Pages provides free SSL via Let's Encrypt
- Enable "Enforce HTTPS" in GitHub settings
- Regular certificate monitoring

### Security Headers
Configured in `_config.yml`:
```yaml
security:
  headers:
    X-Frame-Options: DENY
    X-XSS-Protection: 1; mode=block
    X-Content-Type-Options: nosniff
```

### Dependency Security
- Dependabot automated updates
- Regular vulnerability scanning
- Prompt security patch application

## Monitoring

### Uptime Monitoring
- Pingdom: https://nsieteam.cn
- UptimeRobot: 5-minute checks
- GitHub Pages status monitoring

### Performance Monitoring
- Google PageSpeed Insights (weekly)
- WebPageTest (monthly)
- Real User Monitoring (RUM)

### Error Tracking
- Sentry: Client-side errors
- GitHub Actions: Build errors
- Custom error logging

## Contributing

### Development Workflow
1. Fork repository
2. Create feature branch
3. Make changes
4. Test locally
5. Submit pull request

### Code Style
- HTML: Semantic markup, accessibility
- CSS: BEM methodology, responsive design
- JavaScript: ES6+, modular patterns
- Markdown: GitHub Flavored Markdown

### Testing
- Browser compatibility testing
- Mobile responsiveness testing
- Accessibility testing
- Performance testing

## Support

### Documentation
- [Deployment Guide](docs/DEPLOYMENT.md)
- [Maintenance Guide](docs/MAINTENANCE.md)
- [Monitoring Guide](docs/MONITORING.md)
- [API Documentation](api/README.md)

### Contact
- Email: NSIETeam@outlook.com
- GitHub Issues: [Repository Issues](https://github.com/yourusername/nsieteam-website/issues)
- Website: https://nsieteam.cn/contact

### Emergency Contacts
- Technical: [Primary Contact]
- Hosting: GitHub Support
- Domain: ByteDance Domain Service

## License

© 2026 NSIE Team. All rights reserved.

---

*Last updated: March 17, 2026*