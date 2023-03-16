import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {CustomerCreateComponent} from './customer/customer-create/customer-create.component';
import {ContractListComponent} from "./contract/contract-list/contract-list.component";
import {FacilityListComponent} from "./facility/facility-list/facility-list.component";


const routes: Routes = [
  {
    path: 'customer',
    component: CustomerListComponent
  },
  {
    path: 'customer/update/:id',
    component: CustomerListComponent
  },
  {
    path: 'customer/create',
    component: CustomerCreateComponent
  },
  {
    path: 'contract',
    component: ContractListComponent
  },
  {
    path: 'facility',
    component: FacilityListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
