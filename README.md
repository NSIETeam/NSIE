# NSIE Team Website

Official website for **NSIE Team** (Nature Science & Industrial Engineering).

Built with **Vue 3 + Vite** — modern, fast, zero server-side dependencies.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server (hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/        # Reusable Vue components
│   ├── SiteHeader.vue
│   ├── SiteFooter.vue
│   ├── ToolCalculator.vue
│   └── ToolConverter.vue
├── data/
│   └── posts.js       # Blog posts data (add new posts here)
├── router/
│   └── index.js       # Vue Router config
├── views/             # Page-level components
│   ├── HomeView.vue
│   ├── BlogView.vue
│   ├── PostView.vue
│   ├── ToolsView.vue
│   ├── AboutView.vue
│   ├── ContactView.vue
│   ├── PrivacyView.vue
│   └── TermsView.vue
├── App.vue            # Root layout shell
├── main.js            # Entry point
└── style.css          # Global styles (academic theme)
```

## Adding Blog Posts

Edit `src/data/posts.js` and add a new object to the `posts` array:

```js
{
  id: 'your-post-id',
  title: 'Your Post Title',
  date: '2026-04-01',
  categories: ['category1', 'category2'],
  author: 'NSIE Team',
  excerpt: 'Brief description...',
  content: '<p>HTML content here...</p>'
}
```

## Deployment

### GitHub Pages (via Actions)

Push to `main` branch — the included GitHub Actions workflow automatically builds and deploys to GitHub Pages.

### Manual

```bash
npm run build
# Upload dist/ to your hosting provider
```
