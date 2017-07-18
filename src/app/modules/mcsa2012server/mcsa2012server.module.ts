import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstallConfigComponent } from './install-config/install-config.component';
import { NetworkServicesComponent } from './network-services/network-services.component';
import { ActiveDirectoryComponent } from './active-directory/active-directory.component';
import { RolesFeaturesComponent } from './roles-features/roles-features.component';
import { GroupPolicyComponent } from './group-policy/group-policy.component';
import { HyperVComponent } from './hyper-v/hyper-v.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InstallConfigComponent,
    NetworkServicesComponent,
    ActiveDirectoryComponent,
    RolesFeaturesComponent,
    GroupPolicyComponent,
    HyperVComponent
  ]
})
export class Mcsa2012serverModule { }
