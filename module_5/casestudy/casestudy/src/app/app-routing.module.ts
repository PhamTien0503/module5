import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {XeKhachComponent} from './xe-khach/xe-khach.component';
import {XeKhachUpdateComponent} from './xe-khach-update/xe-khach-update.component';
import {CoachCreateComponent} from './coach-create/coach-create.component';


const routes: Routes = [
  {
    path: 'coach',
    component: XeKhachComponent
  },
  {
    path: 'coach/update/:id',
    component: XeKhachUpdateComponent
  },
  {
    path: 'coach/create',
    component: CoachCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
