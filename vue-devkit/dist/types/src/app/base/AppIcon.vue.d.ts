import { VNode } from 'vue';
export type AppIconProps = {
    icon: string;
    size?: 'small' | 'medium' | 'large';
    iconType?: 'primevue' | 'svg';
    color?: string;
};
export type AppIconSlots = {
    top(): VNode;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<AppIconSlots> & AppIconSlots;
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<AppIconProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<AppIconProps> & Readonly<{}>, {
    icon: string;
    size: "small" | "medium" | "large";
    iconType: "primevue" | "svg";
    color: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
