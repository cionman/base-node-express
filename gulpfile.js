const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
// const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const rollup = require('@rollup/stream');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

function basicSiteCss() {
    return gulp.src('./view/static/site/scss/style.scss')
        //      .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(autoprefixer()) // package.json에 옵션값이 있다.
        .pipe(gulp.dest('./view/static/site/css'))
        .pipe(
            rename({
                suffix: '.min',
            })
        )
        .pipe(cleanCSS())
        //      .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./view/static/site/css'));
}

function basicSiteJs() {
    return rollup({
        input: './view/static/site/js/site.js',
        output: { format: 'es' },
        treeshake: false,
        context: 'window',
    })
        .pipe(source('site.js'))
        .pipe(buffer())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('./view/static/site/js'))
        .pipe(
            rename({
                suffix: '.min',
            })
        )
        .pipe(uglify())
        //      .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./view/static/site/js'));
}

function adminCss() {
    return gulp.src('./view/static/admin/scss/admin.scss')
        //   .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(autoprefixer()) // package.json에 옵션값이 있다.
        .pipe(gulp.dest('./view/static/admin/css'))
        .pipe(
            rename({
                suffix: '.min',
            })
        )
        .pipe(cleanCSS())
        //   .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./view/static/admin/css'));

}

function adminJs() {
    return rollup({
        input: './view/static/admin/js/admin.js',
        output: { format: 'es' },
        treeshake: false,
    })
        .pipe(source('admin.js'))
        .pipe(buffer())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('./view/static/admin/js'))
        .pipe(
            rename({
                suffix: '.min',
            })
        )
        .pipe(uglify())
        //     .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./view/static/admin/js'));
}

function watchFile() {
    gulp.watch('./view/static/site/scss/**/*.scss', basicSiteCss);
    gulp.watch('./view/static/site/js/**/*.js', basicSiteJs);
    gulp.watch('./view/static/admin/js/**/*.js', adminJs);
    gulp.watch('./view/static/admin/scss/**/*.scss', adminCss);
}

const watch = gulp.series(gulp.parallel(basicSiteCss, basicSiteJs, adminJs, adminCss), gulp.parallel(watchFile));
const build = gulp.series(basicSiteCss, basicSiteJs, adminJs, adminCss);

exports.watch = watch;
exports.build = build;
