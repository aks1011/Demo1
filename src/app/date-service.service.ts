import { Injectable } from '@angular/core';
import { Hisaab } from './hisaab';

@Injectable({
  providedIn: 'root'
})
export class DateServiceService {

  private hisaabList: Array<Hisaab>;

  constructor() {
  }
  showCurrentDate() {
    const ndate = new Date();
    return ndate.toDateString();
  }

  hisaabData(): Array<Hisaab> {
    const h1 = new Hisaab('Car rent', 100, '10:00 AM', 'get', 'Alok', ['Alok', 'Aditi', 'Sanket', 'Ritika']);
    const h2 = new Hisaab('Jacket', 100, 'Yesterday', 'pay', 'Sanket', ['Alok', 'Aditi', 'Sanket', 'Ritika']);
    const h3 = new Hisaab('Matheran', 100, '10 Sep, 2019', 'get', 'Aditi', ['Alok', 'Aditi', 'Sanket', 'Ritika']);
    const h4 = new Hisaab('House Rent Sept', 100, '2 month ago', 'pay', 'Ritika', ['Alok', 'Aditi', 'Sanket', 'Ritika']);
    const h5 = new Hisaab('Shiv sagar dinner', 100, '1 year ago', 'get', 'Alok', ['Alok', 'Aditi', 'Sanket', 'Ritika']);

    this.hisaabList = [];
    this.hisaabList.push(h1);
    this.hisaabList.push(h2);
    this.hisaabList.push(h3);
    this.hisaabList.push(h4);
    this.hisaabList.push(h5);

    return this.hisaabList;
  }
}
