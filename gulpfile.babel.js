'use strict';

import path from 'path';
import gulp from 'gulp';
import del from 'del';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;


gulp.task('lintJS', () =>
    gulp.src('www/js/**/*.js')
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.if(!browserSync.active, $.eslint.failOnError()))
);

gulp.task('assets', () =>
    gulp.src('www/img/**/*')
    .pipe($.cache($.imagemin({
        progressive: true,
        interlaced: true
    })))
    .pipe(gulp.dest('dist/img'))
    .pipe($.size({ title: 'assets' }))
);

gulp.task('copy', () =>
    gulp.src([
        'www/*',
        '!www/*.html',
        'node_modules/apache-server-configs/dist/.htaccess'
    ], {
        dot: true
    }).pipe(gulp.dest('dist'))
    .pipe($.size({ title: 'copy' }))
);

gulp.task('css', () => {
    const AUTOPREFIXER_BROWSERS = [
        'ie >= 10',
        'ie_mob >= 10',
        'ff >= 30',
        'chrome >= 34',
        'safari >= 7',
        'opera >= 23',
        'ios >= 7',
        'android >= 4.4',
        'bb >= 10'
    ];

    // For best performance, don't add Sass partials to `gulp.src`
    return gulp.src([
            'www/css/**/*.scss',
            'www/css/**/*.css'
        ])
        .pipe($.newer('.tmp/css'))
        .pipe($.sourcemaps.init())
        .pipe($.sass({
            precision: 10
        }).on('error', $.sass.logError))
        .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
        .pipe(gulp.dest('.tmp/css'))
        // Concatenate and minify styles
        .pipe($.if('*.css', $.cssnano()))
        .pipe($.size({ title: 'css' }))
        .pipe($.sourcemaps.write('./'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('js', () =>
    gulp.src([
        // Note: Since we are not using useref in the scripts build pipeline,
        //       you need to explicitly list your scripts here in the right order
        //       to be correctly concatenated
        './www/js/script.js'
        // Other scripts
    ])
    .pipe($.newer('.tmp/scripts'))
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/js'))
    .pipe($.concat('script.min.js'))
    .pipe($.uglify({ preserveComments: 'some' }))
    // Output files
    .pipe($.size({ title: 'js' }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('dist/js'))
);

gulp.task('html', () => {
    return gulp.src('www/**/*.html')
        .pipe($.useref({
            searchPath: '{.tmp,app}',
            noAssets: true
        }))

    // Minify any HTML
    .pipe($.if('*.html', $.htmlmin({
            removeComments: true,
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            removeAttributeQuotes: true,
            removeRedundantAttributes: true,
            removeEmptyAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            removeOptionalTags: true
        })))
        // Output files
        .pipe($.if('*.html', $.size({ title: 'html', showFiles: true })))
        .pipe(gulp.dest('dist'));
});

gulp.task('serve', ['js', 'css'], () => {
    browserSync({
        notify: false,
        // Customize the Browsersync console logging prefix
        logPrefix: 'WSK',
        // Allow scroll syncing across breakpoints
        scrollElementMapping: ['main', '.mdl-layout'],
        // Run as an https by uncommenting 'https: true'
        // Note: this uses an unsigned certificate which on first access
        //       will present a certificate warning in the browser.
        // https: true,
        server: ['.tmp', 'www'],
        port: 3001
    });

    gulp.watch(['www/**/*.html'], reload);
    gulp.watch(['www/css/**/*.{scss,css}'], ['css', reload]);
    gulp.watch(['www/js/**/*.js'], ['lintJS', 'js', reload]);
    gulp.watch(['www/assets/**/*'], reload);
});

gulp.task('clean', () => del(['.tmp', 'dist/*', '!dist/.git'], { dot: true }));

gulp.task('default', ['clean'], cb =>
    runSequence(
        'css', ['lintJS', 'html', 'css', 'assets', 'copy'],
        cb
    )
);