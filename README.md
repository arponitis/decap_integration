# Docusaurus with Decap CMS

This is a documentation site built with [Docusaurus](https://docusaurus.io/) and [Decap CMS](https://decapcms.org/).

## Setup

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## GitHub Integration

1. Create a new GitHub repository
2. Push this code to your repository
3. Go to your repository settings and enable GitHub Pages
4. Set up GitHub OAuth application for Decap CMS:
   - Go to GitHub Developer settings
   - Create a new OAuth application
   - Set the homepage URL to your site's URL
   - Set the authorization callback URL to `https://api.netlify.com/auth/done`

## Deployment

### Netlify Deployment

1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
3. Enable Netlify Identity
4. Configure Netlify Identity settings
5. Enable Git Gateway

### Other CDN Deployment

You can deploy to any static hosting service:

1. Build the site:
   ```bash
   npm run build
   ```
2. Deploy the `build` directory to your preferred CDN

## Content Management

1. Access the CMS at `/admin`
2. Log in with your GitHub account
3. Start creating or editing content

## Features

- Documentation pages with sidebar navigation
- Blog with author profiles
- Decap CMS integration
- GitHub-based content management
- Dark mode support
- Full-text search
- Responsive design 