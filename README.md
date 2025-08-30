
<p align="center">
  <img src="[src/assets/coala-logo2.png" alt="Coala Logo" width="400](https://github.com/MaCisHacked/govbuddy-aussie-assist/blob/main/src/assets/coala-logo2.jpg)" />
</p>
# Coala — Australia’s Smart Government Companion

**Find services. Claim benefits. Stay safe online.**  
Coala helps Australians navigate government programs and datasets in plain English — with **clickable source links** so you can verify everything yourself.

## ✨ What Coala does (MVP)
- **Service & Dataset Finder** — Search across open government datasets (e.g., data.gov.au) and jump straight to CSV/JSON or the publisher page.
- **Scam & Phishing Check (first pass)** — Paste a URL/SMS/email and get risk signals + official guidance (Scamwatch, ACMA) so you don’t get burned.
- **Ask Coala (guided Q&A)** — Ask questions like “youth allowance”, “first home buyer” or “HECS indexation”. Coala returns a short, referenced answer with sources you can click.

> Roadmap: VIC-specific data toggle (DataVic), Scam heatmap, ABS Data API enrichment, and explainers for common life events (student, job seeker, carer, retiree, etc.).

## 🛠️ Tech Stack
- **Vite + React + TypeScript**
- **Tailwind CSS** + **shadcn/ui**

## 🚀 Quick Start (Local)
Prereqs: Node 18+ (or Bun), Git.

```bash
# clone your fork or repo
git clone <YOUR_GIT_URL>
cd coala

# install
npm i         # or: bun install

# dev
npm run dev   # or: bun dev
