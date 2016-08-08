import { Component } from '@angular/core'
                            // ^
                            // +-- Mapping
                            // +-- Relativer Pfad
@Component({
    selector: 'flight-app',
    template: '<h1>{{info}}</h1><a (click)="doStuff()">Klick mich!</a>',
})
export class AppComponent {

    info = "Hallo Welt!";

    doStuff() {

        this.info = "Manfred war hier!! Du wurdest gehaaaackt!!";
        console.debug(this.info);
    }

}