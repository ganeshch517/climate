import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './components/info/info.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
    { path: '', redirectTo: 'info', pathMatch: 'full'},
    { path: 'info', component: InfoComponent},
    { path: 'wish/:name', component: DetailsComponent},
    { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
