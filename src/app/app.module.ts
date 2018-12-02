import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {PrivacyPolicyComponent} from './privacyPolicy/privacyPolicy.component';
import {MainComponent} from './main/main.component';

const appRoutes: Routes = [
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: '**', component: MainComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        PrivacyPolicyComponent
    ],
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
