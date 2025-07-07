# 🚀 Framework7 + Svelte + Tailwind CSS Starter Template

A modern, full-stack starter template that combines the best of cross-platform development with Framework7, reactive programming with Svelte, beautiful styling with Tailwind CSS, and type safety with TypeScript.

## ✨ Features

- **📱 Framework7 8.3.4** - Native iOS & Android UI components
- **⚡ Svelte 4.2.0** - Reactive, component-based framework
- **🎨 Tailwind CSS 4.x** - Utility-first CSS framework
- **🔧 TypeScript** - Type-safe development
- **🚄 Vite 5.x** - Lightning-fast build tool with HMR
- **📦 Capacitor 7.x** - Deploy to iOS, Android, and Web
- **📱 Responsive Design** - Mobile-first responsive layout

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Framework7 | 8.3.4 | Mobile UI Framework |
| Svelte | 4.2.0 | Reactive Frontend Framework |
| Tailwind CSS | 4.x | Utility-first CSS |
| TypeScript | 5.x | Type Safety |
| Vite | 5.x | Build Tool & Dev Server |
| Capacitor | 7.x | Cross-platform Deployment |

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (Node.js 20+ recommended)
- npm or yarn package manager

### Installation

1. **Clone or download this template**
2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to the provided localhost URL

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run build-capacitor-ios` | Build and prepare for iOS |
| `npm run build-capacitor-android` | Build and prepare for Android |
| `npm run check` | Run TypeScript and Svelte checks |
| `npm run check:watch` | Run checks in watch mode |
| `npm run create:apk`  | Create apk for the project|

## 📁 Project Structure

```
src/
├── components/           # Svelte components
│   └── app.svelte       # Main app component
├── css/                 # Stylesheets
│   ├── app.css         # Main CSS file
│   └── tailwind.css    # Tailwind directives
├── js/                  # JavaScript modules
│   ├── app.js          # App initialization
│   ├── routes.js       # Framework7 routes
│   └── store.js        # App store
├── pages/               # Page components
└── fonts/               # Icon fonts
```

## 🎨 Styling

This template integrates Tailwind CSS with Framework7's theming system:

### Framework7 Theme Colors (Available as Tailwind classes)
- `framework7-primary` - #007aff (iOS Blue)
- `framework7-secondary` - #5856d6 (Purple)
- `framework7-success` - #34c759 (Green)
- `framework7-warning` - #ff9500 (Orange)
- `framework7-danger` - #ff3b30 (Red)

### Custom CSS Classes
- `.hero-section` - Gradient hero section
- `.feature-card` - Card component with hover effects
- `.tech-badge` - Technology badge styling

## 📱 Mobile Development

### iOS Development
```bash
npm run build-capacitor-ios
npx cap open ios
```

### Android Development
```bash
npm run build-capacitor-android
npx cap open android
```

## 🔧 Configuration

### Tailwind CSS
Configuration is in `tailwind.config.js` with Framework7 color integration.

### TypeScript
TypeScript configuration is in `tsconfig.json` with Svelte support.

### Vite
Build configuration is in `vite.config.js` with Svelte and CSS preprocessing.

## 🌙 Dark Mode

Dark mode is automatically supported through:
- Framework7's built-in dark theme detection
- Tailwind CSS dark mode utilities
- CSS custom properties integration

## 📚 Documentation & Resources

- [Framework7 Documentation](https://framework7.io)
- [Svelte Documentation](https://svelte.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [Capacitor Documentation](https://capacitorjs.com)
- [Vite Documentation](https://vitejs.dev)

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is licensed under the UNLICENSED License.

---

**Happy coding! 🎉** Build amazing mobile and web applications with this powerful starter template.