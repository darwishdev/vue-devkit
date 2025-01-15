import { default as Dexie, Table } from 'dexie';
import { Icon } from './types';
export type SUPPORTE_LOCALES_TYPE = 'en' | 'ar';
export declare class DevkitDB extends Dexie {
    private static instance;
    icon: Table<Icon>;
    translation: Table<{
        localeKey: SUPPORTE_LOCALES_TYPE;
        translations: Record<string, any>;
    }>;
    constructor();
    static getInstance(): DevkitDB;
}
export declare const db: DevkitDB;
