import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EatComponent } from './eat/eat.component';
import { NarvarComponent } from './narvar/narvar.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  { path: 'comida', component: EatComponent },
  { path: 'crea-comida', component: NarvarComponent},
  { path: 'historia', component: HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
