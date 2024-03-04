import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { DostavkaComponent } from './pages/dostavka/dostavka.component';
import { ActionsComponent } from './pages/actions/actions.component';
import { KontaktyComponent } from './pages/kontakty/kontakty.component';
import { CareerComponent } from './pages/career/career.component';
import { NewsComponent } from './pages/news/news.component';
import { HomeComponent } from './pages/home/home.component';
import { UserprofileComponent } from './pages/userprofile/userprofile.component';
import { AdminComponent } from './admin/admin.component';
import { AdminActionsComponent } from './admin/admin-actions/admin-actions.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminNewsComponent } from './admin/admin-news/admin-news-component';
import { AdminCareerComponent } from './admin/admin-career/admin-career.component';
import { AdminTovaryComponent } from './admin/admin-tovary/admin-tovary.component';


import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { AuthDialogComponent } from './components/auth-dialog/auth-dialog.component';

import { InputMaskModule } from '@ngneat/input-mask';



import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { getFirestore,provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { BasketDialogComponent } from './components/basket-dialog/basket-dialog.component';
import { TovaryComponent } from './pages/tovary/tovary.component';
import { TovaryInfoComponent } from './pages/tovary-info/tovary-info.component';
import { NewsInfoComponent } from './pages/news/news-info/news-info.component';
import { ActionInfoComponent } from './pages/actions/action-info/action-info.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    DostavkaComponent,
    ActionsComponent,
    KontaktyComponent,
    CareerComponent,
    NewsComponent,
    HomeComponent,
    UserprofileComponent,
    AdminComponent,
    AdminActionsComponent,
    AdminCategoryComponent,
    AdminNewsComponent,
    AdminCareerComponent,
    AdminTovaryComponent,
    AuthorizationComponent,
    AuthDialogComponent,
    BasketDialogComponent,
    TovaryComponent,
    TovaryInfoComponent,
    NewsInfoComponent,
    ActionInfoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule,
provideFirebaseApp(()=> initializeApp(environment.firebase)),
provideStorage(()=>getStorage()),
provideFirestore(()=>getFirestore()),
provideAuth(()=>getAuth()),

    InputMaskModule.forRoot({ inputSelector: 'input', isAsync: true }),
    HttpClientModule,
  

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
