module.exports = function(grunt) {
	grunt.initConfig({
		// running `grunt less` will compile once
		less: {
			development: {
				options: {
					paths: ["less"],
					yuicompress: true
				},
				files: {
					"css/main.css": "less/main.less"
				}
			}
		},
		// running `grunt watch` will watch for changes
		watch: {
			files: "less/**/*.less",
			tasks: ["less"]
		}
	});
	grunt.registerTask('default', 'watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
};
