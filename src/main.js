import { createApp } from "vue";
import { createPinia } from "pinia";
import CKEditorPlugin from "@ckeditor/ckeditor5-vue";
import PrimeVue from "primevue/config";
import ConfirmationService from "primevue/confirmationservice";
import ToastService from 'primevue/toastservice';
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(CKEditorPlugin);
app.use(PrimeVue);
app.use(ConfirmationService);
app.use(ToastService);
app.mount("#app");
