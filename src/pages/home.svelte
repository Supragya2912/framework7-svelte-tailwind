<script>
  import { Page, Navbar } from "framework7-svelte";
</script>

<Page name="home">
  <Navbar title="Framework7 + Svelte + Tailwind" />

  <!-- Hero Section -->
  <div class="bg-red-500">
    <div class="hero-section">
      <h1 class="text-4xl md:text-6xl font-bold mb-4">
        🚀 Framework7 + Svelte + Tailwind
      </h1>
      <p class="text-xl md:text-2xl mb-6 opacity-90">
        The ultimate starter template for cross-platform apps
      </p>
      <div class="flex flex-wrap justify-center gap-3 mb-8">
        <span class="tech-badge">Framework7 8.3.4</span>
        <span class="tech-badge">Svelte 4.2.0</span>
        <span class="tech-badge">Tailwind CSS 4.x</span>
        <span class="tech-badge">TypeScript</span>
        <span class="tech-badge">Vite 5.x</span>
        <span class="tech-badge">Capacitor 7.x</span>
      </div>
      <p class="text-lg opacity-80 mb-6">
        Build beautiful, performant mobile and desktop apps with native look and
        feel
      </p>
      <div class="text-center">
        <p class="text-base opacity-70 mb-2">⭐ Project by</p>
        <p class="text-xl font-semibold text-white">Supragya Anand</p>
        <p class="text-sm opacity-60 mt-2">
          For the developer community
        </p>
      </div>
    </div>

    <!-- Features Grid -->
    <div class="p-4">
      <h2
        class="text-2xl font-bold text-center mb-4 text-gray-800 dark:text-white"
      >
        What's Included
      </h2>
      <p class="text-center text-gray-600 dark:text-gray-300 mb-8 px-4">
        Everything you need to build modern, cross-platform applications with
        the latest web technologies
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="feature-card">
          <div class="text-4xl mb-4">📱</div>
          <h3 class="text-xl font-semibold mb-2 text-white">Framework7</h3>
          <p class="text-gray-600 dark:text-gray-300">
            Native iOS & Android UI components with smooth animations and
            gestures
          </p>
        </div>

        <div class="feature-card">
          <div class="text-4xl mb-4">⚡</div>
          <h3 class="text-xl font-semibold mb-2 text-white">Svelte</h3>
          <p class="text-gray-600 dark:text-gray-300">
            Reactive, component-based framework with minimal runtime overhead
          </p>
        </div>

        <div class="feature-card">
          <div class="text-4xl mb-4">🎨</div>
          <h3 class="text-xl font-semibold mb-2 text-white">Tailwind CSS</h3>
          <p class="text-gray-600 dark:text-gray-300">
            Utility-first CSS framework for rapid UI development
          </p>
        </div>

        <div class="feature-card">
          <div class="text-4xl mb-4">🔧</div>
          <h3 class="text-xl font-semibold mb-2 text-white">TypeScript</h3>
          <p class="text-gray-600 dark:text-gray-300">
            Type-safe development with excellent IDE support
          </p>
        </div>

        <div class="feature-card">
          <div class="text-4xl mb-4">🚄</div>
          <h3 class="text-xl font-semibold mb-2 text-white">Vite</h3>
          <p class="text-gray-600 dark:text-gray-300">
            Lightning-fast build tool with instant HMR
          </p>
        </div>

        <div class="feature-card">
          <div class="text-4xl mb-4">📦</div>
          <h3 class="text-xl font-semibold mb-2 text-white">Capacitor</h3>
          <p class="text-gray-600 dark:text-gray-300">
            Deploy to iOS, Android, and Web from a single codebase
          </p>
        </div>
      </div>
    </div>
  </div>
</Page>
