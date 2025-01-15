

import { genesisIcons } from '@formkit/icons'
import { ar, en } from '@formkit/i18n'

import { DefaultConfigOptions } from '@formkit/vue'
export const defaultFormkitConfg: DefaultConfigOptions = {
	locales: { en, ar },
	locale: 'en',
	icons: {
		...genesisIcons
	},

}
