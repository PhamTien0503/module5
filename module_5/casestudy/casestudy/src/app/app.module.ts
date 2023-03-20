import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { XeKhachComponent } from './xe-khach/xe-khach.component';
import { XeKhachUpdateComponent } from './xe-khach-update/xe-khach-update.component';
import { CoachCreateComponent } from './coach-create/coach-create.component';




@NgModule({
  declarations: [
    AppComponent,
    XeKhachComponent,
    XeKhachUpdateComponent,
    CoachCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
