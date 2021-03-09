import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputOutputComponent } from './input-output/input-output.component';
import { StructralDirectivesComponent } from './structral-directives/structral-directives.component';
import { TopicsOverviewComponent } from './topics-overview/topics-overview.component';


const routes: Routes = [
  {path: "topics", component: TopicsOverviewComponent},
  {path: "", redirectTo: "topics", pathMatch: "full"},
  {path: "inputoutput", component: InputOutputComponent},
  {path: "structuraldirectives", component: StructralDirectivesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
