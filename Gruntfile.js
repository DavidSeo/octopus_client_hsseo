
module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-typescript-export');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        typescript: {
            base: {
                src: ['octopus.ts'],
                //dest: 'js/PixelVisionJSDemos.js',
                options: {
                    module: 'commonjs',
                    declaration: true
                }
            }
        },
        typescript_export: {
            your_target: {
                src: ['octopus.d.ts'],
                dest: 'octopus-client.d.ts'
            }
        }
    });
}
