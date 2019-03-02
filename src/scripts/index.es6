import { Util } from './utils/util';
import { Foo } from './components/foo';
import { Bar } from './components/bar';

const fooInstance = new Foo(Util);
const barInstance = new Bar(Util);

let newDate = fooInstance.trimValue(new Date());
console.log(newDate);

barInstance.LogValue("something");