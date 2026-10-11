# Lord Marshy Website

A Next.js portfolio for Guy Marshman.

## Local development

Use Bun 1.3.11. Node.js 20.9 or newer is still required by Next.js and Vercel's production runtime.

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
bun run lint
bun run build
bun run start
```

The production build is the same build Vercel runs.

## Deploy to Vercel

1. Create a GitHub repository and push this project’s `main` branch.
2. Import that GitHub repository in Vercel.
3. Keep the detected Next.js framework preset and default build command.
4. Deploy. Vercel assigns a `.vercel.app` address.
5. For a custom domain, add it in Vercel, then create the DNS records that Vercel provides and wait for HTTPS verification.

## Adding dynamic data later

This version has no database connection or API endpoints.

When adding one, keep database clients and secret environment variables in server components, route handlers, or server actions. Store connection strings and other secrets in Vercel Environment Variables, never in a client component or a `NEXT_PUBLIC_` variable. Put reusable data-access code in a server-only module, then add feature-specific server actions or route handlers.
