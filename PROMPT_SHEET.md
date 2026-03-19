# Prompt Sheet: Recreate Airtable Puck Extension

Use this prompt sheet to recreate the app from scratch in a new codebase. It describes the product, UX, data model, and technical requirements clearly enough for a coding agent to implement.

---

## 1) One‑Sentence Goal
Build an Airtable Interface Extension that embeds the Puck visual page builder and stores page layouts as JSON in an Airtable table.

---

## 2) Core Features (Must‑Have)
- Drag‑and‑drop Puck editor with left component panel, center canvas, right property panel
- “Publish” action writes the current Puck JSON to an Airtable “Doc” (long text) field
- View/Edit toggle button at top-left to switch between read‑only render and editor
- Custom Puck components: Hero, Columns, Text, Image, Two Images, Number (stat)
- Root “Page” settings (title, color palette, background color)
- Layout data stored per record in a “Layouts” table (or any table chosen in properties panel)
- Custom properties for table/fields selection in Airtable properties panel
- Tailwind styling with dark mode support
- Permissions checks before record updates

---

## 3) Required Tech Stack
- React (Interface Extension)
- TypeScript
- Airtable Blocks Interface SDK
- @measured/puck
- Tailwind CSS

---

## 4) Airtable Data Model
Create a table (default name: `Layouts`) with these fields:
- `Name` (Single line text)
- `Doc` (Long text) — stores Puck JSON
- `Assets` (Attachment) — optional media uploads

The extension reads the first record by default and uses the chosen fields.

---

## 5) Airtable Custom Properties (Configuration)
Expose these custom properties in the Interface properties panel:
- **Layouts Table**: table selector
- **Name Field**: single line text field selector
- **Doc Field**: long text or rich text field selector
- **Assets Field**: attachments field selector

If any are missing, render a setup screen with instructions.

---

## 6) Puck Configuration
Define Puck config with:
- **components**: Hero, Columns, Text, Image, Two Images, Number
- **categories**: Layout, Freeform, Dynamic
- **root fields**:
  - `title` (text)
  - `colors` (custom palette editor for 8 colors)
  - `backgroundColor` (select from `white` + color1–color8)

Ensure a fallback component for unknown component types (show “Missing component”).

---

## 7) Component Behavior Specs

### Hero
Fields:
- headline (text)
- subhead (textarea)
- backgroundUrl (text, optional)
- backgroundColor (select: transparent + color1–color8)
- textColor (select: white/black + color1–color8)
- alignment (select: left/center/right)

Behavior:
- Uses CSS variables for color palette
- Shows background image overlay if provided

### Columns
Fields:
- columns (1–5)
- distribution (equal, auto, wide-left, wide-right)
- gap (none, small, medium, large)

Behavior:
- Renders DropZone for each column
- Responsive grid; allow nested components

### Text
Fields:
- content (textarea)
- size (xs–6xl)
- weight (normal/medium/semibold/bold)
- align (left/center/right)
- color (black/white + color1–color8)

Behavior:
- Uses CSS variables for color palette

### Image
Fields:
- imageUrl (text)
- altText (text)
- width (full/3‑4/1‑2/1‑3/1‑4/auto)
- aspectRatio (auto/square/16:9/4:3/3:2/21:9)
- objectFit (cover/contain/fill/none)
- alignment (left/center/right)
- borderRadius (none/sm/md/lg/xl/full)
- shadow (none/sm/md/lg/xl)

Behavior:
- Shows placeholder when no image URL
- Shows fallback when image fails to load

### Two Images
Fields (for both images):
- layout (side-by-side/stacked/60‑40/40‑60)
- gap (none/sm/md/lg/xl)
- imageUrl1/2, width1/2, aspectRatio1/2, objectFit1/2, borderRadius1/2, shadow1/2, altText1/2

Behavior:
- Renders two images in chosen layout
- Placeholder when image URL missing

### Number (Stat)
Fields:
- title (text)
- tableName (select from Airtable tables)
- displayType (count/summary)
- fieldName (select from table fields)
- summaryType (sum/average/median/min/max/range)

Behavior:
- If “count”, show number of records
- If “summary”, parse numeric cell values and compute summary
- Display subtitle “Table → Field”

---

## 8) Extension UI Behavior
- Loads Puck JSON from first record’s Doc field
- Updates state when record changes
- “Publish” button triggers Airtable update (JSON.stringify)
- Permission check before update; show helpful alert when blocked
- View mode uses `<Render />`, edit mode uses `<Puck />`
- Replace “Publish” label in Puck UI with “Save”
- Allow full width/height of container

---

## 9) Error & Empty States
- If custom properties missing: show “Setup Required” panel
- If no records: show “No Records Found”
- If JSON invalid: fall back to empty Puck data
- Unknown component types: render “Missing component” placeholder

---

## 10) Output Files & Structure
Expected project structure:
```
frontend/
  index.js
  app/ExtensionRoot.tsx
  airtable/customProperties.ts
  puck/config.tsx
  puck/components/
    Hero.tsx
    Columns.tsx
    Text.tsx
    Image.tsx
    TwoImages.tsx
    Number.tsx
```

---

## 11) Implementation Notes
- Use Airtable Interface SDK imports from `@airtable/blocks/interface/ui` and models from `@airtable/blocks/interface/models`
- Use `useCustomProperties` for configuration
- Use `table.getFieldIfExists()` (avoid hard‑coded field names)
- Use `useRecords(table)` and always guard null table/field
- Tailwind classes should support dark mode via `dark:` classes

---

## 12) Ready‑to‑Use Prompt (Copy/Paste)
**Prompt:**  
“Create an Airtable Interface Extension that embeds Puck as a visual page builder. It must save and load layouts as JSON in a `Doc` long-text field from a configurable `Layouts` table. Provide custom properties for selecting the table and fields, show setup instructions when missing, implement components (Hero, Columns, Text, Image, Two Images, Number), include root page settings (title, color palette, background color), and add a view/edit toggle. Use Tailwind with dark mode. Include permission checks before updating records, and render a ‘Missing component’ placeholder for unknown component types. Structure files as `frontend/app/ExtensionRoot.tsx`, `frontend/puck/config.tsx`, and `frontend/puck/components/*`.”

