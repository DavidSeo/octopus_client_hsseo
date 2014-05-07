/// <reference path="def/node.d.ts" />

declare module "octopus-client" {

// octopus.d.ts
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
export function compare_service(aA: TService, aB: TService): boolean;
export class CDBusInterface {
    private _dbusClass;
    private _dbusHandle;
    private _Destination;
    private _Path;
    constructor(aDestination: string, aPath: string);
    public _call(aCb: Function): void;
}
export class CMediaPlay extends CDBusInterface {
    constructor();
    public GetViewNumber(aCb: (aViewNum: number) => void): void;
    public SetMainViewId(aViewId: number, aCb: () => void): void;
    public GetMainViewId(aCb: (aViewId: number) => void): void;
    public GetPlayType(aViewId: number, aCb: (aPlayType: number) => void): void;
    public GetNeedRadioBg(aViewId: number, aCb: (aIsNeed: number) => void): void;
    public GetSessionId(aViewId: number, aCb: (aSessionId: number) => void): void;
    public GetRequestId(aViewId: number, aPlaytype: number, aCb: (aRequestId: number) => void): void;
    public GetStreamAspectRatio(aViewId: number, aCb: (aAspectRatio: number) => void): void;
    public GetMhegDisplayPoint(aViewId: number, aRefWidth: number, aRefHeight: number, aVideoPointX: number, aVideoPointY: number, aCb: (aScaledSizeW: number, aScaledSizeH: number) => void): void;
}
export class CMetaService extends CDBusInterface {
    constructor();
    public GetService(aUid: number, aCb: (service: TService) => void): void;
    public GetNetwork(aUid: number, aCb: (networkInfo: TNetworkInfo) => void): void;
    public GetTransponder(aUid: number, aCb: (transponderInfo: TTransponderInfo) => void): void;
    public GetProvider(aUid: number, aCb: (providerInfo: TProviderInfo) => void): void;
    public GetGroup(aUid: number, aCb: (groupInfo: TGroupInfo) => void): void;
    public GetBouquet(aUid: number, aCb: (bouquetInfo: TBouquetInfo) => void): void;
    public GetLogoUrl(aUid: number, aBufChannelLogoInfo: any, aCb: (channelLogoInfo: TChannelLogoInfo) => void): void;
    public GetServiceTriplet(aUid: number, aTsid: number, aOnid: number, aSid: number, aCb: (triplet: any) => void): void;
    public FindServiceByTriplet(aOnId: number, aTsId: number, aSvcid: number, aCb: (service: TService) => void): void;
    public FindServiceByNumber(aNumber: number, aCb: (service: TService) => void): void;
    public GetServiceList(aCb: (serviceList: TService[]) => void): void;
    public Load(): void;
    public Save(): void;
    public SetService(aService: TService): void;
    public AddService(aService: TService): void;
    public RemoveService(aService: TService): void;
    public Reset(): void;
    public LoadPreferredList(): void;
    public LoadupdatedList(): void;
    public ChangeUpdateFlag(): void;
    public RemoveServiceWithFlag(): void;
}

}
