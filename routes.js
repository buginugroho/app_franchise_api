'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/franchisor')
        .get(jsonku.tampilSemuaFranchise);
    
    app.route('/franchisor/:id')
        .get(jsonku.tampilFranchiseBerdasarkanId);

    app.route('/franchisee/:id')
        .get(jsonku.tampilPenggunaBerdasarkanId);
}