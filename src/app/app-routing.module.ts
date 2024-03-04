import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


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
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { AuthGuard } from './shared/guards/auth/auth.guard';
import { TovaryComponent } from './pages/tovary/tovary.component';
import { TovaryInfoComponent } from './pages/tovary-info/tovary-info.component';
import { TovaryService } from './shared/services/tovary/tovary.service';
import { TovaryInfoResolver } from './shared/services/tovary/tovary-info.resolver';
import { NewsInfoComponent } from './pages/news/news-info/news-info.component';
import { NewsService } from './shared/services/news/news.service';
import { ActionInfoComponent } from './pages/actions/action-info/action-info.component';
import { ActionService } from './shared/services/action/action.service';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'actions',component:ActionsComponent},
  {path:'actions/:id', component:ActionInfoComponent,
resolve:{
  actionInfo:ActionService
}},
  {path:'about-us',component:AboutUsComponent},
  {path:'dostavka',component: DostavkaComponent},
  {path:'kontakty',component: KontaktyComponent},
  {path:'career',component: CareerComponent},
  {path:'news',component: NewsComponent},
  {path:'admin',component: AdminComponent},
  {path:'auth',component: AuthorizationComponent},

  {path: 'userprofile', component:UserprofileComponent,canActivate: [AuthGuard]},
  { path:'news/:id', component:NewsInfoComponent,
  resolve: {
    newsInfo: NewsService,
  },},
  
  { path: ':category', component: TovaryComponent },
  //  {
  //   path: ':category/:id',
  //   component: TovaryInfoComponent,
  //   resolve: {
  //     tovaryInfo: TovaryInfoResolver,
  //   }
  // },

  { path: 'admin', component: AdminComponent ,
  canActivate: [AuthGuard], children: [
    { path: 'category', component: AdminCategoryComponent },
    { path:'actions', component:AdminActionsComponent },
    {path:'tovary',component: AdminTovaryComponent},
    {path:'news',component: AdminNewsComponent},
   

    {path:'career',component: AdminCareerComponent},
    
    { path: '', pathMatch: 'full', redirectTo: 'actions' }
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
