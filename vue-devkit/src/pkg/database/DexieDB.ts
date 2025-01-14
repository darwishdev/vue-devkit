
// db.ts
import Dexie, { type Table } from 'dexie';
import { Icon } from './types';
export type SUPPORTE_LOCALES_TYPE = 'en' | 'ar'
export class DevkitDB extends Dexie {
	private static instance: DevkitDB | null = null;
	icon!: Table<Icon>
	translation!: Table<{ localeKey: SUPPORTE_LOCALES_TYPE, translations: Record<string, any> }>
	constructor() {
		super('devkit_db');
		this.version(1).stores({
			icon: '&iconName , iconContent',
			translation: '&localeKey , messages',
		});
	}
	public static getInstance(): DevkitDB {
		if (!DevkitDB.instance) {
			DevkitDB.instance = new DevkitDB();
		}
		return DevkitDB.instance;
	}
}
export const db = DevkitDB.getInstance();
