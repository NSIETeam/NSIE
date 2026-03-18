# Deployment Guide

This document describes how to deploy the NSIE Team website.

## Prerequisites

- GitHub account
- Git installed locally
- Ruby (for Jekyll development)
- Node.js (optional, for JavaScript tools)

## Local Development

### 1. Clone Repository
```bash
git clone https://github.com/yourusername/nsieteam-website.git
cd nsieteam-website
```

### 2. Install Dependencies
```bash
# Install Ruby gems
bundle install

# Or install Jekyll directly
gem install jekyll bundler
```

### 3. Run Local Server
```bash
bundle exec jekyll serve
# or
jekyll serve
```

The site will be available at `http://localhost:4000`.

## GitHub Pages Deployment

### Automatic Deployment
1. Push code to the `main` branch of your GitHub repository
2. GitHub Pages will automatically build and deploy the site
3. The site will be available at `https://yourusername.github.io/repository`

### Manual Configuration
1. Go to repository Settings > Pages
2. Source: GitHub Actions (recommended) or `main` branch
3. Custom domain: `nsieteam.cn` (if configured)
4. Enforce HTTPS: Enabled

## Custom Domain Setup

### 1. Configure DNS
Add these records in your domain registrar (ByteDance):

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 3600 |
| A | @ | 185.199.109.153 | 3600 |
| A | @ | 185.199.110.153 | 3600 |
| A | @ | 185.199.111.153 | 3600 |
| CNAME | www | yourusername.github.io | 3600 |

### 2. Configure GitHub Pages
1. In repository Settings > Pages > Custom domain
2. Enter `nsieteam.cn`
3. Check "Enforce HTTPS"

### 3. Verify DNS
```bash
dig nsieteam.cn +short
dig www.nsieteam.cn +short
```

## Environment Variables

For development, create a `.env` file:

```bash
JEKYLL_ENV=development
DISQUS_SHORTNAME=your_disqus_shortname
GOOGLE_ANALYTICS_ID=UA-XXXXX-Y
```

## Build Process

### Production Build
```bash
JEKYLL_ENV=production bundle exec jekyll build
```

The built site will be in `_site/` directory.

### Clean Build
```bash
bundle exec jekyll clean
bundle exec jekyll build
```

## Continuous Integration

### GitHub Actions Workflow
The repository includes `.github/workflows/jekyll.yml`:

```yaml
name: Jekyll site CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-ruby@v1
    - run: bundle install
    - run: bundle exec jekyll build
    - run: bundle exec htmlproofer ./_site
```

## Deployment Checklist

- [ ] All tests pass
- [ ] No broken links
- [ ] SEO tags configured
- [ ] Analytics integrated
- [ ] Custom domain verified
- [ ] HTTPS enforced
- [ ] CDN configured (if using)
- [ ] Backup strategy in place

## Rollback Procedure

### 1. Revert Code
```bash
git revert HEAD
git push origin main
```

### 2. Restore from Backup
```bash
# Restore _site directory from backup
cp -r backup/_site .
```

### 3. Manual Build
```bash
bundle exec jekyll build
# Manually upload to hosting provider
```

## Monitoring

### Uptime Monitoring
- [UptimeRobot](https://uptimerobot.com)
- [StatusCake](https://www.statuscake.com)

### Performance Monitoring
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)

### Error Tracking
- [Sentry](https://sentry.io)
- [Rollbar](https://rollbar.com)

## Troubleshooting

### Common Issues

#### 1. Jekyll Build Errors
```bash
# Update gems
bundle update

# Clean and rebuild
bundle exec jekyll clean
bundle exec jekyll build
```

#### 2. CSS/JS Not Loading
- Check relative URLs
- Verify file permissions
- Clear browser cache

#### 3. Domain Not Redirecting
- Wait 24-48 hours for DNS propagation
- Verify DNS records
- Check GitHub Pages settings

#### 4. HTTPS Errors
- Ensure "Enforce HTTPS" is enabled
- Check SSL certificate expiration
- Verify mixed content warnings

## Backup Strategy

### 1. Code Backup
```bash
# Clone to backup location
git clone --mirror https://github.com/yourusername/nsieteam-website.git
```

### 2. Content Backup
```bash
# Backup _posts, _pages, assets
tar -czf backup-$(date +%Y%m%d).tar.gz _posts _pages assets
```

### 3. Database Backup (if applicable)
```bash
# Backup any databases used by tools
mysqldump -u username -p database > backup.sql
```

### 4. Automated Backups
Set up cron job for weekly backups:

```bash
0 2 * * 0 /path/to/backup-script.sh
```

## Security

### SSL/TLS
- GitHub Pages provides free SSL via Let's Encrypt
- Ensure "Enforce HTTPS" is enabled
- Regular certificate renewal monitoring

### Access Control
- Restrict repository access
- Use strong passwords
- Enable 2FA on GitHub

### Security Headers
Configure in `_config.yml`:

```yaml
security:
  headers:
    X-Frame-Options: DENY
    X-XSS-Protection: 1; mode=block
    X-Content-Type-Options: nosniff
```

## Performance Optimization

### Image Optimization
```bash
# Install image optimization tools
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

## Contact

For deployment issues, contact:
- Email: NSIETeam@outlook.com
- GitHub Issues: [Repository Issues](https://github.com/yourusername/nsieteam-website/issues)