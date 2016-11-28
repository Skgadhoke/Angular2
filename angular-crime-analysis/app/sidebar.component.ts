import { Component } from '@angular/core';
import { CrimeCodes } from './crimeCode';
import { CrimeInfo } from './crimes';

import {CrimeCodeService} from './services/crimecode-service';
import {CrimeInfoService} from './services/crimeinfo-service';

@Component({
  selector: 'my-sidebar',
  providers: [CrimeCodeService, CrimeInfoService],
  templateUrl: './app/sidebar.component.html'
})

export class SideBarComponent 
{
  codes = [];
  crimeInfo = [];
  codeName = '';
  value = '';
  disp = 0;
  iucr = '';
  

constructor(private crimecodesService: CrimeCodeService, private crimeinfoService: CrimeInfoService) { }

  onSubmit(form){
      let crimes: CrimeInfo [];
      crimes = this.crimeinfoService.getCrimeInfo();
      this.crimeInfo = crimes.filter(ci => ci.IUCR === this.iucr);
      this.disp = 1;
  }
  onEnter(value: string) {
  	  this.value = value; 
      let crimes: CrimeInfo [];
      crimes = this.crimeinfoService.getCrimeInfo();
      this.crimeInfo = crimes.filter(ci => ci.IUCR ===value);
  	   this.disp = 1;
  }

  searchIUCR(cName: string){
    this.codeName = cName;
    this.value = cName;
  }

  dispCrimeCodes(){
    this.codes = this.crimecodesService.getCrimeCodes(); 
    this.disp = 2;
  }

  onEnterDom(value: string) {
 this.value = value; 
      let crimes: CrimeInfo [];
      crimes = this.crimeinfoService.getCrimeInfo();
      this.crimeInfo = crimes.filter(ci => ci.IUCR ===value);
	    this.disp = 1;
    }



}
