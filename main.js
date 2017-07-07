"use strict";
exports.__esModule = true;
var $ = require("jquery");
var getcoffee_1 = require("./getcoffee");
var SweetSweetClass = (function () {
    function SweetSweetClass() {
        console.log("Even sweeter");
        $('body').css('background-color', 'red');
    }
    return SweetSweetClass;
}());
var basil = new SweetSweetClass();
var coffee = new getcoffee_1.MustHaveCoffee();
