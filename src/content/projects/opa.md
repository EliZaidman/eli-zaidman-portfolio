---
title: "OPA! — Hybrid Casual Family Card Game"
date: 2024-10-01
slug: "opa"
tags:
  - Unity
  - Mobile
  - C#
  - Live-ops
role: "Lead Developer"
tech: "Unity C#, Mobile, UI/UX, Analytics, Monetization"
summary: "Original mobile card-shedding game (Clover Bite × Beach Bum) that passed 1M downloads on iOS and Android."
cover: "/images/Opa/OpaCover.webp"
links:
  appstore: "https://apps.apple.com/il/app/opa-family-card-game/id6469609802?l=he"
  playstore: "https://play.google.com/store/apps/details?id=com.bbumgames.opa"
  video: "https://www.youtube.com/watch?v=LBqwWa9Cblk"
  download: ""
gallery:
  - "/images/covers/opa.svg"
---

OPA! is a fast-paced, hybrid-casual **card-shedding game** designed for mobile.
I was the **sole Unity developer** in a three-person team (designer, artist, dev), responsible for building the entire playable experience.

## My Role

- Implemented the full game loop and rules in **Unity C#**
- Designed and built **UI/UX**: menus, in-game HUD, tutorial flow, and feedback
- Integrated **analytics and monetization** tools
- Owned mobile builds for **iOS and Android**, including store-ready configurations

## Highlights

- Scalable game architecture using **ScriptableObjects** and configuration assets
- Event-driven UI flow (popups, rewards, timers) that lets design tweak pacing without code changes
- Hooks for A/B testing and live-ops parameters

## Challenges & Solutions

- **Retention & onboarding**  
  Used analytics to understand where players dropped off, then iterated on early levels, tutorial timing, and rewards to improve D1/D7 retention.

- **Economy balance**  
  Externalized drop tables, rewards, and difficulty curves into data files so economy changes didn’t require a new build.

- **Performance on older devices**  
  Optimized allocations, batching, and effects to keep gameplay smooth even on low-end phones.

## Tech Stack

- Unity (C#)
- Mobile (iOS & Android)
- Analytics & attribution tools
- Mobile ad/monetization SDKs
