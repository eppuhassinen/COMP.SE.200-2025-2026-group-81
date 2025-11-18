import {expect} from 'chai';
import isEmpty from '../src/isEmpty.js';


describe("isEmpty function unit tests", function () {
    describe("unit tests according to phase 1 plans", function () {
        describe("1. parameter is null", function () {
            it("should return true for null", function () {
                expect(isEmpty(null)).to.equal(true);
            });
        });
        describe("2. parameter is not of type object, collection, map or set", function () {
            it("Boolean parameter", function () {
                expect(isEmpty(true)).to.equal(true);
            });
            it("Number parameter", function () {
                expect(isEmpty(1)).to.equal(true);
            });
        });
        describe("3. parameter is type of object, collection, map, set or an array-like value", function () {
            it("array parameter, non-empty", function () {
                expect(isEmpty([1, 2, 3])).to.equal(false);
            });
            it("string parameter, non-empty", function () {
                expect(isEmpty('abc')).to.equal(false);
            });
            it("object parameter, non-empty", function () {
                expect(isEmpty({ 'a': 1 })).to.equal(false);
            });
        });
        describe("4. parameter is an empty value type of object, collection, map, set or an array-like", function () {
            it("empty array parameter", function () {
                expect(isEmpty([])).to.equal(true);
            });
            it("empty string parameter", function () {
                expect(isEmpty('')).to.equal(true);
            });
            it("empty object parameter", function () {
                expect(isEmpty({})).to.equal(true);
            });
        });
    });
    describe("unit tests with phase 2 AI suggestions", function () {
        it("should return true for undefined", function () {
            expect(isEmpty(undefined)).to.equal(true);
        });

        it("should return true for empty Map", function () {
            expect(isEmpty(new Map())).to.equal(true);
        });

        it("should return false for non-empty Map", function () {
            const map = new Map();
            map.set('key', 'value');
            expect(isEmpty(map)).to.equal(false);
        });

        it("should return true for empty Set", function () {
            expect(isEmpty(new Set())).to.equal(true);
        });

        it("should return false for non-empty Set", function () {
            const set = new Set();
            set.add(1);
            expect(isEmpty(set)).to.equal(false);
        });

        it("should return true for empty arguments object", function () {
            function test() {
            expect(isEmpty(arguments)).to.equal(true);
            }
            test();
        });

        it("should return false for non-empty arguments object", function () {
            function test() {
            expect(isEmpty(arguments)).to.equal(false);
            }
            test(1, 2);
        });

        it("should return true for empty buffer", function () {
            const buf = Buffer.alloc(0);
            expect(isEmpty(buf)).to.equal(true);
        });

        it("should return false for non-empty buffer", function () {
            const buf = Buffer.from([1]);
            expect(isEmpty(buf)).to.equal(false);
        });

        it("should return true for empty typed array", function () {
            const arr = new Uint8Array(0);
            expect(isEmpty(arr)).to.equal(true);
        });

        it("should return false for non-empty typed array", function () {
            const arr = new Uint8Array([1, 2]);
            expect(isEmpty(arr)).to.equal(false);
        });

        it("should return true for object with only inherited properties", function () {
            function Parent() {}
            Parent.prototype.a = 1;
            const obj = new Parent();
            expect(isEmpty(obj)).to.equal(true);
        });

        it("should return true for object with only non-enumerable properties", function () {
            const obj = {};
            Object.defineProperty(obj, 'hidden', {
            value: 42,
            enumerable: false
            });
            expect(isEmpty(obj)).to.equal(true);
        });

        it("should return false for object with enumerable own property", function () {
            const obj = {};
            Object.defineProperty(obj, 'visible', {
            value: 42,
            enumerable: true
            });
            expect(isEmpty(obj)).to.equal(false);
        });

        it("should return true for function", function () {
            expect(isEmpty(function() {})).to.equal(true);
        });

        it("should return true for Symbol", function () {
            expect(isEmpty(Symbol('sym'))).to.equal(true);
        });
    });
});