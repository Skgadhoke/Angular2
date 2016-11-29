import { Component } from '@angular/core';
import { CrimeCodes } from './crimeCode';

import {CrimeCodeService} from './services/crimecode-service';

@Component({
  selector: 'my-sidebar',
  providers: [CrimeCodeService],
  templateUrl: './app/sidebar.component.html'
})

export class SideBarComponent 
{
  codes = [];
  
  disp = 0;
 
  

constructor(private crimecodesService: CrimeCodeService) { }


  
  dispCrimeCodes(){
    this.codes = this.crimecodesService.getCrimeCodes(); 
    this.disp = 2;

  }



}
