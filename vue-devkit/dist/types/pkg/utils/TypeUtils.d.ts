import { ApiEndpoint, EndpointFunction } from '../../types';
/**
 * Asserts if a value is a key of TApi.
 * @param value - The value to check.
 * @param apiClient - The API client object of type TApi.
 * @returns True if the value is a key of TApi, otherwise false.
 */
export declare function isKeyOfApi<TApi extends Record<string, Function>>(value: ApiEndpoint<TApi, any, any>): value is keyof TApi;
/**
 * Asserts if a value is an Endpoint.
 * @param value - The value to check.
 * @returns True if the value is an Endpoint (function), otherwise false.
 */
export declare function isEndpointFunction<TReq extends Record<string, unknown> = {}, TResp extends Record<string, unknown> = {}>(value: ApiEndpoint<any, TReq, TResp>): value is EndpointFunction<TReq, TResp>;
/**
 * Asserts if a value is a Promise.
 * @param value - The value to check.
 * @returns True if the value is a Promise, otherwise false.
 */
export declare function isPromise<TResp extends Record<string, unknown>>(value: unknown): value is Promise<TResp>;
/**
 * Resolves an ApiEndpoint to a Promise.
 * @param value - The value to resolve (keyof TApi, EndpointFunction, or Promise).
 * @param apiClient - The API client object of type TApi.
 * @param request - Optional request object to pass to the EndpointFunction.
 * @returns A Promise resolving to the result.
 * @throws Error if the value is not a valid ApiEndpoint.
 */
export declare function resolveApiEndpoint<TApi extends Record<string, Function>, TReq extends Record<string, unknown> = {}, TResp extends Record<string, unknown> = {}>(value: ApiEndpoint<TApi, TReq, TResp>, apiClient: TApi, request?: TReq): Promise<TResp>;
