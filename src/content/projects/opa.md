---
title: "OPA! — Hybrid Casual Family Card Game"
date: 2024-10-01
slug: "opa"
featured: true
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

OPA! is a fast-paced, hybrid-casual **card-shedding mobile game**.  
I was the **sole Unity developer** in a 3-person team, responsible for building every technical aspect of the game—from gameplay logic to UI, data systems, and mobile deployment.

## My Role

- Built the entire **game loop**: turn flow, card interactions, win/loss logic, timers, wild cards, and special rules  
- Designed and implemented the full **UI/UX**: menus, HUD, animated card feedback, tutorial steps, and accessibility flow  
- Integrated **analytics**, attribution events, and progression tracking for production visibility  
- Managed the full **mobile pipeline** (iOS + Android): builds, configs, permissions, SDKs, and store-ready submissions  
- Collaborated closely with design to tune pacing, behaviour rules, round duration, and feedback timing

## Systems I Built

- **Card & rule framework (C#)**  
  Modular system that defines card types, effects, interactions, and validation logic

- **Match flow controller**  
  Handles sequence of turns, rule exceptions, penalties, special actions, and round transitions

- **UI event-driven architecture**  
  Popup system, reward animations, countdowns, and tutorial triggers  
  Completely data-driven using ScriptableObjects and event channels

- **Live-Ops Hooks**  
  Exposed configuration flags (timers, rewards, difficulty curves) that the design team could change without new code

## Highlights

- Built a clean, extensible **ScriptableObject-based architecture** for cards, rules, and pacing  
- Developed a responsive and polished **card animation system**, including draw/discard, highlights, hover effects, and “snap” behaviour  
- Implemented **robust state handling** (disconnects, unexpected exits, round resets, error recovery) for real-world mobile conditions  
- Optimized runtime behaviour and memory usage for **low-end Android devices**, ensuring smooth animations and 60fps gameplay

## Challenges & Solutions

- **Complex rule interactions**  
  Created a layered validation pipeline to keep all exceptions (wild cards, penalties, combo rules) maintainable and readable.

- **UI responsiveness**  
  Built lightweight UI transitions and cached elements to avoid runtime allocations and reduce layout rebuilds.

- **Mobile build stability**  
  Consolidated all SDKs (analytics, ads, attribution) under a unified initialization flow to prevent ordering issues and freeze conditions.

## Tech Stack

- Unity (C#)
- ScriptableObjects / Data-driven configs
- iOS & Android production pipelines
- Analytics + mobile SDK integration
- Event-based UI architecture
