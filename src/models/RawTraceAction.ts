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

import type { RawTraceCallAction } from './RawTraceCallAction';
import {
    instanceOfRawTraceCallAction,
    RawTraceCallActionFromJSON,
    RawTraceCallActionFromJSONTyped,
    RawTraceCallActionToJSON,
} from './RawTraceCallAction';
import type { RawTraceCreateAction } from './RawTraceCreateAction';
import {
    instanceOfRawTraceCreateAction,
    RawTraceCreateActionFromJSON,
    RawTraceCreateActionFromJSONTyped,
    RawTraceCreateActionToJSON,
} from './RawTraceCreateAction';
import type { RawTraceSelfDestructAction } from './RawTraceSelfDestructAction';
import {
    instanceOfRawTraceSelfDestructAction,
    RawTraceSelfDestructActionFromJSON,
    RawTraceSelfDestructActionFromJSONTyped,
    RawTraceSelfDestructActionToJSON,
} from './RawTraceSelfDestructAction';

/**
 * @type RawTraceAction
 * 
 * @export
 */
export type RawTraceAction = RawTraceCallAction | RawTraceCreateAction | RawTraceSelfDestructAction;

export function RawTraceActionFromJSON(json: any): RawTraceAction {
    return RawTraceActionFromJSONTyped(json, false);
}

export function RawTraceActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): RawTraceAction {
    if (json == null) {
        return json;
    }
    return RawTraceCallActionFromJSONTyped(json, true) || RawTraceCreateActionFromJSONTyped(json, true) || RawTraceSelfDestructActionFromJSONTyped(json, true);
}

export function RawTraceActionToJSON(value?: RawTraceAction | null): any {
    if (value == null) {
        return value;
    }

    if (instanceOfRawTraceCallAction(value)) {
        return RawTraceCallActionToJSON(value as RawTraceCallAction);
    }
    if (instanceOfRawTraceCreateAction(value)) {
        return RawTraceCreateActionToJSON(value as RawTraceCreateAction);
    }
    if (instanceOfRawTraceSelfDestructAction(value)) {
        return RawTraceSelfDestructActionToJSON(value as RawTraceSelfDestructAction);
    }

    return {};
}
