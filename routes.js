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

    app.route('/franchisor/:id/paket')
        .get(jsonku.tampilPaketFranchise);
    
    app.route('/franchisor/:id_franchisor/paket/:id_paket')
        .get(jsonku.tampilPaketFranchiseBerdasarkanId);

    app.route('/franchisor/:id/nested')
        .get(jsonku.tampilNestedFranchise);
}