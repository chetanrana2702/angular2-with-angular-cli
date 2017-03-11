import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const router: Routes = [
    // { path: '', redirectTo: 'about', pathMatch: 'full' },
    { path: '',  redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',    component: HomeComponent },
    { path: 'about',   component: AboutComponent },
    { path: 'privacy', component: PrivacyComponent },
    { path: '**',      component: PageNotFoundComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router, {
    preloadingStrategy: PreloadAllModules
});

