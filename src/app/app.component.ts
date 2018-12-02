import {Component} from '@angular/core';

const IOS_APP_URL_PREFIX = 'singwithusapp://';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor() {
        if (window.location.href.indexOf(IOS_APP_URL_PREFIX) < 0) {
            window.location.replace('singwithusapp://' +
                window.location.href.replace('https://singwithusapp.com/', ''));
        }
    }
}
