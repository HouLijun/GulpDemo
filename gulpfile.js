/*导入依赖的模块*/
var gulp = require('gulp');
var del = require('del');
var fileinclude = require('gulp-file-include');
var smushit = require('gulp-smushit');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');

/*清理生产目录文件*/
gulp.task('clean', function(cb) {
	del(['./dist/**/*.*']).then(function paths() {
		cb();
	});
});

/*移动并压缩common文件*/
gulp.task('common', function() {
	//公用样式文件
	gulp.src(['dev/common/css/*.css']) 
		.pipe(cleanCSS())
		.pipe(gulp.dest('dist/common/css')); //公用样式输出的文件夹
		
	//公用js文件
	gulp.src(['dev/common/js/*.*']) 
		.pipe(uglify())
		.pipe(gulp.dest('dist/common/js')); //公用js输出的文件夹
		
	//公用img文件
	gulp.src(['dev/common/images/*'])
		.pipe(smushit({
			verbose: true
		}))
		.pipe(gulp.dest('dist/common/images'));  //公用img输出的文件夹
		
	//公用fonts输出的文件夹
	gulp.src('dev/common/fonts/*.*') //公用fonts文件
		.pipe(gulp.dest('dist/common/fonts')) 
});

/*使用fileinclude 实现页面 include 任务*/
gulp.task('fileinclude', function() {
	gulp.src(['dev/page/**/**/*.html'])
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(gulp.dest('dist/')); //输出到dist
});

//压缩图片、css、js
gulp.task('compress', function() {
	//压缩css
	gulp.src(['dev/page/**/**/css/*.css'])
		.pipe(cleanCSS())
		.pipe(gulp.dest('dist/')); //输出到dist
		
	//压缩js
	gulp.src(['dev/page/**/**/js/*.js'])
		.pipe(uglify())
		.pipe(gulp.dest('dist/')); //输出到dist
		
	//压缩图片
	gulp.src(['dev/page/**/**/images/*'])
		.pipe(smushit({
			verbose: true
		}))
		.pipe(gulp.dest('dist/'));
})

gulp.task('default', ['clean'], function() {
	gulp.start('common','fileinclude','compress')
});