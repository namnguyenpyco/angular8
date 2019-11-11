import { NavComponent } from './core/components/navigation/navigation.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { ItemComponent } from './item/item.component';
import { LoginService } from './services/login';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './signup/signup.component';
import { reducers } from './store/reducers';
import { LoginEffects } from './store/effects/login.effect';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ListEffects } from './store/effects/list.effect';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    ItemComponent,
    SignUpComponent,
  ],
  exports: [
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    HttpClientModule,

    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([LoginEffects, ListEffects]),

    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      features: {
        pause: false,
        lock: true,
        persist: true
      }
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
