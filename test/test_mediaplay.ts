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
    var viewCount = 2;
    var mainViewId = 0;
    before((done) => {
        mediaplay = new octopus.CMediaPlay();
        setTimeout(() => {
            console.log('fixture set up : mediaPlay');
            done();
        }, 500);
    });

    it('GetViewNumber', (done) => {
        mediaplay.GetViewNumber((aViewNum:number) => {
            console.log("viewCount : " + aViewNum);
            should(aViewNum > 0).ok;
            viewCount = aViewNum;
            setTimeout(function () {
                done();
            }, 500);
        });

    });

    it('GetMainViewId', (done) => {
        mediaplay.GetMainViewId((aViewId:number) => {
            console.log("mainViewId : " + aViewId);
            should(aViewId < viewCount).ok;
            mainViewId = aViewId;
            setTimeout(function () {
                done();
            }, 500);
        });
    });

    it('GetPlayType', (done) => {
        mediaplay.GetPlayType(mainViewId, (aMediaType:number) => {
            console.log("mainView MediaType : " + aMediaType);
            should(aMediaType < 5).ok;
            setTimeout(function () {
                done();
            }, 500);
        });
    });

    it('GetNeedRadioBg', (done) => {
        mediaplay.GetNeedRadioBg(mainViewId, (aIsNeed:number) => {
            console.log("GetNeedRadioBg ret : " + aIsNeed);
            should(aIsNeed < 2).ok;
            setTimeout(function () {
                done();
            }, 500);
        });
    });

    it('GetSessionId', (done) => {
        mediaplay.GetSessionId(mainViewId, (aSessionId:number) => {
            console.log("GetSessionId ret : " + aSessionId);
            setTimeout(function () {
                done();
            }, 500);
        });
    });

    it('GetRequestId', (done) => {
        mediaplay.GetRequestId(mainViewId, 1, (aRequestId: number) => {
            console.log("GetRequestId (live:1) ret : " + aRequestId);
            setTimeout(function () {
                done();
            }, 500);
        });
    });

    it('GetStreamAspectRatio', (done) => {
        mediaplay.GetStreamAspectRatio(mainViewId, (aAspectRatio: number) => {
            console.log("GetStreamAspectRatio ret : " + aAspectRatio);
            setTimeout(function () {
                done();
            }, 500);

        });
    });

    it('GetMhegDisplayPoint', (done) => {
        mediaplay.GetMhegDisplayPoint(mainViewId, 0, 0, 1024, 768, (scaled: number) => {
            console.log("GetMhegDisplayPoint ret : x: " + scaled[0] + " y: " + scaled[1]);
            //should().ok;
            setTimeout(function () {
                done();
            }, 500);

        });
    });

    it('GetComponentNum', (done) => {
        mediaplay.GetComponentNum(mainViewId, 3, (aCompCount: number) => {
            console.log("GetComponentNum (3:subtitle)ret : " + aCompCount);
            //should().ok;
            setTimeout(function () {
                done();
            }, 500);

        });
    });

    it('GetSubtitleComponent', (done) => {
        mediaplay.GetSubtitleComponent(mainViewId, 0, (aComponet: octopus.TSubtitleTrack) => {
            console.log("GetSubtitleComponent ret : " + aComponet.pid); // iiyiiiis
            //should().ok;
            setTimeout(function () {
                done();
            }, 500);

        });
    });

    it('GetComponentIndex', (done) => {
        mediaplay.GetComponentIndex(mainViewId, 1, (aCompIndex: number) => {
            console.log("GetComponentIndex (1:video) ret : " + aCompIndex);
            //should().ok;
            setTimeout(function () {
                done();
            }, 500);

        });
    });

    it('GetPlaySpeed', (done) => {
        mediaplay.GetPlaySpeed(mainViewId, (aSpeed: number) => {
            console.log("GetPlaySpeed ret : " + aSpeed);
            //should().ok;
            setTimeout(function () {
                done();
            }, 500);

        });
    });

    it('GetPlayPosition', (done) => {
        mediaplay.GetPlayPosition(mainViewId, (aPosition: number) => {
            console.log("GetPlayPosition ret : " + aPosition);
            //should().ok;
            setTimeout(function () {
                done();
            }, 500);

        });
    });

    it('GetPlayError', (done) => {
        mediaplay.GetPlayError(mainViewId, (aError: number) => {
            console.log("GetPlayError ret : " + aError);
            //should().ok;
            setTimeout(function () {
                done();
            }, 500);

        });
    });

    it('GetBufferedTime', (done) => {
        mediaplay.GetBufferedTime(mainViewId, (aBufferred: number) => {
            console.log("GetBufferedTime ret : " + aBufferred);
            //should().ok;
            setTimeout(function () {
                done();
            }, 500);

        });
    });

    it('GetDurationTime', (done) => {
        mediaplay.GetDurationTime(mainViewId, (aDurationTime: number) => {
            console.log("GetDurationTime ret : " + aDurationTime);
            //should().ok;
            setTimeout(function () {
                done();
            }, 500);

        });
    });

    it('GetTsrStartTime', (done) => {
        mediaplay.GetTsrStartTime(mainViewId, (aTstStartTime: number) => {
            console.log("GetTsrStartTime ret : " + aTstStartTime);
            //should().ok;
            setTimeout(function () {
                done();
            }, 500);

        });
    });

    it('GetTrickRestrictMode', (done) => {
        mediaplay.GetTrickRestrictMode(mainViewId, (aTrickRestrictMode: number) => {
            console.log("GetTrickRestrictMode ret : " + aTrickRestrictMode);
            //should().ok;
            setTimeout(function () {
                done();
            }, 500);

        });
    });

    it('GetVideoSize', (done) => {
        mediaplay.GetVideoSize(mainViewId, (aSize: number) => {
            console.log("GetVideoSize ret : " + aSize[0]);
            //should().ok;
            setTimeout(function () {
                done();
            }, 500);

        });
    });

    it('GetTSREnable', (done) => {
        mediaplay.GetTSREnable((aIsTSR: number) => {
            console.log("GetTSREnable ret : " + aIsTSR);
            //should().ok;
            setTimeout(function () {
                done();
            }, 500);

        });
    });

    it('GetSubtitleEnable', (done) => {
        mediaplay.GetSubtitleEnable(mainViewId, (aIsSubtitle: number) => {
            console.log("GetSubtitleEnable ret : " + aIsSubtitle);
            //should().ok;
            setTimeout(function () {
                done();
            }, 500);

        });
    });

});
