"use strict";
var chai = require('chai');
var devxBase = require('../src/DevxBase');
var main = devxBase.getMain();
main.init();
var expect = chai.expect;
describe('Testing DevxBase app', function () {
    beforeEach(function () {
        // Arrange
        //DevxBase.say..init(['Awesome', 'Ok', 'Bad']);
    });
    it('should be able to ???', function () {
        // Act
        //var result = devxBase.sayHello();
        // Assert
        //expect(result).eql([{ label: 'Awesome', votes: 0 }, { label: 'Ok', votes: 0 }, { label: 'Bad', votes: 0 }]);
        //expect(result.map(item => item.label)).eql(['Awesome', 'Ok', 'Bad']);
        //expect(result.map(item => item.votes).reduce((a, b) => a + b)).to.be.equal(0);
    });
});
