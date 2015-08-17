module.exports = function(grunt) {

    /**
     * Окружение
     */

    var autoprefixer = require('autoprefixer-core');

    /**
     * Конфигурация проекта
     */
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		sprite: {
			all: {
				src: './img/sprite/*.png',
				dest: './img/spritesheet.png',
				destCss: './css/sprites.styl',
				cssFormat: 'stylus',
				padding: 2
			}
		},
        stylus: {
            compile: {
                options: {
                    compress: false,
                    urlfunc: 'data-uri'
                },
                files: {
                    './css/style.css': './css/style.styl'
                }
            }
        },
        watch: {
            sprite: {
                files: ['<%= sprite.all.src %>'],
                tasks: ['sprite'],
                options: {
                    debounceDelay: 500
                }
            },
            stylus: {
                files: [
                    './css/**/*.styl'
                ],
                tasks: ['stylus', 'postcss'],
                options: {
                    livereload: true
                }
            }
        },
        postcss: {
            options: {
                processors: [
                    require('autoprefixer-core')(),
                ]
            },
            dist: {
                src: './css/style.css'
            }
        }
    });

    /**
     * Плагины
     */
    // Плагин для работы со спрайтами
    grunt.loadNpmTasks('grunt-spritesmith');

    // Сборщик для Stylus
    grunt.loadNpmTasks('grunt-contrib-stylus');

    // Live reload
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Postcss
    grunt.loadNpmTasks('grunt-postcss');

    /**
     * Задачи
     */
    grunt.registerTask('default', 'Build sprite and stylus. Watch changes in images and *.styl files', function () {
        // Этот пакет задач не отваливается при предупреждениях (критично для gaze)
        grunt.option('force', true);
        grunt.task.run(['sprite', 'stylus', 'postcss', 'watch']);
    });
};
