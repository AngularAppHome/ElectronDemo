import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import {ProductComponent} from './components/product/product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [
//     {
//         path: '',
//         component: HomeComponent
//     }
// ];
export const ROUTES: Routes = [
    // routes from pages
    {path: 'home', component: HomeComponent, data: {title: 'Home'}},
    {path: 'user', component: UserComponent, data: {title: 'User'}},
    {path: 'product',component: ProductComponent,data:{title:'Product'}},

    // default redirect
    {path: '**', redirectTo: '/home'}
];


@NgModule({
    imports: [RouterModule.forRoot(ROUTES, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
