import { Component } from '@angular/core';
import { environment } from '../environments/environment';

import { Title } from '@angular/platform-browser';

import { Translation, LocaleService, TranslationService } from 'angular-l10n';

export type LayoutDirection = 'ltr' | 'rtl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    dir: LayoutDirection;
    // title = 'app works!';
    // environmentName = environment.envName;

    constructor(public locale: LocaleService, public translation: TranslationService, public title: Title) {
        // Initializes the document title with the current translation at the time of the component loading.
        this.title.setTitle(this.translation.translate('App.Title'));

        // When the language changes, refreshes the document title with the new translation.
        this.translation.translationChanged.subscribe(
            () => { this.title.setTitle(this.translation.translate('App.Title')); }
        );

        // Initializes direction.
        this.dir = this.getLanguageDirection(this.locale.getCurrentLanguage());
        // console.log(this.dir);
        // console.log(this.locale.getCurrentLanguage());
    }

    getcurrentCountry(): string {
        return this.locale.getCurrentCountry();
    }

    getLanguageDirection(language: string): LayoutDirection {
        return <LayoutDirection>this.locale.getLanguageDirection(language);
    }
   
    selectLocale(language: string): void {
        this.locale.setCurrentLanguage(language);
    }


   

}