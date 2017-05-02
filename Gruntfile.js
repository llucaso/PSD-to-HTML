module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  	sass: {
  		options: {
  			sourceMap: true
  		},
  		dist: {
  			files: {
  				'css/style.css': 'sass/style.sass'
  			}
  		}
  	},

    browserSync: {
            bsFiles: {
                src: ['style/*.css', 'index.html']
            },
            options: {
                server: {
                    baseDir: "./"
          }
      }
    },

  watch: {
    scripts: {
        files: ['sass/*.sass'],
        tasks: ['sass'],
        options: {
            spawn: false,
        },
    } 
  },


  });
  // Load the plugins tasks 
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  
  grunt.registerTask('default', ['sass', 'watch']);
  grunt.registerTask('sync', ['browserSync']);
};