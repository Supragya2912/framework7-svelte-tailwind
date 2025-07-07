<script lang="ts">
  import { onMount } from "svelte";
  import {
    f7,
    f7ready,
    App,
    Views,
    View,
    Page,
    Navbar,
    Toolbar,
    Link,
    Block,
  } from "framework7-svelte";

  import routes from "../js/routes";
  import store from "../js/store";
  import Home from "../pages/home.svelte";
  import About from "../pages/about.svelte";

  // Framework7 Parameters
  let f7params = {
    name: "Framework7 + Svelte + Tailwind Starter", // App name
    theme: "auto", // Automatic theme detection
    // App store
    store: store,
    // App routes
    routes: routes,
    // Input settings
    // input: {
    //   scrollIntoViewOnFocus: f7.device.capacitor,
    //   scrollIntoViewCentered: f7.device.capacitor,
    // },
    // Capacitor Statusbar settings
    statusbar: {
      iosOverlaysWebView: true,
      androidOverlaysWebView: false,
    },
  };

  // Login screen demo data
  let username: string = "";
  let password: string = "";

  function alertLoginData(): void {
    f7.dialog.alert(
      "Username: " + username + "<br>Password: " + password,
      () => {
        f7.loginScreen.close();
      }
    );
  }

  onMount(() => {
    f7ready(() => {
      // Init capacitor APIs (see capacitor-app.js)
      // if (f7.device.capacitor) {
      //   capacitorApp.init(f7);
      // }
      // Call F7 APIs here
    });
  });
</script>

<App {...f7params}>
  <!-- Views/Tabs container -->
  <Views tabs class="safe-areas">
    <!-- Tabbar for switching views-tabs -->
    <Toolbar tabbar bottom>
      <Link
        tabLink="#view-home"
        tabLinkActive
        iconIos="f7:house_fill"
        iconMd="material:home"
        text="Home"
      />
      <Link
        tabLink="#view-catalog"
        iconIos="f7:square_list_fill"
        iconMd="material:view_list"
        text="Features"
      />
      <Link
        tabLink="#view-settings"
        iconIos="f7:gear"
        iconMd="material:settings"
        text="About"
      />
    </Toolbar>

    <!-- Your main view/tab, should have "view-main" class. It also has "tabActive" prop -->
    <View id="view-home" main tab tabActive>
      <Home />
    </View>

    <!-- Catalog Tab -->
    <View id="view-catalog" name="catalog" tab>
      <Page name="catalog">
        <Navbar title="Features" />
        <Block>
          <p>Add some exciting features!</p>
        </Block>
      </Page>
    </View>

    <!-- About Tab -->
    <View id="view-settings" name="settings" tab>
      <About />
    </View>
  </Views>
</App>
