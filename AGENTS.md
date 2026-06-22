# AGENTS.md

Ten plik dodaje tylko lokalny kontekst projektu `portfolio-v3`. Globalne zasady, thin-pointer i runtime-wide conventions pozostaja w nadrzednym `AGENTS.md`.

## Lokalizacja

`projects/websites/portfolio-v3/`

## Knowledge Base API

Centralna baza wiedzy: `https://Codex.bard-dev.com`

```bash
# Kontekst tego projektu
curl -s -H "X-API-Key: $KB_API_KEY" \
  "https://Codex.bard-dev.com/projects?search=portfolio-v3"

# Stack technologiczny
curl -s -H "X-API-Key: $KB_API_KEY" \
  "https://Codex.bard-dev.com/tech-stack?limit=100"

# Wzorce i konwencje
curl -s -H "X-API-Key: $KB_API_KEY" \
  "https://Codex.bard-dev.com/patterns?category=conventions"

# Decyzje architektoniczne
curl -s -H "X-API-Key: $KB_API_KEY" \
  "https://Codex.bard-dev.com/decisions"

# Kontekst agenta
curl -s -H "X-API-Key: $KB_API_KEY" \
  "https://Codex.bard-dev.com/agent-contexts/by-name/AGENT_NAME/relevant-patterns"
```

## Komendy

```bash
npm install
npm run dev
npm run build
npm run preview
```
