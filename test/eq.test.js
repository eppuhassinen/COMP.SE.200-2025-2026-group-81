import {expect} from 'chai';
import eq from '../src/eq.js';

describe("eq function unit tests", function () {
    describe("unit tests according to phase 1 plans", function () {
        describe("1. equal values", function () {
            it("should return true for two identical objects", function () {
                const obj = { a: 1 };
                expect(eq(obj, obj)).to.be.true;
            });
            it("should return true for two identical strings", function () {
                expect(eq("abc", "abc")).to.be.true;
            });
            it("should return true for two identical booleans", function () {
                expect(eq(true, true)).to.be.true;
            });
        });
        describe("2. different types", function () {
            it("object and string", function () {
                expect(eq({'a': 1}, "abc")).to.be.false;
            });
            it("string and boolean", function () {
                expect(eq("true", true)).to.be.false;
            });
        });
        describe("3. different values same type", function () {
            it("different strings", function () {
                expect(eq("abc", "def")).to.be.false;
            });
            it("different numbers", function () {
                expect(eq(1, 2)).to.be.false;
            });
        });
        describe("4. one or both values NaN", function () {
            it("one NaN", function () {
                expect(eq(NaN, "abc")).to.be.false;
            });
            it("both NaN", function () {
                expect(eq(NaN, NaN)).to.be.true;
            });
        });
    });
    describe("unit tests with phase 2 AI suggestions", function () {
        it("should return false for two different objects with same content", function () {
            expect(eq({a: 1}, {a: 1})).to.be.false;
        });
        it("should return false for primitive and object wrapper", function () {
            expect(eq('a', Object('a'))).to.be.false;
        });
        it("should return true for null and null", function () {
            expect(eq(null, null)).to.be.true;
        });
        it("should return false for null and undefined", function () {
            expect(eq(null, undefined)).to.be.false;
        });
        it("should return true for undefined and undefined", function () {
            expect(eq(undefined, undefined)).to.be.true;
        });
        it("should return true for 0 and 0", function () {
            expect(eq(0, 0)).to.be.true;
        });
        it("should return true for -0 and 0", function () {
            expect(eq(-0, 0)).to.be.true;
        });
        it("should return false for false and 0", function () {
            expect(eq(false, 0)).to.be.false;
        });
        it("should return false for true and 1", function () {
            expect(eq(true, 1)).to.be.false;
        });
        it("should return true for two identical arrays", function () {
            const arr = [1,2,3];
            expect(eq(arr, arr)).to.be.true;
        });
        it("should return false for two different arrays with same content", function () {
            expect(eq([1,2,3], [1,2,3])).to.be.false;
        });
        it("should return false for empty string and false", function () {
            expect(eq("", false)).to.be.false;
        });
        it("should return false for empty string and 0", function () {
            expect(eq("", 0)).to.be.false;
        });
        it("should return false for empty array and empty object", function () {
            expect(eq([], {})).to.be.false;
        });
        it("should return true for Symbol and same Symbol", function () {
            const sym = Symbol('foo');
            expect(eq(sym, sym)).to.be.true;
        });
        it("should return false for two different Symbols with same description", function () {
            expect(eq(Symbol('foo'), Symbol('foo'))).to.be.false;
        });
    });
});