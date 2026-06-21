# Task 2 — Wireframe & Use Case Documentation
### Talking Crooks IT Pvt. Ltd. — Technical Internship

A React + Vite web app showcasing software use case wireframes and documentation for 3 Indian small business markets. Built as part of Task 2 for my technical internship at Talking Crooks IT Pvt. Ltd.

---

## Use Cases

| # | Business | Problem Solved |
|---|----------|---------------|
| UC-01 | Gym & Fitness Management System | Member renewals, attendance & revenue tracking |
| UC-02 | Car & Bike Service Center System | Job cards, service history & billing |
| UC-03 | Pharmacy & Medical Store Management | Inventory, expiry alerts & billing |

Each use case includes:
- Problem Statement
- Target Users
- Key Features
- Business Value
- Why This Business Would Invest
- 6 fully interactive wireframe screens

---

## Tech Stack

- **React 19** + **Vite**
- **Tailwind CSS v4**
- **React Router v6** — multi-page routing
- **Phosphor Icons** + **Font Awesome**

---

## Project Structure

```
src/
├── components/
│   └── Nav.jsx
├── data/
│   └── Data.js
├── pages/
│   ├── Home.jsx
│   ├── UseCase1.jsx
│   ├── UseCase2.jsx
│   └── UseCase3.jsx
├── screens/
│   ├── UseCase1Screen.jsx
│   ├── UseCase2Screen.jsx
│   ├── UseCase3Screen.jsx
├── ui/
│   ├── leftScreen.jsx
│   ├── rightScreen.jsx
└── App.jsx
└── main.jsx
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```
