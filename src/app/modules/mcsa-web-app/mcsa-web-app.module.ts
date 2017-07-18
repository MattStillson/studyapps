import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomObjectsComponent } from './dom-objects/dom-objects.component';
import { ProgramFlowComponent } from './program-flow/program-flow.component';
import { SecureDataComponent } from './secure-data/secure-data.component';
import { Css3Component } from './css3/css3.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DomObjectsComponent, ProgramFlowComponent, SecureDataComponent, Css3Component]
})
export class McsaWebAppModule { }
