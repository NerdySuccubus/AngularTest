import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductComponent} from './product/product.component';


const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'login', component: LoginComponent }, 
  { path: 'signup', component: SignUpComponent },
  { path: 'product/:id', component: ProductComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
