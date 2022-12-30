'use strict';

exports.ok = function(values, res){
    var data = {
        'status':200,
        'error':false,
        'values':values
    };

     res.json(data);
     res.end();
};