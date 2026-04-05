# Parallax

A lightweight JavaScript library for applying scroll-based parallax offsets through a CSS custom property.

## Installation

Include the following file in your HTML:

```html
<script src="https://cdn.jsdelivr.net/gh/mfrancis95/parallax/parallax.min.js"></script>
```

## Basic Usage

Add the `parallax` class to any element that should receive a scroll-based offset:

```html
<div class="parallax"></div>
```

Then use the `--scroll-y` CSS custom property in your styles:

```css
.parallax {
  transform: translateY(var(--scroll-y));
}
```

## Configuration Options

Configure parallax behavior using data attributes on your elements:

### `data-factor`

Controls how strongly the element moves relative to the page scroll position.

- **Type:** Number (as string)
- **Default:** `-1`
- **Example:**

```html
<div class="parallax" data-factor="-0.5"></div>
<div class="parallax" data-factor="0.25"></div>
```

### `data-unit`

Controls which CSS unit is used when writing the `--scroll-y` value.

- **Type:** String
- **Default:** `px`
- **Example:**

```html
<div class="parallax" data-factor="-10" data-unit="%"></div>
```

## How It Works

Each `.parallax` element receives an updated `--scroll-y` CSS variable based on the current `window.scrollY` value and the configured factor:

```javascript
(window.scrollY * factor) + unit
```

This makes it flexible to use with transforms, background positioning, or any other CSS property that can consume a custom property.