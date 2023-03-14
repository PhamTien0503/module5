import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListProductComponent} from './list-product/list-product.component';
import {CreateProductComponent} from './create-product/create-product.component';
import {UpdateProductComponent} from './update-product/update-product.component';
import {DeleteProductComponent} from './delete-product/delete-product.component';


const routes: Routes = [
  {
    path: 'list',
    component: ListProductComponent
  }, {
    path: 'create',
    component: CreateProductComponent
  }, {
    path: 'update/:id',
    component: UpdateProductComponent
  }, {
    path: 'delete/:id',
    component: DeleteProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
