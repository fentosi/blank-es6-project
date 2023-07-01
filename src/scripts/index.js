const Util = require('./utils/util');
const Foo = require("./components/foo/foo");
const Bar = require("./components/bar/bar");

const fooInstance = new Foo(Util);
const barInstance = new Bar(Util);

let newDate = fooInstance.trimValue(new Date());
console.log(newDate);

barInstance.logValue("something");
