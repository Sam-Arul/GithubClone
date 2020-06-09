import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RepoTableComponent } from './repo-table/repo-table.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    RepoTableComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
