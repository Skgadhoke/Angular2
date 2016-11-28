import { Component, Input } from '@angular/core';
import { CrimeCodes } from './crimeCode';
import { CrimeInfo } from './crimes';

@Component({
  selector: 'my-display',
  templateUrl: '/app/display.component.html'

})
export class DisplayComponent 
{
 @Input() crimeInfo:CrimeInfo[];
 @Input() disp: number;
 @Input() codes: CrimeCodes[];
}
