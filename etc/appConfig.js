const path = require("path");

const sourcePath = 'src';
const testPath = 'test';
const outputPath = 'dist';


module.exports = {
    appName: 'OptInLayer',
    srcPath: sourcePath,
    testPath: testPath,
    junit: {
        title: 'OptInLayer',
        dir: outputPath + '/test-reports'
    },
    templatesPath: 'templates',
    distPath: outputPath,
    globals: {},
    chunks: {
        name: ['polyfills'].reverse()
    },
    indexFiles: [{
        template: path.resolve(sourcePath, 'index.html'),
        chunks: ['app', 'polyfills'],
        chunksSortMode: 'dependency'
    }],
    entry: {
        'app': path.resolve(sourcePath, 'oil.js')
    },
    mangle: {},
    proxy: {},
    title: 'OIL',
    additionalWebpackOptions: false
};
