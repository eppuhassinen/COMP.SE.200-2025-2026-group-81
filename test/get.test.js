import {expect} from 'chai';
import get from '../src/get.js';

describe("get function unit tests", function () {
    describe("type checks", function () {
        const object = { 'a': [{ 'b': { 'c': 3 } }] };
        it("should return undefined for non-existing path", function () {
            const result = get(object, 'a[0].b.x');
            expect(result).to.be.undefined;
        });
    });
    describe("value checks", function () {
        const object = { 'a': [{ 'b': { 'c': 3 } }] };

        it("getting existing nested property", function () {
            const result = get(object, 'a[0].b.c');
            expect(result).to.equal(3);
        });

        it("getting existing nested property with array path", function () {
            const result = get(object, ['a', '0', 'b', 'c']);
            expect(result).to.equal(3);
        });

        it("getting non-existing property with default value", function () {
            const result = get(object, 'a.b.c', 'default');
            expect(result).to.equal('default');
        });

        it("getting existing nested property with array path to object", function () {
            const result = get(object, ['a', '0', 'b']);
            expect(result).to.deep.equal({ c: 3 });
        });

        it("getting non-existing property without default value", function () {
            const result = get(object, 'x.y.z');
            expect(result).to.be.undefined;
        });
    });
});