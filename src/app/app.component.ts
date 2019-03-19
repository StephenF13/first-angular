import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {interval} from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    constructor() {
    }


    secondes: number;
    counterSubscription: Subscription;

    ngOnInit() {
        // pas Observable.interval ?
        const counter = interval(1000);
        this.counterSubscription = counter.subscribe(
            (value) => {
                this.secondes = value;
            },
            (error) => {
                console.log('Uh-oh, an error occurred! : ' + error);
            },
            () => {
                console.log('Observable complete!');
            }
        );
    }

    ngOnDestroy() {
        this.counterSubscription.unsubscribe();
    }
}
