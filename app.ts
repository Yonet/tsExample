//imports the type definitions from Angular
/// <reference path="typings/angular2/angular2.d.ts" />

//ES6 module syntax to import three symbols from the Angular module. The module will load at runtime.
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';

class CatsService {
	constructor(){
		this.cats = [
			{
				"title": "Synchronized waking up",
				"url": "http://i.imgur.com/39yXnyh.gif",
				"likes": 305
			},
			{
				"title": "From under the sofa",
				"url": "http://i.imgur.com/Bz0AsI6.gif",
				"likes": 185
			},
			{
				"title": "What I have to deal with on a daily basis",
				"url": "http://i.imgur.com/MCmdIbF.gif",
				"likes": 65
			},
			{
				"title": "Durr, Bark woof",
				"url": "https://i.imgur.com/mr4egM3.gif",
				"likes": 49
			},
			{
				"title": "I'm not very smart",
				"url": "http://i.imgur.com/hJbijPN.gif",
				"likes": 79
			},
			{
				"title": "I like humans",
				"url": "http://forgifs.com/gallery/d/217571-1/Cat-kiss-nuzzle.gif",
				"likes": 29
			},
			{
				"title": "Oh no!",
				"url": "http://forgifs.com/gallery/d/216557-1/Cat-eyes-dilate.gif",
				"likes": 68
			},
			{
				"title": "Mommy wants to sleep.",
				"url": "http://i.imgur.com/6yhkPFk.gif",
				"likes": 69
			},
			{
				"title": "I'm the king",
				"url": "http://i.imgur.com/E2wNiC6.gif",
				"likes": 69
			},
			{
				"title": "I'm the king",
				"url": "http://i.imgur.com/72zRVtC.gif",
				"likes": 89
			}
		]

	}
}

@Component({
	selector: 'catstagram', // Defines the <my-app></my-app> tag
	appInjector: [CatsService]
})
@View({
	templateUrl: 'templates/main.html', // Defines the inline template for the component
	directives: [NgFor]
})

class Catstagram {
	name: string;
	constructor(catsService: CatsService) {
		this.cats = catsService.cats;
	}

	addPost(title, url){
		var post = { likes: 0 };
		post.title = title;
		post.url = url;
		this.cats.push(post);
	}
}

bootstrap(Catstagram);



var cats = [
	{
		"title": "Synchronized waking up",
		"url": "http://i.imgur.com/39yXnyh.gif",
		"likes": 305
	},
	{
		"title": "From under the sofa",
		"url": "http://i.imgur.com/Bz0AsI6.gif",
		"likes": 185
	},
	{
		"title": "What I have to deal with on a daily basis",
		"url": "http://i.imgur.com/MCmdIbF.gif",
		"likes": 65
	},
	{
		"title": "Durr, Bark woof",
		"url": "https://i.imgur.com/mr4egM3.gif",
		"likes": 49
	},
	{
		"title": "I'm not very smart",
		"url": "http://i.imgur.com/hJbijPN.gif",
		"likes": 79
	},
	{
		"title": "I like humans",
		"url": "http://forgifs.com/gallery/d/217571-1/Cat-kiss-nuzzle.gif",
		"likes": 29
	},
	{
		"title": "Oh no!",
		"url": "http://forgifs.com/gallery/d/216557-1/Cat-eyes-dilate.gif",
		"likes": 68
	},
	{
		"title": "Mommy wants to sleep.",
		"url": "http://i.imgur.com/6yhkPFk.gif",
		"likes": 69
	},
	{
		"title": "I'm the king",
		"url": "http://i.imgur.com/E2wNiC6.gif",
		"likes": 69
	},
	{
		"title": "I'm the king",
		"url": "http://i.imgur.com/72zRVtC.gif",
		"likes": 89
	}
]
