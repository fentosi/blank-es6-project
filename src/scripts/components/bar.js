import { Foo } from './foo';

export default class Bar extends Foo {
    constructor(util) {
        super(util);
    }

    logValue(value) {
        this.value = value;

        console.log(this.trimValue(value));
    }
}