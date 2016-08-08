
import {Flug} from "../entities/flug";

import {  Http, URLSearchParams, Headers } from '@angular/http';
import { Component} from '@angular/core';
import {FlugService} from "../services/flug.service";

@Component({
    selector: 'flug-suchen',
    template: require('./flug-suchen.component.html'),
    providers: [FlugService]
})
export class FlugSuchenComponent {

    public von: string = "Graz";
    public nach: string = "Hamburg";

    public fluege: Array<Flug> = [];
    public selectedFlug: Flug;

    constructor(private flugService: FlugService) {
    }

    suchen(): void {

        this
            .flugService
            .find(this.von, this.nach)
            .subscribe(
                (fluege: Flug[]) => {
                    this.fluege = fluege;
                },
                (err) => {
                    console.error("Fehler beim Laden von Flügen!!");
                    console.error(err);
                }
            );
            /*
            .map(function(resp) {
                return resp.json();
            })
            */



    }

    select(flug: Flug): void {
        this.selectedFlug = flug;
    }

}

