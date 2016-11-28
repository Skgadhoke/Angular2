
import { Injectable } from '@angular/core';
import { CrimeInfo } from '../crimes';

const CRIMES: CrimeInfo[] = [
  { IUCR: '1025', domestic: 'TRUE', arrest: 'FALSE'},
  { IUCR: '1025', domestic: 'TRUE', arrest: 'FALSE'},
  { IUCR: '1020', domestic: 'FALSE', arrest: 'TRUE'},
];

@Injectable()
export class CrimeInfoService {
  getCrimeInfo(): CrimeInfo[] {
    return  CRIMES;
} }