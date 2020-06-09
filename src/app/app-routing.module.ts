import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { AppComponent } from './app.component';
import { ResultComponent } from './result/result.component';


const routes: Routes = [

  {
    path: "",
    component: SearchComponent
  },
  {
    path: "user/:userName",
    component: ResultComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
