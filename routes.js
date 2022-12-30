'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    /* Route menampilkan data (GET) */

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

    /* Route menambahkan data (POST) */

    app.route('/registerFranchisee')
        .post(jsonku.registerFranchisee);

    app.route('/registerFranchisor')
        .post(jsonku.registerFranchisor);

    app.route('/franchisor/:id/tambahPaket')
        .post(jsonku.tambahPaketFranchise);

    app.route('/franchisor/:id/tambahSosialMedia')
        .post(jsonku.tambahSosialMedia);

    app.route('/franchisee/:id/buatPendaftaran')
        .post(jsonku.buatPendaftaranFranchise);

    /* Route mengubah data (PUT) */

    app.route('/franchisee/:id/editData')
        .put(jsonku.editFranchisee);
    
    app.route('/franchisor/:id/editData')
        .put(jsonku.editFranchisor);

    app.route('/franchisor/:id_franchisor/paket/:id_paket/editData')
        .put(jsonku.editPaketFranchise);

    app.route('/franchisor/:id_franchisor/sosmed/:id_sosmed/editData')
        .put(jsonku.editSosialMedia);
}