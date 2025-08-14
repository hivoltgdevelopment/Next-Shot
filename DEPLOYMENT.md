# Deployment Guide

## GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages.

### Setup Steps

1. **Repository Settings**
   - Go to your GitHub repository settings
   - Navigate to "Pages" section
   - Set source to "GitHub Actions"

2. **Environment Secrets**
   Add these secrets in your repository settings:
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

3. **Automatic Deployment**
   - Push to main branch triggers deployment
   - GitHub Actions builds and deploys automatically
   - Site available at: https://hivoltgdevelopment.github.io/Next-Shot/

### Manual Build

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview build locally
npm run preview
```

### Build Configuration

- **Base Path**: `/Next-Shot/` (configured in vite.config.ts)
- **Output Directory**: `dist/`
- **Build Command**: `npm run build`

### Troubleshooting

1. **404 Errors**: Ensure base path is correctly set in vite.config.ts
2. **Environment Variables**: Check that secrets are properly configured
3. **Build Failures**: Check GitHub Actions logs for detailed error messages

### Custom Domain (Optional)

To use a custom domain:
1. Add CNAME file to public/ directory
2. Configure DNS settings
3. Update base path in vite.config.ts if needed