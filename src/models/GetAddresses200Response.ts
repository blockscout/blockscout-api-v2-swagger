/* tslint:disable */
/* eslint-disable */
/**
 * BlockScout API
 * API for BlockScout web app
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: you@your-company.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { AddressWithTxCount } from './AddressWithTxCount';
import {
    AddressWithTxCountFromJSON,
    AddressWithTxCountFromJSONTyped,
    AddressWithTxCountToJSON,
} from './AddressWithTxCount';

/**
 * 
 * @export
 * @interface GetAddresses200Response
 */
export interface GetAddresses200Response {
    /**
     * 
     * @type {string}
     * @memberof GetAddresses200Response
     */
    exchangeRate: string;
    /**
     * 
     * @type {string}
     * @memberof GetAddresses200Response
     */
    totalSupply: string;
    /**
     * 
     * @type {Array<AddressWithTxCount>}
     * @memberof GetAddresses200Response
     */
    items: Array<AddressWithTxCount>;
    /**
     * 
     * @type {object}
     * @memberof GetAddresses200Response
     */
    nextPageParams: object;
}

/**
 * Check if a given object implements the GetAddresses200Response interface.
 */
export function instanceOfGetAddresses200Response(value: object): boolean {
    if (!('exchangeRate' in value)) return false;
    if (!('totalSupply' in value)) return false;
    if (!('items' in value)) return false;
    if (!('nextPageParams' in value)) return false;
    return true;
}

export function GetAddresses200ResponseFromJSON(json: any): GetAddresses200Response {
    return GetAddresses200ResponseFromJSONTyped(json, false);
}

export function GetAddresses200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetAddresses200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'exchangeRate': json['exchange_rate'],
        'totalSupply': json['total_supply'],
        'items': ((json['items'] as Array<any>).map(AddressWithTxCountFromJSON)),
        'nextPageParams': json['next_page_params'],
    };
}

export function GetAddresses200ResponseToJSON(value?: GetAddresses200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'exchange_rate': value['exchangeRate'],
        'total_supply': value['totalSupply'],
        'items': ((value['items'] as Array<any>).map(AddressWithTxCountToJSON)),
        'next_page_params': value['nextPageParams'],
    };
}
