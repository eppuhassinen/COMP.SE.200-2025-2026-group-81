import {expect} from 'chai';
import filter from '../src/filter.js';

describe("filter function unit tests", function () {
    describe("type checks", function () {
        it("should return an array", function () {
            const result = filter([1, 2, 3, 4], n => n % 2 === 0);
            expect(result).to.be.an('array');
        });
        it("should return an empty array when input is null", function () {
            const result = filter(null, n => n % 2 === 0);
            expect(result).to.be.an('array').that.is.empty;
        });
        it("should return an empty array when input is undefined", function () {
            const result = filter(undefined, n => n % 2 === 0);
            expect(result).to.be.an('array').that.is.empty;
        });
    });
    describe("value checks", function () {
        it("filtering even numbers", function () {
            const result = filter([1, 2, 3, 4, 5, 6], n => n % 2 === 0);
            expect(result).to.deep.equal([2, 4, 6]);
        });
        it("filtering with no matches", function () {
            const result = filter([1, 3, 5], n => n % 2 === 0);
            expect(result).to.deep.equal([]);
        });
        it("filtering all matches", function () {
            const result = filter([2, 4, 6], n => n % 2 === 0);
            expect(result).to.deep.equal([2, 4, 6]);
        });
        it("filtering with array containing strings", function () {
            const users = ["barney", "fred", "pebbles"];
            const result = filter(users, name => name.length <= 4);
            expect(result).to.deep.equal(["fred"]);
        });
    });
});