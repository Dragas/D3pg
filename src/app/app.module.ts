import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LineSvgComponent } from './line-component/line-svg.component';
import { NodeSvgComponent } from './node-svg/node-svg.component';
import { GraphSvgComponent } from './graph-svg/graph-svg.component';

@NgModule({
  declarations: [
    AppComponent,
    LineSvgComponent,
    NodeSvgComponent,
    GraphSvgComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
