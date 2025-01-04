# Nitros - Shipping Rate Calculator

A modern, responsive shipping rate calculator built with Next.js, featuring bilingual support (English/Arabic) and smooth animations.

## Features

### 🌐 Bilingual Support

- Full support for English and Arabic languages
- RTL/LTR layout switching
- Seamless language switching without page reload
- Localized content using JSON translation files

### 🎨 Responsive Design

- Mobile-first approach
- Adaptive layouts for all screen sizes:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- Flexible grid system using Tailwind CSS

### ✨ Animations & Interactions

- Smooth hover effects on navigation links
- Expandable courier cards with slide animations
- Transition effects on language switching
- Interactive rate calculator with dynamic updates
- Smooth scroll to sections

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/mostafaghorab11/nitros.git
cd nitros
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser

## Project Structure

```
nitros/
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # Reusable React components
│   ├── contexts/         # React contexts (Language context)
│   ├── locales/         # Translation files (en.json, ar.json)
│   └── utils/           # Utility functions
├── public/              # Static assets
└── tailwind.config.js   # Tailwind CSS configuration
```

## Key Components

### Language Switching

- Uses React Context for global language state
- Automatic RTL/LTR switching
- Persistent language preference

### Rate Calculator

- Dynamic city selection
- Real-time rate calculations
- Expandable courier details
- Responsive grid layout

### Navigation

- Mobile-friendly hamburger menu
- Smooth scroll to sections
- Active link highlighting
- Bilingual menu items
-

## Animation Details


1. Button Interactions:
   - Scale on click
   - Color transitions
   - Active state feedback

2. Navigation Hover:

   - Smooth color transition
   - Subtle background effect

3. Courier Cards:

   - Expand/collapse animation
   - Hover state transitions
   - Icon rotation on expand

4. Language Switch:

   - Fade transition for content
   - Layout adjustment animation


## Testing

### Unit Testing

The project includes comprehensive unit tests using Jest and React Testing Library. Here's an example of our testing approach for the Button component:

#### Button Component Tests

```typescript
// Button.test.tsx
describe('Button Component', () => {
  // Renders with different variants
  test('renders primary variant correctly', () => {
    // Tests primary button styling
  });

  test('renders secondary variant correctly', () => {
    // Tests secondary button styling
  });

  // Interaction tests
  test('handles click events', () => {
    // Tests click functionality
  });

  // Accessibility tests
  test('meets accessibility standards', () => {
    // Tests ARIA attributes
    // Tests keyboard navigation
  });
});
```

Key test cases covered:

- Button variants (primary/secondary)
- Click event handling
- Disabled state behavior
- Accessibility compliance
- Responsive styling
- Children content rendering

To run tests:

```bash
npm run test
# or
yarn test
```

For test coverage:

```bash
npm run test:coverage
# or
yarn test:coverage
```

## Additional Features

### Localization System
- Comprehensive bilingual support (English/Arabic)
- Context-based language management using React Context
- URL parameter support (?lang=ar/en) for direct language access
- Automatic text direction (RTL/LTR) switching based on language
- JSON-based translation management for easy maintenance
- Persistent language preferences across sessions

### Responsive Mobile Drawer
- Smooth slide-in/out animations with CSS transitions
- Touch-friendly mobile interface with swipe gestures
- Consistent styling with desktop version using Tailwind CSS
- Automatic breakpoint handling for different screen sizes
- Seamless mobile navigation experience
- Backdrop overlay with blur effect for better focus

### Button Animations
- Hover state transitions with scale and color changes
- Click feedback animations for better user interaction
- Consistent interaction patterns across the application
- Custom focus states for accessibility
- Smooth color transitions using CSS transforms
- Responsive touch feedback for mobile devices