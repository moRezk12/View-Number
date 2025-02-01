import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewnumberComponent } from './pages/viewnumber/viewnumber.component';

const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component : ViewnumberComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
