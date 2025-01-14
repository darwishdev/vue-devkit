import { Plugin } from 'vue';
import { AppBtn, AppIcon, AppImage, AppHeader, AppNavigation, AppSidebar } from './app/base/index';
import { AppForm } from './app/forms/index';
import { Datalist } from './app/datalist/index';
import { VueDevkitConfig } from './types';
export { AppBtn, AppIcon, AppImage, AppHeader, AppNavigation, AppSidebar, AppForm, Datalist };
declare const vueDevkit: Plugin<VueDevkitConfig<any>>;
export default vueDevkit;
