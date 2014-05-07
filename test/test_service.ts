/**
 * Created by sungwoo on 14. 4. 3.
 */

/// <reference path="../def/node.d.ts" />
/// <reference path="../def/mocha.d.ts" />
/// <reference path="../def/async.d.ts" />
/// <reference path="../def/should.d.ts" />

import octopus = require('../octopus');
var should = require('should');


describe('CMetaService', function() {

    var service: octopus.CMetaService;
    var fitServiceList: octopus.TService[];
    var fitFirstService: octopus.TService;
    before((done) => {
        service = new octopus.CMetaService();
        console.log('fixture set up');
        service.GetServiceList(serviceList => {
            fitServiceList = serviceList;
            console.log('count: ' + fitServiceList.length);
            fitFirstService = fitServiceList[0];
            console.log(fitFirstService);
            setTimeout(() => {
                done();
            }, 500);
        });
    });

    it('GetService', (done) => {
        service.GetService(fitFirstService.uid, (service: octopus.TService) => {
            console.log(service);
            should(octopus.compare_service(fitFirstService, service)).ok;
            setTimeout(function () {
                done();
            }, 500);

        });
    });

    it('GetNetwork', (done) => {
        service.GetNetwork(fitFirstService.uid, (networkInfo: octopus.TNetworkInfo) => {
            console.log(networkInfo);
            setTimeout(function () {
                done();
            }, 500);

        });
    });

    it('GetTransponder', (done) => {
        service.GetTransponder(fitFirstService.uid, (transponderInfo: octopus.TTransponderInfo) => {
            console.log(transponderInfo);
            setTimeout(function () {
                done();
            }, 500);

        });
    });

    it('GetProvider', (done) => {
        service.GetProvider(fitFirstService.uid, (providerInfo: octopus.TProviderInfo) => {
            console.log(providerInfo);
            setTimeout(function () {
                done();
            }, 500);
        });
    });

    it('GetGroup', (done) => {
        service.GetGroup(fitFirstService.uid, (groupInfo: octopus.TGroupInfo) => {
            console.log(groupInfo);
            setTimeout(function () {
                done();
            }, 500);

        });
    });

    it('GetBouquet', (done) => {
        service.GetBouquet(fitFirstService.uid, (bouquetInfo: octopus.TBouquetInfo) => {
            console.log(bouquetInfo);
            setTimeout(function () {
                done();
            }, 500);

        });
    });

/*
    it('GetLogoUrl', (done) => {
        service.GetLogoUrl(fitFirstService.uid, null, (channelLogoInfo: octopus.TChannelLogoInfo) => {
            console.log(channelLogoInfo);
            done();
        });
    });
*/
});
