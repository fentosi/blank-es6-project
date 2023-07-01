const Foo = require("./foo");
const mockUtil = require("../../utils/util");
jest.mock('../../utils/util');

const fooInstance = new Foo(mockUtil);

describe('Foo class', () => {

    beforeEach(() => {
        mockUtil.mockClear();
        mockUtil.trim = jest.fn(value => value);
    })

    test('given text then calling trimValue returns valid value', () => {
        const text = "some text";

        let value = fooInstance.trimValue(text);

        expect(value).toEqual(text);
    });

    test('given text then calling trimValue calls util.trim', () => {
        const text = "some text";

        fooInstance.trimValue(text);

        expect(mockUtil.trim).toHaveBeenCalled();
    });

    test('given text then calling trimValue calls util.trim with correct value', () => {
        const text = "some text";

        fooInstance.trimValue(text);

        expect(mockUtil.trim).toHaveBeenCalledWith(text);
    });
});
