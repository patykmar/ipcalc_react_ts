export namespace IPv4 {
    export class Address {

        readonly OCTET_LEN = 8;


        private _binary: string;
        private _addressArray: string[];

        constructor() {
            this._binary = '';
            this._addressArray = [];
        }

        get binary(): string {
            return this._binary;
        }

        set binary(value: string) {
            this._binary = value;
        }

        get addressArray() {
            return this._addressArray;
        }

        set addressArray(value) {
            this._addressArray = value;
        }
    }
}