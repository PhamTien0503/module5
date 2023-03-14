import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductRoutingModule} from './product-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ListProductComponent} from './list-product/list-product.component';
import {CreateProductComponent} from './create-product/create-product.component';
import {UpdateProductComponent} from './update-product/update-product.component';
import {DeleteProductComponent} from './delete-product/delete-product.component';


@NgModule({
  declarations: [
    ListProductComponent,
    CreateProductComponent,
    UpdateProductComponent,
    DeleteProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductModule {
}

