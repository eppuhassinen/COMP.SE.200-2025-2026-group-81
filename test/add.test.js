import {expect} from 'chai';
import add from '../src/add.js';


describe("add function unit tests", function () {
    describe("type checks", function () {
        it("should return a number", function () {
            const num = add(2, 3);
            expect(num).to.be.a('number');
        });
        it("should not return a number when input contains a string", function () {
            expect(add("2", 3)).to.not.be.a('number');
            expect(add("2", "3")).to.not.be.a('number');
            expect(add(2, "3")).to.not.be.a('number');
        });
        it("should not return a number when input contains undefined", function () {
            expect(add(undefined, 3)).to.not.be.a('number');
            expect(add(2, undefined)).to.not.be.a('number');
            expect(add(undefined, undefined)).to.not.be.a('number');
        });
        it("should not return a number when input contains an object", function () {
            expect(add({}, 3)).to.not.be.a('number');
            expect(add(2, {})).to.not.be.a('number');
            expect(add({}, {})).to.not.be.a('number');
        });
        it("should not return a number when input contains an array", function () {
            expect(add([], 3)).to.not.be.a('number');
            expect(add(2, [])).to.not.be.a('number');
            expect(add([], [])).to.not.be.a('number');
        });

    });
    describe("value checks", function () {
        it("adding two positive numbers", function () {
            const num = add(2, 3);
            expect(num).to.be.a('number');
            expect(num).to.equal(5);
            expect(num).to.be.above(0);
        });
        it("adding positive and negative number", function () {
            const num = add(2, -7);
            expect(num).to.be.a('number');
            expect(num).to.equal(-5);
            expect(num).to.be.below(0);
        });
        it("adding two negative numbers", function () {
            const num = add(-4, -6);
            expect(num).to.be.a('number');
            expect(num).to.equal(-10);
            expect(num).to.be.below(0);
        });
        it("adding zero", function () {
            const num = add(0, 5);
            expect(num).to.be.a('number');
            expect(num).to.equal(5);
            expect(num).to.be.above(0);
        });
        it("adding two zeros", function () {
            const num = add(0, 0);
            expect(num).to.be.a('number');
            expect(num).to.equal(0);
        });
        it("adding decimal numbers", function () {
            const num = add(2.5, 3.1);
            expect(num).to.be.a('number');
            expect(num).to.be.closeTo(5.6, 0.01);
        });
    });
});