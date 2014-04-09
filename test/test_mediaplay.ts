/**
 * Created by hsseo on 14. 4. 9.
 */

/// <reference path="../def/node.d.ts" />
/// <reference path="../def/mocha.d.ts" />
/// <reference path="../def/async.d.ts" />
/// <reference path="../def/should.d.ts" />

import octopus = require('../octopus');
var should = require('should');


describe('CMediaPlay', function() {

    var mediaplay: octopus.CMediaPlay;
    before((done) => {
        mediaplay = new octopus.CMediaPlay();
        console.log('fixture set up');
    });

    it('GetViewNumber', (done) => {
        mediaplay.GetViewNumber((aViewNum: number) => {
            console.log(aViewNum);
            should(aViewNum == 1).ok;
            done();
        });
    });

});
