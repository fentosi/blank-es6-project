import { Foo } from './foo';

export class Bar extends Foo {
    constructor(util) {
        super(util);
    }

    LogValue(value) {
        this.value = value;

        console.log(this.trimValue(value));
    }
}