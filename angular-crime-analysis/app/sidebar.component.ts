import { Component } from '@angular/core';
import { CrimeCodes } from './crimeCode';
import { CrimeInfo } from './crimes';


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
