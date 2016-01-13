"use strict";

module.exports = function(grunt) {

	// Carrega todas as tarefas
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({

		// Meta
		pkg: grunt.file.readJSON("package.json"),

		// Banner
		banner:
		"/** \n" +
		"* Theme Name: <%= pkg.title %> \n" +
		"* Theme URI: <%= pkg.homepage %> \n" +
		"* Description: <%= pkg.description %> \n" +
		"* Author: <%= pkg.author.name %> \n" +
		"* Author URI: <%= pkg.author.url %> \n" +
		"* Version: 1.0 \n" +
		"**/" +
		"\n",

		// Observa as mundaças nos arquivos
		watch: {
			css: {
				files: ['../assets/scss/**/*'],
				tasks: ['compass', 'clean', 'concat', 'cssmin']
			},

			js: {
				files: ['../assets/js/**/*'],
				tasks: ['uglify']
			},

            images : {
                files: ['../assets/images/**/*'],
				tasks: ['copy']
            }
		},

		// LiveReload e outros paranaue
        browserSync: {
            files: {
                // Aplicando o recurso de Live Reload nos seguintes arquivos
                src : [
                    '../assets/css/*.css',
                    '../assets/scss/*.scss',
                    '../build/css/*.css',
                    '../**/*.php',
                    '../**/*.html'
                ],
            },

            options: {

                // Definindo um IP manualmente | ipconfig (cmd) e ifconfig (shell)
                host : "192.168.0.170",

                // Atribuíndo um diretório base
                proxy: "localhost/acic",

                // Integrando com a tarefa "watch"
                watchTask: true,

                // Sincronizando os eventos entre os dispositívos
                ghostMode: {
                    scroll: true,
                    links: true,
                    forms: true
                }
            },
        },

		// Compila os arquivos para CSS
		compass: {
			dist: {
				options: {
					force: true,
					config: 'config.rb'
				}
			}
		},

        // Concatena os CSS
        concat: {
			options: {
				// Task-specific options go here.
			},

			all: {
				src: ["../assets/css/**/*.css"],
				dest: "../assets/css/concat/style.css"
			}
        },

        // Comprime o CSS
		cssmin: {
			options: {
				banner: '<%= banner %>'
			},

			build: {
				src: '../assets/css/concat/style.css',
				dest: '../build/css/style.min.css'
			},
		},

		// Copia os vendors para o diretório build
		copy: {
			fonts: {
                files: [ {
                    expand: true,
                    cwd: '../assets/fonts/',
                    src: [ '**/*' ],
                    dest: '../build/fonts/'
                } ]
            },

            dist: {
				files: [ {
					expand: true,
					cwd: '../assets/js/vendor/',
					src: [ '**/*' ],
					dest: '../build/js/vendor/'
				} ]
			},

            images: {
                files: [ {
                    expand: true,
                    cwd: '../assets/images/',
                    src: [ '**/*' ],
                    dest: '../build/images/'
                } ]
            },
		},

        // Deleta Arquivos
        clean: {
            options : {
                force : true
            },

            build: {
                src: [ "../assets/css/concat" ]
            },

			/*img: {
                src: [ "../build/images/" ]
            }*/
        },

		// Concatena e minifica os scripts
		uglify: {
			options: {
				mangle: false,
				banner: '<%= banner %>'
			},

			dist: {
				files: {
					'../build/js/main.min.js': [ '../assets/js/vendor/*.js', '../assets/js/*.js' ]
				}
			}
		},

		// Executa deploy via FTP
		'ftp-deploy': {
			build: {
				auth: {
					host: 'ftp.site.com.br',
					port: 21,
					authKey: 'key1'
				},
				src: '../../../../',
				dest: 'www/site/',
				exclusions: [
					'../../../../01-ORIGINAIS',
					'../../../../.git',
					'../../../../.brackets.json',
					'../../../../.gitignore',
					'../../../../**README.md',
					'../../../../wp-content/themes/theme/assets',
					'../../../../wp-content/themes/theme/src'
				]
			}
		},

         // Otimização de imagens
		img: {
		      // using only dirs with output path
		      task1: {
		          src: '../assets/images/',
							dest: '../build/images/'
		      }
		  }


    });


	// Tarefa padrão
	grunt.registerTask( 'default', [ 'browserSync', 'watch' ] );

  // Assim q iniciar o projeto
	grunt.registerTask( 'init', [ 'copy', 'concat', 'cssmin', 'uglify', 'compass'] );

	// Comprime imgs
	//grunt.registerTask('default', ['img']);
	grunt.loadNpmTasks('grunt-img');

	// Assim q iniciar o projeto
	//grunt.registerTask( 'end', [ 'clean:img', 'imagemin' ] );

	// Tarefa para Deploy
	grunt.registerTask( 'deploy', [ 'ftp-deploy' ] );

};
