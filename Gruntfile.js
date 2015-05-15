module.exports = function(grunt) {
	grunt.initConfig({
		copy: {
			projeto: {
				expand: true,
				cwd: 'loja',
				src: '**',
				dest: 'dist'
			}
		},
		
		clean: ['dist']
	});
	
	grunt.registerTask('default', ['clean','copy']);
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
}