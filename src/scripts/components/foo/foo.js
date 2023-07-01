module.exports = class Foo {
    constructor(util) {
        this.util = util;
    }

    trimValue(val) {
        this.value = val;

        return this.util.trim(val);
    }
}
