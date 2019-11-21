const gulp = require("gulp")
const sass = require("gulp-sass")
const postcss = require("gulp-postcss")
const rename = require('gulp-rename')
const autoprefixer = require("autoprefixer")
const cssnano = require("cssnano")
const uglifycss = require('gulp-uglifycss')
const sourcemaps = require("gulp-sourcemaps")

const paths = {
  styles: {
    src: "./src/scss/**/*.scss",
    entry: "./src/scss/root.scss",
    dest: "./public/styles"
  }
}

function style() {
  return gulp
      .src(paths.styles.entry)
      .pipe(sass())
      .on("error", sass.logError)
      .pipe(postcss([autoprefixer(), cssnano()]))
      .pipe(sourcemaps.write())
      .pipe(uglifycss({
        "maxLineLen": 80,
        "uglyComments": true
      }))
      .pipe(rename({
        suffix: '.min',
        basename: 'main'
      }))
      .pipe(gulp.dest(paths.styles.dest))
}

exports.style = style

	
function watch() {
  style()
  gulp.watch(paths.styles.src, style)
}

exports.watch = watch
