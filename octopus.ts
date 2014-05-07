/**
 * Created by sungwoo on 14. 4. 3.
 */

/// <reference path="def/node.d.ts" />

var dbus = require('node-dbus');
var newdbus = require('dbus');

var sAddress = 'tcp:host=10.0.12.150,port=55884'
/*
 reval._1 		=	(int32_t)pstSrc->uid;
 reval._2 		=	(int32_t)pstSrc->tsuid;
 reval._3 		=	(int32_t)pstSrc->prvuid;
 reval._4 		=	(int32_t)pstSrc->antuid;

 reval._5 		=	(int32_t)pstSrc->svcid;
 reval._6 		=	(int32_t)pstSrc->tsid;
 reval._7 		=	(int32_t)pstSrc->onid;

 reval._8 		=	(int32_t)pstSrc->lcn;

 reval._9 		=	(uint32_t)pstSrc->svcType;
 reval._10 		=	(uint32_t)pstSrc->deliType;
 reval._11 		=	(uint32_t)pstSrc->casType;

 reval._12 		=	std::string(pstSrc->name);
 reval._13 		=	std::string(pstSrc->satType);
*/


export interface TService {
    uid: number;
    tsuid: number;
    prvuid: number;
    antuid: number;

    svcid: number;
    tsid: number;
    onid: number;

    lcn: number;

    svcType: number;
    deliType: number;
    casType: number;

    name: string;
    satType: string;
}

export interface TNetworkInfo {
    uid: number;
    typeOf: string;
    version: number;
    onid: number;
    name: string;
    deliType: number;
}

export interface TTransponderInfo {
    uid: number;
    typeOf: string;
    version: number;
    netuid: number;
    tsid: number;
    onid: number;
    tunerid: number;
    deliType: number;
    eDeliType: number;
}

export interface TProviderInfo {
    uid: number;
    typeOf: string;
    version: number;
    name: string;
}

export interface TGroupInfo  {
    uid: number;
    typeOf: string;
    version: number;
    id: number;
    name: string;
}

export interface TBouquetInfo {
    uid: number;
    typeOf: string;
    version: number;
    id: number;
    name: string;
}

export interface TChannelLogoInfo {
    svcuid: number;
    ucServerLogoUrl: string;
    ucLocalLogoUrl: string;
}

export interface TSubtitleTrack {
    pid: number;
    componentTag: number;
    type: number;
    typeValue: number;
    componentExtTag: number;
    langCode: string;
}

function convert_service(aDBusData: any): TService {
    var ret: TService = {
        uid: aDBusData[0],
        tsuid: aDBusData[1],
        prvuid: aDBusData[2],
        antuid: aDBusData[3],

        svcid: aDBusData[4],
        tsid: aDBusData[5],
        onid: aDBusData[6],

        lcn: aDBusData[7],

        svcType: aDBusData[8],
        deliType: aDBusData[9],
        casType: aDBusData[10],

        name: aDBusData[11],
        satType: aDBusData[12]
    };
    return ret;
}

function convert_network(aDBusData: any): TNetworkInfo {
    var ret: TNetworkInfo = {
        uid: aDBusData[0],
        typeOf: aDBusData[1],
        version: aDBusData[2],
        onid: aDBusData[3],
        name: aDBusData[4],
        deliType: aDBusData[5]
    };
    return ret;
}

function convert_transponder(aDBusData: any): TTransponderInfo {
    var ret: TTransponderInfo = {
        uid: aDBusData[0],
        typeOf: aDBusData[1],
        version: aDBusData[2],
        netuid: aDBusData[3],
        tsid: aDBusData[4],
        onid: aDBusData[5],
        tunerid: aDBusData[6],
        deliType: aDBusData[7],
        eDeliType: aDBusData[8]
    };
    return ret;
}

function convert_provider(aDBusData: any): TProviderInfo {
    var ret: TProviderInfo = {
        uid: aDBusData[0],
        typeOf: aDBusData[1],
        version: aDBusData[2],
        name: aDBusData[3]
    };
    return ret;
}

function convert_group(aDBusData: any): TGroupInfo {
    var ret: TGroupInfo = {
        uid: aDBusData[0],
        typeOf: aDBusData[1],
        version: aDBusData[2],
        id: aDBusData[3],
        name: aDBusData[4]
    };
    return ret;
}

function convert_bouquet(aDBusData: any): TBouquetInfo {
    var ret: TBouquetInfo = {
        uid: aDBusData[0],
        typeOf: aDBusData[1],
        version: aDBusData[2],
        id: aDBusData[3],
        name: aDBusData[4]
    };
    return ret;
}

function convert_logo(aDBusData: any): TChannelLogoInfo {
    var ret: TChannelLogoInfo = {
        svcuid: aDBusData[0],
        ucServerLogoUrl: aDBusData[1],
        ucLocalLogoUrl: aDBusData[2]
    };
    return ret;
}

function convert_subtitletrack(aDbusData: any): TSubtitleTrack {
    var ret: TSubtitleTrack = {
        pid: aDbusData[0],
        componentTag: aDbusData[1],
        type: aDbusData[2],
        typeValue: aDbusData[3],
        componentExtTag: aDbusData[4],
        langCode: aDbusData[7]
    };
    return ret;
}
export function compare_service(aA: TService, aB: TService): boolean {
    if (aA.uid != aB.uid) {
        return false;
    }
    return true;
}

export class CDBusInterface {
    private _dbusClass;
    private _dbusHandle;
    private _Destination;
    private _Path;

    constructor(aDestination: string, aPath: string) {
        var dbusClass = new newdbus();
        var dbusHandle = dbusClass.getBus('open', sAddress);

        this._dbusHandle = dbusHandle;
        this._dbusClass = dbusClass;
        this._Destination = aDestination;
        this._Path = aPath;
    }

    _call(aCb: Function) {
        this._dbusHandle.getInterface(this._Destination, this._Path, this._Destination, function (err, iface) {
            aCb(iface);
        });
    }
}

export class CMediaPlay extends CDBusInterface {
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

export class CMetaService extends CDBusInterface {
    constructor() {
        super('Octopus.Appkit.Meta.Service', '/Octopus/Appkit/Meta/Service');
    }
    GetService(aUid: number, aCb: (service: TService) => void) {
        this._call( function (iface){
            iface.GetService['finish'] = function(data) {
                aCb(convert_service(data));
            };
            iface.GetService(aUid);
        });
    }

    GetNetwork(aUid: number, aCb: (networkInfo: TNetworkInfo) => void) {
        this._call( function (iface){
            iface.GetNetwork['finish'] = function(data) {
                aCb(convert_network(data));
            };
            iface.GetNetwork(aUid);
        });
    }
    GetTransponder(aUid: number, aCb: (transponderInfo: TTransponderInfo) => void) {
        this._call( function (iface){
            iface.GetTransponder['finish'] = function(data) {
                aCb(convert_transponder(data));
            };
            iface.GetTransponder(aUid);
        });
    }
    GetProvider(aUid: number, aCb: (providerInfo: TProviderInfo) => void) {
        this._call( function (iface){
            iface.GetProvider['finish'] = function(data) {
                aCb(convert_provider(data));
            };
            iface.GetProvider(aUid);
        });
    }
    GetGroup(aUid: number, aCb: (groupInfo: TGroupInfo) => void) {
        this._call( function (iface){
            iface.GetGroup['finish'] = function(data) {
                aCb(convert_group(data));
            };
            iface.GetGroup(aUid);
        });
    }
    GetBouquet(aUid: number, aCb: (bouquetInfo: TBouquetInfo) => void) {
        this._call( function (iface){
            iface.GetBouquet['finish'] = function(data) {
                aCb(convert_bouquet(data));
            };
            iface.GetBouquet(aUid);
        });
    }

    GetLogoUrl(aUid: number, aBufChannelLogoInfo: any, aCb: (channelLogoInfo: TChannelLogoInfo) => void) {
        this._call( function (iface){
            iface.GetLogoUrl['finish'] = function(data) {
                //aCb(convert_logoUrl(data));
            };
            iface.GetLogoUrl(aUid);
        });
    }

    GetServiceTriplet(aUid: number, aTsid: number, aOnid: number, aSid: number, aCb: (triplet: any) => void) {

    }
    FindServiceByTriplet(aOnId: number, aTsId: number, aSvcid: number, aCb:(service: TService) => void) {

    }
    FindServiceByNumber(aNumber: number, aCb: (service: TService) => void) {

    }

    GetServiceList(aCb: (serviceList: TService[]) => void) {
        this._call( function (iface){
            iface.GetServiceList['finish'] = function(data) {
                console.log(data);
                var serviceList = [];
                data.forEach((s) => {
                    serviceList.push(convert_service(s));
                });
                aCb(serviceList);
            };
            iface.GetServiceList();
        });
    }
/*
    GetGroupList(aCb: (groupList: TGroupInfo[]) => void) {
        this._call('GetGroupList', '', (data) => {
            var groupList = [];
            data.forEach((g) => {
                groupList.push(convert_group(g));
            });
            aCb(groupList);
        })
    }
*/
    Load() {

    }
    Save() {

    }
    SetService(aService: TService) {

    }
    AddService(aService: TService) {

    }
    RemoveService(aService: TService) {

    }
    Reset() {

    }
    LoadPreferredList() {

    }
    LoadupdatedList() {

    }
    ChangeUpdateFlag() {

    }
    RemoveServiceWithFlag() {

    }
}
