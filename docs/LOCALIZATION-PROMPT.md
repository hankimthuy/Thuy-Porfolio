# Localization Prompt — Han Kim Thuy Portfolio

Copy everything below the line into a new Cursor chat to implement i18n + bilingual SEO.

---

## Task

Implement **English + Vietnamese localization** for the Next.js 16 portfolio at `e:\01_Working\Thuy-Porfolio` with **SEO-first bilingual strategy**.

## Context

- **Single-page portfolio** (App Router): `app/page.tsx`, sections in `components/`
- **Person:** Han Kim Thuy (EN display) / Hàn Kim Thủy (VI legal/branded name)
- **Roles:** Product Engineer | Product Owner · Software Engineer (freelance)
- **Experience:** 4+ years
- **Contact:** Zalo 0947 701 601, LinkedIn /in/thuyhankim, thuyhankim@gmail.com, GitHub hankimthuy
- **Current SEO:** `lib/seo.ts`, `components/JsonLd.tsx`, `app/sitemap.ts`, `app/robots.ts`
- **Site URL env:** `NEXT_PUBLIC_SITE_URL` (Vercel)

## Current state (temporary EN-only UI)

- UI copy is **English**; name shown as `Han Kim Thuy` via `PERSON.brandName`
- Vietnamese name `Hàn Kim Thủy` kept in `PERSON.fullName` + JSON-LD `alternateName`
- Meta description is **bilingual in one string** (EN | VI) — needs proper split per locale
- No route-based or cookie-based locale switching yet
- FAQ data in `lib/faq-data.ts` (English only)
- Projects hardcoded in `components/Projects.tsx` (English only)

## Requirements

### 1. i18n architecture (Next.js App Router)

Choose and implement one approach (prefer **next-intl** or Next.js built-in `[locale]` segment):

```
/en/   → English (default)
/vi/   → Vietnamese
```

- Middleware: detect locale (Accept-Language optional), default `/` → `/en` or redirect
- Language switcher in `Header.tsx` (EN | VI), preserve hash/section if possible
- Extract all user-facing strings to message files: `messages/en.json`, `messages/vi.json`
- Shared constants (email, phone, URLs) stay in `lib/seo.ts` or `lib/contact.ts`

### 2. Name & branding per locale

| Locale | Display name | H1 / title                    |
| ------ | ------------ | ----------------------------- |
| `en`   | Han Kim Thuy | Hi! I'm Han Kim Thuy          |
| `vi`   | Hàn Kim Thủy | Xin chào! Tôi là Hàn Kim Thủy |

- JSON-LD `Person.name` = locale primary; `alternateName` always includes both forms + Thuy, thuyhankim
- Logo: `Han Kim Thuy_` (EN) / `Hàn Kim Thủy_` (VI) or keep ASCII logo on both — decide with UX consistency

### 3. SEO per locale

**Each locale gets its own metadata** via `generateMetadata` in `app/[locale]/layout.tsx`:

**English (`/en`):**

- title: `Han Kim Thuy | Product Engineer | Product Owner — Portfolio`
- description: EN only, mention 4+ years, CMS, freelance
- `html lang="en"`, OG `locale: en_US`

**Vietnamese (`/vi`):**

- title: `Hàn Kim Thủy | Kỹ sư Sản phẩm | Product Owner — Portfolio`
- description: VI only
- `html lang="vi"`, OG `locale: vi_VN`

**Both:**

- `hreflang` alternates: `en`, `vi`, `x-default` (point to `/en` or user preference)
- `canonical` per locale URL
- **Sitemap** lists both `/en` and `/vi` with `alternates.languages`
- **JSON-LD** localized: `WebSite.inLanguage`, FAQ questions/answers from locale messages
- Keywords: EN page targets `Han Kim Thuy`; VI page targets `Hàn Kim Thủy`

### 4. Content to translate

| File / area                  | Strings                                                       |
| ---------------------------- | ------------------------------------------------------------- |
| `Hero.tsx`                   | greeting, roles, experience badge, bio paragraph              |
| `Header.tsx`                 | nav labels                                                    |
| `Skills.tsx`                 | section title, descriptions if any                            |
| `Projects.tsx`               | section titles, all 4 project cards (problem/solution/impact) |
| `ProfessionalMilestones.tsx` | headings, milestone copy                                      |
| `FAQ.tsx`                    | heading, contact line, all Q&A                                |
| `Footer.tsx`                 | connect copy, button labels                                   |
| `lib/faq-data.ts`            | move into message files                                       |

**PS Invest project** (side project): keep technical terms (Next.js, GraphQL) untranslated; translate problem/solution/impact.

### 5. OG image

- Option A: one OG image with both names
- Option B: `og-image-en.png` / `og-image-vi.png` per locale
- Regenerate with current title: Product Engineer | Product Owner (not old Full-stack Product Engineer)

### 6. Do NOT break

- Existing design system (colors #424874, #583FBC, #A6B1E1, #F4EEFF)
- Contact links (Zalo, LinkedIn, email, GitHub)
- Single-page anchor navigation (`#about`, `#skills`, `#projects`, `#faq`, `#footer`)
- Build must pass: `npm run build`

### 7. Deliverables

1. Working `/en` and `/vi` routes with language switcher
2. `messages/en.json` + `messages/vi.json`
3. Locale-aware `generateMetadata` + JSON-LD
4. Updated `sitemap.ts` + `robots.ts` for both locales
5. Brief README section: how to add strings, deploy env vars

## SEO goals (why bilingual)

- **Google EN:** rank for `Han Kim Thuy`, `Han Kim Thuy portfolio`, `Product Engineer Vietnam`
- **Google VI:** rank for `Hàn Kim Thủy`, `Hàn Kim Thủy portfolio`, `kỹ sư sản phẩm`
- Rare full name → both locales should use exact name in H1, title, JSON-LD, image alt

## Out of scope (for now)

- CMS for content editing
- Blog
- RTL languages

## Verify after implementation

- [ ] View source `/en` and `/vi` — correct `lang`, title, description, canonical, hreflang
- [ ] [Google Rich Results Test](https://search.google.com/test/rich-results) for both URLs
- [ ] Share preview (LinkedIn) shows correct OG per locale
- [ ] Language switcher toggles without broken layout
- [ ] Mobile: hero titles wrap cleanly (no orphan words)
