import { expect } from "chai";
import words from '../src/words.js'

describe("words function unit tests", function() {

    describe("String containing words with no pattern to match", function() {
        it("Should split a string into an array containing words from the string", function() {
            const commaList = words("cat, dog, horse, fish");
            expect(commaList).to.deep.equal(["cat", "dog", "horse", "fish"]);
        });

        it("Should split words that are separated by spaces", function() {
            const spaceList = words("one two three four");
            expect(spaceList).to.deep.equal(["one", "two", "three", "four"]);
        });
    });

    describe("String containing words and a pattern to match", function() {
        it("Should split a string into an array of words based on commas", function() {
            const splitCommas = words("cat, dog, ? horse, ?, fish",  /[^, ]+/g);
            expect(splitCommas).to.deep.equal(["cat", "dog", "?", "horse", "?", "fish"]);
        });

        it("Should split a string into words based on numbers", function() {
            const numberedList = words("1.first word 2.second word 3.third word", /[^0-9.]+/g );
            expect(numberedList).to.deep.equal(["first word ", "second word ", "third word"]);
        });

        it("Should split a string after ?-marks", function() {
            const questions = words("What is the time?How old are you?What is your name?", /[^?]+/g)
            expect(questions).to.deep.equal(["What is the time", "How old are you" ,"What is your name"]);
        });
    });

    describe("String containing words and numbers", function() {
        it("Should return an array containing strings of words and numbers", function() {
            const numAndWord = words("this string, contains, words, and, numbers, 3, 4, 5");
            expect(numAndWord).to.deep.equal(["this", "string", "contains", "words", "and", "numbers", "3", "4", "5"]);
        });
    });

    describe("Empty string", function() {
        it("Should return an empty array with empty string input", function() {
            const empty = words("");
            expect(empty).to.deep.equal([]);
        });
    });
});