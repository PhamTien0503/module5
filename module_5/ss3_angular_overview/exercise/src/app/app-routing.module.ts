import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TimelinesComponent} from './timelines/timelines.component';
import {DictionaryDetailComponent} from './dictionary-detail/dictionary-detail.component';
import {DictionaryPageComponent} from './dictionary-page/dictionary-page.component';
import {TodoEditComponent} from './todo/todo-edit/todo-edit.component';
import {TodoComponent} from './todo/todo/todo.component';



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
    path: 'todos/edit/:id',
    component: TodoEditComponent
  },
  {
    path: 'todos/list',
    component: TodoComponent
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then(module => module.ProductModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then(module => module.CategoryModule)
  },
  {
    path: 'slider',
    loadChildren: () => import('./img-slider/img-slider.module').then(module => module.ImgSliderModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


