---
title: "UI Framework — Popups & UX Navigation Layer"
date: 2024-05-01
slug: "ui-framework"
type: "system"
tags:
  - Unity
  - C#
  - UI/UX
  - Tools
role: "UI Programmer"
tech: "Unity UI, Event Systems, Reusable Architecture"
summary: "A modular UI/UX framework that unifies popups, menus, transitions, and feedback across multiple projects."
cover: "/images/SystemLogo.png"
links:
  appstore: ""
  playstore: ""
  video: ""
  download: ""
gallery: []
---

This UI Framework is a reusable system that handles **popups, screens, transitions, HUD elements, and feedback** across projects.

## My Role

- Built a centralized **Popup Manager** with stacking, priorities, and transitions  
- Created reusable UI components for dialogs, rewards, toasts, and screens  
- Integrated animations, sound cues, and haptics into a unified feedback layer  
- Separated UI logic from gameplay logic through event-driven communication

## Highlights

- Fast iteration: new screens can be added with minimal boilerplate  
- Consistent UX across all projects using shared patterns  
- Strong separation of concerns improves stability and reduces bugs

## Challenges & Solutions

- **Avoiding UI spaghetti**  
  Introduced a clean navigation layer so screens and popups don’t reference each other directly.

- **Cross-project consistency**  
  Packaged reusable UI patterns so they can be ported into new games instantly.

## Tech Stack

- Unity (C#)  
- UGUI / UI Toolkit  
- Event-driven UI architecture  
