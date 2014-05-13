/**
 * Created by hsseo on 14. 5. 12.
 */

/// <reference path="../../def/node.d.ts" />


import tdata = require('./tdata');

import dbusConn = require('../util/dbus_connect');

class CMetaService extends dbusConn.CDBusInterface {
    constructor() {
        super('Octopus.Appkit.Meta.Service', '/Octopus/Appkit/Meta/Service');
    }

    GetService(aUid: number, aCb: (service: tdata.TService) => void) {
        this._call( function (iface){
            iface.GetService['finish'] = function(data) {
                aCb(tdata.convert_service(data));
            };
            iface.GetService(aUid);
        });
    }

    GetNetwork(aUid: number, aCb: (networkInfo: tdata.TNetworkInfo) => void) {
        this._call( function (iface){
            iface.GetNetwork['finish'] = function(data) {
                aCb(tdata.convert_network(data));
            };
            iface.GetNetwork(aUid);
        });
    }
    GetTransponder(aUid: number, aCb: (transponderInfo: tdata.TTransponderInfo) => void) {
        this._call( function (iface){
            iface.GetTransponder['finish'] = function(data) {
                aCb(tdata.convert_transponder(data));
            };
            iface.GetTransponder(aUid);
        });
    }
    GetProvider(aUid: number, aCb: (providerInfo: tdata.TProviderInfo) => void) {
        this._call( function (iface){
            iface.GetProvider['finish'] = function(data) {
                aCb(tdata.convert_provider(data));
            };
            iface.GetProvider(aUid);
        });
    }
    GetGroup(aUid: number, aCb: (groupInfo: tdata.TGroupInfo) => void) {
        this._call( function (iface){
            iface.GetGroup['finish'] = function(data) {
                aCb(tdata.convert_group(data));
            };
            iface.GetGroup(aUid);
        });
    }
    GetBouquet(aUid: number, aCb: (bouquetInfo: tdata.TBouquetInfo) => void) {
        this._call( function (iface){
            iface.GetBouquet['finish'] = function(data) {
                aCb(tdata.convert_bouquet(data));
            };
            iface.GetBouquet(aUid);
        });
    }

    GetLogoUrl(aUid: number, aBufChannelLogoInfo: any, aCb: (channelLogoInfo: tdata.TChannelLogoInfo) => void) {
        this._call( function (iface){
            iface.GetLogoUrl['finish'] = function(data) {
                //aCb(tdata.convert_logoUrl(data));
            };
            iface.GetLogoUrl(aUid);
        });
    }

    GetServiceTriplet(aUid: number, aTsid: number, aOnid: number, aSid: number, aCb: (triplet: any) => void) {

    }
    FindServiceByTriplet(aOnId: number, aTsId: number, aSvcid: number, aCb:(service: tdata.TService) => void) {

    }
    FindServiceByNumber(aNumber: number, aCb: (service: tdata.TService) => void) {

    }

    GetServiceList(aCb: (serviceList: tdata.TService[]) => void) {
        this._call( function (iface){
            iface.GetServiceList['finish'] = function(data) {
                console.log(data);
                var serviceList = [];
                data.forEach((s) => {
                    serviceList.push(tdata.convert_service(s));
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
    SetService(aService: tdata.TService) {

    }
    AddService(aService: tdata.TService) {

    }
    RemoveService(aService: tdata.TService) {

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

export = CMetaService