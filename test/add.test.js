import {expect} from 'chai';


describe("add.js", function () {

    it("adding two positive numbers", function () {
        const foo = 'bar';
        const beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };
        
        expect(foo).to.be.a('string');
        expect(foo).to.equal('bar');
        expect(foo).to.have.lengthOf(3);
        expect(beverages).to.have.property('tea').with.lengthOf(3);
    });
    it("adding positive and negative number", function () {
        const num = -5;
        expect(num).to.be.a('number');
        expect(num).to.equal(-5);
        expect(num).to.be.below(0);
    });
});