---
title: "Combat Reward Coordinator — Post-Battle Flow System"
date: 2024-05-01
slug: "combat-reward"
type: "system"
tags:
  - Unity
  - Systems
  - C#
  - UI/UX
role: "Gameplay Systems Developer"
tech: "Unity C#, Event-Driven Architecture, UI Flow"
summary: "Central system that manages everything that happens after combat ends: rewards, popups, animations, and transitions."
cover: "/images/SystemLogo.png"
links:
  appstore: ""
  playstore: ""
  video: ""
  download: ""
gallery: []
---

The Combat Reward Coordinator handles the entire **post-combat flow**, ensuring rewards, UI, and transitions run in a clean, predictable sequence.

## My Role

- Implemented the **victory event pipeline** that triggers UI, rewards, and transitions  
- Structured the system to avoid overlapping popups or duplicate reward claims  
- Integrated reward types (items, gold, XP, chests) through a unified entry point  
- Ensured compatibility with manual flows (e.g., special reward screens)

## Highlights

- Clean, event-driven flow for all post-combat scenarios  
- Modular reward handlers that are easy to plug in and extend  
- Defensive logic preventing duplicate triggers during edge cases

## Challenges & Solutions

- **Overlapping UI flows**  
  Centralized all victory logic into one system to prevent conflicts and race conditions.

- **Scalability**  
  Designed as a pluggable architecture so new reward types can be added without rewriting the pipeline.

## Tech Stack

- Unity (C#)  
- Event-driven architecture  
- UI flow management  
