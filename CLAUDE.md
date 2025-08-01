# Claude Configuration - Markosh Company Homepage

## Project Overview
This is the official company homepage for Markosh (markosh.com) - a Next.js 15 application built with React, TypeScript, and Tailwind CSS.

## Repository Structure
```
/
├── src/                    # Source code
│   ├── app/               # Next.js App Router pages
│   ├── components/        # React components
│   └── lib/              # Utility functions
├── public/               # Static assets
├── package.json          # Dependencies and scripts
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Development Commands
- `npm run dev` - Start development server (port 9002)
- `npm run build` - Build for production (static export to /out)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Deployment Information
- **GitHub Repository**: https://github.com/Amitramanuj/Markosh-Company-homepage
- **Live Site**: https://markosh.com
- **Cloudflare Pages Project**: markosh-com
- **Build Output**: Static files in `/out` directory

## Important Notes for Claude

### DO NOT:
- Create nested project folders (keep everything in root)
- Commit build artifacts (.next/, out/, node_modules/)
- Add unnecessary configuration files
- Modify .gitignore without good reason
- Push to GitHub without testing locally first

### ALWAYS:
- Run `npm run build` before deploying
- Test changes locally with `npm run dev`
- Follow existing code patterns and conventions
- Use TypeScript and proper typing
- Maintain responsive design principles
- Keep components modular and reusable

### Deployment Process:
1. Make changes to source code
2. Test locally with `npm run dev`
3. Build with `npm run build`
4. Commit changes to git
5. Push to GitHub main branch
6. Deploy to Cloudflare with `wrangler pages deploy out --project-name=markosh-com`

### Code Style Guidelines:
- Use TypeScript for all components
- Follow React best practices
- Use Tailwind CSS for styling
- Keep components in appropriate directories
- Use descriptive variable and function names
- Add comments for complex logic

### Dependencies Management:
- Next.js 15 with Turbopack
- React 18+
- TypeScript 5+
- Tailwind CSS 3+
- Radix UI components
- Lucide React icons

## Contact
For questions about this project, contact the development team or repository owner.

---
*This file helps Claude understand the project structure and follow proper development practices.*