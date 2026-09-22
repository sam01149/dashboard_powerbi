---
version: alpha
name: Legion-design-analysis
description: |
  Legion is Telkom Digital's product-grade design system — a light-canvas, purple-accented UI kit built for dense enterprise and B2B interfaces (dashboards, forms, data tables, admin panels). The base canvas is pure white with a warm off-black ink (`#212121`, not pure black) for primary text. Legion Purple (`#875bf7`) is the singular brand voltage, threaded through every interactive default state — buttons, links, focus rings, active nav items, checked controls. Typography runs a single family, Nunito Sans, for both heading and body, with a strict bold/regular binary (headings always bold, body/caption regular by default, semibold/bold reserved for emphasis). The system is built on Tailwind-adjacent numeric token ladders — an 11-step 25→900 color ramp per hue, a 4px-based spacing/sizing scale running from 0 to 256px, and a moderate 0–32px radius scale capped by a `900px` full-pill token. Depth is nearly flat: Legion uses almost no shadows, relying instead on hairline borders (`#d0d5dd`), soft tinted backgrounds, and color-state changes (solid/soft/outline/transparent) to communicate interactivity and elevation. This is a components-first system — every primitive (Button, Chip, TextField, Badge) ships with a full solid/soft/outline/transparent × default/hover/press/disabled state matrix, making it exceptionally consistent but visually restrained compared to marketing-led systems like Discord or Spotify.

colors:
  base-white: "#ffffff"
  base-black: "#212121"
  base-transparent: "#ffffff00"
  primary-25: "#fbfaff"
  primary-50: "#f5f3ff"
  primary-100: "#ece9fe"
  primary-200: "#ddd6fe"
  primary-300: "#c3b5fd"
  primary-400: "#a48afb"
  primary-500: "#875bf7"
  primary-600: "#7839ee"
  primary-700: "#6927da"
  primary-800: "#5720b7"
  primary-900: "#491c96"
  secondary-25: "#f5f8ff"
  secondary-50: "#eff4ff"
  secondary-100: "#d1e0ff"
  secondary-200: "#b2ccff"
  secondary-300: "#84adff"
  secondary-400: "#528bff"
  secondary-500: "#2970ff"
  secondary-600: "#155eef"
  secondary-700: "#004eeb"
  secondary-800: "#0040c1"
  secondary-900: "#00359e"
  tertiary-25: "#fcfcfd"
  tertiary-50: "#f9fafb"
  tertiary-100: "#f2f4f7"
  tertiary-200: "#eaecf0"
  tertiary-300: "#d0d5dd"
  tertiary-400: "#98a2b3"
  tertiary-500: "#667085"
  tertiary-600: "#475467"
  tertiary-700: "#344054"
  tertiary-800: "#1d2939"
  tertiary-900: "#101828"
  information-25: "#f5fbff"
  information-50: "#f0f9ff"
  information-100: "#e0f2fe"
  information-200: "#b9e6fe"
  information-300: "#7cd4fd"
  information-400: "#36bffa"
  information-500: "#0ba5ec"
  information-600: "#0086c9"
  information-700: "#026aa2"
  information-800: "#065986"
  information-900: "#0b4a6f"
  error-25: "#fffafa"
  error-50: "#fef3f2"
  error-100: "#fee4e2"
  error-200: "#fecdc9"
  error-300: "#fda19b"
  error-400: "#f97066"
  error-500: "#f04438"
  error-600: "#d92d20"
  error-700: "#b32318"
  error-800: "#912018"
  error-900: "#7a271a"
  warning-25: "#fffcf5"
  warning-50: "#fffaeb"
  warning-100: "#feefc6"
  warning-200: "#fedf89"
  warning-300: "#fec84b"
  warning-400: "#fdb022"
  warning-500: "#f79009"
  warning-600: "#dc6803"
  warning-700: "#b54708"
  warning-800: "#93370d"
  warning-900: "#792e0d"
  success-25: "#f6fef9"
  success-50: "#ecfdf3"
  success-100: "#d1fadf"
  success-200: "#a6f4c5"
  success-300: "#6ce9a6"
  success-400: "#32d583"
  success-500: "#12b76a"
  success-600: "#039855"
  success-700: "#027a48"
  success-800: "#05603a"
  success-900: "#054f31"

typography:
  h1:
    fontFamily: "Nunito Sans"
    fontSize: 60px
    fontWeight: 700
    lineHeight: 72px
  h2:
    fontFamily: "Nunito Sans"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 56px
  h3:
    fontFamily: "Nunito Sans"
    fontSize: 36px
    fontWeight: 700
    lineHeight: 44px
  h4:
    fontFamily: "Nunito Sans"
    fontSize: 30px
    fontWeight: 700
    lineHeight: 40px
  h5:
    fontFamily: "Nunito Sans"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 36px
  h6:
    fontFamily: "Nunito Sans"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 28px
  body-large:
    fontFamily: "Nunito Sans"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  body-small:
    fontFamily: "Nunito Sans"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  caption-large:
    fontFamily: "Nunito Sans"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  caption-small:
    fontFamily: "Nunito Sans"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 18px

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  base: 6px
  md: 8px
  lg: 10px
  xl: 12px
  xxl: 14px
  xxxl: 16px
  2xl: 24px
  3xl: 32px
  full: 900px

spacing:
  0: 0px
  2: 2px
  4: 4px
  8: 8px
  12: 12px
  16: 16px
  20: 20px
  24: 24px
  28: 28px
  32: 32px
  36: 36px
  40: 40px
  48: 48px
  56: 56px
  64: 64px
  80: 80px
  96: 96px
  112: 112px
  128: 128px
  144: 144px
  160: 160px
  176: 176px
  192: 192px
  208: 208px
  224: 224px
  240: 240px
  256: 256px

components:
  button-primary-solid:
    backgroundColor: "{colors.primary-500}"
    textColor: "{colors.base-white}"
    typography: "600 weight, size varies by sizing (sm 12px / md 14px / lg 16px)"
    rounded: "sm 6px / md 8px / lg 10px"
    sizing: "sm 36px / md 44px / lg 52px height"
  button-primary-soft:
    backgroundColor: "{colors.primary-50}"
    textColor: "{colors.primary-500}"
  button-primary-outline:
    backgroundColor: transparent
    textColor: "{colors.primary-500}"
    border: "1px {colors.primary-400}"
  badge:
    backgroundColor: "{colors.primary-500} (variant-dependent)"
    textColor: "{colors.base-white}"
    rounded: "{rounded.full}"
  chip:
    backgroundColor: "variant + solid/soft/outline dependent"
    rounded: "sm 8px / md 10px / lg 12px"
  text-field:
    backgroundColor: "{colors.tertiary-50}"
    border: "1px {colors.tertiary-300}"
    rounded: "sm 8px / md 8px / lg 10px"
  card:
    backgroundColor: "{colors.base-white}"
    border: "1px {colors.tertiary-200} divider"
    rounded: "{rounded.xxxl} (16px)"
  modal:
    backgroundColor: "{colors.base-white}"
    overlay: "rgba(33,33,33,0.30)"
    rounded: "{rounded.xxxl} (16px)"
  navbar:
    backgroundColor: "{colors.base-white}"
    activeColor: "{colors.primary-500}"
  sidebar:
    backgroundColor: "{colors.base-white}"
    activeBackground: "{colors.primary-50}"
    activeIndicator: "{colors.primary-500}"

---

# Legion Design System — Analysis

## 1. Visual Theme & Atmosphere

Legion is an **enterprise product system**, not a marketing system — every reference document in this collection (Coinbase, Discord, NVIDIA, Spotify) analyzes a public-facing site; Legion instead analyzes the *component layer itself*, the primitives an internal team assembles into dashboards, admin panels, and B2B forms. That context shapes everything: there is no hero band, no full-bleed dark chapter, no gradient mesh. The canvas is white, the ink is a warm off-black (`#212121`, deliberately not pure `#000000`), and the one brand voltage — **Legion Purple** (`#875bf7`) — appears everywhere an element is interactive: default button fill, focus border, active nav indicator, checked checkbox, selected tab underline, hovering pagination cell.

The type system is a single family, **Nunito Sans**, doing double duty as both heading and body face — no separate display typeface, no licensed-font substitution table needed (unlike Coinbase's CoinbaseDisplay/CoinbaseSans split). Hierarchy comes from a strict weight binary: headings (H1–H6) are always **Bold**, body and caption text default to **Regular**, and Semibold/Bold are reserved as emphasis variants layered on top when a component needs a stronger label (button text, badge text, table headers).

Legion's defining structural trait is its **state matrix discipline**. Nearly every interactive component — Button, Chip, Badge — ships four visual treatments (`solid` / `soft` / `outline` / `transparent`) crossed with interaction states (`default` / `hover` / `press` / `disabled`, sometimes `focus`). This is a rigor not present in any of the four reference systems studied, which document at most Default + Active/Pressed. The tradeoff is a system that is precise and exhaustively specified, but visually quiet: depth is nearly flat (no shadow tokens beyond a translucent modal overlay), and geometry is moderate (a 0–32px radius range, capped by a `900px` full-pill token for avatars, switches, and pill-shaped controls) rather than expressive.

**Key Characteristics:**
- Light, white-canvas enterprise system — no dark mode surfaces documented
- Legion Purple (`#875bf7`) as the sole interactive-state color — buttons, links, focus rings, active nav/tabs, checked controls
- Single typeface (Nunito Sans) for heading and body — hierarchy via weight (Bold headings / Regular body) not typeface switching
- Full solid/soft/outline/transparent variant matrix per interactive component — Legion's signature structural pattern
- Near-flat elevation — hairline borders (`{colors.tertiary-300}`) and tinted backgrounds carry depth, not shadows
- 11-step 25→900 color ramps for Primary, Secondary, Tertiary (neutral), Error, Warning, Success, Information
- Ink is warm off-black `#212121`, not pure black — used as the default label/input text color across most components
- Semantic text hierarchy is contextual per component rather than one strict ramp: `#212121` (base-black) for most labels/input text, `{colors.tertiary-800}` for modal/alert titles and input values, `{colors.tertiary-700}` for nav/tab default labels, `{colors.tertiary-500}` for descriptions/placeholders/hints
- Granular 4px-based Spacing and Sizing scales running from 0 to 256px — the longest ladder of any system in this collection
- Radius scale (0/2/4/6/8/10/12/14/16/24/32/900) is moderate — softer than NVIDIA's 2px-everywhere, sharper than Spotify's pill-heavy geometry

## 2. Color Palette & Roles

### Primary (Purple) — brand & interactive-state color
| Step | Hex | Typical Use |
|---|---|---|
| 25 | `#fbfaff` | Sidebar active-submenu background |
| 50 | `#f5f3ff` | Soft button/chip background, sidebar/navbar active background |
| 100 | `#ece9fe` | Soft button hover, chip soft hover, sidebar/navbar hover background |
| 200 | `#ddd6fe` | Soft button press, focus-border ring (soft/solid variants) |
| 300 | `#c3b5fd` | Checkbox active border, disabled-active states |
| 400 | `#a48afb` | Outline button default border, disabled label tint |
| **500** | **`#875bf7`** | **Default/base — primary button fill, link, focus border, checked control, active tab/nav indicator** |
| 600 | `#7839ee` | Hover state across nearly all primary interactive components |
| 700 | `#6927da` | Press/active state, active nav-menu label |
| 800 | `#5720b7` | Reserved (rare direct use — deep accent) |
| 900 | `#491c96` | Reserved (rare direct use — deepest accent) |

### Secondary (Blue) — highlight/complement, used sparingly
25 `#f5f8ff` · 50 `#eff4ff` · 100 `#d1e0ff` · 200 `#b2ccff` · 300 `#84adff` · 400 `#528bff` · **500 `#2970ff` (default)** · 600 `#155eef` (hover) · 700 `#004eeb` (press) · 800 `#0040c1` · 900 `#00359e`

### Tertiary (Neutral) — foundation gray, text/border/surface backbone
| Step | Hex | Typical Use |
|---|---|---|
| 25 | `#fcfcfd` | Rarely used directly (reserved) |
| 50 | `#f9fafb` | Input/field default & hover background |
| 100 | `#f2f4f7` | Disabled component background (checkbox, badge soft) |
| 200 | `#eaecf0` | Card/table divider, accordion border-bottom, table header background |
| 300 | `#d0d5dd` | **Default border color — the system's hairline** (input, checkbox, radio, card outline) |
| 400 | `#98a2b3` | Disabled icon/border, breadcrumb separator, card default border |
| 500 | `#667085` | **Description / placeholder / hint text — the system's "muted" tone** |
| 600 | `#475467` | Table body text, table header hover fallback |
| 700 | `#344054` | Nav/tab/breadcrumb default label |
| 800 | `#1d2939` | Modal/alert title text, input value text (Select/Datepicker) |
| 900 | `#101828` | Pagination default label, slider label (least-used step) |

### Accent — Error (Red)
25 `#fffafa` · 50 `#fef3f2` · 100 `#fee4e2` · 200 `#fecdc9` · 300 `#fda19b` · 400 `#f97066` · **500 `#f04438` (default — error borders, error text, destructive button)** · 600 `#d92d20` (hover) · 700 `#b32318` (press) · 800 `#912018` · 900 `#7a271a`

### Accent — Warning (Orange)
25 `#fffcf5` · 50 `#fffaeb` · 100 `#feefc6` · 200 `#fedf89` · 300 `#fec84b` · 400 `#fdb022` · **500 `#f79009` (default)** · 600 `#dc6803` (hover) · 700 `#b54708` (press) · 800 `#93370d` · 900 `#792e0d`

### Accent — Success (Green)
25 `#f6fef9` · 50 `#ecfdf3` · 100 `#d1fadf` · 200 `#a6f4c5` · 300 `#6ce9a6` · 400 `#32d583` · **500 `#12b76a` (default)** · 600 `#039855` (hover) · 700 `#027a48` (press) · 800 `#05603a` · 900 `#054f31`

### Accent — Information (Sky Blue)
25 `#f5fbff` · 50 `#f0f9ff` · 100 `#e0f2fe` · 200 `#b9e6fe` · 300 `#7cd4fd` · 400 `#36bffa` · **500 `#0ba5ec` (default)** · 600 `#0086c9` (hover) · 700 `#026aa2` (press) · 800 `#065986` · 900 `#0b4a6f`

> **Known discrepancy**: an earlier Foundation reference (screenshot of the Figma color page) showed a different Information ramp — 500 `#2e90fa`, 600 `#1570ef`, 700 `#175cd3` — a more royal-blue hue. The values above come from the shipped component CSS variables (Badge, Chip, Alert, Button all consistently reference the `#0ba5ec` family), so they are treated as the source of truth for this document. The discrepancy itself is consistent with Legion's own Q2 sync findings: Foundation/token assets currently run at 100% unsync against implementation.

### Base
- White `#ffffff` — canvas, default surfaces, on-primary text
- Black (Ink) `#212121` — **not pure black** — default label/input text across most components
- Transparent `#ffffff00` — outline/transparent button and chip default backgrounds

## 3. Typography Rules

### Font Family
- **Heading**: Nunito Sans
- **Body**: Nunito Sans (same family — no separate display cut)

### Weight Tokens
Regular (400) · Italic · Semibold (600) · Bold (700) · ExtraBold (800)

### Type Scale

| Role | Size | Line Height | Default Weight | Emphasis Weight |
|---|---|---|---|---|
| H1 | 60px (3.75rem) | 72px (4.5rem) | Bold | — |
| H2 | 48px (3rem) | 56px (3.5rem) | Bold | — |
| H3 | 36px (2.25rem) | 44px (2.75rem) | Bold | — |
| H4 | 30px (1.875rem) | 40px (2.5rem) | Bold | — |
| H5 | 24px (1.5rem) | 36px (2.25rem) | Bold | — |
| H6 | 20px (1.25rem) | 28px (1.75rem) | Bold | — |
| Body Large | 18px (1.125rem) | 28px (1.75rem) | Regular | Semibold / Bold |
| Body Small | 16px (1rem) | 24px (1.5rem) | Regular | Semibold / Bold |
| Caption Large | 14px (0.875rem) | 20px (1.25rem) | Regular | Semibold / Bold |
| Caption Small | 12px (0.75rem) | 18px (1.125rem) | Regular | Semibold / Bold |

### Component-Level Typography Patterns
Observed directly from shipped component tokens — these deviate from the pure H1–H6/Body scale above because components define their own local font-size/weight pairs:
- **Interactive labels (button, badge, chip, breadcrumb, pagination)**: 600 (Semibold), sized 12–16px depending on component size variant (sm/md/lg)
- **Section/content titles (card, accordion, alert, snackbar, stepper)**: 700 (Bold), 16–24px
- **Form labels (text-field, select, text-area, datepicker)**: 600 (Semibold), 14px — distinct from form *input value* text, which is Regular (400)
- **Navigation labels (navbar menu, sidebar menu)**: 700 (Bold) for top-level menu items, 600 (Semibold) for sub-menu items
- **Body/description/hint text**: 400 (Regular) universally, 14–16px

### Principles
- **Bold/regular binary carried through to components**: the H1–H6-are-bold / body-is-regular rule extends into component labels — anything acting as a "title" (card title, modal title, accordion title, stepper title) is Bold; anything acting as supporting text (description, hint, placeholder) is Regular.
- **Semibold as the interactive-label weight**: buttons, chips, badges, and form field *labels* (not values) consistently use Semibold (600) — a middle weight reserved specifically for things the user acts on or names, distinct from both heading-Bold and body-Regular.
- **No letter-spacing tokens observed**: all captured type roles run at normal/0 tracking — a contrast to Spotify's uppercase 1.4–2px button tracking or NVIDIA's uppercase caption tracking.

## 4. Layout

### Spacing System
- **Base unit**: 4px
- **Scale**: 0, 2, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 208, 224, 240, 256px
- This is the longest spacing ladder of any system studied — Coinbase tops out at 96px (`section`), Discord at 40px (`section`), Spotify's scale stays under 20px. Legion's reach to 256px signals it's built for large dashboard/page-level layout, not just component-internal spacing.

### Sizing Scale (component dimensions — distinct token family from Spacing)
0, 2, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, then a gap to 144, 160, 176, 192, 208, 224, 240, 256px. Used for control heights/widths (button height, avatar diameter, icon containers, field heights) rather than gaps/padding.

### Grid & Container
Not directly observable from the captured component tokens — Legion's exported data covers component primitives, not page-level marketing layout. Component evidence (Navbar container padding `24px` left/right, Sidebar menu padding `24px` left/right, Modal container padding `24px`) suggests a **24px standard content-edge gutter** at minimum.

### Whitespace Philosophy
**Functional density over editorial breathing room.** Component padding is tight and consistent: form fields pad 16–20px horizontal, cards pad 16px per section, buttons pad 16–24px horizontal depending on size. This is closer to Spotify's "app, not a magazine" density than to Coinbase's 96px editorial rhythm — appropriate for a system whose primary surface is internal dashboards and data-dense admin tools, not public marketing pages.

## 5. Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Majority of surfaces — buttons (solid/soft), badges, chips |
| Hairline border | 1px `{colors.tertiary-300}` | Default state for input fields, checkboxes, radios, cards, table container |
| Divider | 1px `{colors.tertiary-200}` | Card header/footer divider, table row/column border, accordion border-bottom |
| Overlay | `rgba(33,33,33,0.30)` | Modal backdrop — the only translucent depth device in the system |
| Focus ring | 1–2px, tinted 200-step of active color | Replaces shadow-based focus indication (e.g. `{colors.primary-200}` border on focused primary button) |

**Shadow Philosophy**: Legion documents **no drop-shadow tokens** across all 30+ captured components. This is a sharp departure from every reference system studied — Spotify layers heavy `0.3–0.5` opacity shadows, Coinbase has a single soft-drop tier, NVIDIA permits a 5px ambient shadow on sticky chrome, Discord uses a wide violet-tinted glow. Legion instead achieves depth entirely through **border + background-tint + color-state changes**: a hovered soft-button doesn't lift, it deepens (`{colors.primary-50}` → `{colors.primary-100}`); a card doesn't float, it's outlined. This is consistent with an enterprise data-tool aesthetic where visual noise from shadows would compete with dense tabular content.

## 6. Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Sidebar menu items, tabs container/item, accordion item |
| `{rounded.xs}` | 2px | Checkbox field (sm size), pin-field (sm) |
| `{rounded.sm}` | 4px | Checkbox field (md), accordion container |
| `{rounded.base}` | 6px | Button (sm), snackbar container, checkbox (lg), pin-field (md), select list/option, datepicker modal |
| `{rounded.md}` | 8px | Button (md), text-field (sm/md), pin-field (lg), select field (md/sm), datepicker field (md/sm), progress-bar tooltip, tooltip container |
| `{rounded.lg}` | 10px | Button (lg), text-field/select/datepicker field (lg), pagination button/container, sidebar collapsed sub-menu |
| `{rounded.xl}` | 12px | Chip (lg), navbar menu, dropdown container, text-area (md/lg) |
| `{rounded.xxl}` | 14px | Chip (md) |
| `{rounded.xxxl}` | 16px | Modal container, card container, navbar sub-menu container |
| `{rounded.2xl}` | 24px | (reserved — present in scale, not directly observed in captured component set) |
| `{rounded.3xl}` | 32px | (reserved — present in scale, not directly observed in captured component set) |
| `{rounded.full}` | 900px | Avatar, badge, radio field, switch (field + toggle), stepper indicator, slider toggle, datepicker picker cell |

Legion's radius logic: **controls scale radius with their size variant** (sm/md/lg buttons and fields each get a slightly larger radius as they grow), **containers use a flat mid-range value** (16px for Card/Modal regardless of content), and **circular/pill elements use the dedicated `900px` full token** rather than `50%` or `9999px` — a naming choice distinct from every reference system studied.


## 7. Components

> Legion documents four visual variants per interactive component — **solid**, **soft**, **outline**, **transparent** — each crossed with **default / hover / press / disabled** states (some also carry **focus**-border tokens). This is the system's defining structural pattern. Sizing runs a consistent **sm / md / lg** ladder across nearly every form and action component.

### Actions

**`button`** — the core action primitive, offered in 6 color variants (primary, secondary, tertiary, warning, success, error) × 4 treatments (solid/soft/outline/transparent)
- **Solid**: background = variant's 500 step, text `{colors.base-white}`. Hover → 600 step, Press → 700 step.
- **Soft**: background = variant's 25/50-family tint, text = variant's 500/600 step. Hover deepens the tint toward the 100–200 step.
- **Outline**: background transparent, 1px border at variant's 300–400 step, text = variant's 500 step. Hover fills with the soft tint.
- **Transparent**: background transparent at rest, text = variant's 500 step. Hover introduces the lightest tint (25/50 step) as background.
- **Disabled** (shared across all variants): solid → bg `{colors.tertiary-300}`, text `{colors.tertiary-400}`; soft → bg `{colors.tertiary-100}`, text `{colors.tertiary-300}`; outline/transparent → transparent bg, text `{colors.tertiary-300}`, border `{colors.tertiary-300}` (outline only).
- **Sizing**: sm 36px height / md 44px / lg 52px. Radius: sm `{rounded.base}` (6px) / md `{rounded.md}` (8px) / lg `{rounded.lg}` (10px).
- **Padding**: sm 16px / md 20px / lg 24px horizontal, with 4–8px icon gap.
- **Typography**: 600 (Semibold), 12/14/16px across sm/md/lg.
- **Focus border**: each variant carries a dedicated focus-border token (e.g. primary solid focus → `{colors.primary-200}`), a 200-step tint of the active color — Legion's substitute for a focus-ring shadow.

**`anchor`** — inline text link
- Default text `{colors.primary-500}`, Hover `{colors.primary-600}`, Press `{colors.primary-700}`, Disabled `{colors.tertiary-400}`. Focus border `{colors.primary-400}`.
- Label weight 600 (Semibold), sized lg 16px / md 14px / sm 12px matching line-heights 24/20/18px.

**`badge`** — small solid status/count indicator, 6 variants (primary, secondary, tertiary, information, error, warning, success)
- Background = variant's 500 step, text `{colors.base-white}`, border = variant's 500 step (1px).
- Rounded `{rounded.full}` (900px) at all sizes. Sizing: lg 24px / md 20px / sm 16px container height.
- Typography 600 (Semibold), 16/14/12px across lg/md/sm.

**`chip`** — dismissible/selectable tag, same 6-variant × solid/soft/outline structure as Button but more compact
- Solid: bg = variant 500, label `{colors.base-white}` default, label flips to the variant color itself on hover (bg lightens toward 200-step).
- Soft: bg = variant's light tint (25/50-family), label = variant 500/600.
- Outline: transparent bg, border + label = variant 500/600.
- Rounded: lg `{rounded.xl}` (12px) / md `{rounded.xxl}` (14px) / sm `{rounded.md}` (8px). Sizing: lg 24px / md 20px / sm 16px.
- Typography 600 (Semibold), 16/14/12px.


### Forms

**`text-field`** — standard single-line input
- Background `{colors.tertiary-50}` (default & hover — same tint, no separate hover fill), Disabled bg `{colors.tertiary-200}`.
- Border 1px `{colors.tertiary-300}` default, `{colors.primary-500}` on hover **and** focus (Legion uses the same purple for both, with a thicker 2px inline border reserved for focus states specifically), `{colors.error-500}` on error, `{colors.success-500}` on success.
- Label color `{colors.base-black}` (#212121), weight 600. Input value color `{colors.base-black}`, weight 400. Placeholder `{colors.tertiary-500}`. Disabled input text `{colors.tertiary-400}`.
- Caption row: info `{colors.tertiary-600}`, error `{colors.error-500}`, success `{colors.success-500}`.
- Sizing: lg 52px / md 44px / sm 36px height. Radius: lg `{rounded.lg}` (10px) / md `{rounded.md}` (8px) / sm `{rounded.md}` (8px). Padding 16–20px horizontal.
- Border width: 1px (outline/resting), 2px (inline/focus emphasis).

**`text-area`** — multi-line variant of text-field
- Same background/border/state logic as `text-field`. Minimum field height `144px` (Sizing-144 token). Radius lg/md `{rounded.xl}` (12px), sm `{rounded.md}` (8px) — slightly larger than text-field's single-line radius.
- Adds a drag-icon affordance colored `{colors.base-black}`.

**`select`** — dropdown input, same field chrome as text-field plus an options list
- Field: identical background/border/typography pattern to text-field.
- List container: background `{colors.base-white}`, radius `{rounded.base}` (6px), max-height sm 212px / md 220px / lg 240px.
- Option states: default text `{colors.base-black}`, hover bg `{colors.tertiary-50}`, selected bg `{colors.primary-50}` with text `{colors.primary-500}`.

**`datepicker`** — calendar input, extends select's field chrome
- Field: same tri-state border logic as text-field/select.
- Picker cells: default label `{colors.tertiary-800}`, hover label `{colors.tertiary-800}` on `{colors.tertiary-50}` bg, active/selected `{colors.base-white}` label on `{colors.primary-500}` bg, today marked with `{colors.primary-500}` label + `{colors.primary-100}` border. Range-selection uses `{colors.primary-100}`/`{colors.primary-200}` tints. Picker cell radius `{rounded.full}` (900px — circular day cells).
- Modal container: radius `{rounded.base}` (6px), padding 24px, title weight 700, subtitle weight 600.

**`checkbox`**
- Unchecked: bg `{colors.base-white}`, border `{colors.tertiary-300}`. Hover border `{colors.primary-500}`.
- Checked/active: bg `{colors.primary-500}`, icon `{colors.base-white}`.
- Disabled: bg `{colors.tertiary-100}`, border/icon `{colors.tertiary-300}`.
- Field radius scales with size: lg `{rounded.base}` (6px) / md `{rounded.sm}` (4px) / sm `{rounded.xs}` (2px). Field sizing lg 24px / md 20px / sm 16px. Label weight 400 (Regular — an exception to the Semibold-label pattern used by text-field, since checkbox labels sit beside rather than above the control).

**`radio-button`**
- Same interaction logic as checkbox but circular. Dot color `{colors.primary-500}` when active, border `{colors.primary-500}` when active. Radius `{rounded.full}` (900px) at all sizes.
- Disabled-active state gets its own muted tokens (`{colors.primary-300}` dot/border) — distinguishing "was checked, now disabled" from "never checked, disabled."

**`switch`**
- Off: track bg `{colors.tertiary-400}`, toggle bg `{colors.base-white}`. On: track bg `{colors.primary-500}`.
- Disabled-off: track `{colors.tertiary-300}`. Disabled-on: track `{colors.primary-200}`.
- Track radius `{rounded.full}`, sizing lg 24×48px / md 20×40px / sm 16×32px (height×width).

**`pin-field`** — OTP/verification-code input, one boxed cell per digit
- Same border-state pattern as text-field (default `{colors.tertiary-300}`, hover/focus `{colors.primary-500}`, error/success variant colors).
- Sizing: lg 56×56px / md 48×48px / sm 40×40px per cell. Radius lg `{rounded.md}` (8px) / md `{rounded.base}` (6px) / sm `{rounded.sm}` (4px). 12px gap between cells.

**`slider`**
- Track `{colors.primary-300}`, active indicator `{colors.primary-500}`, toggle handle bg `{colors.tertiary-25}` with a 2px `{colors.primary-500}` border.
- Tooltip bg `{colors.tertiary-25}`, radius `{rounded.md}` (8px). Toggle radius `{rounded.full}`.


### Feedback

**`alert`** — inline banner, 4 semantic variants (information, warning, error, success)
- Background = variant's 25-step tint (near-white). Left border 4px in the variant's 500 step (a thicker accent border distinct from the 1px top/right/bottom border) — the signature "left-stripe" alert pattern.
- Icon background = variant 500 step, icon itself `{colors.base-white}`.
- Title `{colors.tertiary-800}`, weight 700. Description `{colors.tertiary-500}`, weight 400.
- Radius `{rounded.lg}` (10px). Padding 16px, 12px content gap.

**`snackbar`** — toast notification
- Background `{colors.base-white}`, radius `{rounded.base}` (6px). Title `{colors.base-black}` weight 600, description `{colors.tertiary-500}` weight 400. Left icon tinted `{colors.primary-500}`.

**`spinner`**
- Indicator `{colors.primary-500}`, track `{colors.primary-100}`. Sizing lg 64px / md 40px / sm 24px, stroke width lg 8px / md 6px / sm 4px.

**`progress-bar`**
- Track `{colors.tertiary-300}`, indicator `{colors.primary-500}`. Tooltip bg `{colors.base-white}`, radius `{rounded.md}` (8px). Track/indicator radius `{rounded.sm}` (4px). Label weight 600, 12px.

**`rating`**
- Default (unfilled) `{colors.tertiary-200}`, hover `{colors.warning-400}`, active/filled `{colors.warning-500}`. 2px gap between icons.

**`tooltip`**
- Background `{colors.base-white}`, text `{colors.tertiary-500}`, weight 400, 12px. Radius `{rounded.md}` (8px). Padding 12px horizontal / 8px vertical.

**`stepper`**
- Indicator: default bg `{colors.base-white}` with `{colors.tertiary-300}` border; active bg `{colors.base-white}` with `{colors.success-500}` border (note: "active" reuses the success color, not primary); success/complete bg `{colors.success-500}` with white label.
- Separator line: default `{colors.tertiary-300}`, active/success `{colors.success-500}`.
- Title weight 700, description weight 400, indicator number weight 700. Indicator sizing 40px, radius `{rounded.full}`, border width 2px.

### Navigation

**`navbar`** — top-level horizontal navigation with dropdown sub-menus
- Menu label default `{colors.tertiary-700}`, hover `{colors.tertiary-700}` (color holds, but gains a `{colors.primary-500}` bottom border), active label `{colors.primary-700}` with `{colors.primary-500}` border indicator.
- Menu background: default/hover states are transparent-on-white; active menu item gets `{colors.primary-50}` bg.
- Sub-menu panel: bg `{colors.base-white}`, radius `{rounded.xxxl}` (16px) container / `{rounded.lg}` (10px) per item, hover item bg `{colors.primary-100}`, active item bg `{colors.primary-50}`.
- Menu label weight 700 (top-level), sub-menu label weight 600. Menu height 40px, sub-menu row height 44px.

**`sidebar`** — vertical nav, mirrors navbar's color logic
- Menu default label `{colors.tertiary-700}`, active label `{colors.primary-500}` with a **4px left border** in `{colors.primary-500}` (Legion's directional active-indicator, distinct from navbar's bottom-border pattern).
- Active/hover background: `{colors.primary-50}` (active) / `{colors.primary-100}` (hover) for top menu; active sub-menu uses the lighter `{colors.primary-25}`.
- Menu label weight 700, sub-menu label weight 600. Menu/sub-menu row height 52px. Collapsed sub-menu container radius `{rounded.md}` (8px); expanded sub-menu items sit at 56px left-indent.

**`tabs`**
- Default border transparent, active border `{colors.primary-500}` (4px bottom indicator — thicker than most border tokens in the system, a deliberate emphasis weight for the active state). Hover border `{colors.primary-200}`.
- Default label `{colors.tertiary-700}`, hover `{colors.primary-700}`, active `{colors.primary-500}`. Container bottom border `{colors.tertiary-300}` (1px). Item height 56px, label weight 600, 16px, no radius (`{rounded.none}`) — Tabs is one of the few components that stays perfectly square.

**`breadcrumb`**
- Separator `{colors.tertiary-400}`, default crumb `{colors.primary-500}`, hover `{colors.primary-700}`, active/current crumb `{colors.tertiary-500}` (the *current* page is de-emphasized to gray while prior/navigable crumbs stay purple — an inverted emphasis pattern worth preserving in implementation). Label weight 600, 14px.

**`pagination`**
- Default button bg `{colors.base-white}`, label `{colors.tertiary-900}`. Hover bg `{colors.primary-100}`, label stays `{colors.tertiary-900}`. Active/current page bg `{colors.primary-500}`, label `{colors.base-white}`. Disabled bg `{colors.tertiary-100}`, label `{colors.tertiary-400}`.
- Button sizing 40px, radius `{rounded.lg}` (10px) for both button and container.

**`dropdown`** (generic menu/popover container)
- Background `{colors.base-white}`, radius `{rounded.xl}` (12px), padding 12px.

### Data Display

**`card`**
- Container bg `{colors.base-white}`, header/footer divider `{colors.tertiary-200}` (1px), outer container border 1px (color drawn from a dedicated `{colors.tertiary-400}`-adjacent default-border token). Radius `{rounded.xxxl}` (16px).
- Header/footer padding 16px all sides; body padding is intentionally **0px** (body content is expected to define its own internal spacing — confirms the "Card Body has zero padding by design" rule already established for this project).
- Title weight 700, description weight 400. Header title 18px, header description 12px, body title 18px, body description 16px.

**`table`**
- Header bg `{colors.tertiary-200}`, header text `{colors.base-black}` weight 700, 16px. Body bg `{colors.base-white}`, striped-body bg `{colors.primary-50}`, hover row bg `{colors.tertiary-200}`. Body text `{colors.tertiary-600}`, weight 400, 14px.
- Border 1px `{colors.tertiary-200}` on container, column, and row. Cell padding 16px all sides.

**`tree`**
- Label `{colors.base-black}` weight 600, secondary/child label `{colors.tertiary-500}` weight 400. Icon `{colors.base-black}`. 8px icon-label gap, 12px container gap.

**`avatar`**
- Background `{colors.primary-500}`, label `{colors.base-white}` weight 700, border `{colors.primary-200}` (0px width by default — border color defined but width token is 0, effectively unused unless explicitly enabled). Radius `{rounded.full}` at all sizes. Sizing lg 64px / md 40px / sm 32px.

**`divider`**
- Line `{colors.tertiary-300}`, inline label `{colors.tertiary-500}` weight 400, 14px, 16px label gap.

**`accordion`**
- Closed/opened item bg `{colors.base-white}`, disabled item bg `{colors.tertiary-100}`. Title `{colors.base-black}` (both open/closed states — no color change on expand, only the icon differs). Description `{colors.tertiary-500}`. Border-bottom `{colors.tertiary-200}`.
- Item radius `{rounded.none}` (0px — flush rows), container radius `{rounded.sm}` (4px). Title weight 700, description weight 400.

### Overlays

**`modal`**
- Container bg `{colors.base-white}`, radius `{rounded.xxxl}` (16px), padding 24px, 16px content gap.
- Overlay `rgba(33,33,33,0.30)` — the system's only translucent/scrim surface.
- Title `{colors.tertiary-800}` weight 700, 24px. Description `{colors.tertiary-500}` weight 400, 18px. Right (close) icon `{colors.base-black}`, left icon `{colors.tertiary-400}`.


## 8. Do's and Don'ts

### Do
- Reserve `{colors.primary-500}` as the single default state-color for every interactive component — buttons, links, focus rings, checked/active controls, active nav.
- Use the 600-step of a color for hover and the 700-step for press/active across nearly every component — this three-step state ladder (500 default → 600 hover → 700 press) is the system's universal interaction rule.
- Apply the solid/soft/outline/transparent variant matrix consistently when introducing new action components (Button, Chip, Badge already establish the pattern) rather than inventing new one-off treatments.
- Keep headings Bold and body/caption Regular; reach for Semibold specifically on interactive labels (buttons, chips, form-field labels, nav items) — it functions as the system's "actionable text" weight.
- Build depth from border + background-tint state changes, not shadows — a hovered/pressed component should deepen in color, not lift.
- Use `{colors.base-black}` (`#212121`) — not `{colors.tertiary-900}` — as the default text color for form inputs, control labels, and body copy; reserve `{colors.tertiary-800}` for titles inside Modal/Alert and reserve `{colors.tertiary-900}` for the rare cases already observed (Pagination, Slider labels).
- Scale radius with component size (sm/md/lg get progressively larger radius tokens) rather than using one fixed radius per component type.
- Use the dedicated `{rounded.full}` (900px) token for every circular/pill shape — avatars, badges, switches, radio fields, stepper indicators — instead of `50%` or `9999px`.

### Don't
- Don't introduce a drop shadow for elevation — no component in the captured set uses one; the modal overlay's `rgba(33,33,33,0.30)` scrim is the system's only translucency device.
- Don't default checked/active controls to `{colors.tertiary-900}` or pure black for text — the system's actual "ink" is the softer `#212121`.
- Don't use uppercase or wide letter-spacing on button/label text — no tracking tokens are defined anywhere in the captured components (unlike Spotify's uppercase pill-button convention).
- Don't apply the same border-color logic to every field state — hover and focus intentionally share the same `{colors.primary-500}` border in Legion's text-field/select/datepicker family (no separate lighter hover-only border), so don't invent a distinct hover border color.
- Don't treat Card body padding as inheriting the header/footer 16px — Card body is deliberately `0px` padding; content inside must manage its own spacing.
- Don't confuse Sidebar's left-border active-indicator (4px) with Navbar's bottom-border active-indicator — the two navigation components use different directional cues and shouldn't be treated as interchangeable.
- Don't use Stepper's "active" step color as Primary — Stepper's active/current-step border deliberately reuses `{colors.success-500}`, not `{colors.primary-500}`, unlike every other "active state" in the system.

## 9. Responsive Behavior

### Known Gap
The captured Foundation and component token set describes **values, not layout breakpoints** — no responsive grid, breakpoint ladder, or collapsing strategy was present in any of the Figma/CSS-variable exports reviewed for this document. Because Legion's primary surface is internal dashboard/admin tooling (not a public marketing site), it's plausible the system defines responsiveness at the page/template layer rather than the component-token layer — but this has not been confirmed and should not be assumed. Treat this section as unresolved until layout or breakpoint documentation is supplied.

## 10. Iteration Guide

1. Focus on one component at a time — reference its exact CSS-variable name (`--button-background-color-primary-solid-default`, etc.) when precision matters, or its `{component.token}` shorthand from this document for general use.
2. New action components should default to the solid/soft/outline/transparent × default/hover/press/disabled matrix already established by Button, Chip, and Badge — this is the system's core structural convention, not an optional pattern.
3. Default interactive color-state progression: **500 → 600 (hover) → 700 (press)**. Apply this ladder to any new component before inventing custom hover/press values.
4. Headings default to Bold; body/caption default to Regular; use Semibold specifically for anything the user acts on or names (buttons, labels, tags).
5. Radius should scale with component size variant (sm < md < lg) for controls, and stay fixed at `{rounded.xxxl}` (16px) for containers (Card, Modal, Navbar sub-menu).
6. No shadows. If a new component seems to need elevation, reach for a border + tinted background first.
7. Confirm any new semantic color choice against the shipped CSS variables, not the Figma Foundation screenshots alone — the two have at least one documented discrepancy (Information ramp) consistent with Legion's own Q2 design-dev sync gap.

## 11. Known Gaps

- **Grid, container, and responsive breakpoints**: not present in the captured Foundation/component data. This document covers component-level tokens only.
- **Dark mode / dark surfaces**: no dark-canvas tokens were found anywhere in the captured set — Legion currently documents a light-canvas system only.
- **Foundation vs. shipped-component discrepancy (Information color)**: the Figma Foundation screenshot's Information ramp (500 `#2e90fa`) does not match the shipped component CSS variables (500 `#0ba5ec`). This document uses the shipped CSS variables as source of truth; the discrepancy itself should be flagged for design/dev sync.
- **"Transparency" base token**: documented in the Foundation screenshot as a swatch labeled "Transparency / #FFFFFF" but the shipped CSS resolves it as `#ffffff00` (fully transparent white) — the Foundation screenshot's printed hex omits the alpha channel.
- **Border token naming offset**: `Border-N` tokens do not equal `N`px — `Border-1` = 2px, `Border-2` = 4px, etc. (index-based naming, not value-based, unlike the Radius and Spacing scales which are named after their pixel value directly). Implementers should not assume the naming pattern is consistent across token families.
- **Components not yet captured in this pass**: this document reflects the ~30 components present in the supplied CSS-variable export (Alert, Accordion, Anchor, Avatar, Badge, Button, Breadcrumb, Card, Checkbox, Chip, Datepicker, Divider, Dropdown, Modal, Navbar, Pagination, PIN Field, Progress Bar, Radio Button, Rating, Select, Sidebar, Slider, Snackbar, Spinner, Stepper, Switch, Table, Tabs, Text Area, Text Field, Tooltip, Tree). Any Legion component outside this set (if one exists) is not yet documented here.
- **Hover states for Card, Table row-hover beyond the documented token, and Tree items**: partial — some components document hover explicitly, others (Card, Tree) show no dedicated hover token in the captured export and may rely on browser-default or undocumented behavior.
- **Icon system**: icon sizing appears in several components (`{component}-sizing-icon-*`) but no standalone icon-scale Foundation token (equivalent to Color/Typography/Spacing/Radius/Border/Sizing) was supplied.
