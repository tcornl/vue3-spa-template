import { createApp } from "vue";
import { createPinia } from "pinia";
import * as Sentry from "@sentry/vue";
import { BrowserTracing } from "@sentry/tracing";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

Sentry.init({
  app,
  dsn: "https://337ea58fbcaa4a2b9206c00c3f192654@o374092.ingest.sentry.io/6311754",
  integrations: [
    new BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: ["http://localhost:3000/", /^\//],
    }),
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
  logErrors: true,
});

app.use(createPinia());
app.use(router);

app.mount("#app");
