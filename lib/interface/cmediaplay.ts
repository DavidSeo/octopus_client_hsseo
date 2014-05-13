/**
 * Created by hsseo on 14. 5. 12.
 */

/// <reference path="../../def/node.d.ts" />


import tdata = require('./tdata');

import dbusConn = require('../util/dbus_connect');



class CMediaPlay extends dbusConn.CDBusInterface {
    constructor() {
        super('Octopus.Appkit.Media.Play', '/Octopus/Appkit/Media/Play');
    }

    GetViewNumber(aCb: (aViewNum: number) => void) {
        this._call( function (iface){
            iface.GetViewNumber['finish'] = function(aViewNum: number) {
                aCb(aViewNum);
            };
            iface.GetViewNumber();
        });
    }

    SetMainViewId(aViewId: number, aCb: () => void) {
        this._call( function (iface){
            iface.SetMainViewId['finish'] = function() {
                aCb();
            };
            iface.SetMainViewId(aViewId);
        });
    }

    GetMainViewId(aCb: (aViewId: number) => void) {
        this._call( function (iface){
            iface.GetMainViewId['finish'] = function(aViewId: number) {
                aCb(aViewId);
            };
            iface.GetMainViewId();
        });
    }

    GetPlayType(aViewId: number, aCb: (aPlayType: number) => void) {
        this._call( function (iface){
            iface.GetPlayType['finish'] = function(aPlayType: number) {
                aCb(aPlayType);
            };
            iface.GetPlayType(aViewId);
        });
    }

    GetNeedRadioBg(aViewId: number, aCb: (aIsNeed: number) => void) {
        this._call( function (iface){
            iface.GetNeedRadioBg['finish'] = function(aIsNeed: number) {
                aCb(aIsNeed);
            };
            iface.GetNeedRadioBg(aViewId);
        });
    }

    GetSessionId(aViewId: number, aCb: (aSessionId: number) => void) {
        this._call( function (iface){
            iface.GetSessionId['finish'] = function(aSessionId: number) {
                aCb(aSessionId);
            };
            iface.GetSessionId(aViewId);
        });
    }

    GetRequestId(aViewId: number, aPlaytype: number, aCb: (aRequestId: number) => void) {
        this._call( function (iface){
            iface.GetRequestId['finish'] = function(aRequestId: number) {
                aCb(aRequestId);
            };
            iface.GetRequestId(aViewId, aPlaytype);
        });
    }

    GetStreamAspectRatio(aViewId: number, aCb: (aAspectRatio: number) => void) {
        this._call( function (iface){
            iface.GetStreamAspectRatio['finish'] = function(aAspectRatio: number) {
                aCb(aAspectRatio);
            };
            iface.GetStreamAspectRatio(aViewId);
        });
    }

    GetMhegDisplayPoint(aViewId: number, aRefWidth: number, aRefHeight:number, aVideoPointX: number, aVideoPointY: number, aCb: (aScaledSizeW: number, aScaledSizeH: number) => void) {
        this._call( function (iface){
            iface.GetMhegDisplayPoint['finish'] = function(aScaledSize: any) {
                console.log(aScaledSize)
                aCb(aScaledSize[0], aScaledSize[1]);
            };
            iface.GetMhegDisplayPoint(aViewId, aRefWidth, aRefHeight, aVideoPointX, aVideoPointY);
        });
    }
}

export = CMediaPlay