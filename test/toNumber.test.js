import { expect } from "chai";
import toNumber from '../src/toNumber.js'

describe("toNumber function unit tests", function() {

    describe("Value is a number", function() {
        it("Should convert to a number when value is an int", function() {
            const int = toNumber(2);
            expect(int).to.equal(2);
        });

        it("Should convert to a number when value is a double", function() {
            const double = toNumber(3.2);
            expect(double).to.equal(3.2);
        });

        it("Should convert to a number when value is a negative int", function() {
            const negInt = toNumber(-5);
            expect(negInt).to.equal(-5);
        });
    });

    describe("Value is a string", function() {
        it("Should convert a string containing a number to number", function() {
            const string1 = toNumber("2.1");
            expect(string1).to.equal(2.1);
        });

        it("Should return NaN when a string does not contain a number", function() {
            const string2 = toNumber("fun");
            expect(string2).to.deep.equal(NaN);
        });
    });

    describe("Value is an array", function() {
        it("Should return NaN when a value is an array", function() {
            const obj1 = toNumber([1, 2]);
            expect(obj1).to.deep.equal(NaN);
        });
    });

    describe("Value is an null", function() {
        it("Should convert a null value to zero", function() {
            const nullValue = toNumber(null);
            expect(nullValue).to.equal(0);
        });
    });

    describe("Number static data properties", function() {
        it("Should return 5e-324 with Number MIN_VALUE", function() {
            const minVal = toNumber(Number.MIN_VALUE);
            expect(minVal).to.equal(5e-324);
        });

        it("Should return infinity when value is infinity", function() {
            const inf = toNumber(Infinity);
            expect(inf).to.equal(Infinity);
        });

        it("Should return 2.2204460492503130808472633361816E-16 with Number EPSILON", function() {
            const eps = toNumber(Number.EPSILON);
            expect(eps).to.equal(2.2204460492503130808472633361816E-16);
        });
    });
});