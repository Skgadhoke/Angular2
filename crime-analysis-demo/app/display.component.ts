import { Component, Input } from '@angular/core';
import { CrimeCodes } from './crimeCode';


@Component({
  selector: 'my-display',

  templateUrl: `/app/display.component.html`

})
export class DisplayComponent 
{

 @Input() disp: number;
 @Input() codes: CrimeCodes[];
 filterCriteria = "1025";
}
