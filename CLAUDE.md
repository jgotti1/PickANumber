# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

"Guess My Number" — a small vanilla HTML/CSS/JS browser game (Udemy JavaScript course project). The player guesses a secret number from 1–20 with 20 points to spend. There is no build step, package manager, linter, or test suite; open `index.html` directly in a browser to run it.

Formatting is Prettier (`.prettierrc`: single quotes, `arrowParens: "avoid"`).

## Architecture

Three files, no modules or framework:

- `index.html` — static markup; loads `style.css` and `script.js` (at end of body).
- `script.js` — all logic. Game state lives in top-level `let` variables (`secretNumber`, `score`, `highScore`). Two click handlers: `.check` (validates the guess, handles win/wrong/lose) and `.again` (resets state and DOM). The UI is updated imperatively via `document.querySelector` on class names, so renaming a class in `index.html` requires updating `script.js` and `style.css` together.
- `style.css` — styling; the win state is driven from JS by inline `body` background and `.number` width changes (reset to `#222` / `15rem` in the `.again` handler — keep these values in sync).

Notes: the secret number is intentionally `console.log`'d for debugging. `highScore` is in-memory only (not persisted).

## Portfolio card

`README.md` ends with a hidden JSON block (between `portfolio-card:start` and `portfolio-card:end`) used by a portfolio site. Keep it in sync when features, tech or URLs change, and keep it valid JSON. The thumbnail is `docs/preview.jpg`.
