/**
 * Created by sungwoo on 14. 4. 3.
 */

/// <reference path="def/node.d.ts" />

var dbus = require('node-dbus');
var newdbus = require('dbus');

var sAddress = 'tcp:host=192.168.123.9,port=55884'
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

function convert_number(aDBusData: any): number {
    var ret: number = aDBusData;
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
        var dbusHandle = dbusClass.getBus('open', 'tcp:host=192.168.123.9,port=55884');

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
    public _iface;
    constructor() {
        super('Octopus.Appkit.Media.Play', '/Octopus/Appkit/Media/Play');
    }

    GetViewNumber(aCb: (aViewNum: number) => void) {
        this._call( function (iface){
            iface.GetMainViewId['finish'] = function(viewNumber: number) {
                aCb(viewNumber);
            };
            iface.GetMainViewId();
        });
    }
}











































/*
export class CDBusInterface {
    private _dbusMsg;
    private _onResponseCb: Function;
    constructor(aDestination: string, aPath: string) {
        var dbusMsg = Object.create(dbus.DBusMessage, {
            address: {
                value: sAddress
            },
            destination: {
                value: aDestination
            },
            path: {
                value: aPath
            },
            iface: {
                value: aDestination
            },
            member: {
                value: 'GetServiceList',
                //value: 'Properties',
                writable: true
            },
            bus: {
                value: dbus.DBUS_BUS_SESSION
            },
            type: {
                value: dbus.DBUS_MESSAGE_TYPE_METHOD_RETURN, // dbus.DBUS_MESSAGE_TYPE_METHOD_RETURN,
                writable: true
            }
        });
        dbusMsg.on ("methodResponse", (data) => {
            if (this._onResponseCb) {
                this._onResponseCb(data);
            }
        });

        dbusMsg.on ("error", function (error) {
            console.log ("[FAILED] ERROR -- ");
            console.log(error);
        });

        this._dbusMsg = dbusMsg;
    }
    _onResponse(aCb: (aData: any) => void) {
        this._onResponseCb = aCb;
    }

    _call(aName: string, aType: string, ...aArgs: any[]) {
        var callback = aArgs.pop();
        this._onResponse(callback);

        if (aType.length) {
            var args = [aType].concat(aArgs);
            this._dbusMsg.appendArgs.apply(this._dbusMsg, args);
        }
        else{
            this._dbusMsg.clearArgs();
        }

        this._dbusMsg.member = aName;
        this._dbusMsg.send();
    }
}


export class CMediaPlay extends CDBusInterface {
    constructor() {
        super('Octopus.Appkit.Media.Play', '/Octopus/Appkit/Media/Play');
    }
    GetViewNumber(aCb: (aViewNum: number) => void) {
        this._call('GetViewNumber', '', (data: any) => {
            aCb(convert_number(data));
        });
    }
    GetMainViewId(aCb: (aViewId: number) => void) {
        this._call('GetMainViewId', '', (data: any) => {
            aCb(convert_number(data));
        });
    }
    GetPlayType(aViewId: number, aCb: (aPlayType: number) => void) {
        this._call('GetPlayType', 'u', aViewId, (data: any) => {
            aCb(convert_number(data));
        });
    }
    GetNeedRadioBg(aViewId: number, aCb: (aIsNeed: number) => void) {
        this._call('GetNeedRadioBg', 'u', aViewId, (data: any) => {
            aCb(convert_number(data));
        });
    }
    GetSessionId(aViewId: number, aCb: (aSessionId: number) => void) {
        this._call('GetSessionId', 'u', aViewId, (data: any) => {
             aCb(convert_number(data));
        });
    }

    GetRequestId(aViewId: number, aPlayType: number, aCb: (aRequestId: number) => void) {
        this._call('GetRequestId', 'uu', aViewId, aPlayType, (data: any) => {
            aCb(convert_number(data));
        });
    }

    GetStreamAspectRatio(aViewId: number, aCb: (aAspectRatio: number) => void) {
        this._call('GetStreamAspectRatio', 'u', aViewId, (data: any) => {
            aCb(convert_number(data));
        });
    }

    GetMhegDisplayPoint(aViewId: number, aRefWidth: number, aRefHeight: number, aVideoPointX: number, aVideoPointY: number, aCb: (scaledX: number, scaledY: number) => void) {
        this._call('GetMhegDisplayPoint', 'uiiii', aViewId, aRefWidth, aRefHeight, aVideoPointX, aVideoPointY, (data: any) => {
            aCb(convert_number(data[0]), convert_number(data[1]));
        });
    }

    GetComponentNum(aViewId: number, aCompType: number, aCb: (aCompCount: number) => void) {
        this._call('GetComponentNum', 'uu', aViewId, aCompType, (data: any) => {
            aCb(convert_number(data));
        });
    }

    GetSubtitleComponent(aViewId: number, aCompIndex: number, aCb: (aComponet: TSubtitleTrack) => void) {
        this._call('GetSubtitleComponent', 'ui', aViewId, aCompIndex, (data: any) => {
            aCb(convert_subtitletrack(data));
        });
    }
    GetComponentIndex(aViewId: number, aCompType: number, aCb: (aCompIndex: number) => void) {
        this._call('GetComponentIndex', 'uu', aViewId, aCompType, (data: any) => {
            aCb(convert_number(data));
        });
    }
    GetPlaySpeed(aViewId: number, aCb: (aSpeed: number) => void) {
        this._call('GetPlaySpeed', 'u', aViewId, (data: any) => {
            aCb(convert_number(data));
        });
    }
    GetPlayPosition(aViewId: number, aCb: (aPosition: number) => void) {
        this._call('GetPlayPosition', 'u', aViewId, (data: any) => {
            aCb(convert_number(data));
        });
    }
    GetPlayState(aViewId: number, aCb: (aState: number) => void) {
        this._call('GetPlayState', 'u', aViewId, (data: any) => {
            aCb(convert_number(data));
        });
    }
    GetPlayError(aViewId: number, aCb: (aState: number) => void) {
        this._call('GetPlayError', 'u', aViewId, (data: any) => {
            aCb(convert_number(data));
        });
    }
    GetBufferedTime(aViewId: number, aCb: (aBufferred: number) => void) {
        this._call('GetBufferedTime', 'u', aViewId, (data: any) => {
            aCb(convert_number(data));
        });
    }
    GetDurationTime(aViewId: number, aCb: (aDurationTime: number) => void) {
        this._call('GetDurationTime', 'u', aViewId, (data: any) => {
            aCb(convert_number(data));
        });
    }
    GetTsrStartTime(aViewId: number, aCb: (aTstStartTime: number) => void) {
        this._call('GetTsrStartTime', 'u', aViewId, (data: any) => {
            aCb(convert_number(data));
        });
    }

    GetSupportedSpeeds(aViewId: number, aCb: (a: number) => void) {
        this._call('GetSupportedSpeeds', 'u', aViewId, (data: any) => {
            aCb(data);
        });
    }

    GetTrickRestrictMode(aViewId: number, aCb: (aTrickRestrictMode: number) => void) {
        this._call('GetTrickRestrictMode', 'u', aViewId, (data: any) => {
            aCb(convert_number(data));
        });
    }

    GetVideoSize(aViewId: number, aCb: (startX: number, startY: number, width: number, height: number) => void) {
        this._call('GetVideoSize', 'u', aViewId, (data1: any, data2: any, data3: any, data4: any) => {
            aCb(data1, data2, data3, data4);
        });
    }

    GetTSREnable(aCb: (aIsTSR: number) => void) {
        this._call('GetTSREnable', '', (data: any) => {
            aCb(convert_number(data));
        });
    }

    GetSubtitleEnable(aViewId: number, aCb: (aIsSubtitle: number) => void) {
        this._call('GetSubtitleEnable', 'u', aViewId, (data: any) => {
            aCb(convert_number(data));
        });
    }

    StartLive(aViewId: number, aLiveType: number, aMasterSvcUid: number, aSuppleSvcUid: number, aSuppSvcType: number, aMajorCHNum: number, aCb: (aSessionId: number) => void) {

        this._call('StartLive', "u(iiiii)", aViewId, aLiveType, aMasterSvcUid, aSuppleSvcUid, aSuppSvcType, aMajorCHNum, (data: any) => {
            aCb(convert_number(data));
        });

        var dbushandle = new newdbus();
        var bus = dbushandle.getBus('open', 'tcp:host=192.168.123.9,port=55884');
        bus.getInterface('Octopus.Appkit.Media.Play', '/Octopus/Appkit/Media/Play', 'Octopus.Appkit.Media.Play', function(err, iface) {

            iface.StartLive['finish'] = function(aSessionId: number) {
                aCb(aSessionId);
                console.log('SessionId ' + aSessionId);
            };

            iface.StartLive(0,[1,2,3,4,5]);
        });
    }
}
*/


/*
export class CMetaService extends CDBusInterface {
    constructor() {
        super('Octopus.Appkit.Meta.Service', '/Octopus/Appkit/Meta/Service');
    }
    GetService(aUid: number, aCb: (service: TService) => void) {
        this._call('GetService', 'i', aUid, (data: any) => {
            aCb(convert_service(data));
        });
    }
    GetNetwork(aUid: number, aCb: (networkInfo: TNetworkInfo) => void) {
        this._call('GetNetwork', 'i', aUid, (data: any) => {
            aCb(convert_network(data));
        });
    }
    GetTransponder(aUid: number, aCb: (transponderInfo: TTransponderInfo) => void) {
        this._call('GetTransponder', 'i', aUid, (data: any) => {
            aCb(convert_transponder(data));
        });
    }
    GetProvider(aUid: number, aCb: (providerInfo: TProviderInfo) => void) {
        this._call('GetProvider', 'i', aUid, (data: any) => {
            aCb(convert_provider(data));
        });
    }
    GetGroup(aUid: number, aCb: (groupInfo: TGroupInfo) => void) {
        this._call('GetGroup', 'i', aUid, (data: any) => {
            aCb(convert_group(data));
        });
    }
    GetBouquet(aUid: number, aCb: (bouquetInfo: TBouquetInfo) => void) {
        this._call('GetBouquet', 'i', aUid, (data: any) => {
            aCb(convert_bouquet(data));
        });
    }
    GetLogoUrl(aUid: number, aBufChannelLogoInfo: any, aCb: (channelLogoInfo: TChannelLogoInfo) => void) {
        this._call('GetLogoUrl', 'i', aUid, (data: any) => {
            aCb(convert_logo(data));
        });
    }
    GetServiceTriplet(aUid: number, aTsid: number, aOnid: number, aSid: number, aCb: (triplet: any) => void) {

    }
    FindServiceByTriplet(aOnId: number, aTsId: number, aSvcid: number, aCb:(service: TService) => void) {

    }
    FindServiceByNumber(aNumber: number, aCb: (service: TService) => void) {

    }
    GetServiceList(aCb: (serviceList: TService[]) => void) {
        this._call('GetServiceList', '', (data) => {
            var serviceList = [];
            data.forEach((s) => {
                serviceList.push(convert_service(s));
            });
            aCb(serviceList);
        });
    }
    GetGroupList(aCb: (groupList: TGroupInfo[]) => void) {
        this._call('GetGroupList', '', (data) => {
            var groupList = [];
            data.forEach((g) => {
                groupList.push(convert_group(g));
            });
            aCb(groupList);
        })
    }
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
*/
export function set_config(aConnectionConfig: string) {
    sAddress = aConnectionConfig;
}
