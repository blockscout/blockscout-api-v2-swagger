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
import type { ReadMethodQueryBodyArgsInner } from './ReadMethodQueryBodyArgsInner';
import {
    ReadMethodQueryBodyArgsInnerFromJSON,
    ReadMethodQueryBodyArgsInnerFromJSONTyped,
    ReadMethodQueryBodyArgsInnerToJSON,
} from './ReadMethodQueryBodyArgsInner';

/**
 * 
 * @export
 * @interface ReadMethodQueryBody
 */
export interface ReadMethodQueryBody {
    /**
     * 
     * @type {Array<ReadMethodQueryBodyArgsInner>}
     * @memberof ReadMethodQueryBody
     */
    args: Array<ReadMethodQueryBodyArgsInner>;
    /**
     * 
     * @type {string}
     * @memberof ReadMethodQueryBody
     */
    methodId: string;
    /**
     * 
     * @type {string}
     * @memberof ReadMethodQueryBody
     */
    from?: string;
    /**
     * 
     * @type {string}
     * @memberof ReadMethodQueryBody
     */
    contractType?: string;
}

/**
 * Check if a given object implements the ReadMethodQueryBody interface.
 */
export function instanceOfReadMethodQueryBody(value: object): boolean {
    if (!('args' in value)) return false;
    if (!('methodId' in value)) return false;
    return true;
}

export function ReadMethodQueryBodyFromJSON(json: any): ReadMethodQueryBody {
    return ReadMethodQueryBodyFromJSONTyped(json, false);
}

export function ReadMethodQueryBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReadMethodQueryBody {
    if (json == null) {
        return json;
    }
    return {
        
        'args': ((json['args'] as Array<any>).map(ReadMethodQueryBodyArgsInnerFromJSON)),
        'methodId': json['method_id'],
        'from': json['from'] == null ? undefined : json['from'],
        'contractType': json['contract_type'] == null ? undefined : json['contract_type'],
    };
}

export function ReadMethodQueryBodyToJSON(value?: ReadMethodQueryBody | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'args': ((value['args'] as Array<any>).map(ReadMethodQueryBodyArgsInnerToJSON)),
        'method_id': value['methodId'],
        'from': value['from'],
        'contract_type': value['contractType'],
    };
}
