import { createApp } from "vue";
import { createPinia } from "pinia";
import * as Sentry from "@sentry/vue";
import { BrowserTracing } from "@sentry/tracing";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

// Sentry basic Vue config
// https://docs.sentry.io/platforms/javascript/guides/vue/#vue-3
Sentry.init({
  app,
  dsn: import.meta.env.VITE_SENTRY_DSN,
  integrations: [
    new BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: [
        import.meta.env.VITE_SERVE_DOMAIN,
        import.meta.env.VITE_BUILD_DOMAIN,
        import.meta.env.VITE_GH_PAGES_DOMAIN,
        /^\//,
      ],
    }),
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

app.use(createPinia());
app.use(router);

app.mount("#app");
