import { expect } from "chai";
import reduce from '../src/reduce.js'

describe("reduce function unit tests", function() {

    describe("Reduce with a sum function", function() {
        it("Should reduce a list of ints to their sum", function() {
            const sum1 = reduce([1, 2], (sum, n) => sum + n, 0);
            const sum2 = reduce([2, 4, 6, 8], (sum, n) => sum + n, 0);

            expect(sum1).to.equal(3);
            expect(sum2).to.equal(20);
        });

        it("Should return 0 when an empty list is given as input", function() {
            const emptyList = reduce([], (sum, n) => sum + n, 0);
        
            expect(emptyList).to.equal(0);
        });

        it("Should use first element as accumulator when one is not given", function() {
            const noAccum = reduce([1, 2, 3, 4], (sum, n) => sum + n);
        
            expect(noAccum).to.equal(10);
        });
    });

    describe("Reduce a list of strings", function() {

        it("Should reduce a list of strings to an object with count of each string", function() {
            const string = reduce(["car", "bike", "car", "bus", "tram", "tram"], (acc, value) => {
                acc[value] ? ++acc[value] : (acc[value] = 1)
                 return acc}, {});

            expect(string).to.deep.equal({'car': 2, 'bike': 1, 'bus': 1, 'tram': 2 });
        });

        it("Should reduce a list of strings to the sum of their lengths", function() {
            const sumLenghts = reduce(["testing", "the", "string", "length", "reduce"], (acc, s) =>
                acc + s.length, 0);
            expect(sumLenghts).to.equal(28)
        });
    });

    describe("Reduce an object", function() {
        it("Should return the sum of object values", function() {
            const valueSum = reduce({ 'a': 1 , 'b': 2 , 'c': 3 }, (sum, obj) => sum + obj, 0);

            expect(valueSum).to.equal(6);
        });
    });

});