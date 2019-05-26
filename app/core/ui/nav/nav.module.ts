import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TopnavComponent } from './topnav/topnav.component';

import { NavService } from './nav.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ TopnavComponent ],
  declarations: [ TopnavComponent ],
  providers: [ NavService ]
})
export class NavModule {}