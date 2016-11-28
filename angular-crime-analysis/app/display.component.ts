import { Component, Input } from '@angular/core';
import { CrimeCodes } from './crimeCode';
import { CrimeInfo } from './crimes';
import { CrimeCodePipe } from './crime-code-filter';
import { ArrayFilterPipe } from './my-filter';

@Component({
  selector: 'my-display',

  templateUrl: `/app/display.component.html`

})
export class DisplayComponent 
{
 @Input() crimeInfo:CrimeInfo[];
 @Input() disp: number;
 @Input() codes: CrimeCodes[];
 filterCriteria = "1025";
}
