import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicsOverviewComponent } from './topics-overview/topics-overview.component';


const routes: Routes = [
  {path: "topics", component: TopicsOverviewComponent},
  {path: "", redirectTo: "topics", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
