import { expect } from "chai";
import keys from '../src/keys.js'

describe("keys function unit tests", function() {

    describe("Object with keys and values", function() {
        it("Should return all the keys of an object with distinct keys", function() {
            const distKeysOfObject = keys({'a': 1, 'b': 2, 'c': 3, 'd': 4});
            expect(distKeysOfObject).to.deep.equal(['a', 'b', 'c', 'd']);
        });

        it("Should return all keys of an object", function() {
            const keysOfObject = keys({'a': 1, 'b': 2, 'c': 3, 'a': 4, 'b': 5});
            expect(keysOfObject).to.deep.equal(['a', 'b', 'c']);
        });
    });

    describe("Parameter is a string", function() {
        it("Should return the indexes of the letters in the word", function() {
            const word = keys("hello");
            expect(word).to.deep.equal(['0', '1', '2', '3', '4']);
        });
    });

    describe("Empty values", function() {
        it("Should return an empty array with an empty object", function() {
            const emptyObj = keys({});
            expect(emptyObj).to.deep.equal([]);
        });

        it("Should return an empty array with an empty string", function() {
            const emptyString = keys("");
            expect(emptyString).to.deep.equal([]);
        });
    });

});