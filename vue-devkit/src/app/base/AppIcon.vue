<script setup lang="ts">
import Skeleton from 'primevue/skeleton';
import { computed, h, inject, Ref, ref, type VNode } from 'vue';
import { db } from '../../pkg/database/DexieDB';
import { Icon } from '../../pkg/database/types';
const isIconsLoaded = inject<Ref<boolean>>('isIconsLoaded') || ref(false)
export type AppIconProps = {
	icon: string
	size?: 'small' | 'medium' | 'large'
	iconType?: 'primevue' | 'svg'
	color?: string
}
export type AppIconSlots = {
	top(): VNode;
}
const props = withDefaults(defineProps<AppIconProps>(), {
	icon: "default",
	size: "small",
	iconType: "svg",
	color: "var(--p-primary-contrast-color)"
});
const slots = defineSlots<AppIconSlots>();
const loadIcon = async (): Promise<string> => {
	return new Promise((resolve) => {
		db.icon.count().then(count => {
			console.log("loading icons", count)
			if (count == 0) resolve('default')
			db.icon.get(props.icon).then((icon?: Icon) => {
				if (!icon) {
					resolve(`default`)
					return
				}
				resolve(icon.iconContent)
			}).catch((_) => {
				resolve('default')
			})
		})
	})
}
const sizes = {
	small: '1.5rem',
	medium: '2.25rem',
	large: '3rem',
}
const modifySvgAttributes = computed(() => {
	if (svgIconContent.value == 'default' || svgIconContent.value == "") return svgIconContent.value
	try {
		const parser = new DOMParser();
		const svgDoc = parser.parseFromString(svgIconContent.value, 'image/svg+xml');
		const svgElement = svgDoc.querySelector('svg');
		if (svgElement) {
			svgElement.setAttribute('width', sizes[props.size]);
			svgElement.setAttribute('height', sizes[props.size]);
			if (props.color) {
				svgElement.setAttribute('fill', props.color);
			}
			svgElement.setAttribute('stroke', props.color || 'currentColor');
			return svgElement.outerHTML
		}
		return svgIconContent.value
	} catch (error) {
		return svgIconContent.value
	}
})
const renderPrimevueIcon = h('span', {
	key: props.icon,
	class: `pi pi-${props.icon}`,
	style: {
		fontSize: sizes[props.size],
		key: props.icon,
		color: props.color || 'currentColor'
	}
})
const svgIconContent = ref('')
const getIconFromDb = () => {
	console.log("getting from db")
	db.icon.get(props.icon).then((icon?: Icon) => {
		if (!icon) {
			svgIconContent.value = 'default'
			return
		}
		svgIconContent.value = icon.iconContent

		console.log("icon is", icon)
	}).catch((_) => {
		svgIconContent.value = 'default'
		return
	})
}
const renderSvg = () => {
	getIconFromDb()
	return h('span', {
		class: `app-icon ${props.size}`,
		attrs: props.color,
		key: props.icon,
		innerHTML: modifySvgAttributes.value,
	})
}
const renderSvgIcon = () => {
	return isIconsLoaded.value ? renderSvg() : h('h2', 'loading')
}

const renderIcon = () => {
	return [
		h('h2', svgIconContent.value),
		h('h2', 'hello'),
		props.iconType == 'primevue' ? renderPrimevueIcon : renderSvgIcon()
	]
}
</script>
<template>
	<component :is="renderIcon" />
</template>
