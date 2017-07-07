import * as $ from "jquery";
import {MustHaveCoffee} from "./getcoffee"
class SweetSweetClass {
     constructor() { 
         console.log("Even sweeter");
         $('body').css('background-color','blue');
     }
 }

 let basil = new SweetSweetClass();
 let coffee = new MustHaveCoffee();