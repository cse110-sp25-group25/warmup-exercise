# 🧩 Backend Team Task Guide – Beginner Friendly (6 People, No Code)

This document is for the backend team building the `<playing-card>` Web Component using **only HTML, CSS, and vanilla JavaScript**. Everyone on this team is a beginner — and that’s totally okay. This guide breaks down your task step-by-step with zero code, only instructions.

---

## 👤 Person 1 – Web Component Setup Engineer

### 🎯 Goal: Create the `<playing-card>` element and its internal structure

### 🧠 What You’ll Do:
- Build a custom HTML element called `<playing-card>`
- Use something called "Shadow DOM" to create a private layout inside it
- Add 3 elements inside: one for the card front, one for the back, and a wrapper

### 🔁 Order of Work:
- Start **first** – others are waiting on you!
- When done, share your file with the team ASAP

---

## 👤 Person 2 – Flip Logic & State Manager

### 🎯 Goal: Make the card flip when clicked

### 🧠 What You’ll Do:
- Add interactivity: when the card is clicked, it flips over
- Use a flag (like "flipped") to track whether it’s face-up or face-down

### 🔁 Order of Work:
- Start **after Person 1** shares the card structure
- Talk to Person 5 to agree on how the "flipped" state is handled

---

## 👤 Person 3 – Front Face Renderer (Suit & Rank)

### 🎯 Goal: Show the card's suit and rank on the front (e.g. "A ♠")

### 🧠 What You’ll Do:
- Read information from HTML like `suit="♠"` and `rank="K"`
- Display it inside the front section of the card
- Add a default if nothing is given (e.g. Ace of Spades)

### 🔁 Order of Work:
- Wait until Person 1 finishes the `.front` layout
- Ask Person 2 to call your function when the card loads

---

## 👤 Person 4 – Back Face Renderer

### 🎯 Goal: Display a static symbol or pattern on the back of the card

### 🧠 What You’ll Do:
- Add a symbol (like 🂠 or anything you like) to the back of the card
- It doesn’t change — it’s just visual design

### 🔁 Order of Work:
- Start after Person 1 builds the `.back` layout
- Ask Person 2 to call your function when the card loads

---

## 👤 Person 5 – Flipped Attribute Support

### 🎯 Goal: Let someone write `<playing-card flipped>` to show the front immediately

### 🧠 What You’ll Do:
- Detect when the `flipped` attribute is present
- Automatically apply the flipped state without waiting for a click

### 🔁 Order of Work:
- Start after Person 2 adds flip logic
- You’re building on their code — confirm you’re using the same “flipped” flag or class

---

## 👤 Person 6 – Deck Logic Engineer

### 🎯 Goal: Build a full deck of cards (52 total) and shuffle them randomly

### 🧠 What You’ll Do:
- Generate all combinations of suits (♠ ♥ ♦ ♣) and ranks (A to K)
- Shuffle the cards randomly
- Let the rest of the team import your functions when needed

### 🔁 Order of Work:
- You can work **anytime**
- No one depends on you to get started, but your tools will be useful in the final demo

---

## 🧭 Work Order Summary

| Person | When You Can Start        | What You Need First         |
|--------|---------------------------|------------------------------|
| 1      | ✅ Right away             | No one                      |
| 2      | ✅ After Person 1 shares  | Card layout                 |
| 3      | ✅ After Person 1 shares  | Card layout (`.front`)      |
| 4      | ✅ After Person 1 shares  | Card layout (`.back`)       |
| 5      | ✅ After Person 2 shares  | Flip logic (flipped state)  |
| 6      | ✅ Always                 | Fully independent           |

---
