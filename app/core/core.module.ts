import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiModule } from './ui/ui.module';

import { ErrorComponent } from './pages/error/error.component';

@NgModule({
  exports: [ UiModule, ErrorComponent ],
  declarations: [ ErrorComponent ]
})
export class CoreModule {}