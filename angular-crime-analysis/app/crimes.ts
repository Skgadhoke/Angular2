export class CrimeInfo
{
    public IUCR?: string;
    public domestic?: string;
    public arrest?: string;
}

export const CRIMES: CrimeInfo[] = 
[
  { IUCR: '1025', domestic: 'FALSE', arrest: 'FALSE'},
  { IUCR: '1025', domestic: 'TRUE', arrest: 'FALSE'},
  { IUCR: '1020', domestic: 'FALSE', arrest: 'TRUE'},
];
