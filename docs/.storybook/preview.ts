import { setup } from '@storybook/vue3';
import type { Preview } from '@storybook/vue3';
import { InputText } from 'primevue';
import PanelMenu from 'primevue/panelmenu';
import PrimeVue from 'primevue/config';
import VueDevkit from 'vue-devkit';
// Register PrimeVue globally
setup((app) => {
  app.use(VueDevkit)
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
