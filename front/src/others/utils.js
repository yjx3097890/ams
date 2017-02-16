'use strict';
const path = require('path');
const fs = require('fs');
const _root = path.resolve(__dirname, '../../../');

exports.absolutePath = function (src) {
    return path.join(_root, src);
};

exports.getEntries = function (){
    const entryDir = module.exports.absolutePath('front/src/entries');
    return fs.readdirSync(entryDir)
        .map(function(file) {
            let dir = path.join(entryDir, file);
            if (fs.statSync(dir).isDirectory()) {
                return require(path.join(dir, 'webpack.js'));
            }
        });
};
