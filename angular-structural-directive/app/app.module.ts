import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StructuralDirectivesComponent } from './structural-directives.component';
import { UnlessDirective } from './unless.directive';
import { HeavyLoaderComponent } from './heavy-loader.component';
import { AppComponent }   from './app.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    AppComponent,
    StructuralDirectivesComponent,
    UnlessDirective,
    HeavyLoaderComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
