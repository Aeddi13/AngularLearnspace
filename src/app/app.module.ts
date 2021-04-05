import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicsOverviewComponent } from './topics-overview/topics-overview.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { InputOutputChildComponent } from './input-output/input-output-child/input-output-child.component';
import { StructralDirectivesComponent } from './structral-directives/structral-directives.component';
import { FormsComponent } from './forms/forms.component';
import { TemplateFormComponent } from './forms/template-form/template-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicsOverviewComponent,
    InputOutputComponent,
    InputOutputChildComponent,
    StructralDirectivesComponent,
    FormsComponent,
    TemplateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
