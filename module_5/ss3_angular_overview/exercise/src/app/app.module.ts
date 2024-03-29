import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CalculatorComponent} from './calculator/calculator.component';
import {ColorComponent} from './color/color.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ArticleComponent} from './article/article.component';
import {LikeComponent} from './like/like.component';
import {FooterComponent} from './footer/footer.component';
import {NameCardComponent} from './name-card/name-card.component';
import {ProgressBarComponent} from './progress-bar/progress-bar.component';
import {CountdownTimerComponent} from './countdown-timer/countdown-timer.component';
import {RatingBarComponent} from './rating-bar/rating-bar.component';
import {TodoComponent} from './todo/todo/todo.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {TimelinesComponent} from './timelines/timelines.component';
import {DictionaryPageComponent} from './dictionary-page/dictionary-page.component';
import {DictionaryDetailComponent} from './dictionary-detail/dictionary-detail.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {TodoEditComponent} from './todo/todo-edit/todo-edit.component';
import {SharedModule} from './shared/shared.module';
import {ImgSliderModule} from './img-slider/img-slider.module';
import {ImgSlidedRoutingModule} from './img-slider/img-slided-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ColorComponent,
    ArticleComponent,
    LikeComponent,
    FooterComponent,
    NameCardComponent,
    ProgressBarComponent,
    CountdownTimerComponent,
    RatingBarComponent,
    TodoComponent,
    RegisterComponent,
    LoginComponent,
    TimelinesComponent,
    DictionaryPageComponent,
    DictionaryDetailComponent,
    TodoEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ImgSliderModule,
    ImgSlidedRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
