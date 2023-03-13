import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TimelinesComponent} from './timelines/timelines.component';
import {DictionaryDetailComponent} from './dictionary-detail/dictionary-detail.component';
import {DictionaryPageComponent} from './dictionary-page/dictionary-page.component';
import {ListProductComponent} from './list-product/list-product.component';
import {CreateProductComponent} from './create-product/create-product.component';
import {DeleteProductComponent} from './delete-product/delete-product.component';
import {UpdateProductComponent} from './update-product/update-product.component';


const routes: Routes = [
  {
    path: 'timelines',
    component: TimelinesComponent

  },
  {
    path: 'dictionary/detail/:word',
    component: DictionaryDetailComponent
  },
  {
    path: 'dictionary',
    component: DictionaryPageComponent
  },
  {
    path: 'product/list',
    component: ListProductComponent
  },
  {
    path: 'product/create',
    component: CreateProductComponent
  }, {
    path: 'product/update/:id',
    component: UpdateProductComponent
  }, {
    path: 'product/delete/:id',
    component: DeleteProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
