import { Time } from '@angular/common';
import { Title } from '@angular/platform-browser';

export class Hisaab {
    title: string;
    amount: number;
    time: string;
    status: string;
    addedby: string;
    splitBetween: string[];

    constructor(title: string, amount: number, time: string, status: string, addedby: string, splitBetween: string[]) {
        this.title = title;
        this.amount = amount;
        this.time = time;
        this.status = status;
        this.addedby = addedby;
        splitBetween = ['Alok', 'Aditi', 'Sanket', 'Ritika'];
        this.splitBetween = splitBetween;

    }
}

