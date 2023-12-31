import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ContainerComponent } from './components/container/container.component';
import { ShowDataComponent } from './components/show-data/show-data.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardListComponent,
    ProfileComponent,
    ContainerComponent,
    ShowDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
