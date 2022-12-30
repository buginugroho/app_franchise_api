'use strict';

exports.ok = function (values, res) {
    var data = {
        'error': false,
        'status': 200,
        'values': values
    };

    res.json(data);
    res.end();
};

//response untuk nested paket franchise
exports.okPaketNested = function (values, res) {
    const hasil = values.reduce((akumulasiPaket, paket) => {

        if (akumulasiPaket[paket.nama]) {
            const group = akumulasiPaket[paket.nama];

            if (Array.isArray(group.paket_franchise)) {
                group.paket_franchise.push(item.paket_franchise);
            } else {
                group.paket_franchise = [group.paket_franchise, item.paket_franchise];
            }
        } else {
            akumulasiPaket[paket.nama] = paket;
        }
        return akumulasiPaket;
    }, {});

    var data = {
        'error': false,
        'status': 200,
        'values': hasil
    };

    res.json(data);
    res.end();
};