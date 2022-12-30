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

    app.route('/franchisor/:id/sosmed')
        .get(jsonku.tampilSosialMedia);
    
    app.route('/franchisor/:id_franchisor/sosmed/:id_sosmed')
        .get(jsonku.tampilSosialMediaBerdasarkanId);

    app.route('/franchisor/:id/pendaftaran')
        .get(jsonku.tampilPendaftaranFranchisor);
    
    app.route('/franchisor/:id_franchisor/pendaftaran/:id_pendaftaran')
        .get(jsonku.tampilPendaftaranFranchisorBerdasarkanId);

    app.route('/franchisee/:id/pendaftaran')
        .get(jsonku.tampilPendaftaranFranchisee);
    
    app.route('/franchisee/:id_franchisee/pendaftaran/:id_pendaftaran')
        .get(jsonku.tampilPendaftaranFranchiseeBerdasarkanId);
}