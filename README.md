# Angular 1.x boilerplate


[![Gulp](https://s16.postimg.org/4r2fsazz9/gulp.png)](https://github.com/gulpjs/gulp)
[![Angular 1.5](https://s11.postimg.org/lvqgbpj5v/angular.png)](https://github.com/angular/angular.js)
[![Bootstrap](https://s4.postimg.org/7tm0k2oq5/bootstrap.png)](https://github.com/twbs/bootstrap)
[![Webpack](http://s21.postimg.org/4favrbo53/webpack.png)](https://github.com/webpack/webpack)
[![BrowserSync](https://s11.postimg.org/xhirska8j/browsersync.png)](https://github.com/browsersync/browser-sync)
[![Babel](https://s12.postimg.org/j9hs9l219/babel.png)](https://github.com/babel/babel/)
[![ES6](https://s9.postimg.org/nxb8a31pb/es6.png)](http://www.ecma-international.org/ecma-262/6.0/)
[![ESLint](https://s16.postimg.org/pgxwmkej9/eslint.png)](https://github.com/sindresorhus/xo)
[![Less](https://s9.postimg.org/msaf0hov3/less.png)](https://github.com/less/less.js)
[![Autoprefixer](https://s15.postimg.org/5ax2qgrqz/autoprefixer.png)](https://github.com/postcss/autoprefixer)
[![Protractor](https://s13.postimg.org/ijrsfrlpz/protractor.png)](https://github.com/angular/protractor)
[![Jasmine](https://s9.postimg.org/cd8gwyjy7/jasmine.png)](https://github.com/jasmine/jasmine)
[![Karma](https://s11.postimg.org/jaz2uy6mr/karma.png)](https://github.com/karma-runner/karma)

## Features:
- [Gulp](https://github.com/gulpjs/gulp)
- [Angular 1.5](https://github.com/angular/angular.js) (component-oriented)
- [Angular UI Router](https://github.com/angular-ui/ui-router)
- [Bootstrap 3](https://github.com/twbs/bootstrap) (Less)
- [Webpack](https://github.com/webpack/webpack)
- [BrowserSync](https://github.com/browsersync/browser-sync)
- [ES6 modules](http://www.ecma-international.org/ecma-262/6.0/) via [Babel](https://github.com/babel/babel/)
- [ESLint](https://github.com/sindresorhus/xo)
- [Less](https://github.com/less/less.js)
- [Favicons generator](https://github.com/jantimon/favicons-webpack-plugin)
- [Sprite generator](https://github.com/mixtur/webpack-spritesmith)
- [Autoprefixer](https://github.com/postcss/autoprefixer)
- HTML/JS/CSS minification, uglification, concatenation
- Sourcemaps
- [Karma](https://github.com/karma-runner/karma), [Jasmine](https://github.com/jasmine/jasmine), [Protractor](https://github.com/angular/protractor) and [PhantomJS](https://github.com/ariya/phantomjs/) for testing
- [Django CSRF protection support](https://docs.djangoproject.com/en/1.10/ref/csrf/)

## Instalation

- install node if it not installed. [For linux](https://nodejs.org/en/download/package-manager/#arch-linux) or [for mac](https://nodejs.org/en/download/package-manager/#osx) and [npm](https://www.npmjs.com/get-npm?utm_source=house&utm_medium=homepage&utm_campaign=free%20orgs&utm_term=Install%20npm)
- `npm install gulpjs/gulp-cli -g` for installing gulp-cli 4 if it not installed   
- `npm i` - install all dependencies

## Usage

If you have `gulp-cli` installed in global packages you can use gulp commands else use `npm` commands:

- `gulp`, `gulp build` or `npm run build` to build an optimized version of your application in `/dist`
- `gulp serve` or `npm run serve` to launch a browser sync server on your source files
- `gulp serve:dist` or `npm run serve:dist` to launch a server on your optimized application
- `gulp test` or `npm run test` to launch your unit tests with Karma
- `gulp test:auto` or `npm run test:auto` to launch your unit tests with Karma in watch mode


## Style-guides
- https://github.com/toddmotto/angular-styleguide
- https://github.com/steelkiwi/javascript
