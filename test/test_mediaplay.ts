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
    var viewCount = 0;
    var mainViewId = 0;
    before((done) => {
        mediaplay = new octopus.CMediaPlay();
        console.log('fixture set up : mediaPlay');
        done();
    });

    it('GetViewNumber', (done) => {
        mediaplay.GetViewNumber((aViewNum: number) => {
            console.log("viewCount : " + aViewNum);
            should(aViewNum > 0).ok;
            viewCount = aViewNum;
            done();
        });
    });

    it('GetMainViewId', (done) => {
        mediaplay.GetMainViewId((aViewId: number) => {
            console.log("mainViewId : " + aViewId);
            should(aViewId < viewCount).ok;
            mainViewId = aViewId;
            done();
        });
    });

    it('GetPlayType', (done) => {
        mediaplay.GetPlayType(mainViewId, (aMediaType: number) => {
            console.log("mainView MediaType : " + aMediaType);
            should(aMediaType < 5).ok;
            done();
        });
    });

});
