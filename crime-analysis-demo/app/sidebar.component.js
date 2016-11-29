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
var crimecode_service_1 = require('./services/crimecode-service');
var SideBarComponent = (function () {
    function SideBarComponent(crimecodesService) {
        this.crimecodesService = crimecodesService;
        this.codes = [];
        this.disp = 0;
    }
    SideBarComponent.prototype.dispCrimeCodes = function () {
        this.codes = this.crimecodesService.getCrimeCodes();
        this.disp = 2;
    };
    SideBarComponent = __decorate([
        core_1.Component({
            selector: 'my-sidebar',
            providers: [crimecode_service_1.CrimeCodeService],
            templateUrl: './app/sidebar.component.html'
        }), 
        __metadata('design:paramtypes', [crimecode_service_1.CrimeCodeService])
    ], SideBarComponent);
    return SideBarComponent;
}());
exports.SideBarComponent = SideBarComponent;
//# sourceMappingURL=sidebar.component.js.map