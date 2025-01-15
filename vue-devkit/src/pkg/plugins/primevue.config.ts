
import Aura from '@primevue/themes/aura';
import { type PrimeVueConfiguration } from 'primevue';
export const defaultPrimeVueConfig: PrimeVueConfiguration = {
	theme: {
		preset: Aura,
		options: {
			prefix: 'p',
			darkModeSelector: '.dark',
			cssLayer: {
				name: 'primevue',
				order: 'tailwind-base, primevue, tailwind-utilities'
			}
		}
	}
}
