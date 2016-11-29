import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent }   from './app.component';
import { NavBarComponent } from './navbar.component'; 
import { FooterComponent } from './footer.component'; 
import { CrimeCodeService } from './services/crimecode-service';
import { SideBarComponent } from './sidebar.component'; 
import { DisplayComponent } from './display.component'; 


@NgModule({
  imports:      [ BrowserModule, FormsModule],

  declarations:
    [ AppComponent,
      NavBarComponent,
      SideBarComponent, 
      DisplayComponent,
      FooterComponent
    ],
   providers:    [CrimeCodeService] ,
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
