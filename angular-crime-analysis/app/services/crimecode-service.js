"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var CODES = [
    { id: '1025', desc1: 'ARSON', desc2: 'AGGRAVATED' },
    { id: '1090', desc1: 'ARSON', desc2: 'ATTEMPT ARSON' },
    { id: '1010', desc1: 'ARSON', desc2: 'BY EXPLOSIVE ' },
    { id: '1020', desc1: 'ARSON', desc2: 'BY FIRE ' },
    { id: '1030', desc1: 'ARSON', desc2: 'POS: CHEMICAL/DRY-ICE DEVICE' }
];
var CrimeCodeService = (function () {
    function CrimeCodeService() {
    }
    CrimeCodeService.prototype.getCrimeCodes = function () {
        return CODES;
    };
    CrimeCodeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CrimeCodeService);
    return CrimeCodeService;
}());
exports.CrimeCodeService = CrimeCodeService;
//# sourceMappingURL=crimecode-service.js.map