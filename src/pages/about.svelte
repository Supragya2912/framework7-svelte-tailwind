<script>
  import {
    Page,
    Navbar,
    Block,
    BlockTitle,
    Card,
    CardContent,
    List,
    ListItem,
  } from "framework7-svelte";
</script>

<Page name="about">
  <Navbar title="About" />

  <!-- Project Info -->
  <div class="p-4">


    <Card class="mb-4">
      <CardContent>
        <BlockTitle class="!mt-0">🎯 Project Purpose</BlockTitle>
        <Block>
          <p class="text-black-relaxed">
            This starter template was created to provide developers with a
            modern, production-ready foundation for building cross-platform
            mobile applications. It combines the best of Framework7's native UI
            components, Svelte's reactive programming model, and Tailwind CSS's
            utility-first styling approach.
          </p>
        </Block>
      </CardContent>
    </Card>

    <Card class="mb-4">
      <CardContent>
                 <BlockTitle class="!mt-0">🛠️ Tech Stack</BlockTitle>
        <List>
          <ListItem title="Framework7 8.3.4" after="Mobile UI Framework">
            <i slot="media" class="icon f7-icons color-blue"
              >device_phone_portrait</i
            >
          </ListItem>
          <ListItem title="Svelte 4.2.0" after="Reactive Framework">
            <i slot="media" class="icon f7-icons color-green">bolt_fill</i>
          </ListItem>
          <ListItem title="Tailwind CSS 4.x" after="Utility-First CSS">
            <i slot="media" class="icon f7-icons color-purple"
              >paintbrush_fill</i
            >
          </ListItem>
          <ListItem title="TypeScript" after="Type Safety">
            <i slot="media" class="icon f7-icons color-red">shield_fill</i>
          </ListItem>
          <ListItem title="Vite 5.x" after="Build Tool">
            <i slot="media" class="icon f7-icons color-orange">flame_fill</i>
          </ListItem>
          <ListItem title="Capacitor 7.x" after="Native Bridge">
            <i slot="media" class="icon f7-icons color-teal">cube_fill</i>
          </ListItem>
        </List>
      </CardContent>
    </Card>

    <Card class="mb-4">
      <CardContent>
                 <BlockTitle class="!mt-0">📋 Features</BlockTitle>
        <List>
          <ListItem title="Cross-Platform Development">
            <i slot="media" class="icon f7-icons color-blue">device_desktop</i>
          </ListItem>
          <ListItem title="TypeScript Support">
            <i slot="media" class="icon f7-icons color-green"
              >checkmark_seal_fill</i
            >
          </ListItem>
          <ListItem title="Responsive Design">
            <i slot="media" class="icon f7-icons color-teal"
              >rectangle_stack_fill</i
            >
          </ListItem>
        </List>
      </CardContent>
    </Card>

  </div>

  <!-- Footer Section -->
  <div class="p-6 bg-gray-50 dark:bg-gray-900 text-center">
    <h3 class="text-lg font-semibold mb-3 text-gray-800 dark:text-white">
      🌟 Open Source & Community Driven
    </h3>
    <p class="text-gray-600 dark:text-gray-300 mb-4">
      This starter template is open source and available on GitHub.
      Contributions, issues, and feature requests are welcome!
    </p>
    <div class="flex flex-wrap justify-center gap-4 text-sm">
      <span
        class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
      >
        📄 MIT License
      </span>
      <span
        class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full"
      >
        🔧 TypeScript Ready
      </span>
      <span
        class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full"
      >
        📱 Mobile First
      </span>
      <span
        class="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full"
      >
        ⚡ Production Ready
      </span>
    </div>
    <div class="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Created by <span
          class="font-semibold text-gray-700 dark:text-gray-300"
          >Supragya Anand</span
        >
      </p>
      <p class="text-xs text-gray-400 dark:text-gray-500 mt-1">
        Framework7 + Svelte + Tailwind CSS Starter Template
      </p>
    </div>
  </div>
</Page>
