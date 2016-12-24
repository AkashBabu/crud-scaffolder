#!/usr/bin/env node














var program = require('commander');
var fsj = require('fs-jetpack');
var S = require('string');
 
var crudNam;

program 
    .arguments('<crudName>', 'Name of the folder for Crud')
    .action(function(crudName){
        crudNam = crudName
    })

program.parse(process.argv)

if(!crudNam){
    console.log('Please provide a name for Crud Folder');
    process.exit(1);
}

if(fsj.exists(crudNam)){
    console.log('file/dir with the given name exists');
    process.exit(1);
}

fsj.dir('./' + crudNam, {empty: true});

var capFileName = S(crudNam).camelize().s;
var mainFileContent = `module.exports = {
    create: (require('./create')),
    get: (require('./get')),
    list: (require('./list')),
    update: (require('./update')),
    remove: (require('./remove')),
}

`
var crudFileContent = `
module.exports = function(req, res){

}

` 

var dirName = './' + crudNam + '/';

fsj
    .file(dirName + 'create.js', {content: crudFileContent})
    .file(dirName + 'get.js', {content: crudFileContent})
    .file(dirName + 'list.js', {content: crudFileContent})
    .file(dirName + 'update.js', {content: crudFileContent})
    .file(dirName + 'remove.js', {content: crudFileContent})
    .file(dirName + capFileName + '.js', {content: mainFileContent})
console.log('Crud folder created successfully');

process.exit(1);