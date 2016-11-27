import { Component } from '@angular/core';
import { CrimeCodes } from './crimeCode';
import { CrimeInfo } from './crimes';

const CODES: CrimeCodes[] = [
 { id: '1025', desc1: 'ARSON', desc2: 'AGGRAVATED'},
 { id: '1090', desc1: 'ARSON', desc2: 'ATTEMPT ARSON'},
 { id: '1010', desc1: 'ARSON', desc2: 'BY EXPLOSIVE '},
 { id: '1020', desc1: 'ARSON', desc2: 'BY FIRE '},
 { id: '1030', desc1: 'ARSON', desc2: 'POS: CHEMICAL/DRY-ICE DEVICE'}

];

const CRIMES: CrimeInfo[] = [
  { IUCR: '1025', domestic: 'FALSE', arrest: 'FALSE'},
  { IUCR: '1025', domestic: 'TRUE', arrest: 'FALSE'},
  { IUCR: '1020', domestic: 'FALSE', arrest: 'TRUE'},
];

@Component({
  selector: 'my-sidebar',
  templateUrl: './app/sidebar.component.html'
})

export class SideBarComponent 
{
  codes = [];
  crimeInfo = [];
  codeName = '';
  value = '';
  disp = 0;

  onEnter(value: string) {
	this.value = value; 
	this.codes = CODES;
	this.crimeInfo = CRIMES.filter(ci => ci.IUCR === value);
	this.disp = 1;
    }

  searchIUCR(cName: string){
    this.codes = CODES;
    this.codeName = cName;
    this.value = cName;
  }

  dispCrimeCodes(){
    this.codes = CODES; 
    this.disp = 2;
  }

  onEnterDom(value: string) {
	this.value = value; 
	this.codes = CODES;
	this.crimeInfo = CRIMES.filter(ci => ci.domestic === value);
	this.disp = 3;
    }



}
