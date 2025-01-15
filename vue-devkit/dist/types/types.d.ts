import { PrimeVueConfiguration } from 'primevue';
import { Icon } from './pkg/database/types';
import { DefaultConfigOptions } from '@formkit/vue';
export type EndpointFunction<TReq extends Record<string, unknown> = {}, TResp extends Record<string, unknown> = {}> = ((req: TReq) => Promise<TResp>);
export type ApiEndpoint<TApi extends Record<string, Function>, TReq extends Record<string, unknown> = {}, TResp extends Record<string, unknown> = {}> = keyof TApi | EndpointFunction<TReq, TResp> | Promise<TResp>;
export type VueDevkitConfig<TApi extends Record<string, Function>> = {
    apiClient?: TApi;
    formkitConfig?: DefaultConfigOptions;
    primevueConfig?: PrimeVueConfiguration;
    iconList?: ApiEndpoint<TApi, any, {
        icons: Icon[];
    }>;
};
