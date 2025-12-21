# Reporting Service

## Purpose
Reporting Service aggregates data from:
- Asset Service
- Employee Service
- Assignment Service

It provides read-only reporting APIs for UI and external consumers.

❌ No database  
❌ No data mutation  
✅ Aggregation only  

---

## Architecture

Asset Service
Employee Service  --->  Reporting Service  ---> UI
Assignment Service

---

## APIs

| Method | Endpoint | Description |
|------|---------|-------------|
GET | /health | Health check |
GET | /reports/summary | High-level counts |
GET | /reports/assets/utilization | Asset utilization |
GET | /reports/employees/assets | Employee-asset mapping |
GET | /reports/assignments/history | Assignment history |

---

## Environment Variables

Create `.env` from example:

```bash
cp .env.example .env
