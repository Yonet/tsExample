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
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
//CatData Service
var CatsService = (function () {
    function CatsService() {
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
        ];
    }
    return CatsService;
})();
// About Page
var About = (function () {
    function About() {
    }
    About = __decorate([
        angular2_1.Component({
            selector: 'about'
        }),
        angular2_1.View({
            template: "\n\t<div>\n      About Page Here\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], About);
    return About;
})();
// Blog Page
var Blog = (function () {
    function Blog() {
    }
    Blog = __decorate([
        angular2_1.Component({
            selector: 'blog'
        }),
        angular2_1.View({
            template: "\n\t<div>\n      Blog Page Here\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], Blog);
    return Blog;
})();
var Post = (function () {
    function Post() {
    }
    Post = __decorate([
        angular2_1.Component({
            selector: 'post',
            properties: ["url", "title", "likes"]
        }),
        angular2_1.View({
            templateUrl: 'templates/cat.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Post);
    return Post;
})();
var PostList = (function () {
    function PostList(catsService) {
        this.cats = catsService.cats;
    }
    PostList.prototype.addPost = function (event, title, url) {
        var post = { likes: 0 };
        post.title = title.value;
        post.url = url.value;
        this.cats.push(post);
    };
    PostList.prototype.like = function (event, cat) {
        event.preventDefault();
        cat.likes++;
    };
    PostList = __decorate([
        angular2_1.Component({
            selector: 'post-list',
            viewInjector: [CatsService]
        }),
        angular2_1.View({
            templateUrl: 'templates/post-list.html',
            directives: [angular2_1.NgFor, Post, router_1.RouterOutlet, router_1.RouterLink]
        }), 
        __metadata('design:paramtypes', [CatsService])
    ], PostList);
    return PostList;
})();
//Catstagram
var Catstagram = (function () {
    function Catstagram() {
    }
    Catstagram = __decorate([
        router_1.RouteConfig([
            new router_1.Route({ path: '/', component: PostList, as: 'home' }),
            new router_1.Route({ path: '/about', component: About, as: 'about' }),
            new router_1.Route({ path: '/blog', component: Blog, as: 'blog' })
        ]),
        angular2_1.Component({
            selector: 'catstagram',
            appInjector: [router_1.routerInjectables],
        }),
        angular2_1.View({
            templateUrl: 'templates/main.html',
            directives: [router_1.RouterOutlet, router_1.RouterLink] //RouterOutlet sets the content, RouterLink links to the url
        }), 
        __metadata('design:paramtypes', [])
    ], Catstagram);
    return Catstagram;
})();
///Catstagram
angular2_1.bootstrap(Catstagram, [router_1.routerInjectables, angular2_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy)]);
//bind(LocationStrategy).toClass(HashLocationStrategy) is a hack that will not be there in the near future.
