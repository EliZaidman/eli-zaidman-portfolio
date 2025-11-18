---
title: "ApesTDB — 3D Shooter / Tower Defense Hybrid"
date: 2024-09-01
slug: "apestd"
featured: true
tags:
  - Unity
  - C#
  - 3D
  - Mobile
  - UX/UI
  - Firebase
role: "Unity 3D Developer"
tech: "Unity C#, Mobile optimization, Enemy AI, UX/UI"
summary: "Mid-core 3D mobile title blending third-person shooter combat with tower defense, built with a strong focus on clean Unity C# architecture and performance."
cover: "/images/ApesTD/CoverPic.webp"
links:
  appstore: "https://apps.apple.com/il/app/apes-td/id6446364887"
  playstore: "https://play.google.com/store/apps/details?id=com.veryo.apestd"
  video: "https://youtu.be/Sqji_JXhJuM"
  download: ""
gallery:
  - "/images/ApesTD/CoverPic.webp"
---

ApesTDB is a **mid-core 3D mobile game** that combines moment-to-moment shooter gameplay with lane-based tower defense.  
My main contribution was on the **Unity / C# development side** — building stable, reusable systems that behave well on real devices.

## My Role

- Implemented and tuned the **core combat controller** (movement, aiming, shooting, hit feedback) in Unity C#  
- Built modular **enemy and wave systems**: spawn logic, paths, behaviors, and balancing hooks exposed to design  
- Developed **mobile-ready UX/UI flows** for HUD, menus, upgrades, and economy-related screens  
- Integrated and wired **analytics events** so product and design could track funnels, progression, and difficulty  
- Collaborated with game design on pacing and encounter design, while keeping the focus on clean implementation and performance

## Highlights

- Designed the player controller and combat logic as **reusable C# components**, easy to tune and extend for new content  
- Built configurable **wave and enemy setups** (via ScriptableObjects / data) so balancing didn’t require code changes  
- Ensured the game felt responsive on **a wide range of Android / iOS devices**, optimizing update loops, physics usage, and allocations  
- Worked in a **typical Israeli mobile-games environment**: small team, fast iteration, KPI-driven decisions, and production constraints

## Challenges & Solutions

- **Responsive 3D controls on mobile touch**  
  Getting aiming and movement to feel good on touch screens required a lot of iteration.  
  I exposed sensitivity, smoothing, aim-assist and camera parameters in the inspector, and tuned them through repeated playtests until we reached a balance between precision and accessibility.

- **Keeping 3D gameplay performant on low–mid devices**  
  I profiled critical scenes, reduced unnecessary allocations, optimized raycasts and physics checks, and adjusted update frequencies for non-critical systems.  
  This kept frame times stable even as we increased enemy counts and effects.

- **Bridging design intentions with technical constraints**  
  Instead of hard-coding specific waves or enemy behaviors, I created **data-driven systems** (e.g., wave configs, enemy archetypes, difficulty curves), so design could continue to iterate without destabilizing the codebase.

## Tech Stack

- Unity (C#) — player controller, combat logic, enemies, waves, and game flow  
- Mobile (iOS & Android) — performance tuning, input handling, build pipeline awareness  
- Data-driven configuration (ScriptableObjects / configs) for waves, enemies, and difficulty  
- In-game UX/UI (UGUI) — HUD, menus, upgrade screens, economy interfaces  
- Analytics wiring to support KPI-focused balancing and content decisions  
