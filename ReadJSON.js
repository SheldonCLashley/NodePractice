const jsonfile = require('jsonfile');
const _ = require('lodash');
const file = 'data.json'

jsonfile.readFile(file, function (err, obj) {
    _.forEach(obj, function(value){
        console.log(value);
    });
})