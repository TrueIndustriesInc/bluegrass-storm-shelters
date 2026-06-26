<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes - APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Agent instructions - bluegrass-storm-shelters

Static-export marketing site for Bluegrass Storm Shelters (Bowling Green, KY). See `README.md` for stack, page map, and handover checklist.

## Hard rules

- `src/lib/site.ts` is the single source of truth for business data - never hardcode the phone, email, or address elsewhere.
- The site MUST keep building with `output: "export"` (no API routes, no server actions, no dynamic rendering). It deploys to both GitHub Pages (with `NEXT_PUBLIC_BASE_PATH`) and Vercel (without).
- Tone: calm, neighborly, empathetic. Never fear-based, never alarmist colors (no bright reds/oranges). Reference Dec 2021 factually and respectfully.
- All content edits keep answer-first structure (good for users, featured snippets, and LLMs).
- New FAQ/guide content must ship with matching JSON-LD via the builders in `src/lib/schema.ts`.
- Run `npm run lint && npm run build` before every commit.

## Learnings loop

Capture reusable insights in `docs/learnings.json` (status `proposed`) per the `cross-repo-learnings` skill; the canonical hub is `true-industries-playbook`.

## Cross-repo learnings (hub)

1. Read [true-industries-playbook/learnings.json](https://github.com/TrueIndustriesInc/true-industries-playbook/blob/main/learnings.json) for adopted org learnings.
2. Capture new insights locally in `docs/learnings.json` (`proposed`) via the `cross-repo-learnings` skill.
3. PM loop: skill **autonomous-pm-loop** — disabled unless `.cursor/pm/enabled` exists.
