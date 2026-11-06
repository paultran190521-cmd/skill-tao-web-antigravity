<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Web QA Standards Auditor (`npm run audit`)
All AI coding agents MUST run `npm run audit` or invoke the `web_qa_inspector` subagent before presenting any code or landing page deliverable.
The audit validates 5 Golden Gates (100 points):
1. **Zero-Fluff Vietnamese Copywriting**: No fluff words like "chúng tôi", "nhằm mục đích", "quý khách".
2. **Typography & Capitalization**: H1 ALL CAPS (5-8 words/line) and Sentence case for subheadings/cards/buttons.
3. **Color Discipline & 1px Hairlines**: 60-30-10 ratio, 1 single CTA accent, no `border-2`/`border-4`, no rainbow text gradients.
4. **Tailwind v4 Keyframes**: `@keyframes scroll` & `.animate-scroll` declared in `globals.css`.
5. **TypeScript & Build Health**: 0 compilation errors (`tsc --noEmit`).

A score of **100/100 points** is mandatory before handoff.
