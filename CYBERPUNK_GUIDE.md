# Cyberpunk/Goth/Alt Design Features

## Color Palette

### Dark Cyber Theme
- **Background**: Near-black (`#0a0a0f`) with purple undertones
- **Secondary**: Dark slate (`#16161d`)
- **Text**: Off-white with purple tint (`#e8e6ff`)
- **Accent Cyan**: Electric cyan (`#00ffff`) - primary neon
- **Accent Pink**: Magenta (`#ff00ff`) - secondary neon
- **Accent Purple**: Deep purple (`#b300ff`) - tertiary neon

## Visual Effects

### 1. Scanlines Effect
- Subtle horizontal scanline animation across entire page
- Creates CRT/old monitor aesthetic
- Can be disabled in `app/layout.tsx` by removing `scanlines` class

### 2. Neon Glow
- **Navigation underlines**: Cyan glow on hover/active states
- **Logo border**: Glowing cyan border around "N" icon
- **Project borders**: Cyan glow on image hover
- **Headings**: Subtle text-shadow glow on "Selected Projects"

### 3. Corner Accents
- Cyberpunk-style corner brackets on project images
- Appear on all four corners
- Increase opacity on hover
- Classic sci-fi UI element

### 4. CRT Screen Effect
- Subtle inset shadow gives curved screen appearance
- Applied to entire body via `crt-screen` class

### 5. Glitch Effect (Optional)
- Available via `glitch-hover` class
- RGB split text effect
- Currently applied to "Projects" heading
- Triggers on hover

### 6. Custom Scrollbar
- Angular design (no border-radius)
- Cyan glow on hover
- Glowing border around thumb

## How to Customize

### Adjust Glow Intensity
Edit `app/globals.css`:

```css
.glow-accent {
  text-shadow: 
    0 0 10px rgba(0, 255, 255, 0.5),  /* Increase 0.5 for more glow */
    0 0 20px rgba(0, 255, 255, 0.3),
    0 0 30px rgba(0, 255, 255, 0.1);
}
```

### Change Accent Color
Edit `tailwind.config.ts`:

```typescript
colors: {
  'accent': '#00ffff',        // Change to any neon color
  'accent-pink': '#ff00ff',   // Secondary accent
  'accent-purple': '#b300ff', // Tertiary accent
}
```

Popular cyberpunk colors:
- Electric cyan: `#00ffff`
- Hot pink: `#ff00ff`
- Neon green: `#39ff14`
- Electric blue: `#0ff0fc`
- Laser red: `#ff073a`

### Disable Scanlines
In `app/layout.tsx`, remove the `scanlines` class:

```tsx
<body className="bg-bg-primary text-text-primary antialiased crt-screen">
```

### Disable CRT Effect
Remove `crt-screen` class from body.

### Add More Glitch Effects
Add `glitch-hover` class to any heading:

```tsx
<h1 className="glitch-hover">Your Heading</h1>
```

## Accessibility

All effects respect `prefers-reduced-motion`:
- Scanlines animation stops
- Glitch effects disable
- Only essential transitions remain

Users who set reduced motion in their OS settings will see a static version.

## Performance Notes

- All effects are CSS-only (no JavaScript)
- GPU-accelerated transforms
- Minimal performance impact
- Scanlines use single pseudo-element

## Alternative Themes

### Goth/Dark Academia
```typescript
colors: {
  'bg-primary': '#0d0d0d',
  'accent': '#8b0000', // Dark red
}
```

### Vaporwave
```typescript
colors: {
  'bg-primary': '#1a0033',
  'accent': '#ff6ad5', // Hot pink
  'accent-purple': '#c774e8',
}
```

### Matrix
```typescript
colors: {
  'bg-primary': '#000000',
  'accent': '#00ff00', // Neon green
}
```

## Tips for Maximum Cyber Aesthetic

1. **Use monospace fonts** for code/tech sections
2. **Add grid backgrounds** to empty areas
3. **Implement data stream effects** (vertical scrolling text)
4. **Add terminal-style sections** with green text on black
5. **Use hexadecimal everywhere** (#FF00FF instead of "magenta")
6. **Add "loading" animations** with progress bars
7. **Include ASCII art** in headers/footers

## Inspiration Sources

- Blade Runner 2049
- Ghost in the Shell
- Cyberpunk 2077
- Tron Legacy
- Matrix trilogy
- Retrowave/synthwave album art
- 80s sci-fi terminals
