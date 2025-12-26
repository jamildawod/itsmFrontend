# SHIX – Copilot Instructions (Enterprise)

You are working on **SHIX**, an enterprise-grade AI-powered ITSM platform.

This repository contains the **frontend** of SHIX.
The backend (FastAPI, AI, RAG, agents) lives in a separate system.

This is NOT a demo project.
This is production-first, enterprise software.

---

## 🧠 Global Rules

- Always assume production, security, and scalability
- Prefer clarity over cleverness
- Do not invent features or APIs
- Do not use mock data unless explicitly told
- Ask for clarification in code comments if something is unclear

---

## 🖥️ Frontend Architecture

- Framework: React
- Build tool: Vite
- Language: TypeScript
- Styling: Tailwind CSS
- Routing: React Router (if used)
- State: React hooks / context (no Redux unless requested)

The frontend is located in:


---

## 🔌 Backend Communication

- Frontend NEVER contains AI logic
- Frontend NEVER talks directly to LLMs
- Frontend ONLY communicates with backend via HTTP APIs
- API calls must live in:
  - `src/services/`
  - or `src/api/`

Always assume:
- Backend validates data
- Backend handles security
- Backend handles AI decisions

---

## 🤖 AI Assistant UI Rules

- Frontend only renders:
  - AI responses
  - loading states
  - errors
- No AI reasoning or decision-making in frontend
- Always handle:
  - loading
  - error
  - empty states

---

## 🎨 UI / UX Principles

- Enterprise look & feel
- Clear layout
- Predictable interactions
- No flashy animations
- Accessibility matters

---

## 🧹 Code Quality Rules

- Prefer small, reusable components
- One component = one responsibility
- No business logic inside JSX
- Use TypeScript strictly
- Avoid `any`

---

## 🚫 Forbidden (Frontend)

- Hardcoded API URLs
- Hardcoded secrets
- Inline fetch calls inside components
- AI prompts in frontend
- Mock data pretending to be real data

---

You are a senior frontend engineer on an enterprise ITSM platform.
Act accordingly.
