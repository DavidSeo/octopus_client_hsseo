/**
 * Created by hsseo on 14. 5. 12.
 */

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
module TDATA
{

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

    export interface TGroupInfo {
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

    export interface TAntennaInfo {
        uid : number;
        satType : string;
        satName : string;
        antType : number;
        extInfo : ArrayBuffer;
    }

    export interface TEvent {
        type : number;
        refCount : number;
        uid : number;
        svcuid : number;
        onid : number;
        tsid : number;
        svcid : number;
        eventid : number;
        startTime : number;
        duration : number;
        runStatus : number;
        freeCaMode : number;
        language : number;
        name : string;
        text : string;
        parentalRating : number;
    }

    export function convert_event(aDBusData:any):TEvent {
        var ret:TEvent = {
            type : aDBusData[0][0],
            refCount : aDBusData[0][1],
            uid : aDBusData[0][2],
            svcuid : aDBusData[0][3],
            onid : aDBusData[0][4],
            tsid : aDBusData[0][5],
            svcid : aDBusData[0][6],
            eventid : aDBusData[0][7],
            startTime : aDBusData[0][8],
            duration : aDBusData[0][9],
            runStatus : aDBusData[0][10],
            freeCaMode : aDBusData[0][11],
            language : aDBusData[1][0],
            name : aDBusData[2][1],
            text : aDBusData[3][2],
            parentalRating : aDBusData[4][3]
        };
        return ret;
    }
    export function convert_antennainfo(aDBusData:any):TAntennaInfo {
        var ret:TAntennaInfo = {
            uid: aDBusData[0],
            satType: aDBusData[1],
            satName: aDBusData[2],
            antType: aDBusData[3],
            extInfo: aDBusData[4]
        };
        return ret;
    }

    export function convert_service(aDBusData:any):TService {
        var ret:TService = {
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

    export function convert_network(aDBusData:any):TNetworkInfo {
        var ret:TNetworkInfo = {
            uid: aDBusData[0],
            typeOf: aDBusData[1],
            version: aDBusData[2],
            onid: aDBusData[3],
            name: aDBusData[4],
            deliType: aDBusData[5]
        };
        return ret;
    }

    export function convert_transponder(aDBusData:any):TTransponderInfo {
        var ret:TTransponderInfo = {
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

    export function convert_provider(aDBusData:any):TProviderInfo {
        var ret:TProviderInfo = {
            uid: aDBusData[0],
            typeOf: aDBusData[1],
            version: aDBusData[2],
            name: aDBusData[3]
        };
        return ret;
    }

    export function convert_group(aDBusData:any):TGroupInfo {
        var ret:TGroupInfo = {
            uid: aDBusData[0],
            typeOf: aDBusData[1],
            version: aDBusData[2],
            id: aDBusData[3],
            name: aDBusData[4]
        };
        return ret;
    }

    export function convert_bouquet(aDBusData:any):TBouquetInfo {
        var ret:TBouquetInfo = {
            uid: aDBusData[0],
            typeOf: aDBusData[1],
            version: aDBusData[2],
            id: aDBusData[3],
            name: aDBusData[4]
        };
        return ret;
    }

    export function convert_logo(aDBusData:any):TChannelLogoInfo {
        var ret:TChannelLogoInfo = {
            svcuid: aDBusData[0],
            ucServerLogoUrl: aDBusData[1],
            ucLocalLogoUrl: aDBusData[2]
        };
        return ret;
    }

    export function convert_subtitletrack(aDbusData:any):TSubtitleTrack {
        var ret:TSubtitleTrack = {
            pid: aDbusData[0],
            componentTag: aDbusData[1],
            type: aDbusData[2],
            typeValue: aDbusData[3],
            componentExtTag: aDbusData[4],
            langCode: aDbusData[7]
        };
        return ret;
    }

    /*
     export function compare_service(aA: TService, aB: TService): boolean {
     if (aA.uid != aB.uid) {
     return false;
     }
     return true;
     }
     */
}

export = TDATA;