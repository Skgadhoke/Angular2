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
var CRIMES = [
    { IUCR: '1025', domestic: 'FALSE', arrest: 'FALSE' },
    { IUCR: '1025', domestic: 'TRUE', arrest: 'FALSE' },
    { IUCR: '1020', domestic: 'FALSE', arrest: 'TRUE' },
];
var SideBarComponent = (function () {
    function SideBarComponent() {
        this.codes = [];
        this.crimeInfo = [];
        this.codeName = '';
        this.value = '';
        this.disp = 0;
    }
    SideBarComponent.prototype.onEnter = function (value) {
        this.value = value;
        this.codes = CODES;
        this.crimeInfo = CRIMES.filter(function (ci) { return ci.IUCR === value; });
        this.disp = 1;
    };
    SideBarComponent.prototype.searchIUCR = function (cName) {
        this.codes = CODES;
        this.codeName = cName;
        this.value = cName;
    };
    SideBarComponent.prototype.dispCrimeCodes = function () {
        this.codes = CODES;
        this.disp = 2;
    };
    SideBarComponent.prototype.onEnterDom = function (value) {
        this.value = value;
        this.codes = CODES;
        this.crimeInfo = CRIMES.filter(function (ci) { return ci.domestic === value; });
        this.disp = 3;
    };
    SideBarComponent = __decorate([
        core_1.Component({
            selector: 'my-sidebar',
            templateUrl: './app/sidebar.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], SideBarComponent);
    return SideBarComponent;
}());
exports.SideBarComponent = SideBarComponent;
//# sourceMappingURL=sidebar.component.js.map