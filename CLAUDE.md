# CLAUDE.md

## Lokalizacja

```
projects/websites/portfolio-kkocot/   <-- JESTES TUTAJ
```

## Knowledge Base API

Centralna baza wiedzy: claude.bard-dev.com

```bash
# Kontekst tego projektu
curl -s "https://claude.bard-dev.com/projects?search=portfolio-kkocot"

# Stack technologiczny
curl -s "https://claude.bard-dev.com/tech-stack?limit=100"

# Wzorce i konwencje
curl -s "https://claude.bard-dev.com/patterns?category=conventions"

# Decyzje architektoniczne
curl -s "https://claude.bard-dev.com/decisions"

# Kontekst agenta
curl -s "https://claude.bard-dev.com/agent-contexts/by-name/AGENT_NAME/relevant-patterns"
```

## Komendy

```bash
npm install
npm run dev          # astro dev
npm run build        # astro build
npm run preview      # astro preview
```
