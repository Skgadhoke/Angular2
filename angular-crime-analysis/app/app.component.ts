import { Component } from '@angular/core';

export class CrimeCodes
{
  id: number;
  desc1: string;
  desc2: string;
}


const CODES: CrimeCodes[] = [
 { id: 1025, desc1: 'ARSON', desc2 'AGGRAVATED'},
 { id: 1090, desc1: 'ARSON', desc2 'ATTEMPT ARSON'},
 { id: 1010, desc1: 'ARSON', desc2 'BY EXPLOSIVE '},
 { id: 1020, desc1: 'ARSON', desc2 'BY FIRE '},
 { id: 1030, desc1: 'ARSON', desc2 'POS: CHEMICAL/DRY-ICE DEVICE'}

];

@Component({
  selector: 'my-app',
  template:`
    <h2> Crime Data Visualization in Chicago</h2>
    <button> Display Crime Codes </button>

     <ul class="codes">
        <h4>IUCR  Primary Desc  Secondary Desc </h4>
        <li *ngFor="let code of codes">
 	  <span class="badge">{{code.id}}</span> {{code.desc1}}  {{code.desc2}}
        </li>
     </ul>
    `

})
export class AppComponent 
{ 
  codes = CODES;
}
