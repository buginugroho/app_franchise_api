'use strict';

exports.ok = function(values, res){
    var data = {
        'error':false,
        'status':200,
        'values':values
    };

     res.json(data);
     res.end();
};