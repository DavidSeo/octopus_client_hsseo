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

    it('GetNeedRadioBg', (done) => {
        mediaplay.GetNeedRadioBg(mainViewId, (aIsNeed: number) => {
            console.log("GetNeedRadioBg ret : " + aIsNeed);
            should(aIsNeed < 2).ok;
            done();
        });
    });

    it('GetSessionId', (done) => {
        mediaplay.GetSessionId(mainViewId, (aSessionId: number) => {
            console.log("GetSessionId ret : " + aSessionId);
            //should().ok;
            done();
        });
    });

    it('GetRequestId', (done) => {
        mediaplay.GetRequestId(mainViewId, 1, (aRequestId: number) => {
            console.log("GetRequestId (live:1) ret : " + aRequestId);
            //should().ok;
        });
        mediaplay.GetRequestId(mainViewId, 2, (aRequestId: number) => {
            console.log("GetRequestId (pvrpb:2) ret : " + aRequestId);
            //should().ok;
        });
        mediaplay.GetRequestId(mainViewId, 3, (aRequestId: number) => {
            console.log("GetRequestId (tsrpb:3) ret : " + aRequestId);
            //should().ok;
        });
        mediaplay.GetRequestId(mainViewId, 4, (aRequestId: number) => {
            console.log("GetRequestId (mediapb:4) ret : " + aRequestId);
            //should().ok;
        });

        done();
    });

    it('GetStreamAspectRatio', (done) => {
        mediaplay.GetStreamAspectRatio(mainViewId, (aAspectRatio: number) => {
            console.log("GetStreamAspectRatio ret : " + aAspectRatio);
            //should().ok;
            done();
        });
    });

    it('GetMhegDisplayPoint', (done) => {
        mediaplay.GetMhegDisplayPoint(mainViewId, 0, 0, 1024, 768, (scaled: number) => {
            console.log("GetMhegDisplayPoint ret : x: " + scaled[0] + " y: " + scaled[1]);
            //should().ok;
            done();
        });
    });
});
