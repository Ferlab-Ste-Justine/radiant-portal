/* tslint:disable */
/* eslint-disable */
/**
 * Radiant API
 * This is the API for Radiant data platform.
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, operationServerMap } from './base';

/**
 * Aggregation represents an aggregation result
 * @export
 * @interface Aggregation
 */
export interface Aggregation {
    /**
     * Count in the bucket
     * @type {number}
     * @memberof Aggregation
     */
    'count'?: number;
    /**
     * Bucket key
     * @type {string}
     * @memberof Aggregation
     */
    'key'?: string;
}
/**
 * 
 * @export
 * @interface AggregationBody
 */
export interface AggregationBody {
    /**
     * 
     * @type {string}
     * @memberof AggregationBody
     */
    'field'?: string;
    /**
     * 
     * @type {number}
     * @memberof AggregationBody
     */
    'size'?: number;
    /**
     * 
     * @type {Sqon}
     * @memberof AggregationBody
     */
    'sqon'?: Sqon;
}
/**
 * Count represents count result
 * @export
 * @interface Count
 */
export interface Count {
    /**
     * Number of results
     * @type {number}
     * @memberof Count
     */
    'count'?: number;
}
/**
 * 
 * @export
 * @interface CountBody
 */
export interface CountBody {
    /**
     * 
     * @type {Sqon}
     * @memberof CountBody
     */
    'sqon'?: Sqon;
}
/**
 * Body of a list request
 * @export
 * @interface ListBody
 */
export interface ListBody {
    /**
     * 
     * @type {number}
     * @memberof ListBody
     */
    'limit'?: number;
    /**
     * 
     * @type {number}
     * @memberof ListBody
     */
    'offset'?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof ListBody
     */
    'selected_fields'?: Array<string>;
    /**
     * 
     * @type {Array<SortBody>}
     * @memberof ListBody
     */
    'sort'?: Array<SortBody>;
    /**
     * 
     * @type {Sqon}
     * @memberof ListBody
     */
    'sqon'?: Sqon;
}
/**
 * Occurrence represents an occurrence
 * @export
 * @interface Occurrence
 */
export interface Occurrence {
    /**
     * 
     * @type {number}
     * @memberof Occurrence
     */
    'ad_ratio'?: number;
    /**
     * 
     * @type {number}
     * @memberof Occurrence
     */
    'af'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Occurrence
     */
    'canonical'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Occurrence
     */
    'chromosome'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Occurrence
     */
    'clinvar'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Occurrence
     */
    'filter'?: string;
    /**
     * 
     * @type {number}
     * @memberof Occurrence
     */
    'genotype_quality'?: number;
    /**
     * 
     * @type {number}
     * @memberof Occurrence
     */
    'gnomad_v3_af'?: number;
    /**
     * 
     * @type {string}
     * @memberof Occurrence
     */
    'hgvsg'?: string;
    /**
     * 
     * @type {number}
     * @memberof Occurrence
     */
    'locus_id'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Occurrence
     */
    'mane_select'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Occurrence
     */
    'omim_inheritance_code'?: string;
    /**
     * 
     * @type {number}
     * @memberof Occurrence
     */
    'pf'?: number;
    /**
     * 
     * @type {number}
     * @memberof Occurrence
     */
    'seq_id'?: number;
    /**
     * 
     * @type {string}
     * @memberof Occurrence
     */
    'symbol'?: string;
    /**
     * 
     * @type {string}
     * @memberof Occurrence
     */
    'variant_class'?: string;
    /**
     * 
     * @type {string}
     * @memberof Occurrence
     */
    'vep_impact'?: string;
    /**
     * 
     * @type {string}
     * @memberof Occurrence
     */
    'zygosity'?: string;
}
/**
 * 
 * @export
 * @interface SortBody
 */
export interface SortBody {
    /**
     * 
     * @type {string}
     * @memberof SortBody
     */
    'field'?: string;
    /**
     * 
     * @type {string}
     * @memberof SortBody
     */
    'order'?: SortBodyOrderEnum;
}

export const SortBodyOrderEnum = {
    Asc: 'asc',
    Desc: 'desc'
} as const;

export type SortBodyOrderEnum = typeof SortBodyOrderEnum[keyof typeof SortBodyOrderEnum];

/**
 * 
 * @export
 * @interface Sqon
 */
export interface Sqon {
    /**
     * Nested Sqon
     * @type {Array<Sqon>}
     * @memberof Sqon
     */
    'content'?: Array<Sqon>;
    /**
     * Field to filter on (for leaf nodes)
     * @type {string}
     * @memberof Sqon
     */
    'field'?: string;
    /**
     * Operation at this node
     * @type {string}
     * @memberof Sqon
     */
    'op'?: SqonOpEnum;
    /**
     * 
     * @type {any}
     * @memberof Sqon
     */
    'value'?: any;
}

export const SqonOpEnum = {
    In: 'in',
    And: 'and',
    Or: 'or',
    Not: 'not',
    Between: 'between',
    GreaterThan: '>',
    LessThan: '<',
    GreaterThanOrEqualTo: '>=',
    LessThanOrEqualTo: '<=',
    NotIn: 'not-in',
    All: 'all'
} as const;

export type SqonOpEnum = typeof SqonOpEnum[keyof typeof SqonOpEnum];


/**
 * OccurrencesApi - axios parameter creator
 * @export
 */
export const OccurrencesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Aggregate occurrences for a given sequence ID
         * @summary Aggregate occurrences
         * @param {string} seqId Sequence ID
         * @param {AggregationBody} aggregationBody Aggregation Body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aggregateOccurrences: async (seqId: string, aggregationBody: AggregationBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'seqId' is not null or undefined
            assertParamExists('aggregateOccurrences', 'seqId', seqId)
            // verify required parameter 'aggregationBody' is not null or undefined
            assertParamExists('aggregateOccurrences', 'aggregationBody', aggregationBody)
            const localVarPath = `/occurrences/{seq_id}/aggregate`
                .replace(`{${"seq_id"}}`, encodeURIComponent(String(seqId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerauth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(aggregationBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Counts occurrences for a given sequence ID
         * @summary Count occurrences
         * @param {string} seqId Sequence ID
         * @param {CountBody} countBody Count Body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        countOccurrences: async (seqId: string, countBody: CountBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'seqId' is not null or undefined
            assertParamExists('countOccurrences', 'seqId', seqId)
            // verify required parameter 'countBody' is not null or undefined
            assertParamExists('countOccurrences', 'countBody', countBody)
            const localVarPath = `/occurrences/{seq_id}/count`
                .replace(`{${"seq_id"}}`, encodeURIComponent(String(seqId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerauth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(countBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List occurrences for a given sequence ID
         * @summary List occurrences
         * @param {string} seqId Sequence ID
         * @param {ListBody} listBody List Body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listOccurrences: async (seqId: string, listBody: ListBody, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'seqId' is not null or undefined
            assertParamExists('listOccurrences', 'seqId', seqId)
            // verify required parameter 'listBody' is not null or undefined
            assertParamExists('listOccurrences', 'listBody', listBody)
            const localVarPath = `/occurrences/{seq_id}/list`
                .replace(`{${"seq_id"}}`, encodeURIComponent(String(seqId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerauth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(listBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * OccurrencesApi - functional programming interface
 * @export
 */
export const OccurrencesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = OccurrencesApiAxiosParamCreator(configuration)
    return {
        /**
         * Aggregate occurrences for a given sequence ID
         * @summary Aggregate occurrences
         * @param {string} seqId Sequence ID
         * @param {AggregationBody} aggregationBody Aggregation Body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async aggregateOccurrences(seqId: string, aggregationBody: AggregationBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Aggregation>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.aggregateOccurrences(seqId, aggregationBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OccurrencesApi.aggregateOccurrences']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Counts occurrences for a given sequence ID
         * @summary Count occurrences
         * @param {string} seqId Sequence ID
         * @param {CountBody} countBody Count Body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async countOccurrences(seqId: string, countBody: CountBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Count>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.countOccurrences(seqId, countBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OccurrencesApi.countOccurrences']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List occurrences for a given sequence ID
         * @summary List occurrences
         * @param {string} seqId Sequence ID
         * @param {ListBody} listBody List Body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listOccurrences(seqId: string, listBody: ListBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Occurrence>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listOccurrences(seqId, listBody, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['OccurrencesApi.listOccurrences']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * OccurrencesApi - factory interface
 * @export
 */
export const OccurrencesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = OccurrencesApiFp(configuration)
    return {
        /**
         * Aggregate occurrences for a given sequence ID
         * @summary Aggregate occurrences
         * @param {string} seqId Sequence ID
         * @param {AggregationBody} aggregationBody Aggregation Body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        aggregateOccurrences(seqId: string, aggregationBody: AggregationBody, options?: RawAxiosRequestConfig): AxiosPromise<Aggregation> {
            return localVarFp.aggregateOccurrences(seqId, aggregationBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Counts occurrences for a given sequence ID
         * @summary Count occurrences
         * @param {string} seqId Sequence ID
         * @param {CountBody} countBody Count Body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        countOccurrences(seqId: string, countBody: CountBody, options?: RawAxiosRequestConfig): AxiosPromise<Count> {
            return localVarFp.countOccurrences(seqId, countBody, options).then((request) => request(axios, basePath));
        },
        /**
         * List occurrences for a given sequence ID
         * @summary List occurrences
         * @param {string} seqId Sequence ID
         * @param {ListBody} listBody List Body
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listOccurrences(seqId: string, listBody: ListBody, options?: RawAxiosRequestConfig): AxiosPromise<Occurrence> {
            return localVarFp.listOccurrences(seqId, listBody, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * OccurrencesApi - object-oriented interface
 * @export
 * @class OccurrencesApi
 * @extends {BaseAPI}
 */
export class OccurrencesApi extends BaseAPI {
    /**
     * Aggregate occurrences for a given sequence ID
     * @summary Aggregate occurrences
     * @param {string} seqId Sequence ID
     * @param {AggregationBody} aggregationBody Aggregation Body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OccurrencesApi
     */
    public aggregateOccurrences(seqId: string, aggregationBody: AggregationBody, options?: RawAxiosRequestConfig) {
        return OccurrencesApiFp(this.configuration).aggregateOccurrences(seqId, aggregationBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Counts occurrences for a given sequence ID
     * @summary Count occurrences
     * @param {string} seqId Sequence ID
     * @param {CountBody} countBody Count Body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OccurrencesApi
     */
    public countOccurrences(seqId: string, countBody: CountBody, options?: RawAxiosRequestConfig) {
        return OccurrencesApiFp(this.configuration).countOccurrences(seqId, countBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List occurrences for a given sequence ID
     * @summary List occurrences
     * @param {string} seqId Sequence ID
     * @param {ListBody} listBody List Body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OccurrencesApi
     */
    public listOccurrences(seqId: string, listBody: ListBody, options?: RawAxiosRequestConfig) {
        return OccurrencesApiFp(this.configuration).listOccurrences(seqId, listBody, options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * StatusApi - axios parameter creator
 * @export
 */
export const StatusApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns the current status of the API
         * @summary Get API status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        statusGet: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/status`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * StatusApi - functional programming interface
 * @export
 */
export const StatusApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = StatusApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the current status of the API
         * @summary Get API status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async statusGet(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<{ [key: string]: string; }>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.statusGet(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['StatusApi.statusGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * StatusApi - factory interface
 * @export
 */
export const StatusApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = StatusApiFp(configuration)
    return {
        /**
         * Returns the current status of the API
         * @summary Get API status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        statusGet(options?: RawAxiosRequestConfig): AxiosPromise<{ [key: string]: string; }> {
            return localVarFp.statusGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * StatusApi - object-oriented interface
 * @export
 * @class StatusApi
 * @extends {BaseAPI}
 */
export class StatusApi extends BaseAPI {
    /**
     * Returns the current status of the API
     * @summary Get API status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StatusApi
     */
    public statusGet(options?: RawAxiosRequestConfig) {
        return StatusApiFp(this.configuration).statusGet(options).then((request) => request(this.axios, this.basePath));
    }
}



