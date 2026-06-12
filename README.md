# 🛡️ Dexter's Learning Adventure

An interactive home-learning website covering the **Green Class, Summer 2 "Vikings"** curriculum — built for at least two weeks of daily learning, with progress saved automatically.

## Subjects covered

| Subject | What's inside |
|---|---|
| 📚 English | Persuasive writing, How to Train Your Dragon instruction writing, reading comprehension (retrieval, inference, summarising, prediction), grammar — plus two writing quests |
| 🔢 Maths | Money, time, shape & symmetry, position & direction — plus **endless** times-tables, arithmetic and money practice games that generate new questions every play |
| 🔬 Science | Classification of living things, animal groups, classification keys, life cycles, habitats & environmental change |
| 🌍 Geography | What settlers need, settlement types, UK place-name detective work (Viking/Saxon/Roman), map skills, design-a-settlement quest |
| 🏺 History | Who the Vikings were, longships, raiders, traders, daily life — building to the big question: *raiders or traders?* |
| 🔧 D&T | Healthy eating & picnic planning, electrical circuits & torch design, with planning quests |
| 🇪🇸 Spanish | Ten ice-cream flavours, numbers & euros, and how to buy an ice cream in Spanish |
| 💛 PSHE | Friendships, solving fall-outs, growing and changing, big feelings |
| 🕊️ RE | How Christians, Muslims, Hindus and others describe God — respectfully and simply |

## How to use it

Open `index.html` in any browser — that's it. No installation, no internet needed after loading.

Or serve it / host it (e.g. GitHub Pages) — it's a fully static site.

- **📅 Plan** — a ready-made 10-school-day plan with a few quests per day, ticked off automatically.
- **🏆 Awards** — trophies for finishing quests, earning stars and keeping a daily streak.
- **👪 Grown-ups** — see recent activity and Dexter's writing, back up / restore progress, or reset.

## Progress saving

Progress (scores, stars, streaks and writing) is saved automatically in the browser's `localStorage`. It survives closing the browser and switching off the computer, as long as you use the **same browser on the same device**.

To move progress to another device: **Grown-ups → Save & restore progress** — copy the backup code on one device and paste + Restore on the other.

## Tech

Plain HTML/CSS/JavaScript. No build step, no dependencies. Content lives in `data/*.js`; the engine is `app.js`.
