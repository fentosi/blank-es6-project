const Foo = require("../foo/foo");

module.exports =  class Bar extends Foo {
    constructor(util) {
        super(util);
    }

    logValue(value) {
        this.value = value;

        console.log(this.trimValue(value));
    }
}
