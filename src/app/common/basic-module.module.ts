import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material.module';
import { BodyRoutingModule } from '../components/body-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BodyRoutingModule,
    MaterialModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class BasicModuleModule { }
