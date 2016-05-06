#Gulp start

# 0) Small introduction about me
  - I am from Poland - where is Poland
  - I am working with angularjs 2,5 years
  - I used grunt till now and want to check gulp - this is what I found.
  - I am lazy. Lazy means I don't like to repeat my work. I like do things easy.

# 1) Why use task runner? DRY
  - Minify
  - Concat
  - Less to CSS
  - Testing
  - code analysis

 Code quality, Tests, Build pipeline
 Work smarter, not harder! - John Papa

# 2) Two main players
 ----------------------------------------------------
| Grunt                   |  Gulp                    |
| Configuration over code |  Code over configuration |
| File based						  |  Stream based            |
| 3900+ plugins					  |  1100+ plugins           |
|								          |  use node more readily   |
-----------------------------------------------------

# 3) Gulp api
`gulp.task(name [, dependencies], fn)`
  - dependencies run first before task runs
  - dependencies run in parallel
When? test + lint code | Optimize files | Serve your app

`gulp.src(glob [, options])`
  -take a file system set of files
  - emits files that match
  - optionally specify options to apply on a glob

`options.base`
defines how much of the path retain

`gulp.dest(folder [, options])`
piped files are writen to the file system
Options to apply on a output folder


`gulp.watch(glob [, options], tasks) || gulp.watch(glob [, options], callbackFunction)`
run one or more tasks when file matched by glob changed
callbackFunction(event) - event { type + path}
When? tests run | code lints | compile to css


# 4) Installation
`npm install -g yo gulp bower`
`npm install -g generator-gulp-angular`

`yo gulp-angular`

# 5) Play with gulp

## 5.1) First foo task in gulp
`var gulp = require('gulp')`

`gulp.task('foo', function() {`
`  console.log('This is my first gulp task')`
`});`


## 5.2) Code analysis with JSHint JSCS
  - JSCS - JavaScript code style checker
    It enforce your style guide
    `.jscsrc`
  - JSHint - JavaScript code Analysis
    Detects error and potential problems
    `.jshintrc`

### Installation
`npm install -g jshint'
`npm install jshint gulp-jshint gulp-jscs --save-dev`

  - jshint-stylish
  - gulp-if
  - yargs
  - gulp-print
  - gulp-load-plugins

## 5.3) CSS compilation
  - `npm install gulp-less gulp-autoprefixer del --save-dev`
  - `npm install --save-dev gulp-plumber`
  - gulp-autoprefixer
  - gulp-less
  - gulp-plumber
  - `on('error', function(error) { this.emit('end'); })`
