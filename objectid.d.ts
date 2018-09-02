// Type definitions for bson-objectid 1.1.5
// Project: bson-objectid
// Definitions by: Marcel Ernst <https://www.marcel-ernst.de>
export default ObjectID;

declare class ObjectID {
    static createFromTime(time: number): ObjectID;
    static createFromHexString(hexString: string): ObjectID;
    static isValid(hexString: string):boolean;
    static isValid(ObjectID: ObjectID):boolean;
    static generate(): string;
    static generate(time: number): string;
    static toString():string;
    
    constructor();
    constructor(time: number);
    constructor(hexString: string);
    constructor(idString: string);
    constructor(array: number[]);
    constructor(buffer: Uint8Array);

    readonly id: string;
    readonly str: string;
    readonly bin: Uint8Array;

    toHexString(): string;
    equals(other: ObjectID): boolean;
    getTimestamp(): number;
}
