import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopicsOverviewComponent } from './topics-overview/topics-overview.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { InputOutputChildComponent } from './input-output/input-output-child/input-output-child.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicsOverviewComponent,
    InputOutputComponent,
    InputOutputChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
