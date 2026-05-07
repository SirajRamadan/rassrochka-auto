# Design System — Рассрочка Авто

## Concept
Dark luxury automotive. Premium feel, high contrast, 3D depth.
Russian-market automotive dealer with trust signals front-and-center.

## Colors
- Background: #0a0a0f (near black)
- Surface: #111118
- Surface2: #16161f
- Gold accent: #FFD700 → #FFA500 gradient
- Red accent: #E53935 (urgency/CTA)
- Text primary: #FFFFFF
- Text secondary: #A0A0B0
- Border: rgba(255,255,255,0.08)

## Typography
- Display: "Unbounded" (Google Fonts) — bold, geometric, modern Russian-compatible
- Body: "Manrope" (Google Fonts) — clean, highly legible
- Mono: system monospace

## Spacing
- Section padding: 120px vertical desktop, 60px mobile
- Container: max-w-7xl, centered
- Grid gap: 24–48px

## Motion
- Page load: staggered fade-up with GSAP
- Scroll: Intersection Observer + CSS transforms, NO heavy JS on scroll
- 3D: Three.js canvas hero with floating car silhouette + particle field
- Cards: GPU-only transforms (translateZ, rotateY) on hover
- Performance: will-change only when animating, cleanup after

## Components
- Navbar: glassmorphism, sticky, blur backdrop
- Hero: full-viewport, 3D Three.js canvas background
- Stats counter: animated count-up on scroll
- Cards: 3D tilt on hover (CSS perspective)
- Buttons: gold gradient primary, outline secondary
- Forms: dark floating-label inputs
- Footer: dark, minimal
