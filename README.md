# Astro Party Crew Finder — Coding Challenge

Hey, and thanks for taking the time to do this. We loved your video and want to get a little more of a feel for how you think and how you work.

This is a tiny React app with **one bug**. Your job is to fix it.

We care more about how you reason than about how polished your code is. You can use whatever tools you'd normally use, including AI assistants — the video at the end is where the real signal lives.

---

## About this app

Pretend this app is deployed on wall-mounted tablets throughout a space station. The humans who live there use it in emergency moments to **find the nearest crew member with a specific role** — the on-call medic, the EVA lead, whoever can help right now.

A few things worth knowing about that environment:

- It's used during stressful moments (fires, decompression alarms, medical incidents), often one-handed on a touchscreen.
- The station's network is occasionally flaky and bandwidth-constrained.
- The crew list itself rarely changes — new rotations arrive every few months.
- Showing the *wrong* crew member is much worse than showing results a fraction of a second later.

You don't need to redesign the app around any of this. But the context might shape which fix you choose, and we'd love to hear that thinking in your video.

---

## Time

**We're suggesting around 30 minutes on the code.** If you want to spend more, that's totally fine — we just don't want to *ask* that of you at this stage. If you finish quickly or don't finish at all, both are fine; tell us where you got to in the video.

The video itself should be **no more than 5 minutes**.

---

## Setup

You'll need Node 18+ and npm.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

---

## What the app does

It's a search UI for a fake list of crew members. Type in the search box and matching crew members appear.

## The bug

Type quickly into the search box. For example, type `a`, then keep typing until you have `astro`.

You'll notice that **sometimes the results shown don't match what's in the search box.** The "Showing N results for …" status line will say one query, but the list below it shows results for a different query.

That's the bug. There's more than one reasonable way to fix it.

---

## Your task

1. Reproduce the bug.
2. Figure out the root cause.
3. Fix it however you think is best.
4. **Optional:** add or propose one small improvement or feature you think the app needs.

## How to submit

1. At the top of this repo on GitHub, click **"Use this template" → "Create a new repository"** and make it private. Name it whatever you'd like.
2. Make your changes there and commit them.
3. Add **`lukeco11`** as a collaborator on your repo so we can see it.
4. Send us:
   - the link to your repo
   - your walkthrough video (see below)

If you'd rather email a zip and a video link instead, that's fine too.

## The video

A walkthrough video (no more than 5 minutes — Loom, QuickTime, anything) covering:

1. What was the actual root cause?
2. How did you fix it?
3. What's another reasonable way you could have fixed it?
4. Why did you prefer your approach? What tradeoffs did you weigh?
5. If you had another 15 minutes, what would you improve?
6. *(Optional)* What feature or improvement did you add or would you propose, and why?
7. What does this submission say about how you like to build things?

---

## Ground rules

- Use whatever tools you'd normally use, including AI assistants.
- Don't sweat polish — judgment matters more.
- 30 minutes on the code is plenty; spend more only if you genuinely want to.

That's it. Have fun.
