# Academic Portfolio - Sizhe Wang (Bruce), PhD

A Hexo-based academic portfolio website showcasing research in wireless networks, mobile computing, and spatial technologies.

## Overview

- **Framework**: Hexo static site generator (v7.3.0)
- **Theme**: academic-portfolio
- **URL**: https://bruceeewong.github.io
- **Purpose**: Personal academic portfolio for research and academic work

## Research Focus Areas

- 5G, wireless networks, and systems
- Mobile computing and Internet technologies
- Open RAN and LEO satellite networks
- VR/AR/XR and spatial technologies (Vision Pro)
- Video streaming

## Project Structure

```
├── source/           # Content files
│   ├── _data/       # Publications data (.bib and .yml)
│   ├── _posts/      # Blog posts
│   ├── awards/      # Awards section
│   ├── news/        # News section
│   ├── publications/# Publications section
│   ├── research/    # Research section
│   ├── software/    # Software section
│   └── team/        # Team section
├── themes/          # Theme files (academic-portfolio)
├── public/          # Generated static site files
└── _config.yml      # Hexo configuration
```

## Development

### Commands

```bash
npm run server   # Start local development server
npm run build    # Generate static files
npm run clean    # Clean generated files
npm run deploy   # Deploy to GitHub Pages
```

### Requirements

- Node.js
- Hexo 7.3.0

## Deployment

The site is configured to deploy to GitHub Pages at https://bruceeewong.github.io