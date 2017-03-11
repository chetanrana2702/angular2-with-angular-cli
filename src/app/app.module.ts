import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, Injectable} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';

import { LocalizationModule, LocaleValidationModule, LocaleService, TranslationService } from 'angular-l10n';


import { routes } from './app.router';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Advanced initialization.
@Injectable()
export class LocalizationConfig {

    constructor(public locale: LocaleService, public translation: TranslationService) { }

    load(): Promise<any> {
        this.locale.AddConfiguration()
            .AddLanguage('en', 'ltr')
            .AddLanguage('ar', 'rtl')
            .SetCookieExpiration(30)
            .DefineDefaultLocale('en', 'US')
            .DefineCurrency('USD');
        this.locale.init();

        this.translation.AddConfiguration()
            .AddProvider('./assets/locale-');

        let promise: Promise<any> = new Promise((resolve: any) => {
            this.translation.translationChanged.subscribe(() => {
                resolve(true);
            });
        });

        this.translation.init();

        return promise;
    }

}

// AoT compilation requires a reference to an exported function.
export function initLocalization(localizationConfig: LocalizationConfig): Function {
    return () => localizationConfig.load();
}

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PrivacyComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    AlertModule.forRoot(),
    LocalizationModule.forRoot(), // New instance of LocaleService & TranslationService.
    LocaleValidationModule.forRoot()
  ],
  providers: [
    Title,
    LocalizationConfig,
    {
        provide: APP_INITIALIZER,
        useFactory: initLocalization,
        deps: [LocalizationConfig],
        multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
