import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HappyStatsComponent } from './happy-stats/happy-stats.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StatDetailComponent } from './stat-detail/stat-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HappyStatsComponent,
    StatDetailComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
