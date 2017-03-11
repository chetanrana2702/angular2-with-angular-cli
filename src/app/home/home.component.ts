import { Component, OnInit } from '@angular/core';

// Note that if you use in the component only the directives and not the pipes, 
// you don't need to import the services and extend Localization class.
// import { Translation, TranslationService } from 'angular-l10n';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Title: string = 'Home Page';
  constructor() { }

  ngOnInit() {
  }

}
