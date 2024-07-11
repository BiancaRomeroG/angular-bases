import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <h1>Hello Counter Component!</h1>
    <h2> Contador {{ counter }}</h2>
    <button (click)="increaseBy(+1)" class="mx-2">+1</button>
    <button (click)="reset()" class="mx-2">Reset </button>
    <button (click)="increaseBy(-1)" class="mx-2">-1</button>
    `
})

export class CounterComponent {
    counter: number = 0;

    constructor() { }

    increaseBy(value: number): void {
        this.counter += value;
    }

    reset(): void {
        this.counter = 0;
    }

    decreaseBy(): void {
        this.counter -= 1;
        if (this.counter < 0) {
            this.counter = 0;
        }
    }
}