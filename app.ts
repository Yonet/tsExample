//imports the type definitions from Angular
/// <reference path="typings/angular2/angular2.d.ts" />

//ES6 module syntax to import three symbols from the Angular module. The module will load at runtime.
import {Component, View, bootstrap, NgFor, bind} from 'angular2/angular2';
import { RouteConfig, routerInjectables, RouterOutlet, RouterLink, HashLocationStrategy, LocationStrategy, Route} from 'angular2/router';
import {bind, Injectable} from "angular2/di";

//CatData Service
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

// About Page
@Component({
	selector: 'about'
})

@View({
	template: `
	<div>
      About Page Here
    </div>
  `
})
class About {

}

// Blog Page
@Component({
	selector: 'blog'
})

@View({
	template: `
	<div>
      Blog Page Here
    </div>
  `
})
class Blog {

}

@Component({
	selector: 'post',
	properties: ["url", "title", "likes"]
})

@View({
	templateUrl: 'templates/cat.html'
})
class Post {

}


@Component({
	selector: 'post-list', // Defines the <my-app></my-app> tag
	viewInjector: [CatsService]
})
@View({
	templateUrl: 'templates/post-list.html', // Defines the inline template for the component
	directives: [NgFor, Post, RouterOutlet, RouterLink]
})
class PostList {
	name: string;
	constructor(catsService: CatsService) {
		this.cats = catsService.cats;
	}

	addPost(event, title, url){

		var post = { likes: 0 };
		post.title = title.value;
		post.url = url.value;
		this.cats.push(post);
	}

	like(event, cat){
		event.preventDefault();
		cat.likes++;
	}
}

//Catstagram
@RouteConfig([
	new Route({ path: '/', component: PostList, as 'home'}),
	new Route({ path: '/about', component: About, as 'about'}),
	new Route({ path: '/blog', component: Blog, as 'blog'})
])

@Component({
	selector: 'catstagram',
	appInjector: [routerInjectables],
})
@View({
	templateUrl: 'templates/main.html',
	directives: [RouterOutlet, RouterLink]//RouterOutlet sets the content, RouterLink links to the url
})
class Catstagram {
}

///Catstagram

bootstrap(Catstagram, [routerInjectables, bind(LocationStrategy).toClass(HashLocationStrategy)]);

//bind(LocationStrategy).toClass(HashLocationStrategy) is a hack that will not be there in the near future.
