import {expect} from 'chai';
import isObjectLike from '../src/isObjectLike.js';

 describe("isObjectLike function unit tests", function() {
    describe("Empty value", function() {
        it("Should return true when value is an empty array", function() {
            const empty1 = isObjectLike([]);
            expect(empty1).to.equal(true);
        });

       it("Should return true when value is an empty object", function() {
            const empty2 = isObjectLike({});
            expect(empty2).to.equal(true);
       });
       
       it("Should return false when value is an empty string", function() {
            const empty3 = isObjectLike("");
            expect(empty3).to.equal(false);
       });
    });

    describe("Object value", function() {
        it("Should return true when value is an array of ints", function() {
            const obj1 = isObjectLike([1, 2, 3]);
            expect(obj1).to.equal(true);
        });

        it("Should return true when value is an array of strings", function() {
            const obj2 = isObjectLike(["one", "two", "three", "four"]);
            expect(obj2).to.equal(true);
        });

        it("Should return true when value is an object", function() {
            const obj3 = isObjectLike({'a': 1, 'b': 2});
            expect(obj3).to.equal(true);
        });

        it("Should return true when value is a Date", function() {
            const obj4 = isObjectLike(new Date());
            expect(obj4).to.equal(true);
        });
    });

    describe("Null value", function() {
        it("Should return false when value is null", function() {
            const nullValue = isObjectLike(null);
            expect(nullValue).to.equal(false);
        });
    });

    describe("Non-object value", function() {
        it("Should return false when value is an int", function() {
            const int = isObjectLike(3);
            expect(int).to.equal(false);
        });

        it("Should return false when value is a string", function() {
            const string = isObjectLike("one");
            expect(string).to.equal(false);
        });

        it("Should return false when value is a boolean", function() {
            const bool = isObjectLike(false);
            expect(bool).to.equal(false);
        });
    });

    describe("Function as parameter", function() {
        it("Should return false when parameter is a function", function() {
        
            function sum(a,b) {
                return a + b
            }

            const func = isObjectLike(sum(1,2));
            expect(func).to.equal(false);
        });
    });
 });

