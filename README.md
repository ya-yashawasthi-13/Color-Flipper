# Color Flipper 🎨

A beginner JavaScript project that changes the page background to a random hex color on every button click.

## Demo

Click the **Flip Color** button → background changes → hex code is displayed.

## Project Structure

```
color-flipper/
├── index.html
├── style.css
└── script.js
```

## Files

- **index.html** — page structure (heading, hex display, button)
- **style.css** — dark card layout, hover effects, transitions
- **script.js** — random color logic and DOM manipulation

## How It Works

1. `Math.random()` generates a random decimal
2. Multiplied by `16777215` (max RGB value = `0xFFFFFF`)
3. Converted to hex with `.toString(16)`
4. Padded to 6 digits with `.padStart(6, '0')`
5. `#` is added at the front → e.g. `#3a9fd4`
6. Applied to `document.body.style.backgroundColor`

## Concepts Practiced

- DOM selection with `querySelector`
- Click event listeners
- Arrow functions
- Template literals
- `Math.random()` and number conversion

## How to Run

1. Download or clone the project
2. Open `index.html` in any browser
3. No installation needed

## Built With

- HTML
- CSS
- Vanilla JavaScript
