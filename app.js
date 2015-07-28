//imports the type definitions from Angular
/// <reference path="typings/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//ES6 module syntax to import three symbols from the Angular module. The module will load at runtime.
var angular2_1 = require("angular2/angular2");
var Catstagram = (function () {
    function Catstagram() {
        this.cats = [{}];
    }
    Catstagram = __decorate([
        angular2_1.Component({
            selector: 'catstagram' // Defines the <my-app></my-app> tag
        }),
        angular2_1.View({
            templateUrl: 'templates/main.html',
            directives: [angular2_1.formDirectives]
        }), 
        __metadata('design:paramtypes', [])
    ], Catstagram);
    return Catstagram;
})();
angular2_1.bootstrap(Catstagram);
// "cats": [
// 	{
// 		"title": "Synchronized waking up",
// 		"url": "http://i.imgur.com/39yXnyh.gif",
// 		"likes": 305
// 	},
// 	{
// 		"title": "From under the sofa",
// 		"url": "http://i.imgur.com/Bz0AsI6.gif",
// 		"likes": 185
// 	},
// 	{
// 		"title": "What I have to deal with on a daily basis",
// 		"url": "http://i.imgur.com/MCmdIbF.gif",
// 		"likes": 65
// 	},
// 	{
// 		"title": "Durr, Bark woof",
// 		"url": "https://i.imgur.com/mr4egM3.gif",
// 		"likes": 49
// 	},
// 	{
// 		"title": "I'm not very smart",
// 		"url": "http://i.imgur.com/hJbijPN.gif",
// 		"likes": 79
// 	},
// 	{
// 		"title": "I like humans",
// 		"url": "http://forgifs.com/gallery/d/217571-1/Cat-kiss-nuzzle.gif",
// 		"likes": 29
// 	},
// 	{
// 		"title": "Oh no!",
// 		"url": "http://forgifs.com/gallery/d/216557-1/Cat-eyes-dilate.gif",
// 		"likes": 68
// 	},
// 	{
// 		"title": "Mommy wants to sleep.",
// 		"url": "http://i.imgur.com/6yhkPFk.gif",
// 		"likes": 69
// 	},
// 	{
// 		"title": "I'm the king",
// 		"url": "http://i.imgur.com/E2wNiC6.gif",
// 		"likes": 69
// 	},
// 	{
// 		"title": "I'm the king",
// 		"url": "http://i.imgur.com/72zRVtC.gif",
// 		"likes": 89
// 	}
// ]
