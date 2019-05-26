import { NgModule } from '@angular/core';

import { SiteRoutingModule } from './site-routing.module';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [ SiteRoutingModule ],
  declarations: [
    HomeComponent, 
    AboutComponent, 
    ContactComponent
    ]
})
export class SiteModule {}