import { Component } from '@angular/core';
import { NgGridModule } from 'angular2-grid';
import { CrimeCodes } from './crimeCode';

const CODES: CrimeCodes[] = [
 { id: 1025, desc1: 'ARSON', desc2: 'AGGRAVATED'},
 { id: 1090, desc1: 'ARSON', desc2: 'ATTEMPT ARSON'},
 { id: 1010, desc1: 'ARSON', desc2: 'BY EXPLOSIVE '},
 { id: 1020, desc1: 'ARSON', desc2: 'BY FIRE '},
 { id: 1030, desc1: 'ARSON', desc2: 'POS: CHEMICAL/DRY-ICE DEVICE'}

];

@Component({
  selector: 'my-app',
  templateUrl: './app/crimeAnalyzes.component.html'
})
export class AppComponent 
{
  codes = [];
  dispCrimeCodes(){
    this.codes = CODES; 
  }
}
