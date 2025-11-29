# Dimensions Grid Network

This repository contains a Next.js 15 demo app for the "Dimensions Grid Network".

What is included:
- Main home page: src/app/page.tsx
- Grid Browser demo: src/app/grid/overlay/page.tsx
- Zapier webhook endpoint (app route): src/app/api/hooks/zapier/route.ts
- Convenience file at: src/app/api/hooks/zapier.ts
- GridBackground component: src/components/GridBackground.tsx
- next.config.js, package.json, tsconfig.json, vercel.json
- Basic layout and global styles

Run locally:
1. Use Node 20+.
2. npm install
3. npm run dev

The webhook handler accepts POST requests with JSON payloads and responds with a JSON acknowledgement.