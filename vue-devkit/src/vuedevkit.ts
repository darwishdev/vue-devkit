import { ref, type App, type Plugin } from "vue"
import PrimeVue from 'primevue/config';
import { AppBtn, AppIcon, AppImage, AppHeader, AppNavigation, AppSidebar } from "./app/base/index";
import { AppForm } from "./app/forms/index";
import { Datalist } from "./app/datalist/index";
import type { VueDevkitConfig } from "./types";
import { resolveApiEndpoint } from "./pkg/TypeUtils";
import { db } from "./pkg/database/DexieDB";
import Aura from '@primevue/themes/aura';

import { plugin, defaultConfig, FormKit, DefaultConfigOptions } from '@formkit/vue'
import { genesisIcons } from '@formkit/icons'
import { ar, en } from '@formkit/i18n'
import { rootClasses } from '../formkit.theme'
import queryClient from './pkg/plugins/tanstack.config'
import { VueQueryPlugin } from '@tanstack/vue-query'
export { AppBtn, AppIcon, AppImage, AppHeader, AppNavigation, AppSidebar, AppForm, Datalist };
/**
 * Deeply merges two objects.
 * @param target - The target object (default values).
 * @param source - The source object (overrides).
 * @returns The merged object.
 */
function deepMerge<T extends Record<string, any>>(target: T, source?: Partial<T>): T {
	if (!source) return target
	const result = { ...target }; // Start with a shallow copy of the target

	for (const key in source) {
		if (source.hasOwnProperty(key)) {
			const targetValue = target[key];
			const sourceValue = source[key];

			if (
				typeof targetValue === 'object' &&
				targetValue !== null &&
				typeof sourceValue === 'object' &&
				sourceValue !== null &&
				!Array.isArray(targetValue) &&
				!Array.isArray(sourceValue)
			) {
				// Recursively merge nested objects
				result[key] = deepMerge(targetValue, sourceValue);
			} else {
				// Override with source value
				result[key] = sourceValue as T[Extract<keyof T, string>];
			}
		}
	}

	return result;
}
const initIcons = async (app: App, { apiClient, iconList, primevueConfig, formkitConfig }: VueDevkitConfig<any>) => {
	const isIconsLoaded = ref(false)
	app.provide('isIconsLoaded', isIconsLoaded)
	const defaulePrimvueConfig = {
		// Default theme configuration
		theme: {
			preset: Aura,
			options: {
				prefix: 'p',
				darkModeSelector: '.dark-mode',
				cssLayer: {
					name: 'primevue',
					order: 'tailwind-base, primevue, tailwind-utilities'
				}
			}
		}
	}
	const defaultFormkitConfg: DefaultConfigOptions = {
		locales: { en, ar },
		locale: 'en',
		icons: {
			...genesisIcons
		},
		config: {
			rootClasses
		}
	}
	app.use(PrimeVue, deepMerge(defaulePrimvueConfig, primevueConfig))
	app.use(plugin, defaultConfig(deepMerge(defaultFormkitConfg, formkitConfig)))
	if (!apiClient || !iconList) return
	const iconsCount = await db.icon.count()
	if (iconsCount > 0) {
		isIconsLoaded.value = true
		return

	}
	resolveApiEndpoint(iconList, apiClient, {}).then(({ icons }) => {
		db.icon.bulkAdd(icons).then(() => {
			setTimeout(() => isIconsLoaded.value = true, 3000)
		})
	})

}
const vueDevkit: Plugin<VueDevkitConfig<any>> = {
	install<T extends Record<string, Function>>(app: App, config: VueDevkitConfig<T>) {
		initIcons(app, config)
		console.log("config here", config.apiClient)
		// app.provide('isIconsLoaded', true)
		app.use(VueQueryPlugin, {
			queryClient
		})

		console.log("plugin installed", app)
	},
}
export default vueDevkit

