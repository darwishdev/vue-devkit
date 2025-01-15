import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import dts from 'vite-plugin-dts'; // Plugin to generate .d.ts files
export default defineConfig({
	plugins: [
		vue(),
		dts({ // Generate .d.ts files
			insertTypesEntry: true, // Insert the types entry in the package.json
			outDir: 'dist/types', // Output directory for .d.ts files
		}),
	],
	css: {
		postcss: './postcss.config.js', // Ensure PostCSS is used
	},
	build: {
		cssCodeSplit: true,
		lib: {
			entry: './src/vuedevkit.ts', // Entry point for your library
			name: 'VueDevkit', // Global variable name for your library
			fileName: (format) => `vue-devkit.${format}.js`, // Output file name
			formats: ['es'], // Only output ESM format
		},
		rollupOptions: {
			external: ['vue', 'vue-router', 'primevue', '@formkit/vue'], // Externalize Vue
			output: {
				globals: {
					vue: 'Vue',
					'vue-router': 'VueRouter',
				},
			},
		},
	},
});
