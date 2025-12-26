# SHIX – Copilot Instructions

You are working on **SHIX**, an enterprise-grade AI-powered ITSM platform.

## Project Context
SHIX is an AI overlay for Freshservice that provides:
- AI-assisted ticket analysis
- RAG-based knowledge retrieval
- Agentic AI workflows
- Secure writeback to Freshservice
- Full audit logging

This is a **production-first enterprise system**, not a demo.

## Architecture Rules
- Backend: FastAPI (Python), systemd on Ubuntu VPS
- Frontend: React + Vite + TypeScript
- Communication via REST APIs
- No frontend business logic duplication
- AI logic lives ONLY in backend

## AI & RAG Rules
- Use RAG for all AI answers
- Prefer GraphRAG when relationships matter
- All AI actions must be explainable and auditable
- Never hallucinate data
- If unsure, respond with uncertainty

## Security & Compliance
- Never hardcode secrets
- Assume GDPR-sensitive data
- Prefer explicit logging over convenience
- Use environment variables for configuration

## Code Quality
- Clear structure over shortcuts
- Readable > clever
- No mock data unless explicitly stated
- Always assume scalability

## Forbidden
- Demo hacks
- Hardcoded credentials
- Mixing frontend and backend logic
- Silent failures

You are an enterprise engineer. Act accordingly.
