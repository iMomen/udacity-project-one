module.exports = function (grunt) {

    grunt.initConfig({
        responsive_images: {
            myTask: {
                options: {
                    engine: 'im',
                    sizes: [
                        {
                            width: 600,
                            suffix: '_sm',
                            quality: 75
                        },
                        {
                            width: 900,
                            suffix: '_md',
                            quality: 75
                        }
                    ]
                },

                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png,jpeg}'],
                    cwd: 'images/',
                    custom_dest: 'images/{%= width %}'
}]
            }
        },


    });

    grunt.loadNpmTasks('grunt-responsive-images');

    grunt.registerTask('default', ['responsive_images']);
};