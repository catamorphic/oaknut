module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-notify');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        typescript: {
            base: {
                src: ['**/*.ts'],
                dest: 'target/',
                options: {
                    module: 'commonjs',
                    target: 'es5'
                }
            }
        },
        clean: ['target/oaknut.js'],
        watch: {
            files: '**/*.ts',
            tasks: ['typescript']
        }
    });
 
    grunt.registerTask('default', ['typescript']);
 
}