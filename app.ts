//imports the type definitions from Angular
/// <reference path="typings/angular2/angular2.d.ts" />

//ES6 module syntax to import three symbols from the Angular module. The module will load at runtime.
import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
	selector: 'my-app' // Defines the <my-app></my-app> tag
})
@View({
	template: '<h1>Hello {{ name }}</h1>' // Defines the inline template for the component
})

class MyAppComponent {
	name: string;
	constructor() {
		this.name = 'Aysegul';
	}
}

bootstrap(MyAppComponent);