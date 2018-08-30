const gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	minify = require('gulp-minify'),
	imagemin = require('gulp-imagemin'),
	imageminMozjpeg = require('imagemin-mozjpeg');

gulp.task('sass', () => {
	gulp.src('src/sass/*.sass')
		.pipe(sass().on('error', sass.logError))
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(autoprefixer({browsers:['last 2 versions'],cascade: false}))		
    	.pipe(gulp.dest('dist/css'));
});

gulp.task('copyHTML', () => {
	gulp.src('src/*.html')
		.pipe(gulp.dest('dist'));
});

gulp.task('minifyJS', () => {
	gulp.src('src/js/*.js')
	.pipe(minify({
		ext:{
			noSource: 'true',
			min: '.js'
		}
	}))
	.pipe(gulp.dest('dist/js'))
});

gulp.task('minifyIMG', () => {
	gulp.src('src/img/*')
		.pipe(imagemin([
			imagemin.gifsicle({interlaced: true}),
			imageminMozjpeg({
                quality: 70}),
			imagemin.optipng({optimizationLevel: 5}),
			imagemin.svgo({
				plugins: [
					{removeViewBox: true},
					{cleanupIDs: false}
				]
			})
		]))
		.pipe(gulp.dest('dist/img'))
});

gulp.task('watch', function () {
	gulp.watch('src/sass/*.sass', ['sass'])
	gulp.watch('src/*.html', ['copyHTML'])
	gulp.watch('src/js/*.js', ['minifyJS'])
	gulp.watch('src/img/*', ['minifyIMG']);
});