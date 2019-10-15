import { trigger, transition, style, animate, state } from '@angular/animations';

export let fade = trigger('fade', [
    transition('void => *', [
        style({ opacity: 0 }),
        animate(2000)
    ])
]);

export let slidein = trigger('slidein', [

    state(':enter', style({})),
    state(':leave', style({})),

    transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('1s ease-in-out', style({ transform: 'translateX(0%)' }))
    ]),

    transition(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('1s ease-in-out', style({ transform: 'translateX(-100%)' }))
    ]),

]);

