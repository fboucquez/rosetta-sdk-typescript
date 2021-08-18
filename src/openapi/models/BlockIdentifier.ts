/* tslint:disable */
/**
 * The block_identifier uniquely identifies a block in a particular network.
 * @export
 * @interface BlockIdentifier
 */
export interface BlockIdentifier {
    /**
     * This is also known as the block height.
     * @type {number}
     * @memberof BlockIdentifier
     */
    index: number;
    /**
     *
     * @type {string}
     * @memberof BlockIdentifier
     */
    hash: string;
}

export function BlockIdentifierFromJSON(json: any): BlockIdentifier {
    return BlockIdentifierFromJSONTyped(json, false);
}

export function BlockIdentifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockIdentifier {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        index: json['index'],
        hash: json['hash'],
    };
}

export function BlockIdentifierToJSON(value?: BlockIdentifier | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        index: value.index,
        hash: value.hash,
    };
}
