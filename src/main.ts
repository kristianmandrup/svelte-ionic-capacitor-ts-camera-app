import { setupIonicSvelte } from "$ionic/svelte";

import App from "./App.svelte";
setupIonicSvelte();
const app = new App({
  target: document.getElementById("app"),
});

export default app;
