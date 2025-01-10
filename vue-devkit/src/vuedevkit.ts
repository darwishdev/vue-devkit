import type { App } from "vue"
import PrimeVue from 'primevue/config';
import { AppBtn, AppIcon, AppImage, AppHeader, AppNavigation, AppSidebar } from "./app/base/index";
import { AppForm } from "./app/forms/index";
import { Datalist } from "./app/datalist/index";
export { AppBtn, AppIcon, AppImage, AppHeader, AppNavigation, AppSidebar, AppForm, Datalist };
export default {
	install(app: App) {
		app.use(PrimeVue, {
			theme: 'none',
			darkModeSelector: '.my-app-dark'
		})

		console.log("plugin installed", app)
	},
};

