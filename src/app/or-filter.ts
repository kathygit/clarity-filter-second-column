import {ClrDatagridStringFilterInterface} from '@clr/angular';

export class OrFilter implements ClrDatagridStringFilterInterface<string> {
  property: string;
  constructor(_property: string) {
    this.property = _property;
  }
  accepts(row: any, search: string): boolean {
    if ((row.hasOwnProperty(this.property)) && (row[this.property] === null)) {
      return false;
    }
    const substrings = search.split('|');
    for (const s of substrings) {
      if ((row.hasOwnProperty(this.property)) &&
        (row[this.property].toString().toLowerCase().includes(s.toLowerCase()))) {
        return true;
      }
    }
    return false;
  }
}