
import { Injectable } from '@angular/core';
import { CrimeCodes } from '../crimeCode';

const CODES: CrimeCodes[] = [
 { id: '1025', desc1: 'ARSON', desc2: 'AGGRAVATED'},
 { id: '1090', desc1: 'ARSON', desc2: 'ATTEMPT ARSON'},
 { id: '1010', desc1: 'ARSON', desc2: 'BY EXPLOSIVE '},
 { id: '1020', desc1: 'ARSON', desc2: 'BY FIRE '},
 { id: '1030', desc1: 'ARSON', desc2: 'POS: CHEMICAL/DRY-ICE DEVICE'}

];

@Injectable()
export class CrimeCodeService {
  getCrimeCodes(): CrimeCodes[] {
    return  CODES;
} }