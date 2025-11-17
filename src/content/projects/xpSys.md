---
title: "Progression & XP System — Leveling Framework"
date: 2024-05-01
slug: "progression-xp"
type: "system"
tags:
  - Unity
  - C#
  - Systems
  - Balancing
role: "Systems Programmer"
tech: "Unity C#, Progression Curves, Data-Driven Balancing"
summary: "Flexible XP and leveling system with curve-based thresholds, rewards, and event-driven level-up notifications."
cover: "/images/SystemLogo.png"
links:
  appstore: ""
  playstore: ""
  video: ""
  download: ""
gallery: []
---

This Progression & XP System provides a reusable, data-driven framework for **levels, XP, rewards, and stat scaling**.

## My Role

- Implemented XP gain, level thresholds, and level-up logic  
- Added **curve-based progression** using ScriptableObjects  
- Built the reward pipeline for level-ups (currencies, stats, unlocks)  
- Exposed clean events for UI, VFX, animations, and sound

## Highlights

- Fully data-driven level thresholds and rewards  
- Easily adjustable XP curves (linear, exponential, custom)  
- Plug-and-play system usable in multiple projects

## Challenges & Solutions

- **Balancing complexity**  
  Externalized all level data so designers could tune without code changes.

- **Cross-system dependencies**  
  Designed clear events (`OnXpGained`, `OnLevelUp`, `OnRewardGranted`) to avoid coupling UI to logic.

## Tech Stack

- Unity (C#)  
- ScriptableObjects  
- Data-driven progression  
