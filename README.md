# tsExample
Angular 2.0 example with TypeScript - ForwardJS 2015

## Step 0

1. Install type definition files

`npm install -g tsd@^0.6.0`

2. Install angular2 ES6 promises and rx libraries.

` tsd install angular2 es6-promise rx rx-lite`

3. Install TypeScript 

`npm install -g typescript@^1.5.0-beta`

4. Compile and watch your app.ts file

`tsc --watch -m commonjs -t es5 --emitDecoratorMetadata app.ts`

5. Define your first component in app.ts file

```
@Component({})
@View({})
class FirstComponent{
  constructor(){
  ...
  }
}
```

