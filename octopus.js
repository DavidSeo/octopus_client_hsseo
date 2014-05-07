var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var dbus = require('node-dbus');
var newdbus = require('dbus');

var sAddress = 'tcp:host=10.0.12.150,port=55884';


function convert_service(aDBusData) {
    var ret = {
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

function convert_network(aDBusData) {
    var ret = {
        uid: aDBusData[0],
        typeOf: aDBusData[1],
        version: aDBusData[2],
        onid: aDBusData[3],
        name: aDBusData[4],
        deliType: aDBusData[5]
    };
    return ret;
}

function convert_transponder(aDBusData) {
    var ret = {
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

function convert_provider(aDBusData) {
    var ret = {
        uid: aDBusData[0],
        typeOf: aDBusData[1],
        version: aDBusData[2],
        name: aDBusData[3]
    };
    return ret;
}

function convert_group(aDBusData) {
    var ret = {
        uid: aDBusData[0],
        typeOf: aDBusData[1],
        version: aDBusData[2],
        id: aDBusData[3],
        name: aDBusData[4]
    };
    return ret;
}

function convert_bouquet(aDBusData) {
    var ret = {
        uid: aDBusData[0],
        typeOf: aDBusData[1],
        version: aDBusData[2],
        id: aDBusData[3],
        name: aDBusData[4]
    };
    return ret;
}

function convert_logo(aDBusData) {
    var ret = {
        svcuid: aDBusData[0],
        ucServerLogoUrl: aDBusData[1],
        ucLocalLogoUrl: aDBusData[2]
    };
    return ret;
}

function convert_subtitletrack(aDbusData) {
    var ret = {
        pid: aDbusData[0],
        componentTag: aDbusData[1],
        type: aDbusData[2],
        typeValue: aDbusData[3],
        componentExtTag: aDbusData[4],
        langCode: aDbusData[7]
    };
    return ret;
}
function compare_service(aA, aB) {
    if (aA.uid != aB.uid) {
        return false;
    }
    return true;
}
exports.compare_service = compare_service;

var CDBusInterface = (function () {
    function CDBusInterface(aDestination, aPath) {
        var dbusClass = new newdbus();
        var dbusHandle = dbusClass.getBus('open', sAddress);

        this._dbusHandle = dbusHandle;
        this._dbusClass = dbusClass;
        this._Destination = aDestination;
        this._Path = aPath;
    }
    CDBusInterface.prototype._call = function (aCb) {
        this._dbusHandle.getInterface(this._Destination, this._Path, this._Destination, function (err, iface) {
            aCb(iface);
        });
    };
    return CDBusInterface;
})();
exports.CDBusInterface = CDBusInterface;

var CMediaPlay = (function (_super) {
    __extends(CMediaPlay, _super);
    function CMediaPlay() {
        _super.call(this, 'Octopus.Appkit.Media.Play', '/Octopus/Appkit/Media/Play');
    }
    CMediaPlay.prototype.GetViewNumber = function (aCb) {
        this._call(function (iface) {
            iface.GetViewNumber['finish'] = function (aViewNum) {
                aCb(aViewNum);
            };
            iface.GetViewNumber();
        });
    };

    CMediaPlay.prototype.SetMainViewId = function (aViewId, aCb) {
        this._call(function (iface) {
            iface.SetMainViewId['finish'] = function () {
                aCb();
            };
            iface.SetMainViewId(aViewId);
        });
    };

    CMediaPlay.prototype.GetMainViewId = function (aCb) {
        this._call(function (iface) {
            iface.GetMainViewId['finish'] = function (aViewId) {
                aCb(aViewId);
            };
            iface.GetMainViewId();
        });
    };

    CMediaPlay.prototype.GetPlayType = function (aViewId, aCb) {
        this._call(function (iface) {
            iface.GetPlayType['finish'] = function (aPlayType) {
                aCb(aPlayType);
            };
            iface.GetPlayType(aViewId);
        });
    };

    CMediaPlay.prototype.GetNeedRadioBg = function (aViewId, aCb) {
        this._call(function (iface) {
            iface.GetNeedRadioBg['finish'] = function (aIsNeed) {
                aCb(aIsNeed);
            };
            iface.GetNeedRadioBg(aViewId);
        });
    };

    CMediaPlay.prototype.GetSessionId = function (aViewId, aCb) {
        this._call(function (iface) {
            iface.GetSessionId['finish'] = function (aSessionId) {
                aCb(aSessionId);
            };
            iface.GetSessionId(aViewId);
        });
    };

    CMediaPlay.prototype.GetRequestId = function (aViewId, aPlaytype, aCb) {
        this._call(function (iface) {
            iface.GetRequestId['finish'] = function (aRequestId) {
                aCb(aRequestId);
            };
            iface.GetRequestId(aViewId, aPlaytype);
        });
    };

    CMediaPlay.prototype.GetStreamAspectRatio = function (aViewId, aCb) {
        this._call(function (iface) {
            iface.GetStreamAspectRatio['finish'] = function (aAspectRatio) {
                aCb(aAspectRatio);
            };
            iface.GetStreamAspectRatio(aViewId);
        });
    };

    CMediaPlay.prototype.GetMhegDisplayPoint = function (aViewId, aRefWidth, aRefHeight, aVideoPointX, aVideoPointY, aCb) {
        this._call(function (iface) {
            iface.GetMhegDisplayPoint['finish'] = function (aScaledSize) {
                console.log(aScaledSize);
                aCb(aScaledSize[0], aScaledSize[1]);
            };
            iface.GetMhegDisplayPoint(aViewId, aRefWidth, aRefHeight, aVideoPointX, aVideoPointY);
        });
    };
    return CMediaPlay;
})(CDBusInterface);
exports.CMediaPlay = CMediaPlay;

var CMetaService = (function (_super) {
    __extends(CMetaService, _super);
    function CMetaService() {
        _super.call(this, 'Octopus.Appkit.Meta.Service', '/Octopus/Appkit/Meta/Service');
    }
    CMetaService.prototype.GetService = function (aUid, aCb) {
        this._call(function (iface) {
            iface.GetService['finish'] = function (data) {
                aCb(convert_service(data));
            };
            iface.GetService(aUid);
        });
    };

    CMetaService.prototype.GetNetwork = function (aUid, aCb) {
        this._call(function (iface) {
            iface.GetNetwork['finish'] = function (data) {
                aCb(convert_network(data));
            };
            iface.GetNetwork(aUid);
        });
    };
    CMetaService.prototype.GetTransponder = function (aUid, aCb) {
        this._call(function (iface) {
            iface.GetTransponder['finish'] = function (data) {
                aCb(convert_transponder(data));
            };
            iface.GetTransponder(aUid);
        });
    };
    CMetaService.prototype.GetProvider = function (aUid, aCb) {
        this._call(function (iface) {
            iface.GetProvider['finish'] = function (data) {
                aCb(convert_provider(data));
            };
            iface.GetProvider(aUid);
        });
    };
    CMetaService.prototype.GetGroup = function (aUid, aCb) {
        this._call(function (iface) {
            iface.GetGroup['finish'] = function (data) {
                aCb(convert_group(data));
            };
            iface.GetGroup(aUid);
        });
    };
    CMetaService.prototype.GetBouquet = function (aUid, aCb) {
        this._call(function (iface) {
            iface.GetBouquet['finish'] = function (data) {
                aCb(convert_bouquet(data));
            };
            iface.GetBouquet(aUid);
        });
    };

    CMetaService.prototype.GetLogoUrl = function (aUid, aBufChannelLogoInfo, aCb) {
        this._call(function (iface) {
            iface.GetLogoUrl['finish'] = function (data) {
            };
            iface.GetLogoUrl(aUid);
        });
    };

    CMetaService.prototype.GetServiceTriplet = function (aUid, aTsid, aOnid, aSid, aCb) {
    };
    CMetaService.prototype.FindServiceByTriplet = function (aOnId, aTsId, aSvcid, aCb) {
    };
    CMetaService.prototype.FindServiceByNumber = function (aNumber, aCb) {
    };

    CMetaService.prototype.GetServiceList = function (aCb) {
        this._call(function (iface) {
            iface.GetServiceList['finish'] = function (data) {
                console.log(data);
                var serviceList = [];
                data.forEach(function (s) {
                    serviceList.push(convert_service(s));
                });
                aCb(serviceList);
            };
            iface.GetServiceList();
        });
    };

    CMetaService.prototype.Load = function () {
    };
    CMetaService.prototype.Save = function () {
    };
    CMetaService.prototype.SetService = function (aService) {
    };
    CMetaService.prototype.AddService = function (aService) {
    };
    CMetaService.prototype.RemoveService = function (aService) {
    };
    CMetaService.prototype.Reset = function () {
    };
    CMetaService.prototype.LoadPreferredList = function () {
    };
    CMetaService.prototype.LoadupdatedList = function () {
    };
    CMetaService.prototype.ChangeUpdateFlag = function () {
    };
    CMetaService.prototype.RemoveServiceWithFlag = function () {
    };
    return CMetaService;
})(CDBusInterface);
exports.CMetaService = CMetaService;
