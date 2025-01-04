# Nitros - Shipping Rate Calculator

A modern, responsive shipping rate calculator built with Next.js, featuring bilingual support (English/Arabic) and smooth animations.

## Key Features

### 🌐 Bilingual Support
- English and Arabic languages with RTL/LTR layout switching
- Context-based language management with URL parameter support (?lang=ar/en)
- JSON-based translation system

### 🎨 UI/UX
- Responsive design for all devices (Mobile, Tablet, Desktop)
- Interactive animations and transitions
- Dynamic rate calculator with real-time updates

## Additional Features

### Localization System
- URL-based language switching (?lang=ar/en)
- Automatic RTL/LTR layout adaptation
- Persistent language preferences
- JSON-based translation management

### Responsive Mobile Drawer
- Touch-friendly with swipe gestures
- Smooth slide animations
- Backdrop overlay with blur effect
- Breakpoint-based responsive behavior

### Button Animations
- Scale and color transitions on hover/click
- Touch feedback for mobile devices
- Accessibility-focused states
- Consistent interaction patterns

## Getting Started

### Prerequisites
- Node.js 16.8 or later
- npm or yarn package manager

### Installation

```bash
git clone https://github.com/mostafaghorab11/nitros.git
cd nitros
npm install # or yarn install
npm run dev # or yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser

## Project Structure

```
nitros/
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # Reusable React components
│   ├── contexts/         # React contexts
│   ├── locales/         # Translation files
│   └── utils/           # Utility functions
├── public/              # Static assets
└── tailwind.config.js   # Tailwind CSS configuration
```

## Testing

The project uses Jest and React Testing Library for comprehensive testing:

### Component Tests
```typescript
describe('Component Tests', () => {
  test('Localization', () => {
    // Tests language switching
    // Tests RTL/LTR layouts
    // Tests content translation
  });

  test('Mobile Drawer', () => {
    // Tests responsive breakpoints
    // Tests touch interactions
    // Tests animation states
  });

  test('Button Interactions', () => {
    // Tests hover/click animations
    // Tests accessibility features
    // Tests touch feedback
  });
});
```

Run tests with:
```bash
npm run test        # or yarn test
npm run test:coverage # or yarn test:coverage