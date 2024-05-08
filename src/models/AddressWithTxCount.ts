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
import type { AddressTag } from './AddressTag';
import {
    AddressTagFromJSON,
    AddressTagFromJSONTyped,
    AddressTagToJSON,
} from './AddressTag';
import type { TokenInfo } from './TokenInfo';
import {
    TokenInfoFromJSON,
    TokenInfoFromJSONTyped,
    TokenInfoToJSON,
} from './TokenInfo';
import type { WatchlistName } from './WatchlistName';
import {
    WatchlistNameFromJSON,
    WatchlistNameFromJSONTyped,
    WatchlistNameToJSON,
} from './WatchlistName';

/**
 * 
 * @export
 * @interface AddressWithTxCount
 */
export interface AddressWithTxCount {
    /**
     * 
     * @type {string}
     * @memberof AddressWithTxCount
     */
    creatorAddressHash?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressWithTxCount
     */
    creationTxHash?: string;
    /**
     * 
     * @type {TokenInfo}
     * @memberof AddressWithTxCount
     */
    token?: TokenInfo;
    /**
     * 
     * @type {string}
     * @memberof AddressWithTxCount
     */
    coinBalance?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressWithTxCount
     */
    exchangeRate?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressWithTxCount
     */
    implementationAddress?: string;
    /**
     * 
     * @type {number}
     * @memberof AddressWithTxCount
     */
    blockNumberBalanceUpdatedAt?: number;
    /**
     * 
     * @type {string}
     * @memberof AddressWithTxCount
     */
    hash: string;
    /**
     * 
     * @type {string}
     * @memberof AddressWithTxCount
     */
    implementationName?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressWithTxCount
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AddressWithTxCount
     */
    isContract?: boolean;
    /**
     * 
     * @type {Array<AddressTag>}
     * @memberof AddressWithTxCount
     */
    privateTags?: Array<AddressTag>;
    /**
     * 
     * @type {Array<WatchlistName>}
     * @memberof AddressWithTxCount
     */
    watchlistNames?: Array<WatchlistName>;
    /**
     * 
     * @type {Array<AddressTag>}
     * @memberof AddressWithTxCount
     */
    publicTags?: Array<AddressTag>;
    /**
     * 
     * @type {boolean}
     * @memberof AddressWithTxCount
     */
    isVerified?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AddressWithTxCount
     */
    hasBeaconChainWithdrawals?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AddressWithTxCount
     */
    hasCustomMethodsRead?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AddressWithTxCount
     */
    hasCustomMethodsWrite?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AddressWithTxCount
     */
    hasDecompiledCode?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AddressWithTxCount
     */
    hasLogs?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AddressWithTxCount
     */
    hasMethodsRead?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AddressWithTxCount
     */
    hasMethodsWrite?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AddressWithTxCount
     */
    hasMethodsReadProxy?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AddressWithTxCount
     */
    hasMethodsWriteProxy?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AddressWithTxCount
     */
    hasTokenTransfers?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AddressWithTxCount
     */
    hasTokens?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AddressWithTxCount
     */
    hasValidatedBlocks?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AddressWithTxCount
     */
    txCount: string;
}

/**
 * Check if a given object implements the AddressWithTxCount interface.
 */
export function instanceOfAddressWithTxCount(value: object): boolean {
    if (!('hash' in value)) return false;
    if (!('txCount' in value)) return false;
    return true;
}

export function AddressWithTxCountFromJSON(json: any): AddressWithTxCount {
    return AddressWithTxCountFromJSONTyped(json, false);
}

export function AddressWithTxCountFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressWithTxCount {
    if (json == null) {
        return json;
    }
    return {
        
        'creatorAddressHash': json['creator_address_hash'] == null ? undefined : json['creator_address_hash'],
        'creationTxHash': json['creation_tx_hash'] == null ? undefined : json['creation_tx_hash'],
        'token': json['token'] == null ? undefined : TokenInfoFromJSON(json['token']),
        'coinBalance': json['coin_balance'] == null ? undefined : json['coin_balance'],
        'exchangeRate': json['exchange_rate'] == null ? undefined : json['exchange_rate'],
        'implementationAddress': json['implementation_address'] == null ? undefined : json['implementation_address'],
        'blockNumberBalanceUpdatedAt': json['block_number_balance_updated_at'] == null ? undefined : json['block_number_balance_updated_at'],
        'hash': json['hash'],
        'implementationName': json['implementation_name'] == null ? undefined : json['implementation_name'],
        'name': json['name'] == null ? undefined : json['name'],
        'isContract': json['is_contract'] == null ? undefined : json['is_contract'],
        'privateTags': json['private_tags'] == null ? undefined : ((json['private_tags'] as Array<any>).map(AddressTagFromJSON)),
        'watchlistNames': json['watchlist_names'] == null ? undefined : ((json['watchlist_names'] as Array<any>).map(WatchlistNameFromJSON)),
        'publicTags': json['public_tags'] == null ? undefined : ((json['public_tags'] as Array<any>).map(AddressTagFromJSON)),
        'isVerified': json['is_verified'] == null ? undefined : json['is_verified'],
        'hasBeaconChainWithdrawals': json['has_beacon_chain_withdrawals'] == null ? undefined : json['has_beacon_chain_withdrawals'],
        'hasCustomMethodsRead': json['has_custom_methods_read'] == null ? undefined : json['has_custom_methods_read'],
        'hasCustomMethodsWrite': json['has_custom_methods_write'] == null ? undefined : json['has_custom_methods_write'],
        'hasDecompiledCode': json['has_decompiled_code'] == null ? undefined : json['has_decompiled_code'],
        'hasLogs': json['has_logs'] == null ? undefined : json['has_logs'],
        'hasMethodsRead': json['has_methods_read'] == null ? undefined : json['has_methods_read'],
        'hasMethodsWrite': json['has_methods_write'] == null ? undefined : json['has_methods_write'],
        'hasMethodsReadProxy': json['has_methods_read_proxy'] == null ? undefined : json['has_methods_read_proxy'],
        'hasMethodsWriteProxy': json['has_methods_write_proxy'] == null ? undefined : json['has_methods_write_proxy'],
        'hasTokenTransfers': json['has_token_transfers'] == null ? undefined : json['has_token_transfers'],
        'hasTokens': json['has_tokens'] == null ? undefined : json['has_tokens'],
        'hasValidatedBlocks': json['has_validated_blocks'] == null ? undefined : json['has_validated_blocks'],
        'txCount': json['tx_count'],
    };
}

export function AddressWithTxCountToJSON(value?: AddressWithTxCount | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'creator_address_hash': value['creatorAddressHash'],
        'creation_tx_hash': value['creationTxHash'],
        'token': TokenInfoToJSON(value['token']),
        'coin_balance': value['coinBalance'],
        'exchange_rate': value['exchangeRate'],
        'implementation_address': value['implementationAddress'],
        'block_number_balance_updated_at': value['blockNumberBalanceUpdatedAt'],
        'hash': value['hash'],
        'implementation_name': value['implementationName'],
        'name': value['name'],
        'is_contract': value['isContract'],
        'private_tags': value['privateTags'] == null ? undefined : ((value['privateTags'] as Array<any>).map(AddressTagToJSON)),
        'watchlist_names': value['watchlistNames'] == null ? undefined : ((value['watchlistNames'] as Array<any>).map(WatchlistNameToJSON)),
        'public_tags': value['publicTags'] == null ? undefined : ((value['publicTags'] as Array<any>).map(AddressTagToJSON)),
        'is_verified': value['isVerified'],
        'has_beacon_chain_withdrawals': value['hasBeaconChainWithdrawals'],
        'has_custom_methods_read': value['hasCustomMethodsRead'],
        'has_custom_methods_write': value['hasCustomMethodsWrite'],
        'has_decompiled_code': value['hasDecompiledCode'],
        'has_logs': value['hasLogs'],
        'has_methods_read': value['hasMethodsRead'],
        'has_methods_write': value['hasMethodsWrite'],
        'has_methods_read_proxy': value['hasMethodsReadProxy'],
        'has_methods_write_proxy': value['hasMethodsWriteProxy'],
        'has_token_transfers': value['hasTokenTransfers'],
        'has_tokens': value['hasTokens'],
        'has_validated_blocks': value['hasValidatedBlocks'],
        'tx_count': value['txCount'],
    };
}
