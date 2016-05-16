module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),
    
    less: {
      
      development: {
        files: {
          'style.css': 'less/style.less'
        }
      },

      production: {
        options: {
          compress: true
        },
        files: {
          'style.css': 'less/style.less'
        }
      }
    },

    browserSync: {
      dev: {
        bsFiles: {
          src : ['*.css','*.html', 'js/*.js', 'dist/*.js']
        },
        options: {
          watchTask: true,
          // server: './'
          proxy: 'localhost:8000'
        }
      }
    },

    imagemin: {                          // Task
      dynamic: {                         // Another target
        files: [{
          expand: true,                  // Enable dynamic expansion
          src: ['img/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'dist/'                  // Destination path prefix
        }]
      }
    },

    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: [
          'bower_components/jquery/dist/jquery.min.js',
          'js/todo/*.js'
        ],
        dest: 'dist/app.js'
      }
    },
    
    watch: {
      styles: {
        files: ['less/*.less'],
        tasks: ['less:development'],
        options: {
          spawn: false,
        }
      },
      js: {
        files: ['js/todo/*.js','js/todo/**/*.js'],
        tasks: ['concat']
      }
    } 
    
  });

  // Load the plugins.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['less:development', 'concat', 'browserSync', 'watch']);
  grunt.registerTask('production', ['less:production']);
  grunt.registerTask('images', ['imagemin']);
};