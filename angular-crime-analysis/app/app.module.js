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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var navbar_component_1 = require('./navbar.component');
var sidebar_component_1 = require('./sidebar.component');
var display_component_1 = require('./display.component');
var footer_component_1 = require('./footer.component');
var crimecode_service_1 = require('./services/crimecode-service');
var crimeinfo_service_1 = require('./services/crimeinfo-service');
var crime_code_filter_1 = require('./crime-code-filter');
var my_filter_1 = require('./my-filter');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
            declarations: [app_component_1.AppComponent,
                navbar_component_1.NavBarComponent,
                sidebar_component_1.SideBarComponent,
                display_component_1.DisplayComponent,
                footer_component_1.FooterComponent,
                crime_code_filter_1.CrimeCodePipe,
                my_filter_1.ArrayFilterPipe],
            providers: [crimecode_service_1.CrimeCodeService, crimeinfo_service_1.CrimeInfoService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map